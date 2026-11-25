import { _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~bd90a5fce7.js";
import { _, _, _, _, _, _, _, _ } from "./chunk~6110f63e8e.js";
import { _ } from "./chunk~5ff8b33a2d.js";
var _ = _(_()),
  _ = _();
function _() {
  let [_] = (0, _.useState)(_(`testpage`, `application_config`)),
    [_] = (0, _.useState)(_(`testtemplate`, `application_config`));
  return [_, _];
}
function _() {
  let [_] = (0, _.useState)(_(`deadlines`, `application_config`)),
    [_] = (0, _.useState)(_(`publisher_name`, `application_config`)),
    [_] = (0, _.useState)(parseInt(_(`publisher_id`, `application_config`))),
    [_] = (0, _.useState)(
      parseInt(_(`publisher_onboarded`, `application_config`)),
    );
  return [_, _, _, _];
}
function _(_) {
  let [_, _, _, _] = _(),
    [_, _] = _();
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                `Steamworks Document Communication`,
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              ],
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _(_, _),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: `Important Notice`,
                  }),
                  (0, _.jsx)(`div`, {
                    className: void 0,
                    children: `Information in this document does not constitute tax, legal, or other professional advice. If you have other questions, please contact your tax, legal, or other professional advisor.`,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: `Third-party KYC vendor`,
                  }),
                  (0, _.jsx)(`div`, {
                    className: void 0,
                    children: `Valve uses a third-party KYC provider for KYC information collection and verification.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
export { _ as default };
