<template>
  <div class="container" @click="refreshCode">
    <s-identify :identifyCode="identifyCode"></s-identify>
    <Loading :show-loading="showLoaddingGif"></Loading>
  </div>
</template>

<script>
import SIdentify from "@/components/identify/index";
import Loading from "@/components/loading/index";
export default {
  name: "codetest",
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      showLoaddingGif: true
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
      console.log(this.identifyCode);
    }
  },
  components: {
    SIdentify,
    Loading
  }
};
</script>

<style lang="stylus" scope>
.container {
  height: 100%
}
</style>
