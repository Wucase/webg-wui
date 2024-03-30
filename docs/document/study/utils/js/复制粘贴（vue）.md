# 复制粘贴（vue）

```
const copyToClipboard = (text) =>
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text)
// 测试
copyToClipboard("Hello World!")
```