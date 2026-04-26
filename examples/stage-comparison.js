const { scoreProject } = require('../dist/scoring.js');
const stages = ['PoC', 'Alpha', 'Beta', 'GA'];
const base = scoreProject({ '技术': 80, '文档': 85, '创新': 75, '可实现性': 70, '生态': 65 });
console.log('基础分:', base.totalScore.toFixed(1));
stages.forEach(s => {
  const mults = { 'PoC': 1, 'Alpha': 3, 'Beta': 6, 'GA': 10 };
  const m = mults[s];
  console.log(`  ${s}: ¥${(base.totalScore * m).toFixed(0)}万 - ¥${(base.totalScore * m * 5).toFixed(0)}万`);
});
