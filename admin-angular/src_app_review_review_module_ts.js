(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_review_review_module_ts"],{

/***/ 53248:
/*!***********************************************************!*\
  !*** ./node_modules/lg-thumbnail.js/dist/lg-thumbnail.js ***!
  \***********************************************************/
/***/ ((module) => {

/**!
 * lg-thumbnail.js | 1.2.0 | May 20th 2020
 * http://sachinchoolur.github.io/lg-thumbnail.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=undefined;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=undefined,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgThumbnail = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var thumbnailDefaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toggleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function Thumbnail(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, thumbnailDefaults, this.core.s);

        this.thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = this.core.items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin);
        this.thumbIndex = this.core.index;

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function () {
        var _this = this;
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function () {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                utils.addClass(this.core.outer, 'lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb) {
                if (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss()) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss()) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toggle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function () {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' + '<div class="lg-thumb group">' + '</div>' + '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        utils.addClass(_this.core.outer, 'lg-has-thumb');

        _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', html);

        _this.thumbOuter = _this.core.outer.querySelector('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;

        if (_this.core.s.animateThumb) {
            _this.core.outer.querySelector('.lg-thumb').style.width = _this.thumbTotalWidth + 'px';
            _this.core.outer.querySelector('.lg-thumb').style.position = 'relative';
        }

        if (this.core.s.animateThumb) {
            _this.thumbOuter.style.height = _this.core.s.thumbContHeight + 'px';
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
                getThumb(_this.core.s.dynamicEl[j].src, _this.core.s.dynamicEl[j].thumb, j);
            }
        } else {
            for (var i = 0; i < _this.core.items.length; i++) {
                if (!_this.core.s.exThumbImage) {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].querySelector('img').getAttribute('src'), i);
                } else {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].getAttribute(_this.core.s.exThumbImage), i);
                }
            }
        }

        _this.core.outer.querySelector('.lg-thumb').innerHTML = thumbList;

        $thumb = _this.core.outer.querySelectorAll('.lg-thumb-item');

        for (var n = 0; n < $thumb.length; n++) {

            /*jshint loopfunc: true */
            (function (index) {
                var $this = $thumb[index];
                var vimeoVideoId = $this.getAttribute('data-vimeo-id');
                if (vimeoVideoId) {

                    window['lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n] = function (content) {
                        $this.querySelector('img').setAttribute('src', content[0][_this.core.s.vimeoThumbSize]);
                    };

                    var script = document.createElement('script');
                    script.className = 'lg-script';
                    script.src = '//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n;
                    document.body.appendChild(script);
                }
            })(n);
        }

        // manage active class for thumbnail
        utils.addClass($thumb[_this.core.index], 'active');
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {

            for (var j = 0; j < $thumb.length; j++) {
                utils.removeClass($thumb[j], 'active');
            }

            utils.addClass($thumb[_this.core.index], 'active');
        });

        for (var k = 0; k < $thumb.length; k++) {

            /*jshint loopfunc: true */
            (function (index) {

                utils.on($thumb[index], 'click.lg touchend.lg', function () {

                    setTimeout(function () {

                        // In IE9 and bellow touch does not support
                        // Go to slide if browser does not support css transitions
                        if (_this.thumbClickable && !_this.core.lgBusy || !_this.core.doCss()) {
                            _this.core.index = index;
                            _this.core.slide(_this.core.index, false, true);
                        }
                    }, 50);
                });
            })(k);
        }

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            _this.animateThumb(_this.core.index);
        });

        utils.on(window, 'resize.lgthumb orientationchange.lgthumb', function () {
            setTimeout(function () {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;
            }, 200);
        });
    };

    Thumbnail.prototype.setTranslate = function (value) {
        utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'Transform', 'translate3d(-' + value + 'px, 0px, 0px)');
    };

    Thumbnail.prototype.animateThumb = function (index) {
        var $thumb = this.core.outer.querySelector('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1 - position;
            if (this.left > this.thumbTotalWidth - this.thumbOuterWidth) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!utils.hasClass($thumb, 'on')) {
                    utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'TransitionDuration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            }

            this.setTranslate(this.left);
        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function () {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        utils.addClass(_this.thumbOuter, 'lg-grab');

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'mousedown.lgthumb', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.outer.scrollLeft += 1;
                _this.core.outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                utils.removeClass(_this.thumbOuter, 'lg-grab');
                utils.addClass(_this.thumbOuter, 'lg-grabbing');
            }
        });

        utils.on(window, 'mousemove.lgthumb', function (e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(window, 'mouseup.lgthumb', function () {
            if (isMoved) {
                isMoved = false;
                utils.removeClass(_this.thumbOuter, 'lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.thumbOuter, 'lg-grabbing');
                utils.addClass(_this.thumbOuter, 'lg-grab');
            }
        });
    };

    Thumbnail.prototype.enableThumbSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchstart.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchmove.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.targetTouches[0].pageX;
                isMoved = true;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchend.lg', function () {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    utils.removeClass(_this.thumbOuter, 'lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });
    };

    Thumbnail.prototype.toggle = function () {
        var _this = this;
        if (_this.core.s.toggleThumb) {
            utils.addClass(_this.core.outer, 'lg-can-toggle');
            _this.thumbOuter.insertAdjacentHTML('beforeend', '<button aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>');
            utils.on(_this.core.outer.querySelector('.lg-toggle-thumb'), 'click.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-thumb-open')) {
                    utils.removeClass(_this.core.outer, 'lg-thumb-open');
                } else {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function () {
        var _this = this;
        utils.on(window, 'keydown.lgthumb', function (e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                utils.addClass(_this.core.outer, 'lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                utils.removeClass(_this.core.outer, 'lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function (d) {
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            utils.off(window, '.lgthumb');
            if (!d) {
                this.thumbOuter.parentNode.removeChild(this.thumbOuter);
            }
            utils.removeClass(this.core.outer, 'lg-has-thumb');

            var lgScript = document.getElementsByClassName('lg-script');
            while (lgScript[0]) {
                lgScript[0].parentNode.removeChild(lgScript[0]);
            }
        }
    };

    window.lgModules.thumbnail = Thumbnail;
});

},{}]},{},[1])(1)
});


/***/ }),

/***/ 91691:
/*!*************************************************!*\
  !*** ./node_modules/lg-zoom.js/dist/lg-zoom.js ***!
  \*************************************************/
