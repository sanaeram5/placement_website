import React, { Component } from "react";
import './Images.css'

// const images=[
//     {
//         for(let i=1;i<=54;i++)
//         {id:i,src:""}
//     }
// ];


class Myloop extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfImages: [] };
  }
  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    const list = this.importAll(
      require.context("../web_design/past_placement/logo", false, /\.(png)$/)
    );
    this.setState({
      listOfImages: list
    });
  }
  render() {
      
    return (
      <div className="row">
            {this.state.listOfImages.map((image, index) => {
                console.log(image.default);
                
              return <div className="column">
                <img style={{height:"auto",width:"160px"}} src={image.default} key={index} alt="info"></img>
                </div>
  })}
      </div>
    );
  }
}
// class Myloop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { listOfImages: [] };
//   }
//   importAll(r) {
//     return r.keys().map(r);
//   }

//   componentWillMount() {
//     const list = this.importAll(
//       require.context("../web_design/past_placement/logo", false, /\.(png)$/)
//     );
//     this.setState({
//       listOfImages: list
//     });
//   }
//   render() {
      
//     return (
//       <>
//         <ul>
//           <li>
//             {this.state.listOfImages.map((image, index) => {
//                 console.log(image.default);
                
//               return <img src={image.default} key={index} alt="info"></img>
//   })}
//           </li>
//         </ul>
//       </>
//     );
//   }
// }

export default Myloop;