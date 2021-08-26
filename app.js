/// remove the random_hash() function and tokenData declaration when not testing locally.
function random_hash() {
    let x = "0123456789abcdef", hash = '0x'
    for (let i = 64; i > 0; --i) {
      hash += x[Math.floor(Math.random()*x.length)]
    }
    return hash
}
  
tokenData = {
    "hash": random_hash(),
    "tokenId": "123000456"
}



const seed = parseInt(tokenData.hash.slice(0, 16), 16);
class Random {
    constructor(e) {
         this.seed = e
    }
    rdec() {
         return this.seed ^= this.seed << 13, this.seed ^= this.seed >> 17, this.seed ^= this.seed << 5, (this.seed < 0 ? 1 + ~this.seed : this.seed) % 1e3 / 1e3
    }
    rbet(e, s) {
         return e + (s - e) * this.rdec()
    }
    rch(e) {
         return e[Math.floor(this.rbet(0, .99 * e.length))]
    }
}
const R = new Random(seed),
    wACol = [{
         e: "#d8770f",
         s: ["#91c100", "#fbcd00"],
         c: "rgba(215, 170, 221, 0.6)"
    }, {
         e: "#2207bb",
         s: ["#b7123d", "#1a7701"],
         c: "rgba(201, 225, 226, 0.5)"
    }, {
         e: "#4e0089",
         s: ["#dff959", "#001f28"],
         c: "rgba(96, 73, 73, 0.3)"
    }, {
         e: "#b25787",
         s: ["#d82c20", "#870808"],
         c: "rgba(239, 244, 159, 0.3)"
    }, {
         e: "#89f702",
         s: ["#507523", "#04cbea"],
         c: "rgba(186, 191, 87, 0.5)"
    }],
    wCol = R.rch(wACol),
    SIZE = Math.min(window.innerWidth, window.innerHeight);
let svg = document.querySelector("svg");
svg || (svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), document.body.prepend(svg));
const zoom = 5;
let sceneWidth = 20,
    sceneHeight = 20,
    viewWidth = 5 * sceneWidth,
    viewHeight = 5 * sceneHeight;
svg.setAttribute("width", SIZE), svg.setAttribute("height", SIZE), svg.setAttribute("viewBox", `${-viewWidth/2}  ${-viewHeight/2} ` + `${viewWidth} ${viewHeight}`), svg.style.background = `linear-gradient(${wCol.s[0]}, ${wCol.s[1]})`, svg.style.margin = "auto", svg.style.position = "absolute", svg.style.top = 0, svg.style.right = 0, svg.style.bottom = 0, svg.style.left = 0;
const TAU = Zdog.TAU,
    cos = Math.cos,
    sin = Math.sin;