/***/ ((module) => {

/**!
 * lg-zoom.js | 1.3.0 | October 14th 2020
 * http://sachinchoolur.github.io/lg-zoom.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=undefined;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=undefined,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgZoom = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var getUseLeft = function getUseLeft() {
        var useLeft = false;
        var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
        }

        return useLeft;
    };

    var zoomDefaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300,
        useLeftForZoom: getUseLeft()
    };

    var Zoom = function Zoom(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, zoomDefaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = window.innerWidth / 2;
            this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
        }

        return this;
    };

    Zoom.prototype.init = function () {

        var _this = this;
        var zoomIcons = '<button type="button" aria-label="Zoom in" id="lg-zoom-in" class="lg-icon"></button><button type="button" aria-label="Zoom out" id="lg-zoom-out" class="lg-icon"></button>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<button type="button" aria-label="Actual size" id="lg-actual-size" class="lg-icon"></button>';
        }

        if (_this.core.s.useLeftForZoom) {
            utils.addClass(_this.core.outer, 'lg-use-left-for-zoom');
        } else {
            utils.addClass(_this.core.outer, 'lg-use-transition-for-zoom');
        }

        this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', zoomIcons);

        // Add zoomable class
        utils.on(_this.core.el, 'onSlideItemLoad.lgtmzoom', function (event) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + event.detail.delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if (utils.hasClass(document.body, 'lg-from-hash') && event.detail.delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                utils.removeClass(document.body, 'lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function () {
                utils.addClass(_this.core.___slide[event.detail.index], 'lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function zoom(scaleVal) {

            var image = _this.core.outer.querySelector('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = (window.innerWidth - image.clientWidth) / 2;
            var offsetY = (window.innerHeight - image.clientHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * _x;
            var y = (scaleVal - 1) * _y;

            utils.setVendor(image, 'Transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)');
            image.setAttribute('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
                image.parentElement.style.left = -x + 'px';
                image.parentElement.style.top = -y + 'px';
            } else {
                utils.setVendor(image.parentElement, 'Transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)');
            }

            image.parentElement.setAttribute('data-x', x);
            image.parentElement.setAttribute('data-y', y);
        };

        var callScale = function callScale() {
            if (scale > 1) {
                utils.addClass(_this.core.outer, 'lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function actualSize(event, image, index, fromIcon) {
            var w = image.clientWidth;
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || image.naturalWidth || w;
            } else {
                nw = _this.core.items[index].getAttribute('data-width') || image.naturalWidth || w;
            }

            var _scale;

            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = window.innerWidth / 2;
                _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            } else {
                _this.pageX = event.pageX || event.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function () {
                utils.removeClass(_this.core.outer, 'lg-grabbing');
                utils.addClass(_this.core.outer, 'lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        utils.on(_this.core.el, 'onAferAppendSlide.lgtmzoom', function (event) {

            var index = event.detail.index;

            // Get the current element
            var image = _this.core.___slide[index].querySelector('.lg-image');

            if (!_this.core.isTouch) {
                utils.on(image, 'dblclick', function (event) {
                    actualSize(event, image, index);
                });
            }

            if (_this.core.isTouch) {
                utils.on(image, 'touchstart', function (event) {
                    if (!tapped) {
                        tapped = setTimeout(function () {
                            tapped = null;
                        }, 300);
                    } else {
                        clearTimeout(tapped);
                        tapped = null;
                        actualSize(event, image, index);
                    }

                    event.preventDefault();
                });
            }
        });

        // Update zoom on resize and orientationchange
        utils.on(window, 'resize.lgzoom scroll.lgzoom orientationchange.lgzoom', function () {
            _this.pageX = window.innerWidth / 2;
            _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            zoom(scale);
        });

        utils.on(document.getElementById('lg-zoom-out'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        utils.on(document.getElementById('lg-zoom-in'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        utils.on(document.getElementById('lg-actual-size'), 'click.lg', function (event) {
            actualSize(event, _this.core.___slide[_this.core.index].querySelector('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        if (!_this.core.isTouch) {
            _this.zoomDrag();
        }

        if (_this.core.isTouch) {
            _this.zoomSwipe();
        }
    };

    Zoom.prototype.getModifier = function (rotateValue, axis, el) {
        var originalRotate = rotateValue;
        rotateValue = Math.abs(rotateValue);
        var transformValues = this.getCurrentTransform(el);
        if (!transformValues) {
            return 1;
        }
        var modifier = 1;
        if (axis === 'X') {
            var flipHorizontalValue = Math.sign(parseFloat(transformValues[0]));
            if (rotateValue === 0 || rotateValue === 180) {
                modifier = 1;
            } else if (rotateValue === 90) {
                if (originalRotate === -90 && flipHorizontalValue === 1 || originalRotate === 90 && flipHorizontalValue === -1) {
                    modifier = -1;
                } else {
                    modifier = 1;
                }
            }
            modifier = modifier * flipHorizontalValue;
        } else {
            var flipVerticalValue = Math.sign(parseFloat(transformValues[3]));
            if (rotateValue === 0 || rotateValue === 180) {
                modifier = 1;
            } else if (rotateValue === 90) {
                var sinX = parseFloat(transformValues[1]);
                var sinMinusX = parseFloat(transformValues[2]);
                modifier = Math.sign(sinX * sinMinusX * originalRotate * flipVerticalValue);
            }
            modifier = modifier * flipVerticalValue;
        }
        return modifier;
    };

    Zoom.prototype.getImageSize = function ($image, rotateValue, axis) {
        var imageSizes = {
            y: 'offsetHeight',
            x: 'offsetWidth'
        };
        if (rotateValue === 90) {
            // Swap axis 
            if (axis === 'x') {
                axis = 'y';
            } else {
                axis = 'x';
            }
        }
        return $image[imageSizes[axis]];
    };

    Zoom.prototype.getDragCords = function (e, rotateValue) {
        if (rotateValue === 90) {
            return {
                x: e.pageY,
                y: e.pageX
            };
        } else {
            return {
                x: e.pageX,
                y: e.pageY
            };
        }
    };
    Zoom.prototype.getSwipeCords = function (e, rotateValue) {
        var x = e.targetTouches[0].pageX;
        var y = e.targetTouches[0].pageY;
        if (rotateValue === 90) {
            return {
                x: y,
                y: x
            };
        } else {
            return {
                x: x,
                y: y
            };
        }
    };

    Zoom.prototype.getPossibleDragCords = function ($image, rotateValue) {

        var minY = (this.core.outer.querySelector('.lg').clientHeight - this.getImageSize($image, rotateValue, 'y')) / 2;
        var maxY = Math.abs(this.getImageSize($image, rotateValue, 'y') * Math.abs($image.getAttribute('data-scale')) - this.core.outer.querySelector('.lg').clientHeight + minY);
        var minX = (this.core.outer.querySelector('.lg').clientWidth - this.getImageSize($image, rotateValue, 'x')) / 2;
        var maxX = Math.abs(this.getImageSize($image, rotateValue, 'x') * Math.abs($image.getAttribute('data-scale')) - this.core.outer.querySelector('.lg').clientWidth + minX);
        if (rotateValue === 90) {
            return {
                minY: minX,
                maxY: maxX,
                minX: minY,
                maxX: maxY
            };
        } else {
            return {
                minY: minY,
                maxY: maxY,
                minX: minX,
                maxX: maxX
            };
        }
    };

    Zoom.prototype.getDragAllowedAxises = function ($image, rotateValue) {
        var allowY = this.getImageSize($image, rotateValue, 'y') * $image.getAttribute('data-scale') > this.core.outer.querySelector('.lg').clientHeight;
        var allowX = this.getImageSize($image, rotateValue, 'x') * $image.getAttribute('data-scale') > this.core.outer.querySelector('.lg').clientWidth;
        if (rotateValue === 90) {
            return {
                allowX: allowY,
                allowY: allowX
            };
        } else {
            return {
                allowX: allowX,
                allowY: allowY
            };
        }
    };

    /**
     * 
     * @param {Element} el 
     * @return matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
     * Get the current transform value
     */
    Zoom.prototype.getCurrentTransform = function (el) {
        if (!el) {
            return 0;
        }
        var st = window.getComputedStyle(el, null);
        var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';
        if (tm !== 'none') {
            return tm.split('(')[1].split(')')[0].split(',');
        }
        return 0;
    };

    Zoom.prototype.getCurrentRotation = function (el) {
        if (!el) {
            return 0;
        }
        var values = this.getCurrentTransform(el);
        if (values) {
            return Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            // If you want rotate in 360
            //return (angle < 0 ? angle + 360 : angle);
        }
        return 0;
    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function () {
        utils.removeClass(this.core.outer, 'lg-zoomed');
        for (var i = 0; i < this.core.___slide.length; i++) {
            if (this.core.___slide[i].querySelector('.lg-img-wrap')) {
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('style');
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-x');
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-y');
            }
        }

        for (var j = 0; j < this.core.___slide.length; j++) {
            if (this.core.___slide[j].querySelector('.lg-image')) {
                this.core.___slide[j].querySelector('.lg-image').removeAttribute('style');
                this.core.___slide[j].querySelector('.lg-image').removeAttribute('data-scale');
            }
        }

        // Reset pagx pagy values to center
        this.pageX = window.innerWidth / 2;
        this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
    };

    Zoom.prototype.zoomSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        var rotateValue = 0;
        var rotateEl;

        for (var i = 0; i < _this.core.___slide.length; i++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'touchstart.lg', function (e) {

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    var $image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                    rotateEl = _this.core.___slide[_this.core.index].querySelector('.lg-img-rotate');
                    rotateValue = _this.getCurrentRotation(rotateEl);

                    var dragAllowedAxises = _this.getDragAllowedAxises($image, Math.abs(rotateValue));
                    allowY = dragAllowedAxises.allowY;
                    allowX = dragAllowedAxises.allowX;

                    if (allowX || allowY) {
                        e.preventDefault();
                        startCoords = _this.getSwipeCords(e, Math.abs(rotateValue));
                    }
                }
            });
        }

        for (var j = 0; j < _this.core.___slide.length; j++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[j], 'touchmove.lg', function (e) {

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {

                    var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
                    var distanceX;
                    var distanceY;

                    e.preventDefault();
                    isMoved = true;

                    endCoords = _this.getSwipeCords(e, Math.abs(rotateValue));

                    // reset opacity and transition duration
                    utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                    if (allowY) {
                        distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y) * _this.getModifier(rotateValue, 'Y', rotateEl);
                    } else {
                        distanceY = -Math.abs(_el.getAttribute('data-y'));
                    }

                    if (allowX) {
                        distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x) * _this.getModifier(rotateValue, 'X', rotateEl);
                    } else {
                        distanceX = -Math.abs(_el.getAttribute('data-x'));
                    }

                    if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {

                        if (_this.core.s.useLeftForZoom) {
                            _el.style.left = distanceX + 'px';
                            _el.style.top = distanceY + 'px';
                        } else {
                            utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                        }
                    }
                }
            });
        }

        for (var k = 0; k < _this.core.___slide.length; k++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[k], 'touchend.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        utils.removeClass(_this.core.outer, 'lg-zoom-dragging');
                        _this.touchendZoom(startCoords, endCoords, allowX, allowY, rotateValue);
                    }
                }
            });
        }
    };

    Zoom.prototype.zoomDrag = function () {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        var rotateValue = 0;
        var rotateEl;

        for (var i = 0; i < _this.core.___slide.length; i++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'mousedown.lgzoom', function (e) {

                // execute only on .lg-object
                var $image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                rotateEl = _this.core.___slide[_this.core.index].querySelector('.lg-img-rotate');
                rotateValue = _this.getCurrentRotation(rotateEl);

                var dragAllowedAxises = _this.getDragAllowedAxises($image, Math.abs(rotateValue));
                allowY = dragAllowedAxises.allowY;
                allowX = dragAllowedAxises.allowX;

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    if (utils.hasClass(e.target, 'lg-object') && (allowX || allowY)) {
                        e.preventDefault();
                        startCoords = _this.getDragCords(e, Math.abs(rotateValue));

                        isDraging = true;

                        // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                        _this.core.outer.scrollLeft += 1;
                        _this.core.outer.scrollLeft -= 1;

                        utils.removeClass(_this.core.outer, 'lg-grab');
                        utils.addClass(_this.core.outer, 'lg-grabbing');
                    }
                }
            });
        }

        utils.on(window, 'mousemove.lgzoom', function (e) {
            if (isDraging) {
                var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = _this.getDragCords(e, Math.abs(rotateValue));

                // reset opacity and transition duration
                utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                if (allowY) {
                    distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y) * _this.getModifier(rotateValue, 'Y', rotateEl);
                } else {
                    distanceY = -Math.abs(_el.getAttribute('data-y'));
                }

                if (allowX) {
                    distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x) * _this.getModifier(rotateValue, 'X', rotateEl);
                } else {
                    distanceX = -Math.abs(_el.getAttribute('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _el.style.left = distanceX + 'px';
                    _el.style.top = distanceY + 'px';
                } else {
                    utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        });

        utils.on(window, 'mouseup.lgzoom', function (e) {

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.core.outer, 'lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
                    endCoords = _this.getDragCords(e, Math.abs(rotateValue));
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY, rotateValue);
                }

                isMoved = false;
            }

            utils.removeClass(_this.core.outer, 'lg-grabbing');
            utils.addClass(_this.core.outer, 'lg-grab');
        });
    };

    Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, rotateValue) {

        var _this = this;
        var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
        var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');
        var rotateEl = _this.core.___slide[_this.core.index].querySelector('.lg-img-rotate');
        var distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x) * _this.getModifier(rotateValue, 'X', rotateEl);
        var distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y) * _this.getModifier(rotateValue, 'Y', rotateEl);
        var possibleDragCords = _this.getPossibleDragCords(image, Math.abs(rotateValue));

        if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            if (allowY) {
                if (distanceY <= -possibleDragCords.maxY) {
                    distanceY = -possibleDragCords.maxY;
                } else if (distanceY >= -possibleDragCords.minY) {
                    distanceY = -possibleDragCords.minY;
                }
            }

            if (allowX) {
                if (distanceX <= -possibleDragCords.maxX) {
                    distanceX = -possibleDragCords.maxX;
                } else if (distanceX >= -possibleDragCords.minX) {
                    distanceX = -possibleDragCords.minX;
                }
            }

            if (allowY) {
                _el.setAttribute('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_el.getAttribute('data-y'));
            }

            if (allowX) {
                _el.setAttribute('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_el.getAttribute('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
                _el.style.left = distanceX + 'px';
                _el.style.top = distanceY + 'px';
            } else {
                utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }
        }
    };

    Zoom.prototype.destroy = function () {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        utils.off(_this.core.el, '.lgzoom');
        utils.off(window, '.lgzoom');
        for (var i = 0; i < _this.core.___slide.length; i++) {
            utils.off(_this.core.___slide[i], '.lgzoom');
        }

        utils.off(_this.core.el, '.lgtmzoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    window.lgModules.zoom = Zoom;
});

},{}]},{},[1])(1)
});


