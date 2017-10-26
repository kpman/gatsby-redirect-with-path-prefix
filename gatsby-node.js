exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;

  createRedirect({
    fromPath: `/redirect-page`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/page-2/`,
  });

  createRedirect({
    fromPath: `/redirect-page/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/page-2/`,
  });
};
