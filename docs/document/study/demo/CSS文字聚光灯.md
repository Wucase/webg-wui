# CSS 文字聚光灯

> **demo 展示**

<div class="text-box">
    <span data-text="HELLO WORLD" class="text">HELLO WORLD</span>
  </div>

<script setup></script>

<style lang="scss" scoped>
.text-box {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  .text {
    font-size: 70px;
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    height: 150px;
    line-height: 150px;
    font-weight: 700;
    &::after {
      content: 'HELLO WORLD';
      color: transparent;
      font-size: 70px;
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      height: 150px;
      font-weight: 700;
      line-height: 150px;
      animation: move 6s linear infinite;
      background: linear-gradient(to right, #ff0000,#ffffff,  #0000ff);
      clip-path: circle(60px at 100% 50%);
      background-clip: text;
    }

    @keyframes move {
      0% {
        clip-path: circle(60px at 0% 50%);
      }
      50% {
        clip-path: circle(60px at 100% 50%);
      }
      100% {
        clip-path: circle(60px at 0% 50%);
      }
    }
  }
}
</style>

> **demo 代码**

```
<div class="text-box">
    <span data-text="HELLO WORLD" class="text">HELLO WORLD</span>
  </div>

<script setup></script>

<style lang="scss" scoped>
.text-box {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  .text {
    font-size: 70px;
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    height: 150px;
    line-height: 150px;
    font-weight: 700;
    &::after {
      content: 'HELLO WORLD';
      color: transparent;
      font-size: 70px;
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      height: 150px;
      font-weight: 700;
      line-height: 150px;
      animation: move 6s linear infinite;
      background: linear-gradient(to bottom, #ff0000, #00ff00);
      clip-path: circle(60px at 100% 50%);
      background-clip: text;
    }

    @keyframes move {
      0% {
        clip-path: circle(60px at 0% 50%);
      }
      50% {
        clip-path: circle(60px at 100% 50%);
      }
      100% {
        clip-path: circle(60px at 0% 50%);
      }
    }
  }
}
</style>

```