/***/ }),

/***/ 53287:
/*!************************************************************************!*\
  !*** ./src/app/review/components/review-card/review-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewCardComponent": () => (/* binding */ ReviewCardComponent)
/* harmony export */ });
/* harmony import */ var lg_zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lg-zoom.js */ 91691);
/* harmony import */ var lg_zoom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lg_zoom_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lg-thumbnail.js */ 53248);
/* harmony import */ var lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/space */ 33521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/rate */ 44054);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _shared_pipes_date_from_now_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/date-from-now/date-from-now.pipe */ 95914);




















function ReviewCardComponent_nz_rate_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-rate", 18);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.review.rate)("nzDisabled", true);
} }
function ReviewCardComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "review.by"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.review.user.account);
} }
function ReviewCardComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "dateFromNow");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r2.review.updatedAt), " ");
} }
function ReviewCardComponent_nz_tag_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-tag", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "review.status.created"));
} }
function ReviewCardComponent_nz_tag_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-tag", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "review.status.approved"));
} }
function ReviewCardComponent_nz_tag_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-tag", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "review.status.hidden"));
} }
function ReviewCardComponent_ng_container_24_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", image_r8.large.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", image_r8.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ReviewCardComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ReviewCardComponent_ng_container_24_a_2_Template, 2, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "gallery_", ctx_r6.review.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.review.images);
} }
const _c0 = function () { return []; };
class ReviewCardComponent {
    constructor(approveReviewGQL, rejectReviewGQL, msgService, translateService) {
        this.approveReviewGQL = approveReviewGQL;
        this.rejectReviewGQL = rejectReviewGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.ReviewStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ReviewStatus;
        this.rejecting = false;
        this.approving = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
        this.status = this.review.status;
    }
    ngAfterViewInit() {
        var _a;
        if ((_a = this.review.images) === null || _a === void 0 ? void 0 : _a.length) {
            $(`#gallery_${this.review.id}`)
                .justifiedGallery()
                .on('jg.complete', () => {
                lightGallery(document.getElementById(`gallery_${this.review.id}`), {
                    thumbnail: true,
                });
            });
        }
    }
    viewProductThumbnail() {
        var _a;
        lightGallery(document.getElementById(`review_card_lg_${this.review.product.id}`), {
            dynamic: true,
            dynamicEl: [
                {
                    src: (_a = this.review.product.thumbnail) === null || _a === void 0 ? void 0 : _a.url,
                },
            ],
        });
    }
    approve() {
        this.approving = true;
        this.approveReviewGQL
            .mutate({
            where: {
                id: this.review.id,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(({ data, errors }) => {
            this.approving = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('review.approve_error'));
                return;
            }
            if (data) {
                this.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ReviewStatus.Approved;
                this.msgService.success(this.translateService.instant('review.approve_success'));
            }
        }, () => {
            this.approving = false;
        });
    }
    reject() {
        this.rejecting = true;
        this.rejectReviewGQL
            .mutate({
            where: {
                id: this.review.id,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(({ data, errors }) => {
            this.rejecting = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('review.hide_error'));
                return;
            }
            if (data) {
                this.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ReviewStatus.Hidden;
                this.msgService.success(this.translateService.instant('review.hide_success'));
            }
        }, () => {
            this.rejecting = false;
        });
    }
    ngOnDestroy() {
        var _a, _b, _c;
        this.destroy$.next();
        this.destroy$.unsubscribe();
        if ((_a = this.review.images) === null || _a === void 0 ? void 0 : _a.length) {
            $(`#gallery_${this.review.id}`).justifiedGallery('destroy');
            (_c = window.lgData[((_b = document
                .getElementById(`gallery_${this.review.id}`)) === null || _b === void 0 ? void 0 : _b.getAttribute('lg-uid')) || '']) === null || _c === void 0 ? void 0 : _c.destroy(true);
        }
    }
}
ReviewCardComponent.ɵfac = function ReviewCardComponent_Factory(t) { return new (t || ReviewCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ApproveReviewGQL), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.RejectReviewGQL), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService)); };
ReviewCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReviewCardComponent, selectors: [["app-review-card"]], inputs: { review: "review" }, decls: 26, vars: 12, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "product__thumbnail", "mr-2", 3, "click"], [1, "w-100", "h-100", "border", "rounded", 3, "src", "appImgFallback"], [1, "d-flex", "flex-column", "justify-content-start"], ["nz-typography", "", 1, "brand__name"], ["nzType", "vertical"], ["nz-typography", "", 1, "product__name"], ["nzAlign", "baseline"], [3, "ngModel", "nzDisabled", 4, "nzSpaceItem"], [4, "nzSpaceItem"], [3, "ngSwitch"], ["nzColor", "warning", 4, "ngSwitchCase"], ["nzColor", "success", 4, "ngSwitchCase"], ["nzColor", "error", 4, "ngSwitchCase"], [1, "review__content"], [4, "ngIf"], [1, "d-none", 3, "id"], [3, "ngModel", "nzDisabled"], ["nz-typography", ""], ["nzColor", "warning"], ["nz-icon", "", "nzType", "exclamation", "nzTheme", "outline"], ["nzColor", "success"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nzColor", "error"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], [3, "id"], [3, "href", 4, "ngFor", "ngForOf"], [3, "href"], ["loading", "lazy", 3, "src"]], template: function ReviewCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReviewCardComponent_Template_div_click_2_listener() { return ctx.viewProductThumbnail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "nz-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nz-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ReviewCardComponent_nz_rate_14_Template, 1, 2, "nz-rate", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ReviewCardComponent_ng_container_15_Template, 6, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ReviewCardComponent_ng_container_16_Template, 3, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ReviewCardComponent_nz_tag_19_Template, 5, 3, "nz-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ReviewCardComponent_nz_tag_20_Template, 5, 3, "nz-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ReviewCardComponent_nz_tag_21_Template, 5, 3, "nz-tag", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ReviewCardComponent_ng_container_24_Template, 3, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.review.product.thumbnail == null ? null : ctx.review.product.thumbnail.small == null ? null : ctx.review.product.thumbnail.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("appImgFallback", (ctx.review.product.thumbnail == null ? null : ctx.review.product.thumbnail.url) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.review.product.brand.translations[0] == null ? null : ctx.review.product.brand.translations[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.review.product.translations[0] == null ? null : ctx.review.product.translations[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.ReviewStatus.Created);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.ReviewStatus.Approved);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.ReviewStatus.Hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.review.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!ctx.review.images.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", "review_card_lg_" + ctx.review.product.id);
    } }, directives: [_shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_3__.ImgFallbackDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_10__.NzTypographyComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__.NzDividerComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_12__.NzSpaceComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_12__.NzSpaceItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_14__.NzRateComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__.NzTagComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _shared_pipes_date_from_now_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_4__.DateFromNowPipe], styles: [".brand__name[_ngcontent-%COMP%] {\n  color: #7017bb;\n}\n\n.product__thumbnail[_ngcontent-%COMP%] {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  cursor: pointer;\n}\n\n.product__thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.review__content[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlsaXRpZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NIWTtBREVkOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFGTjs7QUFPQTtFQUNFLHFCQUFBO0FBSkYiLCJmaWxlIjoicmV2aWV3LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuXG4uYnJhbmRfX25hbWUge1xuICBjb2xvcjogJGJyYW5kLWNvbG9yO1xufVxuXG4ucHJvZHVjdCB7XG4gICZfX3RodW1ibmFpbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICA+IGltZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4ucmV2aWV3X19jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuIiwiJGJyYW5kLWNvbG9yOiAjNzAxN2JiO1xuIl19 */"] });


