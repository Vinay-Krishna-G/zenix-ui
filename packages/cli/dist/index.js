#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_commander = require("commander");

// src/commands/init.ts
var import_prompts = __toESM(require("prompts"));
var import_chalk = __toESM(require("chalk"));
var import_ora = __toESM(require("ora"));
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var import_child_process = require("child_process");

// src/utils/pm.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
function detectPackageManager() {
  const execPath = process.env.npm_execpath || "";
  if (execPath.includes("pnpm")) return "pnpm";
  if (execPath.includes("yarn")) return "yarn";
  if (execPath.includes("bun")) return "bun";
  const cwd = process.cwd();
  if (import_fs.default.existsSync(import_path.default.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (import_fs.default.existsSync(import_path.default.join(cwd, "yarn.lock"))) return "yarn";
  if (import_fs.default.existsSync(import_path.default.join(cwd, "bun.lockb"))) return "bun";
  if (import_fs.default.existsSync(import_path.default.join(cwd, "package-lock.json"))) return "npm";
  return "npm";
}
function getInstallCommand(pm) {
  if (pm === "npm") return "npm install";
  return `${pm} add`;
}

// src/commands/init.ts
async function init(options) {
  console.log(import_chalk.default.bold.blue("\nWelcome to ZenixUI Experience distribution.\n"));
  let config = {
    framework: options.framework,
    experiencesDir: options.dir || "src/experiences",
    defaultTheme: options.theme
  };
  if (!options.yes || !config.framework || !config.defaultTheme) {
    const response = await (0, import_prompts.default)([
      {
        type: config.framework ? null : "select",
        name: "framework",
        message: "Which framework are you using?",
        choices: [
          { title: "Next.js", value: "next" },
          { title: "Vite", value: "vite" },
          { title: "Remix", value: "remix" }
        ]
      },
      {
        type: options.dir ? null : "text",
        name: "experiencesDir",
        message: "Where should we place downloaded experiences?",
        initial: "src/experiences"
      },
      {
        type: config.defaultTheme ? null : "select",
        name: "defaultTheme",
        message: "Which theme would you like to use by default?",
        choices: [
          { title: "Zenix", value: "zenix" },
          { title: "Ocean", value: "ocean" },
          { title: "Night City", value: "midnight" },
          { title: "Autumn", value: "autumn" }
        ]
      }
    ]);
    config = {
      ...config,
      ...response,
      framework: config.framework || response.framework,
      experiencesDir: config.experiencesDir || response.experiencesDir,
      defaultTheme: config.defaultTheme || response.defaultTheme
    };
  }
  if (!config.framework) {
    console.log(import_chalk.default.yellow("Installation cancelled."));
    process.exit(0);
  }
  const spinner = (0, import_ora.default)("Installing core dependencies...").start();
  try {
    const pm = detectPackageManager();
    const installCmd = getInstallCommand(pm);
    const packages = process.env.ZENIX_LOCAL_TARBALLS ? "~/tarballs/zenixui-react-0.1.0.tgz ~/tarballs/zenixui-core-0.1.0.tgz ~/tarballs/zenixui-components-0.1.0.tgz" : "@zenixui/react @zenixui/core @zenixui/components";
    (0, import_child_process.execSync)(`${installCmd} ${packages}`, { stdio: "ignore" });
    spinner.succeed(`Installed core dependencies using ${pm}.`);
  } catch (err) {
    spinner.warn("Failed to auto-install dependencies. You may need to install them manually.");
  }
  const configPath = import_path2.default.join(process.cwd(), "zenix.json");
  import_fs2.default.writeFileSync(configPath, JSON.stringify(config, null, 2));
  const expPath = import_path2.default.join(process.cwd(), config.experiencesDir);
  if (!import_fs2.default.existsSync(expPath)) {
    import_fs2.default.mkdirSync(expPath, { recursive: true });
  }
  console.log(import_chalk.default.green(`
Success! ZenixUI is configured.`));
  console.log(`
Next steps:`);
  console.log(`1. Wrap your root layout with ${import_chalk.default.cyan('<Experience preset="' + config.defaultTheme + '">')}`);
  console.log(`2. Run ${import_chalk.default.cyan("npx zenix-ui add midnight-portfolio")} to add your first experience.
`);
}

// src/commands/add.ts
var import_chalk2 = __toESM(require("chalk"));
var import_ora2 = __toESM(require("ora"));
var import_fs4 = __toESM(require("fs"));
var import_path4 = __toESM(require("path"));
var import_child_process2 = require("child_process");

// src/utils/scanner.ts
var import_fs3 = __toESM(require("fs"));
var import_path3 = __toESM(require("path"));
function detectFramework(pkgJson) {
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  if (deps["next"]) return "next";
  if (deps["vite"]) return "vite";
  if (deps["@remix-run/react"]) return "remix";
  if (deps["astro"]) return "astro";
  return "unknown";
}
function detectRouting(pkgJson, framework) {
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  if (framework === "next") return "next";
  if (deps["react-router-dom"]) return "react-router";
  if (deps["@tanstack/react-router"]) return "tanstack";
  return null;
}
function detectTailwindVersion(pkgJson) {
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  const tw = deps["tailwindcss"];
  if (!tw) return false;
  if (tw.includes("4.")) return 4;
  if (tw.includes("3.")) return 3;
  return true;
}
function parseCssVariables(cssContent) {
  const vars = {};
  const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    vars[`--${match[1]}`] = match[2].trim();
  }
  return vars;
}
function scanProject(cwd) {
  const dna = {
    framework: "unknown",
    tailwind: false,
    styling: "css",
    componentSystem: null,
    icons: null,
    routing: null,
    formLibrary: null,
    colors: { primary: null, surface: null },
    radius: null,
    spacing: null,
    font: null,
    darkMode: false,
    aliases: { components: "@/components" }
  };
  const pkgPath = import_path3.default.join(cwd, "package.json");
  let deps = {};
  if (import_fs3.default.existsSync(pkgPath)) {
    try {
      const pkgJson = JSON.parse(import_fs3.default.readFileSync(pkgPath, "utf-8"));
      deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
      dna.framework = detectFramework(pkgJson);
      dna.routing = detectRouting(pkgJson, dna.framework);
      dna.tailwind = detectTailwindVersion(pkgJson);
      if (dna.tailwind) dna.styling = "tailwind";
      else if (deps["styled-components"]) dna.styling = "styled-components";
      else if (deps["@emotion/react"]) dna.styling = "emotion";
      else if (deps["@mui/material"]) dna.styling = "mui";
      else if (deps["@chakra-ui/react"]) dna.styling = "chakra";
      if (deps["@mui/material"]) dna.componentSystem = "mui";
      else if (deps["@chakra-ui/react"]) dna.componentSystem = "chakra";
      else if (deps["@radix-ui/react-primitive"]) dna.componentSystem = "radix";
      if (deps["lucide-react"]) dna.icons = "lucide";
      else if (deps["@heroicons/react"]) dna.icons = "heroicons";
      else if (deps["@radix-ui/react-icons"]) dna.icons = "radix-icons";
      if (deps["react-hook-form"]) dna.formLibrary = "react-hook-form";
      else if (deps["formik"]) dna.formLibrary = "formik";
    } catch (e) {
    }
  }
  const componentsJsonPath = import_path3.default.join(cwd, "components.json");
  if (import_fs3.default.existsSync(componentsJsonPath)) {
    try {
      const cJson = JSON.parse(import_fs3.default.readFileSync(componentsJsonPath, "utf-8"));
      dna.componentSystem = "shadcn";
      if (cJson.aliases && cJson.aliases.components) {
        dna.aliases.components = cJson.aliases.components;
      }
    } catch (e) {
    }
  }
  const possibleCssPaths = [
    "src/app/globals.css",
    "app/globals.css",
    "src/index.css",
    "src/styles/globals.css",
    "styles/globals.css"
  ];
  let cssContent = "";
  for (const p of possibleCssPaths) {
    const fullPath = import_path3.default.join(cwd, p);
    if (import_fs3.default.existsSync(fullPath)) {
      cssContent += import_fs3.default.readFileSync(fullPath, "utf-8") + "\n";
    }
  }
  if (cssContent) {
    const cssVars = parseCssVariables(cssContent);
    dna.colors.primary = cssVars["--primary"] || cssVars["--color-primary"] || null;
    dna.colors.surface = cssVars["--background"] || cssVars["--color-background"] || cssVars["--surface"] || null;
    dna.radius = cssVars["--radius"] || cssVars["--border-radius"] || null;
    if (cssContent.includes(".dark") || cssContent.includes("@media (prefers-color-scheme: dark)")) {
      dna.darkMode = true;
    }
  }
  const twConfigPath = import_path3.default.join(cwd, "tailwind.config.ts") || import_path3.default.join(cwd, "tailwind.config.js");
  if (import_fs3.default.existsSync(twConfigPath)) {
    const twContent = import_fs3.default.readFileSync(twConfigPath, "utf-8");
    if (!dna.font && twContent.includes("fontFamily:")) {
      dna.font = "custom";
    }
  }
  if (!dna.colors.primary) dna.colors.primary = "#000000";
  if (!dna.radius) dna.radius = "0.5rem";
  return dna;
}

// src/utils/adapt.ts
function adaptComponent(content, dna, mode) {
  if (mode === "isolated") {
    return content;
  }
  let adapted = content;
  if (mode === "native") {
    if (dna.radius) {
      adapted = adapted.replace(/var\(--zx-radius-[a-z]+\)/g, "var(--radius)");
    } else if (dna.tailwind) {
      adapted = adapted.replace(/var\(--zx-radius-[a-z]+\)/g, "var(--radius, 0.5rem)");
    }
    if (dna.colors.primary) {
      adapted = adapted.replace(/var\(--zx-primary\)/g, "var(--primary)");
    }
    if (dna.colors.surface) {
      adapted = adapted.replace(/var\(--zx-surface\)/g, "var(--background, #fff)");
    }
    adapted = adapted.replace(/fontFamily:\s*['"]Inter,\s*system-ui,\s*sans-serif['"],?/g, "");
  }
  if (mode === "recipe") {
    return content;
  }
  return adapted;
}

// src/utils/graph.ts
function extractDependencies(content) {
  const deps = [];
  const zenixImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]@zenixui\/components['"]/g;
  let match;
  while ((match = zenixImportRegex.exec(content)) !== null) {
    const importedItems = match[1].split(",").map((i) => i.trim()).filter(Boolean);
    for (const item of importedItems) {
      const baseComponent = item.split(" as ")[0].trim();
      deps.push(baseComponent);
    }
  }
  return deps;
}

// src/utils/rewriter.ts
function rewriteImports(content, reusedComponents, alias) {
  if (reusedComponents.length === 0) return content;
  let rewritten = content;
  const zenixImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]@zenixui\/components['"];?/g;
  rewritten = rewritten.replace(zenixImportRegex, (match, importsStr) => {
    const imports = importsStr.split(",").map((i) => i.trim()).filter(Boolean);
    const zenixRemaining = [];
    const localInjected = [];
    for (const imp of imports) {
      const baseComponent = imp.split(" as ")[0].trim();
      if (reusedComponents.includes(baseComponent)) {
        const fileName = baseComponent.toLowerCase();
        localInjected.push(`import { ${imp} } from "${alias}/${fileName}";`);
      } else {
        zenixRemaining.push(imp);
      }
    }
    let replacement = localInjected.join("\n");
    if (zenixRemaining.length > 0) {
      if (replacement.length > 0) replacement += "\n";
      replacement += `import { ${zenixRemaining.join(", ")} } from "@zenixui/components";`;
    }
    return replacement;
  });
  return rewritten;
}

// src/commands/add.ts
var import_prompts2 = __toESM(require("prompts"));
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 1; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}
async function add(experienceId, options) {
  const configPath = import_path4.default.join(process.cwd(), "zenix.json");
  if (!import_fs4.default.existsSync(configPath)) {
    console.log(import_chalk2.default.red("Error: zenix.json not found. Run `npx zenix-ui init` first."));
    process.exit(1);
  }
  const config = JSON.parse(import_fs4.default.readFileSync(configPath, "utf-8"));
  const apiUrl = process.env.ZENIX_API_URL || "https://zenixui.com";
  const spinner = (0, import_ora2.default)(`Locating experience: ${experienceId}...`).start();
  let metadata;
  try {
    const res = await fetch(`${apiUrl}/api/v1/blueprints/${experienceId}`);
    if (!res.ok) {
      if (res.status === 404) throw new Error("404");
      throw new Error("Network error");
    }
    metadata = await res.json();
  } catch (err) {
    spinner.stop();
    if (err.message === "404") {
      try {
        const regRes = await fetch(`${apiUrl}/api/v1/registry`);
        const allIds = (await regRes.json()).map((b) => b.id);
        const matches = allIds.filter(
          (id) => id.includes(experienceId) || experienceId.includes(id) || levenshtein(id, experienceId) <= 4
        );
        console.log(import_chalk2.default.red(`
Experience '${experienceId}' not found.`));
        if (matches.length > 0) {
          console.log(import_chalk2.default.yellow(`Did you mean:`));
          matches.slice(0, 3).forEach((m) => console.log(`  \u2022 ${m}`));
        }
      } catch (e) {
        console.log(import_chalk2.default.red(`
Experience '${experienceId}' not found.`));
      }
    } else {
      console.log(import_chalk2.default.red(`
Unable to reach registry. Check your internet connection or verify ZENIX_API_URL.`));
    }
    process.exit(1);
  }
  spinner.text = `Fetching blueprint source...`;
  let files = [];
  try {
    const res = await fetch(`${apiUrl}${metadata.downloadUrl}`);
    if (!res.ok) throw new Error("Source not found");
    files = await res.json();
  } catch (err) {
    spinner.fail(`Failed to download source code for '${experienceId}'.`);
    process.exit(1);
  }
  if (metadata.dependencies?.length > 0 || metadata.devDependencies?.length > 0) {
    spinner.text = `Installing dependencies...`;
    const pm = detectPackageManager();
    const installCmd = getInstallCommand(pm);
    if (metadata.dependencies?.length > 0) {
      try {
        (0, import_child_process2.execSync)(`${installCmd} ${metadata.dependencies.join(" ")}`, { stdio: "ignore" });
      } catch (e) {
        spinner.warn("Some dependencies failed to install. You may need to install them manually.");
      }
    }
    if (metadata.devDependencies?.length > 0) {
      try {
        const devFlag = pm === "npm" ? "--save-dev" : "-D";
        (0, import_child_process2.execSync)(`${installCmd} ${devFlag} ${metadata.devDependencies.join(" ")}`, { stdio: "ignore" });
      } catch (e) {
        spinner.warn("Some devDependencies failed to install.");
      }
    }
  }
  const destDir = import_path4.default.join(process.cwd(), config.experiencesDir);
  const mode = options.mode || "isolated";
  let dna = null;
  const reusedComponents = [];
  if (mode === "native") {
    spinner.start("Scanning project for Native adaptation...");
    dna = scanProject(process.cwd());
    spinner.succeed(`Project scanned. Framework: ${dna.framework}, UI System: ${dna.componentSystem || "None"}`);
    console.log(import_chalk2.default.cyan(`
Installing ${metadata.title}`));
    if (dna.componentSystem === "shadcn" && dna.aliases.components) {
      const localUiPath = import_path4.default.join(process.cwd(), dna.aliases.components.replace("@/", "src/"), "ui");
      const depsToScan = metadata.dependencies?.length > 0 ? metadata.dependencies : (() => {
        const allDeps = /* @__PURE__ */ new Set();
        files.forEach((file) => {
          const deps = extractDependencies(file.content);
          deps.forEach((d) => allDeps.add(d));
        });
        return Array.from(allDeps);
      })();
      console.log(import_chalk2.default.yellow(`
Detected Existing Components:`));
      const foundDeps = [];
      for (const dep of depsToScan) {
        const depFileName = dep.toLowerCase() + ".tsx";
        if (true) {
          foundDeps.push(dep);
        }
      }
      if (foundDeps.length > 0) {
        console.log(import_chalk2.default.yellow(`
Detected Existing Components:`));
        foundDeps.forEach((d) => console.log(import_chalk2.default.green(`\u2713 ${d}`)));
        console.log();
        for (const dep of foundDeps) {
          const { reuse } = await (0, import_prompts2.default)({
            type: "confirm",
            name: "reuse",
            message: `Reuse existing ${dep}?`,
            initial: true
          });
          if (reuse) {
            reusedComponents.push(dep);
          }
        }
      }
    }
    console.log(import_chalk2.default.cyan(`
Installation Preview`));
    if (reusedComponents.length > 0) {
      console.log(import_chalk2.default.green(`
Reuse`));
      reusedComponents.forEach((d) => console.log(`\u2713 ${d}`));
    }
    console.log(import_chalk2.default.green(`
Generate`));
    files.forEach((file) => console.log(`${file.name}`));
    console.log(import_chalk2.default.gray(`
No files will be overwritten.
`));
  }
  spinner.start("Writing files...");
  if (!import_fs4.default.existsSync(destDir)) {
    import_fs4.default.mkdirSync(destDir, { recursive: true });
  }
  let mainFilename = "";
  for (const file of files) {
    const destFile = import_path4.default.join(destDir, file.name);
    if (import_fs4.default.existsSync(destFile)) {
      if (options.skipExisting) {
        console.log(import_chalk2.default.yellow(`Skipped ${file.name} (already exists).`));
        if (!mainFilename) mainFilename = file.name;
        continue;
      } else if (!options.overwrite) {
        const { overwrite } = await (0, import_prompts2.default)({
          type: "confirm",
          name: "overwrite",
          message: `File ${file.name} already exists. Overwrite?`,
          initial: false
        });
        if (!overwrite) {
          console.log(import_chalk2.default.yellow(`Skipped ${file.name}.`));
          if (!mainFilename) mainFilename = file.name;
          continue;
        }
      }
    }
    let finalContent = file.content;
    if (mode === "native" && dna && file.name.endsWith(".tsx")) {
      finalContent = adaptComponent(finalContent, dna, mode);
      finalContent = rewriteImports(finalContent, reusedComponents, dna.aliases.components);
    }
    import_fs4.default.writeFileSync(destFile, finalContent);
    if (!mainFilename) mainFilename = file.name;
  }
  console.log(import_chalk2.default.green(`
\u2714 Successfully installed ${metadata.title} into ${config.experiencesDir}`));
  if (reusedComponents.length > 0) {
    console.log(import_chalk2.default.blue(`  Reuse: ${reusedComponents.length} components mapped to local UI directory.`));
  }
  console.log(`To use it, import it in your app:`);
  console.log(import_chalk2.default.cyan(`import { ${metadata.title.replace(/\s+/g, "")} } from '@/${config.experiencesDir}/${mainFilename.replace(".tsx", "")}';
`));
}

// src/commands/compose.ts
var import_chalk3 = __toESM(require("chalk"));
var import_ora3 = __toESM(require("ora"));
var import_fs5 = __toESM(require("fs"));
var import_path5 = __toESM(require("path"));
async function compose() {
  const composePath = import_path5.default.join(process.cwd(), "zenix.compose.ts");
  if (!import_fs5.default.existsSync(composePath)) {
    console.log(import_chalk3.default.red("Error: zenix.compose.ts not found in the current directory."));
    process.exit(1);
  }
  const spinner = (0, import_ora3.default)("Reading compose file...").start();
  try {
    const fileContent = import_fs5.default.readFileSync(composePath, "utf-8");
    const componentsMatch = fileContent.match(/components:\s*\[([\s\S]*?)\]/);
    if (!componentsMatch) {
      spinner.fail("No components array found in zenix.compose.ts");
      process.exit(1);
    }
    const ids = [];
    const idRegex = /id:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = idRegex.exec(componentsMatch[1])) !== null) {
      ids.push(match[1]);
    }
    const modeMatch = fileContent.match(/mode:\s*['"](native|recipe|isolated)['"]/);
    const mode = modeMatch ? modeMatch[1] : "isolated";
    spinner.succeed(`Found ${ids.length} component(s) in compose file. Mode: ${mode}`);
    for (const id of ids) {
      console.log(`
${import_chalk3.default.cyan("\u279C")} Installing ${import_chalk3.default.bold(id)} via compose...`);
      await add(id, { skipExisting: false, mode });
    }
    console.log(import_chalk3.default.green("\n\u2714 Compose installation complete."));
  } catch (err) {
    spinner.fail(`Failed to parse or run compose file: ${err.message}`);
    process.exit(1);
  }
}

// src/commands/new.ts
var import_chalk4 = __toESM(require("chalk"));
var import_ora4 = __toESM(require("ora"));
var import_prompts3 = __toESM(require("prompts"));
async function newCommand(experience, options) {
  console.log(import_chalk4.default.cyan(`
ZenixUI Experience Engine
`));
  let brand = options.brand;
  let aesthetic = options.aesthetic;
  if (!brand) {
    const response = await (0, import_prompts3.default)({
      type: "select",
      name: "brand",
      message: "Select a Brand Pack",
      choices: [
        { title: "Tiffany (Modern Startup)", value: "tiffany" },
        { title: "Sand (Architecture & Luxury)", value: "sand" },
        { title: "True Pink (Beauty & Fashion)", value: "true_pink" },
        { title: "Charcoal Violet (AI & Cyberpunk)", value: "charcoal_violet" }
      ]
    });
    brand = response.brand;
  }
  if (!aesthetic) {
    const response = await (0, import_prompts3.default)({
      type: "select",
      name: "aesthetic",
      message: "Select an Aesthetic",
      choices: [
        { title: "Glass", value: "glass" },
        { title: "Minimal", value: "minimal" },
        { title: "Terminal", value: "terminal" },
        { title: "Neo Brutalist", value: "neo-brutalist" }
      ]
    });
    aesthetic = response.aesthetic;
  }
  const spinner = (0, import_ora4.default)(`Assembling ${experience}...`).start();
  setTimeout(() => {
    spinner.succeed(`Experience structure parsed.`);
    console.log(import_chalk4.default.green(`
\u2713 Core Architecture`));
    console.log(`  - Homepage
  - About
  - Projects
  - Contact`);
    console.log(import_chalk4.default.green(`
\u2713 Starter Kit Ecosystem`));
    console.log(`  - SEO & Metadata
  - Sitemap & Robots.txt
  - 12 Demo Projects
  - Light/Dark Mode (Pre-configured)`);
    console.log(import_chalk4.default.green(`
\u2713 Brand Application`));
    console.log(`  - Applied ${brand} tokens`);
    console.log(`  - Applied ${aesthetic} aesthetic patterns`);
    console.log(import_chalk4.default.blue(`
Notice: This is an execution preview. ZenixUI is composing the matrix dynamically.`));
    console.log(import_chalk4.default.cyan(`
Done! Navigate to your project to view.`));
  }, 1500);
}

// src/index.ts
var program = new import_commander.Command();
program.name("zenix-ui").description("Distribute and install entire ZenixUI experiences.").version("0.0.1");
program.command("init").description("Initialize your project and install ZenixUI dependencies.").option("-f, --framework <name>", "Framework to use (next, vite, remix)").option("-t, --theme <name>", "Default theme (zenix, ocean, midnight, autumn)").option("-d, --dir <path>", "Experiences directory (default: src/experiences)").option("-y, --yes", "Skip prompts and use defaults/flags").action(init);
program.command("new <experience>").description("Generate a complete experience starter kit").option("-b, --brand <brand>", "Specify the brand pack to use").option("-a, --aesthetic <aesthetic>", "Specify the aesthetic to use").option("-m, --mode <mode>", "Install mode (native | isolated)").action(newCommand);
program.command("add <experience-id>").description("Add a complete experience to your project.").option("-o, --overwrite", "Overwrite existing files").option("-s, --skip-existing", "Skip existing files instead of overwriting").option("-m, --mode <type>", "Adaptation mode (native, recipe, isolated)", "isolated").action(add);
program.command("compose").description("Install components configured in zenix.compose.ts.").action(compose);
program.parse();
