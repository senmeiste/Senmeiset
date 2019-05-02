<template>
	<div  class="wrapper">
		<swiper :options="swiperOption">
		  <swiper-slide class="swiper-img" v-for="item of list" :key="item.id">
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
				swiperList:[]
			}
		},
		props:{
			list : Array
		},
		mounted () {
			this.swiperList = this.list
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
