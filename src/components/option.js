import React, { Component } from 'react';
class option extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {values,passedFunction,label,DataValues} = this.props
        return (
            <div>
            <label  >{label}</label>
            <select value={values} onChange={passedFunction} className="form-control">
             {DataValues && DataValues.map(i => (
                 <option value={i.vlaue} key={i.vlaue}>{i.label}</option>
             ))}
            </select>
      
            </div>
        );
    }
}

export default option;