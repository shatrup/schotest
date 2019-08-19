import React from "react";

class TopNavBar extends React.Component {
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <header>
                <div class="align-to-top">
                    <div class="navigation-bar top-navigation">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-2">

                                </div>
                                <div class="col-sm-10">
                                    <nav class="navbar navbar-expand-lg navbar-dark justify-content-end">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav mr-auto justify-content-center">
                                                <li class="nav-item ">
                                                    <a class="nav-link" href="http://localhost:3000/">Home <span class="sr-only">(current)</span></a>
                                                </li>
                                                <li class="nav-item ">
                                                    <a class="nav-link" href="http://localhost:3000/team">Team</a>
                                                </li>
                                                <li class="nav-item ">
                                                    <a class="nav-link" href="http://localhost:3000/schools">Schools</a>
                                                </li>
                                                <li class="nav-item ">
                                                    <a class="nav-link" href="http://localhost:3000/whyus">WhyUs </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        );
    }
}

export default TopNavBar;