<template>
	<div>
		<city-header></city-header>
		<city-seach  :cities="cities" ></city-seach>
		<city-list :cities="cities" :letter="letter" :hot="hotCities"></city-list>
		<city-cityify :cities="cities" @change="handrightClassIfy"></city-cityify>
	</div>
</template>
<script>
	// components组件必须拥有根元素作为容器
	// 
	import CityHeader from './components/Header'
	import CitySeach from './components/Seach'
	import CityList from './components/List'
	import CityCityify from './components/Cityify' 
	
	import axios from 'axios'
	export default{
		name:"City",
		components:{
			CityHeader,
			CitySeach,
			CityList,
			CityCityify
		},
		data (){
			return {
				cities:{},
				hotCities:[],
				letter:""
			}
		},
		methods:{
			getCityInfo(){
				axios.get("/api/city.json")
					.then(this.getCityInfoSocc)
			},
			getCityInfoSocc(data){
				if(data.data.ret){
					const cityData = data.data.data;
					console.log(cityData)
					this.cities = cityData.citles
					this.hotCities = cityData.hotCities;
				}
				
			},
			handrightClassIfy(e){
				// console.log(e);
				this.letter = e;
			}
			
		},
		mounted() {
			this.getCityInfo();
		}
	}
</script>

<style>
</style>