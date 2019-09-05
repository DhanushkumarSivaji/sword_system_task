import React, { Component } from 'react';
class tab3 extends Component {
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
             <th scope="col">Gender</th>
             </tr>
         </thead>
         <tbody>
            {this.props.data && this.props.data.map(i => (
                  <tr key={i.name}>
                    <td>{i.name}</td>
                  <td>{i.gender}</td>
                  </tr>
            ))}
           
         </tbody>
         </table>
           </div> 
        );
    }
}

export default tab3;