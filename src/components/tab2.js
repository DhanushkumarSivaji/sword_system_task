import React, { Component } from 'react';
class tab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div>
                <table className="table table-bordered">
         <thead className="thead-dark">
             <tr>
             <th scope="col">Name</th>
             <th scope="col">Skills</th>
             </tr>
         </thead>
         <tbody>
            {this.props.data && this.props.data.map(i => (
                  <tr key={i.name}>
                  <td>{i.name}</td>
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

export default tab2;