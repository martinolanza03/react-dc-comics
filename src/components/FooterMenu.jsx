import FooterLogo from './FooterLogo.jsx'

export default function FooterMenu() {
    return (
        <div class='footer-bg'>
            <div class='container'>
                <div class="footer-menu">
                    <div class="footer-column">
                        <h3>DC COMICS</h3>
                        <ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>

                        <h3>SHOP</h3>
                        <ul>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h3>DC</h3>
                        <ul>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy (New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h3>SITES</h3>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-logo-container">
                    <FooterLogo />
                </div>
            </div>

        </div>

    );
}