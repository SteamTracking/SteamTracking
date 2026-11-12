import { _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import { _, _, _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~44f252525d.js";
import { _ } from "./chunk~e29b7ee76a.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~eefd71512b.js";
var _ = _(_()),
  _ = _(_()),
  _ = `HSAg4o7r5Io-`,
  _ = `_91-FhJKPrv0-`,
  _ = `Da2DIon4-II-`,
  _ = `ney-qgudmmA-`,
  _ = `LrlrL1Pznj4-`,
  _ = `_-3KMu1Yw5f0-`,
  _ = `MdGdDcTth44-`,
  _ = `Pfhh7-MRDxk-`,
  _ = `nEP4IXh-g3s-`,
  _ = `QOc3kHAFmB0-`,
  _ = `DOZ4V04yi88-`,
  _ = `TaCcbWsN9Ew-`,
  _ = `IPRpuTUzHHc-`,
  _ = `iGB6yDvY0i0-`,
  _ = `MmENTTiGPnY-`,
  _ = `UzWnsbgwixE-`,
  _ = `ymEy9McI9cQ-`,
  _ = `NbyOAogUr5g-`,
  _ = `cyXziBB6Uvg-`,
  _ = `pTClOWS7-RY-`,
  _ = `Wd7tcHrvsP0-`,
  _ = `pQReSqjDhJM-`,
  _ = `bAp2436-gEM-`,
  _ = `g6tvFSROsPE-`,
  _ = `UmGHgh4iMyw-`,
  _ = `cDP-8Yf1LgY-`,
  _ = `UmVep53NuZo-`,
  _ = `zpSA3RSKXr4-`,
  _ = `pBiPeyX2KnE-`,
  _ = `_-6q30pFrZAs-`,
  _ = `G2IFbiODvgM-`,
  _ = `YZtQgWKIHp8-`,
  _ = `CsSQZDCxtZo-`,
  _ = `H3s1J4vhkuY-`,
  _ = `RPTzoV190-A-`,
  _ = `Igr8qoFVGuc-`,
  _ = `zPAYmdohjLw-`,
  _ = `-ISJw5em5NA-`,
  _ = `MRILhS3aG5k-`,
  _ = `pZWx5MRX2L8-`,
  _ = `ejdfjv5Work-`,
  _ = `d-Tws82OCgI-`,
  _ = `ElUZAAmo5cg-`,
  _ = _();
function _(_) {
  return (0, _.jsxs)(`span`, {
    className: _(_, _.className),
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _.label,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let _ = _.host,
    _ = _.type + `:` + _._,
    _ = _.host_role == `peer` ? `Peer` : `Client`,
    _ = null;
  if (_.data_center)
    ((_ = `Gameserver`),
      (_ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
          ` in `,
          (0, _.jsx)(`span`, {
            className: _,
            children: _.data_center,
          }),
        ],
      })));
  else if (_.steam_persona) {
    let _ = _.COMMUNITY_BASE_URL + `/profiles/` + _._;
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`span`, {
          className: _,
          children: (0, _.jsx)(`a`, {
            href: _,
            children: _.steam_persona,
          }),
        }),
        ` (`,
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
        `)`,
      ],
    });
  } else
    _ = (0, _.jsx)(_.Fragment, {
      children: (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
    });
  return (0, _.jsxs)(`div`, {
    className: _(_, _.data_center && `RRLMitTswLQ-`),
    children: [
      (0, _.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, _.jsx)(_, {
            className: _,
            label: _,
            children: _,
          }),
          _.connection_id != null &&
            (0, _.jsx)(_, {
              className: void 0,
              label: `ConnectionID`,
              children: _.connection_id,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.addr &&
            (0, _.jsx)(_, {
              className: `addr`,
              label: `IP`,
              children: _.addr,
            }),
          _.city_name &&
            (0, _.jsx)(_, {
              className: `city_name`,
              label: `City`,
              children: _.city_name,
            }),
          _.country_code &&
            (0, _.jsx)(_, {
              className: `country_code`,
              label: `Country`,
              children: _.country_code,
            }),
          _._ &&
            (0, _.jsx)(_, {
              className: `as`,
              label: `AS`,
              children: _._,
            }),
        ],
      }),
    ],
  });
}
function _(_, _) {
  return (
    (_ ??= 0),
    _.toLocaleString(_(), {
      minimumFractionDigits: _,
      maximumFractionDigits: _,
    })
  );
}
function _(_) {
  let _ = 1e30,
    _ = -1e30;
  if (_ && _.ping_pctile)
    for (let _ in _.ping_pctile) {
      let _ = parseFloat(_);
      if (_ >= 5 && _ <= 95) {
        let _ = _.ping_pctile[_];
        (_ < _ && (_ = _), _ > _ && (_ = _));
      }
    }
  return [_, _];
}
function _(_) {
  let _ = 1e30;
  if (_ && _.quality_pctile)
    for (let _ in _.quality_pctile) {
      let _ = parseFloat(_);
      if (_ >= 5 && _ <= 95) {
        let _ = _.quality_pctile[_];
        _ < _ && (_ = _);
      }
    }
  return _;
}
function _(_, _, _) {
  let _ = _ > 0 ? _ / _ : 0,
    _ = (100 * _).toFixed(1) + `%`;
  return (0, _.jsxs)(
    `tr`,
    {
      children: [
        (0, _.jsx)(`th`, {
          className: void 0,
          children: _,
        }),
        (0, _.jsx)(`td`, {
          className: _,
          children: _,
        }),
        (0, _.jsxs)(`td`, {
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              style: {
                width: _ * 90 + 1 + `px`,
              },
            }),
            (0, _.jsx)(`span`, {
              className: void 0,
              children: _(_),
            }),
          ],
        }),
      ],
    },
    _,
  );
}
function _(_, _) {
  if (!(_ > 0)) return null;
  let _ = [];
  for (let _ = 0; _ < _.length; ++_) _.push(_(_[_][0], _[_][1], _));
  return (0, _.jsx)(`table`, {
    className: _,
    children: (0, _.jsx)(`tbody`, {
      children: _,
    }),
  });
}
function _(_) {
  let _ = [];
  for (let _ = 0; _ < _.length; ++_) {
    let [_, _] = _[_];
    _ != null &&
      _.push(
        (0, _.jsxs)(
          `tr`,
          {
            children: [
              (0, _.jsxs)(`th`, {
                className: _,
                children: [_, `% <=`],
              }),
              (0, _.jsx)(`td`, {
                className: void 0,
                children: _,
              }),
            ],
          },
          _,
        ),
      );
  }
  return _.length
    ? (0, _.jsx)(`table`, {
        className: _,
        children: (0, _.jsx)(`tbody`, {
          children: _,
        }),
      })
    : null;
}
function _(_) {
  return _ >= 0 ? _.toFixed(0) + `ms` : `???`;
}
function _(_) {
  let _ = function (_) {
      let _ = _ >= 0 ? _(_) : `?`;
      return (0, _.jsx)(`td`, {
        className: _,
        children: _ + ` pkts`,
      });
    },
    _ = function (_) {
      let _ = _ >= 0 ? _(_) : `?`;
      return (0, _.jsx)(`td`, {
        className: _,
        children: _ + `kb`,
      });
    },
    _ = function (_, _) {
      let _ = ``;
      return (
        _ > 0 && _ >= 0 && (_ = ((_ / _) * 100).toFixed(3) + `%`),
        (0, _.jsx)(`td`, {
          className: _,
          children: _,
        })
      );
    };
  return (0, _.jsxs)(`div`, {
    className: _(_, void 0),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: `Summary counters`,
      }),
      (0, _.jsx)(`table`, {
        children: (0, _.jsxs)(`tbody`, {
          children: [
            (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `Sent`,
                }),
                _(_.sent_pkt),
                _(_.sent_kb),
                (0, _.jsx)(`td`, {
                  className: _,
                }),
                (0, _.jsx)(`th`, {
                  children: `Dropped`,
                }),
                _(_.drop),
                _(_.drop, _.recv_seq),
              ],
            }),
            (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `Recv`,
                }),
                _(_.recv_pkt),
                _(_.recv_kb),
                (0, _.jsx)(`td`, {
                  className: _,
                }),
                (0, _.jsx)(`th`, {
                  children: `Duplicate`,
                }),
                _(_.dup),
                _(_.dup, _.recv_seq),
              ],
            }),
            (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `Recv w/ seq`,
                }),
                _(_.recv_seq),
                (0, _.jsx)(`td`, {}),
                (0, _.jsx)(`td`, {
                  className: _,
                }),
                (0, _.jsx)(`th`, {
                  children: `Out of order`,
                }),
                _(_.ooo),
                _(_.ooo, _.recv_seq),
              ],
            }),
            (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `Summary`,
                }),
                (0, _.jsx)(`td`, {
                  colSpan: 2,
                  className: void 0,
                  children: (0, _.jsx)(`span`, {
                    className: `flowqualityclass_` + _.quality_class,
                    children: _.quality_class,
                  }),
                }),
                (0, _.jsx)(`td`, {
                  className: _,
                }),
                (0, _.jsx)(`th`, {
                  children: `Seq num lurch`,
                }),
                _(_.seqlurch),
                _(_.seqlurch, _.recv_seq),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = null,
    _ = null,
    _ = 0,
    _ = _.quality_hist;
  if (_) {
    let _ = [
      [`Perfect`, _[100] || 0],
      [`>99%`, _[99] || 0],
      [`97-99%`, _[97] || 0],
      [`95-97%`, _[95] || 0],
      [`90-95%`, _[90] || 0],
      [`75-90%`, _[75] || 0],
      [`50-75%`, _[50] || 0],
      [`<50%`, _[1] || 0],
      [`Dead`, _[0] || 0],
    ];
    for (let _ = 0; _ < _.length; ++_) _ += _[_][1];
    _ = _(_, _);
  }
  if (_ <= 0) return null;
  let _ = _.quality_pctile;
  if (_) {
    let _ = (_) => (_ == null ? void 0 : _ + `%`);
    _ = _([
      [50, _(_[50])],
      [25, _(_[25])],
      [5, _(_[5])],
      [2, _(_[2])],
    ]);
  }
  let _ = _(_) + ` measurement intervals`;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: `Quality interval breakdown`,
      }),
      (0, _.jsx)(`div`, {
        className: void 0,
        children: _,
      }),
      _,
      _,
    ],
  });
}
function _(_) {
  let _ = null,
    _ = _.ping_hist,
    _ = 0;
  if (_) {
    let _ = [
        [0, _[25] || 0],
        [25, _[50] || 0],
        [50, _[75] || 0],
        [75, _[100] || 0],
        [100, _[125] || 0],
        [125, _[150] || 0],
        [150, _[200] || 0],
        [200, _[300] || 0],
        [300, _.max || 0],
      ],
      _,
      _ = 0;
    for (let _ = 0; _ < _.length; ++_)
      _[_][1] > 0 && ((_ ??= _), (_ = _ + 1), (_ += _[_][1]));
    if (_ > 0) {
      ((_ = Math.max(0, _ - 2)), (_ = Math.min(_.length, _ + 2)));
      let _ = [];
      for (let _ = _; _ < _; ++_) {
        let [_, _] = _[_];
        _ == _ && _ == 0 && (_ = 0);
        let _;
        ((_ =
          _ + 1 >= _.length || (_ + 1 >= _ && _ == 0)
            ? _(_) + `+`
            : _ + `-` + _(_[_ + 1][0])),
          _.push(_(_, _, _)));
      }
      _ = (0, _.jsx)(`table`, {
        className: _,
        children: (0, _.jsx)(`tbody`, {
          children: _,
        }),
      });
    }
  }
  let _ = null,
    _ = _.ping_pctile;
  if (_) {
    let _ = (_) => (_ == null ? void 0 : _(_));
    _ = _([
      [5, _(_[5])],
      [50, _(_[50])],
      [75, _(_[75])],
      [95, _(_[95])],
      [98, _(_[98])],
    ]);
  }
  let _ = null,
    _ = 0,
    _ = _.jitter_hist;
  if (_) {
    let _ = [
      [`<1ms`, _[0] || 0],
      [`1-2ms`, _[1] || 0],
      [`2-5ms`, _[2] || 0],
      [`5-10ms`, _[5] || 0],
      [`10-20ms`, _[10] || 0],
      [`20ms+`, _[20] || 0],
    ];
    for (let _ = 0; _ < _.length; ++_) _ += _[_][1];
    _ = _(_, _);
  }
  if (!_ && !_ && !_) return null;
  let _ = _(_) + ` samples`,
    _ = _(_) + ` samples`;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: `Round Trip Latency`,
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
          _,
          _,
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: `Jitter`,
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
          _,
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _.flow;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.title,
      }),
      _
        ? (0, _.jsxs)(_.Fragment, {
            children: [_(_), _(_), _(_)],
          })
        : (0, _.jsx)(`div`, {
            className: void 0,
            children: `(No data available)`,
          }),
    ],
  });
}
function _(_) {
  let _ = _.sess,
    _ = _.cxn,
    _ = null,
    _ = null;
  if (_.client_front || _.router_front) {
    let _ =
      _.kind == `ded`
        ? `Front side statistics reported by client`
        : `Front side statistics reported by player`;
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          title: _,
          flow: _.client_front,
        }),
        (0, _.jsx)(_, {
          title: `Front side statistics reported by relay`,
          flow: _.router_front,
        }),
      ],
    });
  }
  return (
    (_.router_back || _.gameserver_back) &&
      (_ = (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            title: `Back side statistics reported by relay`,
            flow: _.router_back,
          }),
          (0, _.jsx)(_, {
            title: `Back side statistics reported by gameserver`,
            flow: _.gameserver_back,
          }),
        ],
      })),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: void 0,
          children: [
            (0, _.jsx)(_, {
              label: `Relay address`,
              children: _.client.relay_addr,
            }),
            (0, _.jsx)(_, {
              label: `Relay POP`,
              children: _.client.relay_cluster,
            }),
            (0, _.jsx)(_, {
              label: `Active`,
              children: _(_.active_time),
            }),
          ],
        }),
        _,
        _,
      ],
    })
  );
}
function _(_) {
  if (!_ || !_.length) return null;
  let _ = _[0];
  for (let _ = 1; _ < _.length; ++_) {
    let _ = _[_];
    (_.primary > _.primary ||
      (_.primary == _.primary && _.active_time > _.active_time)) &&
      (_ = _);
  }
  return _;
}
function _(_) {
  let _ = _.cxn,
    _ = _.client,
    _ = _.peer,
    _ = _.client_e2e,
    _ = _.peer_e2e,
    [_, _] = _.useState(!1),
    _ = _(_.client_sessions),
    _ = null,
    _ = null,
    _ = null,
    _ = null,
    _ = null,
    _ = null,
    _ = null,
    _ = [];
  if (_) {
    if (
      (_ &&
        _.client.connection_id == _.connection_id &&
        (!_ || (_.client.connection_id, _.connection_id)),
      _.start_time && _.duration)
    ) {
      let _ = new Date(_.start_time * 1e3),
        _ = new Date((_.start_time + _.duration) * 1e3),
        _ = _.GetPreferredLocales(),
        _ = _.toLocaleString(_, {
          weekday: `short`,
          year: `numeric`,
          month: `short`,
          day: `numeric`,
        }),
        _ = _.toLocaleString(_, {
          hour12: !1,
          hour: `2-digit`,
          minute: `2-digit`,
          second: `2-digit`,
        }),
        _ = _.toLocaleString(_, {
          hour12: !1,
          hour: `2-digit`,
          minute: `2-digit`,
          second: `2-digit`,
          timeZoneName: `short`,
        }),
        _ = _(_.duration);
      _ = (0, _.jsxs)(`span`, {
        className: void 0,
        children: [
          (0, _.jsxs)(_, {
            label: `Time`,
            children: [_, ` `, _, `--`, _],
          }),
          (0, _.jsx)(_, {
            label: `Duration`,
            children: _,
          }),
        ],
      });
    }
    if (
      (_.close_code &&
        (_ = (0, _.jsxs)(_, {
          label: `Closed`,
          className: _,
          children: [_.close_type, ` `, _.close_msg, ` (`, _.close_code, `)`],
        })),
      _.experience_class)
    ) {
      let _ = _.class_reason ? ` (${_.class_reason})` : ``;
      _ = (0, _.jsxs)(_, {
        label: `Experience`,
        children: [
          (0, _.jsx)(`span`, {
            className: `experience_` + _.experience_class,
            children: _.experience_class,
          }),
          _,
        ],
      });
    }
  }
  if (_.app) {
    let _ = Object.keys(_.app);
    if (_.length > 0) {
      _.sort();
      let _ = [];
      for (let _ of _)
        _.push(
          (0, _.jsx)(_, {
            label: _,
            children: _.app[_],
          }),
        );
      _ = (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: `Application fields:`,
          }),
          _,
        ],
      });
    }
  }
  if (_ || _) {
    let [_, _] = _(_),
      [_, _] = _(_),
      _ = Math.min(_, _),
      _ = Math.max(_, _);
    if (_ <= _) {
      let _ =
        _ * 0.03 + 2 < _
          ? `${_}--${_}ms`
          : Math.floor((_ + _) / 2 + 0.5) + `ms`;
      _ = (0, _.jsx)(_, {
        label: `Ping`,
        children: _,
      });
    }
    let _ = _(_),
      _ = _(_),
      _ = Math.min(_, _);
    if (
      (_ >= 0 &&
        _ <= 100 &&
        (_ = (0, _.jsx)(_, {
          label: `Packet delivery`,
          children: `${_.toFixed(2)}%`,
        })),
      _)
    ) {
      let _ =
        _.kind == `ded`
          ? `End-to-end statistics reported by gameserver`
          : `End-to-end statistics reported by peer`;
      _ = (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            title: `End-to-end statistics reported by client`,
            flow: _,
          }),
          (0, _.jsx)(_, {
            title: _,
            flow: _,
          }),
        ],
      });
    }
  }
  if (_) {
    let _ = function (_) {
        let _ = [..._];
        return (
          _.sort((_, _) => (_.active_time || 0) - (_.active_time || 0)), _
        );
      },
      _ = _.client_sessions && _.client_sessions.length > 0,
      _ = _.peer_sessions && _.peer_sessions.length > 0;
    if (_) {
      _.kind == `p2p` || _
        ? _.push(
            (0, _.jsx)(`div`, {
              className: _,
              children: `Client relay sessions`,
            }),
          )
        : _.push(
            (0, _.jsx)(`div`, {
              className: _,
              children: `Relay sessions`,
            }),
          );
      for (let _ of _(_.client_sessions))
        _.push(
          (0, _.jsx)(_, {
            cxn: _,
            sess: _,
            host_role: `client`,
          }),
        );
    }
    if (_) {
      _.push(
        (0, _.jsx)(`div`, {
          className: _,
          children: `Peer relay sessions`,
        }),
      );
      for (let _ of _(_.peer_sessions))
        _.push(
          (0, _.jsx)(_, {
            cxn: _,
            sess: _,
            host_role: `peer`,
          }),
        );
    }
  }
  return (0, _.jsxs)(
    `div`,
    {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [_, _, _, _, _, _],
            }),
            (0, _.jsx)(_, {
              className: _,
              label: `Details`,
              checked: _,
              onChange: _,
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              host: _.client,
              host_role: `client`,
            }),
            (0, _.jsx)(_, {
              host: _.peer,
              host_role: `peer`,
            }),
          ],
        }),
        _,
        _,
      ],
    },
    _.key,
  );
}
function _(_) {
  let _ = _(),
    _ = _.appId,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(``),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(0),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``);
  _.useEffect(() => {
    let _ = new URLSearchParams(_.location.search),
      _ = _.get(`client_id`) || ``,
      _ = _.get(`peer_id`) || ``,
      _ = _.get(`kind`) || ``,
      _ = _.get(`app_name1`) || ``,
      _ = _.get(`app_value1`) || ``;
    if ((_(_), _(_), _(_), _(_), _(_), !_.toString() && _ == 0)) return;
    (_(!0), _(``), _ > 0 && _.set(`appid`, `` + _));
    let _ = _.PARTNER_BASE_URL + `sdr/ajaxsessionsearch?` + _.toString();
    (async () => {
      try {
        let _ = await _.default.get(_);
        _?.data?.success == 1
          ? _(_.data.connections)
          : (console.error(
              `sdrsessionsearch: OnPerformSearch error code  ` +
                _?.data?.success +
                ` msg: ` +
                _?.data?.msg,
            ),
            _(_?.data?.success + ` msg: ` + _?.data?.msg));
      } catch (_) {
        let _ = _(_);
        (console.error(`sdrsessionsearch: OnPerformSearch ` + _.strErrorMsg, _),
          _(_.strErrorMsg));
      }
      _(!1);
    })();
  }, [_, _.location, _]);
  let _ = () => {
      let _ = new URLSearchParams();
      (_ && _.set(`client_id`, _),
        _ && _.set(`peer_id`, _),
        _ && _.set(`kind`, _),
        _ && _ && (_.set(`app_name1`, _), _.set(`app_value1`, _)));
      let _ = {
        ..._.location,
      };
      ((_.search = _.toString()), _ != _.location && _.push(_), _(_ + 1));
    },
    _ = null;
  if (_ !== void 0) {
    let _ = [];
    for (let _ of _) {
      let _ = (_.client._ || ``) + `-` + (_.client.connection_id || ``);
      _.push(
        (0, _.jsx)(
          _,
          {
            cxn: _,
          },
          _,
        ),
      );
    }
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [`Found `, _.length, ` connection(s)`],
        }),
        _,
      ],
    });
  }
  let _ = _ == `ded` ? `Gameserver` : `Peer`,
    _ = _.useId();
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_.Fragment, {
              children: `SDR Connections - `,
            }),
            _.appId > 0
              ? (0, _.jsxs)(_.Fragment, {
                  children: [`App `, _.appId],
                })
              : (0, _.jsx)(_.Fragment, {
                  children: `All apps`,
                }),
            (0, _.jsx)(_.Fragment, {
              children: ` [BETA feature]`,
            }),
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _(`DialogInputLabelGroup`, _),
              children: [
                (0, _.jsx)(`div`, {
                  _: _,
                  className: `DialogLabel`,
                  children: `Connection kind`,
                }),
                (0, _.jsxs)(_, {
                  labelId: _,
                  value: _,
                  onChange: (_) => _(_),
                  children: [
                    (0, _.jsx)(_, {
                      value: ``,
                      children: `Any`,
                    }),
                    (0, _.jsx)(_, {
                      value: `ded`,
                      children: `Dedicated server`,
                    }),
                    (0, _.jsx)(_, {
                      value: `p2p`,
                      children: `Peer-to-Peer`,
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  type: `text`,
                  value: _,
                  disabled: !1,
                  label: `Client`,
                  onChange: (_) => _(_.currentTarget.value),
                }),
                (0, _.jsx)(_, {
                  type: `text`,
                  value: _,
                  disabled: !1,
                  label: _,
                  onChange: (_) => _(_.currentTarget.value),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  type: `text`,
                  value: _,
                  disabled: !1,
                  label: `App field name 1`,
                  onChange: (_) => _(_.currentTarget.value),
                }),
                (0, _.jsx)(_, {
                  type: `text`,
                  value: _,
                  disabled: !1,
                  label: `App field value 1`,
                  onChange: (_) => _(_.currentTarget.value),
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                onClick: _,
                disabled: _,
                children: `Search `,
              }),
            }),
          ],
        }),
        _ && (0, _.jsx)(_, {}),
        _,
      ],
    }),
  });
}
export { _ as default };
