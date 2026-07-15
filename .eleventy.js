const Image = require('@11ty/eleventy-img');
const path = require('path');

module.exports = function (eleventyConfig) {
  // 1. Keep your existing passthrough for non-processed assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addPassthroughCopy('src/assets/js');

  // 2. Add the Responsive Image Shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    'image',
    async function (src, alt, sizes = '100vw') {
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
      };

      return Image.generateHTML(metadata, imageAttributes);
    },
  );

  // 3. Add a date filter (for copyright year, etc.)
  eleventyConfig.addFilter('date', (dateValue, format = 'yyyy') => {
    let dt =
      dateValue === 'now'
        ? DateTime.now()
        : DateTime.fromJSDate(new Date(dateValue));
    return dt.toFormat(format);
  });

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
