import React from 'react'
class Schoolmodel extends React.Component {
    render() {
        var divstyle = {
            fontSize: '48p',
            color: 'red'
        };

        return (
            <section className="schools-list">
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <form className="sidebar" id="schoolFilterForm" autocomplete="off" accept-charset="utf-8">
                                <input type="hidden" name="csrf_test_name" value="6744242fd0bfd92b9a2bbea39c16211a" />
                                <div className="mb-4">
                                    <a className="btn btn-sm btn-block btn btn-warning">Refresh</a>
                                    <a className="btn btn-sm btn-block btn btn-warning">Refine</a>
                                </div>
                                <div className="ranking">
                                    <div className="header">
                                        <div className="heading">Select Ranking</div>
                                        <div className="icon" data-toggle="collapse" data-target="#ranking-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>

                                    <div className="content collapse" id="ranking-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="play">All</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 10</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="10" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 20</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="20" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 30</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="30" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 40</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="40" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 50</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="50" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 60</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="60" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 70</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="70" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 80</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="80" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 90</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="90" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Top 100</label>
                                                <input type="radio" name="ranking" className="custom-radio" value="100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rating">
                                    <div className="header">
                                        <div className="heading">Select Rating</div>
                                        <div className="icon" data-toggle="collapse" data-target="#rating-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>

                                    <div className="content collapse" id="rating-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="play">No Filter</label>
                                                <input type="radio" name="rating" className="custom-radio" value="" />
                                            </div>
                                            <div className="form-group">
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                    </div>
                                                </div>
                                                <input type="radio" name="rating" value="5" className="custom-radio" />
                                            </div>
                                            <div className="form-group">
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <p className="text">&amp; Up</p>
                                                </div>
                                                <input type="radio" name="rating" value="4" className="custom-radio" />
                                            </div>
                                            <div className="form-group">
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <p className="text">&amp; Up</p>
                                                </div>
                                                <input type="radio" name="rating" value="3" className="custom-radio" />
                                            </div>
                                            <div className="form-group">
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <p className="text">&amp; Up</p>
                                                </div>
                                                <input type="radio" name="rating" value="2" className="custom-radio" />
                                            </div>
                                            <div className="form-group">
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <p className="text">&amp; Up</p>
                                                </div>
                                                <input type="radio" name="rating" value="1" className="custom-radio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="school-type">
                                    <div className="header">
                                        <div className="heading">School Type</div>
                                        <div className="icon" data-toggle="collapse" data-target="#school-type-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>

                                    <div className="content collapse" id="school-type-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="play">Play School</label>
                                                <input type="checkbox" name="school_type[]" className="custom-radio" value="Play School" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Pre School</label>
                                                <input type="checkbox" name="school_type[]" className="custom-radio" value="Pre School" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Primary</label>
                                                <input type="checkbox" name="school_type[]" className="custom-radio" value="Primary" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Secondary</label>
                                                <input type="checkbox" name="school_type[]" className="custom-radio" value="Secondary" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Sr. Secondary School</label>
                                                <input type="checkbox" name="school_type[]" className="custom-radio" value="Sr. Secondary School" />
                                            </div>
                                            <div className="form-group">
                                                <label for="play">Education Institute / Academies</label>
                                                <input type="checkbox" name="school_type[]" className="custom-radio" value="Education Institute / Academies" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="school-location">
                                    <div className="header">
                                        <div className="heading">School Location</div>
                                        <div className="icon" data-toggle="collapse" data-target="#school-location-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>

                                    <div className="content collapse" id="school-location-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="Andaman And Nicobar">Andaman And Nicobar</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Andaman And Nicobar" value="Andaman And Nicobar" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Andhra Pradesh">Andhra Pradesh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Andhra Pradesh" value="Andhra Pradesh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Arunachal Pradesh">Arunachal Pradesh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Arunachal Pradesh" value="Arunachal Pradesh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Assam">Assam</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Assam" value="Assam" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Bihar">Bihar</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Bihar" value="Bihar" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Chandigarh">Chandigarh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Chandigarh" value="Chandigarh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Chhattisgarh">Chhattisgarh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Chhattisgarh" value="Chhattisgarh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Dadra And Nagar Haveli">Dadra And Nagar Haveli</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Dadra And Nagar Haveli" value="Dadra And Nagar Haveli" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Daman And Diu">Daman And Diu</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Daman And Diu" value="Daman And Diu" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Delhi">Delhi</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Delhi" value="Delhi" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Goa">Goa</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Goa" value="Goa" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Gujarat">Gujarat</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Gujarat" value="Gujarat" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Haryana">Haryana</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Haryana" value="Haryana" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Himachal Pradesh">Himachal Pradesh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Himachal Pradesh" value="Himachal Pradesh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Jammu &amp; Kashmir">Jammu &amp; Kashmir</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Jammu &amp; Kashmir" value="Jammu &amp; Kashmir" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Jharkhand">Jharkhand</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Jharkhand" value="Jharkhand" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Karnataka">Karnataka</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Karnataka" value="Karnataka" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Kerala">Kerala</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Kerala" value="Kerala" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Lakshadweep">Lakshadweep</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Lakshadweep" value="Lakshadweep" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Madhya Pradesh">Madhya Pradesh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Madhya Pradesh" value="Madhya Pradesh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Maharashtra">Maharashtra</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Maharashtra" value="Maharashtra" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Manipur">Manipur</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Manipur" value="Manipur" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Meghalaya">Meghalaya</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Meghalaya" value="Meghalaya" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Mizoram">Mizoram</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Mizoram" value="Mizoram" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Nagaland">Nagaland</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Nagaland" value="Nagaland" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Odisha">Odisha</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Odisha" value="Odisha" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Puducherry">Puducherry</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Puducherry" value="Puducherry" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Punjab">Punjab</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Punjab" value="Punjab" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Rajasthan">Rajasthan</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Rajasthan" value="Rajasthan" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Sikkim">Sikkim</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Sikkim" value="Sikkim" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Tamil Nadu">Tamil Nadu</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Tamil Nadu" value="Tamil Nadu" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Telangana">Telangana</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Telangana" value="Telangana" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Tripura">Tripura</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Tripura" value="Tripura" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Uttar Pradesh">Uttar Pradesh</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Uttar Pradesh" value="Uttar Pradesh" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Uttarakhand">Uttarakhand</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="Uttarakhand" value="Uttarakhand" />
                                            </div>
                                            <div className="form-group">
                                                <label for="West Bengal">West Bengal</label>
                                                <input type="checkbox" name="state[]" className="custom-radio" id="West Bengal" value="West Bengal" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="school-medium">
                                    <div className="header">
                                        <div className="heading">Select Medium</div>
                                        <div className="icon" data-toggle="collapse" data-target="#school-medium-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>
                                    <div className="content collapse" id="school-medium-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="Assamese">Assamese</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="8" id="Assamese" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Bengali">Bengali</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="9" id="Bengali" />
                                            </div>
                                            <div className="form-group">
                                                <label for="English">English</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="3" id="English" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Hindi">Hindi</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="1" id="Hindi" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Marathi">Marathi</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="7" id="Marathi" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Punjabi">Punjabi</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="5" id="Punjabi" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Tamil">Tamil</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="4" id="Tamil" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Telugu">Telugu</label>
                                                <input type="checkbox" name="mediums[]" className="custom-radio" value="6" id="Telugu" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="school-strength" >
                                    <div className="header">
                                        <div className="heading">Select Strength</div>
                                        <div className="icon" data-toggle="collapse" data-target="#school-strength-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>

                                    <div className="content collapse" id="school-strength-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="strength">0</label>
                                                <input type="range" min="0" max="3500" step="1" value="0" className="custom-range" id="strength" name="strength" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="school-features">
                                    <div className="header">
                                        <div className="heading">Select Features</div>
                                        <div className="icon" data-toggle="collapse" data-target="#school-features-content" onclick="checkAndToggle(this)">
                                            <i className="fa fa-caret-down"></i>
                                        </div>
                                    </div>

                                    <div className="content collapse" id="school-features-content">
                                        <div className="box">
                                            <div className="form-group">
                                                <label for="Art Room">Art Room</label>
                                                <input type="checkbox" name="features[]" value="28" className="custom-radio" id="Art Room" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Auditorium">Auditorium</label>
                                                <input type="checkbox" name="features[]" value="22" className="custom-radio" id="Auditorium" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Canteen">Canteen</label>
                                                <input type="checkbox" name="features[]" value="14" className="custom-radio" id="Canteen" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Computer Lab">Computer Lab</label>
                                                <input type="checkbox" name="features[]" value="27" className="custom-radio" id="Computer Lab" />
                                            </div>
                                            <div className="form-group">
                                                <label for="E-learning">E-learning</label>
                                                <input type="checkbox" name="features[]" value="20" className="custom-radio" id="E-learning" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Eco-friendly">Eco-friendly</label>
                                                <input type="checkbox" name="features[]" value="31" className="custom-radio" id="Eco-friendly" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Garden">Garden</label>
                                                <input type="checkbox" name="features[]" value="30" className="custom-radio" id="Garden" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Hostel">Hostel</label>
                                                <input type="checkbox" name="features[]" value="12" className="custom-radio" id="Hostel" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Infrastructure">Infrastructure</label>
                                                <input type="checkbox" name="features[]" value="19" className="custom-radio" id="Infrastructure" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Library">Library</label>
                                                <input type="checkbox" name="features[]" value="10" className="custom-radio" id="Library" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Medical Facility">Medical Facility</label>
                                                <input type="checkbox" name="features[]" value="24" className="custom-radio" id="Medical Facility" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Musical Room">Musical Room</label>
                                                <input type="checkbox" name="features[]" value="16" className="custom-radio" id="Musical Room" />
                                            </div>
                                            <div className="form-group">
                                                <label for="NCC">NCC</label>
                                                <input type="checkbox" name="features[]" value="25" className="custom-radio" id="NCC" />
                                            </div>
                                            <div className="form-group">
                                                <label for="NSS">NSS</label>
                                                <input type="checkbox" name="features[]" value="26" className="custom-radio" id="NSS" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Online Management">Online Management</label>
                                                <input type="checkbox" name="features[]" value="21" className="custom-radio" id="Online Management" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Science Lab">Science Lab</label>
                                                <input type="checkbox" name="features[]" value="11" className="custom-radio" id="Science Lab" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Security">Security</label>
                                                <input type="checkbox" name="features[]" value="29" className="custom-radio" id="Security" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Sports Complex">Sports Complex</label>
                                                <input type="checkbox" name="features[]" value="13" className="custom-radio" id="Sports Complex" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Transportation">Transportation</label>
                                                <input type="checkbox" name="features[]" value="9" className="custom-radio" id="Transportation" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <br />
                            <div className="top-details">
                                <a id="totalButton" className="btn btn-sm btn-round-secondary">Total: 380 </a>

                                <input type="text" name="school_name" value="" className="search-input form-control ml-2 mr-2" id="search-school" placeholder="Search School" />

                            </div>
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                <div className="school-card">
                                    <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2415'">
                                        <div className="image">
                                            <img className="rounded" src="https://schotest.com/assets/uploads/schools/5d037ac11a8c7.png" alt="prathamik vidyalay bariyatha" />
                                        </div>
                                        <div className="primary-details">
                                            <h3 className="title">Prathamik Vidyalay Bariyatha</h3>

                                            <ul className="basic-info">
                                                <li>
                                                    <span className="a">School Type:</span>
                                                    <span className="b">Primary</span>
                                                </li>
                                                <li>
                                                    <span className="a">Medium:</span>
                                                    <span className="b">Hindi</span>
                                                </li>
                                                <li>
                                                    <span className="a">State:</span>
                                                    <span className="b">Jharkhand</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="extra-info">
                                            <div className="contact-info">
                                                <div className="hover-slide-left">
                                                    <i className="fa fa-phone"></i>
                                                    <span className="slide-this">+91-1231231231</span>
                                                </div>
                                                <div className="hover-slide-left">
                                                    <i className="fa fa-envelope"></i>
                                                    <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-option">
                                        <div className="favourite">
                                            <i className="fa fa-heart active"></i>
                                        </div>
                                        <div className="rating-details">
                                            <h3>1</h3>
                                            <div className="star-rating-container">
                                                <div className="star-rating">
                                                </div>
                                                <span>(Not rated)</span>
                                            </div>
                                            <div className="total-reviews">

                                            </div>
                                            <div className="details-buttons">
                                                <a href="https://schotest.com/school-info/2415" className="btn btn-details">
                                                    View Profile
                                            </a>

                                                <a href="https://schotest.com/set-school-compare/2415" className="btn btn-details">
                                                    Add to compare                                            </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                    <div className="school-card">
                                        <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2413'">
                                            <div className="image">
                                                <img className="rounded" src="https://schotest.com/assets/uploads/schools/5d037b3874a5a.png" alt="middle school saidapur" />
                                            </div>
                                            <div className="primary-details">
                                                <h3 className="title">Middle School Saidapur</h3>

                                                <ul className="basic-info">
                                                    <li>
                                                        <span className="a">School Type:</span>
                                                        <span className="b">Primary</span>
                                                    </li>
                                                    <li>
                                                        <span className="a">Medium:</span>
                                                        <span className="b">Hindi</span>
                                                    </li>
                                                    <li>
                                                        <span className="a">State:</span>
                                                        <span className="b">Jharkhand</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="extra-info">
                                                <div className="contact-info">
                                                    <div className="hover-slide-left">
                                                        <i className="fa fa-phone"></i>
                                                        <span className="slide-this">+91-1231231231</span>
                                                    </div>
                                                    <div className="hover-slide-left">
                                                        <i className="fa fa-envelope"></i>
                                                        <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-option">
                                            <div className="favourite">
                                                <i className="fa fa-heart active"></i>
                                            </div>
                                            <div className="rating-details">
                                                <h3>2</h3>
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                    </div>
                                                    <span>(Not rated)</span>
                                                </div>
                                                <div className="total-reviews"> 465 View
                                      </div>
                                            </div>
                                            <div className="details-buttons">
                                                <a href="https://schotest.com/school-info/2413" className="btn btn-details">
                                                    View Profile
                                            </a>

                                                <a href="https://schotest.com/set-school-compare/2413" className="btn btn-details">
                                                    Add to compare                                            </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                    <div className="school-card">
                                        <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2412'">
                                            <div className="image">
                                                <img className="rounded" src="https://schotest.com/assets/uploads/schools/5d037b58d54cb.png" alt="high school saidapur" />
                                            </div>
                                            <div className="primary-details">
                                                <h3 className="title">High School Saidapur</h3>

                                                <ul className="basic-info">
                                                    <li>
                                                        <span className="a">School Type:</span>
                                                        <span className="b">Primary</span>
                                                    </li>
                                                    <li>
                                                        <span className="a">Medium:</span>
                                                        <span className="b">Hindi</span>
                                                    </li>
                                                    <li>
                                                        <span className="a">State:</span>
                                                        <span className="b">Jharkhand</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="extra-info">
                                                <div className="contact-info">
                                                    <div className="hover-slide-left">
                                                        <i className="fa fa-phone"></i>
                                                        <span className="slide-this">+91-1231231231</span>
                                                    </div>
                                                    <div className="hover-slide-left">
                                                        <i className="fa fa-envelope"></i>
                                                        <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-option">
                                            <div className="favourite">
                                                <i className="fa fa-heart active"></i>
                                            </div>
                                            <div className="rating-details">
                                                <h3>3</h3>
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                    </div>
                                                    <span>(Not rated)</span>
                                                </div>


                                            </div>
                                            <div className="details-buttons">
                                                <a href="https://schotest.com/school-info/2412" className="btn btn-details">
                                                    View Profile
                                            </a>

                                                <a href="https://schotest.com/set-school-compare/2412" className="btn btn-details">
                                                    Add to compare                                            </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                    <div className="school-card">
                                        <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2411'">
                                            <div className="image">
                                                <img className="rounded" src="https://schotest.com/assets/uploads/schools/5d037b65a91aa.png" alt="Joypur Khunou Upper Primary School" />
                                            </div>
                                            <div className="primary-details">
                                                <h3 className="title">Joypur Khunou Upper Primary School</h3>

                                                <ul className="basic-info">
                                                    <li>
                                                        <span className="a">School Type:</span>
                                                        <span className="b">Primary</span>
                                                    </li>
                                                    <li>
                                                        <span className="a">Medium:</span>
                                                        <span className="b">English</span>
                                                    </li>
                                                    <li>
                                                        <span className="a">State:</span>
                                                        <span className="b">Manipur</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="extra-info">
                                                <div className="contact-info">
                                                    <div className="hover-slide-left">
                                                        <i className="fa fa-phone"></i>
                                                        <span className="slide-this">+91-1231231231</span>
                                                    </div>
                                                    <div className="hover-slide-left">
                                                        <i className="fa fa-envelope"></i>
                                                        <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-option">
                                            <div className="favourite">
                                                <i className="fa fa-heart active"></i>
                                            </div>
                                            <div className="rating-details">
                                                <h3>4</h3>
                                                <div className="star-rating-container">
                                                    <div className="star-rating">
                                                    </div>
                                                    <span>(Not rated)</span>
                                                </div>
                                                <div className="total-reviews">

                                                </div>
                                                <div className="details-buttons">
                                                    <a href="https://schotest.com/school-info/2411" className="btn btn-details">
                                                        View Profile
                                            </a>

                                                    <a href="https://schotest.com/set-school-compare/2411" className="btn btn-details">
                                                        Add to compare                                            </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                        <div className="school-card">
                                            <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2409'">
                                                <div className="image">
                                                    <img className="rounded" src="https://schotest.com/assets/uploads/schools/5cb860ef90098.jpg" alt="Bishop Westcott Boys' School" />
                                                </div>
                                                <div className="primary-details">
                                                    <h3 className="title">Bishop Westcott Boys' School</h3>

                                                    <ul className="basic-info">
                                                        <li>
                                                            <span className="a">School Type:</span>
                                                            <span className="b">Sr. Secondary School</span>
                                                        </li>
                                                        <li>
                                                            <span className="a">Medium:</span>
                                                            <span className="b">English</span>
                                                        </li>
                                                        <li>
                                                            <span className="a">State:</span>
                                                            <span className="b">Jharkhand</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="extra-info">
                                                    <div className="contact-info">
                                                        <div className="hover-slide-left">
                                                            <i className="fa fa-phone"></i>
                                                            <span className="slide-this">+91-1231231231</span>
                                                        </div>
                                                        <div className="hover-slide-left">
                                                            <i className="fa fa-envelope"></i>
                                                            <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-option">
                                                <div className="favourite">
                                                    <i className="fa fa-heart active"></i>
                                                </div>
                                                <div className="rating-details">
                                                    <h3>5</h3>
                                                    <div className="star-rating-container">
                                                        <div className="star-rating">
                                                        </div>
                                                        <span>(Not rated)</span>
                                                    </div>
                                                </div>
                                                <div className="details-buttons">
                                                    <a href="https://schotest.com/school-info/2409" className="btn btn-details">
                                                        View Profile
                                            </a>

                                                    <a href="https://schotest.com/set-school-compare/2409" className="btn btn-details">
                                                        Add to compare                                            </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                        <div className="school-card">
                                            <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2408'">
                                                <div className="image">
                                                    <img className="rounded" src="https://schotest.com/assets/uploads/schools/5cb85f48a285e.jpg" alt="L.A.G school" />
                                                </div>
                                                <div className="primary-details">
                                                    <h3 className="title">L.A.G School</h3>

                                                    <ul className="basic-info">
                                                        <li>
                                                            <span className="a">School Type:</span>
                                                            <span className="b">Sr. Secondary School</span>
                                                        </li>
                                                        <li>
                                                            <span className="a">Medium:</span>
                                                            <span className="b">Hindi</span>
                                                        </li>
                                                        <li>
                                                            <span className="a">State:</span>
                                                            <span className="b">Jharkhand</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="extra-info">
                                                    <div className="contact-info">
                                                        <div className="hover-slide-left">
                                                            <i className="fa fa-phone"></i>
                                                            <span className="slide-this">+91-1231231231</span>
                                                        </div>
                                                        <div className="hover-slide-left">
                                                            <i className="fa fa-envelope"></i>
                                                            <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-option">
                                                <div className="favourite">
                                                </div>
                                                <div className="rating-details">
                                                    <h3>6</h3>
                                                    <div className="star-rating-container">
                                                        <div className="star-rating">
                                                        </div>
                                                        <span>(Not rated)</span>

                                                    </div>
                                                    <div className="details-buttons">
                                                        <a href="https://schotest.com/school-info/2408" className="btn btn-details">
                                                            View Profile
                                            </a>

                                                        <a href="https://schotest.com/set-school-compare/2408" className="btn btn-details">
                                                            Add to compare                                            </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                            <div className="school-card">
                                                <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2407'">
                                                    <div className="image">
                                                        <img className="rounded" src="https://schotest.com/assets/uploads/schools/5cb85cd750bf1.jpg" alt="J k international schools." />
                                                    </div>
                                                    <div className="primary-details">
                                                        <h3 className="title">J K International Schools.</h3>

                                                        <ul className="basic-info">
                                                            <li>
                                                                <span className="a">School Type:</span>
                                                                <span className="b">Sr. Secondary School</span>
                                                            </li>
                                                            <li>
                                                                <span className="a">Medium:</span>
                                                                <span className="b">Hindi</span>
                                                            </li>
                                                            <li>
                                                                <span className="a">State:</span>
                                                                <span className="b">Jharkhand</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="extra-info">
                                                        <div className="contact-info">
                                                            <div className="hover-slide-left">
                                                                <i className="fa fa-phone"></i>
                                                                <span className="slide-this">+91-1231231231</span>
                                                            </div>
                                                            <div className="hover-slide-left">
                                                                <i className="fa fa-envelope"></i>
                                                                <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="details-option">
                                                    <div className="favourite">
                                                        <i className="fa fa-heart active"></i>
                                                    </div>
                                                    <div className="rating-details">
                                                        <h3>7</h3>
                                                        <div className="star-rating-container">
                                                            <div className="star-rating">
                                                            </div>
                                                            <span>(Not rated)</span>
                                                        </div>
                                                        <div className="total-reviews">

                                                        </div>
                                                        <div className="details-buttons">
                                                            <a href="https://schotest.com/school-info/2407" className="btn btn-details">
                                                                View Profile
                                            </a>

                                                            <a href="https://schotest.com/set-school-compare/2407" className="btn btn-details">
                                                                Add to compare                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                                <div className="school-card">
                                                    <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2406'">
                                                        <div className="image">
                                                            <img className="rounded" src="https://schotest.com/assets/uploads/schools/5cb859e3d082f.jpg" alt="International public school" />
                                                        </div>
                                                        <div className="primary-details">
                                                            <h3 className="title">International Public School</h3>

                                                            <ul className="basic-info">
                                                                <li>
                                                                    <span className="a">School Type:</span>
                                                                    <span className="b">Sr. Secondary School</span>
                                                                </li>
                                                                <li>
                                                                    <span className="a">Medium:</span>
                                                                    <span className="b">Hindi</span>
                                                                </li>
                                                                <li>
                                                                    <span className="a">State:</span>
                                                                    <span className="b">Jharkhand</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="extra-info">
                                                            <div className="contact-info">
                                                                <div className="hover-slide-left">
                                                                    <i className="fa fa-phone"></i>
                                                                    <span className="slide-this">+91-1231231231</span>
                                                                </div>
                                                                <div className="hover-slide-left">
                                                                    <i className="fa fa-envelope"></i>
                                                                    <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="details-option">
                                                        <div className="favourite">
                                                        </div>
                                                        <div className="rating-details">
                                                            <h3>8</h3>
                                                            <div className="star-rating-container">
                                                                <div className="star-rating">
                                                                </div>
                                                                <span>(Not rated)</span>
                                                            </div>

                                                        </div>
                                                        <div className="details-buttons">
                                                            <a href="https://schotest.com/school-info/2406" className="btn btn-details">
                                                                View Profile
                                            </a>

                                                            <a href="https://schotest.com/set-school-compare/2406" className="btn btn-details">
                                                                Add to compare                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                                <div className="school-card">
                                                    <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2405'">
                                                        <div className="image">
                                                            <img className="rounded" src="https://schotest.com/assets/uploads/schools/5cb8558ed47d5.jpg" alt="Surendranath centenary school." />
                                                        </div>
                                                        <div className="primary-details">
                                                            <h3 className="title">Surendranath Centenary School.</h3>

                                                            <ul className="basic-info">
                                                                <li>
                                                                    <span className="a">School Type:</span>
                                                                    <span className="b">Sr. Secondary School</span>
                                                                </li>
                                                                <li>
                                                                    <span className="a">Medium:</span>
                                                                    <span className="b">Hindi</span>
                                                                </li>
                                                                <li>
                                                                    <span className="a">State:</span>
                                                                    <span className="b">Jharkhand</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="extra-info">
                                                            <div className="contact-info">
                                                                <div className="hover-slide-left">
                                                                    <i className="fa fa-phone"></i>
                                                                    <span className="slide-this">+91-1231231231</span>
                                                                </div>
                                                                <div className="hover-slide-left">
                                                                    <i className="fa fa-envelope"></i>
                                                                    <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="details-option">
                                                        <div className="favourite">
                                                            <i className="fa fa-heart active"></i>
                                                        </div>
                                                        <div className="rating-details">
                                                            <h3>9</h3>
                                                            <div className="star-rating-container">
                                                                <div className="star-rating">
                                                                </div>
                                                                <span>(Not rated)</span>
                                                            </div>
                                                            <div className="total-reviews">

                                                            </div>
                                                            <div className="details-buttons">
                                                                <a href="https://schotest.com/school-info/2405" className="btn btn-details">
                                                                    View Profile
                                            </a>

                                                                <a href="https://schotest.com/set-school-compare/2405" className="btn btn-details">
                                                                    Add to compare                                            </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 mt-4 mb-2">
                                                    <div className="school-card">
                                                        <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2404'">
                                                            <div className="image">
                                                                <img className="rounded" src="https://schotest.com/assets/uploads/schools/5cb853d879632.jpg" alt="Army public school." />
                                                            </div>
                                                            <div className="primary-details">
                                                                <h3 className="title">Army Public School.</h3>

                                                                <ul className="basic-info">
                                                                    <li>
                                                                        <span className="a">School Type:</span>
                                                                        <span className="b">Sr. Secondary School</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="a">Medium:</span>
                                                                        <span className="b">Hindi</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="a">State:</span>
                                                                        <span className="b">Jharkhand</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="extra-info">
                                                                <div className="contact-info">
                                                                    <div className="hover-slide-left">
                                                                        <i className="fa fa-phone"></i>
                                                                        <span className="slide-this">+91-1231231231</span>
                                                                    </div>
                                                                    <div className="hover-slide-left">
                                                                        <i className="fa fa-envelope"></i>
                                                                        <span className="slide-this">taneja.kumar.ravi@gmail.com</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details-option">
                                                            <div className="favourite">
                                                                <i className="fa fa-heart active"></i>
                                                            </div>
                                                            <div className="rating-details">
                                                                <h3>10</h3>
                                                                <div className="star-rating-container">
                                                                    <div className="star-rating">
                                                                    </div>
                                                                    <span>(Not rated)</span>
                                                                </div>
                                                                <div className="total-reviews">

                                                                </div>
                                                                <div className="details-buttons">
                                                                    <a href="https://schotest.com/school-info/2404" className="btn btn-details">
                                                                        View Profile
                                            </a>

                                                                    <a href="https://schotest.com/set-school-compare/2404" className="btn btn-details">
                                                                        Add to compare                                            </a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Schoolmodel;