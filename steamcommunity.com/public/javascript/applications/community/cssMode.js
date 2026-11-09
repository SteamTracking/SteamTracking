/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { n as e } from "./monacoeditor.js";
var t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.prototype.hasOwnProperty,
  a = (e, a, o, s) => {
    if ((a && typeof a == `object`) || typeof a == `function`)
      for (let c of r(a))
        !i.call(e, c) &&
          c !== o &&
          t(e, c, {
            get: () => a[c],
            enumerable: !(s = n(a, c)) || s.enumerable,
          });
    return e;
  },
  o = (e, t, n) => (a(e, t, `default`), n && a(n, t, `default`)),
  s = {};
o(s, e);
var c = 12e4,
  l = class {
    constructor(e) {
      ((this._defaults = e),
        (this._worker = null),
        (this._client = null),
        (this._idleCheckInterval = window.setInterval(
          () => this._checkIfIdle(),
          3e4,
        )),
        (this._lastUsedTime = 0),
        (this._configChangeListener = this._defaults.onDidChange(() =>
          this._stopWorker(),
        )));
    }
    _stopWorker() {
      ((this._worker &&= (this._worker.dispose(), null)),
        (this._client = null));
    }
    dispose() {
      (clearInterval(this._idleCheckInterval),
        this._configChangeListener.dispose(),
        this._stopWorker());
    }
    _checkIfIdle() {
      this._worker && Date.now() - this._lastUsedTime > c && this._stopWorker();
    }
    _getClient() {
      return (
        (this._lastUsedTime = Date.now()),
        (this._client ||=
          ((this._worker = s.editor.createWebWorker({
            moduleId: `vs/language/css/cssWorker`,
            label: this._defaults.languageId,
            createData: {
              options: this._defaults.options,
              languageId: this._defaults.languageId,
            },
          })),
          this._worker.getProxy())),
        this._client
      );
    }
    getLanguageServiceWorker(...e) {
      let t;
      return this._getClient()
        .then((e) => {
          t = e;
        })
        .then((t) => {
          if (this._worker) return this._worker.withSyncedResources(e);
        })
        .then((e) => t);
    }
  },
  u;
