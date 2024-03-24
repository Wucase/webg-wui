<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNamespace } from "@w-ui/utils/create";
import { computed } from "vue";
import { iconProps } from "./icon";
const bem = createNamespace("icon");
const props = defineProps(iconProps);
defineOptions({ name: "WIcon" });
const style = computed(() => {
  if (!props.color && !props.size) return {};
  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { "font-size": `${props.size}px` } : {}),
  };
});
</script>
