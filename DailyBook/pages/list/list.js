// pages/list/list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indextype: 0,//选中的下标

    arraylist: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  //点击选择
  clickFn:function(e){
    console.log(e.currentTarget.dataset.indexs);
    this.setData({
      indextype: e.currentTarget.dataset.indexs
    })
  }
})
