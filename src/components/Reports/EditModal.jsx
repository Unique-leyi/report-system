"use client";
import { 
    Stack, 
    VStack, 
    HStack, 
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
    Flex,
} from '@chakra-ui/react';



const EditModal = ({ handleIsOpen, handleOnClose, handleOnCancel, handleOnAccept, isLoading }) => {
    
    return (   
        <Modal blockScrollOnMount={false} isOpen={handleIsOpen} onClose={handleOnClose}>
            <ModalOverlay backgroundColor={"rgba(0,0,0,0.8) !important"}/>
            <ModalContent
                data-aos="zoom-in"
                data-aos-duration="500"
                backgroundColor="var(--darkmode-bg-02, #141F1F)"
                gap={"2rem !important"}
                sx={{
                    borderRadius: {
                        base: "8px 8px 0 0 !important",
                        lg: "8px !important",
                    },
                    padding: "1rem !important",
                    position: {
                        base: "fixed !important",
                        lg: "relative !important",
                    },
    
                    bottom: {
                        base: "0% !important",
                        md: "-5% !important",
                    },

                    marginBlock: {
                        base: "0 !important",
                        md: "8px !important",
                        lg:"8rem !important",
                    }
                }}
            >

            <HStack w="100% !important" justify={"space-between"} direction='row' align='center'>
                <ModalHeader className='!text-white !inline !w-full'>Edit report</ModalHeader>
                <ModalCloseButton className="!text-white" onClick={handleOnClose}/>
            </HStack> 

            <ModalBody>
                <VStack>
                    <Heading as="h4" className="!text-lg !text-white !text-center !font-outfit !font-bold" mb='1rem'>
                        You can scroll the content behind the modal
                    </Heading>

                    <Text className="!text-center" sx={{
                        color:"var(--darkmode-text-grey, #A5B3B3) !important"
                    }}>
                         There will be changes in your earlier report.
                    </Text>
                </VStack>
            </ModalBody>
    
            <ModalFooter>
                <Stack w="100%" direction='row' spacing={4} align='center'>
                    <Button w="100%" className={`hover:!bg-farblue !border-[1px] !border-solid !border-farblue py-[10px] px-4 !text-farblue hover:!text-primary !bg-transparent text-center font-semibold`} onClick={handleOnCancel}>
                        Cancel
                    </Button>

                    <Button w="100%" className={`!bg-farblue py-[10px] px-4 !text-primary text-center font-semibold`}onClick={handleOnAccept} loadingText="Submitting...." isLoading={isLoading}>
                        Yes, edit report
                    </Button>
                </Stack>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}  
    

export default EditModal