/***/ }),

/***/ 66466:
/*!**************************************************************************************!*\
  !*** ./src/app/review/components/review-report-card/review-report-card.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewReportCardComponent": () => (/* binding */ ReviewReportCardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _shared_pipes_date_from_now_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/date-from-now/date-from-now.pipe */ 95914);














function ReviewReportCardComponent_nz_tag_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "review.report_status.created"));
} }
function ReviewReportCardComponent_nz_tag_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "review.report_status.approved"));
} }
function ReviewReportCardComponent_nz_tag_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "review.report_status.rejected"));
} }
const _c0 = function () { return []; };
class ReviewReportCardComponent {
    constructor(approveReviewReportGQL, rejectReviewReportGQL, msgService, translateService) {
        this.approveReviewReportGQL = approveReviewReportGQL;
        this.rejectReviewReportGQL = rejectReviewReportGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.ReviewReportStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus;
        this.approving = false;
        this.rejecting = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.status = this.report.status;
    }
    approve() {
        this.approving = true;
        this.approveReviewReportGQL
            .mutate({
            where: {
                id: this.report.id,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(({ data, errors }) => {
            this.approving = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('review.approve_report_error'));
                return;
            }
            if (data) {
                this.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus.Approved;
                this.msgService.success(this.translateService.instant('review.approve_report_success'));
            }
        }, () => {
            this.approving = false;
        });
    }
    reject() {
        this.rejecting = true;
        this.rejectReviewReportGQL
            .mutate({
            where: {
                id: this.report.id,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(({ data, errors }) => {
            this.rejecting = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('review.reject_report_error'));
                return;
            }
            if (data) {
                this.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus.Rejected;
                this.msgService.success(this.translateService.instant('review.reject_report_success'));
            }
        }, () => {
            this.rejecting = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ReviewReportCardComponent.ɵfac = function ReviewReportCardComponent_Factory(t) { return new (t || ReviewReportCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ApproveReviewReportGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.RejectReviewReportGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
ReviewReportCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReviewReportCardComponent, selectors: [["app-review-report-card"]], inputs: { report: "report" }, decls: 20, vars: 14, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "mr-2"], [1, "w-100", "h-100", "border", "rounded-circle", 3, "src", "appImgFallback"], [1, "d-flex", "flex-column", "justify-content-start"], ["nz-typography", "", 1, "report__type"], ["nz-typography", "", "nzType", "secondary"], [3, "ngSwitch"], ["nzColor", "warning", 4, "ngSwitchCase"], ["nzColor", "success", 4, "ngSwitchCase"], ["nzColor", "error", 4, "ngSwitchCase"], [1, "report__content"], ["nzColor", "warning"], ["nz-icon", "", "nzType", "exclamation", "nzTheme", "outline"], ["nzColor", "success"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nzColor", "error"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"]], template: function ReviewReportCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "dateFromNow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReviewReportCardComponent_nz_tag_15_Template, 5, 3, "nz-tag", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReviewReportCardComponent_nz_tag_16_Template, 5, 3, "nz-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ReviewReportCardComponent_nz_tag_17_Template, 5, 3, "nz-tag", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.report.user.avatar == null ? null : ctx.report.user.avatar.small == null ? null : ctx.report.user.avatar.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("appImgFallback", (ctx.report.user.avatar == null ? null : ctx.report.user.avatar.url) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, "review.report_type." + ctx.report.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 11, ctx.report.createdAt), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ReviewReportStatus.Created);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ReviewReportStatus.Approved);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ReviewReportStatus.Rejected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.report.reason);
    } }, directives: [_shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__.ImgFallbackDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__.NzTypographyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_pipes_date_from_now_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__.DateFromNowPipe], styles: [".avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 64px;\n  height: 64px;\n  cursor: pointer;\n}\n.avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.report__content[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1yZXBvcnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDSjtBQUdBO0VBQ0UscUJBQUE7QUFBRiIsImZpbGUiOiJyZXZpZXctcmVwb3J0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgPiBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4ucmVwb3J0X19jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuIl19 */"] });


