# telephone_book_for_stc

# Тестовое задание для позиции frontend-разработчика (React)

## Описание

Телефонная книга по макету на Vanilla JS / React / другом фреймворке 
со следующей функциональностью:


1. Каждый контакт должен обязательно содержать одно из полей имя или фамилия, 
а также набор опциональных полей: отчество, телефоны, компания, адрес, email

2. Просмотр всей информации о контакте при клике на него

3. Механизм сортировки контактов по алфавиту. 
Сортировка выполняется по имени, либо по фамилии, если имя не уазано.

4. Возможность добавления нового контакта с валидацией наличия обязательных полей. 

5. Текстовый поиск среди контактов по всем заполненым полям контакта.

6. Динамичная подгрузка данных при прокрутке вниз больше чем на N контактов.
(Имитация подгрузки списка с сервера по частям)

7*. Реализовать импорт и экспорт контактов в JSON файл.

8**. Загрузка и обрезка в рамку фото контакта.

Приложение должно работать в браузере на основе chromium.
Бэкенд не требуется. Задачи со * опциональны.


# Технологии
React JS (hooks) + TypeScript + Верстка CSS.

## Использование
Что бы запустить проект локально, после клонирования проекта, откройте терминал:
Зайдите в папку frontend
```sh
$ cd frontend
```

Установите npm-пакет с помощью команды:
```sh
$ npm i 
```

Запустите проект 
```sh
$ npm start
```
