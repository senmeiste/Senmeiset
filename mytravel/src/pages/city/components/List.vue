<template>
	<div class="listAllBox" ref="wrapper">
		<div class="listScroll">
			<div class="cityClafy" >
				<div class="itemTitle border-topbottom">
					当前城市
				</div>
				<div class="itemBox">
					<div class="itemCity">{{city}}</div>
				</div>
			</div>
			<div class="cityClafy">
				<div class="itemTitle border-topbottom">
					热门城市
				</div>
				<div class="itemBox">
					<div class="itemCity" 
					v-for="item of hot" 
					:key="item.id"
					@click="handclcik(item.name)"
					>{{item.name}}</div>
				</div>
			</div>
			<div 
			class="cityClafy" 
			v-for="(item,key) of cities" 
			:key="key"
			:ref="key"
			>
				<div class="itemTitle border-topbottom">
					{{key}}
				</div>
				<div class="itemBox itemList">
					<div class="item border-bottom" v-for="ites of item"
					@click="handclcik(ites.name)"
					>{{ites.name}}</div>
					
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState,mapMutations} from 'vuex'
	export default{
		name:"CityList",
		props:{
			hot:Array,
			cities:Object,
			letter:String
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		methods:{//事件
			handclcik (city){
				// console.log(city)
				// this.$store.dispatch("changeCity",city)
				//普通写法
				// this.$store.commit("changeCity",city)
				//高级写法
				this.changeCity(city)
				this.$router.push("/")
			},
			...mapMutations(['changeCity'])
		},
		computed:{ //计算属性
			...mapState(['city'])
		},
		watch:{//侦听属性
			letter (){
				// console.log(this.letter)
				if(this.letter){
					const element = this.$refs[this.letter];
					// console.log(element)
					this.scroll.scrollToElement(element[0])
				}
			}
		}
		
		
	}
</script>


<style lang="scss" scoped>
@import '~styles/sassAll.scss';
.listAllBox{
	// 
	// display: inline-block;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 1.72rem;
	
}
.listScroll{
	
	display: inline-block;
	// overflow: auto;
	padding-bottom: 1.72rem;
	
}
.cityClafy{
	width: 100%;
	height: auto;
	display: inline-block;
	text-align: left;
	font-size: 0.3rem;
	float: left;
	.itemTitle{
		width: 100%;
		height: 0.54rem;
		font-size: 0.26rem;
		color: #666;
		background: #f2f2f2;
		line-height: 0.54rem;
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
