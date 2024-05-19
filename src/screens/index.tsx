import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import HowToBuy from "./HowToBuy";
import Gallery from "./Gallery";
import Claim from "./Claim";
import Staking from "./Staking";
import FAQ from "./FAQ";

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
    </Grid>
  );
};

export default Home;
