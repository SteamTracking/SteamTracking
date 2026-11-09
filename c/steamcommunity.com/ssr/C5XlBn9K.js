_();
var _ = `HRBMC8-sveg-`,
  _ = `Z2hc6V7xIVo-`,
  _ = `mhCq6vJJMJc-`,
  _ = `ouEGP5Y9ebw-`,
  _ = `Q5WOxcN63k0-`,
  _ = `kd0AtvY9hsY-`,
  _ = `M4-Lc-g-O3U-`,
  _ = _();
function _(_) {
  let _ = _(_.steamid);
  if (!_.data) return null;
  let { breadcrumbs: _, extraBreadcrumbs: _, children: _ } = _,
    _ = _(_.data);
  return (0, _.jsx)(_, {
    className: _,
    "flow-children": `row`,
    children: (0, _.jsxs)(_, {
      flexGrow: `1`,
      direction: `row`,
      gap: `4`,
      align: `center`,
      className: _,
      children: [
        (0, _.jsx)(_, {
          href: _,
          className: _,
          children: (0, _.jsx)(_, {
            aspectRatio: `1/1`,
            maxHeight: {
              initial: `44px`,
              _: `66px`,
            },
            minHeight: {
              initial: `44px`,
              _: `66px`,
            },
            children: (0, _.jsx)(_, {
              playerLinkDetails: _.data,
              statusPosition: `border`,
              alt: ``,
              role: `presentation`,
              size: `FillArea`,
              className: void 0,
            }),
          }),
        }),
        (0, _.jsxs)(_, {
          className: _,
          align: `baseline`,
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: (0, _.jsx)(_, {
                href: _,
                children: _.data.public_data?.persona_name,
              }),
            }),
            _.map((_, _) =>
              (0, _.jsxs)(
                _,
                {
                  gap: `1`,
                  align: `center`,
                  className: _(_.hideOnMobile && `kCeTAvl-6j4-`),
                  children: [
                    (0, _.jsx)(_, {
                      className: _,
                      children: `»`,
                    }),
                    (0, _.jsx)(_, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        href: _.href,
                        children: _.label,
                      }),
                    }),
                  ],
                },
                _,
              ),
            ),
            _,
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `a-kItTN8sSI-`,
            children: _,
          }),
      ],
    }),
  });
}
export { _ };
