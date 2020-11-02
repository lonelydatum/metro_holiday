function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".logo", .5, {opacity:0}, "+=.3")
	
	tl.from([".phone", ".screen"], .5, {opacity:0}, "-=.1")

	
	tl.from(".screen2", .5, {opacity: 0}, "+=1.3")

	tl.from(".red", .5, {y:300})
	tl.from(".txt", .5, {opacity: 0}, "+=.3")
	tl.from(".app", .5, {opacity:0}, "+=.6")
}

start()


module.exports = {};

