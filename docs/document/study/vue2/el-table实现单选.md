# el-table实现单选

```
<div class="default-page">
          <el-table :data="accountList" v-loading="loading" highlight-current-row @current-change="handleCurrent" border height="250px">
        <el-table-column width="60px">
          <template v-slot="scope">
            <!-- label值要与el-table数据id实现绑定 -->
            <el-radio v-model="unitInfo.userId" :label="scope.row.userId" @change="handleRowChange(scope.row)">{{""}}</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" />
        <el-table-column prop="userId" label="账号编号" />
        <el-table-column prop="username" label="账号名称" />
        <el-table-column prop='status' label="账号状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | filters('availableType')">{{ scope.row.status | filters('availableValue')}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
</div>

```

```
export default {
  data() {
    return {
    }
  },
  methods: {
    // 方法一:与el-table @current-change方法 绑定
    handleCurrent (val) {
      if (val) {
        this.unitInfo.userId = val.userId
        this.unitInfo.man = val.username
      }
    },
    // 方法二:与el-radio @change方法 绑定
    handleRowChange (data) {
      if (data) {
        this.unitInfo.userId = data.userId
        this.unitInfo.man = data.username
      }
    }
  }
}

```