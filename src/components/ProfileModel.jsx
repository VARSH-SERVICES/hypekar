import { useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Input,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
Button } from "@chakra-ui/react"
import axios from "axios"
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { GameStateContext } from './context/Context';
import { useContext } from 'react';

export function ProfileModel() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const {email, setUserLogout, userLogout} = useContext(GameStateContext);


  const getLogout = async() => {
     const res = await axios.get("https://c56d-103-148-62-156.in.ngrok.io/logout/")
     console.log("res is", res)
     setUserLogout(res.data.massage)
    }
 
    console.log("logout message is", userLogout)
  return (
    <>
      <Button onClick={onOpen}>PROFILE</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      
      >
        <ModalOverlay />
        <ModalContent   w="300px">
          <ModalHeader>Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Button>My Profile</Button>
            </FormControl>

            <FormControl mt={4}>
                {/* <Link to="/"> */}
               <Button onClick={getLogout}>Logout</Button>
               {/* </Link> */}
            </FormControl>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  )
}