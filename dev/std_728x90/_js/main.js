function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".logo_metro", .3, {opacity:0}, "+=.3")
	tl.from(".phone", .5, {opacity: 0}, "+=.3")
	tl.to(".red-bg", .5, {x: 0}, "+=.3")
	tl.from(".txt", .3, {opacity:0}, "+=.3")
	
	tl.from([".logo", ".app"], .5, {opacity:0}, "+=.5")
}

start()


module.exports = {};

