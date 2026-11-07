const fs = require('fs');
const path = require('path');
const Image = require('@11ty/eleventy-img');
// Each gallery project is one JSON file in src/_gallery/ (managed in the CMS).
const GALLERY_DIR = path.join(__dirname, '..', '_gallery');
// Shrink an uploaded photo for the lightbox (phone photos can be 5MB+).
async function optimize(src) {
  const metadata = await Image(path.join(__dirname, '..', src), {
    widths: [1600],
    formats: ['jpeg'],
    sharpJpegOptions: { quality: 80 },
    outputDir: './_site/img/',
    urlPath: '/img/',
  });
  return metadata.jpeg[0].url;
}
module.exports = async function () {
  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => file.endsWith('.json'));
  const projects = files.map((file) =>
    JSON.parse(fs.readFileSync(path.join(GALLERY_DIR, file), 'utf8')),
  );
  // Newest projects first
  projects.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  for (const project of projects) {
    project.media = project.media || [];
    // No cover chosen: use the first photo (or the first video's poster)
    if (!project.cover) {
      const first = project.media.find((item) => item.image || item.poster);
      project.cover = first ? first.image || first.poster : '';
    }
    for (const item of project.media) {
      const file = item.image || item.src;
      // Skip anything whose file was deleted, so one bad entry can't break the build
      if (!file || !fs.existsSync(path.join(__dirname, '..', file))) {
        console.warn(
          `[gallery] "${project.title}": missing file ${file}, skipped`,
        );
        item.missing = true;
        continue;
      }
      if (item.type === 'image') {
        item.image = await optimize(item.image);
      }
    }
    project.media = project.media.filter((item) => !item.missing);
  }
  return projects.filter(
    (project) =>
      project.cover && fs.existsSync(path.join(__dirname, '..', project.cover)),
  );
};
