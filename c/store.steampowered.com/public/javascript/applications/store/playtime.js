import { _, _ } from "./main.js";
function _(_, _ = `#Played_`, _ = !1) {
  if (_ >= 120) {
    let _ = _ / 60;
    _ = Math.round(_ * 10) / 10;
    let _ = _.GetPreferredLocales(),
      _ = _.toLocaleString(_, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      });
    return _(_ + `Hours`, _);
  }
  return _(_ && _ == 1 ? _ + `Minute` : _ + `Minutes`, _);
}
export { _ };
