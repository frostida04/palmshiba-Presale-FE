import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import HowToBuy from "./HowToBuy";
import Gallery from "./Gallery";
import Claim from "./Claim";
import Staking from "./Staking";
import FAQ from "./FAQ";
import Footer from "./Footer";
import BackgroundMask_1 from "../components/BackgroundMask_1";
import BackgroundMask_2 from "../components/BackgroundMask_2";
import BackgroundMask_3 from "../components/BackgroundMask_3";

const Home = () => {
  return (
    <Grid className="w-full h-full bg-[#04011C]">
      <Header />
      <Hero />
      <AboutUs />
      <HowToBuy />
      <Gallery />
      <Claim />
      <Staking />
      <FAQ />
      <Footer />
      <BackgroundMask_1 />
      <BackgroundMask_2 />
      <BackgroundMask_3 />
    </Grid>
  );
};

export default Home;
