
var postsData = require('../../data/posts-data.js')

Page({
    data: {
      postList: null,
    },
    onLoad: function(options){

      this.setData({
       posts_key :postsData.postList
      });  

    },



 })
