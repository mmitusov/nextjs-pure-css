# Часто используемые стили:

То как применять центровку елемента к самому себе
```
align-self: flex-start/end/center/stretch; (родитель должен быть 'display: flex;')
OR margin-top: auto;
```

Чтобы сделать компонет динамически масштабируемым без использования паддингов
```
display: flex;
max-width: 528px;
width: 100%;
```

Блюр
```
backdrop-filter: blur(3px); - блюр бекграунда
filter: blur(8px); - блюр всего елемента
```

Примеры обводки границ елемента
```
.horizontalLine {
    width: 100%;
    border-top: 1px solid #4A4A4A;
OR
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent #4A4A4A transparent;
}
```

Задать пропрорции размераелемента. Нужно скомбенировать aspect-ratio с каким-либо размером:
```
aspect-ratio: 16 / 9;
width: 50%
```

# SASS
***Variables***
```
$backgroundColor: blue;
.container {
    background-color: $backgroundColor;
}
```

***Nesting***
```
header button:hover {
    //Styles
}
header {
    button {
        &:hover {
            //Styles
        }
    }
}
```

***Code separation***
Используя SASS мы можем разделять стили по разным файлам и в итоге объеденять их вместе путем импортирования их в один общий файл:
`@import "./styles";`
P.S. Чтобы импортировать файлы, внутри файлов не нужно применять синтаксис по экспорту слитей внутри них.

***Mixins***
Миксины помогают нам создавать переиспользуемые стили. Они работают словно функции в JS: мы создаем функцию с часто используемой и нужной нам логикой, после чего мы можем многократно использовать эту функцию где угодно в нашем коде и сохраниять его DRY. Вместо того чтобы дублировать один и тот же код в разных местах. 
Мы создаем миксин - `@mixin`. И вызываем его где нужно при помощи - `@include <mixin_name>`.
При чем мы можем создавать миксины в одном файле, а использовать их в другом. И для этого нам даже не нужно и спользовать импорт или экспорт синтаксис. За нас все делает SASS.
```
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
.component {
    @include flexCenter();
}
```

Также миксины можно делать динамическими и более гибкими. Мы можем передавать в них параметры, и отрисовывать стиль согласно переданному нами параметру. Сам параметр должен быть указан в виде SASS переменной. Параметру мы можем давать любое имя какое нам нравиться. Словно в обычной JS функции.
Пример:
```
@mixin flexCenter($direction, $backgroundColor) {
    display: flex;
    flex-direction: $direction;
    background-color: $backgroundColor;
}
.component {
    @include flexCenter(column, blue);
}
```

***Extensions***
Домустим что у нас есть 2 разных стиля или больше и мы хотим использовать CSS из первого стиля во всех остальных. Но при этом мы не хотим просто копировать и вставлять везде повторяющиеся CSS. И тут на нам на помощь приходит `@extend <style_name>`. Он копирует весь CSS из указаного нами стиля и вставляет его в текущий. Мы как бы наследуем весь CSS из одного стиля в другой. Напрмиер:
```
.style1 {
    display: flex;
    justify-content: center;
    background-color: blue;
}
.style2 {
    @extend .style1;
    background-color: white;
}
```
При чем, после того как мы скопировали стили, мы пожем спокойно переписать те что нам нужно, указавши их ниже - `background-color: white;`. Ведь в CSS применяться будет тот стиль, что указан самым последним.

***Calculations***
В SASS так же можно напрямую использовать и математические символы (без calc()). Например:
```
.style1 {
  width: 100% - 20%;
}
```

***Maps***
Maps in Sass hold pairs of keys and values, and make it easy to look up a value by its corresponding key. Maps - ведет себя словно объект в JS. Пример синтаксиса:
```
$font-weights: (
  "regular": 400,
  "medium": 500,
  "bold": 700
);
body {
  font-weight: map-get($font-weights, bold);
}
```
И где же их применять? Хороший пример, это например случай когда у нас много разных текстовых стилей с разными font-weight по всему приложению. И если мы захотим поменять значение font-weights для жирного текста, то теперь нам не нужно ходить по всему приложению и заменять все вручную. А будет достаточно указать Maps в глобальных стилях, и из одного стартового места уже корректировать значения. И если мы попытаемся взать несуществующее значение, то нам просто вернется null.

# Нужно знать:
***Вложенный css.*** Знак ">" означает что мы обращаемся только к ребенку на корневом уровне, а не вообще ко всем вложенным елементам
`.style > div {}`

