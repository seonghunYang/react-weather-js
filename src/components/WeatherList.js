import React from 'react';
import Table from 'react-bootstrap/Table';
import WeatherItem from './WeatherItem';


export default function SearchBar() {
  const data = [
    {
    id:1,
    city: 'Seoul', temp: 10.24,
    pressure: 1012,
    humidity: 73,
  },
    {
    id:2,
    city: 'Tokyo', temp: 10.24,
    pressure: 1012,
    humidity: 73,
  },
    {
    id:3,
    city: 'N.Y', temp: 10.24,
    pressure: 1012,
    humidity: 73,
  },
  ]
  return (
    <Table  bordered hover variant="dark">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>pressure</th>
        </tr>
      </thead>
      <tbody>
        { data.map(item => (<WeatherItem data={item} />))}
      </tbody>
    </Table>
  )
}