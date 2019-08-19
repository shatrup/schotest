import React from "react";
import PropTypes from "prop-types";
import TopNavBar from "../partials/TopNavBar"
import WebsiteFooter from "../partials/WebsiteFooter"

class DefaultLayout extends React.Component {
    render() {
        return (
            <html className="no-js" lang="en">
                <body >
                    <div className="waiting-ring"></div>
                    <div id="root">
                        <TopNavBar />
                        {this.props.children}
                        <WebsiteFooter />
                    </div>
                </body>

            </html>
        );
    }
}


DefaultLayout.propTypes = {
    title: PropTypes.string,
}

export default DefaultLayout;
