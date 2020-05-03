import React from 'react';
import Table from 'react-bootstrap/Table';
import WeatherItem from './WeatherItem';
import { useSelector } from 'react-redux'


export default function WeatherList() {
  const cities = useSelector(state => state.cities); 
  return (
    <Table  bordered hover >
      <thead>
        <tr>
          <th>Map</th>
          <th>City</th>
          <th>Temperature</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        { cities.map(item => (<WeatherItem key={item.city.id} data={item} />))}
      </tbody>
    </Table>
  )
}