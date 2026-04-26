# Contributing to AI Valuation Skill 🧮

欢迎为 **AI 项目身价计算器** 贡献代码！无论你是经验丰富的开发者还是初学者，你的参与都非常有价值。

---

## 📋 目录

- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [开发环境搭建](#-开发环境搭建)
- [贡献流程](#-贡献流程)
- [可以贡献的方向](#-可以贡献的方向)
- [代码规范](#-代码规范)
- [提交信息规范](#-提交信息规范)
- [Issue 标签说明](#-issue-标签说明)
- [行为准则](#-行为准则)

---

## 🚀 快速开始

```bash
# 1. Fork 本仓库
# 在 GitHub 页面点击 "Fork"

# 2. Clone 到你的本地
git clone https://github.com/YOUR_USERNAME/ai-valuation-skill.git
cd ai-valuation-skill

# 3. 安装依赖
npm install

# 4. 创建分支
git checkout -b feature/my-awesome-feature

# 5. 开发 & 测试
npm test

# 6. 提交 & 推送
git commit -m "feat: 添加新的估值维度"
git push origin feature/my-awesome-feature

# 7. 创建 Pull Request
# 在 GitHub 上点击 "Compare & pull request"
```

---

## 📁 项目结构

```
ai-valuation-skill/
├── bin/                    # CLI 可执行文件
│   └── ai-valuation        # 主命令行入口
├── src/                    # 核心源代码
│   ├── scoring.js          # 评分引擎
│   └── cases.ts            # 案例数据库
├── examples/               # 使用示例
├── .github/workflows/      # CI/CD 配置
│   └── ci.yml              # 持续集成流程
├── SKILL.md                # OpenClaw 技能定义
├── README.md               # 项目说明文档
├── valuation-model.md      # 估值模型详细说明
├── bagua-scoring-guide.md  # 八卦评分指南
├── case-studies.md         # 案例研究
├── quick-calculator.md     # 快速计算器说明
├── research-report.md      # 研究报告
├── validation-data.md      # 验证数据
├── test-report.md          # 测试报告
├── package.json            # 项目配置
└── CONTRIBUTING.md         # 贡献指南（就是本文件！）
```

---

## 🛠️ 开发环境搭建

### 最低要求

- **Node.js** >= 18.0
- **npm** >= 9.0

### 安装步骤

```bash
# 检查版本
node --version   # >= 18.0
npm --version    # >= 9.0

# 安装依赖
npm install

# 运行测试
npm test

# 本地调试 CLI
node bin/ai-valuation --help
```

---

## 🔄 贡献流程

### 1. 找到你想做的事

- 浏览 [Issues](https://github.com/xiejianjun000/ai-valuation-skill/issues)，寻找 `good first issue` 标签
- 如果没有合适的，可以创建新 Issue
- 不确定做什么？**先开一个 Discussion 或直接私信作者聊聊**

### 2. 声明你的任务

- 在 Issue 下留言："我来做这个！"
- 避免重复劳动

### 3. 开发 & 测试

- 在 `main` 分支基础上创建新分支
- 编写代码
- 运行 `npm test` 确保通过

### 4. 提交 Pull Request

- 标题格式：`feat: 简短描述` 或 `fix: 简短描述`
- 描述中说明：
  - 你做了什么
  - 为什么这么做
  - 相关的 Issue 编号（如果有）
  - 截图或示例（如果是 UI 改动）

### 5. Code Review

- 作者会尽快回复
- 根据反馈调整代码
- 批准后合并 🎉

---

## 🎯 可以贡献的方向

### 🟢 Good First Issue（初学者友好）

| 任务 | 适合 | 难度 |
|------|------|------|
| 添加新的估值维度（团队背景、市场规模等） | 商业/产品爱好者 | ⭐ |
| 改进八卦评分可视化输出 | 前端/设计爱好者 | ⭐⭐ |
| 添加更多真实案例数据到 cases.ts | 数据分析爱好者 | ⭐ |
| 完善文档翻译（英文/日文） | 语言爱好者 | ⭐ |
| 修复拼写错误或格式问题 | 所有人 | ⭐ |

### 🔵 Enhancement（功能增强）

- 添加更多估值模型（DCF、Comparables 等）
- 支持自定义权重配置
- 添加 API 接口（REST/GraphQL）
- 集成更多数据源

### 🟡 Documentation（文档改进）

- 补充代码注释
- 添加使用教程
- 制作演示视频
- 翻译文档

### 🔴 Bug（问题修复）

- 修复计算逻辑错误
- 修复 CLI 参数解析问题
- 修复 TypeScript 类型错误

---

## 📝 代码规范

### TypeScript / JavaScript

- 使用 **TypeScript** 编写新代码
- 遵循 **ESLint** 规则（如果配置了）
- 变量名用 `camelCase`，类名用 `PascalCase`
- 常量用 `UPPER_SNAKE_CASE`

### 注释

- 每个导出的函数/类都应有 **JSDoc** 注释
- 复杂逻辑添加行内注释说明 "为什么"，而非 "做了什么"

### 测试

- 新功能必须包含测试用例
- 测试放在 `examples/` 或新建 `tests/` 目录

---

## 📋 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>: <description>

[optional body]
```

| Type | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 添加团队背景评分维度` |
| `fix` | Bug 修复 | `fix: 修复八卦评分计算错误` |
| `docs` | 文档更新 | `docs: 补充快速计算器说明` |
| `style` | 代码格式 | `style: 统一缩进为 2 空格` |
| `refactor` | 重构 | `refactor: 提取评分引擎到独立模块` |
| `test` | 测试相关 | `test: 添加 PoC 阶段估值测试用例` |
| `chore` | 构建/工具 | `chore: 更新 package.json 依赖` |

---

## 🏷️ Issue 标签说明

| 标签 | 含义 |
|------|------|
| `good first issue` | 适合初次贡献者 🌟 |
| `bug` | 已知问题，需要修复 |
| `enhancement` | 功能增强/新需求 |
| `documentation` | 文档相关 |
| `help wanted` | 需要社区帮助 |
| `question` | 问题讨论 |

---

## 🤝 行为准则

- 友善、尊重每一位贡献者
- 接受建设性批评
- 关注问题本身，不针对个人
- 有疑问随时在 Issue 或 Discussion 中提问

---

## 💡 需要帮助？

- 📖 阅读 [`SKILL.md`](SKILL.md) 了解项目整体架构
- 📊 阅读 [`valuation-model.md`](valuation-model.md) 了解估值模型
- 🎲 阅读 [`bagua-scoring-guide.md`](bagua-scoring-guide.md) 了解八卦评分
- 💬 在 [Issues](https://github.com/xiejianjun000/ai-valuation-skill/issues) 中提问

---

感谢你的贡献！🙏 每一个 PR 都让这个项目变得更好。
