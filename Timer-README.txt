gong-pixabay-7sec-255733.mp3

ПОлучился такой код (см. анттач), кроме того в корне я создал папку аудио и положил туда файл gong-pixabay-7sec-255733.mp3; Твоя задача: модернизировать имеющийся html and javascript, чтобы получился следующий функционал: 

Ниже названия чайта и выше бегунка находится табло: 00:00:00

Это часы минуты и секунды. Но пользователю ничего это не объясняется.

Ниже идет бегунок.
Под бегунком находятся цифры 0, 5, 15, 30, 45, 60.
Это значения в минутах для выставления таймера.


Пользователь может выставлять бегунок на любое из этих значений.

Под этими цифрами по  центру находятся три кнопки: start, stop, reset (зеленая, красная, желтая. Все три тона светлые)

Работает приложение так: 


По умолчанию бегунок стоит в положении 0.
Как только его передвигают в первую позицию (5) или любую другую, активируется кнопка  start - становится насыщенно зеленой.
Одновременно табло сверху меняется на 00:05:00

Если бегунок передвинуть  далее (или с нулевого положения) то цифры на табло изменятся соответствующим образом. 
Максимальное значение: 01:00:00

После нажатия на зеленую кнопку начинается отсчет обратного времени. 
Бегунок остается без изменений, а цифры на табло - меняются, показывая отсчет обратного времени.

В любой момент можно нажать кнопку stop. Тогда она из светло-красного становится алого цвета. А кнопка start снова становится светло зеленой. 
КНопка reset всегда светло-желтого цвета. Только в момент нажатия она становится на 4 секунды насыщенно желтого цвета. 

Когда обратный отсчет закончился, табло возвращается в исходное состояние 00:00:00 и звучит звуковой сигнал - gong-pixabay-7sec-255733.mp3


Если появились вопросы - спрашивай. Если вся ясно - начинай создавать код. Пришли мне его сюда в одном сообщении чата.