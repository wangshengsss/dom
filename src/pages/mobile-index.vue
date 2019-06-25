<template>
  <div class="main-container">
    <m-header @itemClick="handleItemClick"></m-header>
    <section class="section main-section" ref="main-section" :style="sectionStyle">
      <img src="../../h5/static/images/mobile/main-bg.png" alt="main-bg" class="bg main-bg">
      <div class="main-body">
        <div class="form">
          <div class="row name-row">
            <div class="name-row-item">
              <input class="form-input" type="text" placeholder="姓" v-model="formData.firstname">
            </div>
            <div class="name-row-item">
              <input class="form-input" type="text" placeholder="名" v-model="formData.lastname">
            </div>
          </div>
          <div class="row">
            <input class="form-input border" type="text" placeholder="手机" v-model="formData.mobile">
          </div>
          <div class="row">
            <input class="form-input border" type="text" placeholder="邮箱" v-model="formData.email">
          </div>
          <div class="row select-row">
            <div class="select-row-item select-row-label">我是</div>
            <div class="select-row-item select-row-content"
                 :class="{'selected': item.selected}"
                 v-for="item in userTypeList"
                 :key="item.name"
                 @click="switchUserType(item.userType)">
              {{item.name}}
            </div>
          </div>
          <div class="row select-row">
            <div class="select-row-item select-row-label">国家</div>
            <div class="select-row-item select-row-content"
                 :class="{'selected': item.selected}"
                 v-for="item in countryList"
                 :key="item.name"
                 @click="switchCountry(item.country)">
              {{item.name}}
            </div>
          </div>
          <div class="row">
            <div class="submit-btn" @click="register">注册兴趣</div>
          </div>
        </div>
      </div>
      <div class="toast" v-if="toastShow">
        {{toastMsg}}
      </div>
    </section>
    <section class="section download-section" ref="download-section" :style="sectionStyle">
      <img src="../../h5/static/images/mobile/download-bg.png" alt="download-bg" class="bg download-bg">
      <div class="center">
        <div class="upper">
          <div class="slogan">COMING&nbsp;SOON</div>
          <div class="weapp">
            <img src="../../h5/static/images/mobile/weapp-icon.png" alt="weapp-icon" class="weapp-icon">
            微信小程序
          </div>
          <div class="row">
            <div class="iosapp">
              <img src="../../h5/static/images/mobile/iosapp-icon.png" alt="iosapp-icon" class="iosapp-icon">
            </div>
            <div class="androidapp">
              <img src="../../h5/static/images/mobile/androidapp-icon.png" alt="androidapp-icon" class="androidapp-icon">
            </div>
          </div>
        </div>
        <div class="lower" :style="modelStyle">
          <img src="../../h5/static/images/mobile/phone-model.png" alt="phone-model" class="phone-model">

        </div>
      </div>
    </section>
    <section class="section landlord-section" ref="landlord-section">
      <div class="center">
        <p class="title">房东喜爱我们的原因</p>
        <div class="comparison-area">
          <div class="comparison-item green">
            <div class="item-title">
              每周租金
            </div>
            <div class="item-num">
              AUD&nbsp;$
              <input class="calc-input" type="number" v-model="rentFee">
            </div>
          </div>
          <div class="comparison-item orange">
            <div class="item-title">
              传统中介管理费
            </div>
            <div class="item-num">
              <input class="calc-input yellow" type="number" v-model="agentFeePercentage">%
            </div>
          </div>
        </div>
        <p class="subtitle">
          至少节省
          <span>AUD ${{savedFee}}</span>
          /每年
        </p>
        <div class="comparison-list">
          <div class="list-left list-part green">
            <div class="list-title">
              <img src="../../h5/static/images/mobile/landlord-title-icon.png" alt="landlord-title-icon" class="landlord-title-icon">
            </div>
            <div class="list-item" v-for="item in landlordCompareList" :key="item.title">
              <p class="list-item-title">{{item.title}}</p>
              <p class="list-item-content">{{item.leftVal}}</p>
            </div>
          </div>
          <div class="list-left list-part orange">
            <div class="list-title">
              传统中介
            </div>
            <div class="list-item" v-for="item in landlordCompareList" :key="item.title">
              <p class="list-item-title">{{item.title}}</p>
              <p class="list-item-content">{{item.rightVal}}</p>
            </div>
          </div>
        </div>
        <div class="magic-words" ref="landlordUpper">
          <p>{{landlordUpperSlogan}}</p>
        </div>
        <div class="character-blocks">
          <div class="block-row">
            <div class="block-row-item">乐房海外 App</div>
            <div class="block-row-item">简体中文</div>
            <div class="block-row-item">AI 人工智能</div>
          </div>
          <div class="block-row">
            <div class="block-row-item">短租管理</div>
            <div class="block-row-item">账户管理</div>
            <div class="block-row-item">实时估价</div>
          </div>
          <div class="block-row">
            <div class="block-row-item">验房报告</div>
            <div class="block-row-item">维护维修</div>
            <div class="block-row-item">文件管理</div>
          </div>
        </div>
        <div class="magic-words" ref="landlordLower">
          <p>{{landlordLowerSlogan}}</p>
        </div>
      </div>
    </section>
    <section class="section renter-section" ref="renter-section">
      <div class="center">
        <div class="title">租客喜爱我们的原因</div>
        <div class="comparison-list">
          <div class="list-left list-part green">
            <div class="list-title">
              <img src="../../h5/static/images/pc/landlord-title-icon.png" alt="landlord-title-icon" class="landlord-title-icon">
            </div>
            <div class="list-item" v-for="item in renterCompareList" :key="item.title">
              <p class="list-item-title">{{item.leftTitle}}</p>
              <p class="list-item-content">{{item.leftVal}}</p>
            </div>
          </div>
          <div class="list-left list-part orange">
            <div class="list-title">
              传统中介
            </div>
            <div class="list-item" v-for="item in renterCompareList" :key="item.title">
              <p class="list-item-title">{{item.rightTitle}}</p>
              <p class="list-item-content">{{item.rightVal}}</p>
            </div>
          </div>
        </div>
        <div class="magic-words" ref="renterUpper">
          <p>{{renterUpperSlogan}}</p>
        </div>
        <div class="character-blocks">
          <div class="block-row">
            <div class="block-row-item">乐房海外 App</div>
            <div class="block-row-item">AI 人工智能</div>
            <div class="block-row-item">实时估价</div>
          </div>
        </div>
        <div class="magic-words" ref="renterLower">
          <p>{{renterLowerSlogan}}</p>
        </div>
      </div>
    </section>
    <section class="section shortrent-section" ref="shortrent-section" :style="sectionStyle">
      <img src="../../h5/static/images/mobile/shortrent-bg.png" alt="shortrent-bg" class="shortrent-bg">
      <div class="center">
        <p class="title">
          度假、或出差，<br/>
          我们为您提供最佳体验
        </p>
        <div class="character-blocks">
          <div class="block-row">
            <div class="block-row-item">乐房海外 App</div>
            <div class="block-row-item">简体中文</div>
            <div class="block-row-item">智能开锁</div>
          </div>
          <div class="block-row">
            <div class="block-row-item">精品认证房源</div>
            <div class="block-row-item">订单管理</div>
            <div class="block-row-item">智能地图</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section lotvip-section" ref="lotvip-section" :style="sectionStyle">
      <img src="../../h5/static/images/pc/lotvip-bg.png" alt="lotvip-bg" class="bg lotvip-bg">
      <div class="center">
        <div class="upper">
          <div class="sub-slogan">分享属于你的更多精彩</div>
          <div class="slogan">COMING&nbsp;SOON</div>
          <div class="row">
            <div class="iosapp">
              <img src="../../h5/static/images/pc/iosapp-icon.png" alt="iosapp-icon" class="iosapp-icon">
            </div>
            <div class="androidapp">
              <img src="../../h5/static/images/pc/androidapp-icon.png" alt="androidapp-icon" class="androidapp-icon">
            </div>
          </div>
          <div class="sub-slogan">海外房东、租客和旅客的社交平台</div>
        </div>
        <div class="lower" :style="modelStyle">
          <img src="../../h5/static/images/pc/lotvip-phone.png" alt="lotvip-phone" class="phone-model">
        </div>
      </div>
    </section>
    <div class="footer">
      <div class="footer-top">
        <div class="footer-top-left">
          <div class="footer-logo-box">
            <img src="../../h5/static/images/pc/footer-logo.png" alt="footer-logo" class="footer-logo">
          </div>
          <div class="footer-icon-box">
            <img src="../../h5/static/images/pc/weixin.png" alt="weixin" class="footer-icon">
            <img src="../../h5/static/images/pc/weibo.png" alt="weibo" class="footer-icon">
            <img src="../../h5/static/images/pc/fb.png" alt="fb" class="footer-icon">
            <img src="../../h5/static/images/pc/ins.png" alt="ins" class="footer-icon">
          </div>
        </div>
        <div class="footer-top-right">
          <div class="footer-top-items">
            <span>常见问题</span>
            <span>合作伙伴</span>
            <span>加入我们</span>
            <span>服务声明</span>
          </div>
          <a class="footer-desc" href="http://dreamlot.cn">dreamlot.cn（乐房海外资讯）</a>
          <div class="footer-copyright">Copyright &copy; 2018 Dream LOT 保留所有权利</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
