<template>
  <div class="container">
    <div class="header">
      <div class="location">
        <div class="city">{{city}}</div>
        <img :src="location_icon.arrow" class="arrow">
        <div class="searchBar">
          <div class="input">
            <img :src="location_icon.search" class="search"/>
            <input placeholder="输入商品名、地点、找优惠">
          </div>
        </div>
      </div>
    </div>
    <div class="category">
      <div v-for="(item, index) in category1" class="category1">
        <img :src=item.icon>
        <div class="desc">{{item.desc}}</div>
      </div>
      <div v-for="(item, index) in category2" class="category2">
        <img :src=item.icon>
        <div class="desc">{{item.desc}}</div>
      </div>
    </div>
    <div class="ad">
      <img v-for="(item, index) in ad" :src=item.src>
    </div>
    <div class="recommend">
      <span class="note">猜你喜欢</span>
      <scroll-view scroll-x="true" style="width: 100%">
        <div v-for="(item, index) in recommend" class="recommend_item">
          <div class="title">
            {{item.title}}
          </div>
          <div class="storeNum">
            {{item.storeNum}}家商户
          </div>
          <img class="bg" :src="item.bg">
        </div>
      </scroll-view>
    </div>
    <div class="list">
      <div v-for="item in business" class="business">
        <img :src=item.img >
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p class="commentNum">{{item.commentNum}}条评论</p>
          <p class="desc">{{item.desc}}</p>
          <p class="dist">{{item.dist}}</p>
          <p class="prize">￥{{item.prize}}</p>
          <p class="consumerNum">{{item.consumerNum}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  onLoad() {
    var _this = this;
    wx.request({
      url: "https://wx.gavin257.cn/index/business",
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res){
        _this.$mp.page.setData({
          business : res.data.business
        });
        _this.business = res.data.business;
      }
    });
  },
  data() {
    return {
      city: '杭州',
      location_icon: {
        arrow: "https://wx.gavin257.cn/public/images/arrow.jpg",
        search: "https://wx.gavin257.cn/public/images/search.jpg"
      },
      category1: [
        {
          icon: "https://wx.gavin257.cn/public/images/icon1.jpg",
          desc: "美食",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon2.jpg",
          desc: "美团外卖",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon3.jpg",
          desc: "休闲娱乐",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon4.jpg",
          desc: "酒店",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon5.jpg",
          desc: "电影/演出",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon6.jpg",
          desc: "丽人",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon7.jpg",
          desc: "周边游",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon8.jpg",
          desc: "购物/商场",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon9.jpg",
          desc: "KTV",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon10.jpg",
          desc: "亲子",
        }
      ],
      category2: [
        {
          icon: "https://wx.gavin257.cn/public/images/icon11.jpg",
          desc: "西餐",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon12.jpg",
          desc: "火锅",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon13.jpg",
          desc: "自助餐",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon14.jpg",
          desc: "景点/门票",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon15.jpg",
          desc: "美发",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon16.jpg",
          desc: "按摩/足疗",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon17.jpg",
          desc: "洗浴/汗蒸",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon18.jpg",
          desc: "运动健身",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon19.jpg",
          desc: "聚餐投票",
        },
        {
          icon: "https://wx.gavin257.cn/public/images/icon20.jpg",
          desc: "全部",
        },
      ],
      ad: [{
        src: "https://wx.gavin257.cn/public/images/ad.jpg",
      }],
      recommend: [
        {
          title: "网红餐厅",
          storeNum: 112,
          bg: "https://wx.gavin257.cn/public/images/rank_1.jpg"
        },
        {
          title: "甜蜜约会",
          storeNum: 55,
          bg: "https://wx.gavin257.cn/public/images/rank_2.jpg"
        },
        {
          title: "朋友小聚",
          storeNum: 231,
          bg: "https://wx.gavin257.cn/public/images/rank_3.jpg"
        },
        {
          title: "家庭聚餐",
          storeNum: 230,
          bg: "https://wx.gavin257.cn/public/images/rank_4.jpg"
        },
        {
          title: "优质新店",
          storeNum: 22,
          bg: "https://wx.gavin257.cn/public/images/rank_5.jpg"
        },
      ],
      business: [],
      // business: [
      //   {
      //     name: "西湖风景名胜区",
      //     img: "https://wx.gavin257.cn/public/images/business/item1.jpg",
      //     commentNum: 13398,
      //     desc: "杨公堤",
      //     dist: "9.4km",
      //     prize: 8,
      //     consumerNum: "79.9万"
      //   }
      // ]
    }
  },
}
</script>

