var _ = _(_()),
  _ = _(_()),
  _ = class extends _ {
    constructor() {
      super();
    }
    BTransportReady() {
      return !0;
    }
    GetServerTime() {
      return _.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
    }
    async RequestEmoticonListInternal() {
      let _ = [];
      try {
        let _ = await _.default.get(_.CHAT_BASE_URL + `actions/EmoticonData`, {
          withCredentials: !0,
        });
        if (_.data.emoticons)
          for (let _ of _.data.emoticons) {
            let _ = _.name;
            if (_) {
              if (_.startsWith(`^`))
                _.push({
                  name: _,
                });
              else {
                let _ = {
                    name: _.substr(1, _.length - 2),
                  },
                  _ = _.name.toLowerCase();
                (_ != _.name && (_.name_normalized = _),
                  _.time_last_used && (_.last_used = _.time_last_used),
                  _.use_count && (_.use_count = _.use_count),
                  _.time_received && (_.time_received = _.time_received),
                  _.appid && (_.appid = _.appid),
                  _.push(_));
              }
            }
          }
      } catch (_) {
        console.error(`error loading emoticon list`, _);
      }
      this.OnEmoticonListReceived(_);
    }
  },
  _ = _(),
  _ = _.createContext(null);
function _() {
  throw Error(`Missing Context, fails for SSR usage`);
}
function _(_) {
  let [_] = _.useState(() => new _()),
    _ = _.store ?? _;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) ?? _();
}
function _(_) {
  return (0, _.jsx)(_.Fragment, {
    children: _.children(_()),
  });
}
