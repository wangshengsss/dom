<template>
  <div class="header-container">
    <img src="../../h5/static/images/mobile/header-logo.png" class="header-logo" alt="header-logo" @click="handleNavItemClick('main')">
    <div class="contact">
      <img src="../../h5/static/images/mobile/contact-icon.png" class="contact-icon" alt="contact-icon">
      <a href="tel:400-186-0061" class="contact-content">400-186-0061</a>
    </div>
    <div class="menu" @click="toggleMenuShow">
      <img src="../../h5/static/images/mobile/menu.png" class="menu-icon" alt="menu">
    </div>
    <div class="header-menu-list" v-if="menuListShow">
      <div class="header-menu-item" @click="handleNavItemClick('download')">下载 App</div>
      <div class="header-menu-item" @click="handleNavItemClick('landlord')">房东</div>
      <div class="header-menu-item" @click="handleNavItemClick('renter')">租客</div>
      <div class="header-menu-item" @click="handleNavItemClick('shortrent')">短租</div>
      <div class="header-menu-item flex-align-center" @click="handleNavItemClick('lotvip')">
        乐
        <img src="../../h5/static/images/mobile/lev.png" alt="lev" class="lev">
      </div>
      <div class="header-menu-item flex-align-center" @click="hideMenu">
        <img src="../../h5/static/images/mobile/flag.png" alt="flag" class="flag">
        中国
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuListShow: false
    }
  },
  methods: {
    toggleMenuShow () {
      // console.log(this.menuListShow)
      this.menuListShow = !this.menuListShow
    },
    hideMenu () {
      this.menuListShow = false
    },
    handleNavItemClick (itemName) {
      this.$emit('itemClick', {itemName: `${itemName}-section`})
      this.menuListShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .header-container {
    width: 100%;
    height: .45rem;
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .15rem;
    background-color: #fff;
    .header-logo {
      flex: 0 0 .88rem;
      height: .25rem;
    }
    .contact {
      display: flex;
      align-items: center;
      .contact-icon {
        flex: 0 0 .15rem;
        height: .15rem;
        margin-right: .05rem;
      }
      .contact-content {
        text-decoration: none;
        font-size: 13px;
        line-height: 13px;
        color: #0E932E;
      }
    }
    .menu {
      flex: 0 0 .25rem;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .menu-icon {
        flex: 0 0 .16rem;
        height: .13rem;
      }
    }
    .header-menu-list {
      position: absolute;
      right: 0;
      top: .45rem;
      padding: 0 .11rem;
      background-color: rgba(255, 255, 255, .94);
      .header-menu-item {
        width: 1.1rem;
        height: .38rem;
        line-height: .38rem;
        font-size: 12px;
        color: #515151;
        text-align: center;
        border-bottom: 1px solid #c6c6c6;
        &.flex-align-center {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin: 0 .025rem;
          }
          .lev {
            flex: 0 0 .125rem;
            height: .125rem;
          }
          .flag {
            flex: 0 0 .15rem;
            height: .15rem
          }
        }
      }
    }
  }
</style>
