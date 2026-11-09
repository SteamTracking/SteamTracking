function _(_, _ = 0, _ = Math.random) {
  if (_?.length > 1) {
    let _ = _ > 0 ? Math.min(_, _.length) : _.length;
    for (; _ !== 0;) {
      let _ = Math.floor(_() * _);
      --_;
      let _ = _[_];
      ((_[_] = _[_]), (_[_] = _));
    }
  }
  return _;
}
function _(_, _, _) {
  if (_ >= 0 && _ >= 0) {
    let _ = _.splice(_, 1)[0];
    _ >= _.length ? (_[_] = _) : _.splice(_, 0, _);
  }
  return _;
}
function _(_, _) {
  if (!_ && !_) return !0;
  if (!_ || !_ || _.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_, _) {
  return _(_, (_) => _ == _);
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 && (_.splice(_, 1), !0);
}
function _(_, _, _) {
  return _
    ? _.length < _
      ? _.concat(Array(_ - _.length).fill(_))
      : _
    : (console.error(
        `array should be defined for us to fill in the missing indexes`,
      ),
      []);
}
function _(_) {
  return _.filter((_) => _ != null);
}
function _(_, _, _) {
  return {
    get() {
      let _ = _.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, _) ||
          Object.defineProperty(this, _, {
            value: _,
          }),
        _
      );
    },
  };
}
var _ = class {
  m_vecCallbacks = [];
  Register(_) {
    return (
      this.m_vecCallbacks.push(_),
      {
        Unregister: () => {
          _(this.m_vecCallbacks, _);
        },
      }
    );
  }
  Dispatch(..._) {
    for (let _ of Array.from(this.m_vecCallbacks)) _(..._);
  }
  ClearAllCallbacks() {
    this.m_vecCallbacks = [];
  }
  CountRegistered() {
    return this.m_vecCallbacks.length;
  }
  static PromiseFromAny(_) {
    return new Promise((_) => {
      let _ = [],
        _ = () => {
          (_.forEach((_) => _.Unregister()), _());
        };
      for (let _ of _) _.push(_.Register(_));
    });
  }
};
function _(_, _, _, _) {
  var _ = arguments.length,
    _ =
      _ < 3 ? _ : _ === null ? (_ = Object.getOwnPropertyDescriptor(_, _)) : _,
    _;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    _ = Reflect.decorate(_, _, _, _);
  else
    for (var _ = _.length - 1; _ >= 0; _--)
      (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
  return (_ > 3 && _ && Object.defineProperty(_, _, _), _);
}
var _ = class {
  SyncStore(_) {
    return this.Subscribe(_).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
(_([_], _.prototype, `SyncStore`, null), _([_], _.prototype, `GetValue`, null));
var _ = class extends _ {},
  _ = class extends _ {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(_, _) {
      (super(),
        (this.m_callbacks = new _()),
        (this.m_currentValue = _),
        (this.m_fnEquals = _));
    }
    Set(_) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, _)) return !1;
      } else if (this.m_currentValue === _) return !1;
      return ((this.m_currentValue = _), this.m_callbacks.Dispatch(_), !0);
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(_) {
      return {
        Unsubscribe: this.m_callbacks.Register(_).Unregister,
      };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function _(_, _) {
  return new _(_, _);
}
var _ = class extends _ {
  m_fnMap;
  m_originalSubscribableValue;
  m_mappedSubscribableValue;
  m_bMappedValueStale = !1;
  constructor(_, _, _) {
    (super(),
      (this.m_originalSubscribableValue = _),
      (this.m_mappedSubscribableValue = new _(_(_.Value), _)),
      (this.m_fnMap = _),
      this.m_originalSubscribableValue.Subscribe(() => {
        this.m_mappedSubscribableValue.SubscriberCount > 0
          ? this.UpdateMappedValue()
          : (this.m_bMappedValueStale = !0);
      }));
  }
  get Value() {
    return (
      this.m_bMappedValueStale && this.UpdateMappedValue(),
      this.m_mappedSubscribableValue.Value
    );
  }
  Subscribe(_) {
    return this.m_mappedSubscribableValue.Subscribe(_);
  }
  UpdateMappedValue() {
    (this.m_mappedSubscribableValue.Set(
      this.m_fnMap(this.m_originalSubscribableValue.Value),
    ),
      (this.m_bMappedValueStale = !1));
  }
};
function _(_, _, _) {
  return new _(_, _, _);
}
var _ = class {
  m_schTimer;
  m_fnCallback;
  m_fnOnCancel;
  Schedule(_, _) {
    (this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = _),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _)));
  }
  AsyncSchedule(_, _) {
    return new Promise((_, _) => {
      (this.Schedule(_, () => {
        (_(), _());
      }),
        (this.m_fnOnCancel = _));
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let _ = this.m_fnOnCancel;
      (clearTimeout(this.m_schTimer), this.Reset(), _ && _());
    }
  }
  Reset() {
    ((this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0));
  }
  ScheduledInternal() {
    let _ = this.m_fnCallback;
    (this.Reset(), _?.());
  }
};
_([_], _.prototype, `ScheduledInternal`, null);
var _ = class {
    m_rgListeners = [];
    AddEventListener(_, _, _) {
      (_.addEventListener(_, _),
        this.m_rgListeners.push({
          element: _,
          type: _,
          listener: _,
        }));
    }
    Unregister() {
      for (let _ of this.m_rgListeners)
        _.element.removeEventListener(_.type, _.listener);
      this.m_rgListeners = [];
    }
  },
  _ = class {
    m_vecCallbacks = [];
    Push(_) {
      this.m_vecCallbacks.push(_);
    }
    PushArrayRemove(_, _) {
      this.m_vecCallbacks.push(() => _(_, _));
    }
    Unregister() {
      for (let _ of this.m_vecCallbacks) _();
      this.m_vecCallbacks = [];
    }
    GetUnregisterFunc() {
      return this.Unregister;
    }
  };
_([_], _.prototype, `Unregister`, null);
