import "./chunk~ca0c999570.js";
function _() {
  let _, _;
  return {
    promise: new Promise((_, _) => {
      ((_ = _), (_ = _));
    }),
    resolve: _,
    reject: _,
  };
}
function _(_) {
  return new Promise((_) => setTimeout(_, _));
}
function _(_) {
  let _ = _.toLowerCase();
  if (_.endsWith(`.jpg`) || _.endsWith(`.jpeg`)) return `image/jpeg`;
  if (_.endsWith(`.png`)) return `image/png`;
  if (_.endsWith(`.gif`)) return `image/gif`;
  if (_.endsWith(`.mp4`)) return `video/mp4`;
  if (_.endsWith(`.webm`)) return `video/webm`;
  if (_.endsWith(`.srt`)) return `text/srt`;
  if (_.endsWith(`.vtt`)) return `text/vtt`;
  if (_.endsWith(`.webp`)) return `image/webp`;
}
function _(_) {
  switch (_) {
    case `image/jpeg`:
      return `.jpg`;
    case `image/png`:
      return `.png`;
    case `image/gif`:
      return `.gif`;
    case `video/mp4`:
      return `.mp4`;
    case `video/webm`:
      return `.webm`;
    case `text/vtt`:
      return `.vtt`;
    case `text/srt`:
      return `.srt`;
    case `image/webp`:
      return `.webp`;
  }
  return (
    console.error(`ConvertMimeTypeToExtension:Unexepected mime type `, _),
    `.jpg`
  );
}
function _(_) {
  switch (_) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function _(_) {
  let _ = _(),
    _ = new Image();
  return (
    (_.onload = () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadImage failed to load the image, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  let _ = _(),
    _ = document.createElement(`video`);
  return (
    (_.preload = `metadata`),
    _.addEventListener(`loadedmetadata`, () => _.resolve(_)),
    (_.onerror = (_) => {
      (console.error(`LoadVideo failed to load the video, details`, _),
        _.resolve(void 0));
    }),
    (_.src = _),
    _.promise
  );
}
function _(_) {
  return _.startsWith(`image/`);
}
function _(_) {
  return _.startsWith(`video/`);
}
function _(_, _) {
  return _ ? _(_) : _(_);
}
async function _(_, _) {
  if (_) return _(URL.createObjectURL(_));
  {
    let _ = _(),
      _ = new FileReader();
    ((_.onload = () => _.resolve(_.result ?? void 0)),
      (_.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          _.error,
        ),
          _.resolve(void 0));
      }),
      _.readAsDataURL(_));
    let _ = await _.promise;
    return _ ? _(_.toString()) : void 0;
  }
}
function _(_) {
  return _
    ? _ instanceof HTMLVideoElement
      ? {
          width: _.videoWidth,
          height: _.videoHeight,
        }
      : {
          width: _.width,
          height: _.height,
        }
    : {
        width: 0,
        height: 0,
      };
}
function _(_, _) {
  if (!_) return _;
  let _ = new Set([
    `content-length`,
    `host`,
    `origin`,
    `referer`,
    `user-agent`,
    `cookie`,
    `set-cookie`,
    `connection`,
    `upgrade`,
  ]);
  for (let _ of _) _.has(_.name.toLowerCase()) || (_[_.name] = _.value);
  return _;
}
