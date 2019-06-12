<script>
export default {
  onLoad() {
    // 储存操作日志
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  globalData: {
    userInfo: null,
    hasUserInfo: false
  }
}
</script>

<style lang="scss">
  * {
    font-family: 'Arial Narrow', Arial, sans-serif;
  }
  ::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
  }
</style>