/***/ }),

/***/ 54250:
/*!********************************************************************************************!*\
  !*** ./src/app/review/components/review-reports-drawer/review-reports-drawer.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewReportsDrawerComponent": () => (/* binding */ ReviewReportsDrawerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _shared_pipes_date_from_now_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/date-from-now/date-from-now.pipe */ 95914);

















function ReviewReportsDrawerComponent_nz_list_item_1_nz_tag_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "review.status.created"));
} }
function ReviewReportsDrawerComponent_nz_list_item_1_nz_tag_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "review.status.approved"));
} }
function ReviewReportsDrawerComponent_nz_list_item_1_nz_tag_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "review.status.hidden"));
} }
const _c0 = function () { return []; };
function ReviewReportsDrawerComponent_nz_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-list-item-meta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-list-item-meta-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-list-item-meta-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "dateFromNow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReviewReportsDrawerComponent_nz_list_item_1_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const report_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.approve(report_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReviewReportsDrawerComponent_nz_list_item_1_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const report_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.reject(report_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-list-item-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ReviewReportsDrawerComponent_nz_list_item_1_nz_tag_25_Template, 5, 3, "nz-tag", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ReviewReportsDrawerComponent_nz_list_item_1_nz_tag_26_Template, 5, 3, "nz-tag", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ReviewReportsDrawerComponent_nz_list_item_1_nz_tag_27_Template, 5, 3, "nz-tag", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", report_r2.user.avatar == null ? null : report_r2.user.avatar.small == null ? null : report_r2.user.avatar.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("appImgFallback", (report_r2.user.avatar == null ? null : report_r2.user.avatar.url) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 15, "review.report_type." + report_r2.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 17, report_r2.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", report_r2.status === ctx_r0.ReviewReportStatus.Approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTheme", "twotone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 19, "review.approve"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", report_r2.status === ctx_r0.ReviewReportStatus.Rejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTheme", "twotone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 21, "review.reject"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", report_r2.reason, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", report_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ReviewReportStatus.Created);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ReviewReportStatus.Approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ReviewReportStatus.Rejected);
} }
function ReviewReportsDrawerComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReviewReportsDrawerComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.refetch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx_r1.loading && !!(ctx_r1.reports == null ? null : ctx_r1.reports.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "common.load_more"), " ");
} }
const PAGE_SIZE = 10;
class ReviewReportsDrawerComponent {
    constructor(drawerRef, getReportsOfReviewGQL, approveReviewReportGQL, rejectReviewReportGQL, translateService, msgService) {
        this.drawerRef = drawerRef;
        this.getReportsOfReviewGQL = getReportsOfReviewGQL;
        this.approveReviewReportGQL = approveReviewReportGQL;
        this.rejectReviewReportGQL = rejectReviewReportGQL;
        this.translateService = translateService;
        this.msgService = msgService;
        this.ReviewReportStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus;
        this.loading = false;
        this.completed = false;
        this.reports = [];
        this.list = [];
        this.approving = false;
        this.rejecting = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.dataRef = this.getReportsOfReviewGQL.watch({
            where: {
                review: {
                    id: this.reviewId,
                },
            },
            first: PAGE_SIZE,
            orderBy: {
                createdAt: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc,
            },
        }, {
            fetchPolicy: 'network-only',
            notifyOnNetworkStatusChange: true,
        });
        this.dataRef.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(({ data, error, errors, loading }) => {
            var _a, _b, _c;
            this.loading = loading;
            if (loading) {
                return;
            }
            if (error || errors) {
                return;
            }
            if ((_a = data === null || data === void 0 ? void 0 : data.reviewReports) === null || _a === void 0 ? void 0 : _a.length) {
                this.reports = [
                    ...data.reviewReports.map((report) => (Object.assign({}, report))),
                ];
                this.list = this.reports;
            }
            this.completed =
                ((_b = data === null || data === void 0 ? void 0 : data.reviewReports) === null || _b === void 0 ? void 0 : _b.length) === 0 ||
                    ((_c = data === null || data === void 0 ? void 0 : data.reviewReports) === null || _c === void 0 ? void 0 : _c.length) < PAGE_SIZE;
        });
    }
    refetch() {
        var _a;
        this.list = [...this.list, ...new Array(5).fill({ loading: true })];
        (_a = this.dataRef) === null || _a === void 0 ? void 0 : _a.refetch({
            where: {
                review: {
                    id: this.reviewId,
                },
            },
            first: PAGE_SIZE,
            skip: this.reports.length,
            orderBy: {
                createdAt: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc,
            },
        });
    }
    approve(report) {
        this.approving = true;
        this.approveReviewReportGQL
            .mutate({
            where: {
                id: report.id,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(({ data, errors }) => {
            this.approving = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('review.approve_report_error'));
                return;
            }
            if (data) {
                report.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus.Approved;
                this.action = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus.Approved;
                this.msgService.success(this.translateService.instant('review.approve_report_success'));
            }
        }, () => {
            this.approving = false;
        });
    }
    reject(report) {
        this.rejecting = true;
        this.rejectReviewReportGQL
            .mutate({
            where: {
                id: report.id,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe(({ data, errors }) => {
            this.rejecting = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('review.reject_report_error'));
                return;
            }
            if (data) {
                report.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus.Rejected;
                this.msgService.success(this.translateService.instant('review.reject_report_success'));
            }
        }, () => {
            this.rejecting = false;
        });
    }
    close() {
        this.drawerRef.close(this.action);
    }
    trackBy(index, report) {
        return report.id;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ReviewReportsDrawerComponent.ɵfac = function ReviewReportsDrawerComponent_Factory(t) { return new (t || ReviewReportsDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetReportsOfReviewGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ApproveReviewReportGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.RejectReviewReportGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__.NzMessageService)); };
ReviewReportsDrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReviewReportsDrawerComponent, selectors: [["app-review-reports-drawer"]], inputs: { reviewId: "reviewId" }, decls: 4, vars: 5, consts: [[3, "nzItemLayout", "nzLoading"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-list-load-more", "", 1, "d-flex", "justify-content-center"], ["nz-button", "", "class", "d-flex align-items-center", 3, "nzLoading", "click", 4, "ngIf"], [1, "avatar", "rounded-circle"], [3, "src", "appImgFallback"], ["nz-list-item-actions", ""], ["nz-button", "", "nzType", "text", "nzBlock", "", 1, "btn__action", 3, "disabled", "click"], ["nz-icon", "", "nzType", "like", "nzTheme", "outline", 3, "nzTheme"], ["nz-icon", "", "nzType", "dislike", "nzTheme", "outline", "nzTwotoneColor", "#eb2f96", 3, "nzTheme"], [3, "ngSwitch"], ["nzColor", "warning", 4, "ngSwitchCase"], ["nzColor", "success", 4, "ngSwitchCase"], ["nzColor", "error", 4, "ngSwitchCase"], ["nzColor", "warning"], ["nz-icon", "", "nzType", "exclamation", "nzTheme", "outline"], ["nzColor", "success"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nzColor", "error"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], ["nz-button", "", 1, "d-flex", "align-items-center", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"]], template: function ReviewReportsDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReviewReportsDrawerComponent_nz_list_item_1_Template, 28, 24, "nz-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReviewReportsDrawerComponent_button_3_Template, 4, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzItemLayout", "vertical")("nzLoading", !ctx.reports.length && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reports)("ngForTrackBy", ctx.trackBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.completed);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemMetaAvatarComponent, _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__.ImgFallbackDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemMetaDescriptionComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemActionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemExtraComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_14__.NzTagComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_pipes_date_from_now_date_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__.DateFromNowPipe], styles: [".avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 32px;\n  padding-top: 32px;\n  overflow: hidden;\n}\n.avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1yZXBvcnRzLWRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoicmV2aWV3LXJlcG9ydHMtZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMycHg7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gID4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 26274:
/*!*******************************************************************!*\
  !*** ./src/app/review/pages/review-list/review-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewListComponent": () => (/* binding */ ReviewListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _components_review_reports_drawer_review_reports_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/review-reports-drawer/review-reports-drawer.component */ 54250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/space */ 33521);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _shared_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/user-select/user-select.component */ 18003);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/review-card/review-card.component */ 53287);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/badge */ 9375);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 93730);





























