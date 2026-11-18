var _ = _(_()),
  _ = 50,
  _ = 604800,
  _ = class _ {
    constructor() {
      _(this);
    }
    m_bEmoticonListRequested = !1;
    m_bInitialized = !1;
    m_rtMostRecentEmoticon = void 0;
    static sm_EmoticonRegex = RegExp(`ː([a-zA-Z0-9_\\-]+)ː`, `g`);
    static sm_UnvalidatedEmoticonRegex = RegExp(
      `(?:ː|:)([a-zA-Z0-9_\\-]+)(?:ː|:)`,
      `g`,
    );
    m_rgEmoticons = [];
    m_setEmoticonOwned = new Set();
    m_rgFlairs = [];
    m_rgRecentEmoticons = void 0;
    m_rgStickers = [];
    m_rgRecentStickers = void 0;
    m_rgEffects = [];
    m_rtLastStickerOrEffect = -(2 ** 53 - 1);
    m_emoticonTrackerCallback = null;
    m_stickerTrackerCallback = null;
    static GetEmoticonURL(_, _) {
      return _(_, _);
    }
    static GetEmoticonReplaceRegex() {
      return _.sm_EmoticonRegex;
    }
    static GetUnvalidatedEmoticonReplaceRegex() {
      return _.sm_UnvalidatedEmoticonRegex;
    }
    static BEmoticonFilterMatch(_, _) {
      return `:${_.name_normalized || _.name}:`.indexOf(_.toLowerCase()) !== -1;
    }
    static FilterEmoticons(_, _) {
      return !_ || _ === `:`
        ? _
        : _.filter((_) => _.BEmoticonFilterMatch(_, _));
    }
    static BStickerFilterMatch(_, _) {
      return _.name.toLowerCase().indexOf(_.toLowerCase()) > -1;
    }
    static FilterStickers(_, _) {
      return _ ? _.filter((_) => _.BStickerFilterMatch(_, _)) : _;
    }
    SearchEmoticons(_, _ = 25, _ = !0) {
      this.UpdateEmoticonList();
      function _(_) {
        return _.name_normalized || _.name;
      }
      _ = _.toLocaleLowerCase();
      let _ = this.recent_emoticons.filter((_) => !_ || _(_).startsWith(_)),
        _ = this.recent_emoticons.filter((_) => !_ && _(_).indexOf(_) !== -1),
        _ = this.m_rgEmoticons.filter((_) => !_ || _(_).startsWith(_)),
        _ = this.m_rgEmoticons.filter((_) => !_ && _(_).indexOf(_) !== -1),
        _ = new Set(),
        _ = [];
      function _(_, _, _) {
        return _.length >= _
          ? !1
          : (_.has(_) ||
              (_.add(_),
              _.push({
                name: _(_),
                recent: _,
                new: _,
              })),
            !0);
      }
      function _(_, _, _) {
        for (let _ of _) if (!_(_, _, _(_))) break;
      }
      return (
        _(_, !0, (_) => !(_.last_used || !_.time_received)),
        _(_, !1, () => !1),
        _(_, !0, (_) => !(_.last_used || !_.time_received)),
        _(_, !1, () => !1),
        _
      );
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    async BAwaitInitialized() {
      return (
        this.m_bInitialized ||
          (this.UpdateEmoticonList(), await _(() => this.m_bInitialized)),
        this.m_bInitialized
      );
    }
    GetTimeReceivedNewestEmoticon() {
      return (this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon);
    }
    GetTimeReceivedForStickerOrEffect() {
      return this.m_rtLastStickerOrEffect;
    }
    UpdateEmoticonList() {
      this.m_bInitialized || this.RequestEmoticonList();
    }
    get emoticon_list() {
      return (this.UpdateEmoticonList(), this.m_rgEmoticons);
    }
    BHasEmoticon(_) {
      return this.m_setEmoticonOwned.has(_);
    }
    get flair_list() {
      return (this.UpdateEmoticonList(), this.m_rgFlairs);
    }
    GetStickerList() {
      return this.m_rgStickers;
    }
    GetEffectList() {
      return this.m_rgEffects;
    }
    GetFlairListByGroupID(_) {
      return this.m_rgFlairs.filter((_) => _.flairGroupID === _);
    }
    get recent_emoticons() {
      return this.m_rgRecentEmoticons ?? this.BuildRecentEmoticonList();
    }
    get recent_stickers() {
      return this.m_rgRecentStickers ?? this.BuildRecentStickerList();
    }
    SetEmoticonTrackerCallback(_) {
      this.m_emoticonTrackerCallback = _;
    }
    SetStickerTrackerCallback(_) {
      this.m_stickerTrackerCallback = _;
    }
    TrackEmoticonUsage(_, _) {
      if (!this.m_bInitialized) return;
      this.m_emoticonTrackerCallback && this.m_emoticonTrackerCallback(_, _);
      let _ = new Map(),
        _ = /\[emoticon\]([^[]*)/g,
        _;
      for (; (_ = _.exec(_));) {
        let _ = _.get(_[1]) || 0;
        _.set(_[1], _ + 1);
      }
      let _ = !1;
      if (_.size) {
        if (this.m_rgRecentEmoticons !== void 0)
          for (let _ of this.m_rgRecentEmoticons) {
            let _ = _.get(_.name);
            _ !== void 0 &&
              ((_.last_used = _),
              (_.use_count = (_.use_count ?? 0) + _),
              _.delete(_.name),
              _.time_received && ((_ = !0), delete _.time_received));
          }
        if (_.size)
          for (let _ of this.m_rgEmoticons) {
            let _ = _.get(_.name);
            _ !== void 0 &&
              ((_.last_used = _),
              (_.use_count = (_.use_count ?? 0) + _),
              delete _.time_received,
              this.m_rgRecentEmoticons !== void 0 &&
                this.m_rgRecentEmoticons.push(_));
          }
        if (
          this.m_rgRecentEmoticons !== void 0 &&
          (this.BuildRecentEmoticonList(), _)
        ) {
          this.m_rtMostRecentEmoticon = void 0;
          for (let _ of this.m_rgRecentEmoticons)
            !_.last_used &&
              _.time_received &&
              (!this.m_rtMostRecentEmoticon ||
                _.time_received > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = _.time_received);
        }
      }
    }
    TrackStickerUsage(_, _) {
      if (!this.m_bInitialized) return;
      this.m_stickerTrackerCallback && this.m_stickerTrackerCallback(_, _);
      let _ = this.m_rgStickers.find(({ name: _ }) => _ === _);
      _ &&
        ((_.last_used = _),
        (_.use_count = (_.use_count ?? 0) + 1),
        delete _.time_received,
        this.BuildRecentStickerList());
    }
    RequestEmoticonList() {
      !this.m_bEmoticonListRequested &&
        this.BTransportReady() &&
        ((this.m_bEmoticonListRequested = !0),
        this.RequestEmoticonListInternal());
    }
    BuildRecentEmoticonList() {
      return (
        (this.m_rgRecentEmoticons = this.BuildRecentList(this.m_rgEmoticons)),
        this.m_rgRecentEmoticons
      );
    }
    BuildRecentStickerList() {
      return (
        (this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers)),
        this.m_rgRecentStickers
      );
    }
    BuildRecentList(_) {
      let _ = this.GetServerTime() - _,
        _ = _.filter(({ last_used: _, time_received: _ }) => _ || (_ && _ > _));
      return (
        _.sort(
          (_, _) =>
            (_.last_used || _.time_received || 0) -
            (_.last_used || _.time_received || 0),
        ),
        _.slice(0, _)
      );
    }
    OnEmoticonListReceived(_) {
      ((this.m_rgFlairs = []),
        (this.m_rgEmoticons = []),
        (this.m_rgRecentEmoticons = void 0),
        (this.m_rtMostRecentEmoticon = void 0));
      let _ = this.GetServerTime() - _;
      for (let _ of _) {
        let _ = _.name;
        if (_.startsWith(`^`)) {
          let _ = _.match(new RegExp(/:(.*):/)),
            _ = _.match(new RegExp(/\^(.*)\^/));
          _ &&
            _ &&
            this.m_rgFlairs.push({
              name: _[1],
              flairGroupID: _[1],
            });
        } else {
          let _ = _.time_received;
          (!_.last_used && _ && _ > _
            ? (!this.m_rtMostRecentEmoticon ||
                _ > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = _)
            : delete _.time_received,
            this.m_rgEmoticons.push(_));
        }
      }
      ((this.m_setEmoticonOwned = new Set(
        this.m_rgEmoticons.map((_) => _.name_normalized || _.name),
      )),
        (this.m_bInitialized = !0),
        (this.m_bEmoticonListRequested = !1));
    }
  };
(_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_rtMostRecentEmoticon`, void 0),
  _([_], _.prototype, `m_rtLastStickerOrEffect`, void 0),
  _([_], _.prototype, `TrackEmoticonUsage`, null));
var _ = _(_());
function _(_, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _();
  _.current = _;
  let [_, _] = (0, _.useState)(void 0),
    {
      include_assets: _,
      include_release: _,
      include_platforms: _,
      include_all_purchase_options: _,
      include_screenshots: _,
      include_trailers: _,
      include_ratings: _,
      include_tag_count: _,
      include_reviews: _,
      include_basic_info: _,
      include_supported_languages: _,
      include_full_description: _,
      include_included_items: _,
      include_assets_without_overrides: _,
      apply_user_filters: _,
      include_links: _,
      include_extra_details: _,
      include_optin_registration_tags: _,
    } = _;
  if (
    ((0, _.useEffect)(() => {
      let _ = {
          include_assets: _,
          include_release: _,
          include_platforms: _,
          include_all_purchase_options: _,
          include_screenshots: _,
          include_trailers: _,
          include_ratings: _,
          include_tag_count: _,
          include_reviews: _,
          include_basic_info: _,
          include_supported_languages: _,
          include_full_description: _,
          include_included_items: _,
          include_assets_without_overrides: _,
          apply_user_filters: _,
          include_links: _,
          include_extra_details: _,
          include_optin_registration_tags: _,
        },
        _ = null;
      return (
        !_ ||
          _ < 0 ||
          _.Get().BHasStoreItem(_, _, _) ||
          (_ !== void 0 && _ && _ == _.current) ||
          (_ !== _.current && (_(void 0), (_.current = _)),
          (_ = _.default.CancelToken.source()),
          _.Get()
            .QueueStoreItemRequest(_, _, _)
            .then((_) => {
              (!_?.token.reason && _.current === _ && _(_ == 1), _());
            })),
        () => _?.cancel(`useStoreItemCache: unmounting`)
      );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    !_)
  )
    return [null, 2];
  if (_ === !1 || _.Get().BIsStoreItemMissing(_, _)) return [void 0, 2];
  if (!_.Get().BHasStoreItem(_, _, _)) return [void 0, 1];
  let _ = _.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
  return _ ? [_, 3] : [null, 2];
}
function _(_, _, _) {
  return _(_, 0, _, _);
}
