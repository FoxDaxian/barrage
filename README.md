<h1 align="center">VUE2-barrage</h1>
<p align="center">
	<img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="">
	<img src="https://img.shields.io/npm/v/vue2-barrage.svg" alt="">
	<img src="https://img.shields.io/npm/l/vue2-barrage.svg" alt="">
</p>

# 用法：
```js
//首先下载安装
npm install vue2-barrge --save
//然后在引入到你的vue中
import barrage from "vue2-barrage";
//Vue调用
Vue.use(barrage);
```
```js
//组件绑定mounted钩子函数内执行初始化方法，返回发送弹幕方法
mounted(){
	this.send = this.$start(this.$refs.barrage_wrap);
}
//vue的methods内任意方法里添加send方法，注意，请务必传入空对象参数
this.send({});
```


#API说明：

<h5>$start方法：初始化方法，返回一个发送弹幕的方法</h5>

| 参数 | 说明  |
| :------------ |:---------------:|
| 1      | 需要被插入弹幕的元素 |
| 2      | 弹幕出现大体位置，默认值为全部，即被插入弹幕的总高的随机位置，可传入数组形式，eg:[0.2,0.5],大小顺序不限，但必须为`大于0` `小于1`的小数  | 


___

<h5>send：$start返回的发送弹幕的方法</h5>
只能传入一个配置选项参数

>默认不传的情况下，请写入`{}(空对象)`  

<b>配置选项说明</b>  

* text：发送弹幕的文字内容，默认为`默认弹幕`
* color：字体颜色，默认为`黑色`
* speed：弹幕速度，默认为`5`
* classname：样式类名，目前有`style1~3`三种选择，分别代表`蓝色、绿色、红色`


# 其他
[弹幕小例子](http://rbblog.space/)

[我的博客](http://rbblog.space/)

