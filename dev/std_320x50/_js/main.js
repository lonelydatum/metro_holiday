function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax({repeat:1, repeatDelay:3})
	tl.set(".frame1", {opacity:1})
	
	tl.to(".bg1", .6, {opacity:1})

	tl.to(".bg2", .6, {opacity:1}, "+=3")

	tl.to(".bg3", .6, {opacity:1}, "+=3")

}

start()


module.exports = {};

