import "../styles/ItemsPage.css";
import Header from "../components/Header";
import BestItems from "../components/BestItems";
import AllItems from "../components/AllItems";
import Footer from "../components/Footer";

export default function Items() {
  return (
    <>
      <Header />
      <BestItems />
      <AllItems />
      <Footer />
    </>
  );
}
