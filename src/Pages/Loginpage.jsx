
import { useState } from "react";

const initCredential = { email: "", password: "", confirm_password: "" };



// onSubmit={handleFormSubmit}
export default function Loginpage() {
  const [credential, setCredential] = useState(initCredential);

  const [islogin, setislogin] = useState(false);

  const [isemailexists, setisemailexists] = useState(false);

  const [ispass_true, setispass_true] = useState(false);
  
  // đây là sự kiện nhấp chuột vào input mỗi khi giá trị thay đổi nó gọi hàm này
  const handleInputChange = (event) => {
    setislogin(false)

    setisemailexists(false)
    setispass_true(false)
    //  console.log( event.target.name+"//"+event.target.value);
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };
  // đây là sự kiện nhấp chuột vào input mỗi khi giá trị thay đổi nó gọi hàm này


  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(credential.email + "//" + credential.password  + "//" + credential.confirm_password) 
      const checkemail = async () => {
        const url_login = "https://tuongdoirong.com/api/node.php?f=outdata&up_gt=SELECT email FROM login WHERE email='"+credential.email+"'&cot=email&database=mindx"
        const response = fetch(url_login);
        response.then((response) => response.json()).then((data) => {
          // check call API email

          if ( data.kq == "0" ){ 


            //  alert("không tồn tại email trên dataasse")  
            setisemailexists(true)

          }
          else{
            // setisemailexists(true)
            //alert(" email trên dataasse đã tồn tại")  ;

            const get_pass = async () => {
                const url_get_pass = "https://tuongdoirong.com/api/node.php?f=outdata&up_gt=SELECT password FROM login WHERE email='"+credential.email+"'&cot=password&database=mindx";
                const response = fetch(url_get_pass);
                response.then((response) => response.json()).then((data) => {
                    console.log("data fetch", data.kq);
                    // check pass đúng sai
                    if (data.kq == credential.password ){
                      //alert("pass đúng")
                      setislogin(true)
                      setispass_true(false)
                    }
                    else{
                   
                     // alert("pass sai")
                     setispass_true(true)

                    }
                
                });;
              };
              
              get_pass();



          }
          // console.log("data fetch", data.kq);
        
        
        });;
      };
      
      checkemail();

    

    // TODO: call API để login
    // sau khi nhấp chuột vào button để đăng ký tài khoản thì nó gọi hàm này sau khi kiểm tra
    // định dạng email có phù hợp hay không
    // các giá trị nhận được là : credential.email   và  credential.password
  
  };



  return (
    <div className="container d-flex align-items-center justify-content-center mt-5" >

      <div className="row" style={{ width: "400px" }}>
        <div className="">
          <form onSubmit={handleFormSubmit} >
            <div style={{ width: "400px", height: "200px" }}>
              <img
                className="mb-4 logo" style={{ width: "100%", height: "100%" }}
                src="https://mindx.vn/images/logo.png"
                alt=""
              />
            </div>
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>

            {isemailexists && (<h1 className="" style={{color: "red"}}>Email does not exist</h1>)}

            <div className="form-floating">
              <input
                required
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={credential.email}
                name="email"
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>



            <div className="form-floating mt-4">


              <input
                required
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={credential.password}
                name="password"
                onChange={handleInputChange}
              />

              <label htmlFor="floatingPassword">Password</label>
            </div>

    
            {islogin && (<div style={{textAlign: "center" ,fontSize: "40px" , color: "blue"}}>
            Successful login
            </div>)}

            {ispass_true && (<div style={{ color: "red"}}>
            Incorrect password
            </div>)}

            <button className="mt-4 w-100 btn btn-lg btn-primary" type="submit">
             Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