let scene = new Zdog.Anchor;
scene.rotate.x = .2;
const eyeAvailC = ["#f70505", "#ffffff", "#fafbe7", "#f4d907", "#1df44f", "#fa71fc"],
    eyeC = R.rch(eyeAvailC),
    avC = [{
         p: "#2d1904",
         d: "#540505",
         l: "#441a44",
         m: "#241528"
    }, {
         p: "#1c021a",
         d: "#140121",
         l: "#231e07",
         m: "#21030f"
    }, {
         p: "#242828",
         d: "#0a394c",
         l: "#022023",
         m: "#213835"
    }, {
         p: "#1b187f",
         d: "#012d5b",
         l: "#1c0060",
         m: "#200223"
    }, {
         p: "#f97a02",
         d: "#c1be03",
         l: "#6b4b03",
         m: "#8e2302"
    }, {
         p: "#e80441",
         d: "#960a03",
         l: "#660228",
         m: "#000000"
    }, {
         p: "#0411f9",
         d: "#043c6b",
         l: "#efefef",
         m: "#3f3a05"
    }],
    albP = {
         p: "#fc8d05",
         d: "#272b2b",
         l: "#000000",
         m: "#420637"
    },
    ebrsColor = "#333",
    isAlbDice = R.rdec(),
    isAlb = isAlbDice <= .01,
    colors = isAlb ? albP : R.rch(avC),
    finsColor = isAlb ? albP.d : "#fcb400",
    kaijuType = ["gryllidaeus", "dgfynqzxinw", "klxqng", "triceraape", "szeguatlope"],
    DT = R.rch(kaijuType),
    mDice = R.rdec(),
    mType = "triceraape" === DT ? "snout" : mDice < .1 ? "grumpy" : mDice < .3 ? "bruh" : mDice < .5 ? "snout" : mDice < .7 ? "ooooooo" : "pog",
    ebrDice = R.rdec(),
    ebrType = ebrDice < .2 ? "gun" : ebrDice < .4 ? "grumpy" : ebrDice < .6 ? "staleface" : "none",
    commonEye = {
         s: R.rbet(2, 6),
         a: R.rbet(-1.2, 0)
    },
    legsLength = R.rbet(2, 42),
    PRE = {
         gryllidaeus: {
              H: {
                   s: R.rbet(12, 19),
                   l: R.rbet(2, 4),
                   a: R.rbet(-.15, .15)
              },
              E: commonEye,
              T: {
                   s: R.rbet(9, 11),
                   l: R.rbet(7, 11),
                   a: R.rbet(.14 * -TAU, .08 * -TAU),
                   st: {
                        x: 0,
                        y: 2
                   }
              },
              N: {
                   s: 8.4,
                   a: .2 * -TAU,
                   l: 30
              },
              TH: {
                   l: R.rbet(5, 27),
                   s: 6,
                   a: .15 * TAU
              },
              C: {
                   l: R.rbet(5, 27),
                   s: 5,
                   a: R.rbet(.32 * TAU, .39 * TAU)
              },
              F: {
                   s: 4.5,
                   l: 9,
                   a: .15 * TAU
              },
              TO: !0,
              A: {
                   s: 2.5,
                   l: R.rbet(2.5, 16.5),
                   a: R.rbet(.15 * TAU, .25 * TAU)
              },
              FO: {
                   s: 2.4,
                   l: R.rbet(2.5, 9.5),
                   a: R.rbet(.03 * TAU, .07 * TAU)
              },
              TA: R.rbet(.45 * TAU, .55 * TAU),
              TL: [{
                   s: 9,
                   l: R.rbet(4, 16)
              }, {
                   s: 6.5,
                   l: R.rbet(6, 18)
              }, {
                   s: 5.5,
                   l: R.rbet(9, 18)
              }]
         },
         dgfynqzxinw: {
              H: {
                   s: R.rbet(6, 9),
                   l: R.rbet(2.5, 3),
                   a: R.rbet(-.1, .1)
              },
              E: commonEye,
              T: {
                   s: R.rbet(11, 13),
                   l: R.rbet(9, 13),
                   a: 0,
                   st: {
                        x: 0,
                        y: 12
                   }
              },
              N: {
                   s: R.rbet(5, 23),
                   a: R.rbet(.24 * -TAU, .2 * -TAU),
                   l: R.rbet(20, 15)
              },
              TH: {
                   l: 1.6 * legsLength,
                   s: 7,
                   a: .2 * TAU
              },
              C: {
                   l: .4 * legsLength,
                   s: 6,
                   a: .28 * TAU
              },
              F: {
                   s: 0,
                   l: 0,
                   a: .15 * TAU
              },
              TO: !1,
              A: {
                   s: 5,
                   l: .6 * legsLength,
                   a: .25 * TAU
              },
              FO: {
                   s: 5,
                   l: .5 * legsLength,
                   a: .22 * TAU
              },
              TA: .55 * -TAU,
              TL: [{
                   s: 8,
                   l: R.rbet(9, 12)
              }, {
                   s: 6,
                   l: R.rbet(6, 8)
              }, {
                   s: 4,
                   l: R.rbet(9, 12)
              }]
         },
         klxqng: {
              H: {
                   s: R.rbet(7.5, 10.5),
                   l: R.rbet(4, 19),
                   a: 0
              },
              E: commonEye,
              T: {
                   s: 12,
                   l: R.rbet(11, 20),
                   a: R.rbet(.05 * -TAU, .07 * TAU),
                   st: {
                        x: -2,
                        y: 0
                   }
              },
              N: {
                   s: R.rbet(5, 18),
                   a: .1 * -TAU,
                   l: R.rbet(11, 13)
              },
              TH: {
                   l: R.rbet(7, 8),
                   s: 8,
                   a: R.rbet(.13 * TAU, .18 * TAU)
              },
              C: {
                   l: R.rbet(6, 8),
                   s: 6,
                   a: .37 * TAU
              },
              F: {
                   s: 5.5,
                   l: R.rbet(5, 7),
                   a: .15 * TAU
              },
              TO: !0,
              A: {
                   s: 4,
                   l: 9,
                   a: .2 * TAU
              },
              FO: {
                   s: 3,
                   l: 5,
                   a: .02 * TAU
              },
              TA: .55 * TAU,
              TL: [{
                   s: 7,
                   l: 15
              }, {
                   s: 5,
                   l: 10
              }, {
                   s: 4,
                   l: 12
              }]
         },
         triceraape: {
              H: {
                   s: R.rbet(10, 14),
                   l: R.rbet(2, 4),
                   a: R.rbet(.2, .4)
              },
              E: commonEye,
              T: {
                   s: R.rbet(13, 15),
                   l: R.rbet(10, 12),
                   a: .12,
                   st: {
                        x: -5,
                        y: 2
                   }
              },
              N: {
                   s: 8,
                   a: .05 * -TAU,
                   l: R.rbet(7, 9)
              },
              TH: {
                   l: .5 * legsLength,
                   s: 7,
                   a: .2 * TAU
              },
              C: {
                   l: .5 * legsLength,
                   s: 6.5,
                   a: .28 * TAU
              },
              F: {
                   s: 0,
                   l: 0,
                   a: .15 * TAU
              },
              TO: !1,
              A: {
                   s: 5,
                   l: .5 * legsLength,
                   a: .25 * TAU
              },
              FO: {
                   s: 4.6,
                   l: .5 * legsLength,
                   a: .22 * TAU
              },
              TA: R.rbet(.55 * -TAU, .49 * -TAU),
              TL: [{
                   s: 10,
                   l: 2
              }, {
                   s: 7,
                   l: 6
              }, {
                   s: 4,
                   l: 8
              }]
         },
         szeguatlope: {
              H: {
                   s: R.rbet(7, 8),
                   l: R.rbet(3, 5),
                   a: R.rbet(.2, .4)
              },
              E: commonEye,
              T: {
                   s: R.rbet(13, 15),
                   l: R.rbet(10, 12),
                   a: -.12,
                   st: {
                        x: -5,
                        y: -4
                   }
              },
              N: {
                   s: 5,
                   a: .03 * -TAU,
                   l: R.rbet(2, 6)
              },
              TH: {
                   l: .5 * legsLength,
                   s: 4,
                   a: .2 * TAU
              },
              C: {
                   l: .4 * legsLength,
                   s: 6.5,
                   a: .28 * TAU
              },
              F: {
                   s: 0,
                   l: 0,
                   a: .15 * TAU
              },
              TO: !1,
              A: {
                   s: 5,
                   l: .5 * legsLength,
                   a: .25 * TAU
              },
              FO: {
                   s: 4.6,
                   l: .5 * legsLength,
                   a: .22 * TAU
              },
              TA: R.rbet(.5 * -TAU, .6 * -TAU),
              TL: [{
                   s: 8,
                   l: 8
              }, {
                   s: 7,
                   l: 6
              }, {
                   s: 4,
                   l: 8
              }]
         }
    },
    T = {
         ...PRE[DT].T,
         st: {
              x: 0,
              y: 0,
              ...PRE[DT].T.st
         }
    };
