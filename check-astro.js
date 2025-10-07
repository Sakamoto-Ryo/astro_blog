// 这是一个简单的脚本，用于手动检查Astro项目的关键文件是否存在和有效
const fs = require('fs');
const path = require('path');

// 检查关键文件是否存在
const requiredFiles = [
  'src/pages/index.astro',
  'src/pages/my-articles.astro',
  'src/pages/about.astro',
  'src/pages/blog/[slug].astro',
  'src/content/config.ts',
  'src/content/blog/post1.md'
];

console.log('开始检查Astro项目文件...');
let hasError = false;

requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${file} 存在`);
  } else {
    console.log(`✗ ${file} 不存在！`);
    hasError = true;
  }
});

// 检查content/config.ts的语法
const configPath = path.join(__dirname, 'src/content/config.ts');
if (fs.existsSync(configPath)) {
  try {
    const configContent = fs.readFileSync(configPath, 'utf8');
    // 简单的语法检查
    if (configContent.includes('export const collections') && 
        configContent.includes('defineCollection') && 
        configContent.includes('z.object')) {
      console.log('✓ content/config.ts 语法看起来正确');
    } else {
      console.log('✗ content/config.ts 可能存在语法问题');
      hasError = true;
    }
  } catch (error) {
    console.log(`✗ 读取content/config.ts时出错: ${error.message}`);
    hasError = true;
  }
}

// 检查博客文章的frontmatter
const postPath = path.join(__dirname, 'src/content/blog/post-1.md');
if (fs.existsSync(postPath)) {
  try {
    const postContent = fs.readFileSync(postPath, 'utf8');
    // 简单的frontmatter检查
    const frontmatterRegex = /---[\s\S]*?---/;
    const match = frontmatterRegex.exec(postContent);
    if (match && match[0].includes('title') && 
        match[0].includes('pubDate') && 
        match[0].includes('tags')) {
      console.log('✓ blog/post-1.md 的frontmatter看起来正确');
    } else {
      console.log('✗ blog/post-1.md 的frontmatter可能存在问题');
      hasError = true;
    }
  } catch (error) {
    console.log(`✗ 读取blog/post-1.md时出错: ${error.message}`);
    hasError = true;
  }
}

console.log('\n检查完成！');
if (hasError) {
  console.log('发现了一些潜在问题，请查看上面的详细信息。');
} else {
  console.log('没有发现明显的文件问题。由于PowerShell执行策略限制，无法运行Astro命令。\n请在您的本地环境中运行 npm install 和 npm run build 来验证项目是否能正常构建。');
}
