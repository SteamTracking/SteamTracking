var _ = (function (_) {
    return (
      (_.k_ECutArrowStyle = `single`),
      (_.k_EDoubleArrowStyle = `double`),
      (_.k_EThickChevron = `chevron`),
      (_.k_EFilledArrow = `filled`),
      (_.k_EPointyArrow = `pointy`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_.k_EPillCrumb = `pill`),
      (_.k_ECircularCrumb = `circle`),
      (_.k_ESquareCrumb = `square`),
      _
    );
  })({});
_();
var _ = _();
function _(_) {
  let { arrowFill: _, arrowStyle: _, direction: _ } = _;
  switch (_) {
    default:
    case _.k_ECutArrowStyle: {
      let _ = _ == `right` ? 0 : 180;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EDoubleArrowStyle: {
      let _ = _ == `right` ? 180 : 0;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EThickChevron: {
      let _ = _ == `right` ? 0 : 180;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EFilledArrow: {
      let _ = _ == `right` ? 90 : 270;
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        angle: _,
      });
    }
    case _.k_EPointyArrow:
      return (0, _.jsx)(_, {
        fill: _ || `white`,
        role: `presentation`,
        direction: _ || `left`,
      });
  }
}
function _(_) {
  let {
      bIsActive: _,
      breadcrumbActiveColor: _,
      breadcrumbColor: _,
      breadcrumbStyle: _,
    } = _,
    _ = _ ? _ || `#FFFFFF` : _ || `#606974`;
  switch (_) {
    default:
    case _.k_EPillCrumb:
      return (0, _.jsx)(_, {
        fill: _,
        role: `presentation`,
      });
    case _.k_ECircularCrumb:
      return (0, _.jsx)(_, {
        fill: _,
        role: `presentation`,
      });
    case _.k_ESquareCrumb:
      return (0, _.jsx)(_, {
        fill: _,
        role: `presentation`,
      });
  }
}
