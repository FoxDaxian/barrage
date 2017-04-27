<style scoped lang="scss">
	.wrap{
		text-align: center;
		.barrage_wrap{
			height: 500px;
			border:1px solid red;
			width: 1000px;
			margin:0 auto;
		}	
		input{
			margin-top: 50px;
		}
	}
</style>

<template>
	<div class="wrap">
		<div class="barrage_wrap" ref="barrage_wrap">
			
		</div>
		<input type="text" v-model="text">
		<button @click="dododo">点击</button>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data(){
			return {
				send:null,
				text:""
			}
		},
		components: {
			
		},
		methods:{
			dododo(){
				//弹幕文字，字颜色，渐变颜色类名，速度
				this.send({
					text:this.text,
					color:"#fff",
					speed:4,
					classname:"style3"
				});
			}
		},
		mounted(){
			//出现弹幕的目标，出现弹幕的大体位置
			this.send = this.$start(this.$refs.barrage_wrap,[0,0.5]);
		}
	}
</script>
