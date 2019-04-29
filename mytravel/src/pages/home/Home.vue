<template>
  <div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/Weekend'

export default{
  name: 'home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	}
}
</script>

<style>

</style>
