// 导入必要的库
import { defineCollection, z } from 'astro:content';

// 定义博客文章集合
export const collections = {
  blog: defineCollection({
    // 定义文章的Frontmatter结构
    schema: z.object({
      title: z.string(), // 文章标题
      description: z.string(), // 文章描述
      date: z.string(), // 发布日期
      tags: z.array(z.string()) // 标签数组
    })
  }),
  
  // 定义项目集合
  projects: defineCollection({
    // 定义项目的Frontmatter结构
    schema: z.object({
      title: z.string(), // 项目标题
      description: z.string(), // 项目描述
      date: z.string(), // 创建日期
      tags: z.array(z.string()) // 标签数组
    })
  })
};