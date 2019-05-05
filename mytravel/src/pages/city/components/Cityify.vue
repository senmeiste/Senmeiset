<template>
	<div class="title">
		<li v-for="(item,key) of cities" :key="key">{{key}}</li>
	</div>
</template>

<script>
	export default {
		name: "CityCityify",
		props:{
			cities:Object
		}
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";
	@import '~styles/sassAll.scss';

	.title {
		width: 0.4rem;
		height: 100%;
		display: flex;
		position: fixed;
		z-index: 5;
		right: 0;
		top: 0;bottom: 0;
		margin: auto 0;
		flex-direction: column;
		justify-content: center;
		li{
			width: 100%;
			height: 0.4rem;
			text-align: center;
			font-size: 0.3rem;
			color: #999;
		}
	}
</style>
