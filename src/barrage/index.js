var animation = require("./animate.js");
require('./barrage.scss')
export default {
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


		//设置用户自定义选项
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
		//初始化位置


		animation(barrage, "left", target.offsetWidth + barrage.offsetWidth, speed, function() {
			barrage.parentNode.removeChild(barrage);
		})

	}
}