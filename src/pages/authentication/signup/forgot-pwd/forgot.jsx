import "../../../authentication/authentication.css";
import { Link } from "react-router-dom";
export default function ForgotPage() {
  return (
    <div className="loginbox-align">
      <div className="login-box">
        <h2>Forgot Password</h2>
        <form>
          <div className="user-box">
            <input type="email" name="useremail" />
            <label>Email address </label>
          </div>
          <div className="password-box">
            <button type="submit" className="login-submit">
              submit
            </button>
            <Link to="/signup">
            <button className="create-account">Create New Account </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
