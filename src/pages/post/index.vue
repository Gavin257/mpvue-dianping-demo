<template>
  <div class="container">
    <form @submit="post">
      <textarea name="content" id="post_text" class="post_text" placeholder="谈谈你的感受吧" cols="30" rows="10"></textarea>
      <div class="images-container">
        <div v-for="item in images">
          <div class="image-wrap">
            <image class="image" :src=item mode="aspectFill" :data-idx="index" @click="handleImagePreview"></image>

            <div class="image-remover" :data-idx="index" @click="removeImage">×</div>
          </div>
        </div>
        <button class="image-add" type="default" size="mini" @click="chooseImage" :v-if="images.length < 9">+</button>
      </div>
      <button formType="submit">完成</button>
    </form>
  </div>
</template>

<script>
export default {
  onLoad() {
    this.$mp.page.setData({
      checkImgLength: 0,
      imgLists: []
    })
  },
  methods: {
    chooseImage() {
      let that = this;
      let checkImgLength = that.$mp.page.data.checkImgLength
      console.log(9 - checkImgLength)
      if (9 - checkImgLength >= 1){
        wx.chooseImage({
          count: 9 - checkImgLength, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            let tempFilePaths = res.tempFilePaths;//这里拿到的是图片在微信客户端的临时路径！！！
            let length = tempFilePaths.length;
            let tempList = that.$mp.page.data.imgLists.concat(tempFilePaths);//JSON数据
            that.$mp.page.setData({
              images: tempFilePaths,
              imgLists: tempList,
              checkImgLength: that.$mp.page.data.checkImgLength + length//长度相加，这里是为了选择的图片不会超过9
            })
            that.images = tempList;
          }
        })
      }
    },
    removeImage(e) {
      const idx = e.target.dataset.idx
      //this.$mp.page.data.images.splice(idx, 1);
      this.images.splice(idx, 1)
    },
    handleImagePreview(e) {
      const idx = e.target.dataset.idx
      const images = this.data.images
      wx.previewImage({
        current: images[idx],  //当前预览的图片
        urls: images,  //所有要预览的图片
      })
    },
    post(e) {
      var _this = this;
      var imagesUrl = [];
      // 将选择的图片组成一个Promise数组，准备进行并行上传
      const arr = _this.images.map(path => {
        return new Promise(function(resolve, rejection) {
            wx.uploadFile({
            url: 'https://wx.gavin257.cn/upload',
            filePath: path,
            name: 'file',
            success: function(res) {
              resolve(res);
            }
          })
        }) 
      })
      // 开始并行上传图片
      Promise.all(arr).then(res => {
        // 上传成功，获取这些图片在服务器上的地址，组成一个数组
        return imagesUrl = res.map(item => item.data);
      }).then(imagesUrl => {
          wx.request({
          url: "https://wx.gavin257.cn/post",
          method: 'POST',
          header: {
            "Cookie": "JSESSIONID=" + wx.getStorageSync("sessionID")
          },
          data: {
            userInfo: getApp().globalData.userInfo,
            content: e.mp.detail.value.content,
            images: imagesUrl,
          }
        });
      }).catch(err => {
        console.log(">>>> upload images error:", err)
      })
      

      /*
      wx.showLoading({
        title: '正在创建...',
        mask: true
      });
      */
      // wx.uploadFile({
      //   url: 'https://wx.gavin257.cn/upload',
      //   filePath: _this.$mp.page.data.images[0],
      //   name: 'file',
      //   header: {
      //       "Content-Type": "multipart/form-data"//记得设置
      //     },
      //     formData: {
            
      //     },
      // })
      /*
      const arr = images.map(path => {
        return wx.uploadFile({
          url: 'https://wx.gavin257.cn/upload',
          filePath: path,
          name: 'pic'
        })
      })

      Promise.all(arr).then(res => {
        return res.map(item => JSON.parse(item.data).url)
      }).catch(err => {
        console.log(err);
      }).then(urls => {
        return ;
      })
      */
    }
},
  data() {
    return {
    title: 'test',
    content: 'test',
    images: [],
    checkImgLength: 9
  }
}
}

</script>

<style lang="scss" scoped>
.container {
  width: 700rpx;
  margin: 0 auto; 
  .post_text {
    box-sizing: border-box;
    position:relative;
    border:1px solid #a0a0a0;
    border-radius:6rpx;
    width:700rpx;
    height:300rpx;
    font-size:30rpx;
    padding: 10rpx;
  }

  .images-container {
    display: flex;
    flex-wrap: wrap;
    .image-wrap {
      position: relative;
      display: inline-block;
      margin: 10rpx;
      image {
        height: 200rpx;
        width: 200rpx;
      }
      .image-remover {
        position: absolute;
        display: inline-block;
        margin: -20rpx 0;
        right: 0;
        color: red;
        font-size:180%;
      }
    }
    .image-add {
      display: inline-block;
      box-sizing: border-box;
      margin: 10rpx;
      padding-left: 70rpx;
      font-size: 200%;
      height: 200rpx;
      width: 200rpx;
    }
  }
}
</style>