(function (e) {
  function t(e) {
    return typeof e == `string`;
  }
  e.is = t;
})((u ||= {}));
var d;
(function (e) {
  function t(e) {
    return typeof e == `string`;
  }
  e.is = t;
})((d ||= {}));
var f;
(function (e) {
  ((e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647));
  function t(t) {
    return typeof t == `number` && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
  }
  e.is = t;
})((f ||= {}));
var p;
(function (e) {
  ((e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647));
  function t(t) {
    return typeof t == `number` && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
  }
  e.is = t;
})((p ||= {}));
var m;
(function (e) {
  function t(e, t) {
    return (
      e === Number.MAX_VALUE && (e = p.MAX_VALUE),
      t === Number.MAX_VALUE && (t = p.MAX_VALUE),
      { line: e, character: t }
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.objectLiteral(t) && V.uinteger(t.line) && V.uinteger(t.character);
  }
  e.is = n;
})((m ||= {}));
var h;
(function (e) {
  function t(e, t, n, r) {
    if (V.uinteger(e) && V.uinteger(t) && V.uinteger(n) && V.uinteger(r))
      return { start: m.create(e, t), end: m.create(n, r) };
    if (m.is(e) && m.is(t)) return { start: e, end: t };
    throw Error(
      `Range#create called with invalid arguments[${e}, ${t}, ${n}, ${r}]`,
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.objectLiteral(t) && m.is(t.start) && m.is(t.end);
  }
  e.is = n;
})((h ||= {}));
var g;
(function (e) {
  function t(e, t) {
    return { uri: e, range: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      h.is(t.range) &&
      (V.string(t.uri) || V.undefined(t.uri))
    );
  }
  e.is = n;
})((g ||= {}));
var ee;
(function (e) {
  function t(e, t, n, r) {
    return {
      targetUri: e,
      targetRange: t,
      targetSelectionRange: n,
      originSelectionRange: r,
    };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      h.is(t.targetRange) &&
      V.string(t.targetUri) &&
      h.is(t.targetSelectionRange) &&
      (h.is(t.originSelectionRange) || V.undefined(t.originSelectionRange))
    );
  }
  e.is = n;
})((ee ||= {}));
var _;
(function (e) {
  function t(e, t, n, r) {
    return { red: e, green: t, blue: n, alpha: r };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      V.numberRange(t.red, 0, 1) &&
      V.numberRange(t.green, 0, 1) &&
      V.numberRange(t.blue, 0, 1) &&
      V.numberRange(t.alpha, 0, 1)
    );
  }
  e.is = n;
})((_ ||= {}));
var te;
(function (e) {
  function t(e, t) {
    return { range: e, color: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.objectLiteral(t) && h.is(t.range) && _.is(t.color);
  }
  e.is = n;
})((te ||= {}));
var ne;
(function (e) {
  function t(e, t, n) {
    return { label: e, textEdit: t, additionalTextEdits: n };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      V.string(t.label) &&
      (V.undefined(t.textEdit) || C.is(t)) &&
      (V.undefined(t.additionalTextEdits) ||
        V.typedArray(t.additionalTextEdits, C.is))
    );
  }
  e.is = n;
})((ne ||= {}));
var v;
(function (e) {
  ((e.Comment = `comment`), (e.Imports = `imports`), (e.Region = `region`));
})((v ||= {}));
var re;
(function (e) {
  function t(e, t, n, r, i, a) {
    let o = { startLine: e, endLine: t };
    return (
      V.defined(n) && (o.startCharacter = n),
      V.defined(r) && (o.endCharacter = r),
      V.defined(i) && (o.kind = i),
      V.defined(a) && (o.collapsedText = a),
      o
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      V.uinteger(t.startLine) &&
      V.uinteger(t.startLine) &&
      (V.undefined(t.startCharacter) || V.uinteger(t.startCharacter)) &&
      (V.undefined(t.endCharacter) || V.uinteger(t.endCharacter)) &&
      (V.undefined(t.kind) || V.string(t.kind))
    );
  }
  e.is = n;
})((re ||= {}));
var y;
(function (e) {
  function t(e, t) {
    return { location: e, message: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && g.is(t.location) && V.string(t.message);
  }
  e.is = n;
})((y ||= {}));
var b;
(function (e) {
  ((e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4));
})((b ||= {}));
var ie;
(function (e) {
  ((e.Unnecessary = 1), (e.Deprecated = 2));
})((ie ||= {}));
var ae;
(function (e) {
  function t(e) {
    let t = e;
    return V.objectLiteral(t) && V.string(t.href);
  }
  e.is = t;
})((ae ||= {}));
var x;
(function (e) {
  function t(e, t, n, r, i, a) {
    let o = { range: e, message: t };
    return (
      V.defined(n) && (o.severity = n),
      V.defined(r) && (o.code = r),
      V.defined(i) && (o.source = i),
      V.defined(a) && (o.relatedInformation = a),
      o
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.defined(t) &&
      h.is(t.range) &&
      V.string(t.message) &&
      (V.number(t.severity) || V.undefined(t.severity)) &&
      (V.integer(t.code) || V.string(t.code) || V.undefined(t.code)) &&
      (V.undefined(t.codeDescription) || V.string(t.codeDescription?.href)) &&
      (V.string(t.source) || V.undefined(t.source)) &&
      (V.undefined(t.relatedInformation) ||
        V.typedArray(t.relatedInformation, y.is))
    );
  }
  e.is = n;
})((x ||= {}));
var S;
(function (e) {
  function t(e, t, ...n) {
    let r = { title: e, command: t };
    return (V.defined(n) && n.length > 0 && (r.arguments = n), r);
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && V.string(t.title) && V.string(t.command);
  }
  e.is = n;
})((S ||= {}));
var C;
(function (e) {
  function t(e, t) {
    return { range: e, newText: t };
  }
  e.replace = t;
  function n(e, t) {
    return { range: { start: e, end: e }, newText: t };
  }
  e.insert = n;
  function r(e) {
    return { range: e, newText: `` };
  }
  e.del = r;
  function i(e) {
    let t = e;
    return V.objectLiteral(t) && V.string(t.newText) && h.is(t.range);
  }
  e.is = i;
})((C ||= {}));
var w;
(function (e) {
  function t(e, t, n) {
    let r = { label: e };
    return (
      t !== void 0 && (r.needsConfirmation = t),
      n !== void 0 && (r.description = n),
      r
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      V.string(t.label) &&
      (V.boolean(t.needsConfirmation) || t.needsConfirmation === void 0) &&
      (V.string(t.description) || t.description === void 0)
    );
  }
  e.is = n;
})((w ||= {}));
var T;
(function (e) {
  function t(e) {
    let t = e;
    return V.string(t);
  }
  e.is = t;
})((T ||= {}));
var oe;
(function (e) {
  function t(e, t, n) {
    return { range: e, newText: t, annotationId: n };
  }
  e.replace = t;
  function n(e, t, n) {
    return { range: { start: e, end: e }, newText: t, annotationId: n };
  }
  e.insert = n;
  function r(e, t) {
    return { range: e, newText: ``, annotationId: t };
  }
  e.del = r;
  function i(e) {
    let t = e;
    return C.is(t) && (w.is(t.annotationId) || T.is(t.annotationId));
  }
  e.is = i;
})((oe ||= {}));
var se;
(function (e) {
  function t(e, t) {
    return { textDocument: e, edits: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && A.is(t.textDocument) && Array.isArray(t.edits);
  }
  e.is = n;
})((se ||= {}));
var E;
(function (e) {
  function t(e, t, n) {
    let r = { kind: `create`, uri: e };
    return (
      t !== void 0 &&
        (t.overwrite !== void 0 || t.ignoreIfExists !== void 0) &&
        (r.options = t),
      n !== void 0 && (r.annotationId = n),
      r
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t &&
      t.kind === `create` &&
      V.string(t.uri) &&
      (t.options === void 0 ||
        ((t.options.overwrite === void 0 || V.boolean(t.options.overwrite)) &&
          (t.options.ignoreIfExists === void 0 ||
            V.boolean(t.options.ignoreIfExists)))) &&
      (t.annotationId === void 0 || T.is(t.annotationId))
    );
  }
  e.is = n;
})((E ||= {}));
var D;
(function (e) {
  function t(e, t, n, r) {
    let i = { kind: `rename`, oldUri: e, newUri: t };
    return (
      n !== void 0 &&
        (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) &&
        (i.options = n),
      r !== void 0 && (i.annotationId = r),
      i
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t &&
      t.kind === `rename` &&
      V.string(t.oldUri) &&
      V.string(t.newUri) &&
      (t.options === void 0 ||
        ((t.options.overwrite === void 0 || V.boolean(t.options.overwrite)) &&
          (t.options.ignoreIfExists === void 0 ||
            V.boolean(t.options.ignoreIfExists)))) &&
      (t.annotationId === void 0 || T.is(t.annotationId))
    );
  }
  e.is = n;
})((D ||= {}));
var O;
(function (e) {
  function t(e, t, n) {
    let r = { kind: `delete`, uri: e };
    return (
      t !== void 0 &&
        (t.recursive !== void 0 || t.ignoreIfNotExists !== void 0) &&
        (r.options = t),
      n !== void 0 && (r.annotationId = n),
      r
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t &&
      t.kind === `delete` &&
      V.string(t.uri) &&
      (t.options === void 0 ||
        ((t.options.recursive === void 0 || V.boolean(t.options.recursive)) &&
          (t.options.ignoreIfNotExists === void 0 ||
            V.boolean(t.options.ignoreIfNotExists)))) &&
      (t.annotationId === void 0 || T.is(t.annotationId))
    );
  }
  e.is = n;
})((O ||= {}));
var k;
(function (e) {
  function t(e) {
    let t = e;
    return (
      t &&
      (t.changes !== void 0 || t.documentChanges !== void 0) &&
      (t.documentChanges === void 0 ||
        t.documentChanges.every((e) =>
          V.string(e.kind) ? E.is(e) || D.is(e) || O.is(e) : se.is(e),
        ))
    );
  }
  e.is = t;
})((k ||= {}));
var ce;
(function (e) {
  function t(e) {
    return { uri: e };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && V.string(t.uri);
  }
  e.is = n;
})((ce ||= {}));
var le;
(function (e) {
  function t(e, t) {
    return { uri: e, version: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && V.string(t.uri) && V.integer(t.version);
  }
  e.is = n;
})((le ||= {}));
var A;
(function (e) {
  function t(e, t) {
    return { uri: e, version: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.defined(t) &&
      V.string(t.uri) &&
      (t.version === null || V.integer(t.version))
    );
  }
  e.is = n;
})((A ||= {}));
var ue;
(function (e) {
  function t(e, t, n, r) {
    return { uri: e, languageId: t, version: n, text: r };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.defined(t) &&
      V.string(t.uri) &&
      V.string(t.languageId) &&
      V.integer(t.version) &&
      V.string(t.text)
    );
  }
  e.is = n;
})((ue ||= {}));
var j;
(function (e) {
  ((e.PlainText = `plaintext`), (e.Markdown = `markdown`));
  function t(t) {
    let n = t;
    return n === e.PlainText || n === e.Markdown;
  }
  e.is = t;
})((j ||= {}));
var M;
(function (e) {
  function t(e) {
    let t = e;
    return V.objectLiteral(e) && j.is(t.kind) && V.string(t.value);
  }
  e.is = t;
})((M ||= {}));
var N;
(function (e) {
  ((e.Text = 1),
    (e.Method = 2),
    (e.Function = 3),
    (e.Constructor = 4),
    (e.Field = 5),
    (e.Variable = 6),
    (e.Class = 7),
    (e.Interface = 8),
    (e.Module = 9),
    (e.Property = 10),
    (e.Unit = 11),
    (e.Value = 12),
    (e.Enum = 13),
    (e.Keyword = 14),
    (e.Snippet = 15),
    (e.Color = 16),
    (e.File = 17),
    (e.Reference = 18),
    (e.Folder = 19),
    (e.EnumMember = 20),
    (e.Constant = 21),
    (e.Struct = 22),
    (e.Event = 23),
    (e.Operator = 24),
    (e.TypeParameter = 25));
})((N ||= {}));
var P;
(function (e) {
  ((e.PlainText = 1), (e.Snippet = 2));
})((P ||= {}));
var de;
(function (e) {
  e.Deprecated = 1;
})((de ||= {}));
var fe;
(function (e) {
  function t(e, t, n) {
    return { newText: e, insert: t, replace: n };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return t && V.string(t.newText) && h.is(t.insert) && h.is(t.replace);
  }
  e.is = n;
})((fe ||= {}));
var pe;
(function (e) {
  ((e.asIs = 1), (e.adjustIndentation = 2));
})((pe ||= {}));
var me;
(function (e) {
  function t(e) {
    let t = e;
    return (
      t &&
      (V.string(t.detail) || t.detail === void 0) &&
      (V.string(t.description) || t.description === void 0)
    );
  }
  e.is = t;
})((me ||= {}));
var he;
(function (e) {
  function t(e) {
    return { label: e };
  }
  e.create = t;
})((he ||= {}));
var ge;
(function (e) {
  function t(e, t) {
    return { items: e || [], isIncomplete: !!t };
  }
  e.create = t;
})((ge ||= {}));
var F;
(function (e) {
  function t(e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`);
  }
  e.fromPlainText = t;
  function n(e) {
    let t = e;
    return (
      V.string(t) ||
      (V.objectLiteral(t) && V.string(t.language) && V.string(t.value))
    );
  }
  e.is = n;
})((F ||= {}));
var _e;
(function (e) {
  function t(e) {
    let t = e;
    return (
      !!t &&
      V.objectLiteral(t) &&
      (M.is(t.contents) ||
        F.is(t.contents) ||
        V.typedArray(t.contents, F.is)) &&
      (e.range === void 0 || h.is(e.range))
    );
  }
  e.is = t;
})((_e ||= {}));
var ve;
(function (e) {
  function t(e, t) {
    return t ? { label: e, documentation: t } : { label: e };
  }
  e.create = t;
})((ve ||= {}));
var ye;
(function (e) {
  function t(e, t, ...n) {
    let r = { label: e };
    return (
      V.defined(t) && (r.documentation = t),
      (r.parameters = V.defined(n) ? n : []),
      r
    );
  }
  e.create = t;
})((ye ||= {}));
var I;
(function (e) {
  ((e.Text = 1), (e.Read = 2), (e.Write = 3));
})((I ||= {}));
var be;
(function (e) {
  function t(e, t) {
    let n = { range: e };
    return (V.number(t) && (n.kind = t), n);
  }
  e.create = t;
})((be ||= {}));
var L;
(function (e) {
  ((e.File = 1),
    (e.Module = 2),
    (e.Namespace = 3),
    (e.Package = 4),
    (e.Class = 5),
    (e.Method = 6),
    (e.Property = 7),
    (e.Field = 8),
    (e.Constructor = 9),
    (e.Enum = 10),
    (e.Interface = 11),
    (e.Function = 12),
    (e.Variable = 13),
    (e.Constant = 14),
    (e.String = 15),
    (e.Number = 16),
    (e.Boolean = 17),
    (e.Array = 18),
    (e.Object = 19),
    (e.Key = 20),
    (e.Null = 21),
    (e.EnumMember = 22),
    (e.Struct = 23),
    (e.Event = 24),
    (e.Operator = 25),
    (e.TypeParameter = 26));
})((L ||= {}));
var xe;
(function (e) {
  e.Deprecated = 1;
})((xe ||= {}));
var Se;
(function (e) {
  function t(e, t, n, r, i) {
    let a = { name: e, kind: t, location: { uri: r, range: n } };
    return (i && (a.containerName = i), a);
  }
  e.create = t;
})((Se ||= {}));
var Ce;
(function (e) {
  function t(e, t, n, r) {
    return r === void 0
      ? { name: e, kind: t, location: { uri: n } }
      : { name: e, kind: t, location: { uri: n, range: r } };
  }
  e.create = t;
})((Ce ||= {}));
var we;
(function (e) {
  function t(e, t, n, r, i, a) {
    let o = { name: e, detail: t, kind: n, range: r, selectionRange: i };
    return (a !== void 0 && (o.children = a), o);
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t &&
      V.string(t.name) &&
      V.number(t.kind) &&
      h.is(t.range) &&
      h.is(t.selectionRange) &&
      (t.detail === void 0 || V.string(t.detail)) &&
      (t.deprecated === void 0 || V.boolean(t.deprecated)) &&
      (t.children === void 0 || Array.isArray(t.children)) &&
      (t.tags === void 0 || Array.isArray(t.tags))
    );
  }
  e.is = n;
})((we ||= {}));
var Te;
(function (e) {
  ((e.Empty = ``),
    (e.QuickFix = `quickfix`),
    (e.Refactor = `refactor`),
    (e.RefactorExtract = `refactor.extract`),
    (e.RefactorInline = `refactor.inline`),
    (e.RefactorRewrite = `refactor.rewrite`),
    (e.Source = `source`),
    (e.SourceOrganizeImports = `source.organizeImports`),
    (e.SourceFixAll = `source.fixAll`));
})((Te ||= {}));
var R;
(function (e) {
  ((e.Invoked = 1), (e.Automatic = 2));
})((R ||= {}));
var Ee;
(function (e) {
  function t(e, t, n) {
    let r = { diagnostics: e };
    return (t != null && (r.only = t), n != null && (r.triggerKind = n), r);
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.defined(t) &&
      V.typedArray(t.diagnostics, x.is) &&
      (t.only === void 0 || V.typedArray(t.only, V.string)) &&
      (t.triggerKind === void 0 ||
        t.triggerKind === R.Invoked ||
        t.triggerKind === R.Automatic)
    );
  }
  e.is = n;
})((Ee ||= {}));
var De;
(function (e) {
  function t(e, t, n) {
    let r = { title: e },
      i = !0;
    return (
      typeof t == `string`
        ? ((i = !1), (r.kind = t))
        : S.is(t)
          ? (r.command = t)
          : (r.edit = t),
      i && n !== void 0 && (r.kind = n),
      r
    );
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t &&
      V.string(t.title) &&
      (t.diagnostics === void 0 || V.typedArray(t.diagnostics, x.is)) &&
      (t.kind === void 0 || V.string(t.kind)) &&
      (t.edit !== void 0 || t.command !== void 0) &&
      (t.command === void 0 || S.is(t.command)) &&
      (t.isPreferred === void 0 || V.boolean(t.isPreferred)) &&
      (t.edit === void 0 || k.is(t.edit))
    );
  }
  e.is = n;
})((De ||= {}));
var Oe;
(function (e) {
  function t(e, t) {
    let n = { range: e };
    return (V.defined(t) && (n.data = t), n);
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.defined(t) &&
      h.is(t.range) &&
      (V.undefined(t.command) || S.is(t.command))
    );
  }
  e.is = n;
})((Oe ||= {}));
var ke;
(function (e) {
  function t(e, t) {
    return { tabSize: e, insertSpaces: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && V.uinteger(t.tabSize) && V.boolean(t.insertSpaces);
  }
  e.is = n;
})((ke ||= {}));
var Ae;
(function (e) {
  function t(e, t, n) {
    return { range: e, target: t, data: n };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.defined(t) &&
      h.is(t.range) &&
      (V.undefined(t.target) || V.string(t.target))
    );
  }
  e.is = n;
})((Ae ||= {}));
var je;
(function (e) {
  function t(e, t) {
    return { range: e, parent: t };
  }
  e.create = t;
  function n(t) {
    let n = t;
    return (
      V.objectLiteral(n) &&
      h.is(n.range) &&
      (n.parent === void 0 || e.is(n.parent))
    );
  }
  e.is = n;
})((je ||= {}));
var Me;
(function (e) {
  ((e.namespace = `namespace`),
    (e.type = `type`),
    (e.class = `class`),
    (e.enum = `enum`),
    (e.interface = `interface`),
    (e.struct = `struct`),
    (e.typeParameter = `typeParameter`),
    (e.parameter = `parameter`),
    (e.variable = `variable`),
    (e.property = `property`),
    (e.enumMember = `enumMember`),
    (e.event = `event`),
    (e.function = `function`),
    (e.method = `method`),
    (e.macro = `macro`),
    (e.keyword = `keyword`),
    (e.modifier = `modifier`),
    (e.comment = `comment`),
    (e.string = `string`),
    (e.number = `number`),
    (e.regexp = `regexp`),
    (e.operator = `operator`),
    (e.decorator = `decorator`));
})((Me ||= {}));
var Ne;
(function (e) {
  ((e.declaration = `declaration`),
    (e.definition = `definition`),
    (e.readonly = `readonly`),
    (e.static = `static`),
    (e.deprecated = `deprecated`),
    (e.abstract = `abstract`),
    (e.async = `async`),
    (e.modification = `modification`),
    (e.documentation = `documentation`),
    (e.defaultLibrary = `defaultLibrary`));
})((Ne ||= {}));
var Pe;
(function (e) {
  function t(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      (t.resultId === void 0 || typeof t.resultId == `string`) &&
      Array.isArray(t.data) &&
      (t.data.length === 0 || typeof t.data[0] == `number`)
    );
  }
  e.is = t;
})((Pe ||= {}));
var Fe;
(function (e) {
  function t(e, t) {
    return { range: e, text: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return t != null && h.is(t.range) && V.string(t.text);
  }
  e.is = n;
})((Fe ||= {}));
var Ie;
(function (e) {
  function t(e, t, n) {
    return { range: e, variableName: t, caseSensitiveLookup: n };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t != null &&
      h.is(t.range) &&
      V.boolean(t.caseSensitiveLookup) &&
      (V.string(t.variableName) || t.variableName === void 0)
    );
  }
  e.is = n;
})((Ie ||= {}));
var Le;
(function (e) {
  function t(e, t) {
    return { range: e, expression: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      t != null &&
      h.is(t.range) &&
      (V.string(t.expression) || t.expression === void 0)
    );
  }
  e.is = n;
})((Le ||= {}));
var Re;
(function (e) {
  function t(e, t) {
    return { frameId: e, stoppedLocation: t };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return V.defined(t) && h.is(e.stoppedLocation);
  }
  e.is = n;
})((Re ||= {}));
var z;
(function (e) {
  ((e.Type = 1), (e.Parameter = 2));
  function t(e) {
    return e === 1 || e === 2;
  }
  e.is = t;
})((z ||= {}));
var B;
(function (e) {
  function t(e) {
    return { value: e };
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      V.objectLiteral(t) &&
      (t.tooltip === void 0 || V.string(t.tooltip) || M.is(t.tooltip)) &&
      (t.location === void 0 || g.is(t.location)) &&
      (t.command === void 0 || S.is(t.command))
    );
  }
  e.is = n;
})((B ||= {}));
var ze;
(function (e) {
  function t(e, t, n) {
    let r = { position: e, label: t };
    return (n !== void 0 && (r.kind = n), r);
  }
  e.create = t;
  function n(e) {
    let t = e;
    return (
      (V.objectLiteral(t) &&
        m.is(t.position) &&
        (V.string(t.label) || V.typedArray(t.label, B.is)) &&
        (t.kind === void 0 || z.is(t.kind)) &&
        t.textEdits === void 0) ||
      (V.typedArray(t.textEdits, C.is) &&
        (t.tooltip === void 0 || V.string(t.tooltip) || M.is(t.tooltip)) &&
        (t.paddingLeft === void 0 || V.boolean(t.paddingLeft)) &&
        (t.paddingRight === void 0 || V.boolean(t.paddingRight)))
    );
  }
  e.is = n;
})((ze ||= {}));
var Be;
(function (e) {
  function t(e) {
    return { kind: `snippet`, value: e };
  }
  e.createSnippet = t;
})((Be ||= {}));
var Ve;
(function (e) {
  function t(e, t, n, r) {
    return { insertText: e, filterText: t, range: n, command: r };
  }
  e.create = t;
})((Ve ||= {}));
var He;
(function (e) {
  function t(e) {
    return { items: e };
  }
  e.create = t;
})((He ||= {}));
var Ue;
(function (e) {
  ((e.Invoked = 0), (e.Automatic = 1));
})((Ue ||= {}));
var We;
(function (e) {
  function t(e, t) {
    return { range: e, text: t };
  }
  e.create = t;
})((We ||= {}));
var Ge;
(function (e) {
  function t(e, t) {
    return { triggerKind: e, selectedCompletionInfo: t };
  }
  e.create = t;
})((Ge ||= {}));
var Ke;
(function (e) {
  function t(e) {
    let t = e;
    return V.objectLiteral(t) && d.is(t.uri) && V.string(t.name);
  }
  e.is = t;
})((Ke ||= {}));
var qe;
(function (e) {
  function t(e, t, n, r) {
    return new Je(e, t, n, r);
  }
  e.create = t;
  function n(e) {
    let t = e;
    return !!(
      V.defined(t) &&
      V.string(t.uri) &&
      (V.undefined(t.languageId) || V.string(t.languageId)) &&
      V.uinteger(t.lineCount) &&
      V.func(t.getText) &&
      V.func(t.positionAt) &&
      V.func(t.offsetAt)
    );
  }
  e.is = n;
  function r(e, t) {
    let n = e.getText(),
      r = i(t, (e, t) => {
        let n = e.range.start.line - t.range.start.line;
        return n === 0 ? e.range.start.character - t.range.start.character : n;
      }),
      a = n.length;
    for (let t = r.length - 1; t >= 0; t--) {
      let i = r[t],
        o = e.offsetAt(i.range.start),
        s = e.offsetAt(i.range.end);
      if (s <= a) n = n.substring(0, o) + i.newText + n.substring(s, n.length);
      else throw Error(`Overlapping edit`);
      a = o;
    }
    return n;
  }
  e.applyEdits = r;
  function i(e, t) {
    if (e.length <= 1) return e;
    let n = (e.length / 2) | 0,
      r = e.slice(0, n),
      a = e.slice(n);
    (i(r, t), i(a, t));
    let o = 0,
      s = 0,
      c = 0;
    for (; o < r.length && s < a.length;)
      t(r[o], a[s]) <= 0 ? (e[c++] = r[o++]) : (e[c++] = a[s++]);
    for (; o < r.length;) e[c++] = r[o++];
    for (; s < a.length;) e[c++] = a[s++];
    return e;
  }
})((qe ||= {}));
var Je = class {
    constructor(e, t, n, r) {
      ((this._uri = e),
        (this._languageId = t),
        (this._version = n),
        (this._content = r),
        (this._lineOffsets = void 0));
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e) {
      if (e) {
        let t = this.offsetAt(e.start),
          n = this.offsetAt(e.end);
        return this._content.substring(t, n);
      }
      return this._content;
    }
    update(e, t) {
      ((this._content = e.text),
        (this._version = t),
        (this._lineOffsets = void 0));
    }
    getLineOffsets() {
      if (this._lineOffsets === void 0) {
        let e = [],
          t = this._content,
          n = !0;
        for (let r = 0; r < t.length; r++) {
          n &&= (e.push(r), !1);
          let i = t.charAt(r);
          ((n =
            i === `\r` ||
            i ===
              `
`),
            i === `\r` &&
              r + 1 < t.length &&
              t.charAt(r + 1) ===
                `
` &&
              r++);
        }
        (n && t.length > 0 && e.push(t.length), (this._lineOffsets = e));
      }
      return this._lineOffsets;
    }
    positionAt(e) {
      e = Math.max(Math.min(e, this._content.length), 0);
      let t = this.getLineOffsets(),
        n = 0,
        r = t.length;
      if (r === 0) return m.create(0, e);
      for (; n < r;) {
        let i = Math.floor((n + r) / 2);
        t[i] > e ? (r = i) : (n = i + 1);
      }
      let i = n - 1;
      return m.create(i, e - t[i]);
    }
    offsetAt(e) {
      let t = this.getLineOffsets();
      if (e.line >= t.length) return this._content.length;
      if (e.line < 0) return 0;
      let n = t[e.line],
        r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
      return Math.max(Math.min(n + e.character, r), n);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  },
  V;
(function (e) {
  let t = Object.prototype.toString;
  function n(e) {
    return e !== void 0;
  }
  e.defined = n;
  function r(e) {
    return e === void 0;
  }
  e.undefined = r;
  function i(e) {
    return e === !0 || e === !1;
  }
  e.boolean = i;
  function a(e) {
    return t.call(e) === `[object String]`;
  }
  e.string = a;
  function o(e) {
    return t.call(e) === `[object Number]`;
  }
  e.number = o;
  function s(e, n, r) {
    return t.call(e) === `[object Number]` && n <= e && e <= r;
  }
  e.numberRange = s;
  function c(e) {
    return (
      t.call(e) === `[object Number]` && -2147483648 <= e && e <= 2147483647
    );
  }
  e.integer = c;
  function l(e) {
    return t.call(e) === `[object Number]` && 0 <= e && e <= 2147483647;
  }
  e.uinteger = l;
  function u(e) {
    return t.call(e) === `[object Function]`;
  }
  e.func = u;
  function d(e) {
    return typeof e == `object` && !!e;
  }
  e.objectLiteral = d;
  function f(e, t) {
    return Array.isArray(e) && e.every(t);
  }
  e.typedArray = f;
})((V ||= {}));
var H = class {
  constructor(e, t, n) {
    ((this._languageId = e),
      (this._worker = t),
      (this._disposables = []),
      (this._listener = Object.create(null)));
    let r = (e) => {
        let t = e.getLanguageId();
        if (t !== this._languageId) return;
        let n;
        ((this._listener[e.uri.toString()] = e.onDidChangeContent(() => {
          (window.clearTimeout(n),
            (n = window.setTimeout(() => this._doValidate(e.uri, t), 500)));
        })),
          this._doValidate(e.uri, t));
      },
      i = (e) => {
        s.editor.setModelMarkers(e, this._languageId, []);
        let t = e.uri.toString(),
          n = this._listener[t];
        n && (n.dispose(), delete this._listener[t]);
      };
    (this._disposables.push(s.editor.onDidCreateModel(r)),
      this._disposables.push(s.editor.onWillDisposeModel(i)),
      this._disposables.push(
        s.editor.onDidChangeModelLanguage((e) => {
          (i(e.model), r(e.model));
        }),
      ),
      this._disposables.push(
        n((e) => {
          s.editor.getModels().forEach((e) => {
            e.getLanguageId() === this._languageId && (i(e), r(e));
          });
        }),
      ),
      this._disposables.push({
        dispose: () => {
          s.editor.getModels().forEach(i);
          for (let e in this._listener) this._listener[e].dispose();
        },
      }),
      s.editor.getModels().forEach(r));
  }
  dispose() {
    (this._disposables.forEach((e) => e && e.dispose()),
      (this._disposables.length = 0));
  }
  _doValidate(e, t) {
    this._worker(e)
      .then((t) => t.doValidation(e.toString()))
      .then((n) => {
        let r = n.map((t) => Xe(e, t)),
          i = s.editor.getModel(e);
        i && i.getLanguageId() === t && s.editor.setModelMarkers(i, t, r);
      })
      .then(void 0, (e) => {
        console.error(e);
      });
  }
};
function Ye(e) {
  switch (e) {
    case b.Error:
      return s.MarkerSeverity.Error;
    case b.Warning:
      return s.MarkerSeverity.Warning;
    case b.Information:
      return s.MarkerSeverity.Info;
    case b.Hint:
      return s.MarkerSeverity.Hint;
    default:
      return s.MarkerSeverity.Info;
  }
}
function Xe(e, t) {
  let n = typeof t.code == `number` ? String(t.code) : t.code;
  return {
    severity: Ye(t.severity),
    startLineNumber: t.range.start.line + 1,
    startColumn: t.range.start.character + 1,
    endLineNumber: t.range.end.line + 1,
    endColumn: t.range.end.character + 1,
    message: t.message,
    code: n,
    source: t.source,
  };
}
var U = class {
  constructor(e, t) {
    ((this._worker = e), (this._triggerCharacters = t));
  }
  get triggerCharacters() {
    return this._triggerCharacters;
  }
  provideCompletionItems(e, t, n, r) {
    let i = e.uri;
    return this._worker(i)
      .then((e) => e.doComplete(i.toString(), W(t)))
      .then((n) => {
        if (!n) return;
        let r = e.getWordUntilPosition(t),
          i = new s.Range(
            t.lineNumber,
            r.startColumn,
            t.lineNumber,
            r.endColumn,
          ),
          a = n.items.map((e) => {
            let t = {
              label: e.label,
              insertText: e.insertText || e.label,
              sortText: e.sortText,
              filterText: e.filterText,
              documentation: e.documentation,
              detail: e.detail,
              command: $e(e.command),
              range: i,
              kind: Qe(e.kind),
            };
            return (
              e.textEdit &&
                ((t.range = Ze(e.textEdit)
                  ? {
                      insert: K(e.textEdit.insert),
                      replace: K(e.textEdit.replace),
                    }
                  : K(e.textEdit.range)),
                (t.insertText = e.textEdit.newText)),
              e.additionalTextEdits &&
                (t.additionalTextEdits = e.additionalTextEdits.map(q)),
              e.insertTextFormat === P.Snippet &&
                (t.insertTextRules =
                  s.languages.CompletionItemInsertTextRule.InsertAsSnippet),
              t
            );
          });
        return { isIncomplete: n.isIncomplete, suggestions: a };
      });
  }
};
function W(e) {
  if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
}
function G(e) {
  if (e)
    return {
      start: { line: e.startLineNumber - 1, character: e.startColumn - 1 },
      end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
    };
}
function K(e) {
  if (e)
    return new s.Range(
      e.start.line + 1,
      e.start.character + 1,
      e.end.line + 1,
      e.end.character + 1,
    );
}
function Ze(e) {
  return e.insert !== void 0 && e.replace !== void 0;
}
function Qe(e) {
  let t = s.languages.CompletionItemKind;
  switch (e) {
    case N.Text:
      return t.Text;
    case N.Method:
      return t.Method;
    case N.Function:
      return t.Function;
    case N.Constructor:
      return t.Constructor;
    case N.Field:
      return t.Field;
    case N.Variable:
      return t.Variable;
    case N.Class:
      return t.Class;
    case N.Interface:
      return t.Interface;
    case N.Module:
      return t.Module;
    case N.Property:
      return t.Property;
    case N.Unit:
      return t.Unit;
    case N.Value:
      return t.Value;
    case N.Enum:
      return t.Enum;
    case N.Keyword:
      return t.Keyword;
    case N.Snippet:
      return t.Snippet;
    case N.Color:
      return t.Color;
    case N.File:
      return t.File;
    case N.Reference:
      return t.Reference;
  }
  return t.Property;
}
function q(e) {
  if (e) return { range: K(e.range), text: e.newText };
}
function $e(e) {
  return e && e.command === `editor.action.triggerSuggest`
    ? { id: e.command, title: e.title, arguments: e.arguments }
    : void 0;
}
var et = class {
  constructor(e) {
    this._worker = e;
  }
  provideHover(e, t, n) {
    let r = e.uri;
    return this._worker(r)
      .then((e) => e.doHover(r.toString(), W(t)))
      .then((e) => {
        if (e) return { range: K(e.range), contents: nt(e.contents) };
      });
  }
};
function tt(e) {
  return e && typeof e == `object` && typeof e.kind == `string`;
}
function J(e) {
  return typeof e == `string`
    ? { value: e }
    : tt(e)
      ? e.kind === `plaintext`
        ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`) }
        : { value: e.value }
      : {
          value:
            "```" +
            e.language +
            `
` +
            e.value +
            "\n```\n",
        };
}
function nt(e) {
  if (e) return Array.isArray(e) ? e.map(J) : [J(e)];
}
var Y = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentHighlights(e, t, n) {
    let r = e.uri;
    return this._worker(r)
      .then((e) => e.findDocumentHighlights(r.toString(), W(t)))
      .then((e) => {
        if (e) return e.map((e) => ({ range: K(e.range), kind: rt(e.kind) }));
      });
  }
};
function rt(e) {
  switch (e) {
    case I.Read:
      return s.languages.DocumentHighlightKind.Read;
    case I.Write:
      return s.languages.DocumentHighlightKind.Write;
    case I.Text:
      return s.languages.DocumentHighlightKind.Text;
  }
  return s.languages.DocumentHighlightKind.Text;
}
var X = class {
  constructor(e) {
    this._worker = e;
  }
  provideDefinition(e, t, n) {
    let r = e.uri;
    return this._worker(r)
      .then((e) => e.findDefinition(r.toString(), W(t)))
      .then((e) => {
        if (e) return [Z(e)];
      });
  }
};
function Z(e) {
  return { uri: s.Uri.parse(e.uri), range: K(e.range) };
}
var Q = class {
    constructor(e) {
      this._worker = e;
    }
    provideReferences(e, t, n, r) {
      let i = e.uri;
      return this._worker(i)
        .then((e) => e.findReferences(i.toString(), W(t)))
        .then((e) => {
          if (e) return e.map(Z);
        });
    }
  },
  it = class {
    constructor(e) {
      this._worker = e;
    }
    provideRenameEdits(e, t, n, r) {
      let i = e.uri;
      return this._worker(i)
        .then((e) => e.doRename(i.toString(), W(t), n))
        .then((e) => at(e));
    }
  };
function at(e) {
  if (!e || !e.changes) return;
  let t = [];
  for (let n in e.changes) {
    let r = s.Uri.parse(n);
    for (let i of e.changes[n])
      t.push({
        resource: r,
        versionId: void 0,
        textEdit: { range: K(i.range), text: i.newText },
      });
  }
  return { edits: t };
}
var ot = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentSymbols(e, t) {
    let n = e.uri;
    return this._worker(n)
      .then((e) => e.findDocumentSymbols(n.toString()))
      .then((e) => {
        if (e)
          return e.map((e) =>
            st(e)
              ? ct(e)
              : {
                  name: e.name,
                  detail: ``,
                  containerName: e.containerName,
                  kind: lt(e.kind),
                  range: K(e.location.range),
                  selectionRange: K(e.location.range),
                  tags: [],
                },
          );
      });
  }
};
function st(e) {
  return `children` in e;
}
function ct(e) {
  return {
    name: e.name,
    detail: e.detail ?? ``,
    kind: lt(e.kind),
    range: K(e.range),
    selectionRange: K(e.selectionRange),
    tags: e.tags ?? [],
    children: (e.children ?? []).map((e) => ct(e)),
  };
}
function lt(e) {
  let t = s.languages.SymbolKind;
  switch (e) {
    case L.File:
      return t.File;
    case L.Module:
      return t.Module;
    case L.Namespace:
      return t.Namespace;
    case L.Package:
      return t.Package;
    case L.Class:
      return t.Class;
    case L.Method:
      return t.Method;
    case L.Property:
      return t.Property;
    case L.Field:
      return t.Field;
    case L.Constructor:
      return t.Constructor;
    case L.Enum:
      return t.Enum;
    case L.Interface:
      return t.Interface;
    case L.Function:
      return t.Function;
    case L.Variable:
      return t.Variable;
    case L.Constant:
      return t.Constant;
    case L.String:
      return t.String;
    case L.Number:
      return t.Number;
    case L.Boolean:
      return t.Boolean;
    case L.Array:
      return t.Array;
  }
  return t.Function;
}
var ut = class {
    constructor(e) {
      this._worker = e;
    }
    provideLinks(e, t) {
      let n = e.uri;
      return this._worker(n)
        .then((e) => e.findDocumentLinks(n.toString()))
        .then((e) => {
          if (e)
            return {
              links: e.map((e) => ({ range: K(e.range), url: e.target })),
            };
        });
    }
  },
  dt = class {
    constructor(e) {
      this._worker = e;
    }
    provideDocumentFormattingEdits(e, t, n) {
      let r = e.uri;
      return this._worker(r).then((e) =>
        e.format(r.toString(), null, $(t)).then((e) => {
          if (e && e.length !== 0) return e.map(q);
        }),
      );
    }
  },
  ft = class {
    constructor(e) {
      ((this._worker = e), (this.canFormatMultipleRanges = !1));
    }
    provideDocumentRangeFormattingEdits(e, t, n, r) {
      let i = e.uri;
      return this._worker(i).then((e) =>
        e.format(i.toString(), G(t), $(n)).then((e) => {
          if (e && e.length !== 0) return e.map(q);
        }),
      );
    }
  };
