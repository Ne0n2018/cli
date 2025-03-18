import { Transform } from "stream";

export function performTask(input, task) {
  if (task === "reverse") {
    return input.split("").reverse().join("");
  }
  return `Task "${task}" not implemented.`;
}

export function streamTransform(task) {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString();
      const result = performTask(data, task);
      callback(null, result);
    },
  });
}
