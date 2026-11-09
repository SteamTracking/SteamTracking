import { join, sep } from "node:path";

const rootPrefix = join(import.meta.dirname, "..") + sep;

/**
 * Prints a message prefixed with the seconds since the process started, with paths relative to the repository.
 * Color placeholders such as {green} are replaced with ANSI escape codes.
 */
export function Log(message: string): void {
	const seconds = (performance.now() / 1000).toFixed(2);
	let line = `[${seconds}s] ${message}{normal}\n`;

	line = line.replaceAll(rootPrefix, "");

	const apiKey = process.env.STEAM_API_KEY;

	if (apiKey) {
		line = line.replaceAll(apiKey, "{lightred}*APIKEY*{normal}");
	}

	line = line.replaceAll("{normal}", "\x1b[0m");
	line = line.replaceAll("{green}", "\x1b[0;32m");
	line = line.replaceAll("{yellow}", "\x1b[1;33m");
	line = line.replaceAll("{lightred}", "\x1b[1;31m");
	line = line.replaceAll("{lightblue}", "\x1b[1;34m");

	process.stdout.write(line);
}
