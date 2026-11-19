import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { _ } from "./library.js?contenthash=CVZWwsCP";
var _ =
    /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\^-~]+[.,](?:(?:[a-zA-Z]{2,4}[.?]*[/\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>[\]]*[^\s"<>[\],.ː:])?)/,
  _ = /^(steam|ftp|https?):\/\//;
function _(_) {
  return _.test(_) ? _ : `https://` + _;
}
var _ = class extends _ {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(_, _) {
      (super(),
        (this.#e = _),
        this.setOptions(_),
        this.bindMethods(),
        this.#i());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(_) {
      let _ = this.options;
      ((this.options = this.#e.defaultMutationOptions(_)),
        _(this.options, _) ||
          this.#e.getMutationCache().notify({
            type: `observerOptionsUpdated`,
            mutation: this.#n,
            observer: this,
          }),
        _?.mutationKey &&
        this.options.mutationKey &&
        _(_.mutationKey) !== _(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === `pending` &&
            this.#n.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(_) {
      (this.#i(), this.#a(_));
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      (this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#a());
    }
    mutate(_, _) {
      return (
        (this.#r = _),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(_)
      );
    }
    #i() {
      let _ = this.#n?.state ?? _();
      this.#t = {
        ..._,
        isPending: _.status === `pending`,
        isSuccess: _.status === `success`,
        isError: _.status === `error`,
        isIdle: _.status === `idle`,
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #a(_) {
      _.batch(() => {
        if (this.#r && this.hasListeners()) {
          let _ = this.#t.variables,
            _ = this.#t.context;
          _?.type === `success`
            ? (this.#r.onSuccess?.(_.data, _, _),
              this.#r.onSettled?.(_.data, null, _, _))
            : _?.type === `error` &&
              (this.#r.onError?.(_.error, _, _),
              this.#r.onSettled?.(void 0, _.error, _, _));
        }
        this.listeners.forEach((_) => {
          _(this.#t);
        });
      });
    }
  },
  _ = _(_(), 1);
function _(_, _) {
  let _ = _(_),
    [_] = _.useState(() => new _(_, _));
  _.useEffect(() => {
    _.setOptions(_);
  }, [_, _]);
  let _ = _.useSyncExternalStore(
      _.useCallback((_) => _.subscribe(_.batchCalls(_)), [_]),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _ = _.useCallback(
      (_, _) => {
        _.mutate(_, _).catch(_);
      },
      [_],
    );
  if (_.error && _(_.options.throwOnError, [_.error])) throw _.error;
  return {
    ..._,
    mutate: _,
    mutateAsync: _.mutate,
  };
}
var _ = _(_()),
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
      (_.current || _(`start`), _ && _(_));
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
            (_(
              _
                ? {}
                : {
                    [_]: `0px`,
                    overflow: `hidden`,
                  },
            ),
              _(`idle`),
              _(_));
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