T.end = eC(T);
const N = {
    ...PRE[DT].N,
    st: {
         x: T.end.x + .1 * T.s,
         y: T.end.y - .1 * T.s
    }
};
N.end = eC(N);
const H = PRE[DT].H;
H.st = {
    x: N.end.x + .2 * H.s,
    y: N.end.y - .2 * H.s
}, H.end = eC(H);
const m = {
         diameter: R.rbet(1, 4),
         stroke: R.rbet(.5, .8)
    },
    E = PRE[DT].E;
E.co = {
    x: H.st.x,
    y: H.st.y + .5 * H.s * Math.sin(E.a),
    z: .5 * H.s * Math.cos(E.a)
};
const pupil = {
    s: .5 * E.s,
    co: {
         ...E.co,
         x: E.co.x + .4 * E.s
    }
};
let yStartOffset = "grumpy" === ebrType ? 1 : 0,
    yEndOffset = "gun" === ebrType ? 1 : 0;
const ebr = {
         s: .75,
         st: {
              x: E.co.x,
              y: E.co.y - E.s / 1.8 - yStartOffset,
              z: E.co.z - E.s / 3
         },
         end: {
              x: E.co.x,
              y: E.co.y - E.s / 1.8 - yEndOffset,
              z: E.co.z + E.s / 3
         }
    },
    anotherEyebrow = {
         ...ebr,
         st: {
              ...ebr.end,
              z: ebr.st.z - 2 * E.co.z
         },
         end: {
              ...ebr.st,
              z: ebr.end.z - 2 * E.co.z
         }
    },
    hip = {
         s: 10,
         st: {
              ...T.st,
              z: -2
         },
         end: {
              ...T.st,
              z: 2
         }
    },
    TH = {
         ...PRE[DT].TH,
         st: {
              ...T.st,
              z: hip.st.z + .65 * hip.s
         }
    };
