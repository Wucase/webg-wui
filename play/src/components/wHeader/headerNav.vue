<template>
  <div class="header-nav">
    <ul>
      <li v-for="nav in navList" :key="nav.name" :class="{'is-active': navActive === nav.path}" @click="changeNav(nav)">
        {{ nav.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const navList = ref([
  {name:'发现', path: 'find-music'},
  {name:'我的', path: 'my-music'}
])

const navActive = ref('find-music')


const changeNav = (nav) => {
  navActive.value = nav.path
}


</script>

<style scoped lang="scss">

.header-nav{
  height: 100%;
  list-style: none;
  padding: 0 38px;
  color: #fff;
  ul, ul li {
    height: 100%;
  }
  ul{
    display: flex;
  }
  ul li{
    padding: 0 20px;
    line-height: 70px;
    cursor: pointer;
    position: relative;
    top: 0;
    left: 0;
    &:hover{
      background: #000;
    }
    &.is-active{
      &::after{
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid red;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

  }
}
</style>
