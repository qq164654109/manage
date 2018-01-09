<template>
    <div class="userList">
        <el-table
                :data="userData"
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    width="180">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status === '成功'? 'success': 'danger'" close-transition>
                        {{scope.row.status}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
                <template slot-scope="scope">
                    ${{scope.row.price}}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    props: ['userData']
  }
</script>

<style scoped lang="scss">
    .userList{
        background: #fff;
        border-radius: 4px;
        padding: 0 20px;
        overflow: hidden;
    }
</style>