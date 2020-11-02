(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function start() {
	TweenLite.set(".bg1", { opacity: 1 });

	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax({ repeat: 1, repeatDelay: 3 });
	tl.set(".frame1", { opacity: 1 });

	tl.to(".bg1", .6, { opacity: 1 });

	tl.to(".bg2", .6, { opacity: 1 }, "+=3");

	tl.to(".bg3", .6, { opacity: 1 }, "+=3");
}

exports.size = size;
exports.start = start;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
