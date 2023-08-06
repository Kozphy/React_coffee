import React from "react";
import "../../stylesheet/Home/category.css";
import boutique_coffee from "../../image/index/product/boutique_coffee.webp";
import coffee_beans from "../../image/index/product/coffee-beans.jpg";
import coffee_around from "../../image/index/product/cup.jpg";
import margaret from "../../image/index/product/Margaret.jpg";
import handling_method from "../../image/index/product/handling_method.webp";

export default Category;

const category_content_1 = {
  backgroundColor: "#ccc",
};

function Category() {
  return (
    <section className="category">
      <div className="container">
        <div className="row">
          <div className="category-title col-12 col-md-1 order-1">
            <h2 className="category-title-content">產品種類</h2>
          </div>
          <div className="row col-12 col-md-12 order-2">
            <div className="col-12 col-md-4">
              <div
                className="category-content category-content-1"
                style={category_content_1}
              >
                <img
                  className="category-img"
                  src={boutique_coffee}
                  alt="boutique_coffee"
                />
                <div className="category-img-text">
                  <p>精品咖啡</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="category-content category-content-2">
                <img
                  className="category-img"
                  src={coffee_beans}
                  alt="coffee_beans"
                />
                <div className="category-img-text">
                  <p>咖啡豆</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="category-content category-content-3">
                <img className="category-img" src={coffee_around} alt="cup" />
                <div className="category-img-text">
                  <p>咖啡周邊</p>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-around">
              <div className="col-12 col-md-4">
                <div className="category-content category-content-4">
                  <img className="category-img" src={margaret} alt="margaret" />
                  <div className="category-img-text">
                    <p>產地</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="category-content category-content-5">
                  <img
                    className="category-img"
                    src={handling_method}
                    alt="handling method"
                  />
                  <div className="category-img-text">
                    <p>處理手法</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
