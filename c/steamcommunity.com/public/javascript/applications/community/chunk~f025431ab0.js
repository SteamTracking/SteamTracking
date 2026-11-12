var _ = Object.create,
  _ = Object.defineProperty,
  _ = Object.getOwnPropertyDescriptor,
  _ = Object.getOwnPropertyNames,
  _ = Object.getPrototypeOf,
  _ = Object.prototype.hasOwnProperty,
  _ = (_, _, _) => () => {
    if (_) throw _[0];
    try {
      return (_ && (_ = _((_ = 0))), _);
    } catch (_) {
      throw ((_ = [_]), _);
    }
  },
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
  ),
  _ = (_) =>
    _.call(_, `module.exports`)
      ? _[`module.exports`]
      : _(
          _({}, `__esModule`, {
            value: !0,
          }),
          _,
        ),
  _ = ((_) =>
    typeof require < `u`
      ? require
      : typeof Proxy < `u`
        ? new Proxy(_, {
            get: (_, _) => (typeof require < `u` ? require : _)[_],
          })
        : _)(function (_) {
    if (typeof require < `u`) return require.apply(this, arguments);
    throw Error(
      'Calling `require` for "' +
        _ +
        "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.",
    );
  });
