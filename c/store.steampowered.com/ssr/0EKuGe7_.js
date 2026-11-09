var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({
    step: `initial`,
    setStep: () => {},
  });
function _() {
  return (0, _.useContext)(_);
}
function _() {
  let _ = _();
  return [_.step, _.setStep];
}
function _() {
  let _ = _();
  return [_.cartWideGiftInfo, _.onCartWideGiftInfoChange];
}
function _(_) {
  let {
      step: _,
      setStep: _,
      cartID: _,
      cartWideGiftInfo: _,
      onCartWideGiftInfoChange: _,
      children: _,
    } = _,
    _ = _.useMemo(
      () => ({
        step: _,
        setStep: _,
        cartWideGiftInfo: _,
        onCartWideGiftInfoChange: _,
      }),
      [_, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      cartID: _,
      children: _,
    }),
  });
}
var _ = {};
(_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _() {
  return _(_);
}
var _ = {
    include_basic_info: !0,
    include_assets: !0,
    include_platforms: !0,
    include_release: !0,
    include_included_items: !0,
  },
  _ = {
    ..._,
    include_included_items: !0,
    include_all_purchase_options: !0,
    included_item_data_request: _,
  };
function _() {
  let _ = _(),
    _ = _(),
    [_] = _(),
    { storeBrowseContext: _, cacheStoreItemData: _ } = _();
  return _(_(_, _, _, _, _));
}
function _(_, _, _, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => _(_, _, _, _, _, _),
    staleTime: 1 / 0,
    enabled: _.logged_in || !_(_),
  };
}
function _(_) {
  return !_?.cart_items?.length || _.cart_items.length === 0
    ? !1
    : _.cart_items.every(
        ({ store_item: _ }) =>
          _?.item_type == 1 &&
          !!(_.self_purchase_option || _.best_purchase_option)
            ?.requires_shipping,
      );
}
function _(_) {
  return !_?.cart_items?.length || _.cart_items.length === 0
    ? !1
    : _.cart_items.every(
        ({ store_item: _, gift_info: _ }) =>
          _?.item_type == 1 && (!!_?.accountid_giftee || !!_?.email_giftee),
      );
}
async function _(_, _, _, _, _, _) {
  let _ = _.Init(_);
  _(_) || _(_) || _(_)
    ? (_.Body().set_gidshoppingcart(_.gid),
      _ && _.Body().set_gift_info(_.fromObject(_)))
    : _(_) && _.Body().set_gidreplayoftransid(_.gid),
    _(_, _),
    _ && _(_, _);
  let _ = await _.ValidateCart(_, _);
  if (
    (_.BSuccess() ||
      console.warn(`Failed to validate shopping cart: ${_.GetEResult()}`),
    _ && _)
  )
    for (let _ of _.Body().cart_items()) _(_.store_item(), _);
  return _.Body().toObject();
}
export { _, _, _, _, _, _, _, _ };
