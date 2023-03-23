import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import "./AllProducts.css";
import { products } from "./data";
import { Context } from "../../Context/Context";
import productImg3 from "../../productimg/wc-12-300x300.png";
import productImg4 from "../../productimg/wc-18-300x300.png";
import productImg6 from "../../productimg/wc-img-1-300x300.png";
import productImg7 from "../../productimg/wc-19-300x300.png";
import allProduct from "../AllProducts/all-category.jpg";
import { color, style } from "@mui/system";
import { yellow } from "@mui/material/colors";
function DecorationCategory() {
  //Scroll to top each Page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {
    addToCart,
    FaStar,
    StarRating,
    onChangeSortFurniture,
    ItemDeco,
    ItemFrame,
    ItemFuniture,
    displayPageFurniture,
  } = useContext(Context);

  return (
    <div className="bg-body-tertiary">
      <div className="d-flex container pb-3 css_res_contain">

        <div className="mt-5 pe-5 pb-5 css_res_contain_allpro">
          <div className="d-flex">
            <div>
              {/* Link to <HomePage/> */}
              <Link to="/react_baicuoikhoa/" className="nav-link active fs-5">
                Home&nbsp;/&nbsp;
              </Link>
            </div>

            {/* Link to <AllProducts/> */}
            <Link to="/react_baicuoikhoa/all-products" className="nav-link active fs-5">
              All Products&nbsp;/&nbsp;
            </Link>

            <div className="fw-semibold fs-5"> Furniture </div>
          </div>
          <h1 className="mt-3">Furniture</h1>
          <div className="d-flex justify-content-end">
            <form className="woocommerce-ordering" method="get">
              <select
                onChange={(value) => onChangeSortFurniture(value)}
                name="orderby"
                className="form-select"
                aria-label="Shop order"
                fdprocessedid="h8ennj"
              >
                <option value="default">No sorting</option>
                <option value="low-price">Sort by price: low to high</option>
                <option value="high-price">Sort by price: high to low</option>
                <option value="rating">Sort by rating: highest</option>
                <option value="ASC">Sort by name: A to Z</option>
                <option value="DSC">Sort by name: Z to A</option>
              </select>
              <input type="hidden" name="paged" value="1"></input>
            </form>
          </div>

          <div>
            <div className="row">
              {/* Display Items in Funiture Category */}
              {displayPageFurniture.map((product) => (
                <div className="col-4 g-2" key={product.id}>
                  <Link to={`/react_baicuoikhoa/products/${product.id}`}>
                    {" "}
                    <img className="product-img mt-3" src={product.img}></img>
                  </Link>


                  <div className="nav-linkfw-semibold mt-3 mb-1 res_css_tex" > 
                  <Link to={`/react_baicuoikhoa/products/${product.id}`} className="fw-bold" style={{color: "black" }}
                  >
                    {`${product.name}`}
                  </Link>
                  </div>



                  <StarRating value={product.rating} />
                  <div className="d-flex mt-3">
                    <div className="text-decoration-line-through me-2 text-body-tertiary">
                      ${product.originPrice}.00
                    </div>{" "}
                    <div className="fw-semibold"> ${product.price}.00 </div>
                  </div>

                  <div
                    onClick={() => addToCart(product.id)}
                    className="btn btn-dark mt-3"
                  >
                    Add to Cart
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="css_res_contain_allphai h-50 p-4 mt-5 bg-body">
          <h4> Categories</h4>

          {/* Link to <AllProducts /> */}
          <Link to="/react_baicuoikhoa/all-products" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-4 border-bottom pb-3"
            >
              <img className="w-25" src={allProduct}></img>
              <p style={{ fontSize: 17 }} className="ms-3 mt-2">
                {" "}
                ALL ({products.length}){" "}
              </p>
            </div>
          </Link>

          {/* Link to <DecorationCategory /> */}
          <Link to="/react_baicuoikhoa/all-products/decoration" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-3 border-bottom pb-3"
            >
              <img className="w-25" src={productImg6}></img>
              <p style={{ fontSize: 17 }} className="ms-3 mt-2">
                {" "}
                Decoration ({ItemDeco.length}){" "}
              </p>
            </div>
          </Link>

          {/* Link to <FramePosterCategory /> */}
          <Link to="/react_baicuoikhoa/all-products/frame&poster" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-3 border-bottom pb-3"
            >
              <img className="w-25" src={productImg4}></img>
              <p style={{ fontSize: 17 }} className="ms-3 mt-2">
                {" "}
                Frames & Posters ({ItemFrame.length}){" "}
              </p>
            </div>
          </Link>

          {/* Link to <FurnitureCategory /> */}
          <Link to="/react_baicuoikhoa/all-products/furniture" className="nav-link">
            <div
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center mt-3 border-bottom pb-3"
            >
              <img className="w-25" src={productImg3}></img>
              {/* Hover category semibold in aside */}
              <p style={{ fontSize: 17 }} className="ms-3 mt-2 fw-semibold">
                {" "}
                Furniture ({ItemFuniture.length}){" "}
              </p>
            </div>
          </Link>

          <h4 className="form-label mt-4">Most Popular Products</h4>
          {/* Link to <ProductDetails /> Item ID = 3 */}
          <Link className="nav-link" to="/react_baicuoikhoa/products/3">
            <div className="d-flex align-items-center flex-column mt-4 border-bottom">
              <img className="w-50" src={productImg3}></img>
              <h5 style={{ fontSize: 17 }} className="d-flex mt-2">
                {" "}
                Modern Wooden Chair
              </h5>
              <p style={{ fontSize: 17 }}>
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
              </p>
              <p>$14.00</p>
            </div>
          </Link>

          {/* Link to <ProductDetails /> Item ID = 4 */}
          <Link className="nav-link" to="/react_baicuoikhoa/products/4">
            <div className="d-flex align-items-center flex-column mt-4 pb-3">
              <img className="w-50" src={productImg4}></img>
              <h5 style={{ fontSize: 17 }} className="d-flex mt-2">
                Simple Frame
              </h5>
              <p style={{ fontSize: 17 }}>
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
              </p>
              <div>$19.00</div>
            </div>
          </Link>
        </aside>

      </div>
    </div>
  );
}

export default DecorationCategory;
