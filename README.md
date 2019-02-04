# planeSchedule
Задания для собеседования в Яндекс

При написании сайта я создала файл json.js, куда положила информацию о рейсах. 
Ее использовала при выводе табло аэропорта. Для запуска использовала 
npm install,
затем 
npm start.

Теперь о задаче 2.

v1
Как мы видим в коде, setInterval получает первым аргументом функцию. 
Так как мы явно не передаем в функцию контекст, то this в функции tick будет обращаться к window (при запуске в браузере). 
Зададим функции контекст. Call() и apply() нам не подойдут, так как они вернут не функцию. 
Воспользуемся для этого bind и передадим в качестве контекста ticker. Готово!

v2
Можно также воспользоваться тем, что ticker объявлен глобально и мы можем просто в функции обратиться к нему напрямую.
