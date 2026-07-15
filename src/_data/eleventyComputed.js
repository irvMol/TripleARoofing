module.exports = {
  permalink: (data) => {
    if (data.draft) {
      return false;
    }
    return data.permalink;
  },
};
