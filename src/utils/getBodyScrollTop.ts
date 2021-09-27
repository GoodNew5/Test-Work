/**
 * safely get scrollTop value for the body element
 */
const getBodyScrollTop = () =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0

export { getBodyScrollTop }
