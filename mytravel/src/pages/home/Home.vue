<template>
  <div>
		<home-header ></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="itemlist"></home-recommend>
		<home-weekend :list="weekendlist"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'

export default{
  name: 'home',
	components:{ 
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data (){
		return{
			iconList:[],
			itemlist:[],
			swiperList:[{
			"id": "0001",
			"imgsrc": "https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg"
		}],
			weekendlist:[]
		}
	},
	methods:{
		getHomeInfo(){
			axios.get("/api/index.json")
				.then(this.getHomeInfoSocc)
		},
		getHomeInfoSocc(res){
			if(res.data.ret == true){
				const data = res.data.data;
				console.log(data)
				this.swiperList = data.swiperList;
				this.iconList = data.iconList;
				this.itemlist = data.itemlist;
				this.weekendlist = data.weekendlist;
			}else{
				
			}
		}
		
	},
	mounted() {//挂载周期
		this.getHomeInfo();
	},

}
</script>

<style>

</style>
