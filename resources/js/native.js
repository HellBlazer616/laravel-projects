// Native Javascript for Bootstrap 3 v2.0.27 | © dnp_theme | MIT-License
!(function(t, e) {
    if (typeof define === 'function' && define.amd) define([], e);
    else if (typeof module === 'object' && module.exports) module.exports = e();
    else {
        const i = e();
        (t.Affix = i.Affix),
            (t.Alert = i.Alert),
            (t.Button = i.Button),
            (t.Carousel = i.Carousel),
            (t.Collapse = i.Collapse),
            (t.Dropdown = i.Dropdown),
            (t.Modal = i.Modal),
            (t.Popover = i.Popover),
            (t.ScrollSpy = i.ScrollSpy),
            (t.Tab = i.Tab),
            (t.Tooltip = i.Tooltip);
    }
})(this, function() {
    const t = typeof global !== 'undefined' ? global : this || window;
    const e = document;
    const i = e.documentElement;
    const n = 'body';
    const a = (t.BSN = {});
    const o = (a.supports = []);
    const l = 'data-toggle';
    const r = 'target';
    const s = 'animation';
    const c =
        'onmouseleave' in e
            ? ['mouseenter', 'mouseleave']
            : ['mouseover', 'mouseout'];
    const d = { start: 'touchstart', end: 'touchend', move: 'touchmove' };
    const f = 'getAttribute';
    const u = 'setAttribute';
    const h = 'parentNode';
    const p = 'length';
    const g = 'Transition';
    const m = 'Webkit';
    const v = 'style';
    const b = 'push';
    const y = 'active';
    const T = 'left';
    const w = 'top';
    const x = !('opacity' in i[v]);
    const k = /\b(top|bottom|left|right)+/;
    let A = 0;
    const C = 'navbar-fixed-top';
    const I = m + g in i[v] || g.toLowerCase() in i[v];
    const L =
        m + g in i[v] ? `${m.toLowerCase() + g}End` : `${g.toLowerCase()}end`;
    const B =
        `${m}Duration` in i[v]
            ? `${m.toLowerCase() + g}Duration`
            : `${g.toLowerCase()}Duration`;
    const H = function(t) {
        t.focus ? t.focus() : t.setActive();
    };
    const E = function(t, e) {
        t.classList.add(e);
    };
    const N = function(t, e) {
        t.classList.remove(e);
    };
    const M = function(t, e) {
        return t.classList.contains(e);
    };
    const D = function(t) {
        for (var e = [], i = 0, n = t[p]; i < n; i++) e[b](t[i]);
        return e;
    };
    const S = function(t, e) {
        return D(
            t[x ? 'querySelectorAll' : 'getElementsByClassName'](
                x ? `.${e.replace(/\s(?=[a-z])/g, '.')}` : e
            )
        );
    };
    const R = function(t, i) {
        const n = i || e;
        return typeof t === 'object' ? t : n.querySelector(t);
    };
    const W = function(t, i) {
        const n = i.charAt(0);
        const a = i.substr(1);
        if (n === '.') {
            for (; t && t !== e; t = t[h])
                if (R(i, t[h]) !== null && M(t, a)) return t;
        } else if (n === '#')
            for (; t && t !== e; t = t[h]) if (t.id === a) return t;
        return !1;
    };
    const P = function(t, e, i, n) {
        (n = n || !1), t.addEventListener(e, i, n);
    };
    const z = function(t, e, i, n) {
        (n = n || !1), t.removeEventListener(e, i, n);
    };
    const O = function(t, e, i, n) {
        P(
            t,
            e,
            function a(o) {
                i(o), z(t, e, a, n);
            },
            n
        );
    };
    const X = (function() {
        let e = !1;
        try {
            const i = Object.defineProperty({}, 'passive', {
                get() {
                    e = !0;
                },
            });
            O(t, 'testPassive', null, i);
        } catch (t) {}
        return e;
    })();
    const j = !!X && { passive: !0 };
    const q = function(e) {
        let i = I ? t.getComputedStyle(e)[B] : 0;
        return (
            (i = parseFloat(i)),
            (i = typeof i !== 'number' || isNaN(i) ? 0 : 1e3 * i)
        );
    };
    const U = function(t, e) {
        let i = 0;
        q(t)
            ? O(t, L, function(t) {
                  !i && e(t), (i = 1);
              })
            : setTimeout(function() {
                  !i && e(), (i = 1);
              }, 17);
    };
    const Y = function(t, e, i) {
        const n = new CustomEvent(`${t}.bs.${e}`);
        (n.relatedTarget = i), this.dispatchEvent(n);
    };
    const $ = function() {
        return {
            y: t.pageYOffset || i.scrollTop,
            x: t.pageXOffset || i.scrollLeft,
        };
    };
    const F = function(t, a, o, l) {
        let r;
        let s;
        let c;
        let d;
        const f = { w: a.offsetWidth, h: a.offsetHeight };
        const u = i.clientWidth || e[n].clientWidth;
        const h = i.clientHeight || e[n].clientHeight;
        const p = t.getBoundingClientRect();
        const g =
            l === e[n]
                ? $()
                : {
                      x: l.offsetLeft + l.scrollLeft,
                      y: l.offsetTop + l.scrollTop,
                  };
        const m = { w: p.right - p[T], h: p.bottom - p[w] };
        const b = R('[class*="arrow"]', a);
        const y = p[w] + m.h / 2 - f.h / 2 < 0;
        const x = p[T] + m.w / 2 - f.w / 2 < 0;
        const A = p[T] + f.w / 2 + m.w / 2 >= u;
        const C = p[w] + f.h / 2 + m.h / 2 >= h;
        const I = p[w] - f.h < 0;
        const L = p[T] - f.w < 0;
        const B = p[w] + f.h + m.h >= h;
        const H = p[T] + f.w + m.w >= u;
        (o = (o === T || o === 'right') && L && H ? w : o),
            (o = o === w && I ? 'bottom' : o),
            (o = o === 'bottom' && B ? w : o),
            (o = o === T && L ? 'right' : o),
            (o = o === 'right' && H ? T : o),
            o === T || o === 'right'
                ? ((s = o === T ? p[T] + g.x - f.w : p[T] + g.x + m.w),
                  y
                      ? ((r = p[w] + g.y), (c = m.h / 2))
                      : C
                      ? ((r = p[w] + g.y - f.h + m.h), (c = f.h - m.h / 2))
                      : (r = p[w] + g.y - f.h / 2 + m.h / 2))
                : (o !== w && o !== 'bottom') ||
                  ((r = o === w ? p[w] + g.y - f.h : p[w] + g.y + m.h),
                  x
                      ? ((s = 0), (d = p[T] + m.w / 2))
                      : A
                      ? ((s = u - 1.01 * f.w), (d = f.w - (u - p[T]) + m.w / 2))
                      : (s = p[T] + g.x - f.w / 2 + m.w / 2)),
            (a[v][w] = `${r}px`),
            (a[v][T] = `${s}px`),
            c && (b[v][w] = `${c}px`),
            d && (b[v][T] = `${d}px`),
            a.className.indexOf(o) === -1 &&
                (a.className = a.className.replace(k, o));
    };
    a.version = '2.0.27';
    const G = function(a, o) {
        (a = R(a)), (o = o || {});
        const l = a[f]('data-target');
        const s = a[f]('data-offset-top');
        const c = a[f]('data-offset-bottom');
        const d = 'affix';
        const u = 'function';
        if (
            ((this[r] = o[r] ? R(o[r]) : R(l) || null),
            (this.offsetTop = o.offsetTop ? o.offsetTop : parseInt(s) || 0),
            (this.offsetBottom = o.offsetBottom
                ? o.offsetBottom
                : parseInt(c) || 0),
            this[r] || this.offsetTop || this.offsetBottom)
        ) {
            let h;
            let p;
            let g;
            let m;
            let v;
            let b;
            const y = this;
            let T = !1;
            let k = !1;
            const A = function() {
                return Math.max(
                    e[n].scrollHeight,
                    e[n].offsetHeight,
                    i.clientHeight,
                    i.scrollHeight,
                    i.offsetHeight
                );
            };
            const C = function() {
                return y[r] !== null
                    ? y[r].getBoundingClientRect()[w] + m
                    : y.offsetTop
                    ? parseInt(
                          typeof y.offsetTop === u
                              ? y.offsetTop()
                              : y.offsetTop || 0
                      )
                    : void 0;
            };
            const I = function() {
                if (y.offsetBottom)
                    return (
                        g -
                        a.offsetHeight -
                        parseInt(
                            typeof y.offsetBottom === u
                                ? y.offsetBottom()
                                : y.offsetBottom || 0
                        )
                    );
            };
            const L = function() {
                (g = A()),
                    (m = parseInt($().y, 0)),
                    (h = C()),
                    (p = I()),
                    (v = parseInt(h) - m < 0 && m > parseInt(h)),
                    (b = parseInt(p) - m < 0 && m > parseInt(p));
            };
            const B = function() {
                T ||
                    M(a, d) ||
                    (Y.call(a, d, d),
                    Y.call(a, 'affix-top', d),
                    E(a, d),
                    (T = !0),
                    Y.call(a, 'affixed', d),
                    Y.call(a, 'affixed-top', d));
            };
            const H = function() {
                T && M(a, d) && (N(a, d), (T = !1));
            };
            const D = function() {
                k ||
                    M(a, 'affix-bottom') ||
                    (Y.call(a, d, d),
                    Y.call(a, 'affix-bottom', d),
                    E(a, 'affix-bottom'),
                    (k = !0),
                    Y.call(a, 'affixed', d),
                    Y.call(a, 'affixed-bottom', d));
            };
            const S = function() {
                k && M(a, 'affix-bottom') && (N(a, 'affix-bottom'), (k = !1));
            };
            const W = function() {
                b ? (v && H(), D()) : (S(), v ? B() : H());
            };
            (this.update = function() {
                L(), W();
            }),
                'Affix' in a ||
                    (P(t, 'scroll', y.update, j),
                    !x && P(t, 'resize', y.update, j)),
                (a.Affix = y),
                y.update();
        }
    };
    o[b](['Affix', G, '[data-spy="affix"]']);
    const J = function(t) {
        t = R(t);
        const e = this;
        let i = W(t, '.alert');
        const n = function() {
            M(i, 'fade') ? U(i, o) : o();
        };
        const a = function(n) {
            (i = W(n[r], '.alert')),
                (t = R('[data-dismiss="alert"]', i)) &&
                    i &&
                    (t === n[r] || t.contains(n[r])) &&
                    e.close();
        };
        var o = function() {
            Y.call(i, 'closed', 'alert'), z(t, 'click', a), i[h].removeChild(i);
        };
        (this.close = function() {
            i &&
                t &&
                M(i, 'in') &&
                (Y.call(i, 'close', 'alert'), N(i, 'in'), i && n());
        }),
            'Alert' in t || P(t, 'click', a),
            (t.Alert = e);
    };
    o[b](['Alert', J, '[data-dismiss="alert"]']);
    const K = function(t, i) {
        (t = R(t)), (i = i || null);
        let n = !1;
        const a = 'checked';
        const o = function(t) {
            (t.which || t.keyCode) === 32 && t[r] === e.activeElement && s(t);
        };
        const l = function(t) {
            (t.which || t.keyCode) === 32 && t.preventDefault();
        };
        var s = function(e) {
            const i =
                e[r].tagName === 'LABEL'
                    ? e[r]
                    : e[r][h].tagName === 'LABEL'
                    ? e[r][h]
                    : null;
            if (i) {
                const o = S(i[h], 'btn');
                const l = i.getElementsByTagName('INPUT')[0];
                if (l) {
                    if (
                        (l.type === 'checkbox' &&
                            (l[a]
                                ? (N(i, y),
                                  l[f](a),
                                  l.removeAttribute(a),
                                  (l[a] = !1))
                                : (E(i, y), l[f](a), l[u](a, a), (l[a] = !0)),
                            n ||
                                ((n = !0),
                                Y.call(l, 'change', 'button'),
                                Y.call(t, 'change', 'button'))),
                        l.type === 'radio' &&
                            !n &&
                            (!l[a] || (e.screenX === 0 && e.screenY == 0)))
                    ) {
                        E(i, y),
                            l[u](a, a),
                            (l[a] = !0),
                            Y.call(l, 'change', 'button'),
                            Y.call(t, 'change', 'button'),
                            (n = !0);
                        for (let s = 0, c = o[p]; s < c; s++) {
                            const d = o[s];
                            const g = d.getElementsByTagName('INPUT')[0];
                            d !== i &&
                                M(d, y) &&
                                (N(d, y),
                                g.removeAttribute(a),
                                (g[a] = !1),
                                Y.call(g, 'change', 'button'));
                        }
                    }
                    setTimeout(function() {
                        n = !1;
                    }, 50);
                }
            }
        };
        if (M(t, 'btn'))
            i !== null &&
                (i !== 'reset'
                    ? (function() {
                          i &&
                              i !== 'reset' &&
                              (i === 'loading' &&
                                  (E(t, 'disabled'),
                                  t[u]('disabled', 'disabled'),
                                  t[u](
                                      'data-original-text',
                                      t.innerHTML.trim()
                                  )),
                              (t.innerHTML = t[f](`data-${i}-text`)));
                      })()
                    : (function() {
                          t[f]('data-original-text') &&
                              ((M(t, 'disabled') ||
                                  t[f]('disabled') === 'disabled') &&
                                  (N(t, 'disabled'),
                                  t.removeAttribute('disabled')),
                              (t.innerHTML = t[f]('data-original-text')));
                      })());
        else {
            'Button' in t ||
                (P(t, 'click', s), P(t, 'keyup', o), P(t, 'keydown', l));
            for (let c = S(t, 'btn'), d = c[p], g = 0; g < d; g++)
                !M(c[g], y) && R('input', c[g])[f](a) && E(c[g], y);
            t.Button = this;
        }
    };
    o[b](['Button', K, '[data-toggle="buttons"]']);
    const Q = function(e, n) {
        (e = R(e)), (n = n || {});
        const a = e[f]('data-interval');
        const o = n.interval;
        const l = a === 'false' ? 0 : parseInt(a);
        const s = e[f]('data-pause') === 'hover' || !1;
        const u = e[f]('data-keyboard') === 'true' || !1;
        (this.keyboard = !0 === n.keyboard || u),
            (this.pause = !(n.pause !== 'hover' && !s) && 'hover'),
            (this.interval =
                typeof o === 'number'
                    ? o
                    : !1 === o || l === 0 || !1 === l
                    ? 0
                    : isNaN(l)
                    ? 5e3
                    : l);
        const h = this;
        let g = (e.index = 0);
        let m = (e.timer = 0);
        let v = !1;
        let b = !1;
        let x = null;
        let k = null;
        let A = null;
        const C = S(e, 'item');
        const L = C[p];
        let B = (this.direction = T);
        const H = S(e, 'carousel-control');
        const D = H[0];
        const W = H[1];
        const O = R('.carousel-indicators', e);
        const X = (O && O.getElementsByTagName('LI')) || [];
        if (!(L < 2)) {
            const q = function() {
                !1 === h.interval ||
                    M(e, 'paused') ||
                    (E(e, 'paused'), !v && (clearInterval(m), (m = null)));
            };
            const $ = function() {
                !1 !== h.interval &&
                    M(e, 'paused') &&
                    (N(e, 'paused'),
                    !v && (clearInterval(m), (m = null)),
                    !v && h.cycle());
            };
            const F = function(t) {
                if ((t.preventDefault(), !v)) {
                    const e = t[r];
                    if (!e || M(e, y) || !e[f]('data-slide-to')) return !1;
                    (g = parseInt(e[f]('data-slide-to'), 10)), h.slideTo(g);
                }
            };
            const G = function(t) {
                if ((t.preventDefault(), !v)) {
                    const e = t.currentTarget || t.srcElement;
                    e === W ? g++ : e === D && g--, h.slideTo(g);
                }
            };
            const J = function(t) {
                if (!v) {
                    switch (t.which) {
                        case 39:
                            g++;
                            break;
                        case 37:
                            g--;
                            break;
                        default:
                            return;
                    }
                    h.slideTo(g);
                }
            };
            const K = function(t) {
                t(e, d.move, V, j), t(e, d.end, Z, j);
            };
            const Q = function(t) {
                b ||
                    ((x = parseInt(t.touches[0].pageX)),
                    e.contains(t[r]) && ((b = !0), K(P)));
            };
            var V = function(t) {
                return b
                    ? ((k = parseInt(t.touches[0].pageX)),
                      t.type === 'touchmove' && t.touches[p] > 1
                          ? (t.preventDefault(), !1)
                          : void 0)
                    : void t.preventDefault();
            };
            var Z = function(t) {
                if (b && !v && ((A = k || parseInt(t.touches[0].pageX)), b)) {
                    if (
                        (!e.contains(t[r]) || !e.contains(t.relatedTarget)) &&
                        Math.abs(x - A) < 75
                    )
                        return !1;
                    k < x ? g++ : k > x && g--, (b = !1), h.slideTo(g), K(z);
                }
            };
            const _ = function() {
                const n = e.getBoundingClientRect();
                const a = t.innerHeight || i.clientHeight;
                return n[w] <= a && n.bottom >= 0;
            };
            const tt = function(t) {
                for (let e = 0, i = X[p]; e < i; e++) N(X[e], y);
                X[t] && E(X[t], y);
            };
            (this.cycle = function() {
                m && (clearInterval(m), (m = null)),
                    (m = setInterval(function() {
                        _() && (g++, h.slideTo(g));
                    }, this.interval));
            }),
                (this.slideTo = function(t) {
                    if (!v) {
                        let i;
                        const n = this.getActiveIndex();
                        n !== t &&
                            (n < t || (n === 0 && t === L - 1)
                                ? (B = h.direction = T)
                                : (n > t || (n === L - 1 && t === 0)) &&
                                  (B = h.direction = 'right'),
                            t < 0 ? (t = L - 1) : t >= L && (t = 0),
                            (g = t),
                            (i = B === T ? 'next' : 'prev'),
                            Y.call(e, 'slide', 'carousel', C[t]),
                            (v = !0),
                            clearInterval(m),
                            (m = null),
                            tt(t),
                            I && M(e, 'slide')
                                ? (E(C[t], i),
                                  C[t].offsetWidth,
                                  E(C[t], B),
                                  E(C[n], B),
                                  U(C[t], function(a) {
                                      const o =
                                          a && a[r] !== C[t]
                                              ? 1e3 * a.elapsedTime + 100
                                              : 20;
                                      v &&
                                          setTimeout(function() {
                                              (v = !1),
                                                  E(C[t], y),
                                                  N(C[n], y),
                                                  N(C[t], i),
                                                  N(C[t], B),
                                                  N(C[n], B),
                                                  Y.call(
                                                      e,
                                                      'slid',
                                                      'carousel',
                                                      C[t]
                                                  ),
                                                  h.interval &&
                                                      !M(e, 'paused') &&
                                                      h.cycle();
                                          }, o);
                                  }))
                                : (E(C[t], y),
                                  C[t].offsetWidth,
                                  N(C[n], y),
                                  setTimeout(function() {
                                      (v = !1),
                                          h.interval &&
                                              !M(e, 'paused') &&
                                              h.cycle(),
                                          Y.call(e, 'slid', 'carousel', C[t]);
                                  }, 100)));
                    }
                }),
                (this.getActiveIndex = function() {
                    return C.indexOf(S(e, 'item active')[0]) || 0;
                }),
                'Carousel' in e ||
                    (h.pause &&
                        h.interval &&
                        (P(e, c[0], q),
                        P(e, c[1], $),
                        P(e, d.start, q, j),
                        P(e, d.end, $, j)),
                    C[p] > 1 && P(e, d.start, Q, j),
                    W && P(W, 'click', G),
                    D && P(D, 'click', G),
                    O && P(O, 'click', F),
                    h.keyboard && P(t, 'keydown', J)),
                h.getActiveIndex() < 0 && (C[p] && E(C[0], y), X[p] && tt(0)),
                h.interval && h.cycle(),
                (e.Carousel = h);
        }
    };
    o[b](['Carousel', Q, '[data-ride="carousel"]']);
    const V = function(t, e) {
        (t = R(t)), (e = e || {});
        let i;
        let n;
        let a = null;
        let o = null;
        const l = this;
        const r = t[f]('data-parent');
        const s = function(t, e) {
            Y.call(t, 'show', 'collapse'),
                (t.isAnimating = !0),
                E(t, 'collapsing'),
                N(t, 'collapse'),
                (t[v].height = `${t.scrollHeight}px`),
                U(t, function() {
                    (t.isAnimating = !1),
                        t[u]('aria-expanded', 'true'),
                        e[u]('aria-expanded', 'true'),
                        N(t, 'collapsing'),
                        E(t, 'collapse'),
                        E(t, 'in'),
                        (t[v].height = ''),
                        Y.call(t, 'shown', 'collapse');
                });
        };
        const c = function(t, e) {
            Y.call(t, 'hide', 'collapse'),
                (t.isAnimating = !0),
                (t[v].height = `${t.scrollHeight}px`),
                N(t, 'collapse'),
                N(t, 'in'),
                E(t, 'collapsing'),
                t.offsetWidth,
                (t[v].height = '0px'),
                U(t, function() {
                    (t.isAnimating = !1),
                        t[u]('aria-expanded', 'false'),
                        e[u]('aria-expanded', 'false'),
                        N(t, 'collapsing'),
                        E(t, 'collapse'),
                        (t[v].height = ''),
                        Y.call(t, 'hidden', 'collapse');
                });
        };
        (this.toggle = function(t) {
            t.preventDefault(), M(o, 'in') ? l.hide() : l.show();
        }),
            (this.hide = function() {
                o.isAnimating || (c(o, t), E(t, 'collapsed'));
            }),
            (this.show = function() {
                a &&
                    ((i = R('.collapse.in', a)),
                    (n =
                        i &&
                        (R(`[data-target="#${i.id}"]`, a) ||
                            R(`[href="#${i.id}"]`, a)))),
                    (!o.isAnimating || (i && !i.isAnimating)) &&
                        (n && i !== o && (c(i, n), E(n, 'collapsed')),
                        s(o, t),
                        N(t, 'collapsed'));
            }),
            'Collapse' in t || P(t, 'click', l.toggle),
            (o = (function() {
                const e = t.href && t[f]('href');
                const i = t[f]('data-target');
                const n = e || (i && i.charAt(0) === '#' && i);
                return n && R(n);
            })()),
            (o.isAnimating = !1),
            (a = R(e.parent) || (r && W(t, r))),
            (t.Collapse = l);
    };
    o[b](['Collapse', V, '[data-toggle="collapse"]']);
    const Z = function(t, i) {
        (t = R(t)),
            (this.persist = !0 === i || t[f]('data-persist') === 'true' || !1);
        const n = this;
        const a = t[h];
        const o = 'open';
        let s = null;
        const c = R('.dropdown-menu', a);
        const d = (function() {
            for (var t = c.children, e = [], i = 0; i < t[p]; i++)
                t[i].children[p] &&
                    t[i].children[0].tagName === 'A' &&
                    e[b](t[i]);
            return e;
        })();
        const g = function(t) {
            ((t.href && t.href.slice(-1) === '#') ||
                (t[h] && t[h].href && t[h].href.slice(-1) === '#')) &&
                this.preventDefault();
        };
        const m = function() {
            const i = t[o] ? P : z;
            i(e, 'click', v),
                i(e, 'keydown', T),
                i(e, 'keyup', w),
                i(e, 'focus', v, !0);
        };
        var v = function(e) {
            const i = e[r];
            const a = i && (i[f](l) || (i[h] && f in i[h] && i[h][f](l)));
            (e.type !== 'focus' || (i !== t && i !== c && !c.contains(i))) &&
                ((i !== c && !c.contains(i)) || (!n.persist && !a)) &&
                ((s = i === t || t.contains(i) ? t : null), k(), g.call(e, i));
        };
        const y = function(e) {
            (s = t), x(), g.call(e, e[r]);
        };
        var T = function(t) {
            const e = t.which || t.keyCode;
            (e !== 38 && e !== 40) || t.preventDefault();
        };
        var w = function(i) {
            const a = i.which || i.keyCode;
            const l = e.activeElement;
            let r = d.indexOf(l[h]);
            const f = l === t;
            const u = c.contains(l);
            const g = l[h][h] === c;
            g &&
                ((r = f
                    ? 0
                    : a === 38
                    ? r > 1
                        ? r - 1
                        : 0
                    : a === 40 && r < d[p] - 1
                    ? r + 1
                    : r),
                d[r] && H(d[r].children[0])),
                ((d[p] && g) || (!d[p] && (u || f)) || !u) &&
                    t[o] &&
                    a === 27 &&
                    (n.toggle(), (s = null));
        };
        var x = function() {
            Y.call(a, 'show', 'dropdown', s),
                E(a, o),
                t[u]('aria-expanded', !0),
                Y.call(a, 'shown', 'dropdown', s),
                (t[o] = !0),
                z(t, 'click', y),
                setTimeout(function() {
                    H(c.getElementsByTagName('INPUT')[0] || t), m();
                }, 1);
        };
        var k = function() {
            Y.call(a, 'hide', 'dropdown', s),
                N(a, o),
                t[u]('aria-expanded', !1),
                Y.call(a, 'hidden', 'dropdown', s),
                (t[o] = !1),
                m(),
                H(t),
                setTimeout(function() {
                    P(t, 'click', y);
                }, 1);
        };
        (t[o] = !1),
            (this.toggle = function() {
                M(a, o) && t[o] ? k() : x();
            }),
            'Dropdown' in t ||
                (!(1 in c) && c[u]('tabindex', '0'), P(t, 'click', y)),
            (t.Dropdown = n);
    };
    o[b](['Dropdown', Z, '[data-toggle="dropdown"]']);
    const _ = function(a, o) {
        a = R(a);
        const l = a[f]('data-target') || a[f]('href');
        const c = R(l);
        const d = M(a, 'modal') ? a : c;
        if ((M(a, 'modal') && (a = null), d)) {
            (o = o || {}),
                (this.keyboard =
                    !1 !== o.keyboard && d[f]('data-keyboard') !== 'false'),
                (this.backdrop =
                    (o.backdrop !== 'static' &&
                        d[f]('data-backdrop') !== 'static') ||
                    'static'),
                (this.backdrop =
                    !1 !== o.backdrop &&
                    d[f]('data-backdrop') !== 'false' &&
                    this.backdrop),
                (this[s] = !!M(d, 'fade')),
                (this.content = o.content),
                (d.isAnimating = !1);
            let g;
            let m;
            let b;
            let y;
            let w;
            const x = this;
            let k = null;
            const L = S(i, C).concat(S(i, 'navbar-fixed-bottom'));
            const B = function() {
                const e = i.getBoundingClientRect();
                return t.innerWidth || e.right - Math.abs(e[T]);
            };
            const D = function() {
                let i;
                const a = e[n].currentStyle || t.getComputedStyle(e[n]);
                const o = parseInt(a.paddingRight, 10);
                if (
                    g &&
                    ((e[n][v].paddingRight = `${o + m}px`),
                    (d[v].paddingRight = `${m}px`),
                    L[p])
                )
                    for (let l = 0; l < L[p]; l++)
                        (i = (L[l].currentStyle || t.getComputedStyle(L[l]))
                            .paddingRight),
                            (L[l][v].paddingRight = `${parseInt(i) + m}px`);
            };
            const W = function() {
                if (
                    ((e[n][v].paddingRight = ''),
                    (d[v].paddingRight = ''),
                    L[p])
                )
                    for (let t = 0; t < L[p]; t++) L[t][v].paddingRight = '';
            };
            const O = function() {
                let t;
                const i = e.createElement('div');
                return (
                    (i.className = 'modal-scrollbar-measure'),
                    e[n].appendChild(i),
                    (t = i.offsetWidth - i.clientWidth),
                    e[n].removeChild(i),
                    t
                );
            };
            const X = function() {
                (g = e[n].clientWidth < B()), (m = O());
            };
            const $ = function() {
                const t = e.createElement('div');
                (b = R('.modal-backdrop')),
                    b === null &&
                        (t[u]('class', `modal-backdrop${x[s] ? ' fade' : ''}`),
                        (b = t),
                        e[n].appendChild(b)),
                    (A = 1);
            };
            const F = function() {
                (b = R('.modal-backdrop')) &&
                    b !== null &&
                    typeof b === 'object' &&
                    ((A = 0), e[n].removeChild(b), (b = null));
            };
            const G = function() {
                H(d),
                    (d.isAnimating = !1),
                    Y.call(d, 'shown', 'modal', k),
                    P(t, 'resize', x.update, j),
                    P(d, 'click', V),
                    P(e, 'keydown', Q);
            };
            const J = function() {
                (d[v].display = ''),
                    a && H(a),
                    Y.call(d, 'hidden', 'modal'),
                    (function() {
                        S(e, 'modal in')[0] ||
                            (W(),
                            N(e[n], 'modal-open'),
                            b && M(b, 'fade') ? (N(b, 'in'), U(b, F)) : F(),
                            z(t, 'resize', x.update, j),
                            z(d, 'click', V),
                            z(e, 'keydown', Q));
                    })(),
                    (d.isAnimating = !1);
            };
            const K = function(t) {
                if (!d.isAnimating) {
                    let e = t[r];
                    (e =
                        e.hasAttribute('data-target') || e.hasAttribute('href')
                            ? e
                            : e[h]),
                        e !== a ||
                            M(d, 'in') ||
                            ((d.modalTrigger = a),
                            (k = a),
                            x.show(),
                            t.preventDefault());
                }
            };
            var Q = function(t) {
                if (!d.isAnimating) {
                    const e = t.which || t.keyCode;
                    x.keyboard && e == 27 && M(d, 'in') && x.hide();
                }
            };
            var V = function(t) {
                if (!d.isAnimating) {
                    const e = t[r];
                    M(d, 'in') &&
                        (e[h][f]('data-dismiss') === 'modal' ||
                            e[f]('data-dismiss') === 'modal' ||
                            (e === d && x.backdrop !== 'static')) &&
                        (x.hide(), (k = null), t.preventDefault());
                }
            };
            (this.toggle = function() {
                M(d, 'in') ? this.hide() : this.show();
            }),
                (this.show = function() {
                    M(d, 'in') ||
                        d.isAnimating ||
                        (clearTimeout(w),
                        (w = setTimeout(function() {
                            (d.isAnimating = !0), Y.call(d, 'show', 'modal', k);
                            const t = S(e, 'modal in')[0];
                            t &&
                                t !== d &&
                                ('modalTrigger' in t &&
                                    t.modalTrigger.Modal.hide(),
                                'Modal' in t && t.Modal.hide()),
                                x.backdrop && !A && !b && $(),
                                b &&
                                    !M(b, 'in') &&
                                    (b.offsetWidth, (y = q(b)), E(b, 'in')),
                                setTimeout(
                                    function() {
                                        (d[v].display = 'block'),
                                            X(),
                                            D(),
                                            E(e[n], 'modal-open'),
                                            E(d, 'in'),
                                            d[u]('aria-hidden', !1),
                                            M(d, 'fade') ? U(d, G) : G();
                                    },
                                    I && b && y ? y : 1
                                );
                        }, 1)));
                }),
                (this.hide = function() {
                    !d.isAnimating &&
                        M(d, 'in') &&
                        (clearTimeout(w),
                        (w = setTimeout(function() {
                            (d.isAnimating = !0),
                                Y.call(d, 'hide', 'modal'),
                                (b = R('.modal-backdrop')),
                                (y = b && q(b)),
                                N(d, 'in'),
                                d[u]('aria-hidden', !0),
                                setTimeout(
                                    function() {
                                        M(d, 'fade') ? U(d, J) : J();
                                    },
                                    I && b && y ? y : 2
                                );
                        }, 2)));
                }),
                (this.setContent = function(t) {
                    R('.modal-content', d).innerHTML = t;
                }),
                (this.update = function() {
                    M(d, 'in') && (X(), D());
                }),
                !a || 'Modal' in a || P(a, 'click', K),
                x.content && x.setContent(x.content),
                a ? ((a.Modal = x), (d.modalTrigger = a)) : (d.Modal = x);
        }
    };
    o[b](['Modal', _, '[data-toggle="modal"]']);
    const tt = function(i, a) {
        (i = R(i)), (a = a || {});
        const o = i[f]('data-trigger');
        const l = i[f]('data-animation');
        const d = i[f]('data-placement');
        const h = i[f]('data-dismissible');
        const p = i[f]('data-delay');
        const g = i[f]('data-container');
        const m = '<button type="button" class="close">×</button>';
        const b = R(a.container);
        const y = R(g);
        const T = W(i, '.modal');
        const k = W(i, `.${C}`);
        const A = W(i, '.navbar-fixed-bottom');
        (this.template = a.template ? a.template : null),
            (this.trigger = a.trigger ? a.trigger : o || 'hover'),
            (this[s] = a[s] && a[s] !== 'fade' ? a[s] : l || 'fade'),
            (this.placement = a.placement ? a.placement : d || w),
            (this.delay = parseInt(a.delay || p) || 200),
            (this.dismissible = !(!a.dismissible && h !== 'true')),
            (this.container = b || (y || (k || (A || (T || e[n])))));
        const I = this;
        let L = a.title || i[f]('data-title') || null;
        let B = a.content || i[f]('data-content') || null;
        if (B || this.template) {
            let H = null;
            let D = 0;
            let S = this.placement;
            const O = function(t) {
                H !== null && t[r] === R('.close', H) && I.hide();
            };
            const X = function() {
                I.container.removeChild(H), (D = null), (H = null);
            };
            const q = function() {
                if (
                    ((L = a.title || i[f]('data-title')),
                    (B = a.content || i[f]('data-content')),
                    (B = B ? B.replace(/^\s+|\s+$/g, '') : null),
                    (H = e.createElement('div')),
                    B !== null && I.template === null)
                ) {
                    if ((H[u]('role', 'tooltip'), L !== null)) {
                        const t = e.createElement('h3');
                        t[u]('class', 'popover-title'),
                            (t.innerHTML = I.dismissible ? L + m : L),
                            H.appendChild(t);
                    }
                    const n = e.createElement('div');
                    const o = e.createElement('div');
                    n[u]('class', 'arrow'),
                        o[u]('class', 'popover-content'),
                        H.appendChild(n),
                        H.appendChild(o),
                        (o.innerHTML = I.dismissible && L === null ? B + m : B);
                } else {
                    const l = e.createElement('div');
                    (I.template = I.template.replace(/^\s+|\s+$/g, '')),
                        (l.innerHTML = I.template),
                        (H.innerHTML = l.firstChild.innerHTML);
                }
                I.container.appendChild(H),
                    (H[v].display = 'block'),
                    H[u]('class', `popover ${S} ${I[s]}`);
            };
            const $ = function() {
                !M(H, 'in') && E(H, 'in');
            };
            const G = function() {
                F(i, H, S, I.container);
            };
            const J = function(n) {
                (I.trigger != 'click' && I.trigger != 'focus') ||
                    (!I.dismissible && n(i, 'blur', I.hide)),
                    I.dismissible && n(e, 'click', O),
                    !x && n(t, 'resize', I.hide, j);
            };
            const K = function() {
                J(P), Y.call(i, 'shown', 'popover');
            };
            const Q = function() {
                J(z), X(), Y.call(i, 'hidden', 'popover');
            };
            (this.toggle = function() {
                H === null ? I.show() : I.hide();
            }),
                (this.show = function() {
                    clearTimeout(D),
                        (D = setTimeout(function() {
                            H === null &&
                                ((S = I.placement),
                                q(),
                                G(),
                                $(),
                                Y.call(i, 'show', 'popover'),
                                I[s] ? U(H, K) : K());
                        }, 20));
                }),
                (this.hide = function() {
                    clearTimeout(D),
                        (D = setTimeout(function() {
                            H &&
                                H !== null &&
                                M(H, 'in') &&
                                (Y.call(i, 'hide', 'popover'),
                                N(H, 'in'),
                                I[s] ? U(H, Q) : Q());
                        }, I.delay));
                }),
                'Popover' in i ||
                    (I.trigger === 'hover'
                        ? (P(i, c[0], I.show),
                          I.dismissible || P(i, c[1], I.hide))
                        : (I.trigger != 'click' && I.trigger != 'focus') ||
                          P(i, I.trigger, I.toggle)),
                (i.Popover = I);
        }
    };
    o[b](['Popover', tt, '[data-toggle="popover"]']);
    const et = function(e, i) {
        e = R(e);
        const n = R(e[f]('data-target'));
        const a = e[f]('data-offset');
        if (((i = i || {}), i[r] || n)) {
            for (
                var o,
                    l = this,
                    s = (i[r] && R(i[r])) || n,
                    c = s && s.getElementsByTagName('A'),
                    d = parseInt(i.offset || a) || 10,
                    u = [],
                    g = [],
                    m = e.offsetHeight < e.scrollHeight ? e : t,
                    v = m === t,
                    T = 0,
                    k = c[p];
                T < k;
                T++
            ) {
                const A = c[T][f]('href');
                const C =
                    A && A.charAt(0) === '#' && A.slice(-1) !== '#' && R(A);
                C && (u[b](c[T]), g[b](C));
            }
            const I = function(t) {
                const i = u[t][h];
                const n = g[t];
                const a = W(i, '.dropdown');
                const l = v && n.getBoundingClientRect();
                const r = M(i, y) || !1;
                const s = (v ? l[w] + o : n.offsetTop) - d;
                const c = v
                    ? l.bottom + o - d
                    : g[t + 1]
                    ? g[t + 1].offsetTop - d
                    : e.scrollHeight;
                const f = o >= s && c > o;
                if (!r && f)
                    i.tagName !== 'LI' ||
                        M(i, y) ||
                        (E(i, y),
                        a && !M(a, y) && E(a, y),
                        Y.call(e, 'activate', 'scrollspy', u[t]));
                else if (f) {
                    if ((!f && !r) || (r && f)) return;
                } else
                    i.tagName === 'LI' &&
                        M(i, y) &&
                        (N(i, y),
                        a && M(a, y) && !S(i[h], y).length && N(a, y));
            };
            const L = function() {
                o = v ? $().y : e.scrollTop;
                for (let t = 0, i = u[p]; t < i; t++) I(t);
            };
            (this.refresh = function() {
                L();
            }),
                'ScrollSpy' in e ||
                    (P(m, 'scroll', l.refresh, j),
                    !x && P(t, 'resize', l.refresh, j)),
                l.refresh(),
                (e.ScrollSpy = l);
        }
    };
    o[b](['ScrollSpy', et, '[data-spy="scroll"]']);
    const it = function(t, e) {
        t = R(t);
        const i = t[f]('data-height');
        (e = e || {}), (this.height = !!I && (e.height || i === 'true'));
        let n;
        let a;
        let o;
        let l;
        let r;
        let s;
        let c;
        const d = this;
        const g = W(t, '.nav');
        let m = !1;
        const b = g && R('.dropdown', g);
        const w = function() {
            (m[v].height = ''), N(m, 'collapsing'), (g.isAnimating = !1);
        };
        const x = function() {
            m
                ? s
                    ? w()
                    : setTimeout(function() {
                          (m[v].height = `${c}px`), m.offsetWidth, U(m, w);
                      }, 50)
                : (g.isAnimating = !1),
                Y.call(n, 'shown', 'tab', a);
        };
        const k = function() {
            m && ((o[v].float = T), (l[v].float = T), (r = o.scrollHeight)),
                E(l, y),
                Y.call(n, 'show', 'tab', a),
                N(o, y),
                Y.call(a, 'hidden', 'tab', n),
                m &&
                    ((c = l.scrollHeight),
                    (s = c === r),
                    E(m, 'collapsing'),
                    (m[v].height = `${r}px`),
                    m.offsetHeight,
                    (o[v].float = ''),
                    (l[v].float = '')),
                M(l, 'fade')
                    ? setTimeout(function() {
                          E(l, 'in'), U(l, x);
                      }, 20)
                    : x();
        };
        if (g) {
            g.isAnimating = !1;
            const A = function() {
                let t;
                const e = S(g, y);
                return (
                    e[p] !== 1 || M(e[0], 'dropdown')
                        ? e[p] > 1 && (t = e[e[p] - 1])
                        : (t = e[0]),
                    t.getElementsByTagName('A')[0]
                );
            };
            const C = function() {
                return R(A()[f]('href'));
            };
            const L = function(t) {
                t.preventDefault(),
                    (n = t.currentTarget || this),
                    !g.isAnimating && !M(n[h], y) && d.show();
            };
            (this.show = function() {
                (n = n || t),
                    (l = R(n[f]('href'))),
                    (a = A()),
                    (o = C()),
                    (g.isAnimating = !0),
                    N(a[h], y),
                    a[u]('aria-expanded', 'false'),
                    E(n[h], y),
                    n[u]('aria-expanded', 'true'),
                    b &&
                        (M(t[h][h], 'dropdown-menu')
                            ? M(b, y) || E(b, y)
                            : M(b, y) && N(b, y)),
                    Y.call(a, 'hide', 'tab', n),
                    M(o, 'fade') ? (N(o, 'in'), U(o, k)) : k();
            }),
                'Tab' in t || P(t, 'click', L),
                d.height && (m = C()[h]),
                (t.Tab = d);
        }
    };
    o[b](['Tab', it, '[data-toggle="tab"]']);
    const nt = function(i, a) {
        (i = R(i)), (a = a || {});
        const o = i[f]('data-animation');
        const l = i[f]('data-placement');
        const r = i[f]('data-delay');
        const d = i[f]('data-container');
        const h = R(a.container);
        const p = R(d);
        const g = W(i, '.modal');
        const m = W(i, `.${C}`);
        const v = W(i, '.navbar-fixed-bottom');
        (this[s] = a[s] && a[s] !== 'fade' ? a[s] : o || 'fade'),
            (this.placement = a.placement ? a.placement : l || w),
            (this.delay = parseInt(a.delay || r) || 200),
            (this.container = h || (p || (m || (v || (g || e[n])))));
        const b = this;
        let y = 0;
        let T = this.placement;
        let k = null;
        let A =
            i[f]('title') || i[f]('data-title') || i[f]('data-original-title');
        if (A && A != '') {
            const I = function() {
                b.container.removeChild(k), (k = null), (y = null);
            };
            const L = function() {
                if (
                    !(A =
                        i[f]('title') ||
                        i[f]('data-title') ||
                        i[f]('data-original-title')) ||
                    A == ''
                )
                    return !1;
                (k = e.createElement('div')), k[u]('role', 'tooltip');
                const t = e.createElement('div');
                const n = e.createElement('div');
                t[u]('class', 'tooltip-arrow'),
                    n[u]('class', 'tooltip-inner'),
                    k.appendChild(t),
                    k.appendChild(n),
                    (n.innerHTML = A),
                    b.container.appendChild(k),
                    k[u]('class', `tooltip ${T} ${b[s]}`);
            };
            const B = function() {
                F(i, k, T, b.container);
            };
            const H = function() {
                !M(k, 'in') && E(k, 'in');
            };
            const D = function() {
                Y.call(i, 'shown', 'tooltip'), !x && P(t, 'resize', b.hide, j);
            };
            const S = function() {
                !x && z(t, 'resize', b.hide, j),
                    I(),
                    Y.call(i, 'hidden', 'tooltip');
            };
            (this.show = function() {
                clearTimeout(y),
                    (y = setTimeout(function() {
                        if (k === null) {
                            if (((T = b.placement), L() == 0)) return;
                            B(),
                                H(),
                                Y.call(i, 'show', 'tooltip'),
                                b[s] ? U(k, D) : D();
                        }
                    }, 20));
            }),
                (this.hide = function() {
                    clearTimeout(y),
                        (y = setTimeout(function() {
                            k &&
                                M(k, 'in') &&
                                (Y.call(i, 'hide', 'tooltip'),
                                N(k, 'in'),
                                b[s] ? U(k, S) : S());
                        }, b.delay));
                }),
                (this.toggle = function() {
                    k ? b.hide() : b.show();
                }),
                'Tooltip' in i ||
                    (i[u]('data-original-title', A),
                    i.removeAttribute('title'),
                    P(i, c[0], b.show),
                    P(i, c[1], b.hide)),
                (i.Tooltip = b);
        }
    };
    o[b](['Tooltip', nt, '[data-toggle="tooltip"]']);
    const at = function(t, e) {
        for (let i = 0, n = e[p]; i < n; i++) new t(e[i]);
    };
    const ot = (a.initCallback = function(t) {
        t = t || e;
        for (let i = 0, n = o[p]; i < n; i++)
            at(o[i][1], t.querySelectorAll(o[i][2]));
    });
    return (
        e[n]
            ? ot()
            : P(e, 'DOMContentLoaded', function() {
                  ot();
              }),
        {
            Affix: G,
            Alert: J,
            Button: K,
            Carousel: Q,
            Collapse: V,
            Dropdown: Z,
            Modal: _,
            Popover: tt,
            ScrollSpy: et,
            Tab: it,
            Tooltip: nt,
        }
    );
});
