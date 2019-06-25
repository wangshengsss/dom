<template>
  <div class="header-container">
    <div class="center">
      <div class="header-nav">
        <div class="navi-item logo" @click="handleNavItemClick('main')">
          <img src="../../h5/static/images/pc/logo-icon.png" alt="乐房logo">
        </div>
        <div class="navi-item" @click="handleNavItemClick('download')">下载 App</div>
        <div class="navi-item" @click="handleNavItemClick('landlord')">房东</div>
        <div class="navi-item" @click="handleNavItemClick('renter')">租客</div>
        <div class="navi-item" @click="handleNavItemClick('shortrent')">短租</div>
        <div class="navi-item flex-center" @click="handleNavItemClick('lotvip')">
          <span>乐</span>
          <img src="../../h5/static/images/pc/lev-icon.png" alt="lev-icon">
        </div>
      </div>
      <div class="header-showbox">
        <div class="area-showbox showbox-item">
          <img class="showbox-icon" src="../../h5/static/images/pc/flag-icon.png" alt="flag-icon">
          <span class="country-name">中国</span>
        </div>
        <div class="contact-showbox showbox-item">
          <img class="showbox-icon" src="../../h5/static/images/pc/contact-icon.png" alt="contact-icon">
          <span class="contact-num">400-186-0061</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleNavItemClick (itemName) {
      this.$emit('itemClick', {itemName: `${itemName}-section`})
    }
  }
}
</script>
<style lang="scss" scoped>
  .header-container {
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: #fff;
    .center {
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      font-family: 'Microsoft Yahei';
      font-size: 22px;
    }
    .header-nav {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navi-item {
        height: 100%;
        line-height: 72px;
        padding: 0 15px;
        cursor: pointer;
        color: #515151;
        &.flex-center {
          display: flex;
          align-items: center;
        }
        &.logo {
          display: flex;
          align-items: center;
        }
      }
    }
    .header-showbox {
      height: 100%;
      display: flex;
      margin-left: 65px;
      .showbox-item {
        height: 100%;
        display: flex;
        align-items: center;
        &.area-showbox {
          margin-right: 50px;
        }
        .showbox-icon {
          flex: 0 0 30px;
          height: 30px;
          margin-right: 6px;
        }
        .country-name {
          font-size: 18px;
        }
        .contact-num {
          font-size: 18px;
          color: #0E932E;
        }
      }
    }
  }
</style>
