import React, { Component } from 'react';
class tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
 
        return (
           <div className="row">
         <table className="table table-bordered ">
         <thead className="thead-dark">
             <tr>
             <th scope="col">Name</th>
             <th scope="col">Age</th>
             <th scope="col">JoinDate</th>
             <th scope="col">Country</th>
             <th scope="col">Gender</th>
             <th scope="col">Skills</th>
             </tr>
         </thead>
         <tbody>
            {this.props.data && this.props.data.map(i => (
                  <tr key={i.name}>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.joinDate}</td>
                  <td>{i.country}</td>
                  <td>{i.gender}</td>
                 <td>{i.skils.map(k => k.skil&&<ul key={k.skil}>
                     <li>{k.skil}</li>
                 </ul>)}</td>
                  </tr>
            ))}
           
         </tbody>
         </table>
           </div> 
        );
    }
}

export default tab1;