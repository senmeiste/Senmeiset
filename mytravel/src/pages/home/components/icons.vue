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
		data (){
			return {
				swiperOption:{},
				iconList:[
					{
						id:'001',
						icon:'&#xe670;',
						desc:'店铺'
					},{
						id:'002',
						icon:'&#xe678;',
						desc:'优惠券'
					},{
						id:'003',
						icon:'&#xe674;',
						desc:'咖啡'
					},{
						id:'004',
						icon:'&#xe673;',
						desc:'礼物'
					},{
						id:'005',
						icon:'&#xe672;',
						desc:'购物袋'
					},{
						id:'006',
						icon:'&#xe679;',
						desc:'会员'
					},{
						id:'007',
						icon:'&#xe671;',
						desc:'功能'
					},{
						id:'008',
						icon:'&#xe677;',
						desc:'地址'
					},{
						id:'009',
						icon:'&#xe675;',
						desc:'设置'
					}
				]
			}
		},
		computed:{
			pages(){
				const pages =[];
				this.iconList.forEach((item,index)=>{
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
