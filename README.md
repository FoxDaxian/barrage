# vue2-barrage  
vue2的发送弹幕插件  

用法：  
```js
    mounted(){
			this.send = this.$start(this.$refs.barrage_wrap,[0,0.5]);
		}
    //在methods中
    this.send({
					text:this.text,
					color:"#fff",
					speed:4,
					classname:"style2"
		});
```
