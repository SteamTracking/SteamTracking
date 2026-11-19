function e(...e) {
  return e.reduce(
    (e, n) =>
      n
        ? typeof n == `string`
          ? e
            ? `${e} ${n}`
            : n
          : typeof n == `object`
            ? e
              ? `${e} ${t(n)}`
              : t(n)
            : e
        : e,
    ``,
  );
}
function t(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] ? (t ? `${t} ${n}` : n) : t),
    ``,
  );
}
export { e as t };
