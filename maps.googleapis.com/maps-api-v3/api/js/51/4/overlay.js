google.maps.__gjsload__('overlay', function(_) {
    var xw = function(a) {
            this.h = a
        },
        ina = function() {},
        yw = function(a) {
            a.Co = a.Co || new ina;
            return a.Co
        },
        jna = function(a) {
            this.Ea = new _.ni(function() {
                var b = a.Co;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.vn && a.onAdd) a.onAdd();
                        b.vn = !0;
                        a.draw()
                    }
                } else {
                    if (b.vn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.vn = !1
                }
            }, 0)
        },
        kna = function(a, b) {
            function c() {
                return _.oi(e.Ea)
            }
            var d = yw(a),
                e = d.fm;
            e || (e = d.fm = new jna(a));
            _.jb(d.Pa || [], _.xf);
            var f = d.Oa = d.Oa || new _.Eu,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.As = d.As || new xw(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Pa = [_.N(a, "panes_changed", c), _.N(g, "zoom_changed", c), _.N(g, "offset_changed", c), _.N(b, "projection_changed", c), _.N(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Of && (_.Ag(b, "Ox"), _.xg(b, 148440))
        },
        ona = function(a) {
            if (a) {
                var b = a.getMap();
                if (lna(a) !== b && b && b instanceof _.Of) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new mna(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.Ha;
                        var e = new zw(b, d);
                        d.Xa(e);
                        c.overlayLayer = e;
                        nna(a);
                        ona(a)
                    })
                }
            }
        },
        nna = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.m.Ef(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        lna = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        mna = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.m = c;
            this.j = !1;
            _.Ag(this.map, "Ox");
            _.xg(this.map, 148440);
            c.Pe(this)
        },
        pna = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        zw = function(a, b) {
            this.X = a;
            this.Ca = b;
            this.h = null;
            this.j = []
        };
    _.Pa(xw, _.P);
    xw.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Be(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Aw = {};
    _.Pa(jna, _.P);
    Aw.Pe = function(a) {
        if (a) {
            var b = a.getMap();
            (yw(a).fs || null) !== b && (b && kna(a, b), yw(a).fs = b)
        }
    };
    Aw.Ef = function(a) {
        var b = yw(a),
            c = b.Oa;
        c && c.unbindAll();
        (c = b.As) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Pa && _.jb(b.Pa, _.xf);
        b.Pa = null;
        b.fm && (b.fm.Ea.Wc(), b.fm = null);
        delete yw(a).fs
    };
    var Bw = {};
    mna.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    zw.prototype.dispose = function() {};
    zw.prototype.cc = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.Qr(this.X, this.Ca, function() {});
        k.cc(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, pna(b, k), b.draw()
    };
    zw.prototype.Pe = function(a) {
        this.j.push(a);
        this.h && pna(a, this.h);
        this.Ca.refresh()
    };
    zw.prototype.Ef = function(a) {
        _.mb(this.j, a)
    };
    Bw.Pe = ona;
    Bw.Ef = nna;
    _.qf("overlay", {
        Up: function(a) {
            if (a) {
                (0, Aw.Ef)(a);
                (0, Bw.Ef)(a);
                var b = a.getMap();
                b && (b instanceof _.Of ? (0, Bw.Pe)(a) : (0, Aw.Pe)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.ss(a, {
                onClick: function(b) {
                    _.gm(b.event.Ka)
                },
                Ic: function(b) {
                    return _.Xr(b)
                },
                rh: function(b) {
                    return _.Yr(b)
                },
                pd: function(b) {
                    return _.Yr(b)
                },
                Qc: function(b) {
                    return _.Zr(b)
                }
            }).zi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.uf);
            a.addEventListener("contextmenu", _.uf);
            a.addEventListener("dblclick", _.uf);
            a.addEventListener("mousedown",
                _.uf);
            a.addEventListener("mousemove", _.uf);
            a.addEventListener("MSPointerDown", _.uf);
            a.addEventListener("pointerdown", _.uf);
            a.addEventListener("touchstart", _.uf);
            a.addEventListener("wheel", _.uf)
        }
    });
});