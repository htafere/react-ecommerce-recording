import React from 'react';
 const logoImg = {
     height: '70px',
     width: '250px'
 }
export default function Footer() {
    const imgBacaroo = '/img/bacarooBlue.png';
    const copyRightYear = new Date().getFullYear();
    return (
        <footer>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        {/* <img style={logoImg} src={imgBacaroo} /> */}
                        <hr className="light" />
                        <h5>Knowledge Sharing Sites</h5>
                        <hr className="light" />
                        <p><a href="https://stackoverflow.com/" target="_blank">Stack overflow</a></p>
                        <p><a href="https://www.quora.com/" target="_blank">Quora</a></p>
                        <p><a href="https://stackexchange.com/sites" target="_blank">Stack Exchange</a></p>
                        <p><a href="https://www.reddit.com/" target="_blank">Reddit</a></p>
                        <p><a href="https://triberr.com/" target="_blank">Triberr</a></p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h5>Web Hosts</h5>
                        <hr className="light" />
                        <p><a href="https://www.bluehost.com/" target="_blank">BlueHost</a></p>
                        <p><a href="https://www.greengeeks.com/web-hosting" target="_blank">GreenGeeks</a></p>
                        <p><a href="https://www.hostgator.com/" target="_blank">HostGator</a></p>
                        <p><a href="https://www.inmotionhosting.com/" target="_blank">InMotion Hosting</a></p>
                        <p><a href="https://www.ipage.com/" target="_blank">iPage</a></p>
                        <p><a href="https://www.siteground.com/" target="_blank">SiteGround</a></p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h5>Web Builders</h5>
                        <hr className="light" />
                        <p><a href="https://www.inmotionhosting.com" target="_blank">BoldGrid</a></p>
                        <p><a href="https://www.hostgator.com" target="_blank">GATOR Website Builder</a></p>
                        <p><a href="https://www.godaddy.com/" target="_blank">GoDaddy GoCentral</a></p>
                        <p><a href="https://www.websitebuilder.com/" target="_blank">WebsiteBuilder.com</a></p>
                        <p><a href="https://www.weebly.com/" target="_blank">Weebly</a></p>
                        <p><a href="https://www.wix.com/" target="_blank">Wix</a></p>
                        <p><a href="https://wordpress.com/" target="_blank">WordPress.com</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr className="light-100" />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-6">
                        &copy;{copyRightYear}, Bacaroo Software Solutions, Inc. All Rights Reserved |
                        <a href="disclaimer">Legal</a> |
                        <a href="privacy">Privacy</a>
                    </div>
                    <div className="col-6 text-center social padding">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
