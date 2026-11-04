_();
function _(_, _, _ = !0) {
  let _ = new URLSearchParams({
    ima: `fit`,
    impolicy: `Letterbox`,
    imcolor: `#000000`,
  });
  return (
    _ && _.set(`imw`, Math.round(_).toString()),
    _ && _.set(`imh`, Math.round(_).toString()),
    !_ || !_ || !_ ? _.set(`letterbox`, `false`) : _.set(`letterbox`, `true`),
    `?` + _.toString()
  );
}
function _(_) {
  if (
    (_.indexOf(`?`) > 0 && (_ = _.split(`?`)[0]),
    _.endsWith(`.jpg`) || _.endsWith(`.jpeg`))
  )
    return 1;
  if (_.endsWith(`.png`)) return 3;
  if (_.endsWith(`.gif`)) return 2;
  if (_.endsWith(`.mp4`)) return 4;
  if (_.endsWith(`.webm`)) return 5;
  if (_.endsWith(`.vtt`)) return 6;
  if (_.endsWith(`.srt`)) return 7;
  if (_.endsWith(`.webp`)) return 10;
}
export { _, _ };
