import sass1 from '@/styles/sassLearning1.module.scss'
import { useState } from 'react';

//Dynamic Humburger solution no JS

//Так как мы пытаемся создать, бургер меню без JS, то для того чтобы отслеживать состояние меню (открыто/закрыто)/
//можно воспользовать <input type='checkbox'/>. Если чекбокс горит - то открыто, нет - то закрыто.
//HTML-элемент <aside> представляет собой часть документа, чьё содержимое только косвенно связанно с основным содержимым документа.
//А в целом, <aside> ведет себя как обычный div
//Воспользуемся <aside> для создания бокового меню, чисто ради SEO.
//Тег <nav> используется для создания блоков навигации, ссылок, которые ведут на другие веб-страницы, или разделы текущей.
//Чтобы держать код чище, вместо 3-х импутов, мы воспользуемся только одним, и при помощи before/after, добавим не достающие 2 елемента
//При чем before/after применим к контенту label. И получится: before, контент (в нашем случае input), after.
//И чтобы увидеть наши before/after, не забываем отобразить елменты как flex+column
//Чтобы отключить дефолтный вид для input, воспользуемся: appearance: none;
//Так как мы хотим взаимодействовать с input только через родительский label, а не на прямую, то сперва отключим сам input: pointer-events: none;
//И причина по которой мы обернули input в label - потому что когда мы нажимаем на label, то он автоматически активирует input чекбокс для нас
//Проверить, срабатывает ли наш чекбокс, можно при помощи - .hamburgerBtn > input:checked {}
//И на его срабатывание будем прятать input: opacity: 0; width: 0;
//Но выше мы только обращаемся к input когда он checked. А при том же условии обращаться к before/after елементам?


const SaasLearninig1 = () => {
    return (
        <div className={`${sass1.container}`}>
            <label className={`${sass1.hamburgerBtn}`}>
                <input type='checkbox'/>
            </label>
            <aside className={`${sass1.sideBar}`}>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
            </aside>
        </div>
    );
}
 
export default SaasLearninig1;

////Hardcoded Humburger solution
// const SaasLearninig1 = () => {
//     const [isBurgerOpen, setIsBurgerOpen] = useState(false)

//     return (
//         <div className={`${sass1.container}`}>
//             <p>Hello</p>
//             <button 
//                 className={`${sass1.burgerBtn} ${isBurgerOpen ? sass1.burgerOpen : ''}`}
//                 onClick={() => setIsBurgerOpen(!isBurgerOpen)}
//             >
//                 <span />
//                 <span />
//                 <span />
//             </button>
//         </div>
//     );
// }
 
// export default SaasLearninig1;