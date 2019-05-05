<template>
	<div class="recommendBox">
		<div class="title">热门推荐</div>
		<ul class="itemlist">
			<li class="itembox" v-for="item of list" :key="item.id">
				<div class="item-img">
					<img :src="item.imgsrc">
				</div>
				<div class="item-centex">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomeWeekend",
		data (){
			return{
				itemlist: []
			}
		},
		props:{
			list:Array
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
				height: auto;
				overflow: hidden;
				display: inline-block;
				float: left;
				box-sizing: border-box;
				margin-bottom: 0.2rem;
				.item-img {
					width: 100%;
					height: 1.7rem;
					padding: 0.2rem;
					box-sizing: border-box;
					overflow: hidden;

					img {
						width: 100%;
						height: 100%;
						border-radius: 0.1rem;
					}
				}

				.item-centex {
					width: 100%;
					float: left;
					padding: 0 0.2rem;
					font-size: 0.34rem;

					.item-title {
						color: #3d3d3d;
						line-height: 0.36rem;
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
						@include textoverflow;
					}
				}
			}
		}
	}
</style>
