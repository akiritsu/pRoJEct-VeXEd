# PRoJEct-NeGYa

黑客风格的个人主页模板。

版本： v1.01

## 特性

1. 狂拽酷炫
2. Rouge支持代码高亮
3. MathJax公式
4. 文章索引
5. 高度可定制化
6. 加密内容（也可以把元素id改成密文，元素内容写“无该字段访问权限！”）

## 更新日志

2019.7.17：更新说明文件

2019.6.15：老子就做这一版，凑合能用得了，我可不改了啊！

## 使用方法

* 下载或者fork到自己的github仓库里
* 修改_config.yml文件
* （自定义域名）修改CNAME文件
* 修改pages/index.md文件，自定义主页
* 删除_posts/文件夹里的文件，添加自己的文章
* 同步到github远程仓库

## 工程结构

功能和内容隔离TMD！

网站内容：
* _posts：文章
* pages：页面
* assets/img：图

功能样式：
* _includes：子页面模块
* _layouts：页面模板（单纯地组合子页面模块）
* assets/css：样式表文件
* assets/fonts：字体文件
* assets/js：脚本文件
* _config.yml：配置文件

