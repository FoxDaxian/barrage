var animation = require("./lib/animate.js");
require('./lib/barrage.scss')
module.exports = {
	install(Vue,options){
		Vue.prototype.$start = (barrage_target, section) => {
			barrage_target.style.overflow = "hidden";
			barrage_target.style.position = "relative";
			return this.send.bind(this,barrage_target,section);
		};
	},
	send:(...args) => {
		const [target, section=[0,1], options] = args,
		{text,color,classname,speed} = options,
		barrage = document.createElement("div"),
		max = Math.max(...section),
		min = Math.min(...section);

		barrage.classList.add("barrage");


		barrage.innerHTML = !text ? "默认弹幕" : text;
		classname && barrage.classList.add(classname);
		barrage.style.color = color;
		barrage.style.left = (target.offsetWidth) + "px";

		
		target.appendChild(barrage);
		if( max !== min ){
			barrage.style.top = (Math.random() * (max - min) + min) * (target.offsetHeight - barrage.offsetHeight) + "px";
		}else{
			barrage.style.top = Math.random() * (target.offsetHeight - barrage.offsetHeight) + "px";
		}


		animation(barrage, "left", target.offsetWidth + barrage.offsetWidth, speed, function() {
			barrage.parentNode.removeChild(barrage);
		})

	}
}