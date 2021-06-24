import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Input, Form, Button, InputGroup, InputRightElement, Box, Flex, Center, Spacer
} from "@chakra-ui/react"

function SignupForm({ handleUser }){

const history = useHistory()

    const initialState = {
      email: "",
      password: "",
      firstname: "",
      lastname: ""
    }

    const [formData, setFormData] = useState(initialState)

    function handleSubmit(event) {
      event.preventDefault();
      
      console.log(formData);

    fetch(`http://localhost:3000/users`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(formData)
      }) 
        .then(res => res.json)
        .then(res => {
              
              handleUser(res)
              history.push('/')
        })
   

        setFormData(initialState)
      }

      function handleChange(e){
        setFormData({
          ...formData,
            [e.target.name]: e.target.value
        })
      }

      return (

         <Center  h="550px" >

         <Flex alignItems="center"> 
        <form onSubmit={handleSubmit}>
          <h1>Create your Account</h1>
           <Box p={4}> <FormControl   isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /> </FormControl></Box><Spacer/>
          <Box p={4}> <FormControl   isRequired>
            <FormLabel 
         htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /></FormControl></Box><Spacer/>
          <Box p={4}> <FormControl   isRequired>
            <FormLabel htmlFor="firstname">Firstname</FormLabel>
          <Input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          </FormControl></Box><Spacer/>

          <Box p={4}> <FormControl   isRequired>
            <FormLabel 
        htmlFor="lastname">Lastname</FormLabel>
          <Input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          </FormControl></Box><Spacer/>
           <Button type="submit" value="signup" >Sign Up</Button> 
        </form>
            </Flex>
    </Center>
      );
}

export default SignupForm;