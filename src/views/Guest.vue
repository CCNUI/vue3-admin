<template>
  <el-card class="guest-container">
    <template #header>
      <div class="header">
        <el-button :icon="Plus" type="primary" @click="handleSolve">解禁</el-button>
        <el-button :icon="Delete" type="danger" @click="handleForbid">禁用</el-button>
      </div>
    </template>
    <Table
      action='/users'
      ref="table"
    >
      <template #column>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
            label="用户名"
            prop="nickName"
        >
        </el-table-column>
        <el-table-column
            label="用户名"
            prop="loginName"
        >
        </el-table-column>
        <el-table-column
            label="用户状态"
        >
          <template #default="scope">
            <span :style="scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'">
              {{ scope.row.lockedFlag == 0 ? '正常' : '禁用' }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
            label="是否禁用"
        >
          <template #default="scope">
            <span :style="scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'">
              {{ scope.row.isDeleted == 0 ? '正常' : '禁用' }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
            label="禁用时间戳"
            prop="createTime"
        >
        </el-table-column>
      </template>
    </Table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import Table from '@/components/Table.vue'
import { ElMessage } from 'element-plus'
import { Plus, Delete } from '@element-plus/icons-vue'
import axios from '@/utils/axios'

let table = ref(null)
const handleSolve = () => {
if (!table.value.state.multipleSelection.length) {
  ElMessage.error('请选择项')
  return
}
axios.put(`/users/0`, {
  ids: table.value.state.multipleSelection.map(item => item.userId)
}).then(() => {
  ElMessage.success('解除成功')
  table.value.getList()
})
}
const handleForbid = () => {
if (!table.value.state.multipleSelection.length) {
  ElMessage.error('请选择项')
  return
}
axios.put(`/users/1`, {
  ids: table.value.state.multipleSelection.map(item => item.userId)
}).then(() => {
  ElMessage.success('禁用成功')
  table.value.getList()
})
}
</script>

<style>

</style>