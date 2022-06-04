<template>
    <div class="address-page">
        <div class="button-group">
            <span>省市区县: {{ proCityDistName }}</span>
            <span>网格信息: {{ areaName }}</span>
            <span>网格长: {{ areaManageName }}</span>
            <span>支部书记: {{ branchPeoName }}</span>
            <span>社区民警: {{ socialPoliceName }}</span>
        </div>
    </div>
</template>
<script>
    export default {
      props: {
        addId: {
          required: true
        }
      },
      data () {
        return {
          areaName: '',
          areaManageName: '',
          proCityDistName: '',
          branchPeoName: '',
          socialPoliceName: ''
        }
      },
      created () {
        this.findAdd()
      },
      mounted() {
        this.findAdd()
      },
      updated() {
        this.findAdd()
      },
      methods: {
        findAdd () {
          fetch("https://backend.wzwg.org.cn/address?showId=" + this.$route.query.addId
          ).then(res => res.json()).then(res => {
            this.areaName = res.areaName
            this.areaManageName = res.areaManageName
            this.proCityDistName = res.proCityDistName
            this.branchPeoName = res.branchPeoName
            this.socialPoliceName = res.socialPoliceName
          })
        }
      }
    }
</script>
<style scoped>
    .address-page{
        height: 100%;
        width: 100%;
    }
    .button-group{
        padding: 0px 15px;
        position: relative;
        transform: translateY(-50%);
        top: 50%;
    }
    .button-group span{
        display: block;
        margin-bottom: 15px;
        width: 100%;
        height: 40px;
        border-radius: 6px;
        color: #656b79;
        background-color: #f6f8fa;
        box-shadow: 0 0 1px #b8bbbf;
    }
    .button-group span a{
        line-height: 40px;
        color: #656b79;
        display: block;
    }
</style>
