function _() {
  typeof _ == `function`
    ? _({
        measureText: (_, _) => {
          let _ = _.toString(),
            _ = typeof _?.fontSize == `number` ? _.fontSize : 13;
          return {
            width: _.length * 8,
            height: _ * 1.3,
          };
        },
      })
    : console.error(
        `Cannot find configureTextMeasurement. Recharts not patched correctly for this context.`,
      );
}
