var _ = _(_(), 1),
  _ = _(),
  _ = (0, _.createContext)({
    Button: `basic`,
    Checkbox: `basic`,
    Combobox: `basic`,
    LoadingSpinner: `basic`,
    SegmentedControl: `basic`,
    Select: `basic`,
    TextArea: `basic`,
    TextInput: `basic`,
  });
function _(_) {
  let { variants: _ = {}, children: _ } = _,
    _ = (0, _.use)(_);
  return (0, _.jsx)(_, {
    value: {
      ..._,
      ..._,
    },
    children: _,
  });
}
function _(_) {
  return (0, _.use)(_)[_];
}
function _(_, _) {
  let _ = _(_);
  return !_ || _ === "default" ? _ : _;
}
export { _, _ };
