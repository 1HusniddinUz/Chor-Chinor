import React, { useState } from "react";
import "./MainProducts.css";
import "./responsive/MainProductMedia.css"
import img1 from "./img/img1.png"
import img2 from "./img/dining.png"
import img3 from "./img/image 2.png"
import img4 from "./img/image 3 (2).png"
import img5 from "./img/image 4.png"
import img6 from "./img/image 5.png"
import img7 from "./img/image 7.png"
import img8 from "./img/image 8.png"




const Products = [
  {
    ProductImg: img1,
    ProductSaleBtn: "-30%",
    ProductName: "Mebel nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img2 ,
    ProductSaleBtn: "-40%",
    ProductName: "Mebel nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img3 ,
    ProductSaleBtn: "-30%",
    ProductName: "Mebel nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img4 ,
    ProductSaleBtn: "-40%",
    ProductName: "Mebel nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img5 ,
    ProductSaleBtn: "-30%",
    ProductName: "Mebel nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img6 ,
    ProductSaleBtn: "-40%",
    ProductName: "Mebel nomi 2",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img7 ,
    ProductSaleBtn: "-30%",
    ProductName: "Mebel nomi",
    ProductTitle: "///",
    ProductPrice: "Narxi sum/$",
    ProductSale: "Oldingi narxi sum/$",
  },
  {
    ProductImg: img8 ,
    ProductSaleBtn: "-40%",
    ProductName: "Mebel nomi 2",
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
              <img src={item.ProductImg} alt="Modern Furniture  " />
              {/*<button>{item.ProductSaleBtn}</button>*/}
              <h3>{item.ProductName}</h3>
              {/*<p>{item.ProductTitle}</p>*/}
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