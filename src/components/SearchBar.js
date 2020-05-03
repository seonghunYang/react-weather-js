import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { addCity } from '../actions/index';
import styled from 'styled-components'

const StyledFormControl = styled(FormControl)`
  min-width: 90%;
`;
export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading); 
  return (
  <Form inline className="mt-3 mb-3">

    <StyledFormControl type="text" placeholder="Search" className=" mr-sm-2" 
    value={name}
    onChange={(event) => {
      setName(event.target.value);
    }}
    disabled={loading}
    onKeyDown={(event) => {
      if (event.keyCode === 13) {
        dispatch(addCity(name));
        event.preventDefault();
        return false;
      }
    }}
    />
    <Button type="button"
    onClick={() =>{
      dispatch(addCity(name));
      setName("");
    }}
    >추가</Button>
  </Form>
  )
}