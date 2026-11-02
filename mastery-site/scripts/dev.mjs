import { spawn } from "node:child_process";
import { watch } from "node:fs";
let building = false,
  queued = false;
function rebuild() {
  if (building) {
    queued = true;
    return;
  }
  building = true;
  const job = spawn("npm", ["run", "build"], { stdio: "inherit" });
  job.on("exit", () => {
    building = false;
    if (queued) {
      queued = false;
      rebuild();
    }
  });
}
rebuild();
const server = spawn(process.execPath, ["scripts/serve.mjs"], {
  stdio: "inherit",
});
let timer;
const changed = () => {
  clearTimeout(timer);
  timer = setTimeout(rebuild, 200);
};
watch("src", { recursive: true }, changed);
watch("design-tokens.json", changed);
watch("content", { recursive: true }, changed);
process.on("SIGINT", () => {
  server.kill("SIGINT");
  process.exit();
});
