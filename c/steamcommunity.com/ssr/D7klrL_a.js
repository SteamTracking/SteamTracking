var _ = _(_()),
  _ = _(_()),
  _ = _();
function _(_) {
  let {
      _: _,
      role: _,
      visible: _ = !0,
      className: _,
      keepMounted: _ = !1,
      expandDirection: _ = `height`,
      msAnimationDuration: _ = 250,
      children: _,
    } = _,
    { style: _, active: _, refDiv: _ } = _(_, _, _);
  return !_ && !_ && !_
    ? null
    : (0, _.jsx)(`div`, {
        _: _,
        role: _,
        className: _,
        ref: _,
        style: _,
        inert: !_,
        children: _,
      });
}
function _(_, _ = `height`, _ = 250) {
  let _ = _.useRef(null),
    _ = _.useRef(!0),
    [_, _] = _.useState(`idle`),
    [_, _] = _.useState(
      _
        ? {}
        : {
            [_]: `0px`,
            overflow: `hidden`,
          },
    ),
    [_, _] = _.useState(_);
  return (
    _.useLayoutEffect(() => {
      _.current || _(`start`), _ && _(_);
    }, [_]),
    _.useLayoutEffect(
      () => (
        (_.current = !1),
        () => {
          _.current = !0;
        }
      ),
      [],
    ),
    _.useLayoutEffect(() => {
      let _ = _.current,
        _ = _ == `height` ? `scrollHeight` : `scrollWidth`,
        _ = () => {
          _.unstable_batchedUpdates(() => {
            _(
              _
                ? {}
                : {
                    [_]: `0px`,
                    overflow: `hidden`,
                  },
            ),
              _(`idle`),
              _(_);
          });
        };
      if (_ == `start`) {
        let _ = _[_];
        _ == 0
          ? _()
          : (_((_) => ({
              [_]: _ ? `0px` : `${_}px`,
              ..._,
              overflow: `hidden`,
            })),
            _(`active`));
      } else if (_ == `active`) {
        _.scrollTop;
        let _ = _[_];
        return (
          _({
            overflow: `hidden`,
            [_]: _ ? `${_}px` : `0px`,
          }),
          _.addEventListener(`transitionend`, _),
          () => {
            _.removeEventListener(`transitionend`, _);
          }
        );
      }
    }, [_, _]),
    {
      style: {
        ..._,
        transition: `${_} ${_}ms`,
      },
      active: _,
      refDiv: _,
    }
  );
}
export { _ };
