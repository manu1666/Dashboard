import React from 'react'
import { Card as ChakraCard } from '@chakra-ui/react'

const Card = ({ children,showCard=false, ...props }) => {
  return (
    <ChakraCard 
      p={{base: showCard ? "4" : '0',md:"6"}} 
      bg={{base: showCard ? "white" : 'transparent',md:"white"}} 
      borderRadius={{base: showCard ? "1rem" : 'none',md:"6",md:"16px"}} 
      w="456px" 
      boxShadow={{base: showCard ? "md" : 'none', md:"6", md:"lg"}}
      {...props} 
    >
      {children}  
    </ChakraCard>
  )
}

export default Card