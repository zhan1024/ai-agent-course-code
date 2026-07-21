# Repository Guidelines

## Project Structure & Module Organization

This repository contains independent AI-agent course examples, not one workspace package. Each top-level directory has its own `package.json` and dependencies. NestJS services such as `agui-backend/` and `knowledge-hub-backend-02/` keep code in `src/` and end-to-end tests in `test/`. Smaller LangChain/LangGraph experiments use executable `.mjs` files under `src/`. Frontend code lives in `agui-frontend/src/`; assets and fixtures are project-local in `public/` or `data/`. Docker-backed examples include their own Compose files.

## Build, Test, and Development Commands

Run commands from the project being changed; there are no root-level build scripts.

- `cd agui-backend && npm install && npm run start:dev` installs dependencies and starts NestJS in watch mode.
- `npm run build` compiles a NestJS service, or runs TypeScript plus Vite in `agui-frontend/`.
- `npm run lint` checks the current project; NestJS scripts also apply fixes.
- `npm run format` formats NestJS `src/` and `test/` TypeScript files.
- `npm test`, `npm run test:e2e`, and `npm run test:cov` run Jest suites where configured.
- For script-only examples, run an entry directly, such as `node src/basic-graph.mjs`. Check `package.json`: several `test` scripts are placeholders.

## Coding Style & Naming Conventions

Use two-space indentation and follow nearby semicolon and module style. TypeScript projects use ESLint; NestJS services also use Prettier. Name classes and React components in `PascalCase`, variables and functions in `camelCase`, and files in kebab-case with Nest suffixes such as `document.service.ts`, `create-document.dto.ts`, and `app.e2e-spec.ts`. Keep reusable helpers inside the relevant feature directory.

## Testing Guidelines

NestJS unit tests use Jest and `*.spec.ts`; end-to-end tests use `test/*.e2e-spec.ts` with `test/jest-e2e.json`. Add tests beside changed behavior and run the affected project's unit and e2e commands. No repository-wide coverage threshold exists; cover success, validation, and failure paths. For `.mjs` demos without Jest, document the manual command and expected result.

## Commit & Pull Request Guidelines

History favors short, project-scoped summaries. Use a clear form such as `knowledge-hub-backend-02: add PDF parser validation`, and keep commits limited to one subproject when practical. Pull requests should identify changed directories, explain behavior or configuration changes, list verification commands, and link issues. Include screenshots for UI changes and sample requests/responses for APIs.

## Security & Configuration

Copy project-local `.env.example` files to `.env`; never commit credentials, API keys, generated `dist/`, `node_modules/`, or Docker volume data. Nested `AGENTS.md` files provide additional instructions for their subtree and take precedence there.
