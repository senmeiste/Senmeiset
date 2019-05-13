<template>
  <div>
    <div class="headerBox">
      <span class="iconfont headerAbsBack" v-if="backBtn" @click="handClickBack">&#xe624;</span>
      <div class="titleBox">{{title || "这里"}}</div>
    </div>
    <div class="nullHeader"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    backBtn: Boolean || false,
    title: String
  },
  methods: {
    handClickBack: function() {
      history.go(-1);
    }
  }
};
</script> 
<style lang="scss" scoped>
@import "~styles/sassAll.scss";
.nullHeader{
	height: $headerHeight;
  line-height: $headerHeight;
  width: 100%;
}
.headerBox {
  height: $headerHeight;
  line-height: $headerHeight;
  width: 100%;
  background: $forumBack;
  color: #fff;
  display: flex;
  text-align: center;
  font-size: 0.32rem;
	position: fixed;
	left: 0;top:0;
	z-index: 9;
  .titleBox {
    width: 100%;
    height: $headerHeight;
  }
  .headerAbsBack {
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 0.12rem;
    width: 0.6rem;
  }
}
</style>
