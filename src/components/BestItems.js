import { useState, useEffect } from "react";
import getProducts from "./api";

export default function BestItems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await getProducts({
          page: 1,
          pageSize: 4,
          orderBy: "favorite",
        });
        setProducts(fetchedProducts);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <h1 className="bestProdListMsg">리스트 가져오는 중...</h1>;
  if (error) return <h1 className="bestProdListMsg">에러: {error}</h1>;

  return (
    <>
      <div className="itemsHead">
        <h2 className="itemsTitle">베스트 상품</h2>
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
