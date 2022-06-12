<template>
  <div class="address-page">
    <ve-table
      :columns="columns"
      :table-data="tableData"
      :border-around="false"
      :cell-span-option="cellSpanOption"
    />

    <div class="button-group">
      <ve-table
        :columns="columns2"
        :table-data="tableData2"
        :border-around="false"
      />
    </div>

    <div class="foot-group">
      <span style="font-family: cursive;font-size: large;font-weight: bolder">有事请向我诉说，我与群众心连心</span>
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
      cellSpanOption: {
        bodyCellSpan: this.bodyCellSpan,
      },
      columns: [
        { field: "name", key: "b", title: "", align: "center" },
        { field: "mobile", key: "c", title: "", align: "center" }
      ],
      columns2: [
        { field: "name", key: "d", title: "工作职责", align: "center" },
      ],
      tableData: [],
      tableData2: [
        {
          name: "政策法规宣传  疫情群防群控"
        },
        {
          name: "流动人员管控  矛盾排查化解"
        },
        {
          name: "安全维稳管理  急难险重突击"
        },
        {
          name: "提供便民服务  消除安全隐患"
        },
        {
          name: "爱国主义教育  倡树文明新风"
        },
      ],
    }
  },
  created () {
    this.findAdd()
  },
  mounted() {
    this.findAdd()
  },
  methods: {
    bodyCellSpan({ row, column, rowIndex }) {
      if (rowIndex === 0 || rowIndex === 1) {
        if (column.field === "name") {
          return {
            rowspan: 1,
            colspan: 2,
          };
        }
        else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
    findAdd () {
      fetch("https://backend.wzwg.org.cn/address?showId=" + this.$route.query.addId
      ).then(res => res.json()).then(res => {
        this.tableData = res.data
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
        margin: 20px 0;
    }
    .foot-group {
      margin: 10px 0;
    }
</style>
