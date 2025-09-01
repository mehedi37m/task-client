import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Featured from "../Featured/Featured";



const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Fast Food | Home</title>
      </Helmet>
            <Banner></Banner>
            <Features></Features>
            <Featured></Featured>
           
           
        </div>
    );
};

export default Home;