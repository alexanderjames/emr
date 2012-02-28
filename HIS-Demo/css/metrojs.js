﻿/// <reference path="jquery-1.5.1-vsdoc.js" />
/*
* Metro JS for jQuery
* http://drewgreenwell.com/
* Copyright 2012, Drew Greenwell
* For details and usage info see: http://drewgreenwell.com/projects/metrojs
*/
$.fn.liveTile = function (options) {

    /* Setup the public options for the livetile  */
    var defaults = {
        mode: 'slide',                          // 'slide', 'flip', 'flip-list'
        speed: 500,                             // how fast should animations be performed, in milliseconds
        initDelay: 5000,                        // how long to wait before the initial animation
        delay: 5000,                            // how long to wait between animations
        stops: "100%",                          // how much of the back tile should 'slide' reveal before starting a delay
        stack: false,                           // should tiles in slide mode appear stacked (e.g Me tile) 
        direction: 'vertical',                  // which direction should animations be performed(horizontal | vertical)
        tileCssSelector: '>div,>li',            // The selector used by slide, flip, and flip-list mode to choose the front and back containers
        listTileCssSelector: '>div,>p,>img,>a', // The selector used by flip-tile mode to choose the front and back containers.
        imageCssSelector: '>img,>a>img',        // the selector used to choose a an image to apply a src or background to
        ignoreDataAttributes: false,            // should data attributes be ignored
        pauseOnHover: true,                     // should tile animations be paused on hover in and restarted on hover out
        preloadImages: false,                   // should the images arrays be preloaded
        fadeSlideSwap: false,                   // fade any image swaps on slides (e.g. mode: 'slide', stops:'50%', frontImages: ['img1.jpg', 'img2.jpg'])
        appendBack: true,                       // appends the .last tile if one doesnt exist (slide and flip only)
        triggerDelay: function (idx) {          // used by flip-list to decide how random the tile flipping should be
            return Math.random() * 3000;
        },
        alwaysTrigger: false,                   // used by flip-list to decide if all tiles are triggered every time
        frontImages: null,                      // a list of images to use for the front
        frontIsRandom: true,                    // should images be chosen at random or in order
        frontIsBackgroundImage: false,          // set the src attribute or css background-image property
        frontIsInGrid: false,                   // only chooses one item for each iteration in flip-list
        backImages: null,                       // a list of images to use for the back
        backIsRandom: true,                     // should images be chosen at random or in order
        backIsBackgroundImage: false,           // set the src attribute or css background-image property
        backIsInInGrid: false,                  // only chooses one item for each iteration in flip-list
        flipListOnHover: false,                 // should items in flip-list flip and stop when hovered
        useModernizr: (typeof (window.Modernizr) != "undefined"), // checks to see if modernizer is already in use
        useHardwareAccel: true                  // should css animations, transitions and transforms be used when available
    };
    var stgs = $.extend(defaults, options);
    //is there at least one item in the front images list
    var swapFrontSource = (typeof (stgs.frontImages) == 'object' && (stgs.frontImages instanceof Array) && stgs.frontImages.length > 0);
    //is there at least one item in the back images list
    var swapBackSource = (typeof (stgs.backImages) == 'object' && (stgs.backImages instanceof Array) && stgs.backImages.length > 0);
    var canTransform = false;
    var canTransition = false;
    var canTransform3d = false;
    var canAnimate = false;
    var canFlip3d = stgs.useHardwareAccel;
    if (stgs.useHardwareAccel == true) {
        if (stgs.useModernizr == false) {
            if (typeof (window.MetroModernizr) != "undefined") {
                canTransform = window.MetroModernizr.canTransform;
                canTransition = window.MetroModernizr.canTransition;
                canTransform3d = window.MetroModernizr.canTransform3d;
                canAnimate = window.MetroModernizr.canAnimate;
            } else {
                window.MetroModernizr = {};
                /***** check for browser capabilities credit: modernizr-1.7 *****/
                var mod = 'metromodernizr';
                var docElement = document.documentElement;
                var docHead = document.head || document.getElementsByTagName('head')[0];
                var modElem = document.createElement(mod);
                var m_style = modElem.style;
                var prefixes = ' -webkit- -moz- -o- -ms- -khtml- '.split(' ');
                var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
                var test_props = function (props, callback) {
                    for (var i in props) {
                        if (m_style[props[i]] !== undefined && (!callback || callback(props[i], modElem))) {
                            return true;
                        }
                    }
                };
                var test_props_all = function (prop, callback) {

                    var uc_prop = prop.charAt(0).toUpperCase() + prop.substr(1),
                    props = (prop + ' ' + domPrefixes.join(uc_prop + ' ') + uc_prop).split(' ');

                    return !!test_props(props, callback);
                };
                var test_3d = function () {
                    var ret = !!test_props(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']);
                    if (ret && 'webkitPerspective' in docElement.style) {
                        // Webkit allows this media query to succeed only if the feature is enabled.    
                        // `@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d),(modernizr){ ... }`    
                        ret = testMediaQuery('@media (' + prefixes.join('transform-3d),(') + 'metromodernizr)');
                    }
                    return ret;
                };
                var testMediaQuery = function (mq) {
                    var st = document.createElement('style'),
                        div = document.createElement('div'),
                        ret;
                    st.textContent = mq + '{#metromodernizr{height:3px}}';
                    docHead.appendChild(st);
                    div.id = 'metromodernizr';
                    docElement.appendChild(div);
                    ret = div.offsetHeight === 3;
                    st.parentNode.removeChild(st);
                    div.parentNode.removeChild(div);
                    return !!ret;
                };
                canTransform = !!test_props(['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']);
                canTransition = test_props_all('transitionProperty');
                canTransform3d = test_3d();
                canAnimate = test_props_all('animationName');
                window.MetroModernizr.canTransform = canTransform;
                window.MetroModernizr.canTransition = canTransition;
                window.MetroModernizr.canTransform3d = canTransform3d;
                window.MetroModernizr.canAnimate = canAnimate;
                docElement = null;
                docHead = null;
                modElem = null;
                m_style = null;
            }
        } else {
            canTransform = $("html").hasClass("csstransforms");
            canTransition = $("html").hasClass("csstransitions");
            canTransform3d = $("html").hasClass("csstransforms3d");
            canAnimate = $("html").hasClass("cssanimations");
        }
    }
    canFlip3d = canFlip3d && canAnimate && canTransform && canTransform3d;
    /****** end capabilities check ******/
    if (stgs.preloadImages) {
        if (swapFrontSource)
            $(stgs.frontImages).preloadImages(function () { });
        if (swapBackSource)
            $(stgs.backImages).preloadImages(function () { });
    }
    $(this).each(function () {
        var $this = $(this);
        var speed = (!stgs.ignoreDataAttributes && typeof ($this.data("speed")) != "undefined") ? $this.data("speed") : stgs.speed;
        var delay = (!stgs.ignoreDataAttributes && typeof ($this.data("delay")) != "undefined") ? $this.data("delay") : stgs.delay;
        var stops = (!stgs.ignoreDataAttributes && typeof ($this.data("stops")) != "undefined") ? $this.data("stops") : stgs.stops;
        var stack = (!stgs.ignoreDataAttributes && typeof ($this.data("stack")) != "undefined") ? $this.data("stack") : stgs.mode;
        var mode = (!stgs.ignoreDataAttributes && typeof ($this.data("mode")) != "undefined") ? $this.data("mode") : stgs.mode;
        var direction = (!stgs.ignoreDataAttributes && typeof ($this.data("direction")) != "undefined") ? $this.data("direction") : stgs.direction;
        var useHwAccel = (!stgs.ignoreDataAttributes && typeof ($this.data("ha")) != "undefined") ? $this.data("ha") : stgs.useHardwareAccel;
        var initDelay = (!stgs.ignoreDataAttributes && typeof ($this.data("initdelay")) != "undefined") ? $this.data("initdelay") : stgs.initDelay;
        var hasRun = false; // init delay flag
        //convert stops if needed
        stops = (typeof (stgs.stops) == 'object' && (stgs.stops instanceof Array)) ? stgs.stops : ('' + stops).split(',');
        //add the mode to the tile if it's not already there.
        $this.addClass(mode);
        var $tileContainer = $this.find(stgs.tileCssSelector);
        var $firstContainer = (mode == "flip-list") ? null : (mode == 'slide') ?
                                    $tileContainer.first().addClass('slide-front') :
                                    $tileContainer.first().addClass('flip-front');
        var lClass = (mode == 'slide') ? 'slide-back' : 'flip-back';
        var $scndContainer = (mode == "flip-list") ? null : ($tileContainer.length > 1) ?
                                $tileContainer.last().addClass(lClass) :
                                (stgs.appendBack == true) ?
                                $('<div class="' + lClass + '"></div>').appendTo($this) :
                                $('<div></div>');
        var height = $this.height();
        var width = $this.width();
        var margin = (direction == "vertical") ? height / 2 : width / 2;
        var slidingUp = false;
        var slideIndex = 0;
        var staticCount = 0;
        /* Mouse over and out functions*/
        if (stgs.pauseOnHover) {
            $this.find(stgs.tileCssSelector).hover(
			function () {
			    $this.stopTimer(false);
			},
            function () {
                $this.setTimer();
            });
        }
        // prep tiles
        if (mode == 'flip-list') {
            $this.find(stgs.tileCssSelector).each(function () {
                var $li = $(this);
                var $front = $li.find(stgs.listTileCssSelector).first().addClass("flip-front");
                if ($li.find(stgs.listTileCssSelector).length == 1 && stgs.appendBack == true) {
                    $li.append("<div></div>");
                }
                var $back = $li.find(stgs.listTileCssSelector).last().addClass("flip-back").css({ marginTop: "0px" });
                if (canFlip3d && useHwAccel) {
                    $li.addClass("ha");
                    $front.addClass("ha").data("tile", { animating: false });
                    $back.addClass("ha").data("tile", { animating: false });
                    if (stgs.flipListOnHover == true) {
                        $front.hover(null, function () {
                            $this.flipListItem($li, $back, $front);
                        });
                        $back.hover(null, function () {
                            $this.flipListItem($li, $front, $back);
                        });
                    }
                } else {
                    if (stgs.flipListOnHover == true) {
                        $front.hover(null, function () {

                            $this.flipListItem($li, $front, $back);
                        });
                        $back.hover(null, function () {
                            $this.flipListItem($li, $back, $front);
                        });
                    }
                }
            });
        } else if (mode == 'slide') {
            if (stack == true) {
                if (direction == "vertical") {
                    $scndContainer.css({ top: -height + 'px' });
                } else {
                    $scndContainer.css({ left: -width + 'px' });
                }
            }
            if (canTransition && useHwAccel) {
                $this.addClass("ha");
                $firstContainer.addClass("ha").data("tile", { animating: false });
            }
        } else if (mode == 'flip') {
            if (canFlip3d && useHwAccel) {
                $this.addClass("ha");
                $firstContainer.addClass("ha").data("tile", { animating: false });
                $scndContainer.addClass("ha").data("tile", { animating: false });
            }
        }

        $this.handleSlide = function (isSlidingUp) {
            if (!isSlidingUp && swapFrontSource) {
                var image;
                var $img = $firstContainer.find(stgs.imageCssSelector);
                if (stgs.frontIsRandom == true) {
                    //get random front image
                    var rIdx = Math.floor(Math.random() * stgs.frontImages.length);
                    image = stgs.frontImages[rIdx];
                } else {
                    //get next image
                    image = stgs.frontImages[staticCount];
                    staticCount += 1;
                    if (staticCount >= stgs.frontImages.length)
                        staticCount = 0;
                }
                if (stgs.fadeSlideSwap == true) {
                    $img.fadeOut(function () {
                        $img.attr("src", image.src);
                        $this.setExtraProperties($img, image);
                        $img.fadeIn();
                    });
                } else {
                    $img.attr("src", image.src);
                    $this.setExtraProperties($img, image);
                }
            }

        };
        //slide animation
        $this.slide = function () {
            var clojSlidingUp = slidingUp;
            var stop = $.trim(stops[slideIndex]);
            var pxIdx = stop.indexOf('px');
            var offset = 0;
            var amount = 0
            var metric = (direction == "vertical") ? height : width;
            var prop = (direction == "vertical") ? "top" : "left";
            if (pxIdx > 0) {
                amount = parseInt(stop.substring(0, pxIdx));
                offset = (amount - metric) + 'px';
            } else {
                //is a percentage
                amount = parseInt(stop.replace('%', ''));
                offset = (amount - 100) + '%';
            }
            if (canTransition && useHwAccel) {
                if ($firstContainer.data("tile").animated == true)
                    return;
                var data = $firstContainer.data("tile");
                data.animated = true;
                var css = {
                    WebkitTransitionProperty: prop, WebkitTransitionDuration: speed + 'ms',
                    MozTransitionProperty: prop, MozTransitionDuration: speed + 'ms',
                    OTransitionProperty: prop, OTransitionDuration: speed + 'ms',
                    msTransitionProperty: prop, msTransitionDuration: speed + 'ms',
                    KhtmlTransitionProperty: prop, KhtmlTransitionDuration: speed + 'ms',
                    TransitionProperty: prop, TransitionDuration: speed + 'ms'
                };
                if (direction == "vertical") {
                    css.top = (slidingUp && stops.length == 1) ? "0px" : stop;
                } else {
                    css.left = (slidingUp && stops.length == 1) ? "0px" : stop;
                }
                $firstContainer.css(css).data("tile", data);
                if (stack == true) {
                    if (direction == "vertical") {
                        css.top = (slidingUp && stops.length == 1) ? -metric + 'px' : offset;
                    } else {
                        css.left = (slidingUp && stops.length == 1) ? -metric + 'px' : offset;
                    }
                    $scndContainer.css(css);
                }
                window.setTimeout(function () {
                    data.animated = false;
                    $firstContainer.data("tile", data);
                    $this.handleSlide(clojSlidingUp);
                }, speed);
            } else {
                if ($firstContainer.is(':animated')) {
                    return;
                }
                var uCss = (direction == "vertical") ?
                                    { top: (slidingUp && stops.length == 1) ? "0px" : stop} :
                                    { left: (slidingUp && stops.length == 1) ? "0px" : stop };
                var dCss = (direction == "vertical") ?
                                    { top: (slidingUp && stops.length == 1) ? -metric + 'px' : offset} :
                                    { left: (slidingUp && stops.length == 1) ? -metric + 'px' : offset };

                $firstContainer.animate(uCss, speed, function () {
                    $this.handleSlide(clojSlidingUp);
                });
                if (stack == true) {
                    $scndContainer.animate(dCss, speed, function () { });
                }
            }
            //increment slide count
            slideIndex += 1;
            if (slideIndex >= stops.length) {
                slideIndex = 0;
                slidingUp = !slidingUp;
            }

        };
        // get an image from the frontImages or backImages array
        $this.getImage = function (isFront) {
            var isRandom = (isFront) ? stgs.frontIsRandom : stgs.backIsRandom;
            var imgs = (isFront) ? stgs.frontImages : stgs.backImages;
            var rIdx = Math.floor(Math.random() * imgs.length);
            var bag = {};
            var image;
            if (isRandom) {
                var limit = 0;
                while (typeof (bag[rIdx]) != "undefined") {
                    rIdx = Math.floor(Math.random() * imgs.length);
                    if (limit > 4)
                        break;
                    limit += 1;
                }
                image = imgs[rIdx];
                bag[rIdx] = image;
            }
            else {
                image = imgs[Math.min(idx, imgs.length)];
            }
            return image;
        };
        // fired if an image swap is needed. gets the image and applies properties
        $this.handleSwap = function ($cont, isFront) {
            var image = $this.getImage(isFront);
            var $img = $cont.find(stgs.imageCssSelector);
            $img.attr("src", image.src);
            $this.setExtraProperties($img, image);
        };
        //flip mode
        $this.flip = function () {
            if (canFlip3d && useHwAccel) {
                var spd = (speed * 2); // accelerated flip speeds are calculated on 1/2 rotation rather than 1/4 rotation like jQuery animate
                var duration = spd + 'ms';
                var aniFName = (direction == "vertical") ? 'flipfront180' : 'flipfrontY180';
                var aniBName = (direction == "vertical") ? 'flipback180' : 'flipbackY180';
                if ($firstContainer.data("tile").animated == true) {
                    return;
                }
                var data = $firstContainer.data("tile");
                data.animated = true;
                if (slidingUp) {
                    var uCss = {
                        WebkitAnimationPlayState: 'running', WebkitAnimationName: aniBName, WebkitAnimationDuration: duration,
                        MozAnimationPlayState: 'running', MozAnimationName: aniBName, MozAnimationDuration: duration,
                        OAnimationPlayState: 'running', OAnimationName: aniBName, OAnimationDuration: duration,
                        msAnimationPlayState: 'running', msAnimationName: aniBName, msAnimationDuration: duration,
                        AnimationPlayState: 'running', AnimationName: aniBName, AnimationDuration: duration
                    };
                    $firstContainer.css(uCss).data("tile", data);
                    uCss.WebkitAnimationName = aniFName;
                    uCss.MozAnimationName = aniFName;
                    uCss.msAnimationName = aniFName;
                    uCss.OAnimationName = aniFName;
                    uCss.AnimationName = aniFName;
                    $scndContainer.css(uCss).data("tile", data);
                    window.setTimeout(function () {
                        if (swapBackSource) // change the source image when the animation is finished
                            $this.handleSwap($scndContainer, false);
                        data.animated = false;
                        $firstContainer.data("tile", data);
                        $scndContainer.data("tile", data);
                    }, spd);
                } else {
                    var dCss = { WebkitAnimationPlayState: 'running', WebkitAnimationName: aniFName, WebkitAnimationDuration: duration,
                        MozAnimationPlayState: 'running', MozAnimationName: aniFName, MozAnimationDuration: duration,
                        OAnimationPlayState: 'running', OAnimationName: aniFName, OAnimationDuration: duration,
                        msAnimationPlayState: 'running', msAnimationName: aniFName, msAnimationDuration: duration,
                        AnimationPlayState: 'running', AnimationName: aniFName, AnimationDuration: duration
                    };
                    $firstContainer.css(dCss).data("tile", data);
                    dCss.WebkitAnimationName = aniBName;
                    dCss.MozAnimationName = aniBName;
                    dCss.msAnimationName = aniBName;
                    dCss.OAnimationName = aniBName;
                    dCss.AnimationName = aniBName;
                    $scndContainer.css(dCss).data("tile", data);
                    window.setTimeout(function () {
                        if (swapFrontSource) // change the source image when the animation is finished
                            $this.handleSwap($firstContainer, true);
                        data.animated = false;
                        $firstContainer.data("tile", data);
                        $scndContainer.data("tile", data);
                    }, spd);
                }
                //an interval isnt needed
                slidingUp = !slidingUp;
            } else {
                //crossbrowser single tile flip illusion (works best with images)
                if (slidingUp) {
                    var upCss = (direction == "vertical") ?
                               { height: '0px', width: width + 'px', marginTop: margin + 'px', opacity: '0'} :
                               { height: height + 'px', width: '0px', marginLeft: margin + 'px', opacity: '0' };
                    var upCss2 = (direction == "vertical") ?
                                { height: height + 'px', width: width + 'px', marginTop: '0px', opacity: '1'} :
                                { height: height + 'px', width: width + 'px', marginLeft: '0px', opacity: '1' };

                    $firstContainer.stop().animate(upCss, { duration: speed });
                    window.setTimeout(function () {
                        $scndContainer.stop().animate(upCss2, { duration: speed });
                        if (swapFrontSource)
                            $this.handleSwap($firstContainer, true);
                        slidingUp = !slidingUp;
                    }, speed);
                } else {
                    var dwnCss = (direction == "vertical") ?
                               { height: '0px', width: width + 'px', marginTop: margin + 'px', opacity: '0'} :
                               { height: height, width: '0px', marginLeft: margin + 'px', opacity: '0' };
                    var dwnCss2 = (direction == "vertical") ?
                                { height: height + 'px', width: width + 'px', marginTop: '0px', opacity: '1'} :
                                { height: height + 'px', width: width + 'px', marginLeft: '0px', opacity: '1' };
                    $scndContainer.stop().animate(dwnCss, { duration: speed });
                    window.setTimeout(function () {
                        $firstContainer.stop().animate(dwnCss2, { duration: speed });
                        if (swapBackSource)
                            $this.handleSwap($scndContainer, false);
                        slidingUp = !slidingUp;
                    }, speed);
                }
            }
        };
        // flip arbitrary number of items and swap sources accordingly
        $this.flipList = function () {
            var fBag = {};  // two bags to make sure we don't duplicate images
            var bBag = {};
            //in case we want to pick one image per loop
            var fStaticRndm = (swapFrontSource) ? Math.floor(Math.random() * stgs.frontImages.length) : 0;
            var bStaticRndm = (swapBackSource) ? Math.floor(Math.random() * stgs.backImages.length) : 0;
            $this.find(stgs.tileCssSelector).each(function (idx) {
                var $t = $(this);
                var $front = $t.find(stgs.listTileCssSelector).first();
                var $back = $t.find(stgs.listTileCssSelector).last();
                var tDelay = stgs.triggerDelay(idx);
                var triggerSpeed = (tDelay > 0) ? (speed) + tDelay : speed;
                var trigger = (stgs.alwaysTrigger == false) ? (Math.random() * 351) > 150 ? true : false : true;
                if (slidingUp) {
                    if (trigger) {
                        window.setTimeout(function () {
                            if (!swapFrontSource) {
                                $this.flipListItem($t, $front, $back);
                            } else {
                                var rIdx = 0;
                                var image;
                                var isRandom = canFlip3d && useHwAccel ? stgs.backIsRandom : stgs.frontIsRandom;
                                var isInGrid = canFlip3d && useHwAccel ? stgs.backIsInGrid : stgs.frontIsInGrid;
                                var isBground = canFlip3d && useHwAccel ? stgs.backIsBackgroundImage : stgs.frontIsBackgroundImage;
                                var frontImages = canFlip3d && useHwAccel ? stgs.backImages : stgs.frontImages;
                                if (isRandom) {
                                    var limit = 0;
                                    while (typeof (fBag[rIdx]) != "undefined" || limit < 4) {
                                        rIdx = Math.floor(Math.random() * frontImages.length);
                                        limit += 1;
                                    }
                                    image = frontImages[rIdx];
                                    fBag[rIdx] = image;
                                } else {
                                    if (!isInGrid) {
                                        image = frontImages[Math.min(idx, frontImages.length)];
                                    } else {
                                        image = frontImages[Math.min(fStaticRndm, frontImages.length)];
                                    }
                                }
                                $this.flipListItem($t, $front, $back, image, isBground);
                            }
                        }, triggerSpeed);
                    }
                } else {
                    if (trigger) {
                        window.setTimeout(function () {
                            if (!swapBackSource) {
                                $this.flipListItem($t, $back, $front);
                            } else {
                                var rIdx = 0;
                                var image;
                                var isRandom = canFlip3d ? stgs.frontIsRandom : stgs.backIsRandom;
                                var isInGrid = canFlip3d ? stgs.frontIsInGrid : stgs.backIsInGrid;
                                var isBground = canFlip3d ? stgs.frontIsBackgroundImage : stgs.backIsBackgroundImage;
                                var backImages = canFlip3d ? stgs.frontImages : stgs.backImages;
                                if (isRandom) {
                                    var limit = 0;
                                    while (typeof (bBag[rIdx]) != "undefined" || limit < 4) {
                                        rIdx = Math.floor(Math.random() * backImages.length);
                                        limit += 1;
                                    }
                                    image = backImages[rIdx];
                                    bBag[rIdx] = image;
                                } else {
                                    if (!isInGrid) {
                                        image = backImages[Math.min(idx, backImages.length)];
                                    } else {
                                        image = backImages[Math.min(bStaticRndm, backImages.length)];
                                    }
                                }
                                $this.flipListItem($t, $back, $front, image, isBground);
                            }
                        }, triggerSpeed);
                    }
                }
            });
            window.setTimeout(function () {
                slidingUp = !slidingUp;
            }, speed);

        };
        // changes the src or background image property of an image in a flip-list
        $this.handleListItemSwap = function ($cont, image, isBgroundImg) {
            var $img = $cont.find(stgs.imageCssSelector);
            if (!isBgroundImg) {
                $img.attr("src", image.src);
            } else {
                $img.css({ backgroundImage: "url('" + image.src + "')" });
            }
            $this.setExtraProperties($img, image);
        };

        //does the animation of a flip list item 
        $this.flipListItem = function ($itm, $front, $back, newSrc, isBgroundImg) {
            var dir = (!stgs.ignoreDataAttributes && typeof ($itm.data("direction")) != "undefined") ? $itm.data("direction") : direction;
            if (canFlip3d && useHwAccel) {
                // avoid any z-index flickering from reversing an animation too early                
                if ($front.data("tile").animating == true) {
                    return;
                }
                var data = $front.data("tile");
                var spd = (speed * 2);
                var duration = spd + 'ms';
                var aniFName = (dir == "vertical") ? 'flipfront180' : 'flipfrontY180';
                var aniBName = (dir == "vertical") ? 'flipback180' : 'flipbackY180';
                var fCss = {
                    WebkitAnimationPlayState: 'running', WebkitAnimationName: aniBName, WebkitAnimationDuration: duration,
                    MozAnimationPlayState: 'running', MozAnimationName: aniBName, MozAnimationDuration: duration,
                    msAnimationPlayState: 'running', msAnimationName: aniBName, msAnimationDuration: duration,
                    OAnimationPlayState: 'running', OAnimationName: aniBName, OAnimationDuration: duration,
                    AnimationPlayState: 'running', AnimationName: aniBName, AnimationDuration: duration
                };
                var bCss = {
                    WebkitAnimationPlayState: 'running', WebkitAnimationName: aniFName, WebkitAnimationDuration: duration,
                    MozAnimationPlayState: 'running', MozAnimationName: aniFName, MozAnimationDuration: duration,
                    msAnimationPlayState: 'running', msAnimationName: aniFName, msAnimationDuration: duration,
                    OAnimationPlayState: 'running', OAnimationName: aniFName, OAnimationDuration: duration,
                    AnimationPlayState: 'running', AnimationName: aniFName, AnimationDuration: duration
                };
                $front.css(fCss).data("tile", { animating: true });
                $back.css(bCss).data("tile", { animating: true });
                window.setTimeout(function () {
                    if (typeof (newSrc) != "undefined") {
                        $this.handleListItemSwap($back, newSrc, isBgroundImg);
                    }
                    data.animating = false;
                    $front.data("tile", data);
                    $back.data("tile", data);
                }, speed); // once the animation is half through it can be reversed

            } else {
                var margin = (dir == "vertical") ? $itm.height() / 2 : $itm.width() / 2;
                var height = $itm.height();
                var width = $itm.width();
                var uCss = (dir == "vertical") ?
                            { height: '0px', width: width + 'px', marginTop: margin + 'px', opacity: '0'} :
                            { height: height + 'px', width: '0px', marginLeft: margin + 'px', opacity: '0' };
                var dCss = (dir == "vertical") ?
                            { height: height + 'px', width: width + 'px', marginTop: '0px', opacity: '1'} :
                            { height: height + 'px', width: width + 'px', marginLeft: '0px', opacity: '1' };
                $front.stop().animate(uCss, { duration: speed });
                window.setTimeout(function () {
                    $back.stop().animate(dCss, { duration: speed });
                    if (typeof (newSrc) != "undefined") {
                        $this.handleListItemSwap($front, newSrc, isBgroundImg);
                    }
                }, speed);
            }
        };

        $this.setExtraProperties = function ($ele, imageObj) {
            if (typeof (imageObj.alt) != "undefined")
                $ele.attr("alt", imageObj.alt);
            if (typeof (imageObj.href) != "undefined" && $ele.parent()[0].tagName == "A") {
                $ele.parent().attr("href", imageObj.href);
                if (typeof (imageObj.target) != "undefined")
                    $ele.parent().attr("target", imageObj.target);
                if (typeof (imageObj.onclick) != "undefined") {
                    $ele.parent().attr("onclick", imageObj.onclick);
                    $ele.attr("onclick", "");
                }
            } else {
                if (typeof (imageObj.onclick) != "undefined")
                    $ele.attr("onclick", imageObj.onclick);
            }
        }

        /* Delay the tile action*/
        $this.setTimer = function () {
            var action = null;
            switch (mode) {
                case 'slide':
                    action = $this.slide;
                    break;
                case 'flip':
                    action = $this.flip;
                    break;
                case 'flip-list':
                    action = $this.flipList;
                    break;
            }
            if (action != null) {
                if (hasRun == false) {
                    window.setTimeout(function () {
                        action();
                        $this.setTimer();
                    }, initDelay);
                } else
                    $this.slideTimer = setInterval(function () { action(); }, speed + delay);
            }
            hasRun = true;
        };

        $this.stopTimer = function (restart) {
            clearInterval($this.slideTimer);
            if (typeof (restart) != "undefined" && restart == true) {
                $this.setTimer();
            }
        };
        $this.setTimer();
    });
    return this;
};

$.fn.applicationBar = function (options) {

    /* Setup the public options for the applicationBar  */
    var defaults = {
        applyTheme: true,                                       // should the theme be loaded from local storage and applied to the page
        themePicked: function (tColor) { },                        // called when a new theme is chosen. the chosen theme (dark | light)
        accentPicked: function (aColor) { },                     // called when a new accent is chosen. the chosen theme (blue, mango, purple, etc.)
        loaded: function (tColor, aColor) { },                    // called if applyTheme is true onload when a theme has been loaded from local storage or overridden by options
        duration: 500,                                          // how fast should animation be performed, in milliseconds
        expandHeight: "320px",                                  // height the application bar to expand to when opened
        collapseHeight: "60px",                                 // height the application bar will collapse back to when closed
        bindKeyboard: true,                                     // should up and down keys on keyborad be bound to the application bar
        baseThemeCssSelector: 'body',                           // selector to place dark or light class after load or selection
        accentCssSelector: '.tiles',                            // selector to place accent color class after load or selection
        accentColor: 'blue',                                    // the default accent color. options are blue, brown, green, lime, magenta, mango, pink, purple, red, teal
        baseTheme: 'dark',                                      // the default theme color. options are dark, light
        metroLightUrl: '/content/images/metroIcons_light.jpg',          // the url for the metro light icons (only needed if preload 'preloadAltBaseTheme' is true)
        metroDarkUrl: '/content/images/metroIcons.jpg',                 // the url for the metro dark icons (only needed if preload 'preloadAltBaseTheme' is true)
        preloadAltBaseTheme: false                              // should the applicationBar icons be pre loaded for the alternate theme to enable fast theme switching
    };
    var stgs = $.extend(defaults, options);
    //get theme from local storage or set base theme
    var hasLocalStorage = typeof (window.localStorage) != "undefined";
    var hasKeyAndValue = function (key) {
        return (typeof (window.localStorage[key]) != "undefined" && window.localStorage[key] != null);
    };
    if (stgs.applyTheme == true) {
        if (hasLocalStorage && (!hasKeyAndValue("Metro.JS.AccentColor") || !hasKeyAndValue("Metro.JS.BaseAccentColor"))) {
            //base theme
            window.localStorage["Metro.JS.AccentColor"] = stgs.accentColor;
            window.localStorage["Metro.JS.BaseAccentColor"] = stgs.baseTheme;
            $(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
            $(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
            stgs.loaded(stgs.baseTheme, stgs.accentColor);
            //preload light theme image
            if(stgs.preloadAltBaseTheme)
                $([(stgs.baseTheme == 'dark') ? stgs.metroLightUrl : stgs.metroDarkUrl]).preloadImages(function () { });
        } else {
            if (hasLocalStorage) {
                stgs.accentColor = window.localStorage["Metro.JS.AccentColor"];
                stgs.baseTheme = window.localStorage["Metro.JS.BaseAccentColor"];
                $(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
                $(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
                stgs.loaded(stgs.baseTheme, stgs.accentColor);
            } else {
                $(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
                $(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
                stgs.loaded(stgs.baseTheme, stgs.accentColor);
                //preload light theme image
                if (stgs.preloadAltBaseTheme)
                    $([(stgs.baseTheme == 'dark') ? stgs.metroLightUrl : stgs.metroDarkUrl]).preloadImages(function () { });
            }
        }
    }

    //this should really only run once but we can support multiple application bars
    $(this).each(function () {
        var $this = $(this);
        //unfortunately we have to sniff out mobile browsers because of the inconsistent implementation of position:fixed
        //most desktop methods return false positives on a mobile
        if (navigator.userAgent.match(/(Android|webOS|iPhone|iPod|BlackBerry|PIE|IEMobile)/i)) {
            $this.css({ position: 'absolute', bottom: '0px' });
        }
        $this.animateAppBar = function (isExpanded) {
            var hgt = isExpanded ? stgs.collapseHeight : stgs.expandHeight;
            if (isExpanded)
                $this.removeClass("expanded");
            else
                if (!$this.hasClass("expanded"))
                    $this.addClass("expanded");
            $this.stop().animate({ height: hgt }, { duration: stgs.duration });
        };
        $this.find("a.etc").click(function () {
            $this.animateAppBar($this.hasClass("expanded"));
        });

        $this.find(".theme-options>li>a").click(function () {
            var accent = $(this).attr("class").replace("accent", "").replace(" ", "");
            if (typeof (window.localStorage) != "undefined") {
                window.localStorage["Metro.JS.AccentColor"] = accent;
            }
            var $accent = $(stgs.accentCssSelector);
            if ($accent.length > 0) {
                $accent.addClass(accent);
                var dAccent = $accent.data("accent");
                if (dAccent != accent) {
                    var cleanClass = $accent.attr("class").replace(dAccent, "")
                    $accent.attr("class", cleanClass.replace(/(\s)+/, ' '));
                    $accent.data("accent", accent);
                    stgs.accentPicked(accent);
                }
            }
        });
        if (stgs.bindKeyboard == true) {
            $(document.documentElement).keyup(function (event) {
                // handle cursor keys
                if (event.keyCode == 38) {
                    // expand
                    if (!$this.hasClass("expanded")) {
                        $this.animateAppBar(false);
                    }
                } else if (event.keyCode == 40) {
                    // collapse
                    if ($this.hasClass("expanded")) {
                        $this.animateAppBar(true);
                    }
                }
            });
        }
        $this.find(".base-theme-options>li>a").click(function () {
            var accent = $(this).attr("class").replace("accent", '').replace(' ', '');
            if (typeof (window.localStorage) != "undefined") {
                window.localStorage["Metro.JS.BaseAccentColor"] = accent;
            }
            var $theme = $(stgs.baseThemeCssSelector);
            if ($theme.length > 0) {
                if (accent == "dark")
                    $theme.addClass("dark").removeClass("light");
                else
                    $theme.addClass("light").removeClass("dark");
                stgs.themePicked(accent);
            }
        });
    });
};

/* Preload Images */
// Helper function, used below.
// Usage: ['img1.jpg','img2.jpg'].remove('img1.jpg');
Array.prototype.remove = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) { this.splice(i, 1); }
    }
};

// Usage: $(['img1.jpg','img2.jpg']).preloadImages(function(){ ... });
// Callback function gets called after all images are preloaded
$.fn.preloadImages = function (callback) {
    checklist = this.toArray();
    var $img = $("<img style='display:none;'>").appendTo("body");
    this.each(function () {
        $img.attr({ src: this }).load(function () {
            checklist.remove($(this).attr('src'));
            if (checklist.length == 0) { callback(); }
        });
    });
    $img.remove();
};

