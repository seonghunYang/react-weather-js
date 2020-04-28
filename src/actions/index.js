import axios from 'axios';

//api처리를 하나의 파일에
//우리 웹에는 nest 누를 때 가져오는 것? or window loading시
// const API_BASE_URL = "api.openweathermap.org/data/2.5/forecast?q=Paris&appid=6e4549b0d221f52c42f6d0f6028c2183"
const API_URL = "http://api.openweathermap.org/data/2.5/forecast"
const API_KEY = "6e4549b0d221f52c42f6d0f6028c2183"
export function addCity(name) {
  return (dispatch) => {
    dispatch({type:"START_LOADING"});
    dispatch({type:"CLEAR_ERRORS"});
    axios.get(API_URL, {
      params: {
        q: name,
        appid: API_KEY,
        units: 'metric'
        //data에서 도 city와 list를 선별하는 분법
      // }}).then(({data: {city, list}}) => { 
      }}).then(({data}) => { 
        dispatch({
          type: "ADD_CITY", 
          payload: data
      });
      }).catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error.response.data
        });
      }).then(() => {
        dispatch({type:"END_LOADING"});
      });
  };
}
//마지막 then 전부다 걸림