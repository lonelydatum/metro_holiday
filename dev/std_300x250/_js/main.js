function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.to(".childholder", .5, {y:0}, "+=.2")
	tl.to(".childholder", .5, {y:-202}, "+=1")	
	tl.from(".logo", .5, {opacity:0}, "+=.3")
	tl.from(".txt", .5, {opacity:0}, "+=.3")
	tl.from(".app", .5, {opacity:0}, "+=.8")

}

start()


module.exports = {};

