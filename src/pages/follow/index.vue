<template>
  <div class="container">
    <div v-for="(item, index) in message" class="message">
      <div class="info">
        <img :src=item.userInfo.avatarUrl class="profile">
        <div class="info_text">
          <p class="name">{{item.userInfo.nickName}}</p>
          <p class="date"><span>{{item.time.day}}</span>发表点评</p>
        </div>
        <p class="follow">+关注</p>
      </div>
      <div class="img_container">
        <div  class="img" v-for="(pic, _index0) in item.images">
          <img v-if="_index0 < 5" :src=pic mode="aspectFill" :data-mx="index" :data-idx="_index0" @click="handleImagePreview"  />
        </div>
          <div v-if="item.images.length > 5"class="mask">+</div>
      </div>
      <p class="content">{{item.content}}</p>
      <div class="thumbsUp">{{item.thumbsUp}}</div>
      <div class="comment">
        <p v-for="(cmt, index1) in item.comment" class="cmt">
          <span>{{cmt.name}}</span>: {{cmt.content}}
        </p>
        <p class="more">查看更多评论</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  onLoad() {
  },
  data() {
    return {
      message: [
        {
          userInfo: {
            nickName: "test_accout",
            avatarUrl:  "../../static/images/follow/1/profile.png",
          },
          time: {
            day: "6月10日"
          },
          date: "3月30日",
          images: [
            "../../static/images/follow/1/20190329/20190329212135.jpg",
            "../../static/images/follow/1/20190329/20190329212157.jpg",
            "../../static/images/follow/1/20190329/20190329212204.jpg",
            "../../static/images/follow/1/20190329/20190329212210.jpg",
            "../../static/images/follow/1/20190329/20190329212217.jpg",
          ],
          content: "来到日本著名建筑大师安藤忠雄设计的良渚艺术中心，欣赏用清水混凝土塑造的艺术品，感受光影交错的美妙，此处为游客们的拍照圣地。",
          thumbsUp: 240,
          comment: [
            {
              id: 2,
              name: "用户1",
              content: "赞！",
            }
          ]
        },{
          userInfo: {
            nickName: "test_accout",
            avatarUrl:  "../../static/images/follow/1/profile.png",
          },
          time: {
            day: "6月10日"
          },
          date: "3月30日",
          images: [
            "../../static/images/follow/1/20190329/20190329212135.jpg",
            "../../static/images/follow/1/20190329/20190329212157.jpg",
            "../../static/images/follow/1/20190329/20190329212204.jpg",
            "../../static/images/follow/1/20190329/20190329212210.jpg",
            "../../static/images/follow/1/20190329/20190329212217.jpg",
          ],
          content: "来到日本著名建筑大师安藤忠雄设计的良渚艺术中心，欣赏用清水混凝土塑造的艺术品，感受光影交错的美妙，此处为游客们的拍照圣地。",
          thumbsUp: 240,
          comment: [
            {
              id: 2,
              name: "用户1",
              content: "赞！",
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleImagePreview(e) {
      const mx = e.target.dataset.mx
      const idx = e.target.dataset.idx
      const images = this.message[mx].images
      wx.previewImage({
        current: images[idx],  //当前预览的图片
        urls: images,  //所有要预览的图片
      })
    },
    bindFindTap() {
      wx.navigateTo({
        url: '../post/main'
        })
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  .message{
    width: 700rpx;
    margin: 0 auto;
    padding-bottom:40rpx;
    border-bottom:2rpx solid #e0e0e0;
    margin-bottom:60rpx;

    .info {
      height: 90rpx;
      .profile {
        position: relative;
        float: left;
        height: 70rpx;
        width: 70rpx;
      }
      .info_text {
        position: relative;
        float: left;
        margin-left: 20rpx;
        .name {
          font-size: 80%;
          color: rgb(0, 119, 255);
        }
        .date {
          font-size: 60%;
          span {
            color:#858585;
          }
        }
      }
      .follow {
        position: relative;
        float: right;
        border-radius: 25rpx;
        padding:10rpx;
        box-sizing:border-box;
        text-align:center;
        height: 50rpx;
        width: 100rpx;
        background-color: rgb(255, 115, 0);
        color: white;
        font-size: 60%;
      }
    }
    .img_container {
      //height: 580rpx;
      width: 700rpx;
      img {
        margin: -3rpx 1rpx;
      }
      .img {
        display: inline-block;
      }
      .img:nth-child(1) img,.img:nth-child(2) img {
        display: inline-block;
        width: 340rpx;
        height: 340rpx;
      }
      .img:nth-child(3) img,.img:nth-child(4) img,.img:nth-child(5) img{
        display: inline-block;
        width: 227rpx;
        height: 227rpx;
      }
    }
    .content {
      font-size: 75%;
    }
    .thumbsUp {
      font-size: 70%;
    }
    .comment {
      font-size: 65%;
      span {
        color: rgb(0, 119, 255);
      }
      .more {
        color:#858585;
      }
    }
  }
  .post {
    position: fixed;
    margin-left: 295rpx;
    bottom: 5rpx;
    border-radius: 15px;
    background-color: #ff7300;
    color: white;
    font-size: 26rpx;
  }
}
</style>
