<template>
    <div class="bd">
        <div style="height: 400px">
            <el-auto-resizer>
                <template #default="{ height, width }">
                    <el-table-v2
                        :columns="columns"
                        :data="data"
                        :width="width"
                        :height="height"
                        fixed
                    />
                </template>
            </el-auto-resizer>
        </div>
    </div>
</template>

<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
    Array.from({ length }).map((_, columnIndex) => ({
        ...props,
        key: `${prefix}${columnIndex}`,
        dataKey: `${prefix}${columnIndex}`,
        title: `Column ${columnIndex}`,
        width: 150,
    }));

const generateData = (columns: ReturnType<typeof generateColumns>, length = 200, prefix = 'row-') =>
    Array.from({ length }).map((_, rowIndex) => {
        return columns.reduce(
            (rowData, column, columnIndex) => {
                rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
                return rowData;
            },
            {
                id: `${prefix}${rowIndex}`,
                parentId: null,
            }
        );
    });

const columns = generateColumns(10);
const data = generateData(columns, 200);
</script>
<style scoped lang="less">
.bd {
    position: absolute;
    display: inline-block;
    top: 200px;
    left: 10%;
    z-index: 3;
    width: 80%;
    height: 70%;
}
</style>
