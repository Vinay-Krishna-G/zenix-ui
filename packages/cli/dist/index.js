#!/usr/bin/env node
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
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_child_process = require("child_process");
async function init() {
  console.log(import_chalk.default.bold.blue("\nWelcome to ZenixUI Experience distribution.\n"));
  const response = await (0, import_prompts.default)([
    {
      type: "select",
      name: "framework",
      message: "Which framework are you using?",
      choices: [
        { title: "Next.js", value: "next" },
        { title: "Vite", value: "vite" },
        { title: "Remix", value: "remix" }
      ]
    },
    {
      type: "text",
      name: "experiencesDir",
      message: "Where should we place downloaded experiences?",
      initial: "src/experiences"
    },
    {
      type: "select",
      name: "defaultTheme",
      message: "Which theme would you like to use by default?",
      choices: [
        { title: "Zenix", value: "zenix" },
        { title: "Ocean", value: "ocean" },
        { title: "Night City", value: "night-city" },
        { title: "Autumn", value: "autumn" }
      ]
    }
  ]);
  if (!response.framework) {
    console.log(import_chalk.default.yellow("Installation cancelled."));
    process.exit(0);
  }
  const spinner = (0, import_ora.default)("Installing core dependencies...").start();
  try {
    (0, import_child_process.execSync)("npm install @zenixui/react @zenixui/core @zenixui/components", { stdio: "ignore" });
    spinner.succeed("Installed core dependencies.");
  } catch (err) {
    spinner.warn("Failed to auto-install dependencies. You may need to run `npm install @zenixui/react @zenixui/core @zenixui/components` manually.");
  }
  const configPath = import_path.default.join(process.cwd(), "zenix.json");
  import_fs.default.writeFileSync(configPath, JSON.stringify({
    framework: response.framework,
    experiencesDir: response.experiencesDir,
    defaultTheme: response.defaultTheme
  }, null, 2));
  const expPath = import_path.default.join(process.cwd(), response.experiencesDir);
  if (!import_fs.default.existsSync(expPath)) {
    import_fs.default.mkdirSync(expPath, { recursive: true });
  }
  console.log(import_chalk.default.green(`
Success! ZenixUI is configured.`));
  console.log(`
Next steps:`);
  console.log(`1. Wrap your root layout with ${import_chalk.default.cyan('<Experience preset="' + response.defaultTheme + '">')}`);
  console.log(`2. Run ${import_chalk.default.cyan("npx zenix-ui add night-city-portfolio")} to add your first experience.
`);
}

// src/commands/add.ts
var import_chalk2 = __toESM(require("chalk"));
var import_ora2 = __toESM(require("ora"));
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var REGISTRY_PATH = import_path2.default.join(__dirname, "../../../blueprints/dist/registry.json");
async function add(experienceId) {
  const configPath = import_path2.default.join(process.cwd(), "zenix.json");
  if (!import_fs2.default.existsSync(configPath)) {
    console.log(import_chalk2.default.red("Error: zenix.json not found. Run `npx zenix-ui init` first."));
    process.exit(1);
  }
  const config = JSON.parse(import_fs2.default.readFileSync(configPath, "utf-8"));
  const spinner = (0, import_ora2.default)(`Locating experience: ${experienceId}...`).start();
  let registry = [];
  try {
    if (import_fs2.default.existsSync(REGISTRY_PATH)) {
      registry = JSON.parse(import_fs2.default.readFileSync(REGISTRY_PATH, "utf-8"));
    } else {
      throw new Error("Registry file not found locally.");
    }
  } catch (err) {
    spinner.fail("Failed to connect to experience registry.");
    process.exit(1);
  }
  const blueprint = registry.find((bp) => bp.id === experienceId);
  if (!blueprint) {
    spinner.fail(`Experience '${experienceId}' not found in registry.`);
    process.exit(1);
  }
  spinner.text = `Installing ${blueprint.title}...`;
  const destDir = import_path2.default.join(process.cwd(), config.experiencesDir);
  if (!import_fs2.default.existsSync(destDir)) {
    import_fs2.default.mkdirSync(destDir, { recursive: true });
  }
  const filename = `${blueprint.title.replace(/\s+/g, "")}.tsx`;
  const destFile = import_path2.default.join(destDir, filename);
  import_fs2.default.writeFileSync(destFile, blueprint.sourceCode);
  spinner.succeed(import_chalk2.default.green(`Successfully installed ${blueprint.title} into ${config.experiencesDir}/${filename}`));
  console.log(`
To use it, import it in your app:`);
  console.log(import_chalk2.default.cyan(`import { ${blueprint.title.replace(/\s+/g, "")} } from '@/${config.experiencesDir}/${filename.replace(".tsx", "")}';`));
}

// src/index.ts
var program = new import_commander.Command();
program.name("zenix-ui").description("Distribute and install entire ZenixUI experiences.").version("0.0.1");
program.command("init").description("Initialize your project and install ZenixUI dependencies.").action(init);
program.command("add <experience-id>").description("Add a complete experience to your project.").action(add);
program.parse();
