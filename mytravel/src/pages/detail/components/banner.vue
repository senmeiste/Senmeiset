<template>
	<div>
		<div class="bannerBox" @click="handShowGallary">
			<img class="bannerimg" 
			src="https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg" >
			<div class="bannerCentex">
				<div class="centexBox">{{sightName}}</div>
				<div class="rightIcon">
					<span class="iconfont bannerIcon">&#xe64a;</span>39
				</div>
			</div>
		</div>
		<common-gallary 
		:imgs="bannerImg"
		v-if="showGallary"
		@close="hideGallary"
		 ></common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default{
		name: "DetailBanner",
		props:{
			bannerImg:Array,
			sightName:String
		},
		data(){
			return {
				imgs:[],
				showGallary:false
			}
		},
		components:{
			CommonGallary
		},
		methods:{
			handShowGallary(){
				this.showGallary = !this.showGallary
			},
			hideGallary(){
				this.showGallary = false
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '~styles/sassAll.scss';

.bannerBox{
	width: 100%;
	height: 4.2rem;
	overflow: hidden;
	position: relative;
	.bannerimg{
		width: 100%;
		height: 100%;
	}
	.bannerCentex{
		width: 100%;
		height: 0.6rem;
		line-height: 0.6rem;
		color: #fff;
		font-size: 0.28rem;
		position: absolute;
		left: 0;
		bottom: 0;
		display: flex;
		background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
		.centexBox{
			flex: 1;
			height: 0.6rem;
			padding: 0 0.12rem;
		}
		.rightIcon{
			width: auto;
			padding: 0 0.12rem;
			border-radius: 0.35rem;
			height: 0.4rem;
			line-height: 0.4rem;
			font-size: 0.24rem;
			background: rgba(241, 241, 241, 0.3);
			margin: 0.15rem 0.12rem;
			.bannerIcon{
				margin-right: 0.05rem;
				font-size: 0.24rem;
			}
		}
	}
}


</style>
