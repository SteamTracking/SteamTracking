import { execFileSync } from "node:child_process";
import { basename } from "node:path";

execFileSync("git", ["add", "-A"], { stdio: "inherit" });

const status = execFileSync("git", ["status", "--porcelain"], {
	encoding: "utf8",
	maxBuffer: 1024 * 1024 * 1024,
}).trimEnd();

if (status === "") {
	process.exit(0);
}

const lines = status.split("\n");
const names: string[] = [];

for (const line of lines) {
	if (line.slice(3).startsWith("c/")) {
		continue;
	}

	const path = line.trim().split(/\s+/)[1];

	if (path) {
		names.push(basename(path));
	}
}

const noun = lines.length === 1 ? "file" : "files";
let message = `${lines.length} ${noun}`;

if (names.length > 0) {
	message += ` | ${names.join(", ")}`;
}

execFileSync("git", ["commit", "-m", message], { stdio: "inherit" });
execFileSync("git", ["push"], { stdio: "inherit" });
