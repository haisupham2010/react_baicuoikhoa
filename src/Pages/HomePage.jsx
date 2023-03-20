import { useEffect} from "react";
import PopularProducts from "./PopularProducts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TolinkB from "./TolinkB";
import Aboutus from "./Aboutus";


import { AuthProvider } from "./AuthContext";

import { TranslationProvider } from "./IsloginContext";
import { useState } from "react";

import Footer_inf from "./Footer_inf";
// import Footer from "./Footer";
import { products_home } from "./data";

export default function HomePage() {
  

  // fetch("https://tuongdoirong.com/node.php?f=outdata&up_gt=SELECT email FROM bangtao WHERE email='nguyen@gmail.com'&cot=email&database=bo_dem_ip").then((data) => {
  //   console.log("useEffects data", data);

  // });

  // const callapi = async() => {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon"); // khi ta gọi nhiều dòng ở đây thì nó sẽ theo trình tự đợi kết quả thằng này và sẽ tiếp chạy thằng kia
  //   const data = await response;
  
  // };

  //   const fetchPokemon = async () => {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  //   const data = await response.json();

  //   console.log("data fetch", data);
  // };
  const fetchPokemon = async () => {
    const response = await fetch("https://tuongdoirong.com/api/node.php?f=outdata&up_gt=SELECT email FROM bangtao WHERE email='nguyen@gmail.com'&cot=email&database=bo_dem_ip");
    const data = await response.json();
    // setPokemons(data.results);
    console.log("data fetch", data.kq);
  };


  useEffect(() => {

    fetchPokemon();

 }, []);

  return (


    <header>



      <div className="container" >



        <div className="row">




          <div className="position-relative col-12 mb-0 mb-lg-4">
            <div>
              <div className="position-absolute css_text_midle">
                <div className="TolinkA_1">Let’s Bring Beauty to Your Home</div>
                <div style={{ color: "white" }}>Fast Delivery & Fair Prices</div>
                <button type="button" className="btn btn-lg btn-primary mt-4 metqua">
                  Shop now
                </button>
              </div>
              <img className="img-fluid" alt="" src="/react_baicuoikhoa/home_pop/bg-img.png" />
            </div>
          </div>
          <div className="col-12 col-lg-4 mt-4 mt-lg-0">

            <div className="position-relative">

              <div>


                <div className="position-absolute css_text_midle">

                  <div style={{ color: "white", fontSize: 30, }}>Furniture</div>
                  <button type="button" style={{ color: "white" }} className="btn">
                    Shop Now {"->"}
                  </button>
                </div>

                <img className="img-fluid" alt="" src="/react_baicuoikhoa/home_pop/wc-12-1.png" />
              </div>



            </div>


          </div>
          <div className="col-12 col-lg-4  mt-4 mt-lg-0">


            <div className="position-relative">


              <div>
                <div className="position-absolute css_text_midle">

                  <div style={{ color: "white", fontSize: 30, }}>Decoration</div>
                  <button type="button" style={{ color: "white" }} className="btn">
                    Shop Now {"->"}
                  </button>
                </div>

                <img className="img-fluid" alt="" src="/react_baicuoikhoa/home_pop/decoration.png" />
              </div>

            </div>




          </div>
          <div className="col-12 col-lg-4  mt-4 mt-lg-0">



            <div className="position-relative">


              <div>
                <div className="position-absolute css_text_midle">

                  <div style={{ color: "white", fontSize: 30, }}>Posters</div>
                  <button type="button" style={{ color: "white" }} className="btn">
                    Shop Now {"->"}
                  </button>
                </div>

                <img alt="" className="img-fluid" src="/react_baicuoikhoa/home_pop/posters.png" />
              </div>

            </div>





          </div>

        </div>






        <div className="d-flex justify-content-between mt-4">
          <div className="tex_pop" >
            <p style={{ fontSize: 30, marginBottom: "0px" }}>Popular Products</p>
          </div>

          <div>
            <button type="button" style={{ color: "white" }} className="btn btn-dark mt-4">
              View All Products
            </button>
          </div>
        </div>

        {/* Popular_Products_dis begin */}
        {/* <div className="Popular_Products_dis"> */}
        <div className="row">




          {products_home.map((item) => (

            <PopularProducts
              key={item.id}
              keys={item.id}
              img_pop={item.img_pop}
              name_pop={item.name_pop}
              price_pop={item.price_pop}
            />

          ))}


        </div>
        {/* Popular_Products_dis end */}



      </div>



      {/* service begin */}
      <div className="bg-dark-subtle d-flex justify-content-around service_css" >

        <div className="col-4 text-center" >
          <div className="css_midle_com">


            <div className="circle_blue">
              <FontAwesomeIcon icon="fa-solid fa-life-ring" size="2x" />

            </div>

          </div>

          <div style={{ fontWeight: "bold", fontSize: 20 }} >
            Secure Payment
          </div>

          <div >
            Lorem ipsum dolor sit amet simet el.
          </div>
        </div>




        <div className="col-4 text-center" >
          <div className="css_midle_com">


            <div className="circle_blue">

              <FontAwesomeIcon icon="fa-solid fa-truck-fast" size="2x" />
            </div>

          </div>

          <div style={{ fontWeight: "bold", fontSize: 20 }} >
            Express Shipping
          </div>

          <div >
            Lorem ipsum dolor sit amet simet el.
          </div>
        </div>


        <div className="col-4 text-center" >
          <div className="css_midle_com">


            <div className="circle_blue">


              <FontAwesomeIcon icon="fa-solid fa-shield-halved" size="2x" />
            </div>

          </div>

          <div style={{ fontWeight: "bold", fontSize: 20 }} >
            Customer Support
          </div>

          <div >
            Lorem ipsum dolor sit amet simet el.
          </div>
        </div>


      </div>
      {/* service begin */}


      <div className="d-flex container note_sv" >
        <div className="row" style={{ alignContent: "center" }}>

          <div className="col-lg-6">
            <p>
              Our Values
            </p>
            <h2>
              Carefully Selected Products
            </h2>
            <p>
              Malesuada fames ac turpis egestas integer eget aliquet nibh. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. alesuada fames ac turpis egestas integer eget aliquet nibh. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
            </p>
            <button type="button" style={{ color: "white" }} className="btn btn-dark mt-4">
              Read More
            </button>
          </div>

          <div className="position-relative mt-4 mt-lg-0 col-lg-6">


            <img className="img-fluid img_full" alt="" src="/react_baicuoikhoa/home_pop/wc-ban.png" />
          </div>


        </div>

      </div>


      <div className="d-flex bg-dark-subtle testimonials_res" style={{ alignItems: "center" }}>
        <div className="container">

          <div className="text-center" >
            Testimonials
          </div>
          <h1 className="text-center">
            What Our Customers Say
          </h1>

          <div className="row" >


            <TolinkB
              color_bg={"bg-white"}
              text_infor={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
              img_pop={"/react_baicuoikhoa/home_pop/peter.png"}
              name_pop={"Peter"}
              profession={"Smith"}
              color_tex={"testimonials_c1"}
            />

            <TolinkB
              color_bg={"bg-black"}
              text_infor={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
              img_pop={"/react_baicuoikhoa/home_pop/portrait.png"}
              name_pop={"Oliver"}
              profession={"OliverPeterson"}
              color_tex={"testimonials_c2"}
            />

            <TolinkB
              color_bg={"bg-white"}
              text_infor={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
              img_pop={"/react_baicuoikhoa/home_pop/portrait_p.png"}
              name_pop={"Jane"}
              profession={"Doe"}
              color_tex={"testimonials_c1"}
            />

          </div>
        </div>

      </div>



      {/* <Footer /> */}






    </header>


  );
}
