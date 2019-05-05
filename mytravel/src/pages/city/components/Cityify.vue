<template>
	<div class="title">
		<li 
		v-for="item of letter" 
		:key="item"
		:ref="item"
		@click="handclickRight"
		@touchstart="handTouchStart"
		@touchmove="handTouchMove"
		@touchenf="handTouchEnd"
		>
		{{item}}
		</li>
	</div>
</template>

<script>
	export default {
		name: "CityCityify",
		props:{
			cities:Object
		},
		data (){
			return{
				touchStatus:false,
				 startY :0,
				 timer:null
			}
		},
		computed:{//计算属性
			letter(){
				const letter = [];
				for( let i in this.cities){
					letter.push(i)
				}
				return letter
			}
		},
		updated() {//渲染完成之后执行的钩子函数
			this.startY = this.$refs["A"][0].offsetTop;
		},
		methods:{
			handclickRight(e){
				// console.log(e.target.innerText);
				this.$emit("change",e.target.innerText)
			},
			handTouchStart(){
				this.touchStatus = true
			},
			handTouchMove(e){
				if(this.touchStatus){
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(()=>{
						const touchY = e.touches[0].clientY;
						const index = Math.floor((touchY - this.startY)/20);
						if(this.letter[index]&&this.letter.length >index ){
							this.$emit("change",this.letter[index])
						}
					},16)
				}
			},
			handTouchEnd(){
				this.touchStatus = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";
	@import '~styles/sassAll.scss';

	.title {
		width: 0.4rem;
		height: 100%;
		display: flex;
		position: fixed;
		z-index: 5;
		right: 0;
		top: 0;bottom: 0;
		margin: auto 0;
		flex-direction: column;
		justify-content: center;
		li{
			width: 100%;
			height: 0.4rem;
			text-align: center;
			font-size: 0.3rem;
			color: #999;
		}
	}
</style>
