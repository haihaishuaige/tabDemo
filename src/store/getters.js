const getters = {
  visitedViews: state => state.tagsView.visitedViews,
  router: state => state.tagsView.router,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters
