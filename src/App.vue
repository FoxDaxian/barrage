<style scoped lang="scss">
.wrap{
	height: 500px;
	width: 80vw;
	border:1px solid #000;
}
</style>

<template>
	<div id="app">
		<div class="wrap"></div>
		<button @click="send_barrage">发送</button>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {
			
		},
		methods:{
			send_barrage(){
				this.send({
				});
			}
		},
		mounted(){
			this.send = this.$start(document.querySelector('.wrap'),[0,0.5]);

		}
	}
</script>
