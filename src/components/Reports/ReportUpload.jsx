"use client";
import { 
    Stack, 
    VStack, 
    Box, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading, 
    Text, 
    Badge, 
} from '@chakra-ui/react';

const ReportUpload = ({ handleIsOpen, handleOnClose }) => {
    return (
        <Modal isOpen={handleIsOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Welldone</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleOnClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default ReportUpload