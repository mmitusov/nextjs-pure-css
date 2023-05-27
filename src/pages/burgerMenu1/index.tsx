import sass1 from '@/styles/burgerMenu1.module.scss'
import { useState } from 'react';

//Hardcoded Humburger solution
const SaasLearninig1 = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    return (
        <div className={`${sass1.container}`}>
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