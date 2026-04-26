const { scoreProject } = require('../dist/scoring.js');
const result = scoreProject({ '技术': 85, '文档': 90, '创新': 75, '可实现性': 70, '生态': 60 });
console.log('估值结果:', JSON.stringify(result, null, 2));
