import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddData, fetchData } from '../Redux/Action';

export const TodoInput=()=>{
  const [first_name,setfirst_name]=useState("")
  const [last_name,setlast_name]=useState("")
  const [email,setemail]=useState("")
  const [mobile,setmobile]=useState("")
  const navigate = useNavigate();

  // console.log(first_name)
  // console.log(last_name)
  // console.log(email)
  // console.log(mobile)
  const dispatch=useDispatch()

  const handleAdd=()=>{
   const addData={
    first_name:first_name,
    last_name:last_name,
    email:email,
    mobile:mobile
   }
   
      dispatch(AddData(addData))
      dispatch(fetchData())
      navigate("/show")
      
  }
 
    return(
     <Box>
<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
           Add Your Record
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={(e)=>setfirst_name(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e)=>setlast_name(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setemail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Mobile</FormLabel>
              <InputGroup>
                <Input type="number" onChange={(e)=>setmobile(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                   >
              
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={handleAdd}>
                Add Details
              </Button>
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
    </Flex>
     </Box>
    )
}