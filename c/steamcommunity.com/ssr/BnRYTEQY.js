function _(_, _, ..._) {
  console.assert
    ? _.length == 0
      ? console.assert(!!_, _)
      : console.assert(!!_, _, ..._)
    : _ || console.warn(_, ..._);
}
function _(_, _, ..._) {
  if (
    (console.assert
      ? _.length == 0
        ? console.assert(!!_, _)
        : console.assert(!!_, _, ..._)
      : _ || console.warn(_, ..._),
    !_)
  )
    throw _;
}
function _(_, _, ..._) {
  _(!1, _, ..._);
}
export { _, _, _ };
