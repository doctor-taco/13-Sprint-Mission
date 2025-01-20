import { useState, useEffect } from "react";
import getProducts from "./api";

function getDeviceWidth(width) {
  if (width > 1199) return "desktop";
  if (width > 767) return "tablet";
  return "mobile";
}

export default function BestItems() {
  const [products, setProducts] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(() =>
    getDeviceWidth(window.innerWidth)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function handleResize() {
      const newDeviceWidth = getDeviceWidth(window.innerWidth);
      setDeviceWidth((prevDeviceWidth) => {
        if (prevDeviceWidth !== newDeviceWidth) {
          return newDeviceWidth;
        }
        return prevDeviceWidth;
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        let pageSize;

        switch (deviceWidth) {
          case "desktop":
            pageSize = 4;
            break;
          case "tablet":
            pageSize = 2;
            break;
          case "mobile":
            pageSize = 1;
            break;
          default:
            pageSize = 4;
        }

        const { list } = await getProducts({
          page: 1,
          pageSize,
          orderBy: "favorite",
        });

        setProducts(list);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [deviceWidth]);

  if (loading)
    return <h1 className="bestProdListMsg">리스트 가져오는 중...</h1>;
  if (error) return <h1 className="bestProdListMsg">에러: {error}</h1>;

  return (
    <>
      <div className="itemsHead" id="itemsHeadBest">
        <h2 className="itemsTitle" id="itemsTitleBest">
          베스트 상품
        </h2>
      </div>
      <div className="itemsBest">
        <ul className="bestProdList">
          {products.map((product) => {
            const { id, images, name, price, favoriteCount } = product;

            return (
              <li key={id}>
                <div className="prodListItem">
                  <div className="prodListItem-ImgHolder">
                    <img
                      className="prodListItem-Img"
                      src={images[0]}
                      alt={name}
                    />
                  </div>
                  <div className="prodListItem-Name">{name}</div>
                  <div className="prodListItem-Price">{price}원</div>
                  <div className="prodListItem-FavCount">
                    <div className="prodListItem-FavIco" />
                    {favoriteCount}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
