function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".logo_main", .5, {opacity:0}, "+=.1")
	tl.from(".phone", .5, {opacity:0}, "+=.3")
	tl.from(".txt1", .3, {opacity:0}, "+=.3")
	tl.from(".txt2", .3, {opacity:0}, "+=.1")
	tl.from(".logo", .5, {opacity:0}, "+=.5")
}

start()


module.exports = {};

