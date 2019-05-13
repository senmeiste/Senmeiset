<template>
  <div>

    <div class="wrapper" @click="handShowGallary">
      <swiper :options="swiperOption" ref="wrapper">
        <swiper-slide class="swiper-img" v-for="item of bannerImg" :key="item.id" >
          <img :src="item.imgsrc" >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <common-gallary 
		:imgs="bannerImg"
		v-if="showGallary && showType"
		@close="hideGallary"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  props: {
	bannerImg: Array,
	showType:Boolean || false,
	routerSrc: String || ""
  },
  data() {
    return {
      imgs: [],
      showGallary: false,
      swiperOption: {
		autoplay: true,
        pagination: {
			el: '.swiper-pagination',
		},
        loop: true
      },
      swiperList: []
    };
  },
  components: {
    CommonGallary
  },
  methods: {
    handShowGallary() {
		if(this.showType){
			this.showGallary = !this.showGallary;
			console.log(this.showGallary)
		}else{
			this.$refs.wrapper.$children.forEach((element,index) => {
				if (element.$el.className.indexOf("swiper-slide-active") > -1 || element.$el.className.indexOf("swiper-slide-duplicate-active") > -1) {
					if(this.routerSrc&& this.bannerImg[index].id){
						this.$router.push(`/${this.routerSrc}/${this.bannerImg[index].id}`)
					}else if(this.routerSrc){
						this.$router.push(`/${this.routerSrc}`)
					}
				}
			});
		}
    },
    hideGallary() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/sassAll.scss";

.swiper-img {
  width: 100%;
  height: 4.2rem;
  overflow: hidden;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }
}

.bannerBox {
  width: 100%;
  height: 4.2rem;
  overflow: hidden;
  position: relative;
  .bannerimg {
    width: 100%;
    height: 100%;
  }
  .bannerCentex {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #fff;
    font-size: 0.28rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .centexBox {
      flex: 1;
      height: 0.6rem;
      padding: 0 0.12rem;
    }
    .rightIcon {
      width: auto;
      padding: 0 0.12rem;
      border-radius: 0.35rem;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.24rem;
      background: rgba(241, 241, 241, 0.3);
      margin: 0.15rem 0.12rem;
      .bannerIcon {
        margin-right: 0.05rem;
        font-size: 0.24rem;
      }
    }
  }
}
</style>
