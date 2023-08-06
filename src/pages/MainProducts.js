// css
import "../stylesheet/MainProducts/product-content.css";

// react componenet
import Product from "./MainProducts/Product";
import AsideFilter from "./MainProducts/AsideFilter";
import PaginationExample from "./MainProducts/Pagination";
import SearchBar from "./MainProducts/Search";
import { Provider } from "./MainProducts/ProdcutsContext";

export default MainProducts;

function MainProducts() {
  return (
    <Provider>
      <section className="content pt-5">
        <div className="container">
          <div className="row">
            <AsideFilter />
            <section className="products col-sm-9 ">
              <SearchBar />
              <div className="row g-3 overflow-hidden pb-3">
                <Product />
              </div>
              <div className="pagination d-flex justify-content-center">
                <PaginationExample />
              </div>
            </section>
          </div>
        </div>
      </section>
    </Provider>
  );
}
