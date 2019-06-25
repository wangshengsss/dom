<template>
  <div id="app">
     <transition name="el-fade-in-linear" mode="out-in"  >
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import common from '../h5/static/common/common'
import CONSTANT from '../h5/static/constant/urlconstant'

export default {

  data () {
    return {}
  },
  mounted(){
  },
  watch:{

  },
  methods:{


  }

}
</script>

<style lang="less">
div, p, span, input {
  box-sizing: border-box;
}
input {
  outline: none;
}
html, body {
  width: 100% !important;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: 'Microsoft Yahei';
  -moz-user-select:none; /*火狐*/
  -webkit-user-select:none; /*webkit浏览器*/
  -ms-user-select:none; /*IE10*/
  -khtml-user-select:none; /*早期浏览器*/
  user-select: none;
}
ul,li {
  list-style: none;
}
a {
  text-decoration: none;
}
p {
  padding: 0;
  margin: 0;
}
input {
  padding: 0;
  margin: 0;
}
</style>
