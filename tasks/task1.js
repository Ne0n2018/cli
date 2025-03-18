import { Transform } from "stream";

export function performTask(input, task) {
  if (task === "sdf") {
    const [str1, str2] = input.split(",").map((str) => str.trim());

    if (str1.length !== str2.length || (str1 + str1).indexOf(str2) === -1) {
      return -1;
    }

    return (str1 + str1).indexOf(str2);
  }
  return `Task "${task}" not implemented.`;
}

export function streamTransform(task) {
  return new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().trim();
      const result = performTask(data, task);
      callback(null, result.toString() + "\n");
    },
  });
}
