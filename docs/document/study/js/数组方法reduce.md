# 数组方法reduce

## 1.获取一个数组的最大值和最小值

```
let arr = [3.24, 2.78, 999];
arr.reduce((x, y) => Math.max(x, y));
arr.reduce((x, y) => Math.min(x, y));
```

## 2.计算数组中元素出现的频率

```
function countFrequency(arr) {
  return arr.reduce(function(result, ele){
    if (result.get(ele) != undefined) {
      result.set(ele, result.get(ele) + 1)
    } else {
      result.set(ele, 1);
    }
    return result;
  }, new Map());
}
```

**注意，我们使用map对象而不是对象来存储统计后的频率，因为数组中的元素可能是对象类型，而对象的key只能是字符串或符号类型。**

如果要统计字符串中每个字符出现的频率，可以先将字符串转换为字符数组，然后按照上面的方法。

```
let str = 'helloworld';

str.split('').reduce((result, currentChar) => {
    result[currentChar] ? result[currentChar] ++ : result[currentChar] = 1;
    return result;                           
}, {})

```

