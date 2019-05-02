<template>
	<div>
		<city-header></city-header>
		<city-seach></city-seach>
		<city-list></city-list>
	</div>
</template>
<script>
	// components组件必须拥有根元素作为容器
	// 
	import CityHeader from './components/Header'
	import CitySeach from './components/Seach'
	import CityList from './components/List'
	export default{
		name:"City",
		components:{
			CityHeader,
			CitySeach,
			CityList
		}
	}
</script>

<style>
</style>