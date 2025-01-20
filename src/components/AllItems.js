import { useState, useEffect } from "react";
import getProducts from "./api";
import ToPrevImg from "../images/arrow_left.svg";
import ToNextImg from "../images/arrow_right.svg";

function getDeviceWidth(width) {
  if (width > 1199) return "desktop";
  if (width > 767) return "tablet";
  return "mobile";
}

export default function AllItems() {
  const [products, setProducts] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(() =>
    getDeviceWidth(window.innerWidth)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
            pageSize = 10;
            break;
          case "tablet":
            pageSize = 6;
            break;
          case "mobile":
            pageSize = 4;
            break;
          default:
            pageSize = 10;
        }

        const { list, totalCount } = await getProducts({
          page: currentPage,
          pageSize,
          orderBy: "recent",
        });

        setProducts(list);
        setTotalPages(Math.ceil(totalCount / 10));
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, deviceWidth]);

  if (loading) return <h2 className="allProdListMsg">리스트 가져오는 중...</h2>;
  if (error) return <h2 className="allProdListMsg">에러: {error}</h2>;

  const handlePageNumClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function getPageNums(currentPage, totalPages) {
    let pagination1stBtn = currentPage - 2;
    let pagination5thBtn = currentPage + 2;

    if (totalPages <= 5) {
      pagination1stBtn = 1;
      pagination5thBtn = totalPages;
    } else {
      if (pagination1stBtn < 1) {
        pagination1stBtn = 1;
        pagination5thBtn = 5;
      }
      if (pagination5thBtn > totalPages) {
        pagination1stBtn = totalPages - 4;
        pagination5thBtn = totalPages;
      }
    }

    const pages = [];

    for (let i = pagination1stBtn; i <= pagination5thBtn; i++) {
      pages.push(i);
    }

    return pages;
  }

  const pageNums = getPageNums(currentPage, totalPages);

  return (
    <>
      <div className="itemsHead" id="itemsHeadAll">
        <h2 className="itemsTitle" id="itemsTitleAll">
          전체 상품
        </h2>
        <div className="itemHead-Right">
          <span className="searchInAllItems">
            <input
              className="searchInput"
              placeholder="검색할 상품을 입력해주세요"
            />
          </span>
          <button className="regProdBtn">상품 등록하기</button>
          <select className="sortOrdSel">
            <option>최신순</option>
            <option>좋아요순</option>
          </select>
        </div>
      </div>
      <div className="itemsAll">
        <ul className="allProdList">
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
      <div className="allItemsPagination">
        <button onClick={handleToPrevPage} disabled={currentPage === 1}>
          <img src={ToPrevImg} alt="" />
        </button>
        {pageNums.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageNumClick(pageNum)}
            className={currentPage === pageNum ? "active" : ""}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={handleToNextPage}
          disabled={currentPage === totalPages}
        >
          <img src={ToNextImg} alt="" />
        </button>
      </div>
    </>
  );
}
