<template>
  <div>
    <temp-header :backBtn="backBtn" :title='title'></temp-header>
    <temp-banner :bannerImg="bannerImg"  :showType='showType'></temp-banner>

  </div>
</template>

<script>
import TempHeader from "common/template/Header";
import TempBanner from "common/template/banner";


export default {
  name: "Index",
  data() {
    return {
      title:"详情",
      backBtn:true,
      showType:true,
      bannerImg:[
        {
          id: "0001",
          imgsrc: "https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg"
        }
      ]
    };
  },
  components: {
    TempHeader,
    TempBanner
  }
};
</script>

<style>
</style>
