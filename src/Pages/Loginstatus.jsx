import { Link } from "react-router-dom";
import { useContext } from "react";
import { IsloginContext } from "./IsloginContext"; //haixoa
import imglogin from "../loginpage/loginpage.png";

export default function Loginstatus() {
  const { Vislogin, setVislogin } = useContext(IsloginContext);
  const logout_set = () => {
    setVislogin(false);
  };
  //   setVislogin_prop();
  // console.log("Vislogin");
  // console.log(Vislogin);

  return (
    <>
      <div
        className="d-flex mb-2"
        style={{ gap: "5px", justifyContent: "flex-end", alignItems: "center" }}
      >
        <div>
          {!Vislogin && (
            <div
              className="btn btn-dark me-2"
          
            >
              <Link className="text-decoration-none" to="/react_baicuoikhoa/register" style={{ color: "white" }}>
                Register
              </Link>
            </div>
          )}
        </div>

        <div>
          {!Vislogin && (
            <div
              className="btn btn-dark"
            >
              <Link to="/react_baicuoikhoa/login" className="text-decoration-none" style={{ color: "white" }}>
                Login
              </Link>
            </div>
          )}

          {Vislogin && (
            <div
              className="btn"
              style={{ backgroundColor: "black" }}
            >
              <Link onClick={logout_set} style={{ color: "white" }}>
                Logout
              </Link>
            </div>
          )}
        </div>

        {Vislogin && (
          <div style={{ width: "50px", height: "50px" }}>
            <img className="img-fluid" alt="" src={imglogin} />
          </div>
        )}
      </div>
    </>
  );
}
