/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, l as r, tt as i } from "./chunk~01cfc309bf.js";
import { i as a } from "./chunk~cf3721cc1c.js";
import "./chunk~8681f5c764.js";
import { t as o } from "./chunk~eefd71512b.js";
import {
  $b as s,
  Jn as c,
  Kb as l,
  L as u,
  Mr as d,
  Mu as f,
  Yu as p,
  al as m,
  i as h,
  nx as g,
  t as _,
  yn as v,
} from "./main.js";
var y = e(i()),
  b = e(t()),
  x = n(),
  S = (e) => {
    let { bShowOnlyInitialEvent: t } = e,
      n = s(),
      r = u();
    return (0, x.jsx)(m, {
      children: (0, x.jsx)(C, {
        ...e,
        bShowOnlyInitialEvent: t || n,
        tracker: r,
      }),
    });
  },
  C = class extends b.Component {
    state = { bLoading: !1, eventModel: this.props.eventModel };
    m_refParent = b.createRef();
    m_cancelSignal = y.default.CancelToken.source();
    componentDidMount() {
      this.state.eventModel || this.setState({ bLoading: !0 }, this.LoadEvent);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.add(c);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.remove(c);
    }
    GetBodyElement() {
      return this.m_refParent.current
        ? this.m_refParent.current.closest(`body`)
        : null;
    }
    async LoadEvent() {
      let {
        appid: e,
        clanSteamID: t,
        announcementGID: n,
        partnerEventStore: r,
        additionalParams: i,
      } = this.props;
      r.LoadAdjacentPartnerEventsByAnnouncement(
        n,
        t,
        e,
        0,
        3,
        i,
        this.m_cancelSignal,
      )
        .then((e) => {
          e.length > 0
            ? this.setState(
                { bLoading: !1, eventModel: e[0] },
                this.HandleReadEvent,
              )
            : (this.props.onEventNotFound && this.props.onEventNotFound(),
              this.setState({ bLoading: !1 }));
        })
        .catch((e) => {
          let t = p(e);
          (console.error(`EventInfiniteScrollModal failed ` + t.strErrorMsg, t),
            this.setState({ bLoading: !1 }));
        });
    }
    async HandleReadEvent() {
      let { eventModel: e } = this.state,
        { trackingLocation: t, tracker: n } = this.props;
      e && e.BIsPartnerEvent() && (n.RecordEventRead(e, t ?? 0), n.Flush());
    }
    render() {
      let { bShowOnlyInitialEvent: e } = this.props,
        { bLoading: t, eventModel: n } = this.state;
      if (t)
        return (0, x.jsx)(v, {
          active: !0,
          children: (0, x.jsx)(`div`, {
            className: _,
            style: { height: `400px` },
            children: (0, x.jsx)(o, {}),
          }),
        });
      let {
          closeModal: r,
          appid: i,
          clanSteamID: s,
          className: c,
          partnerEventStore: l,
          showAppHeader: u,
          bPrimaryPageFeature: p,
          additionalParams: m,
          eventClassName: y,
        } = this.props,
        b;
      g.IN_CLIENT &&
        n?.appid &&
        (f.Get().HintLoad(),
        f.Get().BOwnsApp(n.appid) &&
          (b = (e) => d(e, `steam://nav/games/details/` + n.appid)));
      let S = (0, x.jsx)(h, {
        children: (t) =>
          (0, x.jsx)(a, {
            initialEvent: n,
            appid: i,
            clanSteamID: s,
            partnerEventStore: l,
            emoticonStore: t,
            closeModal: p ? void 0 : r,
            showAppHeader: u,
            bShowOnlyInitialEvent: e,
            additionalParams: m,
            eventClassName: y,
            onAppIconClick: b,
          }),
      });
      return p
        ? S
        : (0, x.jsx)(v, {
            active: !0,
            children: (0, x.jsx)(`div`, { className: c, children: S }),
          });
    }
  };
C = l([r], C);
export { S as t };
