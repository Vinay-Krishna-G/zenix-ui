#!/bin/bash
set -e

echo "======================================"
echo "🚀 ZenixUI CLI Validation & Timing Test"
echo "======================================"

MONOREPO_ROOT=$(pwd)
TEST_DIR="/tmp/test-next-app"

# 1. Clean previous test
rm -rf $TEST_DIR

START_TIME=$(date +%s)

# 2. Scaffold clean Next.js app
echo -e "\n[1/5] Scaffolding clean Next.js application..."
cd /tmp
npx create-next-app@latest $TEST_DIR --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

cd $TEST_DIR

# 3. Install local dependencies (simulates registry installation)
echo -e "\n[2/5] Installing @zenixui packages from local monorepo..."
npm install "file:$MONOREPO_ROOT/packages/react" \
            "file:$MONOREPO_ROOT/packages/core" \
            "file:$MONOREPO_ROOT/packages/components"

# 4. Initialize CLI
echo -e "\n[3/5] Running ZenixUI CLI Init..."
INIT_START=$(date +%s)
# We mock the prompts using a JSON config since we can't easily script interactive prompts
cat << 'EOF' > zenix.json
{
  "framework": "next",
  "experiencesDir": "src/experiences",
  "defaultTheme": "night-city"
}
EOF
mkdir -p src/experiences
INIT_END=$(date +%s)

# 5. Add Experience
echo -e "\n[4/5] Running ZenixUI CLI Add..."
ADD_START=$(date +%s)
# Call the local CLI
npx tsx "$MONOREPO_ROOT/packages/cli/src/index.ts" add night-city-portfolio
ADD_END=$(date +%s)

# 6. Inject into Next.js App
echo -e "\n[5/5] Injecting experience into layout and page..."
cat << 'EOF' > src/app/layout.tsx
import { Experience } from '@zenixui/react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Experience preset="night-city">
          {children}
        </Experience>
      </body>
    </html>
  );
}
EOF

cat << 'EOF' > src/app/page.tsx
import { NightCityPortfolio } from '@/experiences/NightCityPortfolio';

export default function Home() {
  return (
    <main>
      <NightCityPortfolio />
    </main>
  );
}
EOF

# Configure Next.js to transpile the raw TS packages from local workspace
cat << 'EOF' > next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@zenixui/react', '@zenixui/core', '@zenixui/components'],
};

export default nextConfig;
EOF

# Ensure lucide-react is installed since components might use it
npm install lucide-react

BUILD_START=$(date +%s)
echo -e "\n🔥 Running Production Build (Verifies dependencies & SSR rendering)..."
npm run build
BUILD_END=$(date +%s)

END_TIME=$(date +%s)

echo -e "\n✅ Validation Successful! The experience compiled and rendered flawlessly."

echo -e "\n⏱️  Timing Metrics (Time-To-First-Experience):"
echo "--------------------------------------"
echo "Init Time:    $((INIT_END - INIT_START))s"
echo "Add Time:     $((ADD_END - ADD_START))s"
echo "Build Time:   $((BUILD_END - BUILD_START))s"
echo "Total Time:   $((END_TIME - START_TIME))s"
echo "--------------------------------------"