function ReviewListComponent_nz_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 8, "common.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "common.all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 12, "review.status.created"))("nzValue", ctx_r0.ReviewStatus.Created);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 14, "review.status.approved"))("nzValue", ctx_r0.ReviewStatus.Approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 16, "review.status.hidden"))("nzValue", ctx_r0.ReviewStatus.Hidden);
} }
function ReviewListComponent_nz_select_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, "common.delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, "common.all"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 10, "common.new"))("nzValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 12, "common.deleted"))("nzValue", true);
} }
function ReviewListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "common.search"), " ");
} }
function ReviewListComponent_nz_list_item_33_nz_list_item_action_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewListComponent_nz_list_item_33_nz_list_item_action_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const review_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.viewReports(review_r7, _r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nz-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "review.view_report"), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzCount", review_r7.reportsConnection.aggregate.count)("nzOverflowCount", 99);
} }
function ReviewListComponent_nz_list_item_33_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-review-card", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewListComponent_nz_list_item_33_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); return _r9.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewListComponent_nz_list_item_33_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); return _r9.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ReviewListComponent_nz_list_item_33_nz_list_item_action_14_Template, 6, 5, "nz-list-item-action", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "nz-list-item-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("review", review_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", _r9.approving)("disabled", _r9.status === ctx_r4.ReviewStatus.Approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTheme", "twotone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, "review.approve"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", _r9.rejecting)("disabled", _r9.status === ctx_r4.ReviewStatus.Hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 11, "review.hide"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", review_r7.reportsConnection.aggregate.count !== 0);
} }
function ReviewListComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-pagination", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzPageIndexChange", function ReviewListComponent_ng_template_34_Template_nz_pagination_nzPageIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPageIndex", ctx_r6.pageIndex)("nzTotal", ctx_r6.reviewsCount)("nzPageSize", ctx_r6.pageSize);
} }
const _c0 = function () { return [16, 8]; };
var Sort;
(function (Sort) {
    Sort["UPDATED_AT_ASC"] = "UPDATED_AT_ASC";
    Sort["UPDATED_AT_DESC"] = "UPDATED_AT_DESC";
})(Sort || (Sort = {}));
class ReviewListComponent {
    constructor(fb, getReviewListGQL, router, route, msgService, translateService, searchUsersGQL, drawerService, breakpointObserver) {
        this.fb = fb;
        this.getReviewListGQL = getReviewListGQL;
        this.router = router;
        this.route = route;
        this.msgService = msgService;
        this.translateService = translateService;
        this.searchUsersGQL = searchUsersGQL;
        this.drawerService = drawerService;
        this.breakpointObserver = breakpointObserver;
        this.ReviewStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewStatus;
        this.Sort = Sort;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.reviews = [];
        this.reviewsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.isDeleted = false;
        this.sort = Sort.UPDATED_AT_DESC;
        this.searchForm = this.fb.group({
            text: [null],
            status: ['ALL'],
            isDeleted: [false],
            sort: [Sort.UPDATED_AT_DESC],
            user: [undefined],
        });
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 767px)');
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
            .subscribe((paramMap) => {
            this.pageIndex = parseInt(paramMap.get('page') || '1', 10);
            this.pageSize = parseInt(paramMap.get('size') || '10', 10);
            this.text = paramMap.get('text') || '';
            this.userId = parseInt(paramMap.get('user') || '0', 10) || undefined;
            this.status = Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewStatus).includes(paramMap.get('status'))
                ? paramMap.get('status')
                : undefined;
            this.sort = Object.values(Sort).includes(paramMap.get('sort'))
                ? paramMap.get('sort')
                : Sort.UPDATED_AT_DESC;
            this.isDeleted =
                paramMap.get('deleted') === 'true'
                    ? true
                    : paramMap.get('deleted') === 'false'
                        ? false
                        : undefined;
            this.patchFormValue();
            if (this.dataSubscription) {
                this.refetch();
            }
            else {
                this.dataQueryRef = this.getReviewListGQL.watch(this.getVariables(), {
                    notifyOnNetworkStatusChange: true,
                    fetchPolicy: 'network-only',
                });
                this.dataSubscription = this.dataQueryRef.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
                    .subscribe(({ data, loading, error, errors }) => {
                    this.loading = loading;
                    if (loading) {
                        return;
                    }
                    if (error || errors) {
                        this.msgService.error(this.translateService.instant('ui.message.can_not_load_data'));
                        return;
                    }
                    if (data) {
                        this.reviews = data.reviews;
                        this.reviewsCount = data.reviewsConnection.aggregate.count;
                    }
                }, () => {
                    this.msgService.error(this.translateService.instant('ui.message.can_not_load_data'));
                });
            }
        });
    }
    patchFormValue() {
        var _a;
        /**
         * FIXME nz-select does not support undefined and null
         * https://github.com/NG-ZORRO/ng-zorro-antd/issues/5950
         */
        if (this.searchForm.controls.isDeleted.untouched) {
            this.searchForm.patchValue({
                isDeleted: typeof this.isDeleted === 'boolean' ? this.isDeleted : 'ALL',
            });
        }
        if (this.searchForm.controls.status.untouched) {
            this.searchForm.patchValue({
                status: this.status || 'ALL',
            });
        }
        if (((_a = this.text) === null || _a === void 0 ? void 0 : _a.trim()) && this.searchForm.controls.text.untouched) {
            this.searchForm.patchValue({
                text: this.text,
            });
        }
        if (Sort[this.sort]) {
            this.searchForm.patchValue({
                sort: this.sort || undefined,
            });
        }
        /**
         * FIXME nz-select untouched = true event user select a value
         */
        if (this.userId &&
            this.searchForm.controls.user.untouched &&
            this.searchForm.controls.user.pristine) {
            this.searchUsersGQL
                .fetch({
                where: {
                    id: this.userId,
                },
                first: 1,
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
                .subscribe(({ data }) => {
                if (data)
                    this.searchForm.patchValue({
                        user: data.users[0],
                    });
            });
        }
    }
    refetch() {
        var _a;
        (_a = this.dataQueryRef) === null || _a === void 0 ? void 0 : _a.refetch(this.getVariables());
    }
    getVariables() {
        var _a;
        return {
            where: {
                contentContains: ((_a = this.text) === null || _a === void 0 ? void 0 : _a.trim()) || undefined,
                isDeleted: typeof this.isDeleted === 'boolean' ? this.isDeleted : undefined,
                status: this.status || undefined,
                user: {
                    id: this.userId || undefined,
                },
            },
            first: this.pageSize,
            skip: (this.pageIndex - 1) * this.pageSize,
            orderBy: {
                updatedAt: this.sort === Sort.UPDATED_AT_ASC ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Asc : _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc,
            },
        };
    }
    paginate(page) {
        this.router.navigate([], {
            queryParams: {
                page,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    handleSearch() {
        var _a;
        const searchData = this.searchForm.value;
        const text = searchData.text || undefined;
        const sort = searchData.sort || undefined;
        const isDeleted = typeof searchData.isDeleted === 'boolean'
            ? searchData.isDeleted
            : undefined;
        const status = Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewStatus).includes(searchData.status)
            ? searchData.status
            : undefined;
        const userId = (_a = searchData.user) === null || _a === void 0 ? void 0 : _a.id;
        this.router.navigate([], {
            queryParams: {
                text,
                sort,
                deleted: isDeleted,
                status,
                user: userId,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    viewReports(review, reviewCard) {
        const drawerRef = this.drawerService.create({
            nzTitle: this.translateService.instant('review.report_list'),
            nzContent: _components_review_reports_drawer_review_reports_drawer_component__WEBPACK_IMPORTED_MODULE_1__.ReviewReportsDrawerComponent,
            nzContentParams: {
                reviewId: review.id,
            },
            nzWidth: this.isMobile ? '100%' : 720,
        });
        drawerRef.afterClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => {
            var _a;
            if (((_a = drawerRef.getContentComponent()) === null || _a === void 0 ? void 0 : _a.action) === _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus.Approved) {
                reviewCard.status = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewStatus.Hidden;
            }
        });
    }
    trackById(index, item) {
        return item.id;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ReviewListComponent.ɵfac = function ReviewListComponent_Factory(t) { return new (t || ReviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetReviewListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.SearchUsersGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__.NzDrawerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.BreakpointObserver)); };
ReviewListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReviewListComponent, selectors: [["app-review-list"]], decls: 36, vars: 52, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nz-row", "", 3, "nzGutter", "nzJustify"], ["nz-col", "", 3, "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], ["formControlName", "status", 3, "nzPlaceHolder", 4, "nzSpaceItem"], ["formControlName", "isDeleted", 3, "nzPlaceHolder", 4, "nzSpaceItem"], ["nz-col", "", 1, "text-right", 3, "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], ["formControlName", "sort"], [3, "nzLabel", "nzValue"], ["nz-row", "", 3, "nzGutter"], ["formControlName", "user"], ["nzSearch", "", 3, "nzAddOnAfter"], ["nz-input", "", "formControlName", "text", 3, "placeholder"], ["searchButton", ""], [1, "mb-4"], ["nzGrid", "", "nzItemLayout", "vertical", 3, "nzLoading", "nzPagination"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["paginationTemplate", ""], ["formControlName", "status", 3, "nzPlaceHolder"], ["nzValue", "ALL", 3, "nzLabel"], ["formControlName", "isDeleted", 3, "nzPlaceHolder"], ["nz-button", "", "nzType", "primary", "nzSearch", ""], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [3, "review"], ["reviewCard", ""], ["nz-list-item-actions", ""], ["nz-button", "", "nzType", "text", "nzBlock", "", 1, "btn__action", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "like", "nzTheme", "outline", 3, "nzTheme"], ["nz-icon", "", "nzType", "eye-invisible", "nzTheme", "twotone", "nzTwotoneColor", "#eb2f96"], [4, "ngIf"], ["nz-button", "", "nzType", "text", "nzBlock", "", 1, "btn__action", 3, "click"], ["nz-icon", "", "nzType", "alert", "nzTheme", "twotone", "nzTwotoneColor", "#eb2f96"], [3, "nzCount", "nzOverflowCount"], [1, "pb-4", 3, "nzPageIndex", "nzTotal", "nzPageSize", "nzPageIndexChange"]], template: function ReviewListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ReviewListComponent_Template_form_ngSubmit_10_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ReviewListComponent_nz_select_14_Template, 10, 18, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ReviewListComponent_nz_select_15_Template, 8, 14, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-user-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ReviewListComponent_ng_template_29_Template, 4, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "nz-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "nz-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ReviewListComponent_nz_list_item_33_Template, 16, 13, "nz-list-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ReviewListComponent_ng_template_34_Template, 1, 3, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 40, "common.review"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 42, "common.review"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c0))("nzJustify", "space-between");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 44, "review.sort.updated_at_desc"))("nzValue", ctx.Sort.UPDATED_AT_DESC);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 46, "review.sort.updated_at_asc"))("nzValue", ctx.Sort.UPDATED_AT_ASC);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](51, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzAddOnAfter", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 48, "review.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx.loading)("nzPagination", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reviews)("ngForTrackBy", ctx.trackById);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_14__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_14__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzColDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__.NzSpaceComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__.NzSpaceItemDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzOptionComponent, _shared_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_2__.UserSelectComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__.NzListGridDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__.NzListItemComponent, _components_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_3__.ReviewCardComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__.NzListItemActionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_22__.NzListItemExtraComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_26__.NzBadgeComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_27__.NzPaginationComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".btn__action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoicmV2aWV3LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX19hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 46732:
/*!*********************************************************************************!*\
  !*** ./src/app/review/pages/review-report-list/review-report-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewReportListComponent": () => (/* binding */ ReviewReportListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/review-card/review-card.component */ 53287);
/* harmony import */ var _components_review_report_card_review_report_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/review-report-card/review-report-card.component */ 66466);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 93730);






















function ReviewReportListComponent_nz_list_item_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-review-card", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-review-report-card", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReviewReportListComponent_nz_list_item_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); _r6.approve(); return _r5.status = ctx_r7.ReviewStatus.Hidden; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReviewReportListComponent_nz_list_item_20_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return _r6.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "nz-list-item-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("review", report_r3.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("report", report_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", _r6.approving)("disabled", _r6.status === ctx_r0.ReviewReportStatus.Approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTheme", "twotone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, "review.approve"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", _r6.rejecting)("disabled", _r6.status === ctx_r0.ReviewReportStatus.Rejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 11, "review.reject"), " ");
} }
function ReviewReportListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPageIndexChange", function ReviewReportListComponent_ng_template_21_Template_nz_pagination_nzPageIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.paginate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageIndex", ctx_r2.pageIndex)("nzTotal", ctx_r2.reportsCount)("nzPageSize", ctx_r2.pageSize);
} }
const _c0 = function () { return [16, 8]; };
var Sort;
(function (Sort) {
    Sort["ID_ASC"] = "ID_ASC";
    Sort["ID_DESC"] = "ID_DESC";
})(Sort || (Sort = {}));
class ReviewReportListComponent {
    constructor(router, route, getReviewReportListGQL, msgService, translateService, fb) {
        this.router = router;
        this.route = route;
        this.getReviewReportListGQL = getReviewReportListGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.fb = fb;
        this.ReviewStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewStatus;
        this.ReviewReportStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewReportStatus;
        this.Sort = Sort;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.reports = [];
        this.reportsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.sort = Sort.ID_DESC;
        this.searchForm = this.fb.group({
            sort: [Sort.ID_DESC],
        });
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe((paramMap) => {
            this.pageIndex = parseInt(paramMap.get('page') || '1', 10);
            this.pageSize = parseInt(paramMap.get('size') || '10', 10);
            this.sort = Object.values(Sort).includes(paramMap.get('sort'))
                ? paramMap.get('sort')
                : Sort.ID_DESC;
            if (this.dataSubscription) {
                this.refetch();
            }
            else {
                this.dataQueryRef = this.getReviewReportListGQL.watch(this.getVariables(), {
                    notifyOnNetworkStatusChange: true,
                    fetchPolicy: 'network-only',
                });
                this.dataSubscription = this.dataQueryRef.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
                    .subscribe(({ data, loading, error, errors }) => {
                    this.loading = loading;
                    if (loading) {
                        return;
                    }
                    if (error || errors) {
                        this.msgService.error(this.translateService.instant('ui.message.can_not_load_data'));
                        return;
                    }
                    if (data) {
                        this.reports = data.reviewReports;
                        this.reportsCount =
                            data.reviewReportsConnection.aggregate.count;
                    }
                }, () => {
                    this.msgService.error(this.translateService.instant('ui.message.can_not_load_data'));
                });
            }
        });
    }
    refetch() {
        var _a;
        (_a = this.dataQueryRef) === null || _a === void 0 ? void 0 : _a.refetch(this.getVariables());
    }
    getVariables() {
        return {
            first: this.pageSize,
            skip: (this.pageIndex - 1) * this.pageSize,
            orderBy: {
                id: this.sort === Sort.ID_DESC ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc : _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Asc,
            },
        };
    }
    paginate(page) {
        this.router.navigate([], {
            queryParams: {
                page,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    handleSearch() {
        var _a;
        this.router.navigate([], {
            queryParams: {
                sort: ((_a = this.searchForm.get('sort')) === null || _a === void 0 ? void 0 : _a.value) || undefined,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    trackBy(index, report) {
        return report.id;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ReviewReportListComponent.ɵfac = function ReviewReportListComponent_Factory(t) { return new (t || ReviewReportListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetReviewReportListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder)); };
ReviewReportListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReviewReportListComponent, selectors: [["app-review-report-list"]], decls: 23, vars: 22, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], [1, "mb-3"], ["nz-form", "", 3, "formGroup"], ["nz-row", "", 3, "nzGutter", "nzJustify"], ["nz-col", ""], ["formControlName", "sort", 3, "ngModelChange"], [3, "nzLabel", "nzValue"], [1, "mb-4"], ["nzGrid", "", "nzItemLayout", "vertical", 3, "nzLoading", "nzPagination"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["paginationTemplate", ""], [3, "review"], ["reviewCard", ""], [3, "report"], ["reportCard", ""], ["nz-list-item-actions", ""], ["nz-button", "", "nzType", "text", "nzBlock", "", 1, "btn__action", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "like", "nzTheme", "outline", 3, "nzTheme"], ["nz-icon", "", "nzType", "eye-invisible", "nzTheme", "twotone", "nzTwotoneColor", "#eb2f96"], [1, "pb-4", 3, "nzPageIndex", "nzTotal", "nzPageSize", "nzPageIndexChange"]], template: function ReviewReportListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReviewReportListComponent_Template_nz_select_ngModelChange_13_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ReviewReportListComponent_nz_list_item_20_Template, 18, 13, "nz-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ReviewReportListComponent_ng_template_21_Template, 1, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 13, "review.report_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 15, "review.report_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c0))("nzJustify", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 17, "review.sort.created_at_desc"))("nzValue", ctx.Sort.ID_DESC);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 19, "review.sort.created_at_asc"))("nzValue", ctx.Sort.ID_ASC);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx.loading)("nzPagination", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reports)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListGridDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListItemComponent, _components_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_1__.ReviewCardComponent, _components_review_report_card_review_report_card_component__WEBPACK_IMPORTED_MODULE_2__.ReviewReportCardComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListItemActionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListItemExtraComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_20__.NzPaginationComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".btn__action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1yZXBvcnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InJldmlldy1yZXBvcnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 40138:
/*!*************************************************!*\
  !*** ./src/app/review/review-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewRoutingModule": () => (/* binding */ ReviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/review-list/review-list.component */ 26274);
/* harmony import */ var _pages_review_report_list_review_report_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/review-report-list/review-report-list.component */ 46732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'reports', component: _pages_review_report_list_review_report_list_component__WEBPACK_IMPORTED_MODULE_1__.ReviewReportListComponent },
    { path: '', pathMatch: 'full', component: _pages_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_0__.ReviewListComponent },
];
class ReviewRoutingModule {
}
ReviewRoutingModule.ɵfac = function ReviewRoutingModule_Factory(t) { return new (t || ReviewRoutingModule)(); };
ReviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReviewRoutingModule });
ReviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 83682:
/*!*****************************************!*\
  !*** ./src/app/review/review.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewModule": () => (/* binding */ ReviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 93730);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/rate */ 44054);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/space */ 33521);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/badge */ 9375);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var _review_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-routing.module */ 40138);
