export default function SocialFooter() {
    return (
        <div className="container ">
            <div className='footer-social'>
                <div className="footer-content">
                    <div className="footer-section">
                        <button className="signup-btn">SIGNUP NOW</button>
                    </div>
                    <div className="footer-section">
                        <h3 className="follow-title">FOLLOW US</h3>
                        <div className="social-icons">
                            <a href="#"><img src="../public/img/footer-facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="../public/img/footer-twitter.png" alt="Twitter" /></a>
                            <a href="#"><img src="../public/img/footer-youtube.png" alt="Youtube" /></a>
                            <a href="#"><img src="../public/img/footer-pinterest.png" alt="Pinterest" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}