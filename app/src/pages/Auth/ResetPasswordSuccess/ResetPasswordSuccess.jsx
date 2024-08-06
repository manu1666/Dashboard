import React from 'react'
import Card from '../../../components/Card'
import { Box, Button, Center, Container, Icon, Text, VStack } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ResetPasswordSuccess = () => {
  return (
    <Container>
      <Center minH='100vh'>
        <Card p={{base:"4",md:"10"}} showCard ='true'>
          <VStack>
            <Icon as={FaCheckCircle} boxSize="48px" color="#059669"/>
            <Text textStyle="h4" color="p.black" fontWeight='medium'>Successfully Sent !</Text>
            <Text align="center" textStyle="p2" color='black.60'>
              Now you can access your account
            </Text>
            <Box w='full'>
              <Link to='/signin'>
              <Button w='full'>Sign In</Button>
              </Link>
            </Box>
          </VStack>
      </Card>
    </Center>
    </Container>
  )
}

export default ResetPasswordSuccess