// script.js
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.animated-title');

  // 动态颜色切换效果
  setInterval(() => {
    const colors = ['#ff6600', '#ffcc00', '#00ccff'];
    title.style.color = colors[Math.floor(Math.random() * colors.length)];
  }, 1000);

  // 动态更新完成度
  const goals = document.querySelectorAll('.goal');
  goals.forEach(goal => {
    goal.addEventListener('mouseover', () => {
      goal.style.backgroundColor = '#ff3333';
    });
    goal.addEventListener('mouseout', () => {
      goal.style.backgroundColor = '#ffa500';
    });
  });
});
