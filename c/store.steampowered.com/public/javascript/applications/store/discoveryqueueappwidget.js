import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./historyutils.js";
import { _, _, _, _, _, _ } from "./main.js";
import { _, _ } from "./discoveryqueuestore.js";
import { _ } from "./preloaddiscoveryqueue.js";
var _ = _(_(), 1),
  _ = `KRPWJkCT3yY-`,
  _ = `U5rtQqR05aI-`,
  _ = _();
function _(_) {
  let { appID: _ } = _,
    _ = _(),
    [_] = _(`inqueue`, `0`),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    { eStoreDiscoveryQueueType: _, storePageFilter: _ } = _.useMemo(() => {
      if (_?.length > 0) {
        let _ = _.split(`_`),
          _ = Number(_[0]),
          _;
        return (
          _.length > 1 && (_ = _(_[1])),
          {
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
          }
        );
      }
      return {
        eStoreDiscoveryQueueType: 0,
        storePageFilter: void 0,
      };
    }, [_]),
    { showDiscoveryQueue: _ } = _(_, {
      includeAppID: _,
      storePageFilter: _,
    }),
    _ = _.useCallback(() => {
      _(!0);
    }, []),
    _ = _(_, _);
  return !_ || _
    ? null
    : (0, _.jsxs)(_, {
        focusable: !0,
        className: _,
        onSecondaryButton: _,
        onOKButton: _,
        onOKActionDescription: _(`#DiscoveryQueue_ResumeWizard`),
        onSecondaryActionDescription: _(`#Button_Close`),
        children: [
          (0, _.jsxs)(`div`, {
            onClick: _,
            className: _,
            children: [
              (0, _.jsx)(_, {}),
              _(`#DiscoveryQueue_ResumeWizard`),
              _?.length > 0 && `: ` + _,
            ],
          }),
          !_ &&
            (0, _.jsx)(`div`, {
              className: `CqOWAiNFmcU-`,
              onClick: _,
              children: (0, _.jsx)(_, {}),
            }),
        ],
      });
}
export { _ as default };
