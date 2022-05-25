import Navegador from "./Navegador";

export default function Layout({ children }) {

    return (
        <>
            <Navegador></Navegador>
            <main>{children}</main>
        </>
    )

}