function $(e) {
  return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
}
var pt = class {
    constructor(e) {
      this._worker = e;
    }
    provideDocumentColors(e, t) {
      let n = e.uri;
      return this._worker(n)
        .then((e) => e.findDocumentColors(n.toString()))
        .then((e) => {
          if (e) return e.map((e) => ({ color: e.color, range: K(e.range) }));
        });
    }
    provideColorPresentations(e, t, n) {
      let r = e.uri;
      return this._worker(r)
        .then((e) => e.getColorPresentations(r.toString(), t.color, G(t.range)))
        .then((e) => {
          if (e)
            return e.map((e) => {
              let t = { label: e.label };
              return (
                e.textEdit && (t.textEdit = q(e.textEdit)),
                e.additionalTextEdits &&
                  (t.additionalTextEdits = e.additionalTextEdits.map(q)),
                t
              );
            });
        });
    }
  },
  mt = class {
    constructor(e) {
      this._worker = e;
    }
    provideFoldingRanges(e, t, n) {
      let r = e.uri;
      return this._worker(r)
        .then((e) => e.getFoldingRanges(r.toString(), t))
        .then((e) => {
          if (e)
            return e.map((e) => {
              let t = { start: e.startLine + 1, end: e.endLine + 1 };
              return (e.kind !== void 0 && (t.kind = ht(e.kind)), t);
            });
        });
    }
  };