TH.end = eC(TH), TH.end.z = hip.st.z + .65 * hip.s;
const C = {
    ...PRE[DT].C,
    st: {
         x: TH.end.x + .1 * TH.s,
         y: TH.end.y + .1 * TH.s,
         z: TH.end.z
    }
};
C.end = eC(C), C.end.z = TH.end.z;
const F = {
    ...PRE[DT].F,
    st: {
         x: C.end.x - .05 * C.s,
         y: C.end.y + .1 * C.s,
         z: C.end.z
    }
};
F.end = eC(F), F.end.z = C.end.z;
const toeMultiplier = R.rbet(.9, 1.2),
    TO = PRE[DT].TO ? [{
         s: 4 * toeMultiplier,
         co: {
              x: F.end.x + .5 * F.s,
              y: F.end.y + .3 * F.s,
              z: F.end.z
         }
    }, {
         s: 3 * toeMultiplier,
         co: {
              x: F.end.x + .2 * F.s,
              y: F.end.y + .3 * F.s,
              z: F.end.z + .5 * F.s
         }
    }, {
         s: 3 * toeMultiplier,
         co: {
              x: F.end.x + .2 * F.s,
              y: F.end.y + .3 * F.s,
              z: F.end.z - .5 * F.s
         }
    }] : [],
    A = {
         ...PRE[DT].A,
         st: {
              x: T.end.x,
              y: T.end.y,
              z: .5 * T.s
         }
    };
