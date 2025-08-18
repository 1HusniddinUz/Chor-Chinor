import React, { useState } from "react";
import "./MainProducts.css";
import "./responsive/MainProductMedia.css";
import { ShoppingCart } from "lucide-react"; // zamonaviy icon (lucide-react)

import img1 from "./img/1.jpg";
import img2 from "./img/6.jpg";
import img3 from "./img/23.jpg";
import img4 from "./img/2.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/12.jpg";
import img7 from "./img/8.jpg";
import img8 from "./img/14.jpg";

const Products = [
    {
        ProductImg: img1,
        ProductSaleBtn: "-30%",
        ProductName: "PORTA 37 VERALINGA",
        ProductPrice: "205$",
        ProductSale: "225$",
    },
    {
        ProductImg: img2,
        ProductSaleBtn: "-40%",
        ProductName: "Mebel majmuasi",
        ProductPrice: "120$",
        ProductSale: "130$",
    },
    {
        ProductImg: img3,
        ProductSaleBtn: "-30%",
        ProductName: "AKRIL 2 MODERN OQ VA QORA",
        ProductPrice: "450$",
        ProductSale: "500$",
    },
    {
        ProductImg: img4,
        ProductSaleBtn: "-40%",
        ProductName: "ALFA DUMONT 2 BROWN",
        ProductPrice: "380$",
        ProductSale: "400$",
    },
    {
        ProductImg: img5,
        ProductSaleBtn: "-30%",
        ProductName: "Mebel majmuasi",
        ProductPrice: "80$",
        ProductSale: "95$",
    },
    {
        ProductImg: img6,
        ProductSaleBtn: "-40%",
        ProductName: "CLASSIC 23 VIRGIN MAGIC FOG FACET",
        ProductPrice: "170$",
        ProductSale: "200$",
    },
    {
        ProductImg: img7,
        ProductSaleBtn: "-30%",
        ProductName: "AKRIL MODERN EDITION",
        ProductPrice: "460$",
        ProductSale: "490$",
    },
    {
        ProductImg: img8,
        ProductSaleBtn: "-40%",
        ProductName: "PORTA 29 VERALINGA",
        ProductPrice: "160$",
        ProductSale: "170$",
    },
];

const MainProducts = () => {
    const [visibleCards, setVisibleCards] = useState(8);
    const [cart, setCart] = useState([]); // Savatcha state

    // Savatchaga qo'shish
    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`${product.ProductName} savatchaga qo‘shildi!`);
    };

    // Show More funksiyasi
    const handleShowMore = () => {
        setVisibleCards((prev) => Math.min(prev + 8, Products.length));
    };

    // All Close funksiyasi
    const handleAllClose = () => {
        setVisibleCards(8);
    };

    return (
        <div id="MainProducts">
            <div className="container">
                {/* Sarlavha va savatcha */}
                <div className="products-header">
                    <h1>Bizning Mahsulotlarimiz</h1>
                    <div className="cart-info">
                        <ShoppingCart size={28} />
                        <span className="cart-count">{cart.length}</span>
                    </div>
                </div>

                {/* Cardlar */}
                <div id="MainProducts-card">
                    {Products.slice(0, visibleCards).map((item, index) => (
                        <div key={index} id="MainProducts-sBox">
                            {/*<div className="discount-badge">{item.ProductSaleBtn}</div>*/}
                            <img src={item.ProductImg} alt={item.ProductName} />
                            <h3>{item.ProductName}</h3>
                            <div id="Product-price">
                                <h4>{item.ProductPrice}</h4>
                                <strike>{item.ProductSale}</strike>
                            </div>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                <ShoppingCart size={18} /> Savatchaga
                            </button>
                        </div>
                    ))}
                </div>

                {/* Tugmalar */}
                <div id="MainProducts-controls">
                    {visibleCards < Products.length && (
                        <button onClick={handleShowMore} id="MainProducts_btn">
                            Ko'proq ko'rsatish
                        </button>
                    )}
                    {visibleCards > 8 && (
                        <button
                            id="MainProducts_btn"
                            onClick={handleAllClose}
                            style={{ marginLeft: "20px" }}
                        >
                            Barchasini yopish
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainProducts;
