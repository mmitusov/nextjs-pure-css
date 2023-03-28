# Часто используемые стили:

**Примеры обводки**
.horizontalLine {
    width: 100%;
    border-top: 1px solid #4A4A4A;
OR
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent #4A4A4A transparent;
}

**Примеры параметров грида**
grid-template-columns: repeat(4, 246px);
grid-template-columns: 246px 246px 246px 246px;

**Нужно не забывать что если мы используем absolute, то наш фон становиться прозрачным!** И может сложиться ощущуние, что какой бы порядок z-index мы не задаем, елементы все равно видимы. Но это потому что забыв поставить background-color, прозрачные елементы накладываються друг на друга так, как будто они всегда находяться на одном слое
position: absolute;
z-index: 0;
background-color: white;

**Вложенный css**
Если например у нас есть елементы разной вложености и каждый из них имеет <p> как дочерний елемент. То используя .style p {} мы будем таргетить все <p> елементы, а не только на одну вложеность вниз. И при попытке менять <p> елементы отдельно на кажной вложености (.style-child1 p {}, .style-child1 p {} ...), у нас будут криво работать стили. Поэтому задавая стили через вложенные елементы нужно быть аккуратным

# 1. Buttons.
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). 
For example, the pseudo-class :hover can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.
Notes: ":hover", ":active", "opacity", "transition" (put as a parametr an element that we want to monitor and then transition duration), "box-shadow: 1px 1px 20px rgba()", "border-style", "cursor
padding is the better alternative for height and width properties, so our text don't overflow on the page
Но когда мы юзаем padding не забываем, что border прибавляется поверх и поэтому размер елемента может стать болеше чем нам это нужно. Для компенсации уменьшим наш padding на толщину border
"vertical-align: top;" равняет елемент по его верхнему краю
Многие теги например как <p> tag имеют дефолтный spacing параметры. Поэтому для таких елементов подобные параметры нужно не забывать обнулять

# 2. Text
Стоит заметить, что CSS стили не читаются сверху вниз как в JS, а следуют CSS Specificity правилам. Поэтому очередность написания стилей не имеет значения
Чем более точечный стиль мы применяем тем выше у него будет приоритет перед другими: body < .body(className) < .body(id)

<p> тег по дефолту имет мржу 14 px снизу и сверху. Нужно не забывать обнулять маржу
Символы как '>' лучше создавать при помощи html entity, а то наша среда возможно может спутать его с незакрытым HTML тегом. html entity for middle dot - &#183 
Подобная стилистическая логика для текста как '<u>' внутри другого тега называется - text element. '<span>' text element в отличии от других не имеет презаданных стилей. Поэтому если мы хотим что-то кастомное, лучше использовать его 

# 3. Image, Input, Elements Display property
There are 3 types of elements: 
1. block element - takes up an entire line. e.g. <p> - by default is block element. И даже если мы зададим его внутренему елементу ширину, его маржа все равно будут занимать всю ширину страницы/контейнера в котором находяться
2. inline-block element - only takes up as much space as needed to. e.g. <img>, <input> - by default are inline-block. Так как они не занимают всю ширину страницу/контейнера в котором находяться, то другие елементы могут распологаться сбоку от них
3. inline element - appear within a line of text (=text element). e.g. <span>, <strong> - by default are inline.
And in CSS we can use the Display property to switch between them - assign any of the elements to a diferent type (property). 

/* Пример 1 - работа с картинками */
.thumbnail-contain1 {
  width: 300px;
  height: 300px;
  object-fit: contain; /* Если мы задаем нестандартные размеры, то вместоо того чтобы плющить или растягивать картинку мы можем использовать object-fit: contain; - чтобы уменьшить картинку в размере пока она не поместиться в наши кастомные размеры */
  object-position: top;/* object-position работает в тандеме с object-fit, показывает картинку либо вверху либо снузу коробки в пределах которой она уменьшена*/
  border-style: solid;
  border-color: black;
}
/* Пример 2 - работа с картинками */
.thumbnail-cover1 {
  width: 300px;
  height: 300px;
  object-fit: cover; /* Если мы задаем нестандартные размеры, то вместоо того чтобы плющить или растягивать картинку мы можем использовать object-fit: cover; - чтобы просто обрезать ее под кастомные размеры */
  object-position: left; /* object-position работает в тандеме с object-fit, показывает либо левую либо правую обрезаную часть */
  border-style: solid;
  border-color: black;
}
/* Пример 3 - работа с Display property елементов */
div {
  display: inline-block; /* Меняем дефолтное block поведение <p> тега на inline-block. Теперь текст располагается друг рядом с другом,  а не один под одним */
}
vertical-align: top; /* !Не путать с 'object-position: top;' */

# 4. Using div as a container, nested layout technique/pro technique, fonts
//Из всех способов подгрузить шрифты точечно в конкретный файл, сработал пока только этот.
```
import { Roboto } from '@next/font/google';

export const robotoLight = Roboto({
  subsets: ['latin'],
  weight: ['100'],
});

<p className={`${robotoLight.className}`}>
```

Способ локально в css - указан в css

Даже если мы поменяем <div> Display property на inline-block, то он все равно будет занимать всю ширину контейнера
Это происходит так как <div> в inline-block ориентации по дефолту имеет значение ширины в 100%, поэтому нужно не забывать это менять

Стоит заметить, что если во вложеном inline-block <теге> сделать ширину больше его контейнера то он будет вываливаться за его пределы вместе со своим содержимым
И если подобных контейнеров несколько то рядом их поставить не получиться и они будут идти один под одним, ведь так как он и так вываливается то слева и справа от него места под другие <теги> уже просто не остается
Поэтому нужно следить за шириной контейнеров и там где не нужно лучше ее не задавать
Пример с <р> тегом ниже ***

По дефолту когда мы работаем с картинками в css - текст и другие елементы могут залазить на них (because by default img keep their original size), но в NexJS это вроде пока не наблюдалось
Но чтобы этого избежать за пределами NexJS то нужно делать ширину картинки одинаковой с шириной родительского тега или 100% от родительского
Тогда картинка не будет вылизать за пределы тега и на нее не будут залазить другие елементы

Если мы указываем несколько стилей шрифтов через запятую, это называется - font stack
Мы его используем для того, чтобы если самый первый по списку шрифт не загрузился/не стработал, то автоматически примениться следующий идущий за ним и т.д.

Также стоит заметить что если двум рядом стоящим елементам указать margin, например в 50px, то расстояние меджу ними общее расстояние между ними будет на 100px, а все теже 50
Это потому что в CSS, margin всегда накладывается друг на друга а не суммируется. И всегда отображается тот что больше