A.end = eC(A), A.end.z = .5 * T.s;
const FO = {
    ...PRE[DT].FO,
    st: {
         x: A.end.x,
         y: A.end.y,
         z: .5 * T.s
    }
};
FO.end = eC(FO), FO.end.z = .5 * T.s;
let TL = [];
TA = PRE[DT].TA, TL[0] = {
    ...PRE[DT].TL[0],
    a: TA,
    st: {
         x: T.st.x,
         y: T.st.y
    }
}, TL[0].end = eC(TL[0]), TL[1] = {
    ...PRE[DT].TL[1],
    a: TA,
    st: {
         x: TL[0].end.x,
         y: TL[0].end.y - .05 * TL[0].s
    }
}, TL[1].end = eC(TL[1]), TL[2] = {
    ...PRE[DT].TL[2],
    a: TA,
    st: {
         x: TL[1].end.x,
         y: TL[1].end.y - .05 * TL[1].s
    }
}, TL[2].end = eC(TL[2]), TL[2].bezier = [{
    x: TL[2].st.x - .2 * TL[2].s,
    y: TL[2].st.y - .2 * TL[2].s
}, {
    x: TL[2].end.x + .2 * TL[2].s,
    y: TL[2].end.y - .2 * TL[2].s
}];
const yRotation = R.rch([.1 * TAU, .4 * TAU]),
    anchor = new Zdog.Anchor({
         addTo: scene,
         rotate: {
              y: yRotation
         }
    });

