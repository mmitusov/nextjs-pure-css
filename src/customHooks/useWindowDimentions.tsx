import { useEffect, useState } from "react";

const useWindowDimentions = () => {
    const [dimentions, setDimentions] = useState({
        width: null,
        height: null
    })

    useEffect(() => {
        const updateSize = () => {
            setDimentions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        updateSize()
 
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize); console.log('resize');
    }, [])

    return {dimentions}
}

export default useWindowDimentions;