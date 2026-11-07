const Image = require('@11ty/eleventy-img');
const path = require('path');
const fs = require('fs');
const faDir = path.join(
  path.dirname(require.resolve('@fortawesome/fontawesome-free/package.json')),
  'svgs',
);

module.exports = function (eleventyConfig) {
  // 1. Keep your existing passthrough for non-processed assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  eleventyConfig.addWatchTarget('src/_gallery/');

  // 2. Add the Responsive Image Shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    'image',
    async function (src, alt, sizes = '100vw', className = '') {
      let fullSrc = path.join(__dirname, 'src', src);

      let metadata = await Image(fullSrc, {
        widths: [400, 800, 1200],
        formats: ['webp', 'jpeg'],
        outputDir: './_site/img/',
        urlPath: '/img/',
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
        class: className,
      };

      return Image.generateHTML(metadata, imageAttributes);
    },
  );
  // 3. Date helpers: footer year and sitemap dates
  eleventyConfig.addShortcode('year', () => String(new Date().getFullYear()));
  eleventyConfig.addFilter('isoDate', (d) =>
    new Date(d).toISOString().slice(0, 10),
  );
  // 4. Inline SVG icons from Font Awesome Free
  eleventyConfig.addShortcode('icon', (set, name, classes = 'w-4 h-4') =>
    fs
      .readFileSync(path.join(faDir, set, `${name}.svg`), 'utf8')
      .replace(/<!--.*?-->/s, '')
      .replace(
        '<svg',
        `<svg class="${classes}" fill="currentColor" aria-hidden="true" focusable="false"`,
      ),
  );

  // 5. JSON dump filter, for embedding data (e.g. gallery) as inline JSON
  eleventyConfig.addFilter('dump', (value) => JSON.stringify(value));

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    serverOptions: {
      host: '0.0.0.0',
      port: 8080,
    },
  };
};
