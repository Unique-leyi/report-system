"use client";
import {  
    VStack, 
    Box, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Heading, 
    Text, 
    Flex,
} from '@chakra-ui/react';
import Image from "next/image";
import Link from "next/link";
import { confetti } from '../../../public/assets';



const ReportSuccess = ({ handleIsOpen }) => {
    
    return (   
        <Modal blockScrollOnMount={false} isOpen={handleIsOpen}>
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
                
                <ModalHeader>
                    <Flex justify={"center"} align="center" direction={"column"}>
                        <Image src={confetti} alt="confetti"/>
                    </Flex>
                </ModalHeader>
            <ModalBody>
                <VStack>
                    <Heading as="h4" className="!text-lg !text-white !text-center !font-outfit !font-bold" mb='1rem'>
                        Task report updated 
                    </Heading>

                    <Text className="!text-center" sx={{
                        color:"var(--darkmode-text-grey, #A5B3B3) !important"
                    }}>
                         You have successfully updated your task report
                    </Text>
                </VStack>
            </ModalBody>
    
            <ModalFooter>
                <VStack w="100%" direction='row' spacing={4} align='center'>
                    <Link href="/dashboard/reports" w="100%" className={`!bg-farblue !py-[10px] !px-4 !text-primary text-center font-semibold !rounded-lg`}>
                        Go back to reports
                    </Link>
                </VStack>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}  
    


export default ReportSuccess
