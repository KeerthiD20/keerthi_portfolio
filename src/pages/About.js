import {workDetails, educationDetails} from '../Details';
import Work from '../components/Work';
import React from 'react';
import { personalDetails } from '../Details';

function Home() {
    const {about} = personalDetails;
    return (
        <div className="container page-content">
            <br></br><h1>About Me</h1><br></br>
            <div className="row justify-content-center">
                <p className="text-grey">{about}</p>
            </div>
            <br></br><br></br><h1>Work Experience</h1>
            {React.Children.toArray(
                workDetails.map(({Position, Company, Location, Type, Duration}) => (
                    <Work 
                        position = {Position}
                        company = {Company}
                        location={Location}
                        type={Type}
                        duration={Duration} 
                    />
                ))
            )}
            <br></br><br></br><h1>Education</h1>
            {React.Children.toArray(
                educationDetails.map(({Position, Company, Location, Type, Duration}) => (
                <Work 
                        position = {Position}
                        company = {Company}
                        location={Location}
                        type={Type}
                        duration={Duration} 
                    /> 
                ))
            )}
        <br></br><br></br></div>
    )
}
export default Home;