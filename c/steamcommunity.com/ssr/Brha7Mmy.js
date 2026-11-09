var _ = _(_());
function _(_) {
  return _
    ? !!(
        _.related_items &&
        _.related_items.standalone_demo_appid &&
        _.related_items.standalone_demo_appid.length > 0 &&
        _.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function _(_) {
  return !_ || !_.related_items?.standalone_demo_appid
    ? []
    : _.related_items?.standalone_demo_appid;
}
function _(_, _ = !1) {
  if (_)
    return _ && _(_)
      ? `${_.STORE_BASE_URL}app/${_(_)[0]}`
      : `${_.STORE_BASE_URL}${_.store_url_path}`;
}
function _() {
  window.location.href = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var _ = `700px`;
function _() {
  return window.innerWidth < parseInt(_);
}
function _() {
  let _ = _();
  return (
    _.useEffect(
      () => (
        window.addEventListener(`resize`, _),
        () => window.removeEventListener(`resize`, _)
      ),
      [_],
    ),
    window.innerWidth < parseInt(_)
  );
}
var _ = `Bqc713MLolI-`,
  _ = `TX2-spmP-Po-`,
  _ = `hfMOdjQIOc4-`,
  _ = `R2HscJx4K6o-`,
  _ = `_7LBe1esXpKU-`,
  _ = `xwahuY1Uz7o-`,
  _ = `sCN77TQMop8-`,
  _ = `Z4YC1nThVJI-`,
  _ = `KY4Cd9W1L6Q-`,
  _ = `f-0zARERCAw-`,
  _ = `xP-Q1GPcHN0-`,
  _ = `h4I2XLB3R1g-`,
  _ = `_7gpVOLt-XJU-`,
  _ = `_0uWyQeNM7D8-`,
  _ = `duEfqF5AsUw-`,
  _ = `Tzhu8-0Wz-s-`,
  _ = `_2Aw15gxi2iQ-`,
  _ = `K2UfkCIuEhY-`,
  _ = `_0sd55gVf7-A-`,
  _ = `stvsFMfz2-k-`,
  _ = `_2v693TSi5qI-`,
  _ = `_0OX9uGqXsks-`,
  _ = `cO8EeGIq7s0-`,
  _ = `KGh014i-wb0-`,
  _ = `aMn2G-0HxmA-`,
  _ = `_6-sHjFJrjtM-`,
  _ = `z1C5NpPsi2Y-`,
  _ = `LQzQOXtggjQ-`,
  _ = `_6IeL8PbT7VU-`,
  _ = `CUD5h7-QcyA-`,
  _ = `_8Aks82X4RBA-`,
  _ = `_8EJQGwPhz8M-`,
  _ = `AlZHaVSPe6A-`,
  _ = `uLDdV62EBmg-`,
  _ = `YDFpPk1zweE-`,
  _ = `_-54SS2-Bx9o-`,
  _ = `-tKGZgUV9UQ-`,
  _ = `QYFii1vIT5Q-`,
  _ = `ghKtbTolSvc-`,
  _ = `YHonIqDIZys-`,
  _ = `r9Xd1x4Y-Ig-`,
  _ = `Y9w82-bhx7g-`,
  _ = `jaJf732NByw-`,
  _ = `UBz6BRbcVyo-`,
  _ = `_6kYlAjyumRw-`,
  _ = `Yg4VVKfUrI8-`,
  _ = `_0EeqCzGG-eI-`,
  _ = `_2gWe9tmtrww-`,
  _ = `IChJxoOm7tM-`,
  _ = `W7t0dZE-IP8-`,
  _ = `MH69xixbsuo-`,
  _ = `gXsTTmkhkp8-`,
  _ = `EiOwK7JmDkI-`,
  _ = `ezBcVPPFhXA-`,
  _ = `hRIJpSWBjhA-`,
  _ = `FrKuhV62L-U-`,
  _ = `T-iij0HpVz4-`,
  _ = `Kx6JTWJ1zP0-`,
  _ = `Y8BVTJkFceQ-`,
  _ = `V5PfWwQuoso-`,
  _ = `cvzLWRLoJLI-`,
  _ = `_2tK3EJLo5u0-`,
  _ = `mb2UmLZL3PE-`,
  _ = `S5Y2Teq8V0Y-`,
  _ = `JUrfU3-YF98-`,
  _ = `suxMkRoljSQ-`,
  _ = `bfur8M2ptfI-`,
  _ = `fSh6wwrXDUg-`,
  _ = `Kq9nZo6tkt0-`,
  _ = `_8duc--msHp0-`,
  _ = `vpJFPf5ue1U-`,
  _ = `_7O54ooudUro-`,
  _ = `T1Q-KWSzeaw-`,
  _ = `d4tZAxeNIU8-`,
  _ = `_9DedsTyq-hk-`,
  _ = `eZ0HAqkUSXI-`,
  _ = `B3bMkOpxkng-`,
  _ = `-ik0pfHf3uE-`,
  _ = `TMpCQp-t5h8-`,
  _ = `EpX0QE2kSA0-`,
  _ = `zRD9fcg5reg-`,
  _ = `kzAgCnYdQB8-`,
  _ = `_7yGA7d4WpzM-`,
  _ = `_6meJwMi3sac-`,
  _ = `ALhnUBj871c-`,
  _ = `GjHvIm1Fq8E-`,
  _ = _();
function _(_) {
  let _ = _?.jsondata?.read_more_link;
  if (!_) return;
  let _ = _(_).toLocaleLowerCase();
  return _ ? [_] : void 0;
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  if (!_) return ``;
  if (!_(_)) return _(_);
  let _ = _(_, _) ? _(_) : _;
  return (_.IN_CLIENT ? `steam://openurl_external/` : ``) + _;
}
function _(_, _, _) {
  let _ = _.toLowerCase().startsWith(`http`) ? _ : `http://` + _;
  return (0, _.jsx)(_, {
    url: _,
    event: _,
    children: _ || _,
  });
}
var _ = (_) => {
  let { url: _, event: _, className: _, style: _ } = _,
    _ = _(_);
  _ = _(_, _);
  let _ = _(_) ? `noopener nofollow` : void 0,
    _ =
      typeof _.children == `string` &&
      _.children.length > 0 &&
      _ &&
      !_.startsWith(`steam://`)
        ? _(_)
        : void 0;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    direction: `top`,
    children: (0, _.jsx)(_, {
      className: _,
      href: _,
      rel: _,
      _: _._,
      style: _,
      children: _.children,
    }),
  });
};
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_(_, _));
  return {
    snr: _(_),
    strStoreURL: _(_, _, _),
  };
}
