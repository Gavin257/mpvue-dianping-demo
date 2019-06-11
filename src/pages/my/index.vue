<template>
  <div class="container">
    <div class="my">
      <img :src="userInfo.avatarUrl"  class="profile"/>
      <div class="text_info">
        <div class="name">{{userInfo.nickName}}</div>
        <div class="address">{{userInfo.city}}</div>
      </div>
      <div class="arrow">></div>
    </div>
    <div class="order_list">
      <div class="title">我的订单</div>
      <div class="option" v-for="item in order_list">
        <img :src=item.icon class="img"/>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="tool_list">
      <div class="title">必备工具</div>
      <div class="option" v-for="item in tool_list">
        <img :src=item.icon class="img"/>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
    <div v-for="item in menu" class="menu">
      <span>{{item.desc}}</span>
      <div class="arrow">></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: { 
},
  data() {
    return {
      userInfo: {
        avatarUrl: "../../static/images/my/user.jpg",
        nickName: "游客",
        city: ""
      },
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),

      my: {
        id: 0,
        name: "administrator_0",
        profile: "../../static/images/my/profile.jpg",
        address: "杭州",
      },
      order_list: [
        {
        icon: "../../static/images/my/icon1.jpg",
        desc: "待付款",
        },
        {
          icon: "../../static/images/my/icon2.jpg",
          desc: "可使用",
        },
        {
          icon: "../../static/images/my/icon3.jpg",
          desc: "退款/售后",
        },
          {
            icon: "../../static/images/my/icon4.jpg",
            desc: "全部订单",
          }
      ],
      tool_list: [
        {
          icon: "../../static/images/my/icon5.jpg",
          desc: "领券中心",
        }, 
        {
          icon: "../../static/images/my/icon6.jpg",
          desc: "今天吃啥",
        },
        {
          icon: "../../static/images/my/icon7.jpg",
          desc: "聚餐投票",
        },
        {
          icon: "../../static/images/my/icon8.jpg",
          desc: "贡献信息",
        }
      ],
      menu: [
        {
          link: "",
          desc: "优惠券",
        },
        {
          link: "",
          desc: "收藏",
        },
        {
          link: "",
          desc: "设置",
        },
        {
          link: "",
          desc: "客服电话10100011"
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  width: 700rpx;
  margin: 0 auto;
  .my {
    margin: 30rpx;
    height: 120rpx;
    .profile{
      position: relative;
      float: left;
      height: 100rpx;
      width: 100rpx;
    }
    .text_info {
      position: relative;
      float: left;
      margin-left: 40rpx;
      .name {
        margin: 10rpx;
        font-size: 100%;
        font-weight: bold;

      }
      .address {
        font-size: 70%,
      }
    }
    .arrow {
      position: relative;
      float:right;
      font-size: 150%;
      color: grey;
    }
  }
  .order_list,.tool_list{
    margin: 50rpx 0;
    .title {
      margin: 15rpx 0;
      font-size: 80%;
      font-weight: bold;
    }
    .option {
      display: inline-block;
      margin: 0 10rpx;
      width: 150rpx;
      font-size: 70%;
      .img {
        margin: 0 40rpx;
        width: 70rpx;
        height: 70rpx;
      }
      .desc {
        margin-top: -10rpx;
        text-align: center; 
      }
    }
  }
  .menu {
    border-bottom: 1rpx solid #858585;
    padding: 30rpx 0;
    font-size: 70%;
    .arrow {
      position: relative;
      float:right;
      font-size: 150%;
      color: grey;
      margin-top: -10rpx;
    }
  }
  button {
    margin: 40rpx auto;
    width: 500rpx;
    border-radius:30rpx;
    background-color:#ff7300;
    color:white;
    font-size:30rpx;
  }
}
</style>
