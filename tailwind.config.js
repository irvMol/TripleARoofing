module.exports = {
  content: [
    './src/**/*.{html,md,njk}',
    './src/_includes/**/*.{njk,html}',
    './src/_layouts/**/*.{njk,html}',
  ],

  safelist: ['fixed', 'flex', 'hidden', 'opacity-0', 'opacity-100'],
};
