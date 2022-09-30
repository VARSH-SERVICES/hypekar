import { useDisclosure, Button, Modal, ModalOverlay, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Radio, Stack, RadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
export function TimeBooking() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [time, setTime] = useState("")

    // const handleChange = (e) =>{
    //     setTime(e.target.value)
    // }

    console.log("time is", time)
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Time Slot</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <RadioGroup onChange={(e)=>{
                    setTime(e.target.value)
                }}>
                <Radio >10:00AM to 11:00PM</Radio>
                <Radio>12:00PM to 01:00PM</Radio>
                <Radio>01:00PM to 02:00PM</Radio>
                <Radio>02:00PM to 03:00PM</Radio>
                <Radio>03:00PM to 04:00PM</Radio>
                <Radio>04:00PM to 05:00PM</Radio>
                <Radio>05:00PM to 06:00PM</Radio>
            </RadioGroup>
             
            </ModalBody>
            {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    )
  }