# Питомник Мейн Кунов
Первый питомник с расширенным спектром услуг
## Краткая инструкция по работе
### Для начала работы у вас должент быть установлен:
* Node.js v.10.15.3
* Gulp v4
* npm last version
## Установка
* Установите Node.js https://nodejs.org/uk/download/
* Проверите наличие установки node, npm, and npx и при необходимости выполнить установку Node.js:
```
node --version

```
```
npm --version

```
```
npx --version

```
* Установите утилиту командной строки gulp
```
npm install --global gulp-cli

```
* Перейти в папку где будет распологаться проект
```
npx mkdirp my-project
cd my-project

```
* Скачать проект
```
https://github.com/Parkh0menk0/maine-coon-nursery.git или git@github.com:Parkh0menk0/maine-coon-nursery.git (используя SSH ключ)

```
* В корне проекта выполнить команду для установки зависимостей
```
npm i

```
## Основные команды для работы
* Запуск локального сервера - `npm start`
* Сборка проекта без запуска локального сервера - `npm run-script build`
* Запуск тестирования на соответствия код-гайдам - `npm test`
