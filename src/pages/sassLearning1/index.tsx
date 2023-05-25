import sass1 from '@/styles/sassLearning1.module.scss'
import { useState } from 'react';

const SaasLearninig1 = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    return (
        <div className={`${sass1.container}`}>
            <p>Hello</p>
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