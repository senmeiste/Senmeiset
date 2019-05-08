<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="itemTitle border-bottom">
				<span class="iconfont">&#xe8eb;</span>	{{item.title}}
			</div>
			<div v-if="item.children" class="itemChilder">
				<!-- <detail-list :list="item.children"></detail-list> -->
				<detail-list :list='item.children'></detail-list>

			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'DetailList',
		props:{
			list:Array
		}
	}
</script>

<style lang="scss" scoped>
	
	.item{
		width: 100%;
		background: #fff;
		.itemTitle{
			width: 100%;
			height: 0.8rem;
			line-height: 0.8rem;
			font-size: 0.32rem;
			padding: 0 0.12rem;
		}
		.itemChilder{
			padding: 0 .2rem;
		}
	}
	
</style>
