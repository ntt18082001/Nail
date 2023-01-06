google.maps.__gjsload__('search_impl', function(_) {
    var cbb = function(a) {
            _.G.call(this, a)
        },
        ebb = function(a) {
            var b = _.Zi.Sa;
            a = a.toArray();
            dbb || (dbb = {
                M: "sssM",
                T: ["ss"]
            });
            return b.call(_.Zi, a, dbb)
        },
        fbb = function(a, b) {
            _.D(a.o, 3, b)
        },
        X$ = function(a) {
            _.G.call(this, a)
        },
        gbb = function() {
            var a = _.Zj,
                b = _.mj;
            this.j = _.og;
            this.h = _.Qk(_.hu, a, _.Ku + "/maps/api/js/LayersService.GetFeature", b)
        },
        jbb = function(a, b, c) {
            var d = _.kE(new gbb);
            c.rr = (0, _.Ma)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.PDa(c, _.UK(b));
            var e = [];
            e.push(_.N(c, "click", (0, _.Ma)(hbb, null, a)));
            _.jb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.N(c, f, (0, _.Ma)(ibb, null, a, f)))
            });
            e.push(_.N(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        hbb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.o, 2) ? new _.Xe(_.mn(e.getLocation().o, 1), _.mn(e.getLocation().o, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.o, 3), h = 0; h < g; ++h) {
                    var k = _.Wk(e.o, 3, _.$K, h);
                    f.fields[k.getKey()] = k.Ja()
                }
            }
            _.O(a, "click", b, c, d, f)
        },
        ibb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.O(a, b, c, d, e, h, g)
        },
        kbb = function() {};
    _.B(cbb, _.G);
    cbb.prototype.Vb = function() {
        return _.L(this.o, 2)
    };
    var dbb;
    _.B(X$, _.G);
    X$.prototype.getStatus = function() {
        return _.K(this.o, 1, -1)
    };
    X$.prototype.getLocation = function() {
        return _.I(this.o, 2, _.An)
    };
    gbb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new cbb;
        _.D(d.o, 1, a.layerId.split("|")[0]);
        _.D(d.o, 2, a.featureId);
        fbb(d, _.Yd(_.ce(this.j)));
        for (var e in a.parameters) {
            var f = _.Vd(d.o, 4, _.$K);
            _.D(f.o, 1, e);
            _.D(f.o, 2, a.parameters[e])
        }
        a = ebb(d);
        this.h(a, c, c);
        return a
    };
    gbb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    kbb.prototype.Ru = function(a) {
        if (_.Fi[15]) {
            var b = a.Gd,
                c = a.Gd = a.getMap();
            b && a.h && (a.m ? (b = b.__gm.j, b.set(b.get().Ff(a.h))) : a.h && _.kEa(a.h, b) && (_.jb(a.j || [], _.xf), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.wm;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var w = _.A(d[u].split(":")),
                        y = w.next().value;
                    w = _.ma(w);
                    b.parameters[y] = w.join(":")
                }
                e && (b.spotlightDescription = new _.aq(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Cm(g));
                m && (b.travelMapRequest = new _.Nt(m));
                h && (b.mapsApiLayer = new _.bl(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.Yq(p));
                q && (b.overlayLayer = new _.qo(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.Xs(t));
                b.darkLaunch = !!k;
                a.h =
                    b;
                a.m = a.get("renderOnBaseMap");
                a.m ? (a = c.__gm.j, a.set(a.get().Rd(b))) : jbb(a, c, b);
                _.Ag(c, "Lg");
                _.xg(c, 148282)
            }
        }
    };
    _.qf("search_impl", new kbb);
});