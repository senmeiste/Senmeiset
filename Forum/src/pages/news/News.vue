<template>
  <div>
    <temp-header :backBtn="backBtn" :title='title'></temp-header>

    <index-list :list="list"></index-list>  

    <temp-botmbtn></temp-botmbtn>
  </div>
</template>

<script>
import TempHeader from "common/template/Header";
import TempBotmbtn from "common/template/Botmbtn";


import IndexList from '@/pages/index/components/List'

export default {
  name: "Index",
  data() {
    return {
     title:"推荐",
     backBtn:false,
    list:[
		  {
			imgsrc:["https://img1.qunarzz.com/p/tts4/1808/ff/a95ccd8a747e2302.jpg_r_640x420x90_dd7177ff.jpg","https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg","https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg"],
			title: "北京热门景点指导",
			id: "0001",
			centent:"北京作为我国的首都城市，有着悠久的历史人文，丰富的乡土小吃，特色的旅游景点，以及毛主席纪念堂",
			type:['北京','首都']
		  },
		  {
			imgsrc:["https://img1.qunarzz.com/p/tts4/1808/ff/a95ccd8a747e2302.jpg_r_640x420x90_dd7177ff.jpg","https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg","https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg"],
			title:"上海热门景点指导",
			id:"0001",
			centent:"北京作为我国的首都城市，有着悠久的历史人文，丰富的乡土小吃，特色的旅游景点，以及毛主席纪念堂",
			type:['上海','首都']
		  },
      {
			imgsrc:["https://img1.qunarzz.com/p/tts4/1808/ff/a95ccd8a747e2302.jpg_r_640x420x90_dd7177ff.jpg","https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg","https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg"],
			title: "北京热门景点指导",
			id: "0001",
			centent:"北京作为我国的首都城市，有着悠久的历史人文，丰富的乡土小吃，特色的旅游景点，以及毛主席纪念堂",
			type:['北京','首都']
		  },
		  {
			imgsrc:["https://img1.qunarzz.com/p/tts4/1808/ff/a95ccd8a747e2302.jpg_r_640x420x90_dd7177ff.jpg","https://img1.qunarzz.com/p/tts4/1808/b5/af8811e92af2de02.jpg_r_640x420x90_a45a56cc.jpg","https://img1.qunarzz.com/p/tts5/1807/a1/55cc03ddee279802.jpg_r_640x420x90_830b1e85.jpg"],
			title:"上海热门景点指导",
			id:"0001",
			centent:"北京作为我国的首都城市，有着悠久的历史人文，丰富的乡土小吃，特色的旅游景点，以及毛主席纪念堂",
			type:['上海','首都']
		  }
	  ]
    };
  },
  components: {
    TempHeader,
    TempBotmbtn,
    IndexList
  }
};
</script>

<style>
</style>
