import { _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _ } from "./chunk~0a99e05c44.js";
import { _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~9aa05d2c7d.js";
import { _ } from "./chunk~4406a7b793.js";
import { _ } from "./chunk~a825a84845.js";
import { _, _ } from "./chunk~b00bc5ccc1.js";
import { _, _ } from "./chunk~70c16cc80c.js";
var _ = _(_()),
  _ = [`axis`],
  _ = (0, _.forwardRef)((_, _) =>
    _.createElement(_, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: _,
      tooltipPayloadSearcher: _,
      categoricalChartProps: _,
      ref: _,
    }),
  ),
  _ = _(_()),
  _ = class _ {
    m_steamInterface;
    GetPromotionTransport() {
      return this.m_steamInterface;
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    Init() {
      this.m_steamInterface = _(new _(_.WEBAPI_BASE_URL));
    }
  };
function _() {
  return _.Get().GetPromotionTransport().GetServiceTransport();
}
function _(_) {
  let _ = _(),
    _ = _.useContext(_);
  return _(_(_, _, _));
}
function _(_) {
  return _.getQueryData([`StoreItemCountryRestriction`, _(_)]);
}
var _ = _.createContext({
  loadStoreItemCountryRestriction: async (_, _) => await _(_).load(_),
});
function _(_, _, _) {
  return {
    queryKey: [`StoreItemCountryRestriction`, _(_)],
    queryFn: () => _.loadStoreItemCountryRestriction(_, _),
    enabled: !!_,
  };
}
var _;
function _(_) {
  return (
    (_ ||= new _.default(
      async (_) => {
        let _ = _.Init(_);
        _.Body().set_ids(_.map((_) => _.fromObject(_)));
        let _ = await _.GetCountryRestrictions(_, _);
        if (!_.BSuccess())
          throw `Failed to call store Item Country Restriction with details: ${_.GetErrorMessage()}`;
        let _ = new Map();
        return (
          _.Body()
            .results()
            .forEach((_) => {
              let _ = _.toObject();
              _.set(_(_._), _);
            }),
          _.map((_) => _.get(_(_)) ?? null)
        );
      },
      {
        maxBatchSize: 100,
        cache: !1,
      },
    )),
    _
  );
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = _ ? new Date(_ * 1e3) : new Date(_);
  _ || _.setDate(_.getDate() + 6);
  let _ = _.toLocaleString(`en-US`, {
      month: `short`,
    }),
    _ = _.getDate(),
    _ = _.toLocaleString(`en-US`, {
      month: `short`,
    }),
    _ = _.getDate();
  return _ === _ ? `${_} ${_} - ${_}` : `${_} ${_} - ${_} ${_}`;
}
function _(_) {
  let _ = _(_);
  return _.endsWith(`M`) || _.endsWith(`K`)
    ? `$${_}`
    : new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency: `USD`,
      }).format(Number(_));
}
function _(_) {
  let _;
  return (
    (_ =
      Math.abs(_) >= 1e6
        ? (_ / 1e6).toFixed(1) + `M`
        : Math.abs(_) >= 1e3
          ? (_ / 1e3).toFixed(1) + `K`
          : _.toFixed(2)),
    _
  );
}
var _ = `_7FQdtBvoXrk-`,
  _ = `liWV2kXLNXs-`,
  _ = `_9GZqUtz3ZYo-`,
  _ = `YwlJRL8zo70-`,
  _ = `NPZ9l-DM5gY-`,
  _ = `WLpp1N1Ds-o-`,
  _ = `cvVmT5yJexA-`,
  _ = `W1xCyDqwgmQ-`,
  _ = `K0zODM-isrk-`,
  _ = `KeyfsZAhLmk-`,
  _ = `H5V46OnRrg0-`,
  _ = `amUB9WH9CcY-`,
  _ = `rnzT6bsO-Xo-`,
  _ = `wrTT8gAV7a8-`,
  _ = `OMu8YgzmezU-`,
  _ = `OkBJ9lnHzW4-`,
  _ = `BbxClrMpUdY-`,
  _ = `awoPIVALX4Y-`,
  _ = `OKv0fNZ2-3M-`,
  _ = `V8TussbOeig-`,
  _ = `kOrWeMzNg6w-`,
  _ = `ry4i3BWpvYc-`,
  _ = `TkQowTDAabk-`;
