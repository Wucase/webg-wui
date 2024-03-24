## Icon 图标

z-ui 推荐使⽤ xicons 作为图标库。

```javascript
$ pnpm install @vicons/ionicons5
```

## 使⽤图标

- 如果你想像⽤例⼀样直接使⽤，你需要全局注册组件，才能够直接在项⽬⾥使⽤。
  <script setup lang="ts">
    import { CashOutline } from '@vicons/ionicons5'
  </script>
  <w-icon color="red" size="40">
    <CashOutline/>
  </w-icon>
  <w-icon color="green" size="40">
  <CashOutline/>
  </w-icon>
  <w-icon color="blue" size="40">
  <CashOutline/>
  </w-icon>
  <div>
  <w-icon color="red" size="60">
  <CashOutline/>
  </w-icon>
  <w-icon color="green" size="60">
  <CashOutline/>
  </w-icon>
  <w-icon color="blue" size="60">
  <CashOutline/>
  </w-icon>
  </div>

```vue
<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5'
</script>
<template>
  <w-icon color="red" size="40">
    <CashOutline />
  </w-icon>
</template>
```

## API

### Icon Props

| 名称  | 类型           | 默认值    | 说明     |
| ----- | -------------- | --------- | -------- |
| color | string         | undefined | 图标颜⾊ |
| size  | number \string | undefined | 图⽚⼤⼩ |