***Вложенный css.*** Если например у нас есть елементы разной вложености и каждый из них имеет `<p>` как дочерний елемент. То используя .style p {} мы будем таргетить все `<p>` елементы, а не только на одну вложеность вниз. И при попытке менять `<p>` елементы отдельно на кажной вложености (.style-child1 p {}, .style-child1 p {} ...), у нас будут криво работать стили. Поэтому задавая стили через вложенные елементы нужно быть аккуратным

Нужно разобраться в разнице
```
.container {
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-self: center;
    align-self: center;
}
```

**Работа с кнопками в формах**
```
Кастомная кнопка - Add file
/* Form button by default = type="submit". Дефолтное поведение можно поменять на type="button" */
<button className={`${buttonAddFileStyle.addButton}`} type="button"> 
  <input type="file" id="add-file-btn" hidden/>
  <label htmlFor="add-file-btn">Add file</label>
</button>

.addButton {
  all: unset; /* !!! Убирает все стили с кнопки !!! */
  background-color: white;
  padding: 8px 16px 8px 16px;
  border: 1px solid  var(--h1-color);
  cursor: pointer;
}
```

**Работа с изображениями**
```
  object-fit: contain;
  object-position: top;
  width: 100px; - can use for setting up aspect ratio
  height: calc(100px - 50px); - can use for setting up aspect ratio
```

**Работа с изображениями в NextJS**
Используя встроенный в NextJS компонет <Image> помимо параметров 'className', в <Image> можно также передавать и опциональные логические пропсы - Optional Props. Ниже будет пример одно из таких пропсов - fill.
Чтобы воспользоваться параметром object-fit в NextJS, внутри <Image> нужно также обязательно указать параметр 'fill'. Иначе object-fit работать не будет
```
<div className={`${aboutUsStyles.test}`}>
    <Image src={aboutUs1} alt='' fill/> /*Обязательно нужно указать fill*/
</div>
.parent {
  position: relative; /* Обязательно нужно указывать или display или position, чтобы картинке было на что опереться */
  display: flex; /* object-fit в .parent img может не отработать если не указать - display: flex в родителе */
  width: 875px;
  height: 213px;
  margin-bottom: 40px;
}
.parent img {
  object-fit: cover;
  overflow: hidden;
}
```

**Нужно не забывать что если мы используем absolute, то наш фон становиться прозрачным!** 
И в некоторых случаях может сложиться ощущуние, будто какой бы порядок z-index мы не задаем, елементы все равно видимы будто бы поочередность их слоев не меняется. Но это потому что забыв поставить background-color, прозрачные елементы накладываються друг на друга так, как будто они всегда находяться на одном слое
```
position: absolute;
z-index: 0;
background-color: white; /* Не забывать указывать для "position: absolute" */
```

***Transform***
The "transform" CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

Стандартный синтаксис для Transform - это:
transform: translate(120px, 50%);
transform: scale(2, 0.5);
translate() - перемещает элемент с его начальной точки. Функция принимает два параметра — один для перемещения по оси X, второй — по оси Y.

Но в новой версии CSS уже не обязательно использовать ключевое слово Transform. Теперь свойста можно писать отдельно и они будут работать так-же. Например:
translate: 120px, 50%;
scale: 2, 0.5;

Единственные свйства которые мы пока не может записывать отдельно - это skew и perspective. Их все еще нужно указывать через Transform.

P.S. Я не могу анимировать CSS переменные??? Нужно будет проверить.

# 1. Buttons.
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). 
For example, the pseudo-class :hover can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.
Notes: ":hover", ":active", "opacity", "transition" (put as a parametr an element that we want to monitor and then transition duration), "box-shadow: 1px 1px 20px rgba()", "border-style", "cursor
padding is the better alternative for height and width properties, so our text don't overflow on the page
Но когда мы юзаем padding не забываем, что border прибавляется поверх и поэтому размер елемента может стать болеше чем нам это нужно. Для компенсации уменьшим наш padding на толщину border
"vertical-align: top;" равняет елемент по его верхнему краю
Многие теги например как `<p>` tag имеют дефолтный spacing параметры. Поэтому для таких елементов подобные параметры нужно не забывать обнулять

# 2. Text
Стоит заметить, что CSS стили не читаются сверху вниз как в JS, а следуют CSS Specificity правилам. Поэтому очередность написания стилей не имеет значения
Чем более точечный стиль мы применяем тем выше у него будет приоритет перед другими: `body` < `.body(className)` < `.body(id)`

`<p>` тег по дефолту имет мржу 14 px снизу и сверху. Нужно не забывать обнулять маржу
Символы как '>' лучше создавать при помощи html entity, а то наша среда возможно может спутать его с незакрытым HTML тегом. html entity for middle dot - &#183 
Подобная стилистическая логика для текста как `<u>` внутри другого тега называется - text element. `<span>` text element в отличии от других не имеет презаданных стилей. Поэтому если мы хотим что-то кастомное, лучше использовать его 

