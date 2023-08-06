import React from "react";
import "../../stylesheet/Home/news.css";
import lotteryMug from "../../image/index/news/lottery-mug.jpg";
import lottery2 from "../../image/index/news/lottery2.jpg";
import bigNews from "../../image/index/news/big_news.jpg";

export default News;
function News() {
  return (
    <section className="news-section">
      <div className="news-title">最新消息</div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-slide="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-3">
                <img
                  src={lotteryMug}
                  className="d-block w-100"
                  alt="lottery-mug"
                />
              </div>
              <div className="col-9">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, illo rem. Perferendis beatae et repellat, placeat
                  provident iusto. Exercitationem quasi vel eius architecto
                  alias. Magnam culpa porro neque ipsum numquam.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
                <img src={lottery2} className="d-block w-100" alt="lottery2" />
              </div>
              <div className="col-9">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  dolor aperiam ipsum eligendi modi magnam ratione ipsam nisi,
                  tempore et, incidunt sit pariatur quidem provident, sequi
                  adipisci! Assumenda, aliquid quae!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
                <img src={bigNews} className="d-block w-100" alt="big_news" />
              </div>
              <div className="col-9">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quod accusamus alias cumque, quos repudiandae
                  quam earum, atque libero ullam adipisci quibusdam blanditiis
                  similique sunt excepturi enim officia beatae hic?
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
