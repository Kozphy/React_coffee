import React from "react";
import "../stylesheet/footer.css";
import silver from "../image/footer/certifications.webp";

export default Footer;

let iframe_style = {
  border: 0,
};

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="footer-title">
              <h3 className="text-center romantic-text hr-sect">FeFe</h3>
            </div>
            <img className="w-100 footer-img" src={silver} alt="silver" />
          </div>
          <div className="col-3 footer-spirit">
            <div className="footer-title">
              <h3 className="text-center hr-sect">核心精神</h3>
            </div>
            <div className="footer-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                natus nesciunt sit, impedit veritatis voluptas placeat aliquam
                fuga repellat sed eos, suscipit facere mollitia. Cum, dolorem!
                Fuga iste enim sunt!
              </p>
            </div>
          </div>
          <div className="col-3 footer-contact justify-content-center">
            <div className="footer-title">
              <h3 className="text-center hr-sect">聯繫我們</h3>
            </div>
            <div className="footer-content">
              <p>電話: 09-68854232</p>
              <p>傳真: 04-25693154</p>
              <p>信箱: fiejwh@gmail.com</p>
              <p>Line: @ioki</p>
            </div>
          </div>
          <div className="col-3 footer-operation-info">
            <div className="footer-title">
              <h3 className="text-center hr-sect">營業資訊</h3>
            </div>
            <div className="footer-content">
              <p>周一 ~ 周五: 10:00 ~ 17:30</p>
              <p>周六: 8:30 ~ 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
