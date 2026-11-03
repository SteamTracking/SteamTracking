var _ = `OxjeFj7C-bw-`,
  _ = `M-uKeYFI8Vw-`,
  _ = _(_(), 1),
  _ = _(),
  _ = 640;
function _(_) {
  let { src: _, className: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current,
        _ = _.current;
      if (!_ || !_) return;
      _(!1);
      let _ = () => {
        _.naturalWidth &&
          ((_.width = Math.min(_.naturalWidth, _)),
          (_.height = Math.round((_.width * _.naturalHeight) / _.naturalWidth)),
          _.getContext(`2d`)?.drawImage(_, 0, 0, _.width, _.height),
          _(!0));
      };
      return (
        _.complete ? _() : _.addEventListener(`load`, _),
        () => _.removeEventListener(`load`, _)
      );
    }, [_]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`img`, {
          ref: _,
          src: _,
          alt: ``,
          className: _,
          hidden: _,
        }),
        (0, _.jsx)(`canvas`, {
          ref: _,
          className: _,
          hidden: !_,
        }),
      ],
    })
  );
}
function _(_) {
  let {
      _: _,
      workshop: _,
      className: _,
      imageClassName: _,
      useAssetsWithoutOverride: _,
      overrideImageURL: _,
      ..._
    } = _,
    _ = _ ? void 0 : _,
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _;
  return (
    _ ||
      (_ &&
        ((_ = _(_, `library_hero_2x`)),
        (_ ||= _(_, `library_hero`)),
        (_ ||= _(_, `raw_page_background`)))),
    !_ || (!_ && !_)
      ? null
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
              ..._,
              children: _
                ? (0, _.jsx)(_, {
                    src: _,
                    className: _(_, _),
                  })
                : (0, _.jsx)(`img`, {
                    src: _,
                    alt: _?.name ?? ``,
                    className: _,
                  }),
            }),
            _ &&
              (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)(`div`, {
                  className: `AMZQjRYGsXQ-`,
                }),
              }),
          ],
        })
  );
}
export { _ };
