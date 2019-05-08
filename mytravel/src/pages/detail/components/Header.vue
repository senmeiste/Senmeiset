<template>
	<div>
		<router-link tag="div" to="/" class="headerAbs" v-show="showAbs">
			<span class="iconfont headerAbsBack">&#xe624;</span>
		</router-link>
		
		<div class="headerFixed" v-show="!showAbs"
			:style="opacityStyle"
		>
			<router-link to="/" class="leftBtn">
				<div class="leftBtn">
					<span class="iconfont">&#xe624;</span>
				</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default{
		name: 'DetailHeader',
		data (){
			return {
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handScroll(){
				const top = document.documentElement.scrollTop;
				if(top > 80){
					let opacity = top/140;
					opacity = opacity >1 ? 1 :opacity;
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				}else{
					this.showAbs = true
				}
				console.log()
			}
		},
		activated() {//页面渲染完成之后
			window.addEventListener("scroll",this.handScroll)
		},
		deactivated() {//页面卸载之后
			window.removeEventListener("scroll",this.handScroll)
		}
	}
</script>

<style lang="scss" scoped>
	@import '~styles/sassAll.scss';
	
	.headerFixed {
		width: 100%;
		height: 0.86rem;
		background: $bacolor;
		font-size: 0.36rem;
		text-align: center;
		line-height: 0.86rem;
		color: #fff;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		.leftBtn{
			width: .64rem;
			height: 0.86rem;
			line-height: 0.86rem;
			padding-left: 0.1rem;
			font-size: 0.4rem;
			position: absolute;
			left: 0;
			color: #fff;
		}
	}
	.headerAbs{
		position:absolute;
		left:0.2rem;
		top:.2rem;
		width:.8rem;
		height: .8rem;
		border-radius: .4rem;
		background: rgba(0,0,0,0.6);
		text-align: center;
		line-height: 0.8rem;
		.headerAbsBack{
			color: #fff;
			font-size: .4rem;
		}
	}
</style>
