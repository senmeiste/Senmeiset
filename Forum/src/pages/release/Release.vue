<template>
  <div>
    <temp-header :backBtn="backBtn" :title='title'></temp-header>

    

    <temp-botmbtn></temp-botmbtn>
  </div>
</template>

<script>
import TempHeader from "common/template/Header";
import TempBotmbtn from "common/template/Botmbtn";
import ReleaseText from '@/pages/release/components/Releasetext'
export default {
  name: "Index",
  data() {
    return {
     title:"发布",
     backBtn:false
    };
  },
  components: {
    TempHeader,
    TempBotmbtn,
    ReleaseText
  }
};
</script>

<style>
</style>
