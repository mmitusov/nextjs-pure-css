import useWindowDimentions from '@/customHooks/useWindowDimentions';
import sass1 from '@/styles/burgerMenu1.module.scss'
import { useRef, useState } from 'react';

//Hardcoded Humburger solution
const SaasLearninig1 = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    //Custom hook test
    const {dimentions} = useWindowDimentions();
    
    //useRef hook test
    //При нажании на input, мы меняем его стиль, через референс который мы на него повесили
    const inputField: any = useRef();
    const consoleRef = () => {
        console.log(inputField.current);
        console.log(inputField.current.value);
        inputField.current.style.width = '50px';
    }

    return (
        <div className={`${sass1.container}`}>
            <p>Window width: </p>
            <div>{dimentions.width}</div>

            <p>useRef test: </p>
            <input 
                ref={inputField}
                type="number"
                onChange={() => consoleRef()}
            />

            <button 
                className={`${sass1.burgerBtn} ${isBurgerOpen ? sass1.burgerOpen : ''}`}
                onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
                <span />
                <span />
                <span />
            </button>
        </div>
    );
}
 
export default SaasLearninig1;