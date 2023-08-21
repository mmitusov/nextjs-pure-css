import { useRef } from "react";

//В HTML появился новый тег - <dialog />
const newWebFeatures = () => {
    const dialogId:any = useRef()
    //Standart way
    useEffect(() => {
        const unsubcsribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })

        return () => {
            unsubcsribe();
        }
    }, [db])
    
    //More clean 'return'
    useEffect(() => {
        const unsubcsribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })

        return unsubcsribe();
    }, [db])

    //we can attach 'return' directly
    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {setPosts(snapshot.docs)})
    }, [db])

    //With inplicit return
    useEffect(() => 
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {setPosts(snapshot.docs)}
    ), [db])

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