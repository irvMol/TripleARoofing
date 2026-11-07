module.exports = {
  eleventyComputed: {
    breadcrumbs: (data) => {
      const base = data.site.siteUrl;
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${base}/services/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.title,
            item: `${base}${data.page.url}`,
          },
        ],
      };
    },
  },
};
