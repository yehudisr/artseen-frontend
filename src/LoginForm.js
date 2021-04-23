import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm';
import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Input, Form, Button, InputGroup, InputRightElement, Box, Flex, Center, Spacer
} from "@chakra-ui/react"

function LoginForm({ handleUser }) {

  const initialState = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)

    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'

      },
      body: JSON.stringify(formData)

    })
      .then(res => res.json())
      .then(res => { 
         handleUser(res)
      })

  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <Center  h="300px" >

   <Flex alignItems="center">
   
      <form onSubmit={handleSubmit}>
        

           <Box p={4}> <FormControl   isRequired>
            <FormLabel>Email</FormLabel>
            <Input id="email" name="email" value={formData.email}
          onChange={handleChange} placeholder="Email" />
            </FormControl></Box><Spacer/>
        
{/*       
           <Box> 
            
            <Input placeholder="Password" />
         
            </Box> */}


             <Box p={4}><InputGroup size="md"> 
             <FormControl isRequired>
             <FormLabel>Password</FormLabel>
            <Input
              id="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange} 
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="3.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>   </FormControl>
          </InputGroup>
          </Box>

       
        <Button type="submit" value="login" >Login</Button> 
     </form>  

    </Flex>
    </Center>
  );
}

export default LoginForm;