import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-subhead">Get to know us</div>
            <div className="footer-sublist">
              <a href="sample.com">About us</a>
              <a href="sample.com">Career</a>
              <a href="sample.com">Gift a smile</a>
              <a href="sample.com">Press Release</a>
              <a href="sample.com">Shoppable Stories</a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-subhead">Let Us Help You</div>
            <div className="footer-sublist">
              <a href="sample.com">Payments</a>
              <a href="sample.com">Shipping</a>
              <a href="sample.com">Cancellation & Returns</a>
              <a href="sample.com">FAQ</a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-subhead">Policy</div>
            <div className="footer-sublist">
              <a href="sample.com">Return Policy</a>
              <a href="sample.com">Terms Of Use</a>
              <a href="sample.com">Privacy</a>
              <a href="sample.com">Security</a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-subhead">Social</div>
            <div className="footer-sublist">
              <a href="sample.com">Youtube</a>
              <a href="sample.com">FaceBook</a>
              <a href="sample.com">Twitter</a>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="footer-btm">
          <span> © 2022 Created with studyUI by Shivani.</span>
        </div>
      </div>
    </footer>
  );
}
