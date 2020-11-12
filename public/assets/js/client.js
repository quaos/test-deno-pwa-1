function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {
        },
        require: function(path, base) {
            return commonjsRequire1(path, base === undefined || base === null ? module.path : base);
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire1() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var n = "function" === typeof Symbol && Symbol.for, p1 = n ? Symbol.for("react.element") : 60103, q1 = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, t = n ? Symbol.for("react.strict_mode") : 60108, u = n ? Symbol.for("react.profiler") : 60114, v = n ? Symbol.for("react.provider") : 60109, w1 = n ? Symbol.for("react.context") : 60110, x1 = n ? Symbol.for("react.forward_ref") : 60112, y = n ? Symbol.for("react.suspense") : 60113, z = n ? Symbol.for("react.memo") : 60115, A = n ? Symbol.for("react.lazy") : 60116, B1 = "function" === typeof Symbol && Symbol.iterator;
function C(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
}, E = {
};
function F1(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = E;
    this.updater = c || D;
}
F1.prototype.isReactComponent = {
};
F1.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
F1.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function G() {
}
G.prototype = F1.prototype;
function H(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = E;
    this.updater = c || D;
}
var I = H.prototype = new G;
I.constructor = H;
objectAssign(I, F1.prototype);
I.isPureReactComponent = !0;
var J = {
    current: null
}, K1 = Object.prototype.hasOwnProperty, L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(a, b, c) {
    var e, d = {
    }, g = null, k = null;
    if (null != b) for(e in (void 0) !== b.ref && (k = b.ref), (void 0) !== b.key && (g = "" + b.key), b)K1.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
    var f = arguments.length - 2;
    if (1 === f) d.children = c;
    else if (1 < f) {
        for(var h = Array(f), m = 0; m < f; m++)h[m] = arguments[m + 2];
        d.children = h;
    }
    if (a && a.defaultProps) for(e in f = a.defaultProps, f)(void 0) === d[e] && (d[e] = f[e]);
    return {
        $$typeof: p1,
        type: a,
        key: g,
        ref: k,
        props: d,
        _owner: J.current
    };
}
function N(a, b) {
    return {
        $$typeof: p1,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === p1;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + ("" + a).replace(/[=:]/g, function(a1) {
        return b[a1];
    });
}
var P = /\/+/g, Q = [];
function R(a, b, c, e) {
    if (Q.length) {
        var d = Q.pop();
        d.result = a;
        d.keyPrefix = b;
        d.func = c;
        d.context = e;
        d.count = 0;
        return d;
    }
    return {
        result: a,
        keyPrefix: b,
        func: c,
        context: e,
        count: 0
    };
}
function S1(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > Q.length && Q.push(a);
}
function T1(a, b, c, e) {
    var d = typeof a;
    if ("undefined" === d || "boolean" === d) a = null;
    var g = !1;
    if (null === a) g = !0;
    else switch(d){
        case "string":
        case "number":
            g = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case p1:
                case q1:
                    g = !0;
            }
    }
    if (g) return c(e, a, "" === b ? "." + U1(a, 0) : b), 1;
    g = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a)) for(var k = 0; k < a.length; k++){
        d = a[k];
        var f = b + U1(d, k);
        g += T1(d, f, c, e);
    }
    else if (null === a || "object" !== typeof a ? f = null : (f = B1 && a[B1] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for(a = f.call(a), k = 0; !(d = a.next()).done;)d = d.value, f = b + U1(d, k++), g += T1(d, f, c, e);
    else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
    return g;
}
function V(a, b, c) {
    return null == a ? 0 : T1(a, "", b, c);
}
function U1(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}
function W(a, b) {
    a.func.call(a.context, b, a.count++);
}
function aa(a, b, c) {
    var e = a.result, d = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a) ? X1(a, e, c, function(a1) {
        return a1;
    }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}
function X1(a, b, c, e, d) {
    var g;
    null != c && (g = ("" + c).replace(P, "$&/") + "/");
    b = R(b, "", e, d);
    V(a, aa, b);
    S1(b);
}
var Y = {
    current: null
};
function Z1() {
    var a = Y.current;
    if (null === a) throw Error(C(321));
    return a;
}
var ba = {
    ReactCurrentDispatcher: Y,
    ReactCurrentBatchConfig: {
        suspense: null
    },
    ReactCurrentOwner: J,
    IsSomeRendererActing: {
        current: !1
    },
    assign: objectAssign
};
var Component = F1;
var Fragment = r;
var Profiler = u;
var PureComponent = H;
var StrictMode = t;
var Suspense = y;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
var createElement = M;
var isValidElement = O;
var react_production_min = {
    Children: {
        map: function(a, b, c) {
            if (null == a) return a;
            var e = [];
            X1(a, e, null, b, c);
            return e;
        },
        forEach: function(a, b, c) {
            if (null == a) return a;
            b = R(null, null, b, c);
            V(a, W, b);
            S1(b);
        },
        count: function(a) {
            return V(a, function() {
                return null;
            }, null);
        },
        toArray: function(a) {
            var b = [];
            X1(a, b, null, function(a1) {
                return a1;
            });
            return b;
        },
        only: function(a) {
            if (!O(a)) throw Error(C(143));
            return a;
        }
    },
    Component: Component,
    Fragment: Fragment,
    Profiler: Profiler,
    PureComponent: PureComponent,
    StrictMode: StrictMode,
    Suspense: Suspense,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    cloneElement: function(a, b, c) {
        if (null === a || (void 0) === a) throw Error(C(267, a));
        var e = objectAssign({
        }, a.props), d = a.key, g = a.ref, k = a._owner;
        if (null != b) {
            (void 0) !== b.ref && (g = b.ref, k = J.current);
            (void 0) !== b.key && (d = "" + b.key);
            if (a.type && a.type.defaultProps) var f = a.type.defaultProps;
            for(h in b)K1.call(b, h) && !L.hasOwnProperty(h) && (e[h] = (void 0) === b[h] && (void 0) !== f ? f[h] : b[h]);
        }
        var h = arguments.length - 2;
        if (1 === h) e.children = c;
        else if (1 < h) {
            f = Array(h);
            for(var m = 0; m < h; m++)f[m] = arguments[m + 2];
            e.children = f;
        }
        return {
            $$typeof: p1,
            type: a.type,
            key: d,
            ref: g,
            props: e,
            _owner: k
        };
    },
    createContext: function(a, b) {
        (void 0) === null && (b = null);
        a = {
            $$typeof: w1,
            _calculateChangedBits: null,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        a.Provider = {
            $$typeof: v,
            _context: a
        };
        return a.Consumer = a;
    },
    createElement: createElement,
    createFactory: function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
    },
    createRef: function() {
        return {
            current: null
        };
    },
    forwardRef: function(a) {
        return {
            $$typeof: x1,
            render: a
        };
    },
    isValidElement: isValidElement,
    lazy: function(a) {
        return {
            $$typeof: A,
            _ctor: a,
            _status: -1,
            _result: null
        };
    },
    memo: function(a, b) {
        return {
            $$typeof: z,
            type: a,
            compare: (void 0) === b ? null : b
        };
    },
    useCallback: function(a, b) {
        return Z1().useCallback(a, b);
    },
    useContext: function(a, b) {
        return Z1().useContext(a, b);
    },
    useDebugValue: function() {
    },
    useEffect: function(a, b) {
        return Z1().useEffect(a, b);
    },
    useImperativeHandle: function(a, b, c) {
        return Z1().useImperativeHandle(a, b, c);
    },
    useLayoutEffect: function(a, b) {
        return Z1().useLayoutEffect(a, b);
    },
    useMemo: function(a, b) {
        return Z1().useMemo(a, b);
    },
    useReducer: function(a, b, c) {
        return Z1().useReducer(a, b, c);
    },
    useRef: function(a) {
        return Z1().useRef(a);
    },
    useState: function(a) {
        return Z1().useState(a);
    },
    version: "16.13.1"
};
var react = createCommonjsModule(function(module) {
    {
        module.exports = react_production_min;
    }
});
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {
        };
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n1) {
            return test2[n1];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {
        };
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({
        }, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
function createCommonjsModule1(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {
        },
        require: function(path, base) {
            return commonjsRequire2(path, base === undefined || base === null ? module.path : base);
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire2() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var scheduler_production_min = createCommonjsModule1(function(module, exports) {
    var f, g, h, k, l;
    if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
        var p1 = null, q1 = null, t1 = function() {
            if (null !== p1) try {
                var a = exports.unstable_now();
                p1(!0, a);
                p1 = null;
            } catch (b) {
                throw (setTimeout(t1, 0), b);
            }
        }, u1 = Date.now();
        exports.unstable_now = function() {
            return Date.now() - u1;
        };
        f = function(a) {
            null !== p1 ? setTimeout(f, 0, a) : (p1 = a, setTimeout(t1, 0));
        };
        g = function(a, b) {
            q1 = setTimeout(a, b);
        };
        h = function() {
            clearTimeout(q1);
        };
        k = function() {
            return !1;
        };
        l = exports.unstable_forceFrameRate = function() {
        };
    } else {
        var w1 = window.performance, x1 = window.Date, y1 = window.setTimeout, z1 = window.clearTimeout;
        if ("undefined" !== typeof console) {
            var A1 = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn\'t support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
            "function" !== typeof A1 && console.error("This browser doesn\'t support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        if ("object" === typeof w1 && "function" === typeof w1.now) exports.unstable_now = function() {
            return w1.now();
        };
        else {
            var B1 = x1.now();
            exports.unstable_now = function() {
                return x1.now() - B1;
            };
        }
        var C1 = !1, D1 = null, E1 = -1, F1 = 5, G1 = 0;
        k = function() {
            return exports.unstable_now() >= G1;
        };
        l = function() {
        };
        exports.unstable_forceFrameRate = function(a) {
            0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F1 = 0 < a ? Math.floor(1000 / a) : 5;
        };
        var H1 = new MessageChannel, I1 = H1.port2;
        H1.port1.onmessage = function() {
            if (null !== D1) {
                var a = exports.unstable_now();
                G1 = a + F1;
                try {
                    D1(!0, a) ? I1.postMessage(null) : (C1 = !1, D1 = null);
                } catch (b) {
                    throw I1.postMessage(null), b;
                }
            } else C1 = !1;
        };
        f = function(a) {
            D1 = a;
            C1 || (C1 = !0, I1.postMessage(null));
        };
        g = function(a, b) {
            E1 = y1(function() {
                a(exports.unstable_now());
            }, b);
        };
        h = function() {
            z1(E1);
            E1 = -1;
        };
    }
    function J1(a, b) {
        var c = a.length;
        a.push(b);
        a: for(;;){
            var d = c - 1 >>> 1, e = a[d];
            if ((void 0) !== e && 0 < K2(e, b)) a[d] = b, a[c] = e, c = d;
            else break a;
        }
    }
    function L1(a) {
        a = a[0];
        return (void 0) === a ? null : a;
    }
    function M1(a) {
        var b = a[0];
        if ((void 0) !== b) {
            var c = a.pop();
            if (c !== b) {
                a[0] = c;
                a: for(var d = 0, e = a.length; d < e;){
                    var m = 2 * (d + 1) - 1, n1 = a[m], v1 = m + 1, r1 = a[v1];
                    if ((void 0) !== n1 && 0 > K2(n1, c)) (void 0) !== r1 && 0 > K2(r1, n1) ? (a[d] = r1, a[v1] = c, d = v1) : (a[d] = n1, a[m] = c, d = m);
                    else if ((void 0) !== r1 && 0 > K2(r1, c)) a[d] = r1, a[v1] = c, d = v1;
                    else break a;
                }
            }
            return b;
        }
        return null;
    }
    function K2(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
    }
    var N1 = [], O1 = [], P1 = 1, Q1 = null, R1 = 3, S1 = !1, T1 = !1, U1 = !1;
    function V1(a) {
        for(var b = L1(O1); null !== b;){
            if (null === b.callback) M1(O1);
            else if (b.startTime <= a) M1(O1), b.sortIndex = b.expirationTime, J1(N1, b);
            else break;
            b = L1(O1);
        }
    }
    function W1(a) {
        U1 = !1;
        V1(a);
        if (!T1) {
            if (null !== L1(N1)) T1 = !0, f(X2);
            else {
                var b = L1(O1);
                null !== b && g(W1, b.startTime - a);
            }
        }
    }
    function X2(a, b) {
        T1 = !1;
        U1 && (U1 = !1, h());
        S1 = !0;
        var c = R1;
        try {
            V1(b);
            for(Q1 = L1(N1); null !== Q1 && (!(Q1.expirationTime > b) || a && !k());){
                var d = Q1.callback;
                if (null !== d) {
                    Q1.callback = null;
                    R1 = Q1.priorityLevel;
                    var e = d(Q1.expirationTime <= b);
                    b = exports.unstable_now();
                    "function" === typeof e ? Q1.callback = e : Q1 === L1(N1) && M1(N1);
                    V1(b);
                } else M1(N1);
                Q1 = L1(N1);
            }
            if (null !== Q1) var m = !0;
            else {
                var n1 = L1(O1);
                null !== n1 && g(W1, n1.startTime - b);
                m = !1;
            }
            return m;
        } finally{
            Q1 = null, R1 = c, S1 = !1;
        }
    }
    function Y1(a) {
        switch(a){
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 10000;
            default:
                return 5000;
        }
    }
    var Z1 = l;
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
        a.callback = null;
    };
    exports.unstable_continueExecution = function() {
        T1 || S1 || (T1 = !0, f(X2));
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return R1;
    };
    exports.unstable_getFirstCallbackNode = function() {
        return L1(N1);
    };
    exports.unstable_next = function(a) {
        switch(R1){
            case 1:
            case 2:
            case 3:
                var b = 3;
                break;
            default:
                b = R1;
        }
        var c = R1;
        R1 = b;
        try {
            return a();
        } finally{
            R1 = c;
        }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = Z1;
    exports.unstable_runWithPriority = function(a, b) {
        switch(a){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default:
                a = 3;
        }
        var c = R1;
        R1 = a;
        try {
            return b();
        } finally{
            R1 = c;
        }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        if ("object" === typeof c && null !== c) {
            var e = c.delay;
            e = "number" === typeof e && 0 < e ? d + e : d;
            c = "number" === typeof c.timeout ? c.timeout : Y1(a);
        } else c = Y1(a), e = d;
        c = e + c;
        a = {
            id: P1++,
            callback: b,
            priorityLevel: a,
            startTime: e,
            expirationTime: c,
            sortIndex: -1
        };
        e > d ? (a.sortIndex = e, J1(O1, a), null === L1(N1) && a === L1(O1) && (U1 ? h() : U1 = !0, g(W1, e - d))) : (a.sortIndex = c, J1(N1, a), T1 || S1 || (T1 = !0, f(X2)));
        return a;
    };
    exports.unstable_shouldYield = function() {
        var a = exports.unstable_now();
        V1(a);
        var b = L1(N1);
        return b !== Q1 && null !== Q1 && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q1.expirationTime || k();
    };
    exports.unstable_wrapCallback = function(a) {
        var b = R1;
        return function() {
            var c = R1;
            R1 = b;
            try {
                return a.apply(this, arguments);
            } finally{
                R1 = c;
            }
        };
    };
});
var scheduler = createCommonjsModule1(function(module) {
    {
        module.exports = scheduler_production_min;
    }
});
function commonjsRequire3() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
function u1(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react) throw Error(u1(227));
function ba1(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var da = !1, ea = null, fa = !1, ha = null, ia = {
    onError: function(a) {
        da = !0;
        ea = a;
    }
};
function ja(a, b, c, d, e, f, g, h, k) {
    da = !1;
    ea = null;
    ba1.apply(ia, arguments);
}
function ka(a, b, c, d, e, f, g, h, k) {
    ja.apply(this, arguments);
    if (da) {
        if (da) {
            var l = ea;
            da = !1;
            ea = null;
        } else throw Error(u1(198));
        fa || (fa = !0, ha = l);
    }
}
var la = null, ma = null, na = null;
function oa(a, b, c) {
    var d;
    a.currentTarget = na(c);
    ka(a.type || "unknown-event", b, void 0, a);
    a.currentTarget = null;
}
var pa = null, qa = {
};
function ra() {
    if (pa) for(var a in qa){
        var b = qa[a], c = pa.indexOf(a);
        if (!(-1 < c)) throw Error(u1(96, a));
        if (!sa[c]) {
            if (!b.extractEvents) throw Error(u1(97, a));
            sa[c] = b;
            c = b.eventTypes;
            for(var d in c){
                var e = void 0;
                var f = c[d], g = b, h = d;
                if (ta.hasOwnProperty(h)) throw Error(u1(99, h));
                ta[h] = f;
                var k = f.phasedRegistrationNames;
                if (k) {
                    for(e in k)k.hasOwnProperty(e) && ua(k[e], g, h);
                    e = !0;
                } else f.registrationName ? (ua(f.registrationName, g, h), e = !0) : e = !1;
                if (!e) throw Error(u1(98, d, a));
            }
        }
    }
}
function ua(a, b, c) {
    if (va[a]) throw Error(u1(100, a));
    va[a] = b;
    wa[a] = b.eventTypes[c].dependencies;
}
var sa = [], ta = {
}, va = {
}, wa = {
};
function xa(a) {
    var b = !1, c;
    for(c in a)if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (!qa.hasOwnProperty(c) || qa[c] !== d) {
            if (qa[c]) throw Error(u1(102, c));
            qa[c] = d;
            b = !0;
        }
    }
    b && ra();
}
var ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), za = null, Aa = null, Ba = null;
function Ca(a) {
    if (a = ma(a)) {
        if ("function" !== typeof za) throw Error(u1(280));
        var b = a.stateNode;
        b && (b = la(b), za(a.stateNode, a.type, b));
    }
}
function Da(a) {
    Aa ? Ba ? Ba.push(a) : Ba = [
        a
    ] : Aa = a;
}
function Ea() {
    if (Aa) {
        var a = Aa, b = Ba;
        Ba = Aa = null;
        Ca(a);
        if (b) for(a = 0; a < b.length; a++)Ca(b[a]);
    }
}
function Fa(a, b) {
    return a(b);
}
function Ga(a, b, c, d, e) {
    return a(b, c, d, e);
}
function Ha() {
}
var Ia = Fa, Ja = !1, Ka = !1;
function La() {
    if (null !== Aa || null !== Ba) Ha(), Ea();
}
function Ma(a, b, c) {
    if (Ka) return a(b, c);
    Ka = !0;
    try {
        return Ia(a, b, c);
    } finally{
        Ka = !1, La();
    }
}
var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oa = Object.prototype.hasOwnProperty, Pa = {
}, Qa = {
};
function Ra(a) {
    if (Oa.call(Qa, a)) return !0;
    if (Oa.call(Pa, a)) return !1;
    if (Na.test(a)) return Qa[a] = !0;
    Pa[a] = !0;
    return !1;
}
function Sa(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch(typeof b){
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (d) return !1;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
        default:
            return !1;
    }
}
function Ta(a, b, c, d) {
    if (null === b || "undefined" === typeof b || Sa(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch(c.type){
        case 3:
            return !b;
        case 4:
            return !1 === b;
        case 5:
            return isNaN(b);
        case 6:
            return isNaN(b) || 1 > b;
    }
    return !1;
}
function v1(a, b, c, d, e, f) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
}
var C1 = {
};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    C1[a] = new v1(a, 0, !1, a, null, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    C1[b] = new v1(b, 1, !1, a[1], null, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    C1[a] = new v1(a, 2, !1, a.toLowerCase(), null, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    C1[a] = new v1(a, 2, !1, a, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    C1[a] = new v1(a, 3, !1, a.toLowerCase(), null, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    C1[a] = new v1(a, 3, !0, a, null, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    C1[a] = new v1(a, 4, !1, a, null, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    C1[a] = new v1(a, 6, !1, a, null, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    C1[a] = new v1(a, 5, !1, a.toLowerCase(), null, !1);
});
var Ua = /[\-:]([a-z])/g;
function Va(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(Ua, Va);
    C1[b] = new v1(b, 1, !1, a, null, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(Ua, Va);
    C1[b] = new v1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(Ua, Va);
    C1[b] = new v1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    C1[a] = new v1(a, 1, !1, a.toLowerCase(), null, !1);
});
C1.xlinkHref = new v1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    C1[a] = new v1(a, 1, !1, a.toLowerCase(), null, !0);
});
var Wa = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = {
    current: null
});
Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = {
    suspense: null
});
function Xa(a, b, c, d) {
    var e = C1.hasOwnProperty(b) ? C1[b] : null;
    var f;
    (null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0) || (Ta(b, c, e, d) && (c = null), d || null === e ? Ra(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var Ya = /^(.*)[\\\/]/, E1 = "function" === typeof Symbol && Symbol.for, Za = E1 ? Symbol.for("react.element") : 60103, $a = E1 ? Symbol.for("react.portal") : 60106, ab = E1 ? Symbol.for("react.fragment") : 60107, bb = E1 ? Symbol.for("react.strict_mode") : 60108, cb = E1 ? Symbol.for("react.profiler") : 60114, db = E1 ? Symbol.for("react.provider") : 60109, eb = E1 ? Symbol.for("react.context") : 60110, fb = E1 ? Symbol.for("react.concurrent_mode") : 60111, gb = E1 ? Symbol.for("react.forward_ref") : 60112, hb = E1 ? Symbol.for("react.suspense") : 60113, ib = E1 ? Symbol.for("react.suspense_list") : 60120, jb = E1 ? Symbol.for("react.memo") : 60115, kb = E1 ? Symbol.for("react.lazy") : 60116, lb = E1 ? Symbol.for("react.block") : 60121, mb = "function" === typeof Symbol && Symbol.iterator;
function nb(a) {
    if (null === a || "object" !== typeof a) return null;
    a = mb && a[mb] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function ob(a) {
    if (-1 === a._status) {
        a._status = 0;
        var b = a._ctor;
        b = b();
        a._result = b;
        b.then(function(b1) {
            0 === a._status && (b1 = b1.default, a._status = 1, a._result = b1);
        }, function(b1) {
            0 === a._status && (a._status = 2, a._result = b1);
        });
    }
}
function pb(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case ab:
            return "Fragment";
        case $a:
            return "Portal";
        case cb:
            return "Profiler";
        case bb:
            return "StrictMode";
        case hb:
            return "Suspense";
        case ib:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case eb:
            return "Context.Consumer";
        case db:
            return "Context.Provider";
        case gb:
            var b = a.render;
            b = b.displayName || b.name || "";
            return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
        case jb:
            return pb(a.type);
        case lb:
            return pb(a.render);
        case kb:
            if (a = 1 === a._status ? a._result : null) return pb(a);
    }
    return null;
}
function qb(a) {
    var b = "";
    do {
        a: switch(a.tag){
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
                var c = "";
                break a;
            default:
                var d = a._debugOwner, e = a._debugSource, f = pb(a.type);
                c = null;
                d && (c = pb(d.type));
                d = f;
                f = "";
                e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
                c = "\n    in " + (d || "Unknown") + f;
        }
        b += c;
        a = a.return;
    }while (a)
    return b;
}
function rb(a) {
    switch(typeof a){
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
            return a;
        default:
            return "";
    }
}
function sb(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function tb(a) {
    var b = sb(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {
            configurable: !0,
            get: function() {
                return e.call(this);
            },
            set: function(a1) {
                d = "" + a1;
                f.call(this, a1);
            }
        });
        Object.defineProperty(a, b, {
            enumerable: c.enumerable
        });
        return {
            getValue: function() {
                return d;
            },
            setValue: function(a1) {
                d = "" + a1;
            },
            stopTracking: function() {
                a._valueTracker = null;
                delete a[b];
            }
        };
    }
}
function xb(a) {
    a._valueTracker || (a._valueTracker = tb(a));
}
function yb(a) {
    if (!d) return !1;
    var b = d._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d;
    d && (d = sb(d) ? d.checked ? "true" : "false" : d.value);
    a = "";
    return "" !== c ? (b.setValue(""), !0) : !1;
}
function zb(a, b) {
    var c = b.checked;
    return objectAssign({
    }, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function Ab(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = rb(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function Bb(a, b) {
    b = b.checked;
    null != b && Xa(a, "checked", b, !1);
}
function Cb(a, b) {
    Bb(a, b);
    var c = rb(b.value), d = b.type;
    if (null != c) {
        if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function Eb(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || (void 0) !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
}
function Db(a, b, c) {
    if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function Fb(a) {
    var b = "";
    react.Children.forEach(a, function(a1) {
        null != a1 && (b += a1);
    });
    return b;
}
function Gb(a, b) {
    a = objectAssign({
        children: void 0
    }, b);
    if (b = Fb(b.children)) a.children = b;
    return a;
}
function Hb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {
        };
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + rb(c);
        b = null;
        for(e = 0; e < a.length; e++){
            if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
            }
            null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = !0);
    }
}
function Ib(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(u1(91));
    return objectAssign({
    }, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function Jb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error(u1(92));
            if (Array.isArray(c)) {
                if (!(1 >= c.length)) throw Error(u1(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: rb(c)
    };
}
function Kb(a, b) {
    var c = rb(b.value), d = rb(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function Lb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
var Mb = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
};
function Nb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Ob(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? Nb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var Pb, Qb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if (a.namespaceURI !== Mb.svg || "innerHTML" in a) a.innerHTML = b;
    else {
        Pb = Pb || document.createElement("div");
        Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = Pb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function Rb(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
function Sb(a, b) {
    var c = {
    };
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var Tb = {
    animationend: Sb("Animation", "AnimationEnd"),
    animationiteration: Sb("Animation", "AnimationIteration"),
    animationstart: Sb("Animation", "AnimationStart"),
    transitionend: Sb("Transition", "TransitionEnd")
}, Ub = {
}, Vb = {
};
ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
function Wb(a) {
    if (Ub[a]) return Ub[a];
    if (!Tb[a]) return a;
    var b = Tb[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in Vb) return Ub[a] = b[c];
    return a;
}
var Xb = Wb("animationend"), Yb = Wb("animationiteration"), Zb = Wb("animationstart"), $b = Wb("transitionend"), ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bc = new ("function" === typeof WeakMap ? WeakMap : Map);
function cc(a) {
    var b = bc.get(a);
    (void 0) === b && (b = new Map, bc.set(a, b));
    return b;
}
function dc(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return;
        while (a)
    }
    return 3 === b.tag ? c : null;
}
function ec(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function fc(a) {
    if (dc(a) !== a) throw Error(u1(188));
}
function gc(a) {
    var b = a.alternate;
    if (!b) {
        b = dc(a);
        if (null === b) throw Error(u1(188));
        return b !== a ? null : a;
    }
    for(var c = a, d = b;;){
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
            d = e.return;
            if (null !== d) {
                c = d;
                continue;
            }
            break;
        }
        if (e.child === f.child) {
            for(f = e.child; f;){
                if (f === c) return fc(e), a;
                if (f === d) return fc(e), b;
                f = f.sibling;
            }
            throw Error(u1(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
            for(var g = !1, h = e.child; h;){
                if (h === c) {
                    g = !0;
                    c = e;
                    d = f;
                    break;
                }
                if (h === d) {
                    g = !0;
                    d = e;
                    c = f;
                    break;
                }
                h = h.sibling;
            }
            if (!g) {
                for(h = f.child; h;){
                    if (h === c) {
                        g = !0;
                        c = f;
                        d = e;
                        break;
                    }
                    if (h === d) {
                        g = !0;
                        d = f;
                        c = e;
                        break;
                    }
                    h = h.sibling;
                }
                if (!g) throw Error(u1(189));
            }
        }
        if (c.alternate !== d) throw Error(u1(190));
    }
    if (3 !== c.tag) throw Error(u1(188));
    return c.stateNode.current === c ? a : b;
}
function hc(a) {
    a = gc(a);
    if (!a) return null;
    for(var b = a;;){
        if (5 === b.tag || 6 === b.tag) return b;
        if (b.child) b.child.return = b, b = b.child;
        else {
            if (b === a) break;
            for(; !b.sibling;){
                if (!b.return || b.return === a) return null;
                b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
        }
    }
    return null;
}
function ic(a, b) {
    if (null == b) throw Error(u1(30));
    if (null == a) return b;
    if (Array.isArray(a)) {
        if (Array.isArray(b)) return a.push.apply(a, b), a;
        a.push(b);
        return a;
    }
    return Array.isArray(b) ? [
        a
    ].concat(b) : [
        a,
        b
    ];
}
function jc(a, b, c) {
    Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}
var kc = null;
function lc(a) {
    if (a) {
        var b = a._dispatchListeners, c = a._dispatchInstances;
        if (Array.isArray(b)) for(var d = 0; d < b.length && !a.isPropagationStopped(); d++)oa(a, b[d], c[d]);
        else b && oa(a, b, c);
        a._dispatchListeners = null;
        a._dispatchInstances = null;
        a.isPersistent() || a.constructor.release(a);
    }
}
function mc(a) {
    null !== a && (kc = ic(kc, a));
    a = kc;
    kc = null;
    if (a) {
        jc(a, lc);
        if (kc) throw Error(u1(95));
        if (fa) throw a = ha, fa = !1, ha = null, a;
    }
}
function nc(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
function oc(a) {
    if (!ya) return !1;
    a = "on" + a;
    var b = a in document;
    b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
    return b;
}
var pc = [];
function qc(a) {
    a.topLevelType = null;
    a.nativeEvent = null;
    a.targetInst = null;
    a.ancestors.length = 0;
    10 > pc.length && pc.push(a);
}
function rc(a, b, c, d) {
    if (pc.length) {
        var e = pc.pop();
        e.topLevelType = a;
        e.eventSystemFlags = d;
        e.nativeEvent = b;
        e.targetInst = c;
        return e;
    }
    return {
        topLevelType: a,
        eventSystemFlags: d,
        nativeEvent: b,
        targetInst: c,
        ancestors: []
    };
}
function sc(a) {
    var b = a.targetInst, c = b;
    do {
        if (!c) {
            a.ancestors.push(c);
            break;
        }
        var d = c;
        if (3 === d.tag) d = d.stateNode.containerInfo;
        else {
            for(; d.return;)d = d.return;
            d = 3 !== d.tag ? null : d.stateNode.containerInfo;
        }
        if (!d) break;
        b = c.tag;
        5 !== b && 6 !== b || a.ancestors.push(c);
        c = tc(d);
    }while (c)
    for(c = 0; c < a.ancestors.length; c++){
        b = a.ancestors[c];
        var e = nc(a.nativeEvent);
        d = a.topLevelType;
        var f = a.nativeEvent, g = a.eventSystemFlags;
        0 === c && (g |= 64);
        for(var h = null, k = 0; k < sa.length; k++){
            var l = sa[k];
            l && (l = l.extractEvents(d, b, f, e, g)) && (h = ic(h, l));
        }
        mc(h);
    }
}
function uc(a, b, c) {
    if (!c.has(a)) {
        switch(a){
            case "scroll":
                vc(b, "scroll", !0);
                break;
            case "focus":
            case "blur":
                vc(b, "focus", !0);
                vc(b, "blur", !0);
                c.set("blur", null);
                c.set("focus", null);
                break;
            case "cancel":
            case "close":
                oc(a) && vc(b, a, !0);
                break;
            case "invalid":
            case "submit":
            case "reset": break;
            default:
                -1 === ac.indexOf(a) && F2(a, b);
        }
        c.set(a, null);
    }
}
var wc, xc, yc, zc = !1, Ac = [], Bc = null, Cc = null, Dc = null, Ec = new Map, Fc = new Map, Gc = [], Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a, b) {
    var c = cc(b);
    Hc.forEach(function(a1) {
        uc(a1, b, c);
    });
    Ic.forEach(function(a1) {
        uc(a1, b, c);
    });
}
function Kc(a, b, c, d, e) {
    return {
        blockedOn: a,
        topLevelType: b,
        eventSystemFlags: c | 32,
        nativeEvent: e,
        container: d
    };
}
function Lc(a, b) {
    switch(a){
        case "focus":
        case "blur":
            Bc = null;
            break;
        case "dragenter":
        case "dragleave":
            Cc = null;
            break;
        case "mouseover":
        case "mouseout":
            Dc = null;
            break;
        case "pointerover":
        case "pointerout":
            Ec.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Fc.delete(b.pointerId);
    }
}
function Mc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = Kc(b, c, d, e, f), null !== b && (b = Nc(b), null !== b && xc(b)), a;
    a.eventSystemFlags |= d;
    return a;
}
function Oc(a, b, c, d, e) {
    switch(b){
        case "focus":
            return Bc = Mc(Bc, a, b, c, d, e), !0;
        case "dragenter":
            return Cc = Mc(Cc, a, b, c, d, e), !0;
        case "mouseover":
            return Dc = Mc(Dc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function Pc(a) {
    var b = tc(a.target);
    if (null !== b) {
        var c = dc(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = ec(c), null !== b) {
                    a.blockedOn = b;
                    scheduler.unstable_runWithPriority(a.priority, function() {
                        yc(c);
                    });
                    return;
                }
            } else if (3 === b && c.stateNode.hydrate) {
                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                return;
            }
        }
    }
    a.blockedOn = null;
}
function Qc(a) {
    if (null !== a.blockedOn) return !1;
    var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    if (null !== b) {
        var c = Nc(b);
        null !== c && xc(c);
        a.blockedOn = b;
        return !1;
    }
    return !0;
}
function Sc(a, b, c) {
    Qc(a) && c.delete(b);
}
function Tc() {
    for(zc = !1; 0 < Ac.length;){
        var a = Ac[0];
        if (null !== a.blockedOn) {
            a = Nc(a.blockedOn);
            null !== a && wc(a);
            break;
        }
        var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
        null !== b ? a.blockedOn = b : Ac.shift();
    }
    null !== Bc && Qc(Bc) && (Bc = null);
    null !== Cc && Qc(Cc) && (Cc = null);
    null !== Dc && Qc(Dc) && (Dc = null);
    Ec.forEach(Sc);
    Fc.forEach(Sc);
}
function Uc(a, b) {
    a.blockedOn === b && (a.blockedOn = null, zc || (zc = !0, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Tc)));
}
function Vc(a) {
    function b(b1) {
        return Uc(b1, a);
    }
    if (0 < Ac.length) {
        Uc(Ac[0], a);
        for(var c = 1; c < Ac.length; c++){
            var d = Ac[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== Bc && Uc(Bc, a);
    null !== Cc && Uc(Cc, a);
    null !== Dc && Uc(Dc, a);
    Ec.forEach(b);
    Fc.forEach(b);
    for(c = 0; c < Gc.length; c++)d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < Gc.length && (c = Gc[0], null === c.blockedOn);)Pc(c), null === c.blockedOn && Gc.shift();
}
var Wc = {
}, Yc = new Map, Zc = new Map;
function ad(a, b) {
    for(var c = 0; c < a.length; c += 2){
        var d = a[c], e = a[c + 1], f = "on" + (e[0].toUpperCase() + e.slice(1));
        f = {
            phasedRegistrationNames: {
                bubbled: f,
                captured: f + "Capture"
            },
            dependencies: [
                d
            ],
            eventPriority: b
        };
        Zc.set(d, b);
        Yc.set(d, f);
        Wc[e] = f;
    }
}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
ad([
    "abort",
    "abort",
    Xb,
    "animationEnd",
    Yb,
    "animationIteration",
    Zb,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    $b,
    "transitionEnd",
    "waiting",
    "waiting"
], 2);
for(var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++)Zc.set(bd[cd], 0);
var dd = scheduler.unstable_UserBlockingPriority, ed = scheduler.unstable_runWithPriority, fd = !0;
function F2(a, b) {
    vc(b, a, !1);
}
function vc(a, b, c) {
    var d = Zc.get(b);
    switch((void 0) === d ? 2 : d){
        case 0:
            d = gd.bind(null, b, 1, a);
            break;
        case 1:
            d = hd.bind(null, b, 1, a);
            break;
        default:
            d = id.bind(null, b, 1, a);
    }
    c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
}
function gd(a, b, c, d) {
    Ja || Ha();
    var e = id, f = Ja;
    Ja = !0;
    try {
        Ga(e, a, b, c, d);
    } finally{
        (Ja = f) || La();
    }
}
function hd(a, b, c, d) {
    ed(dd, id.bind(null, a, b, c, d));
}
function id(a, b, c, d) {
    if (fd) {
        if (0 < Ac.length && -1 < Hc.indexOf(a)) a = Kc(null, a, b, c, d), Ac.push(a);
        else {
            var e = Rc(a, b, c, d);
            if (null === e) Lc(a, d);
            else if (-1 < Hc.indexOf(a)) a = Kc(e, a, b, c, d), Ac.push(a);
            else if (!Oc(e, a, b, c, d)) {
                Lc(a, d);
                a = rc(a, d, null, b);
                try {
                    Ma(sc, a);
                } finally{
                    qc(a);
                }
            }
        }
    }
}
function Rc(a, b, c, d) {
    c = nc(d);
    c = tc(c);
    if (null !== c) {
        var e = dc(c);
        if (null === e) c = null;
        else {
            var f = e.tag;
            if (13 === f) {
                c = ec(e);
                if (null !== c) return c;
                c = null;
            } else if (3 === f) {
                if (e.stateNode.hydrate) return 3 === e.tag ? e.stateNode.containerInfo : null;
                c = null;
            } else e !== c && (c = null);
        }
    }
    a = rc(a, d, c, b);
    try {
        Ma(sc, a);
    } finally{
        qc(a);
    }
    return null;
}
var jd = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, kd = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(jd).forEach(function(a) {
    kd.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        jd[b] = jd[a];
    });
});
function ld(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
}
function md(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = ld(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var nd = objectAssign({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function od(a, b) {
    if (b) {
        if (nd[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(u1(137, a, ""));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(u1(60));
            if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(u1(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(u1(62, ""));
    }
}
function pd(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch(a){
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var qd = Mb.html;
function rd(a, b) {
    a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
    var c = cc(a);
    b = wa[b];
    for(var d = 0; d < b.length; d++)uc(b[d], a, c);
}
function sd() {
}
function td(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function ud(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function vd(a, b) {
    var c = ud(a);
    a = 0;
    for(var d; c;){
        if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
                node: c,
                offset: b - a
            };
            a = d;
        }
        a: {
            for(; c;){
                if (c.nextSibling) {
                    c = c.nextSibling;
                    break a;
                }
                c = c.parentNode;
            }
            c = void 0;
        }
        c = ud(c);
    }
}
function wd(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function xd() {
    for(var a = window, b = td(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = td(a.document);
    }
    return b;
}
function yd(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
var zd = "$", Ad = "/$", Bd = "$?", Cd = "$!", Dd = null, Ed = null;
function Fd(a, b) {
    switch(a){
        case "button":
        case "input":
        case "select":
        case "textarea":
            return !!b.autoFocus;
    }
    return !1;
}
function Gd(a, b) {
    return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Hd = "function" === typeof setTimeout ? setTimeout : void 0, Id = "function" === typeof clearTimeout ? clearTimeout : void 0;
function Jd(a) {
    for(; null != a; a = a.nextSibling){
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
    }
    return a;
}
function Kd(a) {
    a = a.previousSibling;
    for(var b = 0; a;){
        if (8 === a.nodeType) {
            var c = a.data;
            if (c === zd || c === Cd || c === Bd) {
                if (0 === b) return a;
                b--;
            } else c === Ad && b++;
        }
        a = a.previousSibling;
    }
    return null;
}
var Ld = Math.random().toString(36).slice(2), Md = "__reactInternalInstance$" + Ld, Nd = "__reactEventHandlers$" + Ld, Od = "__reactContainere$" + Ld;
function tc(a) {
    var b = a[Md];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[Od] || c[Md]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = Kd(a); null !== a;){
                if (c = a[Md]) return c;
                a = Kd(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function Nc(a) {
    a = a[Md] || a[Od];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function Pd(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(u1(33));
}
function Qd(a) {
    return a[Nd] || null;
}
function Rd(a) {
    do a = a.return;
    while (a && 5 !== a.tag)
    return a ? a : null;
}
function Sd(a, b) {
    var c = a.stateNode;
    if (!c) return null;
    var d = la(c);
    if (!d) return null;
    c = d[b];
    a: switch(b){
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
        default:
            a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(u1(231, b, typeof c));
    return c;
}
function Td(a, b, c) {
    if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
}
function Ud(a) {
    if (a && a.dispatchConfig.phasedRegistrationNames) {
        for(var b = a._targetInst, c = []; b;)c.push(b), b = Rd(b);
        for(b = c.length; 0 < b--;)Td(c[b], "captured", a);
        for(b = 0; b < c.length; b++)Td(c[b], "bubbled", a);
    }
}
function Vd(a, b, c) {
    a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
}
function Wd(a) {
    a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
}
function Xd(a) {
    jc(a, Ud);
}
var Yd = null, Zd = null, $d = null;
function ae() {
    if ($d) return $d;
    var a, b = Zd, c = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return $d = e.slice(a, 1 < d ? 1 - d : void 0);
}
function be() {
    return !0;
}
function ce() {
    return !1;
}
function G1(a, b, c, d) {
    this.dispatchConfig = a;
    this._targetInst = b;
    this.nativeEvent = c;
    a = this.constructor.Interface;
    for(var e in a)a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
    this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? be : ce;
    this.isPropagationStopped = ce;
    return this;
}
objectAssign(G1.prototype, {
    preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = be);
    },
    stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = be);
    },
    persist: function() {
        this.isPersistent = be;
    },
    isPersistent: ce,
    destructor: function() {
        var a = this.constructor.Interface, b;
        for(b in a)this[b] = null;
        this.nativeEvent = this._targetInst = this.dispatchConfig = null;
        this.isPropagationStopped = this.isDefaultPrevented = ce;
        this._dispatchInstances = this._dispatchListeners = null;
    }
});
G1.Interface = {
    type: null,
    target: null,
    currentTarget: function() {
        return null;
    },
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
};
G1.extend = function(a) {
    function b() {
    }
    function c() {
        return d.apply(this, arguments);
    }
    var d = this;
    b.prototype = d.prototype;
    var e = new b;
    objectAssign(e, c.prototype);
    c.prototype = e;
    c.prototype.constructor = c;
    c.Interface = objectAssign({
    }, d.Interface, a);
    c.extend = d.extend;
    de(c);
    return c;
};
de(G1);
function ee(a, b, c, d) {
    if (this.eventPool.length) {
        var e = this.eventPool.pop();
        this.call(e, a, b, c, d);
        return e;
    }
    return new this(a, b, c, d);
}
function fe(a) {
    if (!(a instanceof this)) throw Error(u1(279));
    a.destructor();
    10 > this.eventPool.length && this.eventPool.push(a);
}
function de(a) {
    a.eventPool = [];
    a.getPooled = ee;
    a.release = fe;
}
var ge = G1.extend({
    data: null
}), he = G1.extend({
    data: null
}), ie = [
    9,
    13,
    27,
    32
], je = ya && "CompositionEvent" in window, ke = null;
ya && "documentMode" in document && (ke = document.documentMode);
var le = ya && "TextEvent" in window && !ke, me = ya && (!je || ke && 8 < ke && 11 >= ke), ne = String.fromCharCode(32), oe = {
    beforeInput: {
        phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
        },
        dependencies: [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]
    },
    compositionEnd: {
        phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
        },
        dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
    },
    compositionStart: {
        phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
        },
        dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
    },
    compositionUpdate: {
        phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
        },
        dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
    }
}, pe = !1;
function qe(a, b) {
    switch(a){
        case "keyup":
            return -1 !== ie.indexOf(b.keyCode);
        case "keydown":
            return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
            return !0;
        default:
            return !1;
    }
}
function re(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var se = !1;
function te(a, b) {
    switch(a){
        case "compositionend":
            return re(b);
        case "keypress":
            if (32 !== b.which) return null;
            pe = !0;
            return ne;
        case "textInput":
            return a = b.data, a === ne && pe ? null : a;
        default:
            return null;
    }
}
function ue(a, b) {
    if (se) return "compositionend" === a || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = !1, a) : null;
    switch(a){
        case "paste":
            return null;
        case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
            }
            return null;
        case "compositionend":
            return me && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var we = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function xe(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!we[a.type] : "textarea" === b ? !0 : !1;
}
var ye = {
    change: {
        phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
    }
};
function ze(a, b, c) {
    a = G1.getPooled(ye.change, a, b, c);
    a.type = "change";
    Da(c);
    Xd(a);
    return a;
}
var Ae = null, Be = null;
function Ce(a) {
    mc(a);
}
function De(a) {
    var b = Pd(a);
    if (yb(b)) return a;
}
function Ee(a, b) {
    if ("change" === a) return b;
}
var Fe = !1;
ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
function Ge() {
    Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
}
function He(a) {
    if ("value" === a.propertyName && De(Be)) {
        if (a = ze(Be, a, nc(a)), Ja) mc(a);
        else {
            Ja = !0;
            try {
                Fa(Ce, a);
            } finally{
                Ja = !1, La();
            }
        }
    }
}
function Ie(a, b, c) {
    "focus" === a ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : "blur" === a && Ge();
}
function Je(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return De(Be);
}
function Ke(a, b) {
    if ("click" === a) return De(b);
}
function Le(a, b) {
    if ("input" === a || "change" === a) return De(b);
}
var Ne = G1.extend({
    view: null,
    detail: null
}), Oe = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Pe(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : !1;
}
function Qe() {
    return Pe;
}
var Re = 0, Se = 0, Te = !1, Ue = !1, Ve = Ne.extend({
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    pageX: null,
    pageY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: Qe,
    button: null,
    buttons: null,
    relatedTarget: function(a) {
        return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        var b = Re;
        Re = a.screenX;
        return Te ? "mousemove" === a.type ? a.screenX - b : 0 : (Te = !0, 0);
    },
    movementY: function(a) {
        if ("movementY" in a) return a.movementY;
        var b = Se;
        Se = a.screenY;
        return Ue ? "mousemove" === a.type ? a.screenY - b : 0 : (Ue = !0, 0);
    }
}), We = Ve.extend({
    pointerId: null,
    width: null,
    height: null,
    pressure: null,
    tangentialPressure: null,
    tiltX: null,
    tiltY: null,
    twist: null,
    pointerType: null,
    isPrimary: null
}), Xe = {
    mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: [
            "mouseout",
            "mouseover"
        ]
    },
    mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: [
            "mouseout",
            "mouseover"
        ]
    },
    pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: [
            "pointerout",
            "pointerover"
        ]
    },
    pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: [
            "pointerout",
            "pointerover"
        ]
    }
};
function Ze(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var $e = "function" === typeof Object.is ? Object.is : Ze, af = Object.prototype.hasOwnProperty;
function bf(a, b) {
    if ($e(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++)if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]])) return !1;
    return !0;
}
var cf = ya && "documentMode" in document && 11 >= document.documentMode, df = {
    select: {
        phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
        },
        dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
    }
}, ef = null, ff = null, gf = null, hf = !1;
function jf(a, b) {
    var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
    if (hf || null == ef || ef !== td(c)) return null;
    c = ef;
    "selectionStart" in c && yd(c) ? c = {
        start: c.selectionStart,
        end: c.selectionEnd
    } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
    });
    return gf && bf(gf, c) ? null : (gf = c, a = G1.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
}
var lf = G1.extend({
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
}), mf = G1.extend({
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), nf = Ne.extend({
    relatedTarget: null
});
function of(a) {
    var b = 13..keyCode;
    "charCode" in 13 ? (a = 13..charCode, 0 === 13 && 13 === b && (a = 13)) : a = b;
    10 === b && (a = 13);
    return 32 <= 13 || 13 === 13 ? 13 : 0;
}
var pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, qf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, rf = Ne.extend({
    key: function(a) {
        if (a.key) {
            var b = pf[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = of(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? qf[a.keyCode] || "Unidentified" : "";
    },
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: Qe,
    charCode: function(a) {
        return "keypress" === a.type ? of(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? of(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), sf = Ve.extend({
    dataTransfer: null
}), tf = Ne.extend({
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: Qe
}), uf = G1.extend({
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
}), vf = Ve.extend({
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: null,
    deltaMode: null
});
if (pa) throw Error(u1(101));
pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ra();
var xf = Nc;
la = Qd;
ma = xf;
na = Pd;
xa({
    SimpleEventPlugin: {
        eventTypes: Wc,
        extractEvents: function(a, b, c, d) {
            var e = Yc.get(a);
            if (!e) return null;
            switch(a){
                case "keypress":
                    if (0 === of(c)) return null;
                case "keydown":
                case "keyup":
                    a = rf;
                    break;
                case "blur":
                case "focus":
                    a = nf;
                    break;
                case "click":
                    if (2 === c.button) return null;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    a = Ve;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    a = sf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    a = tf;
                    break;
                case Xb:
                case Yb:
                case Zb:
                    a = lf;
                    break;
                case $b:
                    a = uf;
                    break;
                case "scroll":
                    a = Ne;
                    break;
                case "wheel":
                    a = vf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    a = mf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    a = We;
                    break;
                default:
                    a = G1;
            }
            b = a.getPooled(e, b, c, d);
            Xd(b);
            return b;
        }
    },
    EnterLeaveEventPlugin: {
        eventTypes: Xe,
        extractEvents: function(a, b, c, d, e) {
            var f = "mouseover" === a || "pointerover" === a, g = "mouseout" === a || "pointerout" === a;
            if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null;
            f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
            if (g) {
                if ((g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, null !== b)) {
                    var h = dc(b);
                    if (b !== h || 5 !== b.tag && 6 !== b.tag) b = null;
                }
            } else g = null;
            if (g === b) return null;
            if ("mouseout" === a || "mouseover" === a) {
                var k = Ve;
                var l = Xe.mouseLeave;
                var m = Xe.mouseEnter;
                var p1 = "mouse";
            } else if ("pointerout" === a || "pointerover" === a) k = We, l = Xe.pointerLeave, m = Xe.pointerEnter, p = "pointer";
            a = null == g ? f : Pd(g);
            f = null == b ? f : Pd(b);
            l = k.getPooled(l, g, c, d);
            l.type = p + "leave";
            l.target = a;
            l.relatedTarget = f;
            c = k.getPooled(m, b, c, d);
            c.type = p + "enter";
            c.target = f;
            c.relatedTarget = a;
            d = g;
            p = b;
            if (d && p) a: {
                k = d;
                m = p;
                g = 0;
                for(a = k; a; a = Rd(a))g++;
                a = 0;
                for(b = m; b; b = Rd(b))a++;
                for(; 0 < g - a;)k = Rd(k), g--;
                for(; 0 < a - g;)m = Rd(m), a--;
                for(; g--;){
                    if (k === m || k === m.alternate) break a;
                    k = Rd(k);
                    m = Rd(m);
                }
                k = null;
            }
            else k = null;
            m = k;
            for(k = []; d && d !== m;){
                g = d.alternate;
                if (null !== g && g === m) break;
                k.push(d);
                d = Rd(d);
            }
            for(d = []; p && p !== m;){
                g = p.alternate;
                if (null !== g && g === m) break;
                d.push(p);
                p = Rd(p);
            }
            for(p = 0; p < k.length; p++)Vd(k[p], "bubbled", l);
            for(p = d.length; 0 < p--;)Vd(d[p], "captured", c);
            return 0 === (e & 64) ? [
                l
            ] : [
                l,
                c
            ];
        }
    },
    ChangeEventPlugin: {
        eventTypes: ye,
        _isInputEventSupported: Fe,
        extractEvents: function(a, b, c, d) {
            var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase();
            if ("select" === f || "input" === f && "file" === e.type) var g = Ee;
            else if (xe(e)) {
                if (Fe) g = Le;
                else {
                    g = Je;
                    var h = Ie;
                }
            } else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Ke);
            if (g && (g = g(a, b))) return ze(g, c, d);
            h && h(a, e, b);
            "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Db(e, "number", e.value);
        }
    },
    SelectEventPlugin: {
        eventTypes: df,
        extractEvents: function(a, b, c, d, e, f) {
            e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument);
            if (!(f = !e)) {
                a: {
                    e = cc(e);
                    f = wa.onSelect;
                    for(var g = 0; g < f.length; g++)if (!e.has(f[g])) {
                        e = !1;
                        break a;
                    }
                    e = !0;
                }
                f = !e;
            }
            if (f) return null;
            e = b ? Pd(b) : window;
            switch(a){
                case "focus":
                    if (xe(e) || "true" === e.contentEditable) ef = e, ff = b, gf = null;
                    break;
                case "blur":
                    gf = ff = ef = null;
                    break;
                case "mousedown":
                    hf = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return (hf = !1, jf(c, d));
                case "selectionchange":
                    if (cf) break;
                case "keydown":
                case "keyup":
                    return jf(c, d);
            }
            return null;
        }
    },
    BeforeInputEventPlugin: {
        eventTypes: oe,
        extractEvents: function(a, b, c, d) {
            var e;
            if (je) b: {
                switch(a){
                    case "compositionstart":
                        var f = oe.compositionStart;
                        break b;
                    case "compositionend":
                        f = oe.compositionEnd;
                        break b;
                    case "compositionupdate":
                        f = oe.compositionUpdate;
                        break b;
                }
                f = void 0;
            }
            else se ? qe(a, c) && (f = oe.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = oe.compositionStart);
            f ? (me && "ko" !== c.locale && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = !0)), f = ge.getPooled(f, b, c, d), e ? f.data = e : (e = re(c), null !== e && (f.data = e)), Xd(f), e = f) : e = null;
            (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
            return null === e ? b : null === b ? e : [
                e,
                b
            ];
        }
    }
});
var yf = [], zf = -1;
function H1(a) {
    0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
}
function I1(a, b) {
    zf++;
    yf[zf] = a.current;
    a.current = b;
}
var Af = {
}, J1 = {
    current: Af
}, K2 = {
    current: !1
}, Bf = Af;
function Cf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Af;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {
    }, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function L1(a) {
    a = a.childContextTypes;
    return null !== a && (void 0) !== a;
}
function Df() {
    H1(K2);
    H1(J1);
}
function Ef(a, b, c) {
    if (J1.current !== Af) throw Error(u1(168));
    I1(J1, b);
    I1(K2, c);
}
function Ff(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in a)) throw Error(u1(108, pb(b) || "Unknown", e));
    return objectAssign({
    }, c, {
    }, d);
}
function Gf(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
    Bf = J1.current;
    I1(J1, a);
    I1(K2, K2.current);
    return !0;
}
function Hf(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(u1(169));
    c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H1(K2), H1(J1), I1(J1, a)) : H1(K2);
    I1(K2, c);
}
var If = scheduler.unstable_runWithPriority, Jf = scheduler.unstable_scheduleCallback, Kf = scheduler.unstable_cancelCallback, Lf = scheduler.unstable_requestPaint, Mf = scheduler.unstable_now, Of = scheduler.unstable_ImmediatePriority, Pf = scheduler.unstable_UserBlockingPriority, Qf = scheduler.unstable_NormalPriority, Rf = scheduler.unstable_LowPriority, Sf = scheduler.unstable_IdlePriority, Tf = {
}, Uf = scheduler.unstable_shouldYield, Vf = (void 0) !== Lf ? Lf : function() {
}, Wf = null, Xf = null, Yf = !1, Zf = Mf(), $f = 10000 > Zf ? Mf : function() {
    return Mf() - Zf;
};
function ag() {
    switch(Nf()){
        case Of:
            return 99;
        case Pf:
            return 98;
        case Qf:
            return 97;
        case Rf:
            return 96;
        case Sf:
            return 95;
        default:
            throw Error(u1(332));
    }
}
function bg(a) {
    switch(a){
        case 99:
            return Of;
        case 98:
            return Pf;
        case 97:
            return Qf;
        case 96:
            return Rf;
        case 95:
            return Sf;
        default:
            throw Error(u1(332));
    }
}
function cg(a, b) {
    a = bg(a);
    return If(a, b);
}
function dg(a, b, c) {
    a = bg(a);
    return Jf(a, b, c);
}
function eg(a) {
    null === Wf ? (Wf = [
        a
    ], Xf = Jf(Of, fg)) : Wf.push(a);
    return Tf;
}
function gg() {
    if (null !== Xf) {
        var a = Xf;
        Xf = null;
        Kf(a);
    }
    fg();
}
function fg() {
    if (!Yf && null !== Wf) {
        Yf = !0;
        var a = 0;
        try {
            var b = Wf;
            cg(99, function() {
                for(; a < b.length; a++){
                    var c = b[a];
                    do c = c(!0);
                    while (null !== c)
                }
            });
            Wf = null;
        } catch (c) {
            throw null !== Wf && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
        } finally{
            Yf = !1;
        }
    }
}
function hg(a, b, c) {
    c /= 10;
    return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
}
function ig(a, b) {
    if (a && a.defaultProps) {
        b = objectAssign({
        }, b);
        a = a.defaultProps;
        for(var c in a)(void 0) === b[c] && (b[c] = a[c]);
    }
    return b;
}
var jg = {
    current: null
}, kg = null, lg = null, mg = null;
function ng() {
    mg = lg = kg = null;
}
function og(a) {
    var b = jg.current;
    H1(jg);
    a.type._context._currentValue = b;
}
function pg(a, b) {
    for(; null !== a;){
        var c = a.alternate;
        if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
        else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;
        else break;
        a = a.return;
    }
}
function qg(a, b) {
    kg = a;
    mg = lg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (a.expirationTime >= b && (rg = !0), a.firstContext = null);
}
function sg(a, b) {
    if (mg !== a && !1 !== b && 0 !== b) {
        if ("number" !== typeof b || 1073741823 === b) mg = a, b = 1073741823;
        b = {
            context: a,
            observedBits: b,
            next: null
        };
        if (null === lg) {
            if (null === kg) throw Error(u1(308));
            lg = b;
            kg.dependencies = {
                expirationTime: 0,
                firstContext: b,
                responders: null
            };
        } else lg = lg.next = b;
    }
    return a._currentValue;
}
var tg = !1;
function ug(a) {
    a.updateQueue = {
        baseState: a.memoizedState,
        baseQueue: null,
        shared: {
            pending: null
        },
        effects: null
    };
}
function vg(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        baseQueue: a.baseQueue,
        shared: a.shared,
        effects: a.effects
    });
}
function wg(a, b) {
    a = {
        expirationTime: a,
        suspenseConfig: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
    return a.next = a;
}
function xg(a, b) {
    a = a.updateQueue;
    if (null !== a) {
        a = a.shared;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
    }
}
function yg(a, b) {
    var c = a.alternate;
    null !== c && vg(c, a);
    a = a.updateQueue;
    c = a.baseQueue;
    null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
}
function zg(a, b, c, d) {
    var e = a.updateQueue;
    tg = !1;
    var f = e.baseQueue, g = e.shared.pending;
    if (null !== g) {
        if (null !== f) {
            var h = f.next;
            f.next = g.next;
            g.next = h;
        }
        f = g;
        e.shared.pending = null;
        h = a.alternate;
        null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g));
    }
    if (null !== f) {
        h = f.next;
        var k = e.baseState, l = 0, m = null, p2 = null, x1 = null;
        if (null !== h) {
            var z1 = h;
            do {
                g = z1.expirationTime;
                if (g < d) {
                    var ca = {
                        expirationTime: z1.expirationTime,
                        suspenseConfig: z1.suspenseConfig,
                        tag: z1.tag,
                        payload: z1.payload,
                        callback: z1.callback,
                        next: null
                    };
                    null === x1 ? (p2 = x1 = ca, m = k) : x1 = x1.next = ca;
                    g > l && (l = g);
                } else {
                    null !== x1 && (x1 = x1.next = {
                        expirationTime: 1073741823,
                        suspenseConfig: z1.suspenseConfig,
                        tag: z1.tag,
                        payload: z1.payload,
                        callback: z1.callback,
                        next: null
                    });
                    Ag(g, z1.suspenseConfig);
                    a: {
                        var D1 = a, t1 = z1;
                        g = b;
                        ca = c;
                        switch(t1.tag){
                            case 1:
                                D1 = t1.payload;
                                if ("function" === typeof D1) {
                                    k = D1.call(ca, k, g);
                                    break a;
                                }
                                k = D1;
                                break a;
                            case 3:
                                D1.effectTag = D1.effectTag & -4097 | 64;
                            case 0:
                                D1 = t1.payload;
                                g = "function" === typeof D1 ? D1.call(ca, k, g) : D1;
                                if (null === g || (void 0) === g) break a;
                                k = objectAssign({
                                }, k, g);
                                break a;
                            case 2:
                                tg = !0;
                        }
                    }
                    null !== z1.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [
                        z1
                    ] : g.push(z1));
                }
                z1 = z1.next;
                if (null === z1 || z1 === h) {
                    if (g = e.shared.pending, null === g) break;
                    else z1 = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
                }
            }while (1)
        }
        null === x1 ? m = k : x1.next = p2;
        e.baseState = m;
        e.baseQueue = x1;
        Bg(l);
        a.expirationTime = l;
        a.memoizedState = k;
    }
}
function Cg(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = e;
            e = c;
            if ("function" !== typeof d) throw Error(u1(191, d));
            d.call(e);
        }
    }
}
var Dg = Wa.ReactCurrentBatchConfig, Eg = (new react.Component).refs;
function Fg(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || (void 0) === c ? b : objectAssign({
    }, b, c);
    a.memoizedState = c;
    0 === a.expirationTime && (a.updateQueue.baseState = c);
}
var Jg = {
    isMounted: function(a) {
        return (a = a._reactInternalFiber) ? dc(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternalFiber;
        var d = Gg(), e = Dg.suspense;
        d = Hg(d, a, e);
        e = wg(d, e);
        e.payload = b;
        (void 0) !== c && null !== c && (e.callback = c);
        xg(a, e);
        Ig(a, d);
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternalFiber;
        var d = Gg(), e = Dg.suspense;
        d = Hg(d, a, e);
        e = wg(d, e);
        e.tag = 1;
        e.payload = b;
        (void 0) !== c && null !== c && (e.callback = c);
        xg(a, e);
        Ig(a, d);
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternalFiber;
        var c = Gg(), d = Dg.suspense;
        c = Hg(c, a, d);
        d = wg(c, d);
        d.tag = 2;
        (void 0) !== b && null !== b && (d.callback = b);
        xg(a, d);
        Ig(a, c);
    }
};
function Kg(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : !0;
}
function Lg(a, b, c) {
    var d = !1, e = Af;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = sg(f) : (e = L1(b) ? Bf : J1.current, d = b.contextTypes, f = (d = null !== d && (void 0) !== d) ? Cf(a, e) : Af);
    b = new b(c, f);
    a.memoizedState = null !== b.state && (void 0) !== b.state ? b.state : null;
    b.updater = Jg;
    a.stateNode = b;
    b._reactInternalFiber = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function Mg(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
}
function Ng(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Eg;
    ug(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = sg(f) : (f = L1(b) ? Bf : J1.current, e.context = Cf(a, f));
    zg(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Fg(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}
var Og = Array.isArray;
function Pg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error(u1(309));
                var d = c.stateNode;
            }
            if (!d) throw Error(u1(147, a));
            var e = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
            b = function(a1) {
                var b1 = d.refs;
                b1 === Eg && (b1 = d.refs = {
                });
                null === a1 ? delete b1[e] : b1[e] = a1;
            };
            b._stringRef = e;
            return b;
        }
        if ("string" !== typeof a) throw Error(u1(284));
        if (!c._owner) throw Error(u1(290, a));
    }
    return a;
}
function Qg(a, b) {
    if ("textarea" !== a.type) throw Error(u1(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
}
function Rg(a) {
    function b(b1, c) {
        if (a) {
            var d = b1.lastEffect;
            null !== d ? (d.nextEffect = c, b1.lastEffect = c) : b1.firstEffect = b1.lastEffect = c;
            c.nextEffect = null;
            c.effectTag = 8;
        }
    }
    function c(c1, d) {
        if (!a) return null;
        for(; null !== d;)b(c1, d), d = d.sibling;
        return null;
    }
    function d(a1, b1) {
        for(a1 = new Map; null !== b1;)null !== b1.key ? a1.set(b1.key, b1) : a1.set(b1.index, b1), b1 = b1.sibling;
        return a1;
    }
    function e(a1, b1) {
        a1 = Sg(a1, b1);
        a1.index = 0;
        a1.sibling = null;
        return a1;
    }
    function f(b1, c1, d1) {
        b1.index = d1;
        if (!a) return c1;
        d1 = b1.alternate;
        if (null !== d1) return d1 = d1.index, d1 < c1 ? (b1.effectTag = 2, c1) : d1;
        b1.effectTag = 2;
        return c1;
    }
    function g(b1) {
        a && null === b1.alternate && (b1.effectTag = 2);
        return b1;
    }
    function h(a1, b1, c1, d1) {
        if (null === b1 || 6 !== b1.tag) return b1 = Tg(c1, a1.mode, d1), b1.return = a1, b1;
        b1 = e(b1, c1);
        b1.return = a1;
        return b1;
    }
    function k(a1, b1, c1, d1) {
        if (null !== b1 && b1.elementType === c1.type) return d1 = e(b1, c1.props), d1.ref = Pg(a1, b1, c1), d1.return = a1, d1;
        d1 = Ug(c1.type, c1.key, c1.props, null, a1.mode, d1);
        d1.ref = Pg(a1, b1, c1);
        d1.return = a1;
        return d1;
    }
    function l(a1, b1, c1, d1) {
        if (null === b1 || 4 !== b1.tag || b1.stateNode.containerInfo !== c1.containerInfo || b1.stateNode.implementation !== c1.implementation) return b1 = Vg(c1, a1.mode, d1), b1.return = a1, b1;
        b1 = e(b1, c1.children || []);
        b1.return = a1;
        return b1;
    }
    function m(a1, b1, c1, d1, f1) {
        if (null === b1 || 7 !== b1.tag) return b1 = Wg(c1, a1.mode, d1, f1), b1.return = a1, b1;
        b1 = e(b1, c1);
        b1.return = a1;
        return b1;
    }
    function p2(a1, b1, c1) {
        if ("string" === typeof b1 || "number" === typeof b1) return b1 = Tg("" + b1, a1.mode, c1), b1.return = a1, b1;
        if ("object" === typeof b1 && null !== b1) {
            switch(b1.$$typeof){
                case Za:
                    return c1 = Ug(b1.type, b1.key, b1.props, null, a1.mode, c1), c1.ref = Pg(a1, null, b1), c1.return = a1, c1;
                case $a:
                    return b1 = Vg(b1, a1.mode, c1), b1.return = a1, b1;
            }
            if (Og(b1) || nb(b1)) return b1 = Wg(b1, a1.mode, c1, null), b1.return = a1, b1;
            Qg(a1, b1);
        }
        return null;
    }
    function x1(a1, b1, c1, d1) {
        var e1 = null !== b1 ? b1.key : null;
        if ("string" === typeof c1 || "number" === typeof c1) return null !== e1 ? null : h(a1, b1, "" + c1, d1);
        if ("object" === typeof c1 && null !== c1) {
            switch(c1.$$typeof){
                case Za:
                    return c1.key === e1 ? c1.type === ab ? m(a1, b1, c1.props.children, d1, e1) : k(a1, b1, c1, d1) : null;
                case $a:
                    return c1.key === e1 ? l(a1, b1, c1, d1) : null;
            }
            if (Og(c1) || nb(c1)) return null !== e1 ? null : m(a1, b1, c1, d1, null);
            Qg(a1, c1);
        }
        return null;
    }
    function z1(a1, b1, c1, d1, e1) {
        if ("string" === typeof d1 || "number" === typeof d1) return a1 = a1.get(c1) || null, h(b1, a1, "" + d1, e1);
        if ("object" === typeof d1 && null !== d1) {
            switch(d1.$$typeof){
                case Za:
                    return a1 = a1.get(null === d1.key ? c1 : d1.key) || null, d1.type === ab ? m(b1, a1, d1.props.children, e1, d1.key) : k(b1, a1, d1, e1);
                case $a:
                    return a1 = a1.get(null === d1.key ? c1 : d1.key) || null, l(b1, a1, d1, e1);
            }
            if (Og(d1) || nb(d1)) return a1 = a1.get(c1) || null, m(b1, a1, d1, e1, null);
            Qg(b1, d1);
        }
        return null;
    }
    function ca(e1, g1, h1, k1) {
        for(var l1 = null, t1 = null, m1 = g1, y1 = g1 = 0, A1 = null; null !== m1 && y1 < h1.length; y1++){
            m1.index > y1 ? (A1 = m1, m1 = null) : A1 = m1.sibling;
            var q1 = x1(e1, m1, h1[y1], k1);
            if (null === q1) {
                null === m1 && (m1 = A1);
                break;
            }
            a && m1 && null === q1.alternate && b(e1, m1);
            g1 = f(q1, g1, y1);
            null === t1 ? l1 = q1 : t1.sibling = q1;
            t1 = q1;
            m1 = A1;
        }
        if (y1 === h1.length) return c(e1, m1), l1;
        if (null === m1) {
            for(; y1 < h1.length; y1++)m1 = p2(e1, h1[y1], k1), null !== m1 && (g1 = f(m1, g1, y1), null === t1 ? l1 = m1 : t1.sibling = m1, t1 = m1);
            return l1;
        }
        for(m1 = d(e1, m1); y1 < h1.length; y1++)A1 = z1(m1, e1, y1, h1[y1], k1), null !== A1 && (a && null !== A1.alternate && m1.delete(null === A1.key ? y1 : A1.key), g1 = f(A1, g1, y1), null === t1 ? l1 = A1 : t1.sibling = A1, t1 = A1);
        a && m1.forEach(function(a1) {
            return b(e1, a1);
        });
        return l1;
    }
    function D1(e1, g1, h1, l1) {
        var k1 = nb(h1);
        if ("function" !== typeof k1) throw Error(u1(150));
        h1 = k1.call(h1);
        if (null == h1) throw Error(u1(151));
        for(var m1 = k1 = null, t1 = g1, y1 = g1 = 0, A1 = null, q1 = h1.next(); null !== t1 && !q1.done; y1++, q1 = h1.next()){
            t1.index > y1 ? (A1 = t1, t1 = null) : A1 = t1.sibling;
            var D1 = x1(e1, t1, q1.value, l1);
            if (null === D1) {
                null === t1 && (t1 = A1);
                break;
            }
            a && t1 && null === D1.alternate && b(e1, t1);
            g1 = f(D1, g1, y1);
            null === m1 ? k1 = D1 : m1.sibling = D1;
            m1 = D1;
            t1 = A1;
        }
        if (q1.done) return c(e1, t1), k1;
        if (null === t1) {
            for(; !q1.done; y1++, q1 = h1.next())q1 = p2(e1, q1.value, l1), null !== q1 && (g1 = f(q1, g1, y1), null === m1 ? k1 = q1 : m1.sibling = q1, m1 = q1);
            return k1;
        }
        for(t1 = d(e1, t1); !q1.done; y1++, q1 = h1.next())q1 = z1(t1, e1, y1, q1.value, l1), null !== q1 && (a && null !== q1.alternate && t1.delete(null === q1.key ? y1 : q1.key), g1 = f(q1, g1, y1), null === m1 ? k1 = q1 : m1.sibling = q1, m1 = q1);
        a && t1.forEach(function(a1) {
            return b(e1, a1);
        });
        return k1;
    }
    return function(a1, d1, f1, h1) {
        var k1 = "object" === typeof f1 && null !== f1 && f1.type === ab && null === f1.key;
        k1 && (f1 = f1.props.children);
        var l1 = "object" === typeof f1 && null !== f1;
        if (l1) switch(f1.$$typeof){
            case Za:
                a: {
                    l1 = f1.key;
                    for(k1 = d1; null !== k1;){
                        if (k1.key === l1) {
                            switch(k1.tag){
                                case 7:
                                    if (f1.type === ab) {
                                        c(a1, k1.sibling);
                                        d1 = e(k1, f1.props.children);
                                        d1.return = a1;
                                        a1 = d1;
                                        break a;
                                    }
                                    break;
                                default:
                                    if (k1.elementType === f1.type) {
                                        c(a1, k1.sibling);
                                        d1 = e(k1, f1.props);
                                        d1.ref = Pg(a1, k1, f1);
                                        d1.return = a1;
                                        a1 = d1;
                                        break a;
                                    }
                            }
                            c(a1, k1);
                            break;
                        } else b(a1, k1);
                        k1 = k1.sibling;
                    }
                    f1.type === ab ? (d1 = Wg(f1.props.children, a1.mode, h1, f1.key), d1.return = a1, a1 = d1) : (h1 = Ug(f1.type, f1.key, f1.props, null, a1.mode, h1), h1.ref = Pg(a1, d1, f1), h1.return = a1, a1 = h1);
                }
                return g(a1);
            case $a:
                a: {
                    for(k1 = f1.key; null !== d1;){
                        if (d1.key === k1) {
                            if (4 === d1.tag && d1.stateNode.containerInfo === f1.containerInfo && d1.stateNode.implementation === f1.implementation) {
                                c(a1, d1.sibling);
                                d1 = e(d1, f1.children || []);
                                d1.return = a1;
                                a1 = d1;
                                break a;
                            } else {
                                c(a1, d1);
                                break;
                            }
                        } else b(a1, d1);
                        d1 = d1.sibling;
                    }
                    d1 = Vg(f1, a1.mode, h1);
                    d1.return = a1;
                    a1 = d1;
                }
                return g(a1);
        }
        if ("string" === typeof f1 || "number" === typeof f1) return f1 = "" + f1, null !== d1 && 6 === d1.tag ? (c(a1, d1.sibling), d1 = e(d1, f1), d1.return = a1, a1 = d1) : (c(a1, d1), d1 = Tg(f1, a1.mode, h1), d1.return = a1, a1 = d1), g(a1);
        if (Og(f1)) return ca(a1, d1, f1, h1);
        if (nb(f1)) return D1(a1, d1, f1, h1);
        l1 && Qg(a1, f1);
        if ("undefined" === typeof f1 && !k1) switch(a1.tag){
            case 1:
            case 0:
                throw a1 = a1.type, Error(u1(152, a1.displayName || a1.name || "Component"));
        }
        return c(a1, d1);
    };
}
var Xg = Rg(!0), Yg = Rg(!1), Zg = {
}, $g = {
    current: Zg
}, ah = {
    current: Zg
}, bh = {
    current: Zg
};
function ch(a) {
    if (a === Zg) throw Error(u1(174));
    return a;
}
function dh(a, b) {
    I1(bh, b);
    I1(ah, a);
    I1($g, Zg);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
    }
    H1($g);
    I1($g, b);
}
function eh() {
    H1($g);
    H1(ah);
    H1(bh);
}
function fh(a) {
    ch(bh.current);
    var b = ch($g.current);
    var c = Ob(b, a.type);
    b !== c && (I1(ah, a), I1($g, c));
}
function gh(a) {
    ah.current === a && (H1($g), H1(ah));
}
var M1 = {
    current: 0
};
function hh(a) {
    for(var b = a; null !== b;){
        if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || c.data === Bd || c.data === Cd)) return b;
        } else if (19 === b.tag && (void 0) !== b.memoizedProps.revealOrder) {
            if (0 !== (b.effectTag & 64)) return b;
        } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
        }
        if (b === a) break;
        for(; null === b.sibling;){
            if (null === b.return || b.return === a) return null;
            b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
    }
    return null;
}
function ih(a, b) {
    return {
        responder: a,
        props: b
    };
}
var jh = Wa.ReactCurrentDispatcher, kh = Wa.ReactCurrentBatchConfig, lh = 0, N1 = null, O1 = null, P1 = null, mh = !1;
function Q1() {
    throw Error(u1(321));
}
function nh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!$e(a[c], b[c])) return !1;
    return !0;
}
function oh(a, b, c, d, e, f) {
    lh = f;
    N1 = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.expirationTime = 0;
    jh.current = null === a || null === a.memoizedState ? ph : qh;
    a = c(d, e);
    if (b.expirationTime === lh) {
        f = 0;
        do {
            b.expirationTime = 0;
            if (!(25 > f)) throw Error(u1(301));
            f += 1;
            P1 = O1 = null;
            b.updateQueue = null;
            jh.current = rh;
            a = c(d, e);
        }while (b.expirationTime === lh)
    }
    jh.current = sh;
    b = null !== O1 && null !== O1.next;
    lh = 0;
    P1 = O1 = N1 = null;
    mh = !1;
    if (b) throw Error(u1(300));
    return a;
}
function th() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === P1 ? N1.memoizedState = P1 = a : P1 = P1.next = a;
    return P1;
}
function uh() {
    if (null === O1) {
        var a = N1.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = O1.next;
    var b = null === P1 ? N1.memoizedState : P1.next;
    if (null !== b) P1 = b, O1 = a;
    else {
        if (null === a) throw Error(u1(310));
        O1 = a;
        a = {
            memoizedState: O1.memoizedState,
            baseState: O1.baseState,
            baseQueue: O1.baseQueue,
            queue: O1.queue,
            next: null
        };
        null === P1 ? N1.memoizedState = P1 = a : P1 = P1.next = a;
    }
    return P1;
}
function vh(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function wh(a) {
    var b = uh(), c = b.queue;
    if (null === c) throw Error(u1(311));
    c.lastRenderedReducer = a;
    var d = O1, e = d.baseQueue, f = c.pending;
    if (null !== f) {
        if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
    }
    if (null !== e) {
        e = e.next;
        d = d.baseState;
        var h = g = f = null, k = e;
        do {
            var l = k.expirationTime;
            if (l < lh) {
                var m = {
                    expirationTime: k.expirationTime,
                    suspenseConfig: k.suspenseConfig,
                    action: k.action,
                    eagerReducer: k.eagerReducer,
                    eagerState: k.eagerState,
                    next: null
                };
                null === h ? (g = h = m, f = d) : h = h.next = m;
                l > N1.expirationTime && (N1.expirationTime = l, Bg(l));
            } else null !== h && (h = h.next = {
                expirationTime: 1073741823,
                suspenseConfig: k.suspenseConfig,
                action: k.action,
                eagerReducer: k.eagerReducer,
                eagerState: k.eagerState,
                next: null
            }), Ag(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
            k = k.next;
        }while (null !== k && k !== e)
        null === h ? f = d : h.next = g;
        $e(d, b.memoizedState) || (rg = !0);
        b.memoizedState = d;
        b.baseState = f;
        b.baseQueue = h;
        c.lastRenderedState = d;
    }
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function xh(a) {
    var b = uh(), c = b.queue;
    if (null === c) throw Error(u1(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e)
        $e(f, b.memoizedState) || (rg = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function yh(a) {
    var b = th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: vh,
        lastRenderedState: a
    };
    a = a.dispatch = zh.bind(null, N1, a);
    return [
        b.memoizedState,
        a
    ];
}
function Ah(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = N1.updateQueue;
    null === b ? (b = {
        lastEffect: null
    }, N1.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function Bh() {
    return uh().memoizedState;
}
function Ch(a, b, c, d) {
    var e = th();
    N1.effectTag |= a;
    e.memoizedState = Ah(1 | b, c, void 0, (void 0) === d ? null : d);
}
function Dh(a, b, c, d) {
    var e = uh();
    d = (void 0) === d ? null : d;
    var f = void 0;
    if (null !== O1) {
        var g = O1.memoizedState;
        f = g.destroy;
        if (null !== d && nh(d, g.deps)) {
            Ah(b, c, f, d);
            return;
        }
    }
    N1.effectTag |= a;
    e.memoizedState = Ah(1 | b, c, f, d);
}
function Eh(a, b) {
    return Ch(516, 4, a, b);
}
function Fh(a, b) {
    return Dh(516, 4, a, b);
}
function Gh(a, b) {
    return Dh(4, 2, a, b);
}
function Hh(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && (void 0) !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function Ih(a, b, c) {
    c = null !== c && (void 0) !== c ? c.concat([
        a
    ]) : null;
    return Dh(4, 2, Hh.bind(null, b, a), c);
}
function Jh() {
}
function Kh(a, b) {
    th().memoizedState = [
        a,
        (void 0) === b ? null : b
    ];
    return a;
}
function Lh(a, b) {
    var c = uh();
    b = (void 0) === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && nh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function Mh(a, b) {
    var c = uh();
    b = (void 0) === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && nh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function Nh(a, b, c) {
    var d = ag();
    cg(98 > d ? 98 : d, function() {
        a(!0);
    });
    cg(97 < d ? 97 : d, function() {
        var d1 = kh.suspense;
        kh.suspense = (void 0) === b ? null : b;
        try {
            a(!1), c();
        } finally{
            kh.suspense = d1;
        }
    });
}
function zh(a, b, c) {
    var d = Gg(), e = Dg.suspense;
    d = Hg(d, a, e);
    e = {
        expirationTime: d,
        suspenseConfig: e,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
    };
    var f = b.pending;
    null === f ? e.next = e : (e.next = f.next, f.next = e);
    b.pending = e;
    f = a.alternate;
    if (a === N1 || null !== f && f === N1) mh = !0, e.expirationTime = lh, N1.expirationTime = lh;
    else {
        if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.eagerReducer = f;
            e.eagerState = h;
            if ($e(h, g)) return;
        } catch (k) {
        } finally{
        }
        Ig(a, d);
    }
}
var sh = {
    readContext: sg,
    useCallback: Q1,
    useContext: Q1,
    useEffect: Q1,
    useImperativeHandle: Q1,
    useLayoutEffect: Q1,
    useMemo: Q1,
    useReducer: Q1,
    useRef: Q1,
    useState: Q1,
    useDebugValue: Q1,
    useResponder: Q1,
    useDeferredValue: Q1,
    useTransition: Q1
}, ph = {
    readContext: sg,
    useCallback: Kh,
    useContext: sg,
    useEffect: Eh,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && (void 0) !== c ? c.concat([
            a
        ]) : null;
        return Ch(4, 2, Hh.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return Ch(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = th();
        b = (void 0) === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = th();
        b = (void 0) !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: b
        };
        a = a.dispatch = zh.bind(null, N1, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = th();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: yh,
    useDebugValue: Jh,
    useResponder: ih,
    useDeferredValue: function(a, b) {
        var c = yh(a), d = c[0], e = c[1];
        Eh(function() {
            var c1 = kh.suspense;
            kh.suspense = (void 0) === b ? null : b;
            try {
                e(a);
            } finally{
                kh.suspense = c1;
            }
        }, [
            a,
            b
        ]);
        return d;
    },
    useTransition: function(a) {
        var b = yh(!1), c = b[0];
        b = b[1];
        return [
            Kh(Nh.bind(null, b, a), [
                b,
                a
            ]),
            c
        ];
    }
}, qh = {
    readContext: sg,
    useCallback: Lh,
    useContext: sg,
    useEffect: Fh,
    useImperativeHandle: Ih,
    useLayoutEffect: Gh,
    useMemo: Mh,
    useReducer: wh,
    useRef: Bh,
    useState: function() {
        return wh(vh);
    },
    useDebugValue: Jh,
    useResponder: ih,
    useDeferredValue: function(a, b) {
        var c = wh(vh), d = c[0], e = c[1];
        Fh(function() {
            var c1 = kh.suspense;
            kh.suspense = (void 0) === b ? null : b;
            try {
                e(a);
            } finally{
                kh.suspense = c1;
            }
        }, [
            a,
            b
        ]);
        return d;
    },
    useTransition: function(a) {
        var b = wh(vh), c = b[0];
        b = b[1];
        return [
            Lh(Nh.bind(null, b, a), [
                b,
                a
            ]),
            c
        ];
    }
}, rh = {
    readContext: sg,
    useCallback: Lh,
    useContext: sg,
    useEffect: Fh,
    useImperativeHandle: Ih,
    useLayoutEffect: Gh,
    useMemo: Mh,
    useReducer: xh,
    useRef: Bh,
    useState: function() {
        return xh(vh);
    },
    useDebugValue: Jh,
    useResponder: ih,
    useDeferredValue: function(a, b) {
        var c = xh(vh), d = c[0], e = c[1];
        Fh(function() {
            var c1 = kh.suspense;
            kh.suspense = (void 0) === b ? null : b;
            try {
                e(a);
            } finally{
                kh.suspense = c1;
            }
        }, [
            a,
            b
        ]);
        return d;
    },
    useTransition: function(a) {
        var b = xh(vh), c = b[0];
        b = b[1];
        return [
            Lh(Nh.bind(null, b, a), [
                b,
                a
            ]),
            c
        ];
    }
}, Oh = null, Ph = null, Qh = !1;
function Rh(a, b) {
    var c = Sh(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.effectTag = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function Th(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;
        case 13:
            return !1;
        default:
            return !1;
    }
}
function Uh(a) {
    if (Qh) {
        var b = Ph;
        if (b) {
            var c = b;
            if (!Th(a, b)) {
                b = Jd(c.nextSibling);
                if (!b || !Th(a, b)) {
                    a.effectTag = a.effectTag & -1025 | 2;
                    Qh = !1;
                    Oh = a;
                    return;
                }
                Rh(Oh, c);
            }
            Oh = a;
            Ph = Jd(b.firstChild);
        } else a.effectTag = a.effectTag & -1025 | 2, Qh = !1, Oh = a;
    }
}
function Vh(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    Oh = a;
}
function Wh(a) {
    if (a !== Oh) return !1;
    if (!Qh) return Vh(a), Qh = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Gd(b, a.memoizedProps)) for(b = Ph; b;)Rh(a, b), b = Jd(b.nextSibling);
    Vh(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(u1(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if (c === Ad) {
                        if (0 === b) {
                            Ph = Jd(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else c !== zd && c !== Cd && c !== Bd || b++;
                }
                a = a.nextSibling;
            }
            Ph = null;
        }
    } else Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
    return !0;
}
function Xh() {
    Ph = Oh = null;
    Qh = !1;
}
var Yh = Wa.ReactCurrentOwner, rg = !1;
function R1(a, b, c, d) {
    b.child = null === a ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
}
function Zh(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    qg(b, e);
    d = oh(a, b, c, d, f, e);
    if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
    b.effectTag |= 1;
    R1(a, b, d, e);
    return b.child;
}
function ai(a, b, c, d, e, f) {
    if (null === a) {
        var g = c.type;
        if ("function" === typeof g && !bi(g) && (void 0) === g.defaultProps && null === c.compare && (void 0) === c.defaultProps) return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
        a = Ug(c.type, null, d, null, b.mode, f);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    g = a.child;
    if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : bf, c(e, d) && a.ref === b.ref)) return $h(a, b, f);
    b.effectTag |= 1;
    a = Sg(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function ci(a, b, c, d, e, f) {
    return null !== a && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = !1, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
}
function ei(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}
function di(a, b, c, d, e) {
    var f = L1(c) ? Bf : J1.current;
    f = Cf(b, f);
    qg(b, e);
    c = oh(a, b, c, d, f, e);
    if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
    b.effectTag |= 1;
    R1(a, b, c, e);
    return b.child;
}
function fi(a, b, c, d, e) {
    if (L1(c)) {
        var f = !0;
        Gf(b);
    } else f = !1;
    qg(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = sg(l) : (l = L1(c) ? Bf : J1.current, l = Cf(b, l));
        var m = c.getDerivedStateFromProps, p2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        p2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l);
        tg = !1;
        var x1 = b.memoizedState;
        g.state = x1;
        zg(b, d, g, e);
        k = b.memoizedState;
        h !== d || x1 !== k || K2.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x1, k, l)) ? (p2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
    } else g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = sg(l) : (l = L1(c) ? Bf : J1.current, l = Cf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l), tg = !1, k = b.memoizedState, g.state = k, zg(b, d, g, e), x = b.memoizedState, h !== d || k !== x || K2.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), x = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
    return gi(a, b, c, d, f, e);
}
function gi(a, b, c, d, e, f) {
    ei(a, b);
    var g = 0 !== (b.effectTag & 64);
    if (!d && !g) return e && Hf(b, c, !1), $h(a, b, f);
    d = b.stateNode;
    Yh.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.effectTag |= 1;
    null !== a && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R1(a, b, h, f);
    b.memoizedState = d.state;
    e && Hf(b, c, !0);
    return b.child;
}
function hi(a) {
    var b = a.stateNode;
    b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, !1);
    dh(a, b.containerInfo);
}
var ii = {
    dehydrated: null,
    retryTime: 0
};
function ji(a, b, c) {
    var d = b.mode, e = b.pendingProps, f = M1.current, g = !1, h;
    0 !== (b.effectTag & 64) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
    0 !== (b.effectTag & 64) ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || (void 0) === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
    I1(M1, f & 1);
    if (null === a) {
        (void 0) !== e.fallback && Uh(b);
        if (g) {
            g = e.fallback;
            e = Wg(null, d, 0, null);
            e.return = b;
            if (0 === (b.mode & 2)) for(a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;)a.return = e, a = a.sibling;
            c = Wg(g, d, c, null);
            c.return = b;
            e.sibling = c;
            b.memoizedState = ii;
            b.child = e;
            return c;
        }
        d = e.children;
        b.memoizedState = null;
        return b.child = Yg(b, null, d, c);
    }
    if (null !== a.memoizedState) {
        a = a.child;
        d = a.sibling;
        if (g) {
            e = e.fallback;
            c = Sg(a, a.pendingProps);
            c.return = b;
            if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for(c.child = g; null !== g;)g.return = c, g = g.sibling;
            d = Sg(d, e);
            d.return = b;
            c.sibling = d;
            c.childExpirationTime = 0;
            b.memoizedState = ii;
            b.child = c;
            return d;
        }
        c = Xg(b, a.child, e.children, c);
        b.memoizedState = null;
        return b.child = c;
    }
    a = a.child;
    if (g) {
        g = e.fallback;
        e = Wg(null, d, 0, null);
        e.return = b;
        e.child = a;
        null !== a && (a.return = e);
        if (0 === (b.mode & 2)) for(a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;)a.return = e, a = a.sibling;
        c = Wg(g, d, c, null);
        c.return = b;
        e.sibling = c;
        c.effectTag |= 2;
        e.childExpirationTime = 0;
        b.memoizedState = ii;
        b.child = e;
        return c;
    }
    b.memoizedState = null;
    return b.child = Xg(b, a, e.children, c);
}
function ki(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    pg(a.return, b);
}
function li(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailExpiration: 0,
        tailMode: e,
        lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
}
function mi(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    R1(a, b, d.children, c);
    d = M1.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;
    else {
        if (null !== a && 0 !== (a.effectTag & 64)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && ki(a, c);
            else if (19 === a.tag) ki(a, c);
            else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
            }
            if (a === b) break a;
            for(; null === a.sibling;){
                if (null === a.return || a.return === b) break a;
                a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
        }
        d &= 1;
    }
    I1(M1, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === hh(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            li(b, !1, e, c, f, b.lastEffect);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === hh(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            li(b, !0, c, null, f, b.lastEffect);
            break;
        case "together":
            li(b, !1, null, null, void 0, b.lastEffect);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function $h(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    var d = b.expirationTime;
    0 !== d && Bg(d);
    if (b.childExpirationTime < c) return null;
    if (null !== a && b.child !== a.child) throw Error(u1(153));
    if (null !== b.child) {
        a = b.child;
        c = Sg(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
var ni, oi, pi, qi;
ni = function(a, b) {
    for(var c = b.child; null !== c;){
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
        }
        if (c === b) break;
        for(; null === c.sibling;){
            if (null === c.return || c.return === b) return;
            c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
    }
};
oi = function() {
};
pi = function(a, b, c, d, e) {
    var f = a.memoizedProps;
    if (f !== d) {
        var g = b.stateNode;
        ch($g.current);
        a = null;
        switch(c){
            case "input":
                f = zb(g, f);
                d = zb(g, d);
                a = [];
                break;
            case "option":
                f = Gb(g, f);
                d = Gb(g, d);
                a = [];
                break;
            case "select":
                f = objectAssign({
                }, f, {
                    value: void 0
                });
                d = objectAssign({
                }, d, {
                    value: void 0
                });
                a = [];
                break;
            case "textarea":
                f = Ib(g, f);
                d = Ib(g, d);
                a = [];
                break;
            default:
                "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = sd);
        }
        od(c, d);
        var h, k;
        c = null;
        for(h in f)if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) {
            if ("style" === h) for(k in g = f[h], g)g.hasOwnProperty(k) && (c || (c = {
            }), c[k] = "");
            else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
        }
        for(h in d){
            var l = d[h];
            g = null != f ? f[h] : void 0;
            if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) {
                if ("style" === h) {
                    if (g) {
                        for(k in g)!g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {
                        }), c[k] = "");
                        for(k in l)l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {
                        }), c[k] = l[k]);
                    } else c || (a || (a = []), a.push(h, c)), c = l;
                } else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (va.hasOwnProperty(h) ? (null != l && rd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
            }
        }
        c && (a = a || []).push("style", c);
        e = a;
        if (b.updateQueue = e) b.effectTag |= 4;
    }
};
qi = function(a, b, c, d) {
    c !== d && (b.effectTag |= 4);
};
function ri(a, b) {
    switch(a.tailMode){
        case "hidden":
            b = a.tail;
            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
        case "collapsed":
            c = a.tail;
            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function si(a, b, c) {
    var d = b.pendingProps;
    switch(b.tag){
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null;
        case 1:
            return L1(b.type) && Df(), null;
        case 3:
            return eh(), H1(K2), H1(J1), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Wh(b) || (b.effectTag |= 4), oi(b), null;
        case 5:
            gh(b);
            c = ch(bh.current);
            var e = b.type;
            if (null !== a && null != b.stateNode) pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error(u1(166));
                    return null;
                }
                a = ch($g.current);
                if (Wh(b)) {
                    d = b.stateNode;
                    e = b.type;
                    var f = b.memoizedProps;
                    d[Md] = b;
                    d[Nd] = f;
                    switch(e){
                        case "iframe":
                        case "object":
                        case "embed":
                            F2("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(a = 0; a < ac.length; a++)F2(ac[a], d);
                            break;
                        case "source":
                            F2("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F2("error", d);
                            F2("load", d);
                            break;
                        case "form":
                            F2("reset", d);
                            F2("submit", d);
                            break;
                        case "details":
                            F2("toggle", d);
                            break;
                        case "input":
                            Ab(d, f);
                            F2("invalid", d);
                            rd(c, "onChange");
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            F2("invalid", d);
                            rd(c, "onChange");
                            break;
                        case "textarea":
                            Jb(d, f), F2("invalid", d), rd(c, "onChange");
                    }
                    od(e, f);
                    a = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (a = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (a = [
                            "children",
                            "" + h
                        ]) : va.hasOwnProperty(g) && null != h && rd(c, g);
                    }
                    switch(e){
                        case "input":
                            xb(d);
                            Eb(d, f, !0);
                            break;
                        case "textarea":
                            xb(d);
                            Lb(d);
                            break;
                        case "select":
                        case "option": break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = sd);
                    }
                    c = a;
                    b.updateQueue = c;
                    null !== c && (b.effectTag |= 4);
                } else {
                    g = 9 === c.nodeType ? c : c.ownerDocument;
                    a === qd && (a = Nb(e));
                    a === qd ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, {
                        is: d.is
                    }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
                    a[Md] = b;
                    a[Nd] = d;
                    ni(a, b, !1, !1);
                    b.stateNode = a;
                    g = pd(e, d);
                    switch(e){
                        case "iframe":
                        case "object":
                        case "embed":
                            F2("load", a);
                            h = d;
                            break;
                        case "video":
                        case "audio":
                            for(h = 0; h < ac.length; h++)F2(ac[h], a);
                            h = d;
                            break;
                        case "source":
                            F2("error", a);
                            h = d;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F2("error", a);
                            F2("load", a);
                            h = d;
                            break;
                        case "form":
                            F2("reset", a);
                            F2("submit", a);
                            h = d;
                            break;
                        case "details":
                            F2("toggle", a);
                            h = d;
                            break;
                        case "input":
                            Ab(a, d);
                            h = zb(a, d);
                            F2("invalid", a);
                            rd(c, "onChange");
                            break;
                        case "option":
                            h = Gb(a, d);
                            break;
                        case "select":
                            a._wrapperState = {
                                wasMultiple: !!d.multiple
                            };
                            h = objectAssign({
                            }, d, {
                                value: void 0
                            });
                            F2("invalid", a);
                            rd(c, "onChange");
                            break;
                        case "textarea":
                            Jb(a, d);
                            h = Ib(a, d);
                            F2("invalid", a);
                            rd(c, "onChange");
                            break;
                        default:
                            h = d;
                    }
                    od(e, h);
                    var k = h;
                    for(f in k)if (k.hasOwnProperty(f)) {
                        var l = k[f];
                        "style" === f ? md(a, l) : "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, null != l && Qb(a, l)) : "children" === f ? "string" === typeof l ? ("textarea" !== e || "" !== l) && Rb(a, l) : "number" === typeof l && Rb(a, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (va.hasOwnProperty(f) ? null != l && rd(c, f) : null != l && Xa(a, f, l, g));
                    }
                    switch(e){
                        case "input":
                            xb(a);
                            Eb(a, d, !1);
                            break;
                        case "textarea":
                            xb(a);
                            Lb(a);
                            break;
                        case "option":
                            null != d.value && a.setAttribute("value", "" + rb(d.value));
                            break;
                        case "select":
                            a.multiple = !!d.multiple;
                            c = d.value;
                            null != c ? Hb(a, !!d.multiple, c, !1) : null != d.defaultValue && Hb(a, !!d.multiple, d.defaultValue, !0);
                            break;
                        default:
                            "function" === typeof h.onClick && (a.onclick = sd);
                    }
                    Fd(e, d) && (b.effectTag |= 4);
                }
                null !== b.ref && (b.effectTag |= 128);
            }
            return null;
        case 6:
            if (a && null != b.stateNode) qi(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error(u1(166));
                c = ch(bh.current);
                ch($g.current);
                Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
            }
            return null;
        case 13:
            H1(M1);
            d = b.memoizedState;
            if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b;
            c = null !== d;
            d = !1;
            null === a ? (void 0) !== b.memoizedProps.fallback && Wh(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
            if (c && !d && 0 !== (b.mode & 2)) {
                if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M1.current & 1)) S2 === ti && (S2 = ui);
                else {
                    if (S2 === ti || S2 === ui) S2 = vi;
                    0 !== wi && null !== T2 && (xi(T2, U2), yi(T2, wi));
                }
            }
            if (c || d) b.effectTag |= 4;
            return null;
        case 4:
            return eh(), oi(b), null;
        case 10:
            return og(b), null;
        case 17:
            return L1(b.type) && Df(), null;
        case 19:
            H1(M1);
            d = b.memoizedState;
            if (null === d) return null;
            e = 0 !== (b.effectTag & 64);
            f = d.rendering;
            if (null === f) {
                if (e) ri(d, !1);
                else {
                    if (S2 !== ti || null !== a && 0 !== (a.effectTag & 64)) for(f = b.child; null !== f;){
                        a = hh(f);
                        if (null !== a) {
                            b.effectTag |= 64;
                            ri(d, !1);
                            e = a.updateQueue;
                            null !== e && (b.updateQueue = e, b.effectTag |= 4);
                            null === d.lastEffect && (b.firstEffect = null);
                            b.lastEffect = d.lastEffect;
                            for(d = b.child; null !== d;)e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : {
                                expirationTime: f.expirationTime,
                                firstContext: f.firstContext,
                                responders: f.responders
                            }), d = d.sibling;
                            I1(M1, M1.current & 1 | 2);
                            return b.child;
                        }
                        f = f.sibling;
                    }
                }
            } else {
                if (!e) {
                    if (a = hh(f), null !== a) {
                        if (b.effectTag |= 64, e = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), ri(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
                    } else 2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = !0, ri(d, !1), b.expirationTime = b.childExpirationTime = c - 1);
                }
                d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f);
            }
            return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M1.current, I1(M1, e ? b & 1 | 2 : b & 1), c) : null;
    }
    throw Error(u1(156, b.tag));
}
function zi(a) {
    switch(a.tag){
        case 1:
            L1(a.type) && Df();
            var b = a.effectTag;
            return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
        case 3:
            eh();
            H1(K2);
            H1(J1);
            b = a.effectTag;
            if (0 !== (b & 64)) throw Error(u1(285));
            a.effectTag = b & -4097 | 64;
            return a;
        case 5:
            return gh(a), null;
        case 13:
            return H1(M1), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
        case 19:
            return H1(M1), null;
        case 4:
            return eh(), null;
        case 10:
            return og(a), null;
        default:
            return null;
    }
}
function Ai(a, b) {
    return {
        value: a,
        source: b,
        stack: qb(b)
    };
}
var Bi = "function" === typeof WeakSet ? WeakSet : Set;
function Ci(a, b) {
    var c = b.source, d = b.stack;
    null === d && null !== c && (d = qb(c));
    null !== c && pb(c.type);
    b = b.value;
    null !== a && 1 === a.tag && pb(a.type);
    try {
        console.error(b);
    } catch (e) {
        setTimeout(function() {
            throw e;
        });
    }
}
function Di(a, b) {
    try {
        b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
    } catch (c) {
        Ei(a, c);
    }
}
function Fi(a) {
    var b = a.ref;
    if (null !== b) {
        if ("function" === typeof b) try {
            b(null);
        } catch (c) {
            Ei(a, c);
        }
        else b.current = null;
    }
}
function Gi(a, b) {
    switch(b.tag){
        case 0:
        case 11:
        case 15:
        case 22:
            return;
        case 1:
            if (b.effectTag & 256 && null !== a) {
                var c = a.memoizedProps, d = a.memoizedState;
                a = b.stateNode;
                b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
                a.__reactInternalSnapshotBeforeUpdate = b;
            }
            return;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
            return;
    }
    throw Error(u1(163));
}
function Hi(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.destroy;
                c.destroy = void 0;
                (void 0) !== d && d();
            }
            c = c.next;
        }while (c !== b)
    }
}
function Ii(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
            }
            c = c.next;
        }while (c !== b)
    }
}
function Ji(a, b, c) {
    switch(c.tag){
        case 0:
        case 11:
        case 15:
        case 22:
            Ii(3, c);
            return;
        case 1:
            a = c.stateNode;
            if (c.effectTag & 4) {
                if (null === b) a.componentDidMount();
                else {
                    var d;
                    a.componentDidUpdate(c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps), b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
            }
            b = c.updateQueue;
            null !== b && Cg(c, b, a);
            return;
        case 3:
            b = c.updateQueue;
            if (null !== b) {
                a = null;
                if (null !== c.child) switch(c.child.tag){
                    case 5:
                        a = c.child.stateNode;
                        break;
                    case 1:
                        a = c.child.stateNode;
                }
                Cg(c, b, a);
            }
            return;
        case 5:
            a = c.stateNode;
            null === b && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
            return;
        case 6:
            return;
        case 4:
            return;
        case 12:
            return;
        case 13:
            null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Vc(c))));
            return;
        case 19:
        case 17:
        case 20:
        case 21:
            return;
    }
    throw Error(u1(163));
}
function Ki(a, b, c) {
    "function" === typeof Li && Li(b);
    switch(b.tag){
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            a = b.updateQueue;
            if (null !== a && (a = a.lastEffect, null !== a)) {
                var d = a.next;
                cg(97 < c ? 97 : c, function() {
                    var a1 = d;
                    do {
                        var c1 = a1.destroy;
                        if ((void 0) !== c1) {
                            var g = b;
                            try {
                                c1();
                            } catch (h) {
                                Ei(g, h);
                            }
                        }
                        a1 = a1.next;
                    }while (a1 !== d)
                });
            }
            break;
        case 1:
            Fi(b);
            c = b.stateNode;
            "function" === typeof c.componentWillUnmount && Di(b, c);
            break;
        case 5:
            Fi(b);
            break;
        case 4:
            Mi(a, b, c);
    }
}
function Ni(a) {
    var b = a.alternate;
    a.return = null;
    a.child = null;
    a.memoizedState = null;
    a.updateQueue = null;
    a.dependencies = null;
    a.alternate = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.pendingProps = null;
    a.memoizedProps = null;
    a.stateNode = null;
    null !== b && Ni(b);
}
function Oi(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Pi(a) {
    a: {
        for(var b = a.return; null !== b;){
            if (Oi(b)) {
                var c = b;
                break a;
            }
            b = b.return;
        }
        throw Error(u1(160));
    }
    b = c.stateNode;
    switch(c.tag){
        case 5:
            var d = !1;
            break;
        case 3:
            b = b.containerInfo;
            d = !0;
            break;
        case 4:
            b = b.containerInfo;
            d = !0;
            break;
        default:
            throw Error(u1(161));
    }
    c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);
    a: b: for(c = a;;){
        for(; null === c.sibling;){
            if (null === c.return || Oi(c.return)) {
                c = null;
                break a;
            }
            c = c.return;
        }
        c.sibling.return = c.return;
        for(c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;){
            if (c.effectTag & 2) continue b;
            if (null === c.child || 4 === c.tag) continue b;
            else c.child.return = c, c = c.child;
        }
        if (!(c.effectTag & 2)) {
            c = c.stateNode;
            break a;
        }
    }
    d ? Qi(a, c, b) : Ri(a, c, b);
}
function Qi(a, b, c) {
    var d = a.tag, e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && (void 0) !== c || null !== b.onclick || (b.onclick = sd));
    else if (4 !== d && (a = a.child, null !== a)) for(Qi(a, b, c), a = a.sibling; null !== a;)Qi(a, b, c), a = a.sibling;
}
function Ri(a, b, c) {
    var d = a.tag, e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for(Ri(a, b, c), a = a.sibling; null !== a;)Ri(a, b, c), a = a.sibling;
}
function Mi(a, b, c) {
    for(var d = b, e = !1, f, g;;){
        if (!e) {
            e = d.return;
            a: for(;;){
                if (null === e) throw Error(u1(160));
                f = e.stateNode;
                switch(e.tag){
                    case 5:
                        g = !1;
                        break a;
                    case 3:
                        f = f.containerInfo;
                        g = !0;
                        break a;
                    case 4:
                        f = f.containerInfo;
                        g = !0;
                        break a;
                }
                e = e.return;
            }
            e = !0;
        }
        if (5 === d.tag || 6 === d.tag) {
            a: for(var h = a, k = d, l = c, m = k;;)if (Ki(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;
            else {
                if (m === k) break a;
                for(; null === m.sibling;){
                    if (null === m.return || m.return === k) break a;
                    m = m.return;
                }
                m.sibling.return = m.return;
                m = m.sibling;
            }
            g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
        } else if (4 === d.tag) {
            if (null !== d.child) {
                f = d.stateNode.containerInfo;
                g = !0;
                d.child.return = d;
                d = d.child;
                continue;
            }
        } else if (Ki(a, d, c), null !== d.child) {
            d.child.return = d;
            d = d.child;
            continue;
        }
        if (d === b) break;
        for(; null === d.sibling;){
            if (null === d.return || d.return === b) return;
            d = d.return;
            4 === d.tag && (e = !1);
        }
        d.sibling.return = d.return;
        d = d.sibling;
    }
}
function Si(a, b) {
    switch(b.tag){
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            Hi(3, b);
            return;
        case 1:
            return;
        case 5:
            var c = b.stateNode;
            if (null != c) {
                var d = b.memoizedProps, e = null !== a ? a.memoizedProps : d;
                a = b.type;
                var f = b.updateQueue;
                b.updateQueue = null;
                if (null !== f) {
                    c[Nd] = d;
                    "input" === a && "radio" === d.type && null != d.name && Bb(c, d);
                    pd(a, e);
                    b = pd(a, d);
                    for(e = 0; e < f.length; e += 2){
                        var g = f[e], h = f[e + 1];
                        "style" === g ? md(c, h) : "dangerouslySetInnerHTML" === g ? Qb(c, h) : "children" === g ? Rb(c, h) : Xa(c, g, h, b);
                    }
                    switch(a){
                        case "input":
                            Cb(c, d);
                            break;
                        case "textarea":
                            Kb(c, d);
                            break;
                        case "select":
                            b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Hb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? Hb(c, !!d.multiple, d.defaultValue, !0) : Hb(c, !!d.multiple, d.multiple ? [] : "", !1));
                    }
                }
            }
            return;
        case 6:
            if (null === b.stateNode) throw Error(u1(162));
            b.stateNode.nodeValue = b.memoizedProps;
            return;
        case 3:
            b = b.stateNode;
            b.hydrate && (b.hydrate = !1, Vc(b.containerInfo));
            return;
        case 12:
            return;
        case 13:
            c = b;
            null === b.memoizedState ? d = !1 : (d = !0, c = b.child, Ti = $f());
            if (null !== c) a: for(a = c;;){
                if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = (void 0) !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));
                else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps;
                else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
                    f = a.child.sibling;
                    f.return = a;
                    a = f;
                    continue;
                } else if (null !== a.child) {
                    a.child.return = a;
                    a = a.child;
                    continue;
                }
                if (a === c) break;
                for(; null === a.sibling;){
                    if (null === a.return || a.return === c) break a;
                    a = a.return;
                }
                a.sibling.return = a.return;
                a = a.sibling;
            }
            Ui(b);
            return;
        case 19:
            Ui(b);
            return;
        case 17:
            return;
    }
    throw Error(u1(163));
}
function Ui(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Bi);
        b.forEach(function(b1) {
            var d = Vi.bind(null, a, b1);
            c.has(b1) || (c.add(b1), b1.then(d, d));
        });
    }
}
var Wi = "function" === typeof WeakMap ? WeakMap : Map;
function Xi(a, b, c) {
    c = wg(c, null);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        Yi || (Yi = !0, Zi = d);
        Ci(a, b);
    };
    return c;
}
function $i(a, b, c) {
    c = wg(c, null);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            Ci(a, b);
            return d(e);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        "function" !== typeof d && (null === aj ? aj = new Set([
            this
        ]) : aj.add(this), Ci(a, b));
        var c1 = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c1 ? c1 : ""
        });
    });
    return c;
}
var bj = Math.ceil, cj = Wa.ReactCurrentDispatcher, dj = Wa.ReactCurrentOwner, V1 = 0, ej = 8, fj = 16, gj = 32, ti = 0, hj = 1, ij = 2, ui = 3, vi = 4, jj = 5, W1 = V1, T2 = null, X2 = null, U2 = 0, S2 = ti, kj = null, lj = 1073741823, mj = 1073741823, nj = null, wi = 0, oj = !1, Ti = 0, pj = 500, Y1 = null, Yi = !1, Zi = null, aj = null, qj = !1, rj = null, sj = 90, tj = null, uj = 0, vj = null, wj = 0;
function Gg() {
    return (W1 & (fj | gj)) !== V1 ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0);
}
function Hg(a, b, c) {
    b = b.mode;
    if (0 === (b & 2)) return 1073741823;
    var d = ag();
    if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
    if ((W1 & fj) !== V1) return U2;
    if (null !== c) a = hg(a, c.timeoutMs | 0 || 5000, 250);
    else switch(d){
        case 99:
            a = 1073741823;
            break;
        case 98:
            a = hg(a, 150, 100);
            break;
        case 97:
        case 96:
            a = hg(a, 5000, 250);
            break;
        case 95:
            a = 2;
            break;
        default:
            throw Error(u1(326));
    }
    null !== T2 && a === U2 && --a;
    return a;
}
function Ig(a, b) {
    if (50 < uj) throw uj = 0, vj = null, Error(u1(185));
    a = xj(a, b);
    if (null !== a) {
        var c = ag();
        1073741823 === b ? (W1 & ej) !== V1 && (W1 & (fj | gj)) === V1 ? yj(a) : (Z2(a), W1 === V1 && gg()) : Z2(a);
        (W1 & 4) === V1 || 98 !== c && 99 !== c || (null === tj ? tj = new Map([
            [
                a,
                b
            ]
        ]) : (c = tj.get(a), ((void 0) === c || c > b) && tj.set(a, b)));
    }
}
function xj(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    var d = a.return, e = null;
    if (null === d && 3 === a.tag) e = a.stateNode;
    else for(; null !== d;){
        c = d.alternate;
        d.childExpirationTime < b && (d.childExpirationTime = b);
        null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
        if (null === d.return && 3 === d.tag) {
            e = d.stateNode;
            break;
        }
        d = d.return;
    }
    null !== e && (T2 === e && (Bg(b), S2 === vi && xi(e, U2)), yi(e, b));
    return e;
}
function zj(a) {
    var b = a.lastExpiredTime;
    if (0 !== b) return b;
    b = a.firstPendingTime;
    if (!Aj(a, b)) return b;
    var c = a.lastPingedTime;
    a = a.nextKnownPendingLevel;
    a = c > a ? c : a;
    return 2 >= a && b !== a ? 0 : a;
}
function Z2(a) {
    if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));
    else {
        var b = zj(a), c = a.callbackNode;
        if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
        else {
            var d = Gg();
            1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
            if (null !== c) {
                var e = a.callbackPriority;
                if (a.callbackExpirationTime === b && e >= d) return;
                c !== Tf && Kf(c);
            }
            a.callbackExpirationTime = b;
            a.callbackPriority = d;
            b = 1073741823 === b ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), {
                timeout: 10 * (1073741821 - b) - $f()
            });
            a.callbackNode = b;
        }
    }
}
function Bj(a, b) {
    wj = 0;
    if (b) return b = Gg(), Cj(a, b), Z2(a), null;
    var c = zj(a);
    if (0 !== c) {
        b = a.callbackNode;
        if ((W1 & (fj | gj)) !== V1) throw Error(u1(327));
        Dj();
        a === T2 && c === U2 || Ej(a, c);
        if (null !== X2) {
            var d = W1;
            W1 |= fj;
            var e = Fj();
            do try {
                Gj();
                break;
            } catch (h) {
                Hj(a, h);
            }
            while (1)
            ng();
            W1 = d;
            cj.current = e;
            if (S2 === hj) throw b = kj, Ej(a, c), xi(a, c), Z2(a), b;
            if (null === X2) switch(e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S2, T2 = null, d){
                case ti:
                case hj:
                    throw Error(u1(345));
                case ij:
                    Cj(a, 2 < c ? 2 : c);
                    break;
                case ui:
                    xi(a, c);
                    d = a.lastSuspendedTime;
                    c === d && (a.nextKnownPendingLevel = Ij(e));
                    if (1073741823 === lj && (e = Ti + pj - $f(), 10 < e)) {
                        if (oj) {
                            var f = a.lastPingedTime;
                            if (0 === f || f >= c) {
                                a.lastPingedTime = c;
                                Ej(a, c);
                                break;
                            }
                        }
                        f = zj(a);
                        if (0 !== f && f !== c) break;
                        if (0 !== d && d !== c) {
                            a.lastPingedTime = d;
                            break;
                        }
                        a.timeoutHandle = Hd(Jj.bind(null, a), e);
                        break;
                    }
                    Jj(a);
                    break;
                case vi:
                    xi(a, c);
                    d = a.lastSuspendedTime;
                    c === d && (a.nextKnownPendingLevel = Ij(e));
                    if (oj && (e = a.lastPingedTime, 0 === e || e >= c)) {
                        a.lastPingedTime = c;
                        Ej(a, c);
                        break;
                    }
                    e = zj(a);
                    if (0 !== e && e !== c) break;
                    if (0 !== d && d !== c) {
                        a.lastPingedTime = d;
                        break;
                    }
                    1073741823 !== mj ? d = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? d = 0 : (d = 10 * (1073741821 - lj) - 5000, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3000 > d ? 3000 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));
                    if (10 < d) {
                        a.timeoutHandle = Hd(Jj.bind(null, a), d);
                        break;
                    }
                    Jj(a);
                    break;
                case jj:
                    if (1073741823 !== lj && null !== nj) {
                        f = lj;
                        var g = nj;
                        d = g.busyMinDurationMs | 0;
                        0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5000)), d = f <= e ? 0 : e + d - f);
                        if (10 < d) {
                            xi(a, c);
                            a.timeoutHandle = Hd(Jj.bind(null, a), d);
                            break;
                        }
                    }
                    Jj(a);
                    break;
                default:
                    throw Error(u1(329));
            }
            Z2(a);
            if (a.callbackNode === b) return Bj.bind(null, a);
        }
    }
    return null;
}
function yj(a) {
    var b = a.lastExpiredTime;
    b = 0 !== b ? b : 1073741823;
    if ((W1 & (fj | gj)) !== V1) throw Error(u1(327));
    Dj();
    a === T2 && b === U2 || Ej(a, b);
    if (null !== X2) {
        var c = W1;
        W1 |= fj;
        var d = Fj();
        do try {
            Kj();
            break;
        } catch (e) {
            Hj(a, e);
        }
        while (1)
        ng();
        W1 = c;
        cj.current = d;
        if (S2 === hj) throw c = kj, Ej(a, b), xi(a, b), Z2(a), c;
        if (null !== X2) throw Error(u1(261));
        a.finishedWork = a.current.alternate;
        a.finishedExpirationTime = b;
        T2 = null;
        Jj(a);
        Z2(a);
    }
    return null;
}
function Lj() {
    if (null !== tj) {
        var a = tj;
        tj = null;
        a.forEach(function(a1, c) {
            Cj(c, a1);
            Z2(c);
        });
        gg();
    }
}
function Mj(a, b) {
    var c = W1;
    W1 |= 1;
    try {
        return a(b);
    } finally{
        W1 = c, W1 === V1 && gg();
    }
}
function Nj(a, b) {
    var c = W1;
    W1 &= -2;
    W1 |= ej;
    try {
        return a(b);
    } finally{
        W1 = c, W1 === V1 && gg();
    }
}
function Ej(a, b) {
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Id(c));
    if (null !== X2) for(c = X2.return; null !== c;){
        var d = c;
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && (void 0) !== d && Df();
                break;
            case 3:
                eh();
                H1(K2);
                H1(J1);
                break;
            case 5:
                gh(d);
                break;
            case 4:
                eh();
                break;
            case 13:
                H1(M1);
                break;
            case 19:
                H1(M1);
                break;
            case 10:
                og(d);
        }
        c = c.return;
    }
    T2 = a;
    X2 = Sg(a.current, null);
    U2 = b;
    S2 = ti;
    kj = null;
    mj = lj = 1073741823;
    nj = null;
    wi = 0;
    oj = !1;
}
function Hj(a, b) {
    do {
        try {
            ng();
            jh.current = sh;
            if (mh) for(var c = N1.memoizedState; null !== c;){
                var d = c.queue;
                null !== d && (d.pending = null);
                c = c.next;
            }
            lh = 0;
            P1 = O1 = N1 = null;
            mh = !1;
            if (null === X2 || null === X2.return) return S2 = hj, kj = b, X2 = null;
            a: {
                var e = a, f = X2.return, g = X2, h = b;
                b = U2;
                g.effectTag |= 2048;
                g.firstEffect = g.lastEffect = null;
                if (null !== h && "object" === typeof h && "function" === typeof h.then) {
                    var k = h;
                    if (0 === (g.mode & 2)) {
                        var l = g.alternate;
                        l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
                    }
                    var m = 0 !== (M1.current & 1), p2 = f;
                    do {
                        var x2;
                        if (x2 = 13 === p2.tag) {
                            var z1 = p2.memoizedState;
                            if (null !== z1) x2 = null !== z1.dehydrated ? !0 : !1;
                            else {
                                var ca = p2.memoizedProps;
                                x2 = (void 0) === ca.fallback ? !1 : !0 !== ca.unstable_avoidThisFallback ? !0 : m ? !1 : !0;
                            }
                        }
                        if (x2) {
                            var D1 = p2.updateQueue;
                            if (null === D1) {
                                var t1 = new Set;
                                t1.add(k);
                                p2.updateQueue = t1;
                            } else D1.add(k);
                            if (0 === (p2.mode & 2)) {
                                p2.effectTag |= 64;
                                g.effectTag &= -2981;
                                if (1 === g.tag) {
                                    if (null === g.alternate) g.tag = 17;
                                    else {
                                        var y1 = wg(1073741823, null);
                                        y1.tag = 2;
                                        xg(g, y1);
                                    }
                                }
                                g.expirationTime = 1073741823;
                                break a;
                            }
                            h = void 0;
                            g = b;
                            var A1 = e.pingCache;
                            null === A1 ? (A1 = e.pingCache = new Wi, h = new Set, A1.set(k, h)) : (h = A1.get(k), (void 0) === h && (h = new Set, A1.set(k, h)));
                            if (!h.has(g)) {
                                h.add(g);
                                var q1 = Oj.bind(null, e, k, g);
                                k.then(q1, q1);
                            }
                            p2.effectTag |= 4096;
                            p2.expirationTime = b;
                            break a;
                        }
                        p2 = p2.return;
                    }while (null !== p2)
                    h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
                }
                S2 !== jj && (S2 = ij);
                h = Ai(h, g);
                p = f;
                do {
                    switch(p.tag){
                        case 3:
                            k = h;
                            p.effectTag |= 4096;
                            p.expirationTime = b;
                            var B1 = Xi(p, k, b);
                            yg(p, B1);
                            break a;
                        case 1:
                            k = h;
                            var w1 = p.type, ub = p.stateNode;
                            if (0 === (p.effectTag & 64) && ("function" === typeof w1.getDerivedStateFromError || null !== ub && "function" === typeof ub.componentDidCatch && (null === aj || !aj.has(ub)))) {
                                p.effectTag |= 4096;
                                p.expirationTime = b;
                                var vb = $i(p, k, b);
                                yg(p, vb);
                                break a;
                            }
                    }
                    p = p.return;
                }while (null !== p)
            }
            X2 = Pj(X2);
        } catch (Xc) {
            b = Xc;
            continue;
        }
        break;
    }while (1)
}
function Fj() {
    var a = cj.current;
    cj.current = sh;
    return null === a ? sh : a;
}
function Ag(a, b) {
    a < lj && 2 < a && (lj = a);
    null !== b && a < mj && 2 < a && (mj = a, nj = b);
}
function Bg(a) {
    a > wi && (wi = a);
}
function Kj() {
    for(; null !== X2;)X2 = Qj(X2);
}
function Gj() {
    for(; null !== X2 && !Uf();)X2 = Qj(X2);
}
function Qj(a) {
    var b = Rj(a.alternate, a, U2);
    a.memoizedProps = a.pendingProps;
    null === b && (b = Pj(a));
    dj.current = null;
    return b;
}
function Pj(a) {
    X2 = a;
    do {
        var b = X2.alternate;
        a = X2.return;
        if (0 === (X2.effectTag & 2048)) {
            b = si(b, X2, U2);
            if (1 === U2 || 1 !== X2.childExpirationTime) {
                for(var c = 0, d = X2.child; null !== d;){
                    var e = d.expirationTime, f = d.childExpirationTime;
                    e > c && (c = e);
                    f > c && (c = f);
                    d = d.sibling;
                }
                X2.childExpirationTime = c;
            }
            if (null !== b) return b;
            null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X2.firstEffect), null !== X2.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X2.firstEffect), a.lastEffect = X2.lastEffect), 1 < X2.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = X2 : a.firstEffect = X2, a.lastEffect = X2));
        } else {
            b = zi(X2);
            if (null !== b) return b.effectTag &= 2047, b;
            null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
        }
        b = X2.sibling;
        if (null !== b) return b;
        X2 = a;
    }while (null !== X2)
    S2 === ti && (S2 = jj);
    return null;
}
function Ij(a) {
    var b = a.expirationTime;
    a = a.childExpirationTime;
    return b > a ? b : a;
}
function Jj(a) {
    var b = ag();
    cg(99, Sj.bind(null, a, b));
    return null;
}
function Sj(a, b) {
    do Dj();
    while (null !== rj)
    if ((W1 & (fj | gj)) !== V1) throw Error(u1(327));
    var c = a.finishedWork, d = a.finishedExpirationTime;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    if (c === a.current) throw Error(u1(177));
    a.callbackNode = null;
    a.callbackExpirationTime = 0;
    a.callbackPriority = 90;
    a.nextKnownPendingLevel = 0;
    var e = Ij(c);
    a.firstPendingTime = e;
    d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
    d <= a.lastPingedTime && (a.lastPingedTime = 0);
    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    a === T2 && (X2 = T2 = null, U2 = 0);
    1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
    if (null !== e) {
        var f = W1;
        W1 |= gj;
        dj.current = null;
        Dd = fd;
        var g = xd();
        if (yd(g)) {
            if ("selectionStart" in g) var h = {
                start: g.selectionStart,
                end: g.selectionEnd
            };
            else a: {
                h = (h = g.ownerDocument) && h.defaultView || window;
                var k = h.getSelection && h.getSelection();
                if (k && 0 !== k.rangeCount) {
                    h = k.anchorNode;
                    var l = k.anchorOffset, m = k.focusNode;
                    k = k.focusOffset;
                    try {
                        h.nodeType, m.nodeType;
                    } catch (wb) {
                        h = null;
                        break a;
                    }
                    var p2 = 0, x2 = -1, z1 = -1, ca = 0, D1 = 0, t1 = g, y1 = null;
                    b: for(;;){
                        for(var A1;;){
                            t1 !== h || 0 !== l && 3 !== t1.nodeType || (x2 = p2 + l);
                            t1 !== m || 0 !== k && 3 !== t1.nodeType || (z1 = p2 + k);
                            3 === t1.nodeType && (p2 += t1.nodeValue.length);
                            if (null === (A1 = t1.firstChild)) break;
                            y1 = t1;
                            t1 = A1;
                        }
                        for(;;){
                            if (t1 === g) break b;
                            y1 === h && (++ca) === l && (x2 = p2);
                            y1 === m && (++D1) === k && (z1 = p2);
                            if (null !== (A1 = t1.nextSibling)) break;
                            t1 = y1;
                            y1 = t1.parentNode;
                        }
                        t1 = A1;
                    }
                    h = -1 === x2 || -1 === z1 ? null : {
                        start: x2,
                        end: z1
                    };
                } else h = null;
            }
            h = h || {
                start: 0,
                end: 0
            };
        } else h = null;
        Ed = {
            activeElementDetached: null,
            focusedElem: g,
            selectionRange: h
        };
        fd = !1;
        Y1 = e;
        do try {
            Tj();
        } catch (wb) {
            if (null === Y1) throw Error(u1(330));
            Ei(Y1, wb);
            Y1 = Y1.nextEffect;
        }
        while (null !== Y1)
        Y1 = e;
        do try {
            for(g = a, h = b; null !== Y1;){
                var q1 = Y1.effectTag;
                q1 & 16 && Rb(Y1.stateNode, "");
                if (q1 & 128) {
                    var B1 = Y1.alternate;
                    if (null !== B1) {
                        var w1 = B1.ref;
                        null !== w1 && ("function" === typeof w1 ? w1(null) : w1.current = null);
                    }
                }
                switch(q1 & 1038){
                    case 2:
                        Pi(Y1);
                        Y1.effectTag &= -3;
                        break;
                    case 6:
                        Pi(Y1);
                        Y1.effectTag &= -3;
                        Si(Y1.alternate, Y1);
                        break;
                    case 1024:
                        Y1.effectTag &= -1025;
                        break;
                    case 1028:
                        Y1.effectTag &= -1025;
                        Si(Y1.alternate, Y1);
                        break;
                    case 4:
                        Si(Y1.alternate, Y1);
                        break;
                    case 8:
                        l = Y1, Mi(g, l, h), Ni(l);
                }
                Y1 = Y1.nextEffect;
            }
        } catch (wb) {
            if (null === Y1) throw Error(u1(330));
            Ei(Y1, wb);
            Y1 = Y1.nextEffect;
        }
        while (null !== Y1)
        w = Ed;
        B = xd();
        q = w.focusedElem;
        h = w.selectionRange;
        if (B !== q && q && q.ownerDocument && wd(q.ownerDocument.documentElement, q)) {
            null !== h && yd(q) && (B = h.start, w = h.end, (void 0) === w && (w = B), "selectionStart" in q ? (q.selectionStart = B, q.selectionEnd = Math.min(w, q.value.length)) : (w = (B = q.ownerDocument || document) && B.defaultView || window, w.getSelection && (w = w.getSelection(), l = q.textContent.length, g = Math.min(h.start, l), h = (void 0) === h.end ? g : Math.min(h.end, l), !w.extend && g > h && (l = h, h = g, g = l), l = vd(q, g), m = vd(q, h), l && m && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== m.node || w.focusOffset !== m.offset) && (B = B.createRange(), B.setStart(l.node, l.offset), w.removeAllRanges(), g > h ? (w.addRange(B), w.extend(m.node, m.offset)) : (B.setEnd(m.node, m.offset), w.addRange(B))))));
            B = [];
            for(w = q; w = w.parentNode;)1 === w.nodeType && B.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
            });
            "function" === typeof q.focus && q.focus();
            for(q = 0; q < B.length; q++)w = B[q], w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
        }
        fd = !!Dd;
        Ed = Dd = null;
        a.current = c;
        Y1 = e;
        do try {
            for(q = a; null !== Y1;){
                var ub = Y1.effectTag;
                ub & 36 && Ji(q, Y1.alternate, Y1);
                if (ub & 128) {
                    B = void 0;
                    var vb = Y1.ref;
                    if (null !== vb) {
                        var Xc = Y1.stateNode;
                        switch(Y1.tag){
                            case 5:
                                B = Xc;
                                break;
                            default:
                                B = Xc;
                        }
                        "function" === typeof vb ? vb(B) : vb.current = B;
                    }
                }
                Y1 = Y1.nextEffect;
            }
        } catch (wb) {
            if (null === Y1) throw Error(u1(330));
            Ei(Y1, wb);
            Y1 = Y1.nextEffect;
        }
        while (null !== Y1)
        Y1 = null;
        Vf();
        W1 = f;
    } else a.current = c;
    if (qj) qj = !1, rj = a, sj = b;
    else for(Y1 = e; null !== Y1;)b = Y1.nextEffect, Y1.nextEffect = null, Y1 = b;
    b = a.firstPendingTime;
    0 === b && (aj = null);
    1073741823 === b ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
    "function" === typeof Uj && Uj(c.stateNode, d);
    Z2(a);
    if (Yi) throw Yi = !1, a = Zi, Zi = null, a;
    if ((W1 & ej) !== V1) return null;
    gg();
    return null;
}
function Tj() {
    for(; null !== Y1;){
        var a = Y1.effectTag;
        0 !== (a & 256) && Gi(Y1.alternate, Y1);
        0 === (a & 512) || qj || (qj = !0, dg(97, function() {
            Dj();
            return null;
        }));
        Y1 = Y1.nextEffect;
    }
}
function Dj() {
    if (90 !== sj) {
        var a;
        sj = 90;
        return cg(97 < sj ? 97 : sj, Vj);
    }
}
function Vj() {
    if (null === rj) return !1;
    var a = rj;
    rj = null;
    if ((W1 & (fj | gj)) !== V1) throw Error(u1(331));
    var b = W1;
    W1 |= gj;
    for(a = a.current.firstEffect; null !== a;){
        try {
            var c = a;
            if (0 !== (c.effectTag & 512)) switch(c.tag){
                case 0:
                case 11:
                case 15:
                case 22:
                    Hi(5, c), Ii(5, c);
            }
        } catch (d) {
            if (null === a) throw Error(u1(330));
            Ei(a, d);
        }
        c = a.nextEffect;
        a.nextEffect = null;
        a = c;
    }
    W1 = b;
    gg();
    return !0;
}
function Wj(a, b, c) {
    b = Ai(c, b);
    b = Xi(a, b, 1073741823);
    xg(a, b);
    a = xj(a, 1073741823);
    null !== a && Z2(a);
}
function Ei(a, b) {
    if (3 === a.tag) Wj(a, a, b);
    else for(var c = a.return; null !== c;){
        if (3 === c.tag) {
            Wj(c, a, b);
            break;
        } else if (1 === c.tag) {
            var d = c.stateNode;
            if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === aj || !aj.has(d))) {
                a = Ai(b, a);
                a = $i(c, a, 1073741823);
                xg(c, a);
                c = xj(c, 1073741823);
                null !== c && Z2(c);
                break;
            }
        }
        c = c.return;
    }
}
function Oj(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    T2 === a && U2 === c ? S2 === vi || S2 === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(a, U2) : oj = !0 : Aj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z2(a)));
}
function Vi(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = Gg(), b = Hg(b, a, null));
    a = xj(a, b);
    null !== a && Z2(a);
}
var Rj;
Rj = function(a, b, c) {
    var d = b.expirationTime;
    if (null !== a) {
        var e = b.pendingProps;
        if (a.memoizedProps !== e || K2.current) rg = !0;
        else {
            if (d < c) {
                rg = !1;
                switch(b.tag){
                    case 3:
                        hi(b);
                        Xh();
                        break;
                    case 5:
                        fh(b);
                        if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
                        break;
                    case 1:
                        L1(b.type) && Gf(b);
                        break;
                    case 4:
                        dh(b, b.stateNode.containerInfo);
                        break;
                    case 10:
                        d = b.memoizedProps.value;
                        e = b.type._context;
                        I1(jg, e._currentValue);
                        e._currentValue = d;
                        break;
                    case 13:
                        if (null !== b.memoizedState) {
                            d = b.child.childExpirationTime;
                            if (0 !== d && d >= c) return ji(a, b, c);
                            I1(M1, M1.current & 1);
                            b = $h(a, b, c);
                            return null !== b ? b.sibling : null;
                        }
                        I1(M1, M1.current & 1);
                        break;
                    case 19:
                        d = b.childExpirationTime >= c;
                        if (0 !== (a.effectTag & 64)) {
                            if (d) return mi(a, b, c);
                            b.effectTag |= 64;
                        }
                        e = b.memoizedState;
                        null !== e && (e.rendering = null, e.tail = null);
                        I1(M1, M1.current);
                        if (!d) return null;
                }
                return $h(a, b, c);
            }
            rg = !1;
        }
    } else rg = !1;
    b.expirationTime = 0;
    switch(b.tag){
        case 2:
            d = b.type;
            null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
            a = b.pendingProps;
            e = Cf(b, J1.current);
            qg(b, c);
            e = oh(null, b, d, a, e, c);
            b.effectTag |= 1;
            if ("object" === typeof e && null !== e && "function" === typeof e.render && (void 0) === e.$$typeof) {
                b.tag = 1;
                b.memoizedState = null;
                b.updateQueue = null;
                if (L1(d)) {
                    var f = !0;
                    Gf(b);
                } else f = !1;
                b.memoizedState = null !== e.state && (void 0) !== e.state ? e.state : null;
                ug(b);
                var g = d.getDerivedStateFromProps;
                "function" === typeof g && Fg(b, d, g, a);
                e.updater = Jg;
                b.stateNode = e;
                e._reactInternalFiber = b;
                Ng(b, d, a, c);
                b = gi(null, b, d, !0, f, c);
            } else b.tag = 0, R1(null, b, e, c), b = b.child;
            return b;
        case 16:
            a: {
                e = b.elementType;
                null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
                a = b.pendingProps;
                ob(e);
                if (1 !== e._status) throw e._result;
                e = e._result;
                b.type = e;
                f = b.tag = Xj(e);
                a = ig(e, a);
                switch(f){
                    case 0:
                        b = di(null, b, e, a, c);
                        break a;
                    case 1:
                        b = fi(null, b, e, a, c);
                        break a;
                    case 11:
                        b = Zh(null, b, e, a, c);
                        break a;
                    case 14:
                        b = ai(null, b, e, ig(e.type, a), d, c);
                        break a;
                }
                throw Error(u1(306, e, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
        case 3:
            hi(b);
            d = b.updateQueue;
            if (null === a || null === d) throw Error(u1(282));
            d = b.pendingProps;
            e = b.memoizedState;
            e = null !== e ? e.element : null;
            vg(a, b);
            zg(b, d, null, c);
            d = b.memoizedState.element;
            if (d === e) Xh(), b = $h(a, b, c);
            else {
                if (e = b.stateNode.hydrate) Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = !0;
                if (e) for(c = Yg(b, null, d, c), b.child = c; c;)c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
                else R1(a, b, d, c), Xh();
                b = b.child;
            }
            return b;
        case 5:
            return fh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : null !== f && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R1(a, b, g, c), b = b.child), b;
        case 6:
            return null === a && Uh(b), null;
        case 13:
            return ji(a, b, c);
        case 4:
            return dh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Xg(b, null, d, c) : R1(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);
        case 7:
            return R1(a, b, b.pendingProps, c), b.child;
        case 8:
            return R1(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return R1(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                g = b.memoizedProps;
                f = e.value;
                var h = b.type._context;
                I1(jg, h._currentValue);
                h._currentValue = f;
                if (null !== g) {
                    if (h = g.value, f = $e(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
                        if (g.children === e.children && !K2.current) {
                            b = $h(a, b, c);
                            break a;
                        }
                    } else for(h = b.child, null !== h && (h.return = b); null !== h;){
                        var k = h.dependencies;
                        if (null !== k) {
                            g = h.child;
                            for(var l = k.firstContext; null !== l;){
                                if (l.context === d && 0 !== (l.observedBits & f)) {
                                    1 === h.tag && (l = wg(c, null), l.tag = 2, xg(h, l));
                                    h.expirationTime < c && (h.expirationTime = c);
                                    l = h.alternate;
                                    null !== l && l.expirationTime < c && (l.expirationTime = c);
                                    pg(h.return, c);
                                    k.expirationTime < c && (k.expirationTime = c);
                                    break;
                                }
                                l = l.next;
                            }
                        } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
                        if (null !== g) g.return = h;
                        else for(g = h; null !== g;){
                            if (g === b) {
                                g = null;
                                break;
                            }
                            h = g.sibling;
                            if (null !== h) {
                                h.return = g.return;
                                g = h;
                                break;
                            }
                            g = g.return;
                        }
                        h = g;
                    }
                }
                R1(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R1(a, b, d, c), b.child;
        case 14:
            return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);
        case 15:
            return ci(a, b, b.type, b.pendingProps, d, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L1(d) ? (a = !0, Gf(b)) : a = !1, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null, b, d, !0, a, c);
        case 19:
            return mi(a, b, c);
    }
    throw Error(u1(156, b.tag));
};
var Uj = null, Li = null;
function Yj(a) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (b.isDisabled || !b.supportsFiber) return !0;
    try {
        var c = b.inject(a);
        Uj = function(a1) {
            try {
                b.onCommitFiberRoot(c, a1, void 0, 64 === (a1.current.effectTag & 64));
            } catch (e) {
            }
        };
        Li = function(a1) {
            try {
                b.onCommitFiberUnmount(c, a1);
            } catch (e) {
            }
        };
    } catch (d) {
    }
    return !0;
}
function Zj(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
}
function Sh(a, b, c, d) {
    return new Zj(a, b, c, d);
}
function bi(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function Xj(a) {
    if ("function" === typeof a) return bi(a) ? 1 : 0;
    if ((void 0) !== a && null !== a) {
        a = a.$$typeof;
        if (a === gb) return 11;
        if (a === jb) return 14;
    }
    return 2;
}
function Sg(a, b) {
    var c = a.alternate;
    null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childExpirationTime = a.childExpirationTime;
    c.expirationTime = a.expirationTime;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
        expirationTime: b.expirationTime,
        firstContext: b.firstContext,
        responders: b.responders
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
}
function Ug(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) bi(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case ab:
            return Wg(c.children, e, f, b);
        case fb:
            g = 8;
            e |= 7;
            break;
        case bb:
            g = 8;
            e |= 1;
            break;
        case cb:
            return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
        case hb:
            return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
        case ib:
            return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case db:
                    g = 10;
                    break a;
                case eb:
                    g = 9;
                    break a;
                case gb:
                    g = 11;
                    break a;
                case jb:
                    g = 14;
                    break a;
                case kb:
                    g = 16;
                    d = null;
                    break a;
                case lb:
                    g = 22;
                    break a;
            }
            throw Error(u1(130, null == a ? a : typeof a, ""));
    }
    b = Sh(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.expirationTime = f;
    return b;
}
function Wg(a, b, c, d) {
    a = Sh(7, a, d, b);
    a.expirationTime = c;
    return a;
}
function Tg(a, b, c) {
    a = Sh(6, a, null, b);
    a.expirationTime = c;
    return a;
}
function Vg(a, b, c) {
    b = Sh(4, null !== a.children ? a.children : [], a.key, b);
    b.expirationTime = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function ak(a, b, c) {
    this.tag = b;
    this.current = null;
    this.containerInfo = a;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 90;
    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
}
function Aj(a, b) {
    var c = a.firstSuspendedTime;
    a = a.lastSuspendedTime;
    return 0 !== c && c >= b && a <= b;
}
function xi(a, b) {
    var c = a.firstSuspendedTime, d = a.lastSuspendedTime;
    c < b && (a.firstSuspendedTime = b);
    if (d > b || 0 === c) a.lastSuspendedTime = b;
    b <= a.lastPingedTime && (a.lastPingedTime = 0);
    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
}
function yi(a, b) {
    b > a.firstPendingTime && (a.firstPendingTime = b);
    var c = a.firstSuspendedTime;
    0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
}
function Cj(a, b) {
    var c = a.lastExpiredTime;
    if (0 === c || c > b) a.lastExpiredTime = b;
}
function bk(a, b, c, d) {
    var e = b.current, f = Gg(), g = Dg.suspense;
    f = Hg(f, e, g);
    a: if (c) {
        c = c._reactInternalFiber;
        b: {
            if (dc(c) !== c || 1 !== c.tag) throw Error(u1(170));
            var h = c;
            do {
                switch(h.tag){
                    case 3:
                        h = h.stateNode.context;
                        break b;
                    case 1:
                        if (L1(h.type)) {
                            h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                            break b;
                        }
                }
                h = h.return;
            }while (null !== h)
            throw Error(u1(171));
        }
        if (1 === c.tag) {
            var k = c.type;
            if (L1(k)) {
                c = Ff(c, k, h);
                break a;
            }
        }
        c = h;
    } else c = Af;
    null === b.context ? b.context = c : b.pendingContext = c;
    b = wg(f, g);
    b.payload = {
        element: a
    };
    d = (void 0) === d ? null : d;
    null !== d && (b.callback = d);
    xg(e, b);
    Ig(e, f);
    return f;
}
function ck(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function dk(a, b) {
    a = a.memoizedState;
    null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
}
function ek(a, b) {
    dk(a, b);
    (a = a.alternate) && dk(a, b);
}
function fk(a, b, c) {
    c = null != c && !0 === c.hydrate;
    var d = new ak(a, b, c), e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    d.current = e;
    e.stateNode = d;
    ug(e);
    a[Od] = d.current;
    c && 0 !== b && Jc(a, 9 === a.nodeType ? a : a.ownerDocument);
    this._internalRoot = d;
}
fk.prototype.render = function(a) {
    bk(a, this._internalRoot, null, null);
};
fk.prototype.unmount = function() {
    var a = this._internalRoot, b = a.containerInfo;
    bk(null, a, null, function() {
        b[Od] = null;
    });
};
function gk(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function hk(a, b) {
    b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
    if (!b) for(var c; c = a.lastChild;)a.removeChild(c);
    return new fk(a, 0, b ? {
        hydrate: !0
    } : void 0);
}
function ik(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f._internalRoot;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a1 = ck(g);
                h.call(a1);
            };
        }
        bk(b, g, a, e);
    } else {
        f = c._reactRootContainer = hk(c, d);
        g = f._internalRoot;
        if ("function" === typeof e) {
            var k = e;
            e = function() {
                var a1 = ck(g);
                k.call(a1);
            };
        }
        Nj(function() {
            bk(b, g, a, e);
        });
    }
    return ck(g);
}
function jk(a, b, c) {
    var d = 3 < arguments.length && (void 0) !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: $a,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
wc = function(a) {
    if (13 === a.tag) {
        var b = hg(Gg(), 150, 100);
        Ig(a, b);
        ek(a, b);
    }
};
xc = function(a) {
    13 === a.tag && (Ig(a, 3), ek(a, 3));
};
yc = function(a) {
    if (13 === a.tag) {
        var b = Gg();
        b = Hg(b, a, null);
        Ig(a, b);
        ek(a, b);
    }
};
za = function(a, b, c) {
    switch(b){
        case "input":
            Cb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type=\"radio\"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = Qd(d);
                        if (!e) throw Error(u1(90));
                        yb(d);
                        Cb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            Kb(a, c);
            break;
        case "select":
            b = c.value, null != b && Hb(a, !!c.multiple, b, !1);
    }
};
Fa = Mj;
Ga = function(a, b, c, d, e) {
    var f = W1;
    W1 |= 4;
    try {
        return cg(98, a.bind(null, b, c, d, e));
    } finally{
        W1 = f, W1 === V1 && gg();
    }
};
Ha = function() {
    (W1 & (1 | fj | gj)) === V1 && (Lj(), Dj());
};
Ia = function(a, b) {
    var c = W1;
    W1 |= 2;
    try {
        return a(b);
    } finally{
        W1 = c, W1 === V1 && gg();
    }
};
function kk(a, b) {
    var c;
    if (!gk(b)) throw Error(u1(200));
    return jk(a, b, null, 2 < arguments.length && (void 0) !== arguments[2] ? arguments[2] : null);
}
var lk = {
    Events: [
        Nc,
        Pd,
        Qd,
        xa,
        ta,
        Xd,
        function(a) {
            jc(a, Wd);
        },
        Da,
        Ea,
        id,
        mc,
        Dj,
        {
            current: !1
        }
    ]
};
(function(a) {
    var b = a.findFiberByHostInstance;
    return Yj(objectAssign({
    }, a, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Wa.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(a1) {
            a1 = hc(a1);
            return null === a1 ? null : a1.stateNode;
        },
        findFiberByHostInstance: function(a1) {
            return b ? b(a1) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    }));
})({
    findFiberByHostInstance: tc,
    bundleType: 0,
    version: "16.13.1",
    rendererPackageName: "react-dom"
});
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED1 = lk;
var createPortal = kk;
var unstable_batchedUpdates = Mj;
var reactDom_production_min = {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED1,
    createPortal: createPortal,
    findDOMNode: function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternalFiber;
        if ((void 0) === b) {
            if ("function" === typeof a.render) throw Error(u1(188));
            throw Error(u1(268, Object.keys(a)));
        }
        a = hc(b);
        a = null === a ? null : a.stateNode;
        return a;
    },
    flushSync: function(a, b) {
        if ((W1 & (fj | gj)) !== V1) throw Error(u1(187));
        var c = W1;
        W1 |= 1;
        try {
            return cg(99, a.bind(null, b));
        } finally{
            W1 = c, gg();
        }
    },
    hydrate: function(a, b, c) {
        if (!gk(b)) throw Error(u1(200));
        return ik(null, a, b, !0, c);
    },
    render: function(a, b, c) {
        if (!gk(b)) throw Error(u1(200));
        return ik(null, a, b, !1, c);
    },
    unmountComponentAtNode: function(a) {
        if (!gk(a)) throw Error(u1(40));
        return a._reactRootContainer ? (Nj(function() {
            ik(null, null, a, !1, function() {
                a._reactRootContainer = null;
                a[Od] = null;
            });
        }), !0) : !1;
    },
    unstable_batchedUpdates: unstable_batchedUpdates,
    unstable_createPortal: function(a, b) {
        return kk(a, b, 2 < arguments.length && (void 0) !== arguments[2] ? arguments[2] : null);
    },
    unstable_renderSubtreeIntoContainer: function(a, b, c, d) {
        if (!gk(c)) throw Error(u1(200));
        if (null == a || (void 0) === a._reactInternalFiber) throw Error(u1(38));
        return ik(a, b, c, !1, d);
    },
    version: "16.13.1"
};
const styles = {
    logo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "192px",
        height: "192px"
    }
};
const App = (props)=>{
    let [loading, setLoading] = React.useState(true);
    React.useEffect(()=>{
        console.log("Start loading...");
        const timerId = setTimeout(()=>{
            setLoading(false);
            console.log("Finished loading");
        }, 1000);
        return ()=>{
            clearTimeout(timerId);
        };
    }, []);
    return React.createElement("div", {
        className: "container"
    }, React.createElement("p", null, React.createElement("img", {
        src: "assets/img/deno-logo.png",
        style: styles.logo
    }), React.createElement("img", {
        src: "assets/img/react-logo192x192.png",
        style: styles.logo
    })), React.createElement("pre", null, "Loading ...", loading ? "" : " OK!"), React.createElement("p", null, "Open up App.tsx to start working on your app!"));
};
const serviceWorkerContainer = {
    register: (config)=>{
        if (!('serviceWorker' in navigator)) {
            console.warn("serviceWorker not enabled in navigator:", navigator);
            return;
        }
        navigator.serviceWorker.ready.then(()=>{
            console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
        navigator.serviceWorker.onmessage = (evt)=>{
            console.log('Message received from SW ->', evt.data);
            config.onMessage(evt);
        };
        navigator.serviceWorker.register(config.scriptUrl, {
            scope: "/"
        }).then((registration)=>{
            console.log("Service worker registered:", registration);
            if (!("controller" in navigator.serviceWorker) || !navigator.serviceWorker.controller) {
                console.warn("navigator.serviceWorker.controller not available");
                return false;
            }
            let msg;
            navigator.serviceWorker.controller.postMessage({
                from: "container"
            });
            return true;
        }).catch((err)=>{
            console.error('Error during service worker registration:', err);
        });
    },
    unregister: ()=>{
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration)=>{
                registration.unregister();
            });
        }
    }
};
window.addEventListener("DOMContentLoaded", (evt)=>{
    ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});
serviceWorkerContainer.register({
    scriptUrl: "/assets/js/service-worker.js",
    onMessage: (evt)=>{
        console.log("Got message from service worker:", evt);
    }
});