function buildDino() {
    if (P(anchor, T, colors.d), TL.forEach(o => {
              P(anchor, o, colors.d, o.extra)
         }), P(anchor, hip, colors.d), P(anchor, N, colors.d), P(anchor, H, colors.p), ball(anchor, E, colors.l), ball(anchor, {
              ...E,
              co: {
                   ...E.co,
                   z: -E.co.z
              }
         }, colors.l), new Zdog.Hemisphere({
              addTo: anchor,
              diameter: 1.1 * E.s,
              stroke: !1,
              color: colors.p,
              translate: E.co,
              rotate: {
                   y: .25 * TAU
              }
         }).copy({
              translate: {
                   ...E.co,
                   z: -E.co.z
              }
         }), ball(anchor, pupil, eyeC), ball(anchor, {
              ...pupil,
              co: {
                   ...pupil.co,
                   z: -pupil.co.z
              }
         }, eyeC), "none" !== ebrType && (P(anchor, ebr, ebrsColor), P(anchor, anotherEyebrow, ebrsColor)), "snout" === mType) {
         const o = R.rbet(.8, 3),
              e = {
                   x: H.end.x + .2 * H.s,
                   y: H.end.y + .27 * H.s,
                   z: 0
              };
         P(anchor, {
              s: m.stroke,
              st: {
                   x: H.end.x + .2 * H.s,
                   y: H.end.y + .2 * H.s,
                   z: -o / 2
              },
              end: e
         }, colors.m), P(anchor, {
              s: m.stroke,
              st: {
                   x: H.end.x + .2 * H.s,
                   y: H.end.y + .2 * H.s,
                   z: o / 2
              },
              end: e
         }, colors.m)
    } else if ("bruh" === mType) {
         const o = R.rbet(.8, 3);
         P(anchor, {
              st: {
                   x: H.end.x + .2 * H.s,
                   y: H.end.y + .2 * H.s,
                   z: -o / 2
              },
              end: {
                   x: H.end.x + .2 * H.s,
                   y: H.end.y + .2 * H.s,
                   z: o / 2
              },
              s: m.stroke
         }, colors.m)
    } else "ooooooo" === mType ? new Zdog.Ellipse({
         addTo: anchor,
         diameter: 1.2,
         quarters: 4,
         stroke: m.stroke,
         color: colors.m,
         translate: {
              x: H.end.x + .2 * H.s,
              y: H.end.y + H.s * ("grumpy" === mType ? .3 : .2)
         },
         rotate: {
              x: "grumpy" == mType ? TAU / 2 : 0,
              y: TAU / 4,
              z: TAU / 4
         }
    }) : new Zdog.Ellipse({
         addTo: anchor,
         diameter: m.diameter,
         quarters: 2,
         stroke: m.stroke,
         color: colors.m,
         translate: {
              x: H.end.x + .2 * H.s,
              y: H.end.y + H.s * ("grumpy" === mType ? .3 : .2)
         },
         rotate: {
              x: "grumpy" == mType ? TAU / 2 : 0,
              y: TAU / 4,
              z: TAU / 4
         }
    });
    const o = new Zdog.Group({
         addTo: anchor
    });
    P(o, TH, colors.p), P(o, C, colors.p), P(o, F, colors.d), TO.forEach(e => {
         ball(o, e, colors.p)
    }), o.copyGraph({
         translate: {
              z: -2 * TH.st.z
         }
    });
    const e = new Zdog.Group({
         addTo: anchor
    });
    P(e, A, colors.p), P(e, FO, colors.p), e.copyGraph({
         translate: {
              z: -T.s
         }
    });
    const r = new Zdog.Anchor({
         addTo: scene,
         rotate: {
              y: yRotation,
              z: -.4
         }
    });
    if ("triceraape" === DT) {
         new Zdog.Polygon({
              addTo: r,
              radius: .4 * H.s,
              sides: 6,
              stroke: 8,
              color: colors.p,
              translate: {
                   x: H.st.x - .3 * H.s,
                   y: H.st.y
              },
              rotate: {
                   y: .25 * TAU
              }
         });
         const o = horn(r, {
              diameter: 3,
              length: 12,
              color: colors.l,
              translate: {
                   x: H.st.x,
                   y: H.st.y - 2,
                   z: .4 * -H.s
              },
              rotate: {
                   y: .25 * -TAU
              }
         });
         o.copy({
              translate: {
                   x: H.st.x,
                   y: H.st.y - 2,
                   z: .4 * H.s
              }
         }), o.copy({
              translate: {
                   x: H.st.x + .6 * H.s,
                   y: 7
              }
         })
    }
    if ("klxqng" === DT) {
         const o = new Zdog.Group({
                   addTo: anchor
              }),
              e = {
                   x: FO.end.x - FO.s / 3,
                   y: FO.end.y + FO.s / 2,
                   z: FO.end.z
              },
              r = new Zdog.Ellipse({
                   addTo: o,
                   diameter: 5,
                   quarters: 2,
                   stroke: 1.2,
                   color: colors.d,
                   rotate: {
                        z: .75
                   },
                   translate: e
              });
         r.copy({
              stroke: 1,
              translate: {
                   ...e,
                   z: FO.end.z + 1.2
              }
         }), r.copy({
              stroke: 1,
              translate: {
                   ...e,
                   z: FO.end.z - 1.2
              }
         }), o.copyGraph({
              translate: {
                   z: -2.7 * TH.st.z
              }
         })
    }
    if ("szeguatlope" === DT) {
         const o = new Zdog.Group({
                   addTo: anchor
              }),
              e = {
                   addTo: o,
                   radius: 1.8,
                   sides: 5,
                   stroke: 3,
                   color: finsColor
              },
              r = new Zdog.Polygon({
                   ...e,
                   translate: {
                        x: T.end.x,
                        y: T.end.y - .6 * T.s,
                        z: 2
                   },
                   rotate: {
                        z: .05 * TAU
                   }
              });
         r.copy({
              translate: {
                   x: T.end.x - 7,
                   y: T.end.y - .7 * T.s,
                   z: 2
              },
              rotate: {
                   z: 0
              },
              stroke: 3.5,
              radius: 2
         }), r.copy({
              translate: {
                   x: T.end.x - 14,
                   y: T.end.y - .6 * T.s,
                   z: 2
              },
              rotate: {
                   z: 2
              }
         }), r.copy({
              translate: {
                   x: T.st.x - 7,
                   y: T.st.y - 3.2,
                   z: 3
              },
              stroke: 2.3,
              radius: 1.5,
              rotate: {
                   z: -2
              }
         }), o.copyGraph({
              translate: {
                   z: -4
              }
         }), P(anchor, {
              st: {
                   x: TL[2].end.x,
                   y: TL[2].end.y - TL[2].s / 2,
                   z: -1
              },
              end: {
                   x: TL[2].end.x - .3,
                   y: TL[2].end.y - TL[2].s / 2 - .5,
                   z: -1
              },
              s: 1.5
         }, colors.l).copy({
              translate: {
                   z: 2
              }
         })
    }
}

function buildWorld() {
    const o = {
         co: {
              y: hip.st.y + TH.l * sin(TH.a) + C.l * sin(C.a) + F.l * sin(F.a) + 100
         },
         s: 200
    };
    ball(anchor, o, wCol.e);
    [{
         x: -.2 + R.rbet(-.1, .1),
         y: .1,
         z: -.2 + R.rbet(-.1, .1)
    }, {
         x: .2 + R.rbet(-.1, .1),
         y: .1,
         z: .2 + R.rbet(-.1, .1)
    }, {
         x: -.2 + R.rbet(-.1, .1),
         y: .1,
         z: .2 + R.rbet(-.1, .1)
    }, {
         x: .2 + R.rbet(-.1, .1),
         y: .1,
         z: -.2 + R.rbet(-.1, .1)
    }].forEach(e => {
         cloud(anchor, e, {
              y: o.co.y
         }, 200 / 1.9 + 40 + R.rbet(10, 15))
    })
}

function cloud(o, e, r, t) {
    const s = r.y - t * cos(e.y),
         n = ball(o, {
              co: {
                   x: t * sin(e.x),
                   y: s,
                   z: t * sin(e.z)
              },
              s: 10 + R.rbet(-1, 4)
         }, wCol.c);
    n.copy({
         translate: {
              x: t * sin(e.x - .04),
              y: s,
              z: t * sin(e.z)
         },
         stroke: 8 + R.rbet(-1, 2)
    }), n.copy({
         translate: {
              x: t * sin(e.x),
              y: s,
              z: t * sin(e.z + .04)
         },
         stroke: 8 + R.rbet(-1, 2)
    }), n.copy({
         translate: {
              x: t * sin(e.x + .04),
              y: s,
              z: t * sin(e.z + .04)
         },
         stroke: 8 + R.rbet(-1, 2)
    })
}

function horn(o, e) {
    return new Zdog.Cone({
         addTo: o,
         stroke: !1,
         ...e
    })
}

function ball(o, e, r) {
    return new Zdog.Shape({
         addTo: o,
         stroke: e.s,
         translate: e.co,
         color: r
    })
}

function P(o, e, r, t) {
    const s = [e.st];
    return e.bezier ? s.push({
         bezier: [...e.bezier, e.end]
    }) : s.push(e.end), new Zdog.Shape({
         addTo: o,
         stroke: e.s,
         path: s,
         color: r,
         ...t
    })
}

function eC(o) {
    return {
         x: o.st.x + o.l * cos(o.a),
         y: o.st.y + o.l * sin(o.a)
    }
}
buildDino(), buildWorld();
let ticker = 0;
const cycleCount = 150;

function animate() {
    if (ticker < 150) {
         const o = ticker / cycleCount;
         scene.rotate.y = -Zdog.easeInOut(o % 1, 3) * TAU, ticker++
    }
    scene.updateGraph(), render(), requestAnimationFrame(animate)
}

function render() {
    empty(svg), scene.renderGraphSvg(svg)
}

function empty(o) {
    for (; o.firstChild;) o.removeChild(o.firstChild)
}
let dragStartRX, dragStartRY;
animate(), new Zdog.Dragger({
    startElement: svg,
    onDragStart: function() {
         dragStartRX = scene.rotate.x, dragStartRY = scene.rotate.y
    },
    onDragMove: function(o, e, r) {
         rotateX = dragStartRX - r / SIZE * TAU, rotateY = dragStartRY - e / SIZE * TAU, rotateX > -1 && rotateX < 0 && (scene.rotate.x = rotateX), scene.rotate.y = rotateY
    }
});