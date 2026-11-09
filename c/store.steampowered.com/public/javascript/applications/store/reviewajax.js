import { _ } from "./errors.js";
import { _ } from "./main.js";
async function _(_, _) {
  let _ = await _.json().catch(() => ``);
  if (!_ || typeof _ != `object`) throw new _(76, `Malformed ${_} response`);
  let _ = _;
  if (_.success != 1) {
    let _ = _.msg ? `: ${_.msg}` : ``;
    throw new _(_.success, `Error ${_.success} from ${_}${_}`);
  }
  return _;
}
function _(_) {
  _.set(`origin`, window.location.origin);
}
async function _(_, _, _) {
  let _ = new FormData();
  Object.entries(_).forEach((_) => {
    if (Array.isArray(_[1])) for (let _ of _[1]) _.append(_[0] + `[]`, _);
    else _.append(_[0], _[1]);
  });
  let _ = new URL(_);
  return (
    _(_.searchParams),
    _(
      await fetch(_, {
        method: `POST`,
        body: _,
        credentials: `include`,
      }),
      _,
    )
  );
}
async function _(_, _, _) {
  if (!_) throw new _(8, `Bad appid`);
  let _ = new URLSearchParams({
    _: _.LANGUAGE,
    ..._,
  });
  return _(
    await fetch(`${_.STORE_BASE_URL}${_}/${_}?${_.toString()}`, {
      credentials: `include`,
    }),
    _,
  );
}
export { _, _, _, _ };
