import { useRef } from "react";

//В HTML появился новый тег - <dialog />
const newWebFeatures = () => {
    const dialogId:any = useRef()
    
    return (
        <div>
            <dialog ref={dialogId}>
                <p>Hello world</p>
                <button onClick={() => dialogId.current.close()}>
                    Close module dialog window
                </button>
            </dialog>
            <button onClick={() => dialogId.current.showModal()}>
                Open module dialog window
            </button>
        </div>
    );
}
 
export default newWebFeatures;