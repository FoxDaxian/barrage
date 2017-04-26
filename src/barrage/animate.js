//用于记录上次pos的临时变量
var target_point_x = null,
target_point_y = null;

var move = (function() {
	/**
	 * 动画逻辑
	 * @param  {动画目标} target       dom节点
	 * @param  {方向} direction    left top bottom right
	 * @param  {目标巨鹿} aim_distance 数字类型
	 * @param  {速度} speed        int
	 * @return {开始执行的函数}              函数类型
	 */
	return function(target, direction, aim_distance, speed) {
		speed = typeof speed === "number" ? speed : 5;
		var temp_target_point;
		direction === "left" && (temp_target_point = target_point_x = target_point_x !== null ? target_point_x - aim_distance : target.offsetLeft - aim_distance);
		direction === "right" && (temp_target_point = target_point_x = target_point_x !== null ? target_point_x + aim_distance : target.offsetLeft + aim_distance);
		direction === "top" && (temp_target_point = target_point_y = target_point_y !== null ? target_point_y - aim_distance : target.offsetTop - aim_distance);
		direction === "bottom" && (temp_target_point = target_point_y = target_point_y !== null ? target_point_y + aim_distance : target.offsetTop + aim_distance);
		return function() {
			if (direction === "left") {
				(target.offsetLeft > temp_target_point) ? (target.style.left = target.offsetLeft - speed + "px") : (target.style.left = temp_target_point + "px");
			} else if (direction === "right") {
				(target.offsetLeft < temp_target_point) ? (target.style.left = target.offsetLeft + speed + "px") : (target.style.left = temp_target_point + "px");
			} else if (direction === "top") {
				(target.offsetTop > temp_target_point) ? (target.style.top = target.offsetTop - speed + "px") : (target.style.top = temp_target_point + "px");
			} else if (direction === "bottom") {
				(target.offsetTop < temp_target_point) ? (target.style.top = target.offsetTop + speed + "px") : (target.style.top = temp_target_point + "px");
			}
			return temp_target_point;
		}
	}
})();

/**
 * 上下左右动画小插件
 * @param  {要执行动画的目标}   target       dom节点
 * @param  {方向}   direction    left,right,top,bottom
 * @param  {要移动的距离}   aim_distance  数字类型
 * @param  {速度}   speed        数字类型
 * @param  {回调函数} cb           函数
 * @return {fn}                真正的动画调用者
 */
function animation(target, direction, aim_distance, speed, cb = function() {console.log("callback called");} ) {
	cb = typeof speed === "function" ? speed : cb;
	var queueObj = [];
	//调用新的animation的时候，重置一下，不然每次都是叠加的
	target_point_x = null,
	target_point_y = null;
	queueObj.next = function(n_dir, queue_x, speed) {
		this.push({
			fn: move(target, n_dir, queue_x, speed),
			dir: n_dir,
			last_x: queue_x
		});
		return queueObj;
	}
	return (function() {
		/**
		 * 真正执行动画的
		 * @param  {判断时候结束的条件} ani      fn
		 * @param  {方向} real_dir left top bottom  right
		 * @return {动画队列数组}          用于依次开启动画的队列数组
		 */
		function real(ani, real_dir) {
			var temp = ani,
			tempArr;

			function fn() {
				if (real_dir === "left" || real_dir === "right") {
					if (target.offsetLeft !== temp()) {
						requestAnimationFrame(fn);
					} else {
						queueObj[0] && (tempArr = queueObj.shift());
						tempArr || cb();
						tempArr && real(tempArr.fn,  tempArr.dir);
					}
				} else if (real_dir === "top" || real_dir === "bottom") {
					if (target.offsetTop !== temp()) {
						requestAnimationFrame(fn);
					} else {
						queueObj[0] && (tempArr = queueObj.shift());
						tempArr || cb();
						tempArr && real(tempArr.fn,  tempArr.dir);
					}
				}
			}
			requestAnimationFrame(fn);
		}
		real(move(target, direction, aim_distance, speed),  direction);
		return queueObj;
	})();
}
module.exports = animation;
