<template>
	<div class="container" @click="handGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			  <swiper-slide class="swiper-img" v-for="(item,index) in imgs" :key="index">
					<img class="gallaryImg" :src="item.imgsrc">
				</swiper-slide>
			  <div class="swiper-pagination"  slot="pagination"> 0.0 </div>
			</swiper>
		</div>
		
	</div>
</template>

<script>
	export default{
		name: 'CommonGallary',
		props:{
			imgs:{
				type:Array,
				default(){
					return [
						"https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg"
					]
				}
			}
		},
		data () {
			return {
				swiperOptions:{
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction',
					},
					loop: true,
				}
			}
		},
		methods:{
			handGallaryClick (){
				this.$emit("close")
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	
	.container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 10;
		background: #000;
		.wrapper{
			width: 100%;
			height: 0;
			// overflow: hidden;
			padding-bottom: 100%;
			.swiper-container{
				overflow: inherit;
			}
			.gallaryImg{
				width: 100%;
			}
			.swiper-pagination{
				color: #fff;
				bottom: -1rem;
			}
		}
	}
</style>
