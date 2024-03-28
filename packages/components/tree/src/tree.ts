import { TreeNode } from './tree'
import { ExtractPropTypes, PropType } from 'vue'
type Key = string | number
export interface TreeOption {
  label?: Key
  key?: Key
  children?: TreeOption[]
  isLeaf: boolean
  [key: string]: unknown
}

export interface TreeNode extends Required<TreeOption> {
  level: number
  children: TreeNode[]
  rowNode: TreeOption
}
export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  }
} as const

export const treeNodeProps = {
  node: {
    type: Array as PropType<TreeNode>,
    required: true
  }
} as const

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
