import Header from "./Header"

interface layoutProps {
    children: React.FC
} 

const Layout = ({ children }: layoutProps) => {
    return(
        <>
            <Header />
            {children}
        </>        
    )
}

export default Layout