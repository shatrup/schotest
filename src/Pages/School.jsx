import React from 'react';
import PropTypes from 'prop-types';
import DefaultPage from '../Layouts/DefaultPage';
import SchoolModel from '../Modules/Schoolmodel'
import SchoolPageModel from "../Models/SchoolPgaeModel"

class AppTile extends React.Component {
    render() {
        return (
            <div className="school-card">
                <div className="image-and-details" onclick="window.location.href='https://schotest.com/school-info/2415'">
                    <div className="image">
                        <img className="rounded" src="https://schotest.com/assets/uploads/schools/5d037ac11a8c7.png" alt="prathamik vidyalay bariyatha" />
                    </div>
                    <div className="primary-details">
                        <h3 className="title">{this.props.appData.title}</h3>

                        <ul className="basic-info">
                            <li>
                                <span className="a">School Type:</span>
                                <span className="b">{this.props.appData.schooltype}</span>
                            </li>
                            <li>
                                <span className="a">Medium:</span>
                                <span className="b">{this.props.appData.schoolmedium}</span>
                            </li>
                            <li>
                                <span className="a">State:</span>
                                <span className="b">{this.props.appData.state}</span>
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
        );
    }

}



class SchoolSection extends React.Component {
    render() {
        var section = this.props.schooldetail;
        console.log(section);
        return (
            <div className="row">
                <div className="col-sm-12 col-md-6 mt-4 mb-2"></div>
                {section.map((value) => <AppTile appData={value} />)}
            </div>

        );
    }
}
class School extends React.Component {
    // render() {
    //     return (
    //         <DefaultPage>

    //<SchoolSection schooldetail={this.state.schooldetail} />
    //             <SchoolModel />
    //         </DefaultPage>

    //     );
    // }
    state = {};
    // componentWillMount() {
    //     console.log("School Page :WillMount");
    //     new SchoolPageModel().getData().then(response => {
    //         //console.log("=> " + JSON.stringify(response));
    //         this.setState({
    //             schooldetail: response.schooldetail
    //         });
    //     });
    // }

    componentDidMount() {
        console.log("AboutPage::componentDidMount");
    }

    render() {
        console.log("School:render");
        return (
            <DefaultPage >
                <SchoolModel />
            </DefaultPage>
        );
    }
}
School.propTypes = {
    title: PropTypes.string
};

export default School;
