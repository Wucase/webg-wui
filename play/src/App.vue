<script setup lang="ts">
import { Alarm } from '@vicons/ionicons5'
// import { Key, TreeOption } from '@w-ui/components/tree/src/tree'
// import { ref } from 'vue'

function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(20 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level), // 显示的内容
      key, // 为了唯一性
      children: createData(level - 1, key) // 孩子
    }
  })
}
function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}
const data = createData()
console.log('+++', data)
</script>

<template>
  <div>
    <w-icon color="blue" :size="20"> <Alarm></Alarm></w-icon>

    <w-tree :data="data"></w-tree>
  </div>
</template>

<style scoped></style>
