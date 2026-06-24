import fs from 'fs';
import path from 'path';

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export function detectPackageManager(): PackageManager {
  // 1. Check npm_execpath
  const execPath = process.env.npm_execpath || '';
  if (execPath.includes('pnpm')) return 'pnpm';
  if (execPath.includes('yarn')) return 'yarn';
  if (execPath.includes('bun')) return 'bun';
  
  // 2. Check lockfiles in current directory
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
  if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun';
  if (fs.existsSync(path.join(cwd, 'package-lock.json'))) return 'npm';

  // Default to npm
  return 'npm';
}

export function getInstallCommand(pm: PackageManager): string {
  if (pm === 'npm') return 'npm install';
  return `${pm} add`;
}
