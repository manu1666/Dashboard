import React, { useState } from 'react'
import Card from '../../../components/Card'
import { Box, Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Formik ,Form,Field} from 'formik'
import { object, string,ref } from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { sendForgotMail } from '../../../api/query/userQuery';
import { useMutation } from 'react-query';
const ForgotPassword= () => {
  const forgotValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
    
  });

  const [email,setEmail] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const { mutate,isSuccess,isLoading} = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: sendForgotMail,
    onSettled: (data) => {
      console.log(data);
      navigate(`/forgot-success/${email}`)
    },
    onError: (error) => {
      toast({
        title: "Forgot Password Error",
        description: error.message,
        status: "error"
      });
    },
  });


  return (
  <Container>
      <Center minH='100vh'>
        <Card>
          <Link to='/signin'>
            <Icon as={FaArrowLeftLong} boxSize="6"/>
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h1">Forgot Password</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your email address for which account you want to reset your password.
          </Text>
          <Formik initialValues={{
            email: "",
            
          }}
          onSubmit={(values) => {
            console.log(values);
            setEmail((prev )=> (prev = values.email));
            mutate({ email: values.email })
          }}
          validationSchema={forgotValidationSchema}
          >
            {()=>(<Form>
            <Stack mt="8" spacing={6}>
              
              <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
              </Field>
              
              
              <Box>
                <Button w="full" type='submit'>Reset Password </Button>
                
              </Box>
          </Stack>
        </Form>
      )}  
      </Formik>
      </Card>
    </Center>
  </Container>
  )
}

export default ForgotPassword
