import { execFileSync } from "node:child_process";
import { join } from "node:path";

const rootDir = join(import.meta.dirname, "..");
const biomeBin = join(rootDir, "node_modules", "@biomejs", "biome", "bin", "biome");

// Batched to stay under command line length limits.
const batchSize = 50;

/**
 * Formats the files in place. Biome exits with status 1 when it reports diagnostics
 * for downloaded files it cannot parse, which is expected and ignored.
 */
export function FormatFiles(files: string[]): void {
	for (let i = 0; i < files.length; i += batchSize) {
		const batch = files.slice(i, i + batchSize);
		const args = [
			biomeBin,
			"format",
			"--max-diagnostics=0",
			"--log-kind=compact",
			"--diagnostic-level=error",
			"--write",
			...batch,
		];

		try {
			execFileSync(process.execPath, args, { cwd: rootDir, stdio: "inherit" });
		} catch (error) {
			const status = (error as { status?: number }).status;

			if (status !== 1) {
				throw error;
			}
		}
	}
}
