# CLI Tool

## Установка

1. Убедитесь, что Node.js установлен.
2. Скачайте проект и установите зависимости:
   npm install

## Запуск

Для запуска используйте команду:

- node src/index.js -i input.txt -o output.txt -t sd
- node src/index.js -i input.txt -o output.txt -t iv
- node src/index.js -t sd
- node src/index.js -t iv

### Параметры:

- `-i, --input`: Входной файл.
- `-o, --output`: Выходной файл.
- `-t, --task`: Задача (обязательно).

Если `--input` не задан, ввод осуществляется через консоль. Если `--output` не задан, вывод осуществляется в консоль.