<style style lang="scss" scoped>
.header {
  margin: 0 auto;
  width: 740rpx;
  .location {
    margin: 10rpx;
    .city {
      position: relative;
      float: left;
      margin-top: 10rpx;
      font-weight: bold;
      font-size: 90%;
    }
    .arrow {
      position: relative;
      float: left;
      margin-top: 15rpx;
      margin-right: 10rpx;
      height: 35rpx;
      width: 35rpx;
    }
  }
  .searchBar  {
    .search {
      position: relative;
      margin: 6rpx;
      float: left;
      height: 40rpx;
      width: 40rpx;
    }
    .input {
      display: inline-block;
      padding: 15rpx 100rpx;
      border-radius: 40rpx;
      background-color: #f0efef;
      font-size: 75%;
      color: black;
      text-align: left;
      input {
        width: 360rpx;
      }
    }
  }
}
.category {
  margin: 20rpx auto;
  width: 700rpx;
  .category1 {
    display: inline-block;
    width: 140rpx;
    margin: 15rpx 0;
    img { 
      margin: 10rpx 20rpx;
      height: 100rpx;
      width: 100rpx;
    }
    .desc {
      text-align: center;
      font-size: 75%;
    }
  }
  .category2 {
    display: inline-block;
    width: 140rpx;
    margin: 15rpx 0;
    img { 
      margin: 10rpx 40rpx;
      height: 70rpx;
      width: 70rpx;
    }
    .desc {
      text-align: center;
      font-size: 65%;
    }
  }
}
.ad {
  width: 700rpx;
  margin: 0 auto;
  img {
    width: 700rpx;
    height: 150rpx;
  } 
}
.recommend {
  margin: 10rpx auto;
  white-space: nowrap;
  .note {
    font-size: 70%;
    color: #858585;
    margin-left: 25rpx;
  }
  .recommend_item {
    position: relative;
    display: inline-block;
    height: 120rpx;
    width: 180rpx;
    margin: 8rpx 14rpx;
    margin-left: 5rpx;
    box-shadow: 0 0 5rpx #858585;
    padding: 10rpx;
    border-radius: 14rpx;
    .title {
      font-size: 80%;
    }
    .storeNum {
      margin-top: 5rpx;
      font-size: 60%;
    }
    .bg {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 80rpx;
      width: 100rpx;
      z-index: -1;
    }
  }
  .recommend_item:nth-child(1) {
    margin-left: 25rpx;
  }
}
.list {
  width: 700rpx;
  margin: 40rpx auto;
  .business {
    display: flex;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #dfdfdf;
    margin-bottom: 20rpx;
    img {
      height: 170rpx;
      width: 170rpx;
    }
    .info {
      position: relative;
      margin-left: 10rpx;
      width: 500rpx;
      height: 170rpx;
      .name {
        font-size: 80%;
      }
      .commentNum {
        margin: 10rpx 0;
        font-size: 60%;
        color: #858585;
      }
      .dist {
        position: relative;
        float: right;
        font-size: 60%;
        color: #858585;
      }
      .desc {
        position: relative;
        float: left;
        font-size: 60%;
        color: #858585;
      }
      .prize {
        position: absolute;
        bottom: 0;
        left: 0;
        font-weight: bold;
        color: #ec680f;
      }
      .consumerNum {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 60%;
        color: #858585;
      }
    }
  }
}
</style>