# 个人博客项目

这是一个使用Astro构建的个人博客项目。

## 项目结构

- `src/pages/`: 包含所有页面文件
  - `index.astro`: 首页
  - `my-articles.astro`: 文章列表页
  - `about.astro`: 关于页面
  - `blog/[slug].astro`: 博客文章详情页（动态路由）
- `src/components/`: 包含组件
  - `Layout.astro`: 页面布局组件
- `src/content/blog/`: 包含博客文章（Markdown格式）
    - `post1.md`: 示例文章1
    - `post2.md`: 示例文章2
## 如何运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

由于PowerShell执行策略限制，我们提供了一个Node.js脚本来启动开发服务器：

```bash
node start-astro.js
```

### 3. 构建生产版本

```bash
node node_modules/astro/dist/cli/index.js build
```

## 功能说明

1. **首页**：简单的欢迎页面，包含指向文章列表的链接
2. **文章列表页**：显示所有博客文章，支持点击进入详情页
3. **文章详情页**：显示单篇博客文章的完整内容
4. **响应式设计**：适配不同屏幕尺寸的设备

## 如何添加新文章

1. 在`src/content/blog/`目录下创建新的Markdown文件（如`new-post.md`）
2. 在文件开头添加Frontmatter信息：

```markdown
---
title: 文章标题
description: 文章描述
date: 2024-01-01
tags: [标签1, 标签2]
---
```

3. 在Frontmatter后添加文章内容（Markdown格式）

4. 重新启动开发服务器或运行构建命令

## 检查博客文章

可以运行以下脚本来检查博客文章是否正确存在：

```bash
node check-blog.js
```"# astro_blog" 
"# astro_blog" 
