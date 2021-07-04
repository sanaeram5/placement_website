import React from 'react';
import Myloop from './images';
import './Recruiters.css';
import data from './data';
import Header from './Header';

class Recruiters extends React.Component{
    render(){

        return(
            <div className="recruiters-main">
                <Header/>
                <div className="heading">
                    <p>❖</p>
                    <p>PAST RECRUITERS</p>
                    <p>❖</p>
                </div>

                <div className="companies-photos">
                <Myloop/>
                </div>
                <div>
                    <div className="container-past">
                    <div className="past-placements">
                        <p>✣</p>
                        <p>OUR PAST PLACEMENTS</p>
                        <p>✣</p>
                    </div>
                </div>
               
                {data.past.map(res=>(
                    <div>
                        <div className="past-placements-visuals">

                    
                    <div className="past-placements-visuals-with-graph">
                        {console.log(res)}
                    <div><img className="graph-and-pie"  src={res.pie}/></div>
                    <div><p className="past-placements-year"> {res.year}</p></div>
                    <div><img className="graph-and-pie" style={{width:"100%",height:"auto"}} src={res.graph}/> </div>
                   </div>

                    </div>
                </div>
                ))}
                </div>
                
            </div>
        );
    }
}
export default Recruiters;