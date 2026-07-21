# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a **monorepo of independent sub-projects** from an AI Agent course. Each directory is a standalone project with its own `package.json` — there is no root-level package.json or monorepo tooling (no pnpm workspaces, no turborepo).

Projects fall into three categories:

### 1. NestJS Backend Projects
Directories: `knowledge-hub-backend-01`, `knowledge-hub-backend-02`, `agui-backend`, `hello-nest-langchain`, `nest-feature`, `nest-dockerfile-test`, `asr-and-tts-nest-service`, `ai-canvas`, `cron-job-tool`, `typeorm-pg-crud`

```bash
cd <project-dir>
npm install
npm run start:dev      # dev server with watch
npm run build          # build to dist/
npm run test           # run jest tests
npm run test:e2e       # run e2e tests
npm run lint           # eslint --fix
```

Stack: NestJS 11, TypeScript, TypeORM/Mongoose, class-validator/class-transformer. Most use PostgreSQL or MongoDB.

### 2. React + Vite Frontend Projects
Directories: `agui-frontend`, `ai-canvas`

```bash
cd <project-dir>
npm install
npm run dev            # vite dev server
npm run build          # tsc + vite build
npm run lint           # eslint
```

Stack: React 19, Vite 8, TypeScript, TailwindCSS 4 (in agui-frontend).

### 3. LangChain / LangGraph Script Projects
Directories: `langgraph-test`, `langsmith-test`, `deep-research-assistant`, `advanced-rag`, `rag-test`, `deepagents-test`, `multi-modal-agent`, `memory-test`, `mem0-test`, `tool-test`, `output-parser-test`, `prompt-template-test`, `runnable-test`

```bash
cd <project-dir>
npm install
node src/cli.mjs       # or node src/main.js — check package.json scripts
```

Most have no build step — run TypeScript/JavaScript files directly with Node. Entry points vary; check the `scripts` field in each project's `package.json`.

### 4. Database / Storage Test Projects
Directories: `redis-test`, `pgsql-test`, `es-test`, `milvus-test`, `neo4j-graphrag`, `oss-test`, `tts-stt-test`

These are standalone test/demo projects for various storage and service integrations. Run scripts directly as above.

## Environment Variables

All projects use `.env` files (gitignored). Copy from `.env.example` if available, or check `app.module.ts` / source files for required variables. Common variables: `OPENAI_API_KEY`, `OPENAI_BASE_URL`, database connection strings.

## Key Patterns

- **NestJS projects** follow standard module/controller/service structure with `@Module()`, `@Controller()`, `@Injectable()` decorators
- **LangChain projects** typically use `@langchain/openai` chat models, LangGraph for agent orchestration, and `zod` for schema validation
- **Database projects** use TypeORM with PostgreSQL, Mongoose with MongoDB, or native client libraries
- **Frontend projects** use functional components with hooks, React 19 patterns

## Working with a Specific Project

Always `cd` into the project directory first. Each project manages its own `node_modules/`. There is no shared dependency installation.
