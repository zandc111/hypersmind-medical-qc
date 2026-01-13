# HyperSMind Medical QC

HyperSMind Medical QC 是一个基于人工智能的医疗质量控制平台，旨在通过先进的AI技术提升医疗流程的效率和准确性。

## 功能特性

- **AI 辅助医疗质量控制**：利用人工智能技术对医疗数据进行分析和质量控制
- **智能聊天系统**：提供医疗相关的AI聊天功能，辅助医疗专业人员
- **数据仪表盘**：直观展示医疗质量控制数据和分析结果
- **地图集成**：提供地理位置相关的医疗资源管理功能
- **语音转录**：支持医疗语音记录的自动转录
- **图像生成**：基于医疗数据生成相关的可视化图像
- **安全的身份验证**：支持OAuth认证机制
- **响应式设计**：适配各种设备屏幕尺寸

## 技术栈

### 前端
- React 19
- TypeScript
- Tailwind CSS v4
- tRPC
- Vite
- Radix UI
- Framer Motion
- React Query

### 后端
- Node.js 20
- Express
- tRPC
- Drizzle ORM
- MySQL
- AWS S3

### 开发工具
- pnpm
- TypeScript
- Prettier
- Vitest

## 目录结构

```
hypersmind-medical-qc/
├── client/             # 前端代码
│   ├── public/         # 静态资源
│   └── src/            # 源代码
│       ├── _core/      # 核心功能
│       ├── components/ # 组件
│       ├── contexts/   # 上下文
│       ├── hooks/      # 自定义钩子
│       ├── lib/        # 工具库
│       └── pages/      # 页面
├── server/             # 后端代码
│   ├── _core/          # 核心功能
│   └── routers/        # API路由
├── shared/             # 共享代码
├── drizzle/            # 数据库模式和迁移
├── patches/            # 依赖补丁
└── config files        # 配置文件
```

## 快速开始

### 前提条件

- Node.js 20+
- pnpm
- MySQL 数据库

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd hypersmind-medical-qc
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **配置环境变量**
   创建 `.env` 文件并添加以下配置：
   ```env
   # 服务器配置
   PORT=3000
   NODE_ENV=development

   # 数据库配置
   DATABASE_URL=mysql://username:password@localhost:3306/hypersmind_medical_qc

   # AWS S3 配置
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_SECRET_ACCESS_KEY=your-secret-key
   AWS_REGION=your-region
   AWS_BUCKET_NAME=your-bucket-name

   # OAuth 配置
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_SECRET=your-nextauth-secret

   # LLM 配置
   OPENAI_API_KEY=your-openai-api-key
   ```

4. **数据库迁移**
   ```bash
   pnpm db:push
   ```

### 启动项目

#### 开发模式
```bash
pnpm dev
```
服务器将在 http://localhost:3000 启动

#### 生产模式

1. **构建项目**
   ```bash
   pnpm build
   ```

2. **启动服务器**
   ```bash
   pnpm start
   ```

## 项目脚本

| 脚本 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `pnpm check` | 运行 TypeScript 类型检查 |
| `pnpm format` | 使用 Prettier 格式化代码 |
| `pnpm test` | 运行测试 |
| `pnpm db:push` | 生成并执行数据库迁移 |

## 数据库管理

项目使用 Drizzle ORM 进行数据库管理。数据库模式定义在 `drizzle/schema.ts` 文件中。

### 数据库操作

- **生成迁移**：`pnpm db:push`（自动生成并执行）
- **查看数据库状态**：检查 `drizzle/meta` 目录下的快照文件

## 部署

### 生产环境部署

1. 确保所有依赖已安装：`pnpm install`
2. 构建项目：`pnpm build`
3. 配置环境变量（参考安装步骤中的环境变量配置）
4. 启动服务器：`pnpm start`

### 容器化部署

可以使用 Docker 进行容器化部署，示例 Dockerfile：

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

## 技术文档

### tRPC API

项目使用 tRPC 构建类型安全的 API。API 路由定义在 `server/routers.ts` 文件中，前端通过 `client/src/lib/trpc.ts` 进行调用。

### 组件库

项目使用自定义组件库，基于 Radix UI 和 Tailwind CSS 构建。组件位于 `client/src/components/ui` 目录中。

### 状态管理

项目使用 React Query 进行服务器状态管理，使用 React 的 Context API 进行客户端状态管理。

## 贡献指南

1. Fork 项目仓库
2. 创建新的分支：`git checkout -b feature/your-feature-name`
3. 提交更改：`git commit -m "Add your feature"`
4. 推送到分支：`git push origin feature/your-feature-name`
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 LICENSE 文件。

## 联系方式

如有问题或建议，请联系项目维护者：

- 项目地址：https://github.com/yourusername/hypersmind-medical-qc
- 电子邮件：contact@hypersmind.com

---

**HyperSMind Medical QC** - 用AI技术提升医疗质量控制的未来