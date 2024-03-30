# 文件下载（vue）


## 1、下载excel

```
export function downloadFailExcel(params) {
  return request({
    url: '/blackListUpload/downloadFailExcel',
    method: 'post',
    data:params,
    responseType: 'blob', // 设置响应数据类型为 blob
  })
}
```

```
methods:{
   downLoadImportResult() {
        let params = {   // 请求参数 要下载Excel的id
             'id':this.excelId
        };  
 
       downloadFailExcel(params).then(res => { // 调用接口  
            
           console.log(res); // 此处res为bolb类文件对象 Blob(4412) {size: 4412, type: "application/octet-stream"}   
   
           var blob = new Blob([res], {type: 'application/vnd.openxmlformats-  officedocument.spreadsheetml.sheet;charset=utf-8'}); //type这里表示xlsx类型
 
            　　var downloadElement = document.createElement('a');
            　　var href = window.URL.createObjectURL(blob); //创建下载的链接
            　　downloadElement.href = href;
            　　downloadElement.download = 'result.xlsx'; //下载后文件名
            　　document.body.appendChild(downloadElement);
            　　downloadElement.click(); //点击下载
            　　document.body.removeChild(downloadElement); //下载完成移除元素
            　　window.URL.revokeObjectURL(href); //释放掉blob对象 
            }).catch(err => {
                this.$message({
                    message:'下载失败！',
                    type:'error',
                    showClose:true
                })
            })
        }
}
```
