<template>
  <el-card class="index-container">
    <template #header>
      <div class="header">
        <el-button :icon="Plus" type="primary" @click="handleAdd">新增</el-button>
        <el-popconfirm
            cancelButtonText='取消'
            confirmButtonText='确认'
            title="确认删除吗？"
            @confirm="handleDelete"
        >
          <template #reference>
            <el-button :icon="Delete" type="danger">多选删除</el-button>
          </template>
        </el-popconfirm>
      </div>
    </template>
    <el-table
      :load="state.loading"
      ref="multipleTable"
      :data="state.tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
          label="商品标题"
          prop="configName"
      >
      </el-table-column>
      <el-table-column
          label=""
        >
        <template #default="scope">
          <a target="_blank" :href="scope.row.redirectUrl">{{ scope.row.redirectUrl }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="序号"
          prop="configRank"
          width="120"
      >
      </el-table-column>
      <el-table-column
        prop="goodsId"
        label="商品编号"
        width="200"
      >
      </el-table-column>
      <el-table-column
          label="新增时间戳"
          prop="createTime"
          width="200"
      >
      </el-table-column>
      <el-table-column
          label="提交"
          width="100"
      >
        <template #default="scope">
          <a style="cursor: pointer; margin-right: 10px" @click="handleEdit(scope.row.configId)">修改</a>
          <el-popconfirm
              cancelButtonText='取消'
              confirmButtonText='确认'
              title="确认删除吗？"
              @confirm="handleDeleteOne(scope.row.configId)"
          >
            <template #reference>
              <a style="cursor: pointer">删除</a>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="state.total"
      :page-size="state.pageSize"
      :current-page="state.currentPage"
      @current-change="changePage"
    />
  </el-card>
  <DialogAddGood ref='addGood' :reload="getIndexConfig" :type="state.type" :configType="state.configType" />
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import DialogAddGood from '@/components/DialogAddGood.vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utils/axios'
// 首页配置类型参数
const configTypeMap = {
  hot: 3,
  new: 4,
  recommend: 5
}

const router = useRouter()
const route = useRoute()
const multipleTable = ref(null)
const addGood = ref(null)
const state = reactive({
  loading: false,
  tableData: [], // 数据列表
  multipleSelection: [], // 选中项
  total: 0, // 总条数
  currentPage: 1, // 当前页
  pageSize: 10, // 分页大小
  type: 'add', // 操作类型
  configType: 3 // 3-(首页)爆款好物 4-(首页)新品发布 5-(首页)私人推荐
})
// 监听路由变化
router.beforeEach((to) => {
  if (['hot', 'new', 'recommend'].includes(to.name)) {
    state.configType = configTypeMap[to.name]
    state.currentPage = 1
    getIndexConfig()
  }
})
// 初始化
onMounted(() => {
  state.configType = configTypeMap[route.name]
  getIndexConfig()
})
// 首页爆款好物列表
const getIndexConfig = () => {
  state.loading = true
  axios.get('/indexConfigs', {
    params: {
      pageNumber: state.currentPage,
      pageSize: state.pageSize,
      configType: state.configType
    }
  }).then(res => {
    state.tableData = res.list
    state.total = res.totalCount
    state.currentPage = res.currPage
    state.loading = false
  })
}
// 新增商品
const handleAdd = () => {
  state.type = 'add'
  addGood.value.open()
}
// 修改商品
const handleEdit = (id) => {
  state.type = 'edit'
  addGood.value.open(id)
}
// 选择项
const handleSelectionChange = (val) => {
  state.multipleSelection = val
}
// 删除
const handleDelete = () => {
  if (!state.multipleSelection.length) {
    ElMessage.error('请选择项')
    return
  }
  axios.delete('/indexConfigs', {
    ids: state.multipleSelection.map(i => i.configId)
  }).then(() => {
    ElMessage.success('删除成功')
    getIndexConfig()
  })
}
// 单个删除
const handleDeleteOne = (id) => {
  axios.delete('/indexConfigs', {
    ids: [id]
  }).then(() => {
    ElMessage.success('删除成功')
    getIndexConfig()
  })
}
const changePage = (val) => {
  state.currentPage = val
  getIndexConfig()
}
</script>

<style scoped>
  .index-container {
    min-height: 100%;
  }
  .el-card.is-always-shadow {
    min-height: 100%!important;
  }
</style>