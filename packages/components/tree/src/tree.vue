<template>
  <div :class="bem.b()">
    <w-tree-node
      v-for="node in flattenTree"
      :key="node.key"
      :node="node"
    ></w-tree-node>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import WTreeNode from './treeNode.vue'
import { createNamespace } from '@w-ui/utils/create'
import { treeProps, TreeNode, TreeOption } from './tree'

const bem = createNamespace('tree')
defineOptions({
  name: 'w-tree'
})

const props = defineProps(treeProps)

const tree = ref<TreeNode[]>([])

const createOptions = (key: string, label: string, children: string) => {
  return {
    getLabel(node: TreeOption) {
      return node[label] as string
    },
    getKey(node: TreeOption) {
      return node[key] as string
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeNode[]
    }
  }
}

const treeOptions = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
)
const createTree = (data: TreeOption[]) => {
  const traversal = (data: TreeOption[], parent: TreeNode | null = null) => {
    return data.map(node => {
      const children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [],
        rowNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 9
      }

      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }
  const result: TreeNode[] = traversal(data)
  return result
}

watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
    console.log('333333333', tree.value)
  },
  { immediate: true }
)

const expandedKeySet = ref(new Set(props.defaultExpandedKeys))

const flattenTree = computed(() => {
  const expandedKeys = expandedKeySet.value

  const flattenNode: TreeNode[] = []

  const nodes = tree.value || []

  const stacks: TreeNode[] = []

  for (let i = nodes.length - 1; i >= 0; i--) {
    stacks.push(nodes[i])
  }

  while (stacks.length) {
    const node = stacks.pop()
    if (!node) continue

    flattenNode.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stacks.push(node.children[i])
        }
      }
    }
  }

  return flattenNode
})

console.log('0000000000', flattenTree.value)

console.log('wwwwwwwww', props.data)
</script>
