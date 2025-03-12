# 🌟 four_digit - 中文数字格式化扩展 🌟

> 🔢 一键将网页中的千分位分隔符（3位一逗）转换为万分位分隔符（4位一逗），让数字阅读更符合中文使用习惯

![GitHub stars](https://img.shields.io/github/stars/comoysha/four_digit?style=social)
![GitHub forks](https://img.shields.io/github/forks/comoysha/four_digit?style=social)
![GitHub license](https://img.shields.io/github/license/comoysha/four_digit)


## ✨ 为什么需要这个扩展？

在浏览英文网站或使用国际化软件时，你是否遇到过这种情况：

```
1,234,567
```

对于习惯了四位分隔的中文用户来说，这种三位分隔的方式读起来很不习惯。我们更习惯看到：

```
123,4567
```

**four_digit** 就是为解决这个问题而生的！它能自动识别并转换网页上的数字格式，让你的浏览体验更加舒适。

## 🚀 主要特点

- 🔄 一键将千分位分隔符（3位一组）转换为万分位分隔符（4位一组）
- ⚡ 即时转换，无需刷新页面
- 🧩 轻量级设计，对浏览性能几乎无影响
- 🌐 适用于任何网页，包括购物网站、财经网站、数据仪表盘等
- 🔒 完全在本地处理，不收集任何数据
- 🎨 支持自定义样式（可选）

## 📦 安装方法


### 手动安装

1. 下载此仓库: `git clone https://github.com/comoysha/four_digit.git`
2. 在 Chrome 浏览器中打开 `chrome://extensions/`
3. 开启"开发者模式"（右上角）
4. 点击"加载已解压的扩展程序"
5. 选择下载的仓库文件夹

## 🎯 使用方法

使用 four_digit 非常简单：

1. 安装扩展后，在浏览器工具栏中会出现 four_digit 图标 🔢
2. 访问任何包含数字的网页
3. 点击扩展图标，选择"转换数字格式"
4. 瞬间，页面上所有的千分位数字将被转换为万分位格式


## 🧠 工作原理

four_digit 通过以下步骤实现数字格式化：

1. 扫描网页 DOM 结构中的文本节点
2. 使用正则表达式识别千分位格式的数字（如 1,234,567）
3. 将识别到的数字转换为无分隔符的纯数字
4. 按照万分位规则（4位一组）重新格式化
5. 将转换后的数字替换回原位置

整个过程在浏览器本地完成，快速且安全。

## 🌈 使用场景

- 📊 查看国际财经网站的财务报表
- 🛒 浏览外贸网站查看商品价格
- 📈 阅读含有大量统计数据的研究报告
- 💰 使用国际版电子表格或财务软件时

## 💡 常见问题

**Q: 扩展会影响网页性能吗？**
A: four_digit 采用高效的DOM处理算法，对网页性能的影响微乎其微。

**Q: 转换会改变数字的实际值吗？**
A: 不会。扩展只改变数字的显示格式，不会更改数字的实际值。

**Q: 是否支持科学计数法等特殊数字格式？**
A: 当前版本专注于常规数字格式的转换，未来版本将考虑支持更多特殊格式。

## 🤝 贡献指南

欢迎任何形式的贡献！如果你有好的想法或发现了bug：

1. Fork 此仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

<p align="center">
  用 ❤️ 打造 | <a href="https://github.com/comoysha">@comoysha</a>
</p>

<p align="center">
  让数字阅读更符合中文习惯！
</p>