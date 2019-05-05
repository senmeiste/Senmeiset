<template>
	<div>
		<div class="title">
			<input type="text" v-model="keyword" placeholder="请输入城市查询">
		</div>
		<div class="seachContent" v-if="list && keyword" ref="seach">
			<ul style="padding-top:1.72rem;">
				<li v-for="item of list"
				 @click="handclcik(item.name)"
				 class="border-bottom">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:"CitySeach",
		data (){
			return {
				keyword:"",
				list:[],
				timer:null
			}
		},
		props:{
			cities:Object
		},
		watch:{
			keyword (){
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list = [];
					return false;
				}
				this.timer = setTimeout(()=>{
					const result =[];
					for (let i in this.cities) {
						this.cities[i].forEach((value) =>{
							if(value.spell.indexOf(this.keyword) >-1 ||value.name.indexOf(this.keyword) > -1 ){
								result.push(value)
							}
						})
					}
					this.list = result;
				},100);
			}
		},
		mounted() {
			if(this.list && this.keyword){
				this.scroll = new BScroll(this.$refs.seach)
			}
		},
		methods:{
				handclcik (city){
					console.log(city)
					//dispatch 可以直接省略该方法
					// this.$store.dispatch("changeCity",city)
					//上的dispatch省略后可以直接调用commit方法
					this.$store.commit("changeCity",city)
					this.$router.push("/")
				}
		}
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
.seachContent{
	position: fixed;
	left: 0;
	top:  0;
	width: 100%;
	height: 100vh;
	z-index: 1;
	background: #fff;
	font-size: 0.4rem;
	overflow: auto;
	ul{
		width: 100%;
		height: auto;
		li{
			width: 100%;
			font-size: 0.28rem;
			line-height: 0.6rem;
		}
	}
}

	
</style>
