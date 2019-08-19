import React from "react";
import CountUp from 'react-countup'

class Statistics extends React.Component {
    handleScroll() {
        console.log("Scrolling");
    }

    onComplete = () => {
        console.log('Completed!');
    };

    onStart = () => {
        console.log('Started!');
    };

    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        var divstyle = {
            'padding-right': '2rem',
            'padding-top': '50px'
        };
        return (
            <section id="counter">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-sm-12 col-md-3">
                            <div className="counting-item">
                                <h4 style={divstyle}>Registered <br /> Schools </h4>
                                <CountUp duration={5} end={388} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="counting-item">
                                <h4 style={divstyle}>Registered <br /> Students</h4>
                                <CountUp duration={5} end={3246} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="counting-item">
                                <h4 style={divstyle}>Events <br /> Completed </h4>&emsp;
                                <CountUp duration={0} end={6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Statistics;