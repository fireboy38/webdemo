jQuery.extend({
    easing: {
        backEaseIn: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            return f * (e /= 1) * e * ((b + 1) * e - b) + a
        },
        backEaseOut: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            return f * ((e = e / 1 - 1) * e * ((b + 1) * e + b) + 1) + a
        },
        backEaseInOut: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            if ((e /= 0.5) < 1) {
                return f / 2 * (e * e * (((b *= (1.525)) + 1) * e - b)) + a
            } else {
                return f / 2 * ((e -= 2) * e * (((b *= (1.525)) + 1) * e + b) + 2) + a
            }
        },
        bounceEaseIn: function(e, g, b, d) {
            var f = b + d;
            var a = this.bounceEaseOut(1 - e, 1, 0, d);
            return f - a + b
        },
        bounceEaseOut: function(d, f, a, b) {
            var e = a + b;
            if (d < (1 / 2.75)) {
                return e * (7.5625 * d * d) + a
            } else {
                if (d < (2 / 2.75)) {
                    return e * (7.5625 * (d -= (1.5 / 2.75)) * d + 0.75) + a
                } else {
                    if (d < (2.5 / 2.75)) {
                        return e * (7.5625 * (d -= (2.25 / 2.75)) * d + 0.9375) + a
                    } else {
                        return e * (7.5625 * (d -= (2.625 / 2.75)) * d + 0.984375) + a
                    }
                }
            }
        },
        circEaseIn: function(d, f, a, b) {
            var e = a + b;
            return - e * (Math.sqrt(1 - (d /= 1) * d) - 1) + a
        },
        circEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * Math.sqrt(1 - (d = d / 1 - 1) * d) + a
        },
        circEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return - e / 2 * (Math.sqrt(1 - d * d) - 1) + a
            } else {
                return e / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + a
            }
        },
        cubicEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d + a
        },
        cubicEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * ((d = d / 1 - 1) * d * d + 1) + a
        },
        cubicEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d + a
            } else {
                return e / 2 * ((d -= 2) * d * d + 2) + a
            }
        },
        elasticEaseIn: function(g, i, a, f) {
            var h = a + f;
            if (g == 0) {
                return a
            }
            if (g == 1) {
                return h
            }
            var e = 0.25;
            var d;
            var b = h;
            if (b < Math.abs(h)) {
                b = h;
                d = e / 4
            } else {
                d = e / (2 * Math.PI) * Math.asin(h / b)
            }
            return - (b * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * 1 - d) * (2 * Math.PI) / e)) + a
        },
        elasticEaseOut: function(g, i, a, f) {
            var h = a + f;
            if (g == 0) {
                return a
            }
            if (g == 1) {
                return h
            }
            var e = 0.25;
            var d;
            var b = h;
            if (b < Math.abs(h)) {
                b = h;
                d = e / 4
            } else {
                d = e / (2 * Math.PI) * Math.asin(h / b)
            }
            return - (b * Math.pow(2, -10 * g) * Math.sin((g * 1 - d) * (2 * Math.PI) / e)) + h
        },
        expoEaseIn: function(d, f, a, b) {
            var e = a + b;
            return (d == 0) ? a: e * Math.pow(2, 10 * (d - 1)) + a - e * 0.001
        },
        expoEaseOut: function(d, f, a, b) {
            var e = a + b;
            return (d == 1) ? e: b * 1.001 * ( - Math.pow(2, -10 * d) + 1) + a
        },
        expoEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if (d == 0) {
                return a
            }
            if (d == 1) {
                return e
            }
            if ((d /= 0.5) < 1) {
                return e / 2 * Math.pow(2, 10 * (d - 1)) + a - e * 0.0005
            } else {
                return e / 2 * 1.0005 * ( - Math.pow(2, -10 * --d) + 2) + a
            }
        },
        quadEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d + a
        },
        quadEaseOut: function(d, f, a, b) {
            var e = a + b;
            return - e * (d /= 1) * (d - 2) + a
        },
        quadEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d + a
            } else {
                return - e / 2 * ((--d) * (d - 2) - 1) + a
            }
        },
        quartEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d * d + a
        },
        quartEaseOut: function(d, f, a, b) {
            var e = a + b;
            return - e * ((d = d / 1 - 1) * d * d * d - 1) + a
        },
        quartEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d * d + a
            } else {
                return - e / 2 * ((d -= 2) * d * d * d - 2) + a
            }
        },
        quintEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d * d * d + a
        },
        quintEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * ((d = d / 1 - 1) * d * d * d * d + 1) + a
        },
        quintEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d * d * d + a
            } else {
                return e / 2 * ((d -= 2) * d * d * d * d + 2) + a
            }
        },
        sineEaseIn: function(d, f, a, b) {
            var e = a + b;
            return - e * Math.cos(d * (Math.PI / 2)) + e + a
        },
        sineEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * Math.sin(d * (Math.PI / 2)) + a
        },
        sineEaseInOut: function(d, f, a, b) {
            var e = a + b;
            return - e / 2 * (Math.cos(Math.PI * d) - 1) + a
        }
    }
}); (function(f) {
    var e = ["DOMMouseScroll", "mousewheel"];
    f.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var a = e.length; a;) {
                    this.addEventListener(e[--a], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = e.length; a;) {
                    this.removeEventListener(e[--a], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    f.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    });
    function d(b) {
        var h = [].slice.call(arguments, 1),
        a = 0,
        c = true;
        b = f.event.fix(b || window.event);
        b.type = "mousewheel";
        if (b.wheelDelta) {
            a = b.wheelDelta / 120
        }
        if (b.detail) {
            a = -b.detail / 3
        }
        h.unshift(b, a);
        return f.event.handle.apply(this, h)
    }
})(jQuery);
$(document).ready(function() {
    var G = numberOfScreens;
    for (var D = 1; D <= G; D++) {
        $("#name" + D).html(blockName[D])
    }
    if (hoverEffect) {
        for (D = 1; D <= G; D++) {
            $("<style>#wrapper" + D + " div:hover{border: 1px #fff solid;box-shadow: 0px 0px 5px #fff;margin-left:4px;margin-top:4px;}</style>").appendTo("head")
        }
    }
    if (searchEngine == "google") {
        search = "http://www.google.com/search"
    } else {
        if (searchEngine == "bing") {
            search = "http://www.bing.com/search"
        } else {
            if (searchEngine == "sogou") {
                search = "http://www.sogou.com/sogou"
            } else {
                search = "http://www.google.com/search";
                searchEngine = "google"
            }
        }
    }
    $("form").attr("action", search);
    $("input:text").css("background", "#fff url(lib/" + searchEngine + "-back.png) center right no-repeat");
    var E = $(window).width();
    var F = $(window).height();
    var y = Math.floor((E - 975) / 2);
    var x = y - 1045;
    var w = y - 2090;
    var v = y - 3135;
    var u = y - 4180;
    var t = y - 5225;
    var s = y - 6270;
    var r = y - 7315;
    var q = y - 8360;
    var K = Math.floor((F - 480) / 2) - 80;
    $("#place").css({
        left: y,
        top: K
    });
    var k = 1;
    $("#wrapper1 input:text").focus();
    var e = true;
    function c() {
        $("#wrapper1 input:text").focusout();
        e = false;
        $("#place").animate({
            left: x,

        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper2 input:text").focus();
            e = true;
            k = 2
        });
        $("#button1to2").hide();
        $("#button2to1").show();
        if (G > 2) {
            $("#button2to3").show();
            $("#button3to2").hide()
        }
    }
    function o() {
        $("#wrapper2 input:text").focusout();
        e = false;
        $("#place").animate({
            left: y
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper1 input:text").focus();
            e = true;
            k = 1
        });
        $("#button1to2").show();
        $("#button2to1").hide();
        if (G > 2) {
            $("#button2to3").hide();
            $("#button3to2").hide()
        }
    }
    function m() {
        $("#wrapper2 input:text").focusout();
        e = false;
        $("#place").animate({
            left: w
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper3 input:text").focus();
            e = true;
            k = 3
        });
        $("#button1to2").hide();
        $("#button3to2").show();
        $("#button2to1").hide();
        $("#button2to3").hide()
    }
    function J() {
        $("#wrapper3 input:text").focusout();
        e = false;
        $("#place").animate({
            left: x
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper2 input:text").focus();
            e = true;
            k = 2
        });
        $("#button1to2").hide();
        $("#button3to2").hide();
        $("#button2to1").show();
        $("#button2to3").show()
    }
    function H() {
        $("#wrapper3 input:text").focusout();
        e = false;
        $("#place").animate({
            left: v
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper4 input:text").focus();
            e = true;
            k = 4
        });
        $("#button2to3").hide();
        $("#button4to3").show();
        $("#button3to2").hide();
        $("#button3to4").hide()
    }
    function g() {
        $("#wrapper4 input:text").focusout();
        e = false;
        $("#place").animate({
            left: w
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper3 input:text").focus();
            e = true;
            k = 3
        });
        $("#button2to3").hide();
        $("#button4to3").hide();
        $("#button3to2").show();
        $("#button3to4").show()
    }
    function f() {
        $("#wrapper4 input:text").focusout();
        e = false;
        $("#place").animate({
            left: u
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper5 input:text").focus();
            e = true;
            k = 5
        });
        $("#button3to4").hide();
        $("#button5to4").show();
        $("#button4to3").hide();
        $("#button4to5").hide()
    }
    function A() {
        $("#wrapper5 input:text").focusout();
        e = false;
        $("#place").animate({
            left: v
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper4 input:text").focus();
            e = true;
            k = 4
        });
        $("#button3to4").hide();
        $("#button5to4").hide();
        $("#button4to3").show();
        $("#button4to5").show()
    }
    function z() {
        $("#wrapper5 input:text").focusout();
        e = false;
        $("#place").animate({
            left: t
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper6 input:text").focus();
            e = true;
            k = 6
        });
        $("#button4to5").hide();
        $("#button6to5").show();
        $("#button5to4").hide();
        $("#button5to6").hide()
    }
    function d() {
        $("#wrapper6 input:text").focusout();
        e = false;
        $("#place").animate({
            left: u
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper5 input:text").focus();
            e = true;
            k = 5
        });
        $("#button4to5").hide();
        $("#button6to5").hide();
        $("#button5to4").show();
        $("#button5to6").show()
    }
    function b() {
        $("#wrapper6 input:text").focusout();
        e = false;
        $("#place").animate({
            left: s
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper7 input:text").focus();
            e = true;
            k = 7
        });
        $("#button5to6").hide();
        $("#button7to6").show();
        $("#button6to5").hide();
        $("#button6to7").hide()
    }
    function n() {
        $("#wrapper7 input:text").focusout();
        e = false;
        $("#place").animate({
            left: t
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper6 input:text").focus();
            e = true;
            k = 6
        });
        $("#button5to6").hide();
        $("#button7to6").hide();
        $("#button6to5").show();
        $("#button6to7").show()
    }
    function l() {
        $("#wrapper7 input:text").focusout();
        e = false;
        $("#place").animate({
            left: r
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper8 input:text").focus();
            e = true;
            k = 8
        });
        $("#button6to7").hide();
        $("#button8to7").show();
        $("#button7to6").hide();
        $("#button7to8").hide()
    }
    function L() {
        $("#wrapper8 input:text").focusout();
        e = false;
        $("#place").animate({
            left: s
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper7 input:text").focus();
            e = true;
            k = 7
        });
        $("#button6to7").hide();
        $("#button8to7").hide();
        $("#button7to6").show();
        $("#button7to8").show()
    }
    function I() {
        $("#wrapper8 input:text").focusout();
        e = false;
        $("#place").animate({
            left: q
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper9 input:text").focus();
            e = true;
            k = 9
        });
        $("#button7to8").hide();
        $("#button9to8").show();
        $("#button8to7").hide();
        $("#button8to9").hide()
    }
    function h() {
        $("#wrapper9 input:text").focusout();
        e = false;
        $("#place").animate({
            left: r
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper8 input:text").focus();
            e = true;
            k = 8
        });
        $("#button7to8").hide();
        $("#button9to8").hide();
        $("#button8to7").show();
        $("#button8to9").show()
    }
    if (G > 1) {
        $("#button1to2").click(function() {
            c()
        });
        $("#button2to1").click(function() {
            o()
        });
        if (G > 2) {
            $("#button2to3").click(function() {
                m()
            });
            $("#button3to2").click(function() {
                J()
            });
            if (G > 3) {
                $("#button3to4").click(function() {
                    H()
                });
                $("#button4to3").click(function() {
                    g()
                });
                if (G > 4) {
                    $("#button4to5").click(function() {
                        f()
                    });
                    $("#button5to4").click(function() {
                        A()
                    });
                    if (G > 5) {
                        $("#button5to6").click(function() {
                            z()
                        });
                        $("#button6to5").click(function() {
                            d()
                        });
                        if (G > 6) {
                            $("#button6to7").click(function() {
                                b()
                            });
                            $("#button7to6").click(function() {
                                n()
                            });
                            if (G > 7) {
                                $("#button7to8").click(function() {
                                    l()
                                });
                                $("#button8to7").click(function() {
                                    L()
                                });
                                if (G > 8) {
                                    $("#button8to9").click(function() {
                                        I()
                                    });
                                    $("#button9to8").click(function() {
                                        h()
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    $(document).bind("keydown", 
    function(i) {
        if (i.keyCode == "39" || i.keyCode == "37") {
            i.preventDefault()
        }
        if (i.which == "39" && e) {
            if (k == 1 && G > 1) {
                c()
            }
            if (k == 2 && G > 2) {
                m()
            }
            if (k == 3 && G > 3) {
                H()
            }
            if (k == 4 && G > 4) {
                f()
            }
            if (k == 5 && G > 5) {
                z()
            }
            if (k == 6 && G > 6) {
                b()
            }
            if (k == 7 && G > 7) {
                l()
            }
            if (k == 8 && G > 8) {
                I()
            }
        }
        if (i.which == "37" && e) {
            if (k == 9) {
                h()
            }
            if (k == 8) {
                L()
            }
            if (k == 7) {
                n()
            }
            if (k == 6) {
                d()
            }
            if (k == 5) {
                A()
            }
            if (k == 4) {
                g()
            }
            if (k == 3) {
                J()
            }
            if (k == 2) {
                o()
            }
        }
    });
    $(document).mousewheel(function(i, j) {
        if (j > 0 && e) {
            if (k == 9) {
                h()
            }
            if (k == 8) {
                L()
            }
            if (k == 7) {
                n()
            }
            if (k == 6) {
                d()
            }
            if (k == 5) {
                A()
            }
            if (k == 4) {
                g()
            }
            if (k == 3) {
                J()
            }
            if (k == 2) {
                o()
            }
        } else {
            if (j < 0 && e) {
                if (k == 1 && G > 1) {
                    c()
                }
                if (k == 2 && G > 2) {
                    m()
                }
                if (k == 3 && G > 3) {
                    H()
                }
                if (k == 4 && G > 4) {
                    f()
                }
                if (k == 5 && G > 5) {
                    z()
                }
                if (k == 6 && G > 6) {
                    b()
                }
                if (k == 7 && G > 7) {
                    l()
                }
                if (k == 8 && G > 8) {
                    I()
                }
            }
        }
        i.preventDefault()
    });
    var C = 0;
    for (C = 0; C <= (G - 1); C++) {
        for (D = 0; D <= 11; D++) {
            var p = bookmark[C][D]["title"];
            var a = bookmark[C][D]["url"];
            var B = bookmark[C][D]["thumb"];
            if (B == "") {
                $("#thumb" + (C + 1) + "-" + (D + 1)).html('<img id="net" src="lib/net-back.png" /><a href="' + a + '" target="_blank"><div class="title">' + p + "</div></a>")
            } else {
                $("#thumb" + (C + 1) + "-" + (D + 1)).html('<a href="' + a + '" target="_blank"><img src="thumbs/' + B + '" /></a>')
            }
        }
    }
    $("#search-engine1").click(function() {
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff")
    });
    $("#google1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.google.com/search");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
        $("#wrapper1 input:hidden").detach();
        $("#wrapper1 input:first").attr("name", "q");
        $("#wrapper1 input:text").focus()
    });
    $("#bing1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.bing.com/search");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
        $("#wrapper1 input:hidden").detach();
        $("#wrapper1 input:first").attr("name", "q");
        $("#wrapper1 input:text").focus()
    });
    $("#sogou1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.sogou.com/sogou");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
        $("#wrapper1 input:hidden").detach();
        $("#wrapper1 input:first").attr("name", "query");
	$('<input type="hidden" name="pid" value="sogou-netb-51be2fed6c55f5aa-7224" />').appendTo("#wrapper1 form");
        $("#wrapper1 input:text").focus()
    });
    $("#baidu1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.baidu.com/s");
        $("#wrapper1 input:first").attr("name", "wd");
        $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper1 form");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
        $("#wrapper1 input:text").focus()
    });
    if (G > 1) {
        $("#search-engine2").click(function() {
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff")
        });
        $("#google2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.google.com/search");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper2 input:hidden").detach();
            $("#wrapper2 input:first").attr("name", "q");
            $("#wrapper2 input:text").focus()
        });
        $("#bing2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.bing.com/search");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper2 input:hidden").detach();
            $("#wrapper2 input:first").attr("name", "q");
            $("#wrapper2 input:text").focus()
        });
        $("#sogou2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.sogou.com/sogou");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper2 input:hidden").detach();
            $("#wrapper2 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-51be2fed6c55f5aa-7224" />').appendTo("#wrapper2 form");
            $("#wrapper2 input:text").focus()
        });
        $("#baidu2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper2 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper2 form");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper2 input:text").focus()
        })
    }


    if (G < 2) {
        $("#name2").detach();
        $("#wrapper2").detach();
        $("#button1to2").detach();
        $("#button2to1").detach()
    }
});
var hoverEffect = true;
var searchEngine = "sogou";
var numberOfScreens = 1;
var blockName = new Array();
blockName[1] = "自贡市教育云平台综合管理业务导航";

