import React from 'react';
import Myloop from './images';
import './Recruiters.css'
//import past2020 from "../web_design/past_placement/"


class Recruiters extends React.Component{
    constructor(props){
      super(props)
     // this.state = {active: data[0]?.id}
    }
    render(){

        return(
            <div>
                <div className="heading">
                    <p>❖</p>
                    <p>PAST RECRUITERS</p>
                    <p>❖</p>
                </div>

                <div className="companies-photos">
                <Myloop/>
                </div>
                <div className="container-past">
                    <div className="past-placements">
                        <p>❖</p>
                        <p>OUR PAST PLACEMENTS</p>
                        <p>❖</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Recruiters;