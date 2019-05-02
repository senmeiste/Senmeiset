<template>
	<div class="header">
		<div class="leftBtn">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="centennInput"><span class="iconfont">&#xe632;</span>内容</div>
		
		<router-link to="/city">
			<div class="rightCity">{{city}}<span class="iconfont">&#xe612;</span></div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'HomeHeader',
		props:{
			city: String
		},
		data (){
			return {
			}
		}
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";
	@import '~styles/sassAll.scss';
	.header {
		background: $bacolor;
		height: $headerHeight;
		display: flex;
		color: #fff;
		line-height: $headerHeight;
		font-size: 0.28rem;
		.leftBtn {
			width: .64rem;
			float: left;
			padding-left: 0.1rem; 
			font-size: 0.4rem;
		}
		.centennInput {
			flex: 1;
			height: .64rem;
			background: #fff;
			color: #999;
			border-radius: 0.1rem;
			line-height: 0.64rem;
			margin: 0.1rem 0.12rem;
			padding: 0 0.1rem;
		}
		.rightCity {
			width: 1.24rem;
			float: right;
			text-align: center;
			color: #fff;
		}
	}
</style>
