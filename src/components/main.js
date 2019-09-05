import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts,nameOption,SkillOption,CountryOption} from '../actions/postActions';
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import Store from '../store'
import Option from './option'
class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter:'',
            tabs:'tab1',
            apiParams:'13g2pv',
            data:[],
            skillData:[],
            countryData:[],
            switchOptions:'',
            value1:'',
            value2:''
         };
         this.tab1 = this.tab1.bind(this)
         this.tab2 = this.tab2.bind(this)
         this.tab3 = this.tab3.bind(this)
         this.onChange1 = this.onChange1.bind(this)
         this.onChange2 = this.onChange2.bind(this)
    }
    componentDidMount(){
        
     
        Promise.all([
            Store.dispatch(fetchPosts(this.state.apiParams)),
            Store.dispatch(nameOption()),
            Store.dispatch(SkillOption()),
            Store.dispatch(CountryOption())
        ])
    }
   
    tab1 = (value) => e => {
        this.setState({tabs:'tab1'})

    }

    tab2 = (value)=> e =>{
        this.setState({tabs:'tab2'})

    }

    tab3 = (value) => e =>{
        this.setState({tabs:'tab3'})

    }

    componentWillReceiveProps(nextProps) {
       this.setState({data:nextProps.posts})
       this.setState({skillData:nextProps.skill})
       this.setState({countryData:nextProps.country}) 
      }

      renderElement = (datas) => {
     
          switch(this.state.tabs){
              case'tab1':
                return <Tab1 data = {datas}/>
              case'tab2':
                return <Tab2 data = {datas}/>
              case'tab3':
                return <Tab3 data = {datas}/>
               default:
                return "nothing"
          }
      }

      handleChange = event => {
        this.setState({ filter: event.target.value });
        this.setState({switchOptions:'FilterByName'})
      };

      onChange1(e) {
        this.setState({
          value1: e.target.value
        })
        this.setState({switchOptions:'FilterByCountry'})
      }
      
      onChange2(e) {
        this.setState({
          value2: e.target.value
        })
        this.setState({switchOptions:'FilterBySkills'})
      }

      check = (data) => {
        switch(this.state.switchOptions){
          case'FilterByName':
            
               data.filter(item => {
               return item.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
              })      

          case'FilterByCountry':
          
               data.filter(item => {
                return item.country.toLowerCase().indexOf(this.state.value1.toLowerCase()) !== -1
              })   
             

          case 'FilterBySkills':

                  return data.map(item => ({
                    ...item,
                     skils: item.skils
                     .filter(child => child.skil.toLowerCase().includes(this.state.value2.toLowerCase()))
           }))
           .filter(item => item.skils.length > 0)

          default:
              return data.filter(item => {
                item.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
              })    
        }
      }

    render (){

  
        
        const { filter, data ,switchOptions ,value1,value2} = this.state;

   
       
        let filteredData = data.filter(item =>{
         
            switch(switchOptions){

                case'FilterByName':
                  return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1

                case'FilterByCountry':
                  return item.country.toLowerCase().indexOf(value1.toLowerCase()) !== -1

                case 'FilterBySkills':
                  return data.map(item => ({
                           ...item,
                          skils: item.skils
                            .filter(child => child.skil.toLowerCase().includes(value2.toLowerCase()))
                  }))
                  .filter(item => item.skils.length > 0)
                  
                default:
                  return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            }
            
        })


        return (
            <div>
               <div className="btn-group" role="group" aria-label="Button group with nested dropdown" style={{marginTop:'10px',marginBottom:'20px'}}>
                    <button type="button" className="btn btn-secondary" onClick={this.tab1()}>Tab 1</button>
                    <button type="button" className="btn btn-secondary"  onClick={this.tab2()} >Tab 2</button>
                    <button type="button" className="btn btn-secondary" onClick={this.tab3()}>Tab 3</button>
               </div>  
            <br></br>
             Name  <br></br><br></br>
            <input value={filter} onChange={this.handleChange} />
            <br/>

            <br></br>
            <Option DataValues={this.state.countryData} passedFunction={this.onChange1} label={'Country'} values={this.state.value1}/>
            <br/>
         
            <br></br>
            <Option DataValues={this.state.skillData} passedFunction={this.onChange2} label={'Skills'} values={this.state.value2}/>
            <br/>

            {this.renderElement(filteredData)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    skill:state.posts.skills,
    country:state.posts.country
  });
  

export default connect(mapStateToProps, {fetchPosts,nameOption,SkillOption,CountryOption})(main);

