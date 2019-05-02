<template>
	<div>
		<div class="cityClafy">
			<div class="itemTitle border-topbottom">
				当前城市
			</div>
			<div class="itemBox">
				<div class="itemCity">北京</div>
			</div>
		</div>
		<div class="cityClafy">
			<div class="itemTitle border-topbottom">
				热门城市
			</div>
			<div class="itemBox">
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
				<div class="itemCity">北京</div>
			</div>
		</div>
		<div class="cityClafy">
			<div class="itemTitle border-topbottom">
				A
			</div>
			<div class="itemBox itemList">
				<div class="item border-bottom">阿斯加德</div>
				<div class="item border-bottom">阿斯加德</div>
				<div class="item border-bottom">阿斯加德</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		name:"CityList"
	}
</script>


<style lang="scss" scoped>
@import '~styles/sassAll.scss';
.cityClafy{
	width: 100%;
	height: auto;
	display: inline-block;
	text-align: left;
	font-size: 0.3rem;
	float: left;
	.itemTitle{
		width: 100%;
		height: 0.44rem;
		font-size: 0.26rem;
		color: #666;
		background: #f2f2f2;
		line-height: 0.44rem;
		padding: 0 0.12rem;
	}
	.itemBox{
		padding: 0 0.12rem;
		background: #fff;
		padding-bottom: 0.2rem;
		display: inline-block;
		width: 100%;
		height: auto;
		.itemCity{
			display: inline-block;
			float: left;
			height: 0.5rem;
			width: 1.8rem;
			border-radius: 0.1rem;
			border: 1px solid #ccc;
			line-height: 0.5rem;
			font-size: 0.24rem;
			text-align: center;
			margin-top: 0.2rem;
			margin-right: 0.2rem;
			color: #666;
			@include textoverflow;
		}
	}
	.itemList{
		width: 100%;
		height: auto;
		padding: 0;
		.item{
			width:100%;
			padding: 0 0.12rem;
			line-height: 0.6rem;
			font-size: 0.26rem;
		}
	}
}

	
</style>
