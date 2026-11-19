/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = (e, t, n) => {
  let r = t.lastIndexOf(`?`),
    i = e[r === -1 || r < t.lastIndexOf(`/`) ? t : t.slice(0, r)];
  return i
    ? typeof i == `function`
      ? i()
      : Promise.resolve(i)
    : new Promise((e, r) => {
        (typeof queueMicrotask == `function` ? queueMicrotask : setTimeout)(
          r.bind(
            null,
            Error(
              `Unknown variable dynamic import: ` +
                t +
                (t.split(`/`).length === n
                  ? ``
                  : `. Note that variables only represent file names one level deep.`),
            ),
          ),
        );
      });
};
export { e as t };