/* harmony import */ var _pages_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/review-list/review-list.component */ 26274);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _components_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/review-card/review-card.component */ 53287);
/* harmony import */ var _components_review_reports_drawer_review_reports_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/review-reports-drawer/review-reports-drawer.component */ 54250);
/* harmony import */ var _pages_review_report_list_review_report_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/review-report-list/review-report-list.component */ 46732);
/* harmony import */ var _components_review_report_card_review_report_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/review-report-card/review-report-card.component */ 66466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);































class ReviewModule {
}
ReviewModule.ɵfac = function ReviewModule_Factory(t) { return new (t || ReviewModule)(); };
ReviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ReviewModule });
ReviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _review_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild(),
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_11__.NzPageHeaderModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.NzBreadCrumbModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageModule,
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule,
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_17__.NzPaginationModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconModule,
            ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_19__.NzRateModule,
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_20__.NzSpaceModule,
            ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_21__.NzTypographyModule,
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__.NzTagModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__.NzGridModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzSelectModule,
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_26__.NzDividerModule,
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_27__.NzDrawerModule,
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_28__.NzBadgeModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__.LayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReviewModule, { declarations: [_pages_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_1__.ReviewListComponent,
        _components_review_card_review_card_component__WEBPACK_IMPORTED_MODULE_3__.ReviewCardComponent,
        _components_review_reports_drawer_review_reports_drawer_component__WEBPACK_IMPORTED_MODULE_4__.ReviewReportsDrawerComponent,
        _pages_review_report_list_review_report_list_component__WEBPACK_IMPORTED_MODULE_5__.ReviewReportListComponent,
        _components_review_report_card_review_report_card_component__WEBPACK_IMPORTED_MODULE_6__.ReviewReportCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _review_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_11__.NzPageHeaderModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_12__.NzBreadCrumbModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_17__.NzPaginationModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_19__.NzRateModule,
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_20__.NzSpaceModule,
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_21__.NzTypographyModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__.NzTagModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__.NzGridModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzSelectModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_26__.NzDividerModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_27__.NzDrawerModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_28__.NzBadgeModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_29__.LayoutModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_review_review_module_ts.js.map