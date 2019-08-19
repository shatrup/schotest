import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"


class SlideSchoolPage extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        var divstyle = {
            opacity: 1,
            width: '3240px'
        };
        var divstyle1 = {
            width: '270px'
        };
        return (
            <section id="schools">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="main-heading-style">
                                Schools
                            </h3>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="schools-container row flex-nowrap slick-initialized slick-slider">
                            <div className="slick-list draggable">
                                <div className="slick-track" style={divstyle}>
                                    <div className="col-sm-12 col-md-3 slick-slide slick-cloned" tabindex="-1" style={divstyle1} data-slick-index="-2" aria-hidden="true">
                                        <div className="card school-card">
                                            <a href="/" tabindex="-1">
                                                <div className="image">
                                                    <img src="https://schotest.com/assets/uploads/schools/5d037d238e015.png" alt="Loibol Khonou ,primary School" />
                                                </div>
                                                <div className="details">
                                                    <p className="name">
                                                        Loibol Khonou ,primary                                    </p>
                                                    <p className="type">Government</p>
                                                    <div className="review-container">
                                                        <div className="total-review">
                                                            NSI Rank
                                            <span>335</span>
                                                        </div>
                                                        <div className="star-rating">
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                        </div>
                                                    </div>
                                                    <div className="basic-details">
                                                        <div className="description">
                                                            <div className="text-center">
                                                                <strong>School Type</strong><br />
                                                                <span>Primary</span>
                                                            </div>
                                                            <div className="text-center">
                                                                <strong>District</strong><br />
                                                                <span>Kangpokpi</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 slick-slide slick-cloned" tabindex="-1" style={divstyle1} data-slick-index="6" aria-hidden="true">
                                        <div className="card school-card">
                                            <a href="/" tabindex="-1">
                                                <div className="image">
                                                    <img src="https://schotest.com/assets/uploads/schools/5d04747c49b8f.png" alt="ABHIJYOT MAHAVIDYALAY" />
                                                </div>
                                                <div className="details">
                                                    <p className="name">
                                                        ABHIJYOT                                    </p>
                                                    <p className="type">Private</p>
                                                    <div className="review-container">
                                                        <div className="total-review">
                                                            NSI Rank
                                            <span>37</span>
                                                        </div>
                                                        <div className="star-rating">
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                        </div>
                                                    </div>
                                                    <div className="basic-details">
                                                        <div className="description">
                                                            <div className="text-center">
                                                                <strong>School Type</strong><br />
                                                                <span>Sr. Secondary School</span>
                                                            </div>
                                                            <div className="text-center">
                                                                <strong>District</strong><br />
                                                                <span>AurangabadBeed</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 slick-slide slick-cloned" tabindex="-1" style={divstyle1} data-slick-index="7" aria-hidden="true">
                                        <div className="card school-card">
                                            <a href="/" tabindex="-1">
                                                <div className="image">
                                                    <img src="https://schotest.com/assets/uploads/schools/5d037ef5694bf.png" alt="The Shining English Academy" />
                                                </div>
                                                <div className="details">
                                                    <p className="name">
                                                        The Shining English                                    </p>
                                                    <p className="type">Private</p>
                                                    <div className="review-container">
                                                        <div className="total-review">
                                                            NSI Rank
                                            <span>300</span>
                                                        </div>
                                                        <div className="star-rating">
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                        </div>
                                                    </div>
                                                    <div className="basic-details">
                                                        <div className="description">
                                                            <div className="text-center">
                                                                <strong>School Type</strong><br />
                                                                <span>Secondary</span>
                                                            </div>
                                                            <div className="text-center">
                                                                <strong>District</strong><br />
                                                                <span>Bishnupur</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 slick-slide slick-cloned" tabindex="-1" style={divstyle1} data-slick-index="8" aria-hidden="true">
                                        <div className="card school-card">
                                            <a href="/" tabindex="-1">
                                                <div className="image">
                                                    <img src="https://schotest.com/assets/uploads/schools/5d037d238e015.png" alt="Loibol Khonou ,primary School" />
                                                </div>
                                                <div className="details">
                                                    <p className="name">
                                                        Loibol Khonou ,primary                                    </p>
                                                    <p className="type">Government</p>
                                                    <div className="review-container">
                                                        <div className="total-review">
                                                            NSI Rank
                                            <span>335</span>
                                                        </div>
                                                        <div className="star-rating">
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                        </div>
                                                    </div>
                                                    <div className="basic-details">
                                                        <div className="description">
                                                            <div className="text-center">
                                                                <strong>School Type</strong><br />
                                                                <span>Primary</span>
                                                            </div>
                                                            <div className="text-center">
                                                                <strong>District</strong><br />
                                                                <span>Kangpokpi</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 slick-slide slick-cloned" tabindex="-1" style={divstyle1} data-slick-index="9" aria-hidden="true">
                                        <div className="card school-card">
                                            <a href="/" tabindex="-1">
                                                <div className="image">
                                                    <img src="https://schotest.com/assets/uploads/schools/5c87a2a08d995.jpg" alt="Shades English Medium High school " />
                                                </div>
                                                <div className="details">
                                                    <p className="name">
                                                        Shades English Medium High School                                    </p>
                                                    <p className="type">Private</p>
                                                    <div className="review-container">
                                                        <div className="total-review">
                                                            NSI Rank
                                            <span>152</span>
                                                        </div>
                                                        <div className="star-rating">
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                            <i className="fa-star fa"></i>
                                                        </div>
                                                    </div>
                                                    <div className="basic-details">
                                                        <div className="description">
                                                            <div className="text-center">
                                                                <strong>School Type</strong><br />
                                                                <span>Secondary</span>
                                                            </div>
                                                            <div className="text-center">
                                                                <strong>District</strong><br />
                                                                <span>Sri Potti Sri Ramulu Nellore</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
                                </div >
                            </div>
                        </div>
                    </Slider>
                </div>
            </section >
        );
    }
}

export default SlideSchoolPage