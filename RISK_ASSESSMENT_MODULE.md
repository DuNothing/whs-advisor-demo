# Risk Assessment 模块

## 功能概述

Risk Assessment 模块是WHS Advisor系统的重要组成部分，提供全面的工作场所风险评估和管理功能。

## 主要功能

### 1. 风险评估概览
- **总风险数量**: 显示当前识别的所有风险
- **风险等级分布**: 高、中、低风险的数量统计
- **趋势分析**: 风险变化趋势和百分比变化

### 2. 风险评估列表
- **搜索功能**: 按标题和描述搜索风险评估
- **分类筛选**: 按风险类别筛选（物理、化学、人体工程学、心理社会）
- **状态管理**: 跟踪评估状态（进行中、已完成、逾期等）

### 3. 详细风险评估
每个风险评估包含：
- **基本信息**: 标题、描述、类别、风险等级
- **风险评分**: 基于可能性和严重性的风险矩阵评分
- **控制措施**: 当前实施的控制措施列表
- **必要行动**: 需要采取的行动项目
- **分配信息**: 负责人和最后更新时间

### 4. 风险矩阵
- **5x5风险矩阵**: 基于可能性和严重性的风险评估工具
- **颜色编码**: 
  - 红色：高风险 (15-25分)
  - 黄色：中等风险 (8-14分)
  - 绿色：低风险 (1-7分)

### 5. 风险类别

#### 物理风险 (Physical)
- 机器安全
- 高处作业
- 电气安全
- 噪音和振动

#### 化学风险 (Chemical)
- 化学品存储和处理
- 有害物质暴露
- 通风系统
- 个人防护设备

#### 人体工程学风险 (Ergonomic)
- 手动搬运操作
- 重复性动作
- 工作站设计
- 姿势和运动

#### 心理社会风险 (Psychosocial)
- 工作压力
- 心理健康
- 工作生活平衡
- 工作场所欺凌

## 技术特性

### UI/UX设计
- **响应式设计**: 适配不同屏幕尺寸
- **深色主题**: 现代化的深色界面
- **动画效果**: 粒子动画和过渡效果
- **交互式元素**: 可展开的详细信息面板

### 功能特性
- **实时搜索**: 即时搜索结果
- **分类筛选**: 多维度筛选功能
- **状态管理**: 完整的评估状态跟踪
- **导出功能**: 支持评估报告导出

## 文件结构

```
src/components/demos/whs-advisor/
├── WHSRiskAssessmentScreen.jsx    # 主页面组件
├── index.js                       # 路由配置
└── WHSAdvisorOverview.jsx         # 主菜单（已更新）
```

## 导航集成

Risk Assessment 模块已完全集成到WHS Advisor系统中：

1. **主菜单**: 在概览页面添加了Risk Assessment卡片
2. **导航钩子**: 更新了useWHSNavigation.js添加新路由
3. **路由配置**: 在index.js中添加了页面渲染逻辑

## 使用方法

1. 从主菜单点击"Risk Assessment"卡片
2. 查看风险评估概览和统计信息
3. 使用搜索和筛选功能查找特定评估
4. 点击展开按钮查看详细信息
5. 使用风险矩阵进行风险评估

## 数据模型

### 风险评估对象
```javascript
{
  id: 'ra-001',
  title: 'Manual Handling Operations',
  category: 'ergonomic',
  riskLevel: 'high',
  likelihood: 4,
  severity: 4,
  riskScore: 16,
  status: 'in-progress',
  lastUpdated: '2024-01-15',
  assignedTo: 'Sarah Johnson',
  description: 'Assessment description',
  controls: ['Control measure 1', 'Control measure 2'],
  actions: ['Required action 1', 'Required action 2']
}
```

## 未来扩展

- AI辅助风险评估
- 自动风险评估建议
- 风险评估模板库
- 风险评估报告生成
- 风险评估历史跟踪
- 风险评估协作功能
