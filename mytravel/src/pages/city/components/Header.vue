<template>
	<div class="title">
		<router-link to="/" class="leftBtn">
			<div class="leftBtn">
				<span class="iconfont">&#xe624;</span>
			</div>
		</router-link>
		城市选择
	</div>
</template>

<script>
	export default {
		name: "CityHeader"
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";
	@import '~styles/sassAll.scss';

	.title {
		width: 100%;
		height: 0.86rem;
		background: $bacolor;
		font-size: 0.36rem;
		text-align: center;
		line-height: 0.86rem;
		color: #fff;
		position: relative;
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
</style>
