<template>
<div>
	<detail-banner :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
	<detail-header></detail-header>
	<detail-list :list='list'></detail-list>
	<div class="centerx"></div>
</div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axios from 'axios'

export default{
  name: 'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data (){
		return {
			list:[],
			bannerImg:[],
			sightName:""
		}
	},
	methods:{
		getDetail(){
			axios.get("/api/detail.json?id=" + this.$route.params.id)
				.then(this.getDetailSocc)
		},
		getDetailSocc (res){
			const data = res.data.data;
			console.log(data)
			this.list = data.categoryList
			this.bannerImg = data.bannerImg
			this.sightName = data.sightName
		}
		
	},
	mounted() {
		this.getDetail()
		this.id = this.$route.params.id
	},
	activated() {//页面重新显示的时候都会走这个钩子
		if(this.id != this.$route.params.id){
			console.log("activated")
			this.getDetail();
			this.id = this.$route.params.id
		}
	}
	
}
</script>

<style>
	.centerx{
		height: 30rem;
	}
</style>
