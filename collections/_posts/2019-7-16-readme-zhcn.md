---
title: pRoJEct-NeGYa 中文使用说明
author: DeerRIDER
category: Sample
date: 2019-7-16
comment: ture
---

{{page.comment}}

# PRoJEct-VeXEd

黑客帝国掉字母儿风格的个人主页模板。

版本： v2.3

## 特性

1. 狂拽酷炫
2. 代码高亮
3. MathJax公式插入
4. 文章归档及索引
5. 高度可定制化
6. 加密内容

## 使用方法

* 下载[zip文件](https://codeload.github.com/akiritsu/pRoJEct-VeXEd/zip/master)，或者将[pRoJEct-VeXEd](https://github.com/akiritsu/pRoJEct-VeXEd) fork到自己的github仓库里
* 修改_config.yml文件
* （自定义域名）修改CNAME文件
* 修改pages/index.md文件，自定义主页
* 删除collections/_posts/文件夹里的文件，添加自己的文章
* 同步到github远程仓库
* 将加密内容作为加密文本的id
  * 可使用在线工具加密文本：[sjcl官方](http://bitwiseshiftleft.github.io/sjcl/demo/)  [bcqlr.com](http://bcqlr.com/sjcl/)

## 工程结构

* src/：工程源码及文件
  * _includes/：子页面模块
  * _layouts/：页面模板（单纯地组合子页面模块）
  * _sass/：分类的scss样式表文件
  * assets/css/：样式表文件
  * assets/fonts/：字体文件
  * assets/js/：javsscript 脚本文件
  * assets/img/：图片
* collections/：文章集合
  * _post/：主要文章集合
  * .../：自定义文章集合
* pages/：主要页面
  * index.md：网站主页
  * 404.md：404页面
  * collections.md：所有文章索引
* config.yml：网站配置文件
* .gitignore：Git过滤规则文件
* LICENSE：工程开源协议
* README.md：工程自述文件

## 更新日志

2020.11.18： v2.3 增加评论功能

2020.11.16： v2.2 完善基础样式

2020.11.12: v2.1 增加collection功能

2020.7.24: v2.0 修改工程结构，优化scss文件结构

2019.6.15：v1.0 正式版
