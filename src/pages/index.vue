<template>
  <div class="main-container">
    <h-header @itemClick="handleItemClick"></h-header>
    <section class="section main-section" ref="main-section" :style="sectionStyle">
      <img src="../../h5/static/images/pc/main-bg.png" alt="main-bg" class="bg main-bg">
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
      <img src="../../h5/static/images/pc/download-bg.png" alt="download-bg" class="bg download-bg">
      <div class="center">
        <div class="left" :style="phoneModelStyle">
          <img src="../../h5/static/images/pc/phone-model.png" alt="phone-model" class="phone-model">
        </div>
        <div class="right">
          <div class="slogan">COMING&nbsp;SOON</div>
          <div class="weapp">
            <img src="../../h5/static/images/pc/weapp-icon.png" alt="weapp-icon" class="weapp-icon">
            微信小程序
          </div>
          <div class="row">
            <div class="iosapp">
              <img src="../../h5/static/images/pc/iosapp-icon.png" alt="iosapp-icon" class="iosapp-icon">
            </div>
            <div class="androidapp">
              <img src="../../h5/static/images/pc/androidapp-icon.png" alt="androidapp-icon" class="androidapp-icon">
            </div>
          </div>
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
              <input class="calc-input" type="text" v-model="rentFee">
            </div>
          </div>
          <div class="comparison-item orange">
            <div class="item-title">
              传统中介管理费
            </div>
            <div class="item-num">
              <input class="calc-input yellow" type="text" v-model="agentFeePercentage">%
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
              <img src="../../h5/static/images/pc/landlord-title-icon.png" alt="landlord-title-icon" class="landlord-title-icon">
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
      <img src="../../h5/static/images/pc/shortrent-bg.png" alt="shortrent-bg" class="shortrent-bg">
      <div class="center">
        <p class="title">度假、或出差，我们为您提供最佳体验</p>
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
        <div class="left" :style="phoneModelStyle">
          <img src="../../h5/static/images/pc/lotvip-phone.png" alt="lotvip-phone" class="phone-model">
        </div>
        <div class="right">
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
      </div>
    </section>
    <div class="footer">
      <div class="center">
        <div class="footer-top">
          <div class="footer-top-items">
            <img src="../../h5/static/images/pc/footer-logo.png" alt="footer-logo">
            <span>常见问题</span>
            <span>合作伙伴</span>
            <span>加入我们</span>
            <span>服务声明</span>
          </div>
          <div class="footer-copyright">
            Copyright &copy; 2018 Dream LOT 保留所有权利
          </div>
        </div>
        <div class="footer-bottom">
          <img src="../../h5/static/images/pc/weixin.png" alt="weixin" class="footer-bottom-icon">
          <img src="../../h5/static/images/pc/weibo.png" alt="weibo" class="footer-bottom-icon">
          <img src="../../h5/static/images/pc/fb.png" alt="fb" class="footer-bottom-icon">
          <img src="../../h5/static/images/pc/ins.png" alt="ins" class="footer-bottom-icon">
          <a class="footer-desc" href="http://www.dreamlot.cn">dreamlot.cn（乐房海外资讯）</a>
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
    'h-header': () => import('@/components/h-header.vue')
  },
  data () {
    return {
      sectionStyle: {
        width: 0,
        height: 0
      },
      phoneModelStyle: {
        flex: '0 0 393px',
        height: '765px'
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
      return parseFloat(this.rentFee) || 0
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
        {title: '续约合同费', leftVal: '免费', rightVal: '2周租金'}
      ]
    }
  },
  created () {
    let wd = document.documentElement.clientWidth
    if (wd < 1250) {
      this.$router.replace('mobile')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
    this.$nextTick( ()=> {
      let wd = document.documentElement.clientWidth
      let ht = document.documentElement.clientHeight
      this.sectionStyle = {
        width: wd + 'px',
        height: ht - 72 + 'px'
      }
      let modelWidth = 393 / 1920 * wd
      let modelHeight = modelWidth * 1.947
      this.phoneModelStyle = {
        flex: `0 0 ${modelWidth}px`,
        height: `${modelHeight}px`
      }
      window.onresize = ()=>{  // 检测屏幕变化
        let wd = document.documentElement.clientWidth
        let ht = document.documentElement.clientHeight
        let modelWidth = 393 / 1920 * wd
        let modelHeight = modelWidth * 1.947
        this.sectionStyle = {
          width: wd + 'px',
          height: ht - 72 + 'px'
        }
        this.phoneModelStyle = {
          flex: `0 0 ${modelWidth}px`,
          height: `${modelHeight}px`
        }
      }
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
      document.documentElement.scrollTop = this.$refs[sectionClassName].offsetTop - 72
      console.log(this.$refs[sectionClassName].offsetTop, 'sdfsdf', document.documentElement.scrollTop, 'qweqwe', document.body.scrollTop)
    },
    scrollHandler () {
      let pageScrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (this.$refs['landlordUpper'].offsetTop + 1000 < pageScrollTop && !this.landlordLowerTimer) {
        this.magicWordShow('landlordUpper', this.landlordSloganList, 0)
        this.magicWordShow('landlordLower', this.landlordSloganList, 1)
      }
      if (this.$refs['renterUpper'].offsetTop + 1000 < pageScrollTop && !this.renterLowerTimer) {
        this.magicWordShow('renterUpper', this.renterSloganList, 0)
        this.magicWordShow('renterLower', this.renterSloganList, 1)
      }
    },
    magicWordShow (posName, list, start) {
      // let startStr = ''
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
    },
  }
}
</script>
<style lang="scss" scoped>
  .main-container{
    padding-top: 72px;
    position: relative;
  }
  .section {
    position: relative;
  }
  .main-section {
    display: flex;
    .main-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    .main-body {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .row {
        flex: 0 0 68px;
        display: flex;
        width: 508px;
        &+.row {
          margin-top: 20px;
        }
        &.select-row {
          justify-content: space-between;
          .select-row-item {
            box-sizing: border-box;
            flex: 0 0 115px;
            height: 100%;
            line-height: 66px;
            text-align: center;
            font-size: 24px;
            background-color: #fff;
            border: 1px solid #0e932e;
            border-radius: 14px;
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
            flex: 0 0 232px;
            height: 100%;
            border: 1px solid #0e932e;
            border-radius: 14px;
          }
        }
        .submit-btn {
          width: 100%;
          height: 100%;
          font-size: 24px;
          line-height: 66px;
          text-align: center;
          color: white;
          background-color: #0e932e;
          border-radius: 14px;
        }
        .form-input {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 68px;
          color: #888;
          font-size: 24px;
          border-radius: 14px;
          border: none;
          font-family: 'Microsoft Yahei';
          &.border {
            border: 1px solid #0e932e;
          }
        }
      }
      @media screen and (max-width:1600px) {
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .row {
          flex: 0 0 57px;
          display: flex;
          width: 423px;
          &+.row {
            margin-top: 17px;
          }
          &.select-row {
            justify-content: space-between;
            .select-row-item {
              box-sizing: border-box;
              flex: 0 0 96px;
              height: 100%;
              line-height: 57px;
              text-align: center;
              font-size: 24px;
              background-color: #fff;
              border: 1px solid #0e932e;
              border-radius: 12px;
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
              flex: 0 0 193px;
              height: 100%;
              border: 1px solid #0e932e;
              border-radius: 12px;
            }
          }
          .submit-btn {
            width: 100%;
            height: 100%;
            font-size: 24px;
            line-height: 57px;
            text-align: center;
            color: white;
            background-color: #0e932e;
            border-radius: 12px;
          }
          .form-input {
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 57px;
            color: #888;
            font-size: 24px;
            border-radius: 12px;
            border: none;
            font-family: 'Microsoft Yahei';
          }
        }
      }
      @media screen and (max-width:1366px) {
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .row {
          flex: 0 0 48px;
          display: flex;
          width: 361px;
          &+.row {
            margin-top: 14px;
          }
          &.select-row {
            justify-content: space-between;
            .select-row-item {
              box-sizing: border-box;
              flex: 0 0 82px;
              height: 100%;
              line-height: 48px;
              text-align: center;
              font-size: 24px;
              background-color: #fff;
              border: 1px solid #0e932e;
              border-radius: 10px;
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
              flex: 0 0 165px;
              height: 100%;
              border: 1px solid #0e932e;
              border-radius: 10px;
            }
          }
          .submit-btn {
            width: 100%;
            height: 100%;
            font-size: 24px;
            line-height: 48px;
            text-align: center;
            color: white;
            background-color: #0e932e;
            border-radius: 10px;
          }
          .form-input {
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 48px;
            color: #888;
            font-size: 24px;
            border-radius: 10px;
            border: none;
            font-family: 'Microsoft Yahei';
          }
        }
      }
    }
    .toast {
      width: 350px;
      height: 250px;
      position: absolute;
      z-index: 3;
      bottom: 300px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 24px;
      line-height: 250px;
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
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left {
      flex: 0 0 393px;
      height: 765px;
      .phone-model {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 0 0 706px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .slogan {
        font-weight: bold;
        font-size: 70px;
        line-height: 70px;
        text-align: center;
        color: #fff;
      }
      .weapp {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 46px;
        color: #fff;
        margin: 65px 0 80px;
        .weapp-icon {
          flex: 0 0 92px;
          height: 92px;
          margin-right: 16px;
        }
      }
      .row {
        display: flex;
        justify-content: space-between;
      }
      .iosapp, .androidapp {
        flex: 0 0 325px;
        height: 100px;
      }
      .iosapp-icon, .androidapp-icon {
        width: 100%;
        height: 100%;
      }
    }
  }
  .landlord-section,
  .renter-section {
    background-color: #ededed;
    .center {
      width: 1200px;
      height: 100%;
      padding: 110px 0 70px;
      margin: 0 auto;
    }
    .title {
      color: #515151;
      font-size: 45px;
      line-height: 45px;
      text-align: center;
      margin-bottom: 74px;
    }
    .comparison-area {
      display: flex;
      justify-content: center;
      margin-bottom: 74px;
      .comparison-item {
        flex: 0 0 288px;
        &:first-child {
          margin-right: 120px;
        }
        &.green {
          .item-title {
            color: #0E932E;
          }
          .item-num {
            color: #0E932E;
            border: 1px solid #0E932E;
            .calc-input {
              height: 30px;
              width: 75px;
              color: #0e932e;
              font-size: 30px;
              line-height: 30px;
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
              height: 30px;
              width: 75px;
              color: #FA883D;
              font-size: 30px;
              line-height: 30px;
              &::-webkit-input-placeholder {
                color: #FA883D;
              }
            }
          }
        }
        .calc-input {
          border: none;
          background-color: #ededed;
        }
        .item-title {
          font-size: 30px;
          margin-bottom: 23px;
        }
        .item-num {
          width: 100%;
          height: 86px;
          line-height: 86px;
          text-align: center;
          font-size: 30px;
          border-radius: 10px;
          background-color: #fff;
          .calc-input {
            background-color: #fff;
          }
        }
      }
    }
    .subtitle {
      color: #515151;
      font-size: 42px;
      line-height: 42px;
      text-align: center;
      margin-bottom: 74px;
      span {
        font-size: 42px;
        line-height: 42px;
        color: #0E932E;
      }
    }
    .comparison-list {
      display: flex;
      justify-content: center;
      .list-part {
        box-sizing: border-box;
        flex: 0 0 420px;
        padding: 40px 35px;
        border-radius: 14px;
        &.green {
          background-color: #0E932E;
          margin-right: 120px;
        }
        &.orange {
          background-color: #FA883D;
        }
        .list-title {
          height: 86px;
          line-height: 60px;
          text-align: center;
          font-size: 34px;
          color: #fff;
        }
        .list-item {
          height: 28px;
          display: flex;
          justify-content: space-between;
          &+.list-item {
            margin-top: 40px;
          }
          .list-item-title,
          .list-item-content {
            font-size: 28px;
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
          margin-top: 47px;
        }
        .block-row-item {
          flex: 0 0 318px;
          height: 108px;
          line-height: 108px;
          text-align: center;
          font-size: 32px;
          color: #0E932E;
          background-color: #fff;
          border: 1px solid #0E932E;
          border-radius: 14px;
          &:not(:first-child) {
            margin-left: 47px;
          }
        }
      }
    }
    .magic-words {
      width: 100%;
      padding-left: 340px;
      margin: 75px 0;
      p {
        height: 36px;
        font-size: 36px;
        line-height: 36px;
        text-align: left;
        color: #515151;
      }
    }
    @media screen and (max-width:1600px) {
      .title {
        color: #515151;
        font-size: 38px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 62px;
      }
      .comparison-area {
        display: flex;
        justify-content: center;
        margin-bottom: 62px;
        .comparison-item {
          flex: 0 0 240px;
          &:first-child {
            margin-right: 101px;
          }
          &.green {
            .item-title {
              color: #0E932E;
            }
            .item-num {
              color: #0E932E;
              border: 1px solid #0E932E;
              .calc-input {
                height: 25px;
                width: 75px;
                color: #0e932e;
                font-size: 25px;
                line-height: 25px;
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
                height: 25px;
                width: 75px;
                color: #FA883D;
                font-size: 25px;
                line-height: 25px;
                &::-webkit-input-placeholder {
                  color: #FA883D;
                }
              }
            }
          }
          .item-title {
            font-size: 25px;
            margin-bottom: 19px;
          }
          .item-num {
            width: 100%;
            height: 72px;
            line-height: 70px;
            text-align: center;
            font-size: 25px;
            border-radius: 8px;
          }
        }
      }
      .subtitle {
        color: #515151;
        font-size: 35px;
        line-height: 35px;
        text-align: center;
        margin-bottom: 62px;
        span {
          font-size: 35px;
          line-height: 35px;
          color: #0E932E;
        }
      }
      .comparison-list {
        display: flex;
        justify-content: center;
        .list-part {
          box-sizing: border-box;
          flex: 0 0 350px;
          padding: 33px 30px 38px;
          border-radius: 12px;
          &.green {
            background-color: #0E932E;
            margin-right: 100px;
          }
          &.orange {
            background-color: #FA883D;
          }
          .list-title {
            height: 80px;
            line-height: 56px;
            text-align: center;
            font-size: 28px;
            color: #fff;
          }
          .list-item {
            height: 23px;
            display: flex;
            justify-content: space-between;
            &+.list-item {
              margin-top: 32px;
            }
            .list-item-title,
            .list-item-content {
              font-size: 23px;
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
            margin-top: 39px;
          }
          .block-row-item {
            flex: 0 0 265px;
            height: 90px;
            line-height: 88px;
            text-align: center;
            font-size: 27px;
            color: #0E932E;
            background-color: #fff;
            border: 1px solid #0E932E;
            border-radius: 12px;
            &:not(:first-child) {
              margin-left: 39px;
            }
          }
        }
      }
      .magic-words {
        width: 100%;
        padding-left: 360px;
        margin: 63px 0;
        p {
          height: 30px;
          font-size: 30px;
          line-height: 30px;
          text-align: left;
          color: #515151;
        }
      }
    }
    @media screen and (max-width:1366px) {
      .title {
        color: #515151;
        font-size: 33px;
        line-height: 33px;
        text-align: center;
        margin-bottom: 53px;
      }
      .comparison-area {
        display: flex;
        justify-content: center;
        margin-bottom: 52px;
        .comparison-item {
          flex: 0 0 205px;
          &:first-child {
            margin-right: 86px;
          }
          &.green {
            .item-title {
              color: #0E932E;
            }
            .item-num {
              color: #0E932E;
              border: 1px solid #0E932E;
              .calc-input {
                height: 21px;
                width: 75px;
                color: #0e932e;
                font-size: 21px;
                line-height: 21px;
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
                height: 21px;
                width: 75px;
                color: #FA883D;
                font-size: 21px;
                line-height: 21px;
                &::-webkit-input-placeholder {
                  color: #FA883D;
                }
              }
            }
          }
          .item-title {
            font-size: 21px;
            margin-bottom: 17px;
          }
          .item-num {
            width: 100%;
            height: 61px;
            line-height: 59px;
            text-align: center;
            font-size: 21px;
            border-radius: 7px;
          }
        }
      }
      .subtitle {
        color: #515151;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 52px;
        span {
          font-size: 30px;
          line-height: 30px;
          color: #0E932E;
        }
      }
      .comparison-list {
        display: flex;
        justify-content: center;
        .list-part {
          box-sizing: border-box;
          flex: 0 0 300px;
          padding: 28px 36px 33px;
          border-radius: 10px;
          &.green {
            background-color: #0E932E;
            margin-right: 86px;
          }
          &.orange {
            background-color: #FA883D;
          }
          .list-title {
            height: 68px;
            line-height: 54px;
            text-align: center;
            font-size: 24px;
            color: #fff;
          }
          .list-item {
            height: 20px;
            display: flex;
            justify-content: space-between;
            &+.list-item {
              margin-top: 28px;
            }
            .list-item-title,
            .list-item-content {
              font-size: 20px;
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
            margin-top: 34px;
          }
          .block-row-item {
            flex: 0 0 226px;
            height: 77px;
            line-height: 75px;
            text-align: center;
            font-size: 23px;
            color: #0E932E;
            background-color: #fff;
            border: 1px solid #0E932E;
            border-radius: 10px;
            &:not(:first-child) {
              margin-left: 33px;
            }
          }
        }
      }
      .magic-words {
        width: 100%;
        padding-left: 380px;
        margin: 54px 0;
        p {
          height: 26px;
          font-size: 26px;
          line-height: 26px;
          text-align: left;
          color: #515151;
        }
      }
    }
  }
  .renter-section {
    background-color: #f8f8f8;
  }
  //   .character-blocks {
  //     .block-row {
  //       display: flex;
  //       justify-content: center;
  //       &:not(:first-child) {
  //         margin-top: 47px;
  //       }
  //       .block-row-item {
  //         flex: 0 0 318px;
  //         height: 108px;
  //         line-height: 108px;
  //         text-align: center;
  //         font-size: 32px;
  //         color: #0E932E;
  //         background-color: rgba(255, 255, 255, .9);
  //         border: 1px solid #0E932E;
  //         border-radius: 14px;
  //         &:not(:first-child) {
  //           margin-left: 47px;
  //         }
  //       }
  //     }
  //   }
  //   @media screen and (max-width:1600px) {
  //     .character-blocks {
  //       .block-row {
  //         display: flex;
  //         justify-content: center;
  //         &:not(:first-child) {
  //           margin-top: 47px;
  //         }
  //         .block-row-item {
  //           flex: 0 0 318px;
  //           height: 108px;
  //           line-height: 108px;
  //           text-align: center;
  //           font-size: 32px;
  //           color: #0E932E;
  //           background-color: rgba(255, 255, 255, .9);
  //           border: 1px solid #0E932E;
  //           border-radius: 14px;
  //           &:not(:first-child) {
  //             margin-left: 47px;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   @media screen and (max-width:1366px) {
  //     .character-blocks {
  //       .block-row {
  //         display: flex;
  //         justify-content: center;
  //         &:not(:first-child) {
  //           margin-top: 47px;
  //         }
  //         .block-row-item {
  //           flex: 0 0 318px;
  //           height: 108px;
  //           line-height: 108px;
  //           text-align: center;
  //           font-size: 32px;
  //           color: #0E932E;
  //           background-color: rgba(255, 255, 255, .9);
  //           border: 1px solid #0E932E;
  //           border-radius: 14px;
  //           &:not(:first-child) {
  //             margin-left: 47px;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  .shortrent-section {
    position: relative;
    .center {
      width: 1200px;
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
      font-size: 45px;
      line-height: 45px;
      text-align: center;
      margin-bottom: 74px;
    }
    .character-blocks {
      .block-row {
        display: flex;
        justify-content: center;
        &:not(:first-child) {
          margin-top: 47px;
        }
        .block-row-item {
          flex: 0 0 318px;
          height: 108px;
          line-height: 108px;
          text-align: center;
          font-size: 32px;
          color: #0E932E;
          background-color: rgba(255, 255, 255, .9);
          border-radius: 14px;
          &:not(:first-child) {
            margin-left: 47px;
          }
        }
      }
    }
    @media screen and (max-width:1600px) {
      .title {
        color: #fff;
        font-size: 38px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 69px;
      }
      .character-blocks {
        .block-row {
          display: flex;
          justify-content: center;
          &:not(:first-child) {
            margin-top: 39px;
          }
          .block-row-item {
            flex: 0 0 265px;
            height: 90px;
            line-height: 90px;
            text-align: center;
            font-size: 27px;
            color: #0E932E;
            background-color: rgba(255, 255, 255, .9);
            border-radius: 12px;
            &:not(:first-child) {
              margin-left: 39px;
            }
          }
        }
      }
    }
    @media screen and (max-width:1366px) {
      .title {
        color: #fff;
        font-size: 33px;
        line-height: 33px;
        text-align: center;
        margin-bottom: 59px;
      }
      .character-blocks {
        .block-row {
          display: flex;
          justify-content: center;
          &:not(:first-child) {
            margin-top: 34px;
          }
          .block-row-item {
            flex: 0 0 226px;
            height: 77px;
            line-height: 77px;
            text-align: center;
            font-size: 23px;
            color: #0E932E;
            background-color: rgba(255, 255, 255, .9);
            border-radius: 10px;
            &:not(:first-child) {
              margin-left: 33px;
            }
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
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left {
      flex: 0 0 393px;
      height: 765px;
      .phone-model {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 0 0 706px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .sub-slogan {
        font-size: 42px;
        line-height: 42px;
        text-align: center;
        color: #fff;
      }
      .slogan {
        font-weight: bold;
        font-size: 70px;
        line-height: 70px;
        text-align: center;
        color: #fff;
        margin: 94px 0;
      }
      .weapp {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 46px;
        color: #fff;
        margin: 65px 0 80px;
        .weapp-icon {
          flex: 0 0 92px;
          height: 92px;
          margin-right: 16px;
        }
      }
      .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 94px;
      }
      .iosapp, .androidapp {
        flex: 0 0 325px;
        height: 100px;
      }
      .iosapp-icon, .androidapp-icon {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width:1600px) {
      .left {
        flex: 0 0 306px;
        height: 618px;
        .phone-model {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .sub-slogan {
          font-size: 35px;
          line-height: 35px;
          text-align: center;
          color: #fff;
        }
        .slogan {
          font-weight: bold;
          font-size: 58px;
          line-height: 58px;
          text-align: center;
          color: #fff;
          margin: 78px 0;
        }
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 79px;
        }
        .iosapp, .androidapp {
          flex: 0 0 271px;
          height: 83px;
        }
        .iosapp-icon, .androidapp-icon {
          width: 100%;
          height: 100%;
        }
      }
    }
    @media screen and (max-width:1366px) {
      .left {
        flex: 0 0 260px;
        height: 527px;
        .phone-model {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .sub-slogan {
          font-size: 30px;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }
        .slogan {
          font-weight: bold;
          font-size: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          margin: 66px 0;
        }
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 66px;
        }
        .iosapp, .androidapp {
          flex: 0 0 231px;
          height: 71px;
        }
        .iosapp-icon, .androidapp-icon {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 124px;
    padding-top: 18px;
    background-color: #101010;
    .center {
      width: 1200px;
      margin: 0 auto;
    }
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .footer-top-items {
        display: flex;
        align-items: center;
        img {
          flex: 0 0 142px;
          height: 40px;
          margin-right: 15px;
        }
        span {
          flex: 0 0 75px;
          font-size: 18px;
          line-height: 18px;
          color: #fff;
          margin-left: 56px;
        }
      }
      .footer-copyright {
        font-size: 16px;
        line-height: 16px;
        color: #fff;
      }
    }
    .footer-bottom {
      display: flex;
      .footer-bottom-icon {
        width: 28px;
        height: 28px;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
      }
      .footer-desc {
        font-size: 18px;
        line-height: 18px;
        color: #fff;
        margin-left: 42px;
      }
    }
  }
</style>