var bookmark = new Array();
bookmark[0] = new Array();

bookmark[0][0] = {
    title: "BlueValley Cache",
    url: "https://10.0.0.4/login.html",
    thumb: "redianhuancun.png"
};
bookmark[0][1] = {
    title: "H3C审计安全管理中心",
    url: "http://10.0.0.3/SecCenter/",
    thumb: "h3cshenji.png"
};
bookmark[0][2] = {
    title: "备份软件",
    url: "http://10.0.1.9/webapp",
    thumb: "beifen.png"
};
bookmark[0][3] = {
    title: "杀毒软件",
    url: "http://www.360.cn",
    thumb: "shadu.png"
};
bookmark[0][4] = {
    title: "网动统一通信平台",
    url: "http://10.1.12.242:8080/acenter/index.action",
    thumb: "wangdong.png"
};
bookmark[0][5] = {
    title: "自贡教育运维中心",
    url: "http://10.0.1.242",
    thumb: "yunweizhongxin.png"
};
bookmark[0][6] = {
    title: "h3ccas云计算管理平台",
    url: "http://10.0.1.2:8080/cas",
    thumb: "h3ccas.png"
};
bookmark[0][7] = {
    title: "H3CIMC智能管理中心",
    url: "http://10.0.0.2:8080/imc/",
    thumb: "h3cimc1.png"
};
bookmark[0][8] = {
    title: "H3CIMC用户自助服务中心",
    url: "http://10.0.0.2:8080/selfservice/login.jsf",
    thumb: "h3cimc2.png"
};
bookmark[0][9] = {
    title: "易云虚拟化管理平台",
    url: "http://10.0.1.50/ovirt-engine/",
    thumb: "yiyun.png"
};
bookmark[0][10] = {
    title: "校园监控综合管理平台",
    url: "http://10.0.1.152",
    thumb: "jiankong.png"
};
bookmark[0][11] = {
    title: "消防检测中心",
    url: "http://150.30.0.56/admin/",
    thumb: "xiaofang.png"
};