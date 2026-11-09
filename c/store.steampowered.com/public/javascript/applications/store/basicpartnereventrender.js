import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./partnerevent.js";
import { _, _ } from "./apppartnereventspage.js";
import { _, _ } from "./partnereventstore.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = class _ extends _ {
    async DeleteOldAnnouncement(_, _) {
      let _ = new URLSearchParams();
      _.append(`sessionid`, _());
      let _ =
          _.COMMUNITY_BASE_URL +
          `/gid/` +
          _.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          _,
        _ = await _.default.post(_, _);
      if (_.data.success != 1) throw _.data;
      return (this.RemoveGIDFromList(_, _ + _), _.data);
    }
    static sm_Instance;
    static sm_SummaryInstance;
    static Get() {
      return (
        _.sm_Instance || ((_.sm_Instance = new _()), _.sm_Instance.Init()),
        _.sm_Instance
      );
    }
    static GetSummaryStore() {
      return (
        _.sm_SummaryInstance ||
          ((_.sm_SummaryInstance = new _(!0)), _.sm_SummaryInstance.Init()),
        _.sm_SummaryInstance
      );
    }
  },
  _ = `rde3mdS-0gs-`,
  _ = _();
function _(_) {
  let { event: _, closeModal: _ } = _,
    _ = _();
  return (0, _.jsx)(_, {
    initialEvent: _,
    bShowOnlyInitialEvent: !0,
    partnerEventStore: _,
    emoticonStore: _,
    showAppHeader: !0,
    closeModal: _,
  });
}
function _(_, _) {
  _(
    (0, _.jsx)(_, {
      event: _,
    }),
    _,
  );
}
var _ = class extends _.Component {
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
  escFunction(_) {
    let { fnClose: _ } = this.props;
    _.keyCode === 27 && _ && _();
  }
  OnBackgroundClick(_) {
    _.currentTarget == _.target && this.props.fnClose();
  }
  render() {
    let { event: _, langOverride: _, isPreview: _ } = this.props;
    return (0, _.jsx)(`div`, {
      ref: this.m_refFocus,
      className: _,
      onClick: this.OnBackgroundClick,
      children: (0, _.jsx)(_, {
        children: (_) =>
          (0, _.jsx)(
            _,
            {
              event: _,
              emoticonStore: _,
              partnerEventStore: _.Get(),
              langOverride: _,
              isPreview: _,
              bDisableBroadcastPlayer: !1,
            },
            _.GID,
          ),
      }),
    });
  }
};
(_([_], _.prototype, `escFunction`, null),
  _([_], _.prototype, `OnBackgroundClick`, null),
  (_ = _([_], _)));