Чтобы если наш текст не помещается в контейнер, то он просто будет прерываться на краю контейнера с тремя точками на конце
```
.hide-overflow-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

Если текст не вмещается, то чтобы он переносился на новую строчку по словам
```
word-break: break-word;
white-space: normal;
OR
overflow-wrap: break-word;
white-space: normal;
```

Шрифты в NextJS
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// <p className={inter.className}>

text-transform: uppercase;

# 3. Image, Input, Elements Display property
There are 3 types of elements: 
1. block element - takes up an entire line. e.g.`<p>` - by default is block element. И даже если мы зададим его внутренему елементу ширину, его маржа все равно будут занимать всю ширину страницы/контейнера в котором находяться
2. inline-block element - only takes up as much space as needed to. e.g. `<img>`, `<input>` - by default are inline-block. Так как они не занимают всю ширину страницу/контейнера в котором находяться, то другие елементы могут распологаться сбоку от них
3. inline element - appear within a line of text (=text element). e.g. `<span>`, `<strong>` - by default are inline.
And in CSS we can use the Display property to switch between them - assign any of the elements to a diferent type (property). 

/* Пример 1 - работа с картинками */
```
.thumbnail-contain1 {
  width: 300px;
  height: 300px;
  object-fit: contain; /* Если мы задаем нестандартные размеры, то вместоо того чтобы плющить или растягивать картинку мы можем использовать object-fit: contain; - чтобы уменьшить картинку в размере пока она не поместиться в наши кастомные размеры */
  object-position: top;/* object-position работает в тандеме с object-fit, показывает картинку либо вверху либо снузу коробки в пределах которой она уменьшена*/
  border-style: solid;
  border-color: black;
}
```
/* Пример 2 - работа с картинками */
```
.thumbnail-cover1 {
  width: 300px;
  height: 300px;
  object-fit: cover; /* Если мы задаем нестандартные размеры, то вместоо того чтобы плющить или растягивать картинку мы можем использовать object-fit: cover; - чтобы просто обрезать ее под кастомные размеры */
  object-position: left; /* object-position работает в тандеме с object-fit, показывает либо левую либо правую обрезаную часть */
  border-style: solid;
  border-color: black;
}
```
Пример 3 - работа с Display property елементов
```
div {
  display: inline-block; /* Меняем дефолтное block поведение <p> тега на inline-block. Теперь текст располагается друг рядом с другом,  а не один под одним */
}
vertical-align: top; /* !Не путать с 'object-position: top;' */
```

# 4. Using div as a container, nested layout technique/pro technique, fonts
Из всех способов подгрузить шрифты точечно в конкретный jsx компонет, сработал пока только этот.
```
import { Roboto } from '@next/font/google';

export const robotoLight = Roboto({
  subsets: ['latin'],
  weight: ['100'],
});

<p className={`${robotoLight.className}`}>
```

Из способов подгрузки стилей напрямик в css файл, сработал только пока классический способ с подгрузкой шрифтов
```
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet');
```

Даже если мы поменяем `<div>` Display property на inline-block, то он все равно будет занимать всю ширину контейнера
Это происходит так как `<div>` в inline-block ориентации по дефолту имеет значение ширины в 100%, поэтому нужно не забывать это менять

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

# 5. CSS Grid

**Примеры задания параметров грида**
grid-template-columns: repeat(4, 246px);
grid-template-columns: 246px 246px 246px 246px;

Проблема со стандартным 'display: inline-block;' в том, что в таком случае елементы к которому он применен имеют неточности в позиционировании: даже при 0й марже все равно остаються небольшие отступы вокруг елемента
Причина этого - если в нашем коде мы отделяем наши теги пробелом или новой строкой `'<div>.....<div>'`, то эти пробелы отображаются как екстра отступы в нашем UI
И если мы поставим эти два тега вплотную `'<div><div>'`, то эти отступы пропадут. Но для нас код станет менее читабельным
Также использую `'display: inline-block;'` - сложно ровнять елементы
P.S. Это касается класической связки CSS+HTML. Но я заметил, что используя Next.js пока таких проблем не возникало
И как решение этого всего - мы можем использовать CSS Grid

Grid лексика: 
1fr - за  мет все оставшиеся свободное место. Если мы успользуем 2 столбца по 1fr - место будет разделено медну ними 50/50 (задаем соотношение). Если 1fr+3fr, то - 25/75 и т.д.
grid-template-columns, column-gap, row-gap

```
.bigGridContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 40px;
}

