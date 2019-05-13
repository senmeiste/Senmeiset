<template>
  <div>
    <temp-header :backBtn="backBtn" :title='title'></temp-header>

    

    <temp-botmbtn></temp-botmbtn>
  </div>
</template>

<script>
import TempHeader from "common/template/Header";
import TempBotmbtn from "common/template/Botmbtn";
export default {
  name: "Index",
  data() {
    return {
     title:"好友",
     backBtn:false
    };
  },
  components: {
    TempHeader,
    TempBotmbtn
  }
};
</script>

<style>
</style>