let CONSTANT = require('../../h5/static/constant/constant.js')
import {requestAjax as http} from "../../h5/static/common/common.js"
export default {
  components: {
    'm-header': () => import('@/components/m-header.vue')
  },
  data () {
    return {
      sectionStyle: {
        width: 0,
        height: 0
      },
      modelStyle: {
        flex: '0 0 324px',
        width: '161px'
      },
      userTypeList: [
        {name: '房东', userType: 'landlord', selected: true},
        {name: '租客', userType: 'renter', selected: false},
        {name: '旅客', userType: 'traveller', selected: false}
      ],
      countryList: [
        {name: '澳洲', country: 'aus', selected: true},
        {name: '英国', country: 'uk', selected: false},
        {name: '美国', country: 'us', selected: false}
      ],
      renterCompareList: [
        {rightTitle: '租房端 App', leftTitle: '乐房海外 App', leftVal: '免费使用', rightVal: '没有'},
        {rightTitle: '新租房申请', leftTitle: '新租房申请', leftVal: '实时更新', rightVal: '繁琐'},
        {rightTitle: '支付管理', leftTitle: '支付管理', leftVal: '在线支付', rightVal: '繁琐'},
        {rightTitle: '账户管理', leftTitle: '账户管理', leftVal: '实时智能', rightVal: '繁琐'},
        {rightTitle: '验房报告', leftTitle: '验房报告', leftVal: '实时更新', rightVal: '繁琐'},
        {rightTitle: '维护维修', leftTitle: '维护维修', leftVal: '实时更新', rightVal: '繁琐'},
        {rightTitle: '文件管理', leftTitle: '文件管理', leftVal: '云存储', rightVal: '繁琐'},
        {rightTitle: '联系中介/房东', leftTitle: '联系中介/房东', leftVal: '简易', rightVal: '繁琐'},
        {rightTitle: '续租申请', leftTitle: '续租申请', leftVal: '简易', rightVal: '繁琐'}
      ],
      landlordSloganList: [
        '我们，在颠覆传统的出租管理服务',
        'Managing Your Dream LOT'
      ],
      landlordUpperSlogan: '',
      landlordUpperTimer: null,
      landlordLowerSlogan: '',
      landlordLowerTimer: null,
      renterSloganList: [
        '我们，在颠覆传统繁琐的租房体验',
        'relax, enjoy your Dream LOT with us...'
      ],
      renterUpperSlogan: '',
      renterUpperTimer: null,
      renterLowerSlogan: '',
      renterLowerTimer: null,
      scrollValve: true,
      formData: {
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        userType: '',
        country: ''
      },
      toastShow: false,
      toastMsg: '',
      rentFee: '1000',
      agentFeePercentage: '7.7',
    }
  },
  computed: {
    calcRentFee () {
      return parseFloat(this.rentFee)
    },
    calcAgentFeePercentage () {
      return parseFloat(this.agentFeePercentage) || 0
    },
    savedFee () {
      if (this.calcAgentFeePercentage === 0 || !this.calcRentFee) {
        return 0
      }
      return Math.round(this.calcRentFee * (this.calcAgentFeePercentage - 4) / 100 * 52)
    },
    landlordCompareList () {
      return [
        {title: '出租管理费', leftVal: '4%', rightVal: this.calcAgentFeePercentage + '%'},
        {title: '验房报告', leftVal: '免费', rightVal: '$100'},
        {title: '专业摄影服务', leftVal: '免费', rightVal: '$200'},
        {title: '出租广告', leftVal: '免费', rightVal: '$200'},
        {title: '租客背景调查', leftVal: '免费', rightVal: '$29'},
        {title: '成功出租费', leftVal: '1周租金', rightVal: '2周租金'},
        {title: '租约合同费', leftVal: '免费', rightVal: '$50'},
        {title: '月度行政费', leftVal: '免费', rightVal: '$10'},
        {title: '例行验房', leftVal: '免费', rightVal: '$100'},
        {title: '财年投资报告', leftVal: '免费', rightVal: '$50'},
        {title: '续约合同费', leftVal: '免费', rightVal: '2周租金'},
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
    this.$nextTick( ()=> {
      let wd = document.documentElement.clientWidth
      let ht = document.documentElement.clientHeight
      this.sectionStyle = {
        width: wd + 'px',
        height: ht - 45 + 'px'
      }
      let ht2 = ht - 251
      let wd2 = ht2 / 2.012
      this.modelStyle = {
        flex: `0 0 ${ht2}px`,
        width: `${wd2}px`
      }
      // window.onresize = ()=>{  // 检测屏幕变化
      //   let wd = document.documentElement.clientWidth
      //   let ht = document.documentElement.clientHeight
      //   this.sectionStyle = {
      //     width: wd + 'px',
      //     height: ht - 45 + 'px'
      //   }
      //   let ht2 = ht - 500
      //   let wd2 = ht2 / 2.012
      //   this.downloadMobileStyle = {
      //     flex: `0 0 ${ht2}px`,
      //     width: `${wd2}px`
      //   }
      // }
    })
  },
  methods:{
    register () {
      let flag = this.validateRegisterInfo()
      if (!flag) {
        return
      } else {
        let reqUrl = CONSTANT.URL.USER.REGISTERINTEREST
        let data = this.formData
        let {country} = this.countryList.filter(item => {
          return item.selected
        })[0]
        let {userType} = this.userTypeList.filter(item => {
          return item.selected
        })[0]
        data = Object.assign(data, {country, userType})
        data = JSON.stringify(data)
        http(reqUrl, data, this.handleRegisterSuccess, this.handleRegisterFail)
      }
    },
    handleRegisterSuccess (res) {
      if (res.status === 200) {
        this.showToast('注册成功!')
      }
      this.formData = {
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        userType: '',
        country: ''
      }
    },
    handleRegisterFail () {
      this.showToast('系统繁忙，请稍后再试!')
    },
    showToast (msg) {
      this.toastShow = true
      this.toastMsg = msg
      setTimeout(() => {
        this.toastShow = false
        this.toastMsg = ''
      }, 1500)
    },
    handleItemClick (e) {
      let sectionClassName = e.itemName
      document.body.scrollTop = this.$refs[sectionClassName].offsetTop - 45
    },
    scrollHandler () {
      if (this.scrollValve) {
        this.scrollValve = false
        let pageScrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (this.$refs['landlordUpper'].offsetTop + 260 < pageScrollTop && !this.landlordUpperTimer) this.magicWordShow('landlordUpper', this.landlordSloganList, 0)
        if (this.$refs['landlordLower'].offsetTop + 260 < pageScrollTop && !this.landlordLowerTimer) this.magicWordShow('landlordLower', this.landlordSloganList, 1)
        if (this.$refs['renterUpper'].offsetTop + 260 < pageScrollTop && !this.renterUpperTimer) this.magicWordShow('renterUpper', this.renterSloganList, 0)
        if (this.$refs['renterLower'].offsetTop + 260 < pageScrollTop && !this.renterLowerTimer) this.magicWordShow('renterLower', this.renterSloganList, 1)
        setTimeout(() => {
          this.scrollValve = true
        }, 500)
      }

    },
    magicWordShow (posName, list, start) {
      let duration = 7000
      let nextStr = list[start]
      let step = duration / nextStr.length
      let nextStrArr = nextStr.split('')
      let curStrArr = []
      let reverse = false
      let timerName = `${posName}Timer`
      let propName = `${posName}Slogan`
      this[timerName] = 'open'
      let timer = setInterval(() => {
        if (nextStrArr.length) {
          curStrArr.push(nextStrArr.splice(0, 1))
          this[propName] = curStrArr.join('')
        } else if (curStrArr.length) {
          curStrArr.splice(curStrArr.length - 1, 1)
          this[propName] = curStrArr.join('')
        } else if (!curStrArr.length) {
          this[propName] = ''
          // console.log(timer)
          window.clearInterval(timer)
          start = 1 - start
          this.magicWordShow(posName, list, start)
        }
      }, step)
    },
    switchUserType (userTypeVal) {
      // console.log(userTypeVal)
      let list = this.userTypeList
      for (let item of list) {
        item.selected = false
        if (item.userType === userTypeVal) item.selected = true
      }
      this.userTypeList = list
    },
    switchCountry (countryVal) {
      // console.log(countryVal)
      let list = this.countryList
      for (let item of list) {
        item.selected = false
        if (item.country === countryVal) item.selected = true
      }
      this.countryList = list
    },
    validateRegisterInfo () {
      let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (!this.formData.firstname || !this.formData.lastname || !this.formData.mobile || !this.formData.email) {
        this.showToast('请输入完整信息!')
        return false
      } else if (!emailReg.test(this.formData.email)) {
        this.showToast('请输入正确格式的邮箱!')
        return false
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-container{
    padding-top: .45rem;
    position: relative;
  }
  .section {
    position: relative;
  }
  .main-section {
    display: flex;
    width: 100%;
    height: 5.75rem;
    .main-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    .main-body {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: .3rem;
      }
      .row {
        flex: 0 0 .31rem;
        display: flex;
        width: 2.54rem;
        &+.row {
          margin-top: .08rem;
        }
        &.select-row {
          justify-content: space-between;
          .select-row-item {
            box-sizing: border-box;
            flex: 0 0 .57rem;
            height: 100%;
            line-height: .31rem;
            text-align: center;
            font-size: 12px;
            background-color: #fff;
            border: 1px solid #0e932e;
            border-radius: 7px;
            &.select-row-label {
              color: #0e932e;
            }
            &.select-row-content {
              color: #bbb;
              cursor: pointer;
              &.selected {
                background-color: #0e932e;
                color: #fff;
              }
            }
          }
        }
        &.name-row {
          justify-content: space-between;
          .name-row-item {
            box-sizing: border-box;
            flex: 0 0 1.16rem;
            height: 100%;
            border: 1px solid #0e932e;
            border-radius: 7px;
          }
        }
        .submit-btn {
          width: 100%;
          height: 100%;
          font-size: 12px;
          line-height: .31rem;
          text-align: center;
          color: white;
          background-color: #0e932e;
          border-radius: 7px;
        }
        .form-input {
          width: 100%;
          height: .31rem;
          text-align: center;
          line-height: .31rem;
          color: #888;
          font-size: 12px;
          border-radius: 7px;
          border: none;
          font-family: 'Microsoft Yahei';
          &.border {
            border: 1px solid #0e932e;
          }
        }
      }
    }
    .toast {
      width: 250px;
      height: 150px;
      position: absolute;
      z-index: 3;
      bottom: 250px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 24px;
      line-height: 150px;
      color: #000;
      background-color: rgba(255, 255, 255, .85);
      border-radius: 10px;
    }
  }
  .download-section {
    .download-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    .center {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .upper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: .37rem;
      .slogan {
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        color: #fff;
      }
      .weapp {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #fff;
        margin: .28rem 0;
        .weapp-icon {
          flex: 0 0 .4rem;
          height: .4rem;
          margin-right: .11rem;
        }
      }
      .row {
        display: flex;
        justify-content: center;
      }
      .iosapp {
        margin-right: .2rem;
      }
      .iosapp, .androidapp {
        flex: 0 0 1.47rem;
        height: .45rem;
      }
      .iosapp-icon, .androidapp-icon {
        width: 100%;
        height: 100%;
      }
    }
    .lower {
      // flex: 0 0 3.24rem;
      // width: 1.61rem;
      // flex: 0 1 324px;
      // width: 161px;
      margin-top: .25rem;
      .phone-model {
        width: 100%;
        height: 100%;
      }
    }
  }
  .landlord-section,
  .renter-section {
    background-color: #ededed;
    .center {
      width: 100%;
      height: 100%;
      padding-top: .39rem;
    }
    .title {
      color: #515151;
      font-size: 23px;
      line-height: 23px;
      text-align: center;
      margin-bottom: .31rem;
    }
    .comparison-area {
      display: flex;
      justify-content: center;
      margin-bottom: .31rem;
      .comparison-item {
        flex: 0 0 1.3rem;
        &:first-child {
          margin-right: .24rem;
        }
        &.green {
          .item-title {
            color: #0E932E;
          }
          .item-num {
            color: #0E932E;
            border: 1px solid #0E932E;
            .calc-input {
              height: .30rem;
              width: 30px;
              color: #0e932e;
              font-size: 13px;
              line-height: .30rem;
              &::-webkit-input-placeholder {
                color: #0e932e;
              }
            }
          }
        }
        &.orange {
          .item-title {
            color: #FA883D;
          }
          .item-num {
            color: #FA883D;
            border: 1px solid #FA883D;
            .calc-input {
              height: .30rem;
              width: 30px;
              color: #FA883D;
              font-size: 13px;
              line-height: .30rem;
              &::-webkit-input-placeholder {
                color: #FA883D;
              }
            }
          }
        }
        .item-title {
          font-size: 14px;
          margin-bottom: .12rem;
        }
        .item-num {
          width: 100%;
          height: .39rem;
          line-height: .37rem;
          text-align: center;
          font-size: 13px;
          border-radius: 5px;
          background-color: #fff;
          .calc-input {
            background-color: #fff;
          }
        }
        .calc-input {
          border: none;
          background-color: #ededed;
        }
      }
    }
    .subtitle {
      color: #515151;
      font-size: 19px;
      line-height: 19px;
      text-align: center;
      margin-bottom: .31rem;
      span {
        font-size: 19px;
        line-height: 19px;
        color: #0E932E;
      }
    }
    .comparison-list {
      display: flex;
      justify-content: center;
      .list-part {
        box-sizing: border-box;
        flex: 0 0 1.61rem;
        padding: .15rem .14rem;
        border-radius: 7px;
        &.green {
          background-color: #0E932E;
          margin-right: .21rem;
        }
        &.orange {
          background-color: #FA883D;
        }
        .list-title {
          height: .4rem;
          line-height: .28rem;
          text-align: center;
          font-size: 14px;
          color: #fff;
          .landlord-title-icon {
            width: .78rem;
            height: .25rem;
          }
        }
        .list-item {
          height: .12rem;
          display: flex;
          justify-content: space-between;
          &+.list-item {
            margin-top: .15rem;
          }
          .list-item-title,
          .list-item-content {
            font-size: .12rem;
            color: #fff;
          }
        }
      }
    }
    .character-blocks {
      .block-row {
        display: flex;
        justify-content: center;
        &:not(:first-child) {
          margin-top: .15rem;
        }
        .block-row-item {
          flex: 0 0 1.05rem;
          height: .45rem;
          line-height: .44rem;
          text-align: center;
          font-size: .13rem;
          color: #0E932E;
          background-color: #fff;
          border: 1px solid #0E932E;
          border-radius: 7px;
          &:not(:first-child) {
            margin-left: .15rem;
          }
        }
      }
    }
    .magic-words {
      width: 100%;
      padding-left: .6rem;
      margin: .3rem 0;
      p {
        height: .17rem;
        font-size: .17rem;
        line-height: .17rem;
        text-align: left;
        color: #515151;
      }
    }
  }
  .renter-section {
    background-color: #f8f8f8;
    .character-blocks {
      .block-row {
        display: flex;
        justify-content: center;
        .block-row-item {
          flex: 0 0 1.05rem;
          height: .45rem;
          line-height: .44rem;
          text-align: center;
          font-size: 13px;
          color: #0E932E;
          background-color: #fff;
          border: 1px solid #0E932E;
          border-radius: 7px;
          &:not(:first-child) {
            margin-left: .15rem;
          }
        }
      }
    }
    .magic-words {
      width: 100%;
      padding-left: .4rem;
      margin: .3rem 0;
      p {
        height: .17rem;
        font-size: .17rem;
        line-height: .17rem;
        text-align: left;
        color: #515151;
      }
    }
  }
  .shortrent-section {
    position: relative;
    .center {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .shortrent-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .title {
      color: #fff;
      font-size: 23px;
      line-height: 30px;
      text-align: center;
      margin-bottom: .51rem;
    }
    .character-blocks {
      .block-row {
        display: flex;
        justify-content: center;
        &:not(:first-child) {
          margin-top: .15rem;
        }
        .block-row-item {
          flex: 0 0 1.05rem;
          height: .45rem;
          line-height: .44rem;
          text-align: center;
          font-size: 13px;
          color: #0E932E;
          background-color: rgba(255, 255, 255, .9);
          border-radius: 7px;
          &:not(:first-child) {
            margin-left: .15rem;
          }
        }
      }
    }
  }
  .lotvip-section {
    .lotvip-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    .center {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .upper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: .3rem;
      margin-bottom: .15rem;
      .slogan {
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        margin: .12rem 0;
      }
      .sub-slogan {
        font-size: 21px;
        line-height: 21px;
        text-align: center;
        color: #fff;
      }
      .row {
        display: flex;
        justify-content: center;
        margin-bottom: .2rem;
      }
      .iosapp {
        margin-right: .2rem;
      }
      .iosapp, .androidapp {
        flex: 0 0 1.47rem;
        height: .45rem;
      }
      .iosapp-icon, .androidapp-icon {
        width: 100%;
        height: 100%;
      }
    }
    .lower {
      // flex: 0 0 3.24rem;
      // width: 1.61rem;
      .phone-model {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    width: 100%;
    height: .83rem;
    padding: .1rem .15rem 0;
    background-color: #000;
    .footer-top {
      display: flex;
      justify-content: space-between;
      .footer-top-left {
        .footer-logo-box {
          margin-bottom: .08rem;
        }
        .footer-logo {
          width: .72rem;
          height: .21rem;
        }
        .footer-icon-box {
          display: flex;
          .footer-icon {
            width: .14rem;
            height: .14rem;
            margin-right: .06rem;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .footer-top-right {
        flex: 1;
        margin-left: .4rem;
        .footer-top-items {
          display: flex;
          align-items: center;
          span {
            font-size: 9px;
            line-height: .26rem;
            color: #fff;
            margin-left: .2rem;
            &:first-child {
              margin-left: 0;
            }
          }
        }
        .footer-desc {
          font-size: 9px;
          line-height: .14rem;
          color: #fff;
        }
      }
    }
    .footer-copyright {
      font-size: 8px;
      line-height: 8px;
      color: #fff;
      margin-top: .1rem;
    }
  }
</style>
