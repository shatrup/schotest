import React from "react";
const axios = require('axios');

class WebsiteFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    render() {

        var divstyle = {
            color: '#fdc800',
            fontSize: '2.5rem'
        };
        return (
            <footer className="footer">
                <div className="floating-container-triggerer" data-toggle="collapse" data-target="#floating-contact"
                    onclick="checkAndToggle(this)">
                    <p>
                        Contact Us
                    </p>
                    <i className="fa fa-caret-up fa-2x"></i>
                </div>
                <section className="collapse floating-contact" id="floating-contact">
                    <div className="contact-item">
                        <div className="contact-container">
                            <div className="heading-container">
                                <i className="fa fa-map-marker-alt"></i>
                                <h3>Address</h3>
                            </div>
                            <a href="https://goo.gl/maps/5d4SifsjuEv3A1yK6" className="description">
                                Plot No: 22-23, Hari Vihar, Opp Pillar No: 815, Sector 16A, Near Dwarka Metro Station, Delhi 110078.                </a>
                        </div>
                    </div>

                    <div className="vertical-line"></div>
                    <div className="vertical-line-middle"></div>
                    <div className="vertical-line-last"></div>

                    <div className="contact-item">
                        <div className="contact-container">
                            <div className="heading-container">
                                <i className="fa fa-phone fa-rotate-90"></i>
                                <h3>Phone</h3>
                            </div>
                            <p className="description">
                                +91 9315514145
                </p>
                        </div>
                    </div>

                    <div className="vertical-line"></div>
                    <div className="vertical-line-middle"></div>
                    <div className="vertical-line-last"></div>

                    <div className="contact-item">
                        <div className="contact-container">
                            <div className="heading-container">
                                <i className="fa fa-envelope"></i>
                                <h3>Mail</h3>
                            </div>
                            <p className="description">
                                Email: <a className="text-white" href="mailto:info@schotest.com">info@schotest.com</a>
                            </p>
                        </div>
                    </div>
                </section>

                <section id="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="footer-information">
                                    <h3 className="main-heading-style">
                                        Information
                        </h3>
                                    <p>At SchoTest, we provide ample opportunities to
                     unearth the latent potential of the students by aiding them financially and
                     academically through our "Scholars of India" initiative.
                     It is a scholarship programme whereby awards will be dispersed to classNamees
         from 5th to 12th in three different categories- District, State and National.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="footer-quick-links">
                                    <h3 className="main-heading-style">Quick Links</h3>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://schotest.com/">
                                                <i className="fa fa-angle-right"></i>
                                                Home
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/privacy-policy">
                                                <i className="fa fa-angle-right"></i>
                                                Privacy Policy
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/about-us">
                                                <i className="fa fa-angle-right"></i>
                                                About
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/contact">
                                                <i className="fa fa-angle-right"></i>
                                                Contact Us
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/blogs/0">
                                                <i className="fa fa-angle-right"></i>
                                                Blogs
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/faqs">
                                                <i className="fa fa-angle-right"></i>
                                                FAQs
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/bde-registration">
                                                <i className="fa fa-angle-right"></i>
                                                Career
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/gallery">
                                                <i className="fa fa-angle-right"></i>
                                                Gallery
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/refund-policy">
                                                <i className="fa fa-angle-right"></i>
                                                Refund Policy
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/terms-and-conditions">
                                                <i className="fa fa-angle-right"></i>
                                                Terms and Conditions
                                </a>
                                        </li>
                                        <li>
                                            <a href="https://schotest.com/team-members">
                                                <i className="fa fa-angle-right"></i>
                                                Team Members
                                </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="newsletter">
                                    <h3 className="main-heading-style">Newsletter</h3>

                                    <div className="newsletter-container">
                                        <p>Drop your e-mails, so that you don’t miss any important updates from SchoTest.</p>

                                        <form action="https://schotest.com/newsletter/add" className="newsletter-form" method="post" accept-charset="utf-8">
                                            <input type="hidden" name="csrf_test_name" value="23179180804827b1125d0fc297319bf7" />
                                            <input type="email" name="newsletter-email" id="newsletter-email"
                                                className="form-control newsletter-input" placeholder="Enter Your Email Here"
                                                required />
                                            <button type="submit" className="btn btn-custom-warning custom-color-primary">
                                                <i className="fa fa-paper-plane"></i>
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="social-links">
                                    <h3 className="main-heading-style">
                                        Social Links
                        </h3>

                                    <ul className="list-unstyled links-container">
                                        <li>
                                            <a href="https://in.pinterest.com/schotest/">
                                                <i onmouseover="this.style.color='white'"
                                                    onmouseout="this.style.color='#fdc800'"
                                                    className="fa fa-pinterest-square"
                                                    style={divstyle}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/schotest/">
                                                <i onmouseover="this.style.color='white'"
                                                    onmouseout="this.style.color='#fdc800'"
                                                    className="fa fa-instagram"
                                                    style={divstyle}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UClAY5RqXRzVy9y436l1GikQ">
                                                <i onmouseover="this.style.color='white'"
                                                    onmouseout="this.style.color='#fdc800'"
                                                    className="fa fa-youtube"
                                                    style={divstyle}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/scho-test-a4b6b2165/">
                                                <i onmouseover="this.style.color='white'"
                                                    onmouseout="this.style.color='#fdc800'"
                                                    className="fa fa-linkedin"
                                                    style={divstyle}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://facebook.com/schotestbyshree">
                                                <i onmouseover="this.style.color='white'"
                                                    onmouseout="this.style.color='#fdc800'"
                                                    className="fa fa-facebook-square"
                                                    style={divstyle}></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://twitter.com/schotest">
                                                <i onmouseover="this.style.color='white'"
                                                    onmouseout="this.style.color='#fdc800'"
                                                    className="fa fa-twitter"
                                                    style={divstyle}></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="copyright-footer">
                    <div className="container">
                        <div className="content">
                            <p>&copy; 2019 SchoTest All Rights Reserved. Designed and Developed by
                    <a href="http://sjjs.in">
                                    S.J.J.S Pvt. Ltd.
                    </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        );
    }
}

export default WebsiteFooter;