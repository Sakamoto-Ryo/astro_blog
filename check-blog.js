const fs = require('fs');
const path = require('path');

// 检查博客文章目录
try {
  const blogDir = path.join(__dirname, 'src', 'content', 'blog');
  const files = fs.readdirSync(blogDir);
  
  console.log('博客文章目录中的文件:');
  files.forEach(file => {
    console.log(`- ${file}`);
  });
  
  // 检查前两个文件的内容
  if (files.length > 0) {
    console.log('\n第一个文章文件的前10行内容:');
    const firstFile = path.join(blogDir, files[0]);
    const firstFileContent = fs.readFileSync(firstFile, 'utf8');
    const firstFileLines = firstFileContent.split('\n').slice(0, 10);
    console.log(firstFileLines.join('\n'));
  }
  
} catch (error) {
  console.error('检查博客文章时出错:', error.message);
}

console.log('\n请运行开发服务器查看效果: node start-astro.js');