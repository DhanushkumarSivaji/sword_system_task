import { FetchPosts, NameOption , skillOption ,countryOption } from './types';
import axios from 'axios'

export const fetchPosts = (arg) => dispatch => {
  axios.get(`https://api.myjson.com/bins/${arg}`)
    .then(res => 
      dispatch({
        type:FetchPosts,
        payload:res.data.resultSet
      }))

      
};

export const nameOption = () => dispatch => {

  axios.get('https://api.myjson.com/bins/13g2pv')
  .then(res => 
    dispatch({
      type:NameOption,
      payload:res.data.resultSet
    }))
}

export const SkillOption = () => dispatch => {
  
  axios.get('https://api.myjson.com/bins/u8ed3')
  .then(res => 
    dispatch({
      type:skillOption,
      payload:res.data.resultSet
    }))
}


export const CountryOption = () => dispatch => {
  
  axios.get('https://api.myjson.com/bins/1g9fqv')
  .then(res => 
    dispatch({
      type:countryOption,
      payload:res.data.resultSet
    }))
}