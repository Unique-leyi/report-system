"use client";

import { 
    Stack, 
    VStack, 
    HStack, 
    SimpleGrid, 
    Box, 
    Heading, 
    Button,
    Flex,
    Spacer, 
} from '@chakra-ui/react';
import classes from "../styles/welcome.module.css";
import Image from "next/image";
import { calendar, wave } from "../../../public/assets/";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useReportContext } from '../../context/ReportContext';

const Welcome = () => {
    const { onOpen } = useReportContext();


    return (
        <Stack w="100%">
             <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10} sx={{ padding: {
                base: "2rem !important",
                sm: "1rem 4rem !important"
            } }}>
                <VStack w={"100%"} sx={{ padding: "2rem !important" }} gap={10}> 
                    <Box w="100%" className="!flex !justify-start !items-start !flex-col !gap-3">
                        <Flex justify={"flex-start"} align={"flex-start"} gap={3}>
                            <Heading as="h5" 
                                color={"var(--white-50, rgba(255, 255, 255, 0.50))"}
                                className={classes.welcome_text}>
                                Welcome back Admin
                            </Heading>

                            <Image src={wave} alt="hand-wave-image" priority={true}/>

                        </Flex>

                        <Heading as="h5" className="!text-white !text-4xl !font-bold">
                            Welcome to our report dashboard
                        </Heading>

                        <Heading as="h6" className="!text-sm !font-normal" color={"var(--white-70, rgba(255, 255, 255, 0.70));"}>
                             Record, Update and track team’s progress.
                        </Heading>
                    </Box>
                 
                        <Box w="100%">
                            <Flex justify="around" align="center" gap={4}>
                                <Heading as="h5" className="!text-white !text-lg !font-bold">
                                    2023
                                </Heading>

                                <Button leftIcon={<MdKeyboardArrowLeft w={10} h={10}/>} rightIcon={<MdKeyboardArrowRight/>} className="!uppercase !rounded-full !py-[15px] !px-[12px] text-xs" sx={{
                                    border: "1px solid var(--white-8, rgba(255, 255, 255, 0.08))",
                                    backgroundColor: "#1C2B2B !important",
                                    color: "white",
                                }}>
                                    all
                                </Button>

                                <Button leftIcon={<MdKeyboardArrowLeft/>} rightIcon={<MdKeyboardArrowRight/>} className="!uppercase !rounded-full !py-[15px] !px-[12px] text-xs" sx={{
                                    border: "1px solid var(--white-8, rgba(255, 255, 255, 0.08))",
                                    backgroundColor: "#1C2B2B !important",
                                    color: "white",
                                }}>
                                    all
                                </Button>

                                <Button className="!bg-farblue !rounded-full !py-4 !px-7" onClick={onOpen}>
                                    Upload Report
                                </Button>
                            </Flex>

                        </Box>
                    
                </VStack>

                <VStack>
                   <Box w="100%" sx={{
                        display: "flex !important",
                        justifyContent: {
                            base: "center !important",
                            sm: "flex-end !important",
                        },
                        alignItems: {
                            base: "center !important",
                            sm: "flex-end !important"
                        },
                        flexDirection: "column !important"
                   }}>
                     <Image src={calendar} alt="calendar" priority={true}/>
                   </Box> 
                </VStack>
            </SimpleGrid>       
        </Stack>
    )
}

export default Welcome