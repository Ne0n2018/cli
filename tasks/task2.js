import { Transform } from "stream";

export function performTask(input, task) {
  if (task === "iv") {
    const array = input.split(",").map((num) => parseInt(num.trim(), 10));

    // Двоичный поиск
    let left = 0;
    let right = array.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (array[mid] === mid) {
        result = mid; // Найден индекс
        right = mid - 1; // Продолжаем искать меньший индекс
      } else if (array[mid] < mid) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
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
