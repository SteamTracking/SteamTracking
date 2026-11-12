import { _, _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import { _, _, _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~af36c62e9f.js";
import { _ } from "./chunk~2f8c67b4de.js";
import { _ } from "./chunk~ada233e34d.js";
import { _ } from "./chunk~3ee5188744.js";
import { _, _ } from "./chunk~a7c5e71e12.js";
import "./chunk~8e34816c9e.js";
import { _, _, _ } from "./chunk~4f3a47e991.js";
import { _ } from "./chunk~80765d41ae.js";
var _ = _(_()),
  _ = `MdJYPHe5A8U-`,
  _ = `jV4DKdPFrho-`,
  _ = `Fa6-3eYcsOM-`,
  _ = `Z2UFMkykFcM-`,
  _ = `-ol-zM5qXI4-`,
  _ = `gTgsFoLQZHo-`,
  _ = `-SI5GPJhUtY-`,
  _ = `aTwFuosUkco-`,
  _ = `jYLh2Fi2yY0-`,
  _ = _(_()),
  _ = _(),
  _ = {
    include_assets: !0,
    include_release: !0,
  };
function _() {
  let _ = _(9),
    [_, _] = _(`query`, ``),
    _ = (0, _.useMemo)(
      () =>
        Array.from(
          new Set(_?.map((_) => _.data.store_item_id).filter(Boolean)),
        ),
      [_],
    ),
    _ = (0, _.useMemo)(
      () =>
        Array.from(new Set(_?.map((_) => _.data.partnerid).filter(Boolean))),
      [_],
    ),
    _ = _(_, _),
    _ = _(_),
    [_, _] = _(`internaldate`, !1),
    _ = (0, _.useMemo)(() => {
      let _ = _.trim().toLocaleLowerCase();
      return _?.filter(
        (_) =>
          _.length == 0 ||
          _ == 1 ||
          !_ ||
          _.Get()
            .GetApp(_.data.store_item_id)
            ?.GetName()
            .toLocaleLowerCase()
            .includes(_) ||
          _(_.data.partnerid)?.name.toLocaleLowerCase().includes(_),
      ).sort((_, _) => _.data.due_date - _.data.due_date);
    }, [_, _, _, _]);
  return _
    ? (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(`h3`, {
            children: [
              `Season Passes `,
              (0, _.jsx)(`button`, {
                className: _(_),
                style: {
                  float: `right`,
                  marginRight: `16px`,
                },
                onClick: (_) =>
                  _(
                    _,
                    `https://confluence.valve.org/display/~adils/Steam+Season+Passes`,
                  ),
                children: `Help`,
              }),
            ],
          }),
          (0, _.jsx)(`p`, {
            children: `This dashboard surfaces any important deadlines that a partner has missed. Currently, the only ones we are tracking are related to customer commitments with Season Pass DLC.`,
          }),
          (0, _.jsx)(_, {
            type: `string`,
            value: _,
            onChange: (_) => _(_.currentTarget.value.toLocaleLowerCase()),
            label: `Filter`,
            tooltip: `Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name`,
            placeholder: `type here...`,
          }),
          (0, _.jsx)(_, {
            label: `Show those missing their internal deadline date`,
            checked: _,
            tooltip: `Partner can set for themselves an internal date when they project the milestone is done, this is separate from the date we show customers as it has a range component.`,
            onChange: _,
          }),
          (0, _.jsxs)(`table`, {
            children: [
              (0, _.jsx)(`thead`, {
                children: (0, _.jsxs)(`tr`, {
                  children: [
                    (0, _.jsx)(`th`, {
                      children: `Deadline ID`,
                    }),
                    (0, _.jsxs)(`th`, {
                      children: [
                        `Milestone ID `,
                        (0, _.jsx)(_, {
                          tooltip: `This is only unique within a DLC Season Pass`,
                        }),
                      ],
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Season Pass DLC`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Partner`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Season Pass Release Date`,
                    }),
                    (0, _.jsxs)(`th`, {
                      children: [
                        `Deadline Date `,
                        (0, _.jsx)(_, {
                          tooltip: `This account for what the customrs see on the store, not their specific data`,
                        }),
                      ],
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Milestone Name`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Ticket?`,
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(`tbody`, {
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      deadline: _,
                    },
                    `` + _.deadlineid,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    : null;
}
function _(_) {
  let { deadline: _ } = _,
    [_] = _(_.data.store_item_id, _),
    [_] = _(_.data.partnerid),
    _ = _(_.data.store_item_id)?.find(
      (_) => _.milestone_id == Number.parseInt(_.data.gid),
    );
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: _.deadlineid,
      }),
      (0, _.jsx)(`td`, {
        children: _.data.gid,
      }),
      (0, _.jsxs)(`td`, {
        children: [
          (0, _.jsx)(`a`, {
            href: _?.GetStorePageURL(),
            target: `_blank`,
            children: _?.GetName() || `unknown`,
          }),
          `(`,
          (0, _.jsxs)(`a`, {
            href: `${_.PARTNER_BASE_URL}admin/game/editbyappid/${_.data.store_item_id}`,
            target: `_blank`,
            children: [_.data.store_item_id, `)`],
          }),
        ],
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsxs)(`a`, {
          href: `${_}pub/companydetails/${_.data.partnerid}`,
          target: `_blank`,
          children: [_?.name || `unknown`, ` (`, _.data.partnerid, `)`],
        }),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          _(_?.GetReleaseDateRTime()),
          (0, _.jsx)(`span`, {
            children: ` - `,
          }),
          _(_?.GetReleaseDateRTime(), {
            bForce24HourClock: !1,
          }),
        ],
      }),
      (0, _.jsxs)(`td`, {
        children: [
          _(_.data.due_date),
          (0, _.jsx)(`span`, {
            children: ` - `,
          }),
          _(_.data.due_date, {
            bForce24HourClock: !1,
          }),
        ],
      }),
      (0, _.jsx)(`td`, {
        children: _?.title.find((_) => _.language == 0)?.localized_string,
      }),
      (0, _.jsx)(`td`, {
        children: `TODO`,
      }),
    ],
  });
}
function _() {
  let [_, _] = _.useState(0),
    _ = _(10, _),
    _ = _.useRef(0);
  _.useEffect(() => () => window.clearTimeout(_.current), []);
  let _ = (_) => {
      let _ = Number(_.currentTarget.value);
      (window.clearTimeout(_.current),
        (_.current = window.setTimeout(() => _(_), 1e3)));
    },
    _ = _.useMemo(() => {
      let _ = new Map();
      return (
        _?.sort((_, _) => {
          let _ = JSON.parse(_.data.description_jsondata),
            _ = JSON.parse(_.data.description_jsondata),
            _ = new Date(_?.CreatedOn);
          return new Date(_?.CreatedOn).getTime() - _.getTime();
        })?.forEach((_) => {
          let _;
          (_.has(_.data.gid)
            ? (_ = _.get(_.data.gid))
            : ((_ = []), _.set(_.data.gid, _)),
            _.push(_.data));
        }),
        _
      );
    }, [_]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`h3`, {
        children: `Tax Requirement Deadlines`,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            `PartnerID: `,
            (0, _.jsx)(`textarea`, {
              cols: 30,
              rows: 1,
              onChange: _,
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`table`, {
            children: [
              (0, _.jsx)(`thead`, {
                children: (0, _.jsxs)(`tr`, {
                  children: [
                    (0, _.jsx)(`th`, {
                      className: _,
                      children: `Action ID`,
                    }),
                    (0, _.jsx)(`th`, {
                      className: _,
                      children: `Status`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Template`,
                    }),
                    (0, _.jsx)(`th`, {
                      className: _,
                      children: `Created On`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Dropbox URL`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Freeform Message`,
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(`tbody`, {
                children:
                  _?.size > 0 &&
                  Array.from(_?.values()).map((_, _) =>
                    _.length > 0
                      ? (0, _.jsx)(
                          _,
                          {
                            actionID: _[0].gid,
                            rgDeadlines: _,
                          },
                          `aid_` + _,
                        )
                      : null,
                  ),
              }),
            ],
          }),
          !_ &&
            _ > 0 &&
            (0, _.jsx)(_, {
              size: `small`,
            }),
          _?.length == 0 &&
            _ > 0 &&
            (0, _.jsxs)(`div`, {
              className: `_0UK-68UGjq4-`,
              children: [`No tax notifications for partner `, _],
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { actionID: _, rgDeadlines: _ } = _;
  return _.length
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`tr`, {
            children: (0, _.jsx)(`td`, {
              children: _,
            }),
          }),
          _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                deadline: _,
              },
              _.gid + `_` + _,
            ),
          ),
        ],
      })
    : null;
}
function _(_) {
  if (!_) return null;
  let _ = /(Z|[+-]\d{2}:?\d{2})$/i.test(_);
  return new Date(_ ? _ : _ + `Z`);
}
function _(_) {
  let { deadline: _ } = _,
    _ = JSON.parse(_.description_jsondata),
    _ = _(_.CreatedOn),
    _ =
      _ && !isNaN(_.getTime())
        ? _.toLocaleString(`en-us`, {
            timeZoneName: `short`,
          })
        : _.CreatedOn;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {}),
      (0, _.jsx)(`td`, {
        children: _.status ? `Complete` : `Active`,
      }),
      (0, _.jsx)(`td`, {
        children: _.TemplateName,
      }),
      (0, _.jsx)(`td`, {
        children: _,
      }),
      (0, _.jsx)(`td`, {
        children: _.Parameters?.Dropbox_FileRequest_Url,
      }),
      (0, _.jsx)(`td`, {
        children: _.Parameters?.CustomMessageBody,
      }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(`9`),
    _ = [
      {
        label: `Season Pass Milestone`,
        data: `9`,
      },
      {
        label: `Tax Requirement`,
        data: `10`,
      },
    ],
    _ = (_) => {
      _(_.data);
    },
    _ = null;
  switch (_) {
    case `10`:
      _ = (0, _.jsx)(_, {});
      break;
    case `9`:
      _ = (0, _.jsx)(_, {});
      break;
    default:
      console.error(`results component not implemented for this deadline type`);
  }
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`h1`, {
          children: `Deadlines Dashboard`,
        }),
        (0, _.jsx)(`hr`, {}),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            `Type: `,
            (0, _.jsx)(_, {
              rgOptions: _,
              selectedOption: _,
              strDropDownClassName: void 0,
              onChange: _,
              contextMenuPositionOptions: {
                bMatchWidth: !1,
              },
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: void 0,
          children: _,
        }),
      ],
    }),
  });
}
function _(_, _) {
  let _ = _({
    queryKey: [`partnerDeadlines`, _, _],
    queryFn: async () => {
      if (_ && _ < 0) return;
      let _ = new FormData();
      (_.append(`type`, _.toString()),
        _.append(`sessionid`, _()),
        _ && _.append(`partnerid`, _.toString()));
      let _ = `${_.PARTNER_BASE_URL}deadlines/ajaxgetdeadlines`,
        _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
      if (_?.status == 200) return _.data;
    },
    staleTime: 12e4,
  });
  return _.isLoading ? null : _.data?.deadlines;
}
export { _ as default, _ as usePartnerDeadlines };
