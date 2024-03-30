# stash 


> 功能开发到一半，需要切换到其他分支，而不需要commit

```
// 保存
git stash   
```

```
// 恢复
git stash apply
```

```
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop
```
