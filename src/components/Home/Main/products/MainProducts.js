import React, { useState } from "react";
import "./MainProducts.css";
import "./responsive/MainProductMedia.css"

const Products = [
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-30%",
    ProductName: "Shirinlik nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: "https://i.ibb.co/xfNRgmQ/",
    ProductSaleBtn: "-40%",
    ProductName: "Shirinlik nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  // Boshqa mahsulotlar...
];

const MainProducts = () => {
  const [visibleCards, setVisibleCards] = useState(8); // Dastlabki ko'rinadigan mahsulotlar soni

  // Show More funksiyasi
  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 8, Products.length)); // Har safar 8 tadan ko'rsatadi
  };

  // All Close funksiyasi
  const handleAllClose = () => {
    setVisibleCards(8); // Faqat dastlabki 8 ta mahsulotni qaytaradi
  };

  return (
    <div id="MainProducts">
      <div className="container">
        <h1>Bizning Mahsulotlarimiz</h1>
        <div id="MainProducts-card">
          {Products.slice(0, visibleCards).map((item, index) => (
            <div
              key={index}
              id="MainProducts-sBox">
              {/* Mahsulot kodlari o'zgartirilmagan */}
              <img src={item.ProductImg} alt="" />
              <button>{item.ProductSaleBtn}</button>
              {/*<h3>{item.ProductName}</h3>*/}
              <p>{item.ProductTitle}</p>
              <div id="Product-price">
                <h4>{item.ProductPrice}</h4>
                <strike>{item.ProductSale}</strike>
              </div>

              {/* Modalni yopish uchun element */}
              {/*<div id="MainProducts-bgBox">*/}
              {/*  <button id="MainProducts-bgBox-btn">Add to card</button>*/}
              {/*</div>*/}
            </div>
          ))}
        </div>

        {/* Tugmalar: Show More va All Close */}
        <div id="MainProducts-controls">
          {visibleCards < Products.length && (
            <button onClick={handleShowMore} id="MainProducts_btn">
              Ko'proq ko'rsatish
            </button>
          )}
              {visibleCards > 8 && (
            <button id="MainProducts_btn" onClick={handleAllClose} style={{ marginLeft: "20px" }}>
              Barchasini yopish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MainProducts;