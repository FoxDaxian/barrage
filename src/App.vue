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
		<input type="text" v-model="input_text" ref="input">
		<button @click="send_barrage">发送</button>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data(){
			return {
				input_text:""
			}
		},
		components: {
			
		},
		methods:{
			send_barrage(){
				this.send({
					text:this.input_text
				});
				this.input_text = "";
				this.$refs.input.focus();
			}
		},
		mounted(){
			this.$refs.input.focus();
			this.send = this.$start(document.querySelector('.wrap'),[0,0.5]);

		}
	}
</script>
