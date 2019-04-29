<template>
	<div  class="wrapper">
		<swiper :options="swiperOption">
		  <swiper-slide class="swiper-img" v-for="item of swiperList" :key="item.id">
				<img :src="item.imgsrc" alt="">
			</swiper-slide>
		  <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
	
</template>

<script>
	export default{
		name: 'HomeSwiper',
		data (){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					loop: true
				},
				swiperList:[{
					id: "0001",
					imgsrc:"https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg"
				},{
					id: "0002",
					imgsrc:"https://img1.qunarzz.com/p/tts4/1808/ff/a95ccd8a747e2302.jpg_r_640x420x90_dd7177ff.jpg"
				},{
					id: "0003",
					imgsrc:"https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg"
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination .swiper-pagination-bullet-active
		background: #fff!important;
	.swiper-img
		width: 100%;
		height: 4.24rem;
		overflow: hidden;
		display: inline-block;
		img
			width: 100%;
			height: 100%;
		
	
</style>
