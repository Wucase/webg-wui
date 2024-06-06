<template>
  <div class="w-header flex justify-between items-center">
    <header-logo />
    <header-nav />
    <header-user />
  </div>
  <div class="w-header-active h-[10px]"></div>
</template>

<script setup lang="ts">
import HeaderLogo from "./headerLogo.vue";
import HeaderNav from "./headerNav.vue";
import HeaderUser from "./headerUser.vue";

</script>

<style scoped lang="scss">
.w-header{
  //@apply text-xs;
  height: 70px;
  padding: 0 10%;
  font-size: 16px;
  background: #242424;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
}
.w-header-active{
  background: red;
}

</style>