/* Using Grid - ширину в 300px лучше удалить так как теперь грид не привязан к конкретной ширине и может динамически менять свои размеры в зависимости от размера екрана */
/* Также нам не нужны display, vertical-align и margin так как уже Grid задает эти параметры */
/* .videoContainer {
  display: inline-block;
  vertical-align: top;
  width: 300px;
  margin: 5px;
} */
```

# 6. CSS Flexbox, Nested Flexbox
white-space: nowrap; (для текста, чтобы он не переходил на новую строку)
flex-wrap: wrap; (если елементы не помещаются по ширине, они будут складываться друг под другом)


# 8. Напоминалка для бургер кнопки
Сдвигает элемент в нужном нам направлении, и потом можно наложить еффект его выпадания. Полезно для бургер меню
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);

Полезно для бургер меню кнопки, чтобы лини складывались крестиком
.burgerDiv1 {
    transform: rotate(45deg);
    transform-origin: 7px 2px;
}
OR
.burgerDiv1 {
  transform: translate(-7px) rotate(45deg) translate(2px);
}

Применить transition ко всем возможным анимациям
transition: all 0.3s linear;

Обратиться к первому/второму… на очереди дочернему елементу
:first-child {}/:nth-child(2)

Если сложить все елементы в один ряд, то это позволяет тому что не влазит в контейнер скролиться горизонтально
.horizontalScroll {
    overflow: auto;
    white-space: nowrap;
    flex-wrap: nowrap;
    gap: 16px;
}

Так можно менять порядок отображения елементов в пределах одного родителя
Менять елементы местами
.imgSectionChild1 div:nth-of-type(1) {
    order: 2;
}
.imgSectionChild1 div:nth-of-type(2) {
    order: 1;
}

Менять местами елементы которые являются дочерними родительского
.imgSection:nth-child(1) .imgBlock1 {
    order: 2;
}
.imgSection:nth-child(1) .imgBlock2 {
    order: 1;
}

Менять местами путем изменения их координат
.imgBlock1, .imgBlock2 {
    transform: translateY(356px);
}
.imgBlock3 {
    transform: translateY(-221px);
} 

***Особенности работы с Googl Maps в NextJS***
```
<GoogleMap
    zoom={15}
    center={mapPosition}
    mapContainerClassName={`${contactUsStyles.mapContainer}`} 
    //OR mapContainerStyle={{ width: '800px', height: '800px' }}. Без указания габаритов карта не отобразиться. Также если задать className, а не mapContainerClassName, то также ничего не отобразиться
    options={mapConfigOption}
    onLoad={() => console.log('Map Component Loaded...')}
>
    <MarkerF position={mapPosition}/> {/* icon="https://picsum.photos/64" - Пример использования кастомной иконки для карт */}
</GoogleMap>
```

***Особенности работы с position Sticky в NextJS***
```
function App() {
    return (
        <div className={`${ourServicesStyles.parentContainer}`}>
        <div className={`${ourServicesStyles.leftChild}`}>
            <h1>Yo</h1>  
        </div>
        <div className={`${ourServicesStyles.rightChild}`}>
            Hello
        </div>
        </div>
    );}
-----> global.css
Без параметра overflow-x, может сламаться вид всего приложения. Поэтому если мы хотим иметь возможность использовать параметр sticky, то вместо hidden нужно использовать clip. Или вместо overflow воспользоваться contain: paint;
overflow-x: clip; - https://www.terluinwebdesign.nl/en/css/position-sticky-not-working-try-overflow-clip-not-overflow-hidden/
html,
body {
  /* overflow-x: hidden; !!! Если использовать overflow, то Sticky не будет в рамках всего приложения*/
    overflow-x: clip; || contain: paint; Но "contain: paint" может давать сайд еффекты, поэтому с ним нужно быть аккуратнее.
}
-----> component.css
.parentContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /*!!! Почему-то если в родительском компоненте не указать 'align-items: flex-start' то Sticky работать не будет*/ 
}
.leftChild {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
}
.leftChild h1 {
    width: 50%;
    height: 300px;
}
.rightChild {
    flex: 1;
    text-align: center;
    position: sticky;
    top: 0;
}
```
`overflow-y: auto; scrollbar-width: none;` - чтобы отркючить scroll-bar с боку

***Пример того как создать поведение чтобы если контента на странице слишком мало - чтобы Header и Footer занимали всю высоту страницы, а не схлопывались вместе вверху страницы***
```
const Layout = ({ children }) => {
  return (
    <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
      <Header />
      <div style={{flex: 1}}>{children}</div>
      <ButtonBackToTop />
      <Footer />
    </div>
  )
}
```
***Conditional CSS rendering***
<div className={`main-burger-display ${isBurgerOpen ? "" : 'main-burger-hidden'}`} />
