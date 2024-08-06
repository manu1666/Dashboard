import React, { useEffect } from 'react'
import Card from '../../../components/Card'
import { Box, Button, Center, Container, Icon, Spinner, Text, useEditable, useToast, VStack } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { sendVerificationMail } from '../../../api/query/userQuery';

const RegisterEmailVerify = () => {
  const toast = useToast();
  const { email } = useParams();

  console.log(location);

  if(email === "") {
    return <Center h="100vh">Invalid Email</Center>
  }

  const { mutate,isSuccess,isLoading} = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,
    onSettled: (data) => {
      console.log(data)
    },
    onError: (error) => {
      toast({
        title: "Sign Up Error",
        description: error.message,
        status: "error"
      });
    },
    enabled: !!email,
  });

  useEffect(()=>{
    mutate({ email })
  },[email])

  
  return (
   <Container>
     <Center minH='100vh'>
       
          <Card p={{base:"4",md:"10"}} showCard='true'>
            <VStack spacing={6}>
              <Icon as={MdEmail} boxSize="48px" color="p.purple"/>
              <Text textStyle="h4" color="p.black" fontWeight='medium'>Email Verification</Text>
              <Text align="center" textStyle="p2" color='black.60'>
                We have sent you an email verification to  <Box color='p.black' as='b'>
                  {email}
                </Box> 
                If you didn't receive it, click the button below.
              </Text>
              <Button 
              w='full' 
              variant="outline"
              onClick={() => {
                mutate({email});
              }}
              isLoading={isLoading}>
                Resend Email
              </Button>
            </VStack>
        </Card>
    
    </Center>
   </Container>
  )
}

export default RegisterEmailVerify;