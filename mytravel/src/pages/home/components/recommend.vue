<template>
	<div class="recommendBox">
		<div class="title">热门推荐</div>
		<ul class="itemlist">
			
			<router-link
				tag="li"
			 class="itembox" 
			 v-for="item of list" 
			 :key="item.id"
			 :to="'/detail/'+item.id "
			 >
				<div class="item-img">
					<img :src="item.imgsrc">
				</div>
				<div class="item-centex">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-buton">查看详情</button>
				</div>
			<!-- </li> -->
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomeRecommend",
		data (){
			return{
				itemlist: []
			}
		},
		props:{
			list: Array
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '~styles/sassAll.scss';

	.recommendBox {
		margin-top: 0.2rem;

		.title {
			line-height: 0.75rem;
			width: 100%;
			font-size: 0.32rem;
			text-align: left;
			padding: 0 0.2rem;
			background: #f8f8f8;
		}

		.itemlist {
			background: #fff;
			width: 100%;
			height: auto;
			display: inline-block;

			.itembox {
				width: 100%;
				height: 2.1rem;
				overflow: hidden;
				display: flex;
				float: left;

				.item-img {
					width: 1.7rem;
					height: 1.7rem;
					margin: 0.2rem;
					box-sizing: border-box;
					border-radius: 0.1rem;
					overflow: hidden;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.item-centex {
					flex: 1;
					padding: 0.2rem;
					font-size: 0.34rem;

					.item-title {
						color: #3d3d3d;
						line-height: 0.4rem;
						font-weight: 600;
						@include textoverflow;
					}

					.item-desc {
						color: #666;
						line-height: 0.36rem;
						font-size: 0.24rem;
					}

					.item-buton {
						float: right;
						width: auto;
						height: 0.6rem;
						padding: 0 0.2rem;
						color: #fff;
						background: $bacolor;
						border-radius: 0.1rem;
						@include centenoverflow(2);
					}
				}
			}
		}
	}
</style>
