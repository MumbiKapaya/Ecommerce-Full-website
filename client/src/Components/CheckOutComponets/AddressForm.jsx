import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import {validate} from 'react-email-validator';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddressForm = ({next}) => {
  const methods = useForm();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [disableSubmit,setDisableSubmit] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const [mailError, setEmailError] = useState(false);

  const handleSetEmail = (e) => {
    if (validate(e.target.value)) {
      setEmail(e.target.value);
      setEmailError(false);
    } else {
      setEmailError(true);
   }
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setPhoneError(false);
  };
  const validatePhoneNumber = (input_str) => {
    var format = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return format.test(input_str)
  };
  useEffect(() => {
    if (
      firstName
      && lastName
      && address
      && !phoneError
      && !mailError) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
      }
  },[firstName,lastName,address,phone,email, phoneError,mailError]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      "firstName": firstName,
      "lastName": lastName,
      "address": address,
      "phone": phone,
      "email": email
    }
    next(data);
  };


  return (
    <>
      <FormProvider {...methods}>
      <form noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            color ='Primary'
            variant="outlined"
            margin="normal"
            label="First Name"
            name="First Name"
            id="first-name-tf"
            onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          fullWidth
            rquired
            color ='primary'
            variant="outlined"
            margin="normal"
            label="last name"
            name="last Name"
            id="last name"
            onChange ={(e)=>setLastName(e.target.value)}
          />
          <TextField
          fullWidth
          required
          error={mailError}
            color ='primary'
            variant="outlined"
            margin="normal"
            label="email"
            name="email"
            onChange = {(e)=>handleSetEmail(e)}
            helperText = {mailError? "Please enter valid email":"" }
            id="email"
        />
        <TextField
          fullWidth
          error={phoneError}
          required
          margin="normal"
          label="phone"
          name="phone"
          variant="outlined"
          helperText={phoneError?"Please Enter valid phone number":""}
          onChange={(e) => validatePhoneNumber(e.target.value) ? handlePhone(e)
          :setPhoneError(true)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="address"
          name="address"
          variant="outlined"
          onChange ={(e)=>setAddress(e.target.value)}
        />  
        
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component ={Link} to ="/cart" variant="oulined">Back to Cart</Button>
           <Button
          disabled={disableSubmit}
          type="submit"
          color="primary"
          variant="contained"
            >Next</Button>
          </div>
        </form>

        </FormProvider>
    </>
  );
};

export default AddressForm;