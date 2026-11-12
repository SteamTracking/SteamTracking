import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `mGcJKj4m2EQ-`,
  _ = `k4wGY7WH8xY-`,
  _ = `EocTioZrw9s-`,
  _ = `CWjqVwxnME0-`,
  _ = `fs2SowBIWKY-`,
  _ = `QB7iDEGFU0U-`,
  _ = `i6EHwtQS17s-`,
  _ = `phoj4PQF2yo-`,
  _ = `Zg-LMow-8x8-`,
  _ = class _ {
    m_rgSections;
    GetSections() {
      return this.m_rgSections;
    }
    static s_singleton;
    static Get() {
      return ((_.s_singleton ||= new _()), _.s_singleton);
    }
    constructor() {
      this.m_rgSections = _(`categories`, `application_config`);
    }
  };
function _() {
  let _ = _.Get(),
    [_, _] = (0, _.useState)(_.GetSections());
  return {
    sections: _,
  };
}
var _ = _();
function _() {
  let { sections: _ } = _(),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _.current && _.current.NavTree()?.Activate(!0);
    }, []),
    (0, _.jsx)(_, {
      className: _,
      navRef: _,
      children: _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            section: _,
            autoFocus: _ == 0,
          },
          `section` + _.name,
        ),
      ),
    })
  );
}
function _(_) {
  let { section: _, autoFocus: _ } = _,
    _ = _(),
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`span`, {
          className: _,
          children: _.name,
        }),
        (0, _.jsx)(_, {
          className: _,
          scrollDirection: `x`,
          navEntryPreferPosition: _.MAINTAIN_X,
          navKey: `cat_section` + _.name,
          children: _.categories.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                category: _,
                autoFocus: _ && _ === 0,
              },
              `category` + _.name,
            ),
          ),
        }),
      ],
    });
  return _
    ? _
    : (0, _.jsx)(_, {
        placeholderHeight: `150px`,
        children: _,
      });
}
function _(_) {
  let { category: _, autoFocus: _ } = _;
  return (0, _.jsx)(_, {
    focusableIfEmpty: !0,
    autoFocus: _,
    navKey: `cat_panel` + _.name,
    children: (0, _.jsxs)(_, {
      href: _.STORE_BASE_URL + _.url,
      className: _({
        [_]: !0,
        [_]: _.is_toplevel_genre,
      }),
      children: [
        (0, _.jsx)(_, {
          ..._,
        }),
        (0, _.jsx)(`div`, {
          className: _,
        }),
        (0, _.jsx)(`span`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _.name,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { category: _ } = _;
  return (0, _.jsx)(`div`, {
    className: void 0,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        src: _.STORE_BASE_URL + _.image_url,
      }),
    }),
  });
}
export { _ as default };
