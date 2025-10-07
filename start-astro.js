const { spawn } = require('child_process');

// 创建一个新的Node.js进程来运行Astro开发服务器
const astroProcess = spawn('node', ['node_modules/astro/dist/cli/index.js', 'dev'], {
  stdio: 'inherit', // 将子进程的输出重定向到当前进程
  shell: true
});

// 监听进程退出事件
astroProcess.on('close', (code) => {
  console.log(`Astro进程退出，退出码: ${code}`);
});