const magic = 0x1f1903c103bc1fc6n;
const minVersion = 57;
const maxVersion = 100;

// The header is padded to a multiple of 32 bytes, which is this size for every supported version.
const headerSize = 128;
const overflowLength = 0xff;

// No control, format, surrogate, private use, unassigned or separator characters, other than a plain space.
const printablePattern = /^(?:[^\p{C}\p{Z}]| )*$/u;

/**
 * Returns the printable strings of a Hermes bytecode file, sorted, one per line.
 */
export function ExtractHermesStrings(bundle: Uint8Array): string {
	const file = Buffer.from(bundle.buffer, bundle.byteOffset, bundle.byteLength);
	const lines: Buffer[] = [];

	for (const value of ReadStringTable(file)) {
		if (printablePattern.test(value)) {
			lines.push(Buffer.from(value.trim(), "utf8"));
		}
	}

	// UTF-8 bytes sort in code point order
	lines.sort(Buffer.compare);

	return `${lines.join("\n")}\n`;
}

function ReadStringTable(file: Buffer): string[] {
	if (file.length < headerSize || file.readBigUInt64LE(0) !== magic) {
		throw new Error("Not a Hermes bytecode file");
	}

	const version = file.readUInt32LE(8);

	if (version < minVersion || version > maxVersion) {
		throw new Error(`Unsupported Hermes bytecode version ${version}`);
	}

	if (file.readUInt32LE(32) !== file.length) {
		throw new Error("Hermes bytecode file has the wrong length");
	}

	const functionCount = file.readUInt32LE(40);
	const stringKindCount = file.readUInt32LE(44);
	const identifierCount = file.readUInt32LE(48);
	const stringCount = file.readUInt32LE(52);
	const overflowStringCount = file.readUInt32LE(56);
	const stringStorageSize = file.readUInt32LE(60);

	const functionHeaderSize = version < 97 ? 16 : 12;
	const kindTable = headerSize + functionCount * functionHeaderSize;
	const smallTable = kindTable + stringKindCount * 4 + identifierCount * 4;
	const overflowTable = smallTable + stringCount * 4;
	const storage = overflowTable + overflowStringCount * 8;

	if (storage + stringStorageSize > file.length) {
		throw new Error("Hermes bytecode string tables do not fit in the file");
	}

	if (CountStringsInKinds(file, kindTable, stringKindCount) !== stringCount) {
		throw new Error("Hermes bytecode string kinds do not match the string count");
	}

	const strings: string[] = [];

	for (let i = 0; i < stringCount; i++) {
		const entry = file.readUInt32LE(smallTable + i * 4);
		const isUtf16 = (entry & 1) === 1;
		let offset = (entry >>> 1) & 0x7fffff;
		let length = entry >>> 24;

		if (length === overflowLength) {
			const overflowEntry = overflowTable + offset * 8;

			offset = file.readUInt32LE(overflowEntry);
			length = file.readUInt32LE(overflowEntry + 4);
		}

		const byteLength = isUtf16 ? length * 2 : length;

		if (offset + byteLength > stringStorageSize) {
			throw new Error("Hermes bytecode string is outside of the string storage");
		}

		const start = storage + offset;

		if (isUtf16) {
			// A leading byte order mark is not part of the tracked string
			strings.push(file.toString("utf16le", start, start + byteLength).replace(/^﻿/, ""));
		} else {
			strings.push(file.toString("ascii", start, start + byteLength));
		}
	}

	return strings;
}

/**
 * String kinds are run length encoded, and the low 31 bits of each entry are the length of the run.
 */
function CountStringsInKinds(file: Buffer, kindTable: number, stringKindCount: number): number {
	let total = 0;

	for (let i = 0; i < stringKindCount; i++) {
		total += file.readUInt32LE(kindTable + i * 4) & 0x7fffffff;
	}

	return total;
}
