/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r, tt as i } from "./libraries.js";
import { B as a } from "./partnerevent.js";
import { n as o, t as s } from "./apppartnereventspage.js";
import { n as c, t as l } from "./partnereventstore.js";
import {
  Mb as u,
  Mn as d,
  Rx as f,
  a as p,
  i as m,
  qb as h,
  rx as g,
} from "./main.js";
var _ = e(t()),
  v = e(i()),
  y = class e extends l {
    async DeleteOldAnnouncement(e, t) {
      let n = new URLSearchParams();
      n.append(`sessionid`, h());
      let r =
          g.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          t,
        i = await v.default.post(r, n);
      if (i.data.success != 1) throw i.data;
      return (this.RemoveGIDFromList(e, a + t), i.data);
    }
    static sm_Instance;
    static sm_SummaryInstance;
    static Get() {
      return (
        e.sm_Instance || ((e.sm_Instance = new e()), e.sm_Instance.Init()),
        e.sm_Instance
      );
    }
    static GetSummaryStore() {
      return (
        e.sm_SummaryInstance ||
          ((e.sm_SummaryInstance = new e(!0)), e.sm_SummaryInstance.Init()),
        e.sm_SummaryInstance
      );
    }
  },
  b = `rde3mdS-0gs-`,
  x = n();
function S(e) {
  let { event: t, closeModal: n } = e,
    r = p();
  return (0, x.jsx)(s, {
    initialEvent: t,
    bShowOnlyInitialEvent: !0,
    partnerEventStore: c,
    emoticonStore: r,
    showAppHeader: !0,
    closeModal: n,
  });
}
function C(e, t) {
  d((0, x.jsx)(S, { event: e }), t);
}
var w = class extends _.Component {
  m_refFocus = _.createRef();
  componentDidMount() {
    this.props.fnClose &&
      (document.addEventListener(`keydown`, this.escFunction, !1),
      this.m_refFocus.current && this.m_refFocus.current.focus());
  }
  componentWillUnmount() {
    this.props.fnClose &&
      document.removeEventListener(`keydown`, this.escFunction, !1);
  }
  escFunction(e) {
    let { fnClose: t } = this.props;
    e.keyCode === 27 && t && t();
  }
  OnBackgroundClick(e) {
    e.currentTarget == e.target && this.props.fnClose();
  }
  render() {
    let { event: e, langOverride: t, isPreview: n } = this.props;
    return (0, x.jsx)(`div`, {
      ref: this.m_refFocus,
      className: b,
      onClick: this.OnBackgroundClick,
      children: (0, x.jsx)(m, {
        children: (r) =>
          (0, x.jsx)(
            o,
            {
              event: e,
              emoticonStore: r,
              partnerEventStore: y.Get(),
              langOverride: t,
              isPreview: n,
              bDisableBroadcastPlayer: !1,
            },
            e.GID,
          ),
      }),
    });
  }
};
(u([f], w.prototype, `escFunction`, null),
  u([f], w.prototype, `OnBackgroundClick`, null),
  (w = u([r], w)));
export { w as n, y as r, C as t };
