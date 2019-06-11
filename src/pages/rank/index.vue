<template>
  <div class="container">
    <div class="header">
      <div v-for="item in header" class="option">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <img class="bg" :src="item.bg">
      </div>
    </div>
    <div class="neighbour">
      <div class="title">
        附近商户排行榜
      </div>
      <div class="tagBar">
        <div v-for="item in neighbour" class="tag" @click="selectHandle">
          {{item.index}}
        </div>
      </div>
      <div class="list">
        <div v-for="item in neighbour[0].rank"  class="business"> 
          <img :src=item.img class="img"/>
          <div class="info">
            <p class="name">{{item.name}}</p>
            <p class="commentNum">{{item.commentNum}}条</p>
            <p class="prize">{{item.prize}}/人</p>
            <p class="location">{{item.location}} &nbsp&nbsp {{item.type}}</p>
            <p class="dist">{{item.dist}}</p>
            <p class="title">{{item.title}}</p>
          </div>
        </div>
        <div class="more">
          <span>查看全部</span>
          <img src="../../../static/images/rank/arrow.jpg" class="arrow">
        </div>
      </div>
    </div>
    <div class="category">
      <div class="title">分类商户排行榜</div>
      <div class="list">
        <div v-for="item in category" class="option">
          <p class="name">{{item.name}}</p>
          <img :src=item.bg class="bg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: [
        {
          title: "必吃榜",
          desc: "全城必去",
          bg: "../../static/images/rank/rank_1.jpg",
        },
        {
          title: "黑珍珠",
          desc: "食之甄选",
          bg: "../../static/images/rank/rank_2.jpg",
        },
        {
          title: "人气菜品",
          desc: "本地热搜",
          bg: "../../static/images/rank/rank_3.jpg",
        }
      ],
      neighbour: [
         {
          index: "美食",
          rank: [
            {
              name: "西湖醋鱼",
              img: "../../static/images/rank/neighbour/img1.jpg",
              commentNum: 855,
              prize: 62,
              location: "古墩路沿线",
              dist: "1.1km",
              type: "中餐",
              title: "古墩路沿线美食评价第1名",
            },
            {
              name: "糖醋里脊",
              img: "../../static/images/rank/neighbour/img2.jpg",
              commentNum: 56,
              prize: 66,
              location: "古墩路沿线",
              dist: "1.5km",
              type: "中餐",
              title: "古墩路沿线美食评价第3名",
            },
            {
              name: "酥油饼",
              img: "../../static/images/rank/neighbour/img3.jpg",
              commentNum: 508,
              prize: 68,
              loaction: "三墩镇",
              dist: "791m",
              type: "小吃",
              title: "西湖区小吃第一名",
            }
          ]
        },
        {
          index: "休闲娱乐",
          rank: []
        },
        {
          index: "丽人",
          rank: []
        }
      ],
      category: [
        {
          name: "川菜",
          bg: "../../static/images/rank/rank_4.jpg"
        },
        {
          name: "火锅",
          bg: "../../static/images/rank/rank_5.jpg"
        },
        {
          name: "日本菜",
          bg: "../../static/images/rank/rank_6.jpg"
        },
        {
          name: "西餐",
          bg: "../../static/images/rank/rank_7.jpg"
        }, 
        {
          name: "烧烤",
          bg: "../../static/images/rank/rank_8.jpg"
        },
        {
          name: "全部美食",
          bg: "../../static/images/rank/rank_9.jpg"
        }
      ]
    }
  },
  methods: {
    selectHandle() {
      for (var i = 0; i < this.neighbour.length; i++) {
        this.selected = false;
      }
      this.selected = true;
    }
  },
}

</script>

<style lang="scss" scoped>
.header {
  width: 700rpx;
  margin: 0 auto;
  .option {
    position: relative;
    display: inline-block;
    height: 120rpx;
    width: 180rpx;
    margin: 17rpx;
    box-shadow: 0 0 5rpx #858585;
    border-radius: 10rpx;
    padding: 10rpx;
    .title {
      font-size: 80%;
    }
    .desc {
      margin-top: 5rpx;
      font-size: 60%;
    }
    .bg {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 90rpx;
      width: 110rpx;
      z-index: -1;
    }
  }
}
.neighbour {
  width: 700rpx;
  margin: 0 auto;
  .title {
    font-weight: bold;
    font-size: 80%;
  }
  .tagBar {
    margin: 20rpx 0 40rpx 0;
    .tag {
      display: inline-block;
      box-sizing: border-box;
      margin-left: 10rpx;
      padding: 10rpx;
      height: 50rpx;
      width: 150rpx;
      background-color: #e4e4e4;
      border-radius: 20rpx;
      font-size: 60%;
      text-align: center;
    }
  }
  .list {
    width: 700rpx;
    margin: 10rpx auto;
    .business {
      display: flex;
      margin: 10rpx 0;
      .img {
        width: 170rpx;
        height: 170rpx;
      }
      .info {
        position: relative;
        margin-left: 20rpx;
        width: 530rpx;
        height: 170rpx;
        .name {
          font-weight: bold;
          font-size: 80%;
        }
        .commentNum {
          display: inline-block;
          margin-right: 40rpx;
          font-size: 60%;
          color: #858585;
        }
        .dist {
          position: relative;
          float: right;
          font-size: 60%;
          color: #858585;
        }
        .location {
          position: relative;
          font-size: 60%;
          color: #858585;
        }
        .prize {
          display: inline-block;
          position: relative;
          font-size: 60%;
          color: #858585;
        }
        .consumerNum {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 60%;
          color: #858585;
        }
        .title {
          display: inline-block;
          border: 2rpx solid #858585;
          font-size: 55%;
          color: #858585;
        }
      }
    }
    .more {
      width: 180rpx;
      margin: 30rpx auto;
      font-size: 55%;
      color: #858585;
      span {
        margin: 15rpx;
      }
      .arrow {
        position: relative;
        top: 10rpx;
        height: 35rpx;
        width: 35rpx;
      }
    }
  }
}
.category {
  width: 700rpx;
  margin: 0 auto;
  .title {
    font-weight: bold;
    font-size: 80%;
  }
  .option {
    position: relative;
    display: inline-block;
    height: 120rpx;
    width: 180rpx;
    margin: 17rpx;
    box-shadow: 0 0 5rpx #858585;
    border-radius: 10rpx;
    padding: 10rpx;
    .name {
      font-size: 80%;
      font-weight: bold;
    }
    .bg {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100rpx;
      width: 130rpx;
      z-index: -1;
    }
  }
}

</style>
