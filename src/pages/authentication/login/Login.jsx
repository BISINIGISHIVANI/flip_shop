import "../authentication.css";
import { Link,useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/navabar";
import { useAuth } from "../../../hooks/context/auth-context";
import axios from "axios";
import { useState } from "react";
import { toast } from "material-react-toastify";
export default function LoginPage() {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const guestUser = {
    email: "bharathKumar@gmail.com",
    password: "bharath444"
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUser);
  };
  const loginHandler = async () => {
    try {
      const response = await axios.post("/api/auth/login", user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));

        authDispatch({
          type: "LOGIN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken
          }
        });
        navigate("/");
      } else if (response.status === 404) {
        toast.info("Email not found");
      } else if (response.status === 401) {
        toast.warning("Wrong Password");
      } else if (response.status === 500) {
        toast.error("Server Error");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const checkInputsAreNotEmpty = (user) => {
    for (let key in user) {
      if (!Boolean(user[key])) {
        return false;
      }
    }
    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!checkInputsAreNotEmpty(user)) {
      toast.error("feild are not empty");
    } else {
      loginHandler(user, authDispatch, navigate);
    }
  };
  return (
    <>
      <NavBar />
      <div className="loginbox-align">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={changeHandler}
              />
              <label>Email address </label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={changeHandler}
              />
              <label>Password</label>
            </div>
            <div className="password-box">
              <div className="div-inline">
                <div className="password-save">
                  <input type="checkbox" name="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <Link to="/forgot-password">
                  <div className="forgot-pwd">
                    <span className="forgot-label">forgot password ?</span>
                  </div>
                </Link>
              </div>
              <button
                type="submit"
                className="login-submit"
                onClick={guestUserHandler}
              >
                Add Guest credentials
              </button>
              <button
                type="submit"
                className="login-submit"
                onClick={submitHandler}
              >
                Login
              </button>
              <Link to="/signup">
                <button className="create-account">Create New Account </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
