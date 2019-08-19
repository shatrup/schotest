import React from 'react'
import DefaultPage from '../Layouts/DefaultPage';
import Teammodel from '../Modules/Teammodel';

class Team extends React.Component {
    render() {
        return (
            <DefaultPage >
                <Teammodel />
            </DefaultPage>
        );
    }
}

export default Team;
