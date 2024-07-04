import Footer from "./Footer";
import Navigation from "./Navigation";
import ProductList from "./Productlist";
import Welcome from "./Welcome";

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Welcome></Welcome>
            <ProductList></ProductList>
            <Footer></Footer>
        </>
    )
}

export default Home;
