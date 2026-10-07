import FormNews from "../../components/newsManagement/formNews/FormNews"
import ListNews from "../../components/newsManagement/newsList/NewsList"
import Header from "../../layouts/privateLayout/header/Header"
import Footer from "../../layouts/privateLayout/footer/Footer"

function PanelAdmin() {
    return (
        <>
            <Header user="Administrador: "/>
            <main>
                <FormNews />
            </main>
            <Footer />
        </>
    )
}

export default PanelAdmin