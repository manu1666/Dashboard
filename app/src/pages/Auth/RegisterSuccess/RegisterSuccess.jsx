import React, { useEffect } from 'react'
import Card from '../../../components/Card'
import { Box, Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { verfiyEmailAddressSignUp } from '../../../api/query/userQuery';
const RegisterSuccess = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();

  const { isSuccess,isLoading} = useQuery({
    queryKey: ['verify-email-token'],
    queryFn: () => verfiyEmailAddressSignUp  ({ token }),
    enabled: !!token,
    onError: (error) => {
      toast({
        title: 'SignUp error',
        description: error.message,
        status: 'error'
      });
      navigate('/signup');
    }
  });

  if(isLoading) 
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    )
  
  return (
    <Container>
      <Center minH='100vh'>
        {isSuccess && (
          <Card p={{base:"4",md:"10"}} showCard='true'>
            <VStack>
              <Icon as={FaCheckCircle} boxSize="48px" color="#059669"/>
              <Text textStyle="h4" color="p.black" fontWeight='medium'>Successful Registration</Text>
              <Text align="center" textStyle="p2" color='black.60'>
                Hurray! You have successfully created your account. Enter the app to explore all it's features.
              </Text>
            <Box w='full'>
              <Link to='/signin'>
                <Button w='full'>
                  Enter the App
                </Button>
              </Link>
            </Box>
            </VStack>
          </Card>
        )}
    </Center>
    </Container>
  )
}

export default RegisterSuccess