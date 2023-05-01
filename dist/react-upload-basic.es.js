import Oe, { useRef as sr, useState as lr } from "react";
import Se from "styled-components";
var X = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function fr() {
  if (Te)
    return A;
  Te = 1;
  var j = Oe, y = Symbol.for("react.element"), k = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, C = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(m, f, S) {
    var v, g = {}, _ = null, W = null;
    S !== void 0 && (_ = "" + S), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (v in f)
      E.call(f, v) && !O.hasOwnProperty(v) && (g[v] = f[v]);
    if (m && m.defaultProps)
      for (v in f = m.defaultProps, f)
        g[v] === void 0 && (g[v] = f[v]);
    return { $$typeof: y, type: m, key: _, ref: W, props: g, _owner: C.current };
  }
  return A.Fragment = k, A.jsx = R, A.jsxs = R, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function cr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Oe, y = Symbol.for("react.element"), k = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), m = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Z = Symbol.iterator, Pe = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var P = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, ke = !1, Fe = !1, De = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === O || Ae || e === C || e === S || e === v || De || e === W || je || ke || Fe || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === R || e.$$typeof === m || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case k:
          return "Portal";
        case O:
          return "Profiler";
        case C:
          return "StrictMode";
        case S:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ee(r) + ".Consumer";
          case R:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return $e(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : h(e.type) || "Memo";
          case _: {
            var o = e, u = o._payload, i = o._init;
            try {
              return h(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, F = 0, re, te, ne, ae, ie, oe, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ye() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: re
            }),
            info: T({}, e, {
              value: te
            }),
            warn: T({}, e, {
              value: ne
            }),
            error: T({}, e, {
              value: ae
            }),
            group: T({}, e, {
              value: ie
            }),
            groupCollapsed: T({}, e, {
              value: oe
            }),
            groupEnd: T({}, e, {
              value: ue
            })
          });
        }
        F < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = P.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, N;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ne();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, p), p;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var x = e ? e.displayName || e.name : "", _e = x ? Y(x) : "";
      return typeof e == "function" && N.set(e, _e), _e;
    }
    function Ue(e, r, t) {
      return le(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Le(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case S:
          return Y("Suspense");
        case v:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case g:
            return U(e.type, r, t);
          case _: {
            var n = e, o = n._payload, u = n._init;
            try {
              return U(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, ce = P.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, o) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (V(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(o), c("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Me = Array.isArray;
    function J(e) {
      return Me(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), de(e);
    }
    var D = P.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, me, z;
    z = {};
    function ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = h(D.current.type);
        z[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(D.current.type), e.ref), z[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          me || (me = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), ze(r) && (d = r.ref, Ke(r, o));
        for (u in r)
          L.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), d && Xe(i, l);
        }
        return Ze(e, a, d, o, n, D.current, i);
      }
    }
    var G = P.ReactCurrentOwner, ge = P.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function he() {
      {
        if (G.current) {
          var e = h(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function rr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + h(e._owner.type) + "."), w(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && ye(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = we(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              H(i.value) && ye(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = h(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var o = h(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    function Re(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = er(o);
          d ? a += d : a += he();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (h(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Qe(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (J(p)) {
                for (var x = 0; x < p.length; x++)
                  Ee(p[x], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(p, e);
        }
        return e === E ? nr(l) : tr(l), l;
      }
    }
    function ar(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Re(e, r, t, !1);
    }
    var or = ir, ur = ar;
    I.Fragment = E, I.jsx = or, I.jsxs = ur;
  }()), I;
}
process.env.NODE_ENV === "production" ? X.exports = fr() : X.exports = cr();
var $ = X.exports;
const dr = Se.div`
  border: 1px dashed #1677ff;
  padding: 0.25rem 1rem;
  cursor: pointer;
`, vr = Se.span`
  padding: 0.25rem 1rem;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`, gr = ({ handleFile: j }) => {
  const y = sr(null), [k, E] = lr(""), C = () => {
    y.current.click();
  }, O = (R) => {
    const m = R.target.files[0];
    E(m.name), j(m);
  };
  return /* @__PURE__ */ $.jsxs($.Fragment, { children: [
    /* @__PURE__ */ $.jsx(dr, { onClick: C, children: "Upload a file" }),
    /* @__PURE__ */ $.jsx(vr, { children: k }),
    /* @__PURE__ */ $.jsx(
      "input",
      {
        type: "file",
        ref: y,
        onChange: O,
        style: { display: "none" }
      }
    )
  ] });
};
export {
  gr as FileUploader
};
