<template>
	<div class="title">
		<input type="text" placeholder="请输入城市查询">
	</div>
</template>

<script>
	export default{
		name:"CitySeach"
	}
</script>


<style lang="scss" scoped>
@import '~styles/sassAll.scss';
.title{
	width: 100%;
	height: $headerHeight;
	line-height: $headerHeight;
	background: $bacolor;
	padding: 0 0.4rem;
	position: fixed;
	left: 0;
	top: $headerHeight;
	z-index: 2;
	input{
		width: 100%;
		height: 0.6rem;
		border-radius: 0.2rem;
		padding: 0.1rem;
		text-align: center;
		color: #666;
		font-size: 0.28rem;
	}
}

	
</style>
