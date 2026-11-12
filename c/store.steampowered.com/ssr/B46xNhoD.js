var _ = _(_(), 1),
  _ = _(),
  _ = {
    eLocation: 0,
  },
  _ = _.createContext(_);
function _(_) {
  let { children: _, location: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      eLocation: _ ?? 0,
    },
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  return _().eLocation == 2;
}
function _() {
  let _ = _();
  return _.eLocation == 2 || _.eLocation == 1;
}
function _(_) {
  return _.section_type === `crosspromotesalepage`
    ? (_.sale_page_cross_promo_sales ?? [])
    : [];
}
function _(_) {
  return _(_).map((_) => ({
    ..._,
    sale_page_cross_promo_sales: [_],
    capsules: _.capsules ?? [],
  }));
}
function _(_) {
  return _(_)[0]?.event_gid || void 0;
}
function _(_) {
  return _(_).flatMap((_) => _.event_gid || []);
}
function _(_) {
  return _.GetSaleSections().flatMap((_) =>
    _.disable_section || _.hide_section ? [] : _(_),
  );
}
function _(_) {
  return (
    _.section_type === `crosspromotesalepage` &&
    !!_.sale_page_cross_promo_side_by_side
  );
}
function _(_) {
  return (
    _.section_type === `crosspromotesalepage` &&
    !!_.sale_page_cross_promo_in_sale_events
  );
}
function _(_) {
  return _.GetSaleSections().filter(
    (_) => _(_) && !_.disable_section && !_.hide_section,
  );
}
function _(_) {
  let _ = _(_);
  return _.length > 0 && _.every((_) => (_.capsules?.length ?? 0) > 0);
}
function _(_, _) {
  return !_(_) || !_(_)[0]?.clan_account_id ? `setup` : _ ? null : `missing`;
}
function _(_) {
  let _ = _(_)[0];
  return !!_?.event_gid && (!!_.featured_app_tagid || !!_.capsules?.length);
}
function _(_, _) {
  return _
    ? _(`#Sale_CrossPromoSale_SectionTitle`, _.GetNameWithFallback(_) ?? ``)
    : _(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
var _ = [`logo_left`, `logo_top`, `event_capsule`],
  _ = `crosspromo_layout`;
function _(_, _, _) {
  let _ = _(_, _);
  return _ &&
    (_ === `logo_left` || _ === `logo_top`) &&
    (!_.strBackgroundURL || !_.strLogoURL)
    ? `event_capsule`
    : _;
}
function _(_, _) {
  let _ = _.find((_) => _ === _),
    _ = _.sale_page_cross_promo_layout;
  return _ ?? (_ && _ !== `sale_banner` ? _ : `event_capsule`);
}
function _(_, _) {
  let _ = _.GetELanguageFallback(_),
    _ =
      _.jsondata.localized_sale_cross_promo_logo_image?.findIndex((_) => !!_) ??
      -1;
  return (
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    (_ >= 0 ? _.GetImageURL(`sale_cross_promo_logo`, _) : void 0) ||
    _.GetImageURL(`sale_logo`, _) ||
    _.GetImageURL(`sale_logo`, _)
  );
}
function _(_) {
  return 3;
}
function _(_) {
  return _ === `event_capsule`;
}
function _(_) {
  return _ === `event_capsule`;
}
function _(_, _) {
  return !_ || _.startsWith(`https://`) || _.startsWith(`http://`)
    ? _
    : `${_.CLAN_CDN_ASSET_URL}images/clan/${_}/${_}`;
}
var _ = `poster`,
  _ = `${_}.avif`,
  _ = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function _(_) {
  let _ = _.video_webm_src || _.video_mp4_src;
  if (!_ || _.image?.includes(`.${_}.`)) return _.image;
  let _ = _.exec(_);
  return _ ? `${_[1]}.${_}` : _.image;
}
