import "../styles/style.css";
import Hero from "../images/Img_home_top.svg";
import HotItem from "../images/Img_home_01.svg";
import Search from "../images/Img_home_02.svg";
import Register from "../images/Img_home_03.svg";
import Bottom from "../images/Img_home_bottom.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <div className="heromain">
            <img className="heromain-img" src={Hero} alt="Heromain" />
            <h1 className="heromain-phrase">
              일상의 모든 물건을 <br />
              거래해 보세요
            </h1>
            <a className="heromain-link" href="/items">
              <button className="heromain-btn">구경하러 가기</button>
            </a>
          </div>
        </div>
        <section className="hotitem">
          <img className="box-img" src={HotItem} alt="Hot Item" />
          <div className="box-txt">
            <h2 className="box-txt-1">Hot Item</h2>
            <h3 className="box-txt-2">
              인기 상품을 <br />
              확인해 보세요
            </h3>
            <p className="box-txt-3">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </section>
        <section className="search">
          <img className="box-img" src={Search} alt="Search" />
          <div className="box-txt">
            <h2 className="box-txt-1">Search</h2>
            <h3 className="box-txt-2">
              구매를 원하는 <br />
              상품을 검색하세요
            </h3>
            <p className="box-txt-3">
              구매하고 싶은 물품을 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </section>
        <section className="register">
          <img className="box-img" src={Register} alt="Register" />
          <div className="box-txt">
            <h2 className="box-txt-1">Register</h2>
            <h3 className="box-txt-2">
              판매를 원하는 <br />
              상품을 등록하세요
            </h3>
            <p className="box-txt-3">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </section>
        <section className="bottom">
          <div className="bottom-wrap">
            <h2 className="bottom-phrase">
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
            <img className="bottom-img" src={Bottom} alt="" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