function ht(e) {
  switch (e) {
    case v.Comment:
      return s.languages.FoldingRangeKind.Comment;
    case v.Imports:
      return s.languages.FoldingRangeKind.Imports;
    case v.Region:
      return s.languages.FoldingRangeKind.Region;
  }
}
var gt = class {
  constructor(e) {
    this._worker = e;
  }
  provideSelectionRanges(e, t, n) {
    let r = e.uri;
    return this._worker(r)
      .then((e) => e.getSelectionRanges(r.toString(), t.map(W)))
      .then((e) => {
        if (e)
          return e.map((e) => {
            let t = [];
            for (; e;) (t.push({ range: K(e.range) }), (e = e.parent));
            return t;
          });
      });
  }
};
function _t(e) {
  let t = [],
    n = [],
    r = new l(e);
  t.push(r);
  let i = (...e) => r.getLanguageServiceWorker(...e);
  function a() {
    let { languageId: t, modeConfiguration: r } = e;
    (yt(n),
      r.completionItems &&
        n.push(
          s.languages.registerCompletionItemProvider(
            t,
            new U(i, [`/`, `-`, `:`]),
          ),
        ),
      r.hovers && n.push(s.languages.registerHoverProvider(t, new et(i))),
      r.documentHighlights &&
        n.push(s.languages.registerDocumentHighlightProvider(t, new Y(i))),
      r.definitions &&
        n.push(s.languages.registerDefinitionProvider(t, new X(i))),
      r.references &&
        n.push(s.languages.registerReferenceProvider(t, new Q(i))),
      r.documentSymbols &&
        n.push(s.languages.registerDocumentSymbolProvider(t, new ot(i))),
      r.rename && n.push(s.languages.registerRenameProvider(t, new it(i))),
      r.colors && n.push(s.languages.registerColorProvider(t, new pt(i))),
      r.foldingRanges &&
        n.push(s.languages.registerFoldingRangeProvider(t, new mt(i))),
      r.diagnostics && n.push(new H(t, i, e.onDidChange)),
      r.selectionRanges &&
        n.push(s.languages.registerSelectionRangeProvider(t, new gt(i))),
      r.documentFormattingEdits &&
        n.push(
          s.languages.registerDocumentFormattingEditProvider(t, new dt(i)),
        ),
      r.documentRangeFormattingEdits &&
        n.push(
          s.languages.registerDocumentRangeFormattingEditProvider(t, new ft(i)),
        ));
  }
  return (a(), t.push(vt(n)), vt(t));
}
function vt(e) {
  return { dispose: () => yt(e) };
}
function yt(e) {
  for (; e.length;) e.pop().dispose();
}
export {
  U as CompletionAdapter,
  X as DefinitionAdapter,
  H as DiagnosticsAdapter,
  pt as DocumentColorAdapter,
  dt as DocumentFormattingEditProvider,
  Y as DocumentHighlightAdapter,
  ut as DocumentLinkAdapter,
  ft as DocumentRangeFormattingEditProvider,
  ot as DocumentSymbolAdapter,
  mt as FoldingRangeAdapter,
  et as HoverAdapter,
  Q as ReferenceAdapter,
  it as RenameAdapter,
  gt as SelectionRangeAdapter,
  l as WorkerManager,
  W as fromPosition,
  G as fromRange,
  _t as setupMode,
  K as toRange,
  q as toTextEdit,
};
