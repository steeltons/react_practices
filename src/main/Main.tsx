import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Content from "./components/Content"
import Gallery from "./components/Gallery"

const Main = () => {
    return (
        <div>
            <Navbar active="1"/>
            <Gallery />
            <Content />
            <Footer />
        </div>
    )
}

export default Main