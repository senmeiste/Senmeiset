<template>
	<div>
		<div class="btnBotmBox">
    <ul>
      <li 
			v-for="(item,index) of btnlist" :key="item.iconCode" @click="handClickRouter(index)" >
        <div class="iconBox">
          <span class="iconfont" v-html="item.iconCode"></span>
        </div>
        <div class="title">{{item.title}}</div>
      </li>
    </ul>
  </div>
	<div class="nullBotmbtn"></div>
	</div>
</template>
<script>
export default {
	name: "Botmbtn",
	data () {
		return {
			btnlist:[
				{
					title:"首页",
					iconCode:"&#xeba3;",
					routerSrc:"/"
				},{
					title:"推荐",
					iconCode:"&#xeba0;",
					routerSrc:"/news"
				},{
					title:"发布",
					iconCode:"&#xeb93;",
					routerSrc:"/release"
				},{
					title:"好友",
					iconCode:"&#xeb96;",
					routerSrc:"/friend"
				},{
					title:"我的",
					iconCode:"&#xeb9b;",
					routerSrc:"/my"
				}
			]
		}
	},
	methods: {
		handClickRouter:function(e){
			if(this.$route.path != this.btnlist[e].routerSrc){
				this.$router.push(this.btnlist[e].routerSrc)
			}
		}
	}
};
</script>
<style lang="scss" scoped>
@import "~styles/sassAll.scss";
.nullBotmbtn{
	width: 100%;
  height: $botmHeight;
}
.btnBotmBox {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: $botmHeight;
  background: $forumBack;
  color: #fff;
  z-index: 9;
  ul {
    width: 100%;
    height: $botmHeight;
    li {
      float: left;
      width: 20%;
      height: $botmHeight;
      text-align: center;
			display: inline;
			padding-top: 0.06rem;
      .iconBox {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        float: left;
        span {
          font-size: 0.4rem;
          padding: 0;
          margin: 0;
        }
      }

      .title {
        width: 100%;
        font-size: 0.26rem;
        float: left;
      }
    }
  }
}
</style>
