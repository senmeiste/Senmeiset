<template>
	<div class="iconsBox">
		<swiper class='swiperBox' :options="swiperOption">
		  <swiper-slide class="swiper-img" v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<span class="iconfont" v-html="item.icon"></span>
					<div>{{item.desc}}</div>
				</div>
			</swiper-slide>
		</swiper>
		
	</div>
</template>

<script>
	export default{
		name:"HomeIcons",
		props:{
			list:Array
		},
		data (){
			return {
				swiperOption:{},
				iconList:[]
			}
		},
		computed:{
			pages(){
				const pages =[];
				this.list.forEach((item,index)=>{
					const page = Math.floor(index/8);
					if(!pages[page]){
						pages[page] = [];
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~styles/sassAll.scss';
	.iconsBox{
		height: 4rem;
		width: 100%;
		overflow: hidden;
		background: #fff;
		.swiperBox{
			width: 100%;
			height: 100%;
		}
		.icon{
			width: 25%;
			height: 50%;
			float: left;
			text-align: center;
			font-size: 0.3rem;
			padding-top: 0.4rem;
			border: 1px solid #ffccss;
			.iconfont{
				font-size: 0.6rem;
				color: $iconBack;
			}
			div{
				margin-top: 0.2rem;
				width: 100%;
				@include textoverflow;
			}
		}
		
	}
</style>
