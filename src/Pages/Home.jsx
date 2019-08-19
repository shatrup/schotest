import React from "react";
import HomePageModel from "../Modules/Homemodel";
import DefaultPage from "../Layouts/DefaultPage";
import Statistics from '../Modules/Statistics'
import FoundersPen from "../Modules/FoundersPen";
import SlideSchoolPage from "../Models/SlideSchoolPage";

class Bde extends React.Component {
    render() {
        return (
            <section id="bde-overview">
                <div class="container">
                    <h3 class="heading">Business Development Executive</h3>
                    <div class="bde-container">
                        There are no any bde found.            </div>
                </div>
            </section>
        );
    }
}



class AssocitionSection extends React.Component {
    render() {
        return (
            <section id="associates">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <h4 class="main-heading-style">Associates</h4>
                            <p>We believe in cumulative growth with our associates and keep them on-board for the long term while maintaining a healthy relationship.</p>
                        </div>

                        <div class="col-sm-12 col-md-7 offset-md-1">
                            <div class="associates-logo-container">
                                <div class="associates-logo">
                                    <a href="http://schotest.com">
                                        <img src="https://schotest.com/assets/uploads/associates/5b6985435922b.jpeg" alt="SAFED" />
                                    </a>
                                </div>
                                <div class="associates-logo">
                                    <a href="http://www.sanskardeeksha.com">
                                        <img src="https://schotest.com/assets/uploads/associates/5b698574461fd.jpeg" alt="Sanskar Disksha" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}


class Home extends React.Component {
    state = {}
    componentWillMount() {
        console.log("Home::componentWillMount");

    }

    componentDidMount() {
        console.log("Home::componentDidMount");
    }

    render() {
        return (
            <div>
                <DefaultPage>
                    <SlideSchoolPage />
                    <Statistics />
                    <FoundersPen />
                    <Bde />
                    <AssocitionSection />
                </DefaultPage>
            </div>
        );
    }
}

export default Home;        