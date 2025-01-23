const fs = require("fs");
const path = require("path");

const { parseStream, parseBuffer } = require("music-metadata");

describe("MP4 video parsing", () => {
  describe("Buffer", () => {
    it("should parse video 1", async () => {
      const buffer = fs.readFileSync(filepath1);

      const promise = parseBuffer(buffer);

      await expect(promise).resolves.not.toThrow();
    });

    it("should parse video 2", async () => {
      const buffer = fs.readFileSync(filepath2);

      const promise = parseBuffer(buffer);

      await expect(promise).resolves.not.toThrow();
    });
  });

  describe("Stream", () => {
    it("should parse video 1", async () => {
      const stream = fs.createReadStream(filepath1);

      const promise = parseStream(stream);

      await expect(promise).resolves.not.toThrow();
    });

    it("should parse video 2", async () => {
      const stream = fs.createReadStream(filepath2);

      const promise = parseStream(stream);

      await expect(promise).resolves.not.toThrow();
    });
  });

  describe("Stream with size", () => {
    it("should parse video 1 with size", async () => {
      const stream = fs.createReadStream(filepath1);
      const { size } = fs.statSync(filepath1);

      const promise = parseStream(stream, { size });

      await expect(promise).resolves.not.toThrow();
    });

    it("should parse video 2 with size", async () => {
      const stream = fs.createReadStream(filepath2);
      const { size } = fs.statSync(filepath2);

      const promise = parseStream(stream, { size });

      await expect(promise).resolves.not.toThrow();
    });
  });
});

const filepath1 = path.join("assets/1.mp4");
const filepath2 = path.join("assets/2.mp4");
