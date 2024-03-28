<template>
  <div :class="bem.b()">
    <div :class="bem.e('content')">
      <span :class="bem.e('expand-icon')">></span>
      <span :class="bem.e('label')">{{ node.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { treeNodeProps } from './tree'
import { createNamespace } from '@w-ui/utils/create'
const bem = createNamespace('node')

defineProps(treeNodeProps)
</script>
