var _ = Object.create,
  _ = Object.defineProperty,
  _ = Object.getOwnPropertyDescriptor,
  _ = Object.getOwnPropertyNames,
  _ = Object.getPrototypeOf,
  _ = Object.prototype.hasOwnProperty,
  _ = (_, _) => () => (
    _ ||
      (_(
        (_ = {
          exports: {},
        }).exports,
        _,
        _.exports,
      ),
      (_ = null)),
    _.exports
  ),
  _ = (_, _) => {
    let _ = {};
    for (var _ in _)
      _(_, _, {
        get: _[_],
        enumerable: !0,
      });
    return (
      _ ||
        _(_, Symbol.toStringTag, {
          value: `Module`,
        }),
      _
    );
  },
  _ = (_, _, _, _) => {
    if ((_ && typeof _ == `object`) || typeof _ == `function`)
      for (var _ = _(_), _ = 0, _ = _.length, _; _ < _; _++)
        ((_ = _[_]),
          !_.call(_, _) &&
            _ !== _ &&
            _(_, _, {
              get: ((_) => _[_]).bind(null, _),
              enumerable: !(_ = _(_, _)) || _.enumerable,
            }));
    return _;
  },
  _ = (_, _, _) => (
    (_ = _ == null ? {} : _(_(_))),
    _(
      _ || !_ || !_.__esModule || !_.call(_, `default`)
        ? _(_, `default`, {
            value: _,
            enumerable: !0,
          })
        : _,
      _,
    )
  );
