export default function Card_text_but_img() {
  // khi ta chỉnh fontSize của chữ nhỏ ,to, và ta chỉnh col to nhỏ tương ứng ta được cái card co giản tùy ý
  return (

    <div className="container" >
      <div className="d-flex align-items-center row" >


        {/* chữ begin */}
        <div className="col-lg-6" style={{ fontSize: "20px", backgroundColor: "#ebe9eb" }}>

          <h1>
            You Got The Idea, We Got The Tools!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ultricies felis. In tempus id massa sit amet sagittis. Nullam aliquet fermentum velit, a blandit
          </p>
          <button type="button" style={{ color: "white" }} className="btn btn-dark mt-4">
            Read More
          </button>
        </div>
        {/* chữ end */}

        {/* hình begin */}
        {/* <div className="position-relative mt-4 mt-lg-0 col-lg-6"> */}
        <div className="position-relative col-6" style={{height: "600px"}}>

          {/* <div className="position-absolute col-4 ani_css">
            <img className="img_full" alt="" src="/home_pop/header-1.jpg" />
          </div> */}

          <div className="position-absolute col-5" style={{ top: "60px" }}>
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src="/home_pop/header-1.jpg" />
          </div>

          <div className="position-absolute col-4" style={{ left: "300px", top: "115px" }} >
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src="/home_pop/header-2-1.jpg" />
          </div>

          <div className="position-absolute col-8" style={{ left: "95px", top: "350px" }} >
            <img style={{ borderRadius: "5%" }} className="img_full" alt="" src="/home_pop/header-3-1.jpg" />
          </div>


          {/* <img className="img-fluid" alt="" src="/home_pop/wc-ban.png" /> */}
        </div>
        {/* hình end */}



      </div>

    </div>


  );

}