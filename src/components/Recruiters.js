import React from 'react';
import Myloop from './images';
import './Recruiters.css';
import data from './data';
import Footer from './Footer';

const Recruiters = ()=> {
        return(
            <div className="recruiters-main">
                 <div className="recruiters-heading">
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
                    <div><img className="graph"  src={res.pie}/></div>
                    <div><p className="past-placements-year"> {res.year}</p></div>
                    <div><img className="pie" src={res.graph}/> </div>
                   </div>

                    </div>
                </div>
                ))}
                </div> 
            </div>
        );
    }

export default Recruiters;