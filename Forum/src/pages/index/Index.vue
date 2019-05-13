<template>
  <div>
    <temp-header :backBtn="backBtn" :title="'首页'"></temp-header>

    <temp-banner :bannerImg="bannerImg" :routerSrc='bannerSrc' :showType='showType'></temp-banner>

    <temp-botmbtn></temp-botmbtn>
  </div>
</template>

<script>
import TempHeader from "common/template/Header";
import TempBotmbtn from "common/template/Botmbtn";
import TempBanner from "common/template/banner";
export default {
  name: "Index",
  data() {
    return {
      backBtn: false,
      bannerImg: [
        {
          id: "0001",
          imgsrc:
            "https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg"
        },
        {
          id: "0002",
          imgsrc:
            "https://img1.qunarzz.com/p/tts4/1808/ff/a95ccd8a747e2302.jpg_r_640x420x90_dd7177ff.jpg"
        },
        {
          id: "0003",
          imgsrc:
            "https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg"
        }
	  ],
	  bannerSrc:"detail",
	  showType: false
    };
  },
  components: {
    TempHeader,
    TempBotmbtn,
    TempBanner
  }
};
</script>

<style>
</style>
