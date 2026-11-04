var _ = _(_(), 1),
  _ = `dmzX-yWLrRg-`,
  _ = `lzBKqrR1yUg-`,
  _ = `ehkvAMvvf98-`,
  _ = `ySgNaS6YeO0-`,
  _ = `FzLAmnNBvzY-`,
  _ = _();
function _(_) {
  return !!_ && _ !== 3;
}
function _(_) {
  return (
    _.subject_type === 3 &&
    _.coordinates?.ugc_content_type === 16 &&
    !!_.reports?.some((_) => _.report_reason === 16)
  );
}
function _(_) {
  return _(_.status)
    ? (0, _.jsxs)(`span`, {
        className: (0, _.default)(_, _.className),
        children: [_.label, _.status === 1 && `?`],
      })
    : null;
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `Terrorism`,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `CSAM`,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    status: _.status,
    className: _,
    label: `Violent threat`,
  });
}
function _() {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    children: `Malware?`,
  });
}
function _(_) {
  let { subject: _ } = _,
    _ = _(_);
  return !_(_.terrorism_status) &&
    !_(_.csam_status) &&
    !_(_.credible_threat_of_violence_status) &&
    !_
    ? null
    : (0, _.jsxs)(_, {
        wrap: `wrap`,
        gap: `1`,
        children: [
          (0, _.jsx)(_, {
            status: _.terrorism_status,
          }),
          (0, _.jsx)(_, {
            status: _.csam_status,
          }),
          (0, _.jsx)(_, {
            status: _.credible_threat_of_violence_status,
          }),
          _ && (0, _.jsx)(_, {}),
        ],
      });
}
export { _, _, _, _ };
