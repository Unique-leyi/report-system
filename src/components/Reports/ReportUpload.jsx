"use client";
import { 
    Stack, 
    VStack, 
    Box, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Button,
    FormControl, 
    FormLabel, 
    Input,
    Textarea,
    Select, 
    InputGroup, 
    Heading, 
    Text, 
    Badge,
    Flex 
} from '@chakra-ui/react';
import classes from "../styles/reportupload.module.css";
import { useState } from 'react';

const ReportUpload = () => {
    const [formData, setFormData] = useState({
        task_headline: "",
        task_summary: "",
        task_date: "",
        task_image: null,
    })
    
    const handleChange = () => {

    }
    return (
       <VStack sx={{
        padding: "4rem 3rem !important",
        }}>
            <Box w={{ 
                base: "100%",
                lg: "45%",
             }} 
                sx={{
                    borderRadius: "24px !important",
                    backgroundColor: "var(--darkmode-bg-02, #141F1F) !important",
                    padding: "24px !important",
                }}>
                <Card bg="transparent" className="!shadow-transparent" gap={14}>

                    <CardHeader>
                        <Stack>
                            <Flex w="100%" justify="center" align="center" direction="column" gap={4}>
                                <Heading as="h5" className="!text-white !text-4xl !font-bold">
                                    Upload task report
                                </Heading>
                                <Text className={classes.upload_text}>
                                    Record, Update and track team’s progress.
                                </Text>
                            </Flex>
                        </Stack>
                    </CardHeader>

                    <CardBody gap={10}>
                        <Flex justify="flex-start" align="flex-start" gap="1rem" direction="column">
                            <Box w="100%">
                                <FormControl id="task-headline">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Task Headline</FormLabel>
                                    <Input type="text" name="task_headline" onChange={handleChange} value={formData.task_headline} placeholder="Give your task an headline" className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                        fontSize: "14px",
                                        fontFamily: "Outfit",
                                        fontWeight: 300,
                                    }}/>
                                </FormControl>
                            </Box>

                            <Box w="100%">
                                <FormControl id="task-summary">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Task Summary</FormLabel>
                                    <Textarea size={"lg"} type="text" name="task_summary" onChange={handleChange} value={formData.task_summary} placeholder="Give a brief summary of the task" className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                        fontSize: "14px",
                                        fontFamily: "Outfit",
                                        fontWeight: 300,
                                    }}/>
                                </FormControl>
                            </Box>

                            <Box w="100%">
                                <FormControl id="task-date">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Select Date</FormLabel>
                                    <Select name="task_date" onChange={handleChange} value={formData.task_date} placeholder="Select date" className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                        fontSize: "14px",
                                        fontFamily: "Outfit",
                                        fontWeight: 300,
                                        color: "rgba(255,255,255,0.08)",
                                    }}>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                            </Box>

                            <VStack spacing={10}>
                                <Box display='flex' alignItems="center" gap="0.8rem">
                                    <Badge className="!text-xs" border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' backgroundColor={"var(--darkmode-bg-01, #0E1515);"} color="white" sx={{
                                        padding: "0.5rem !important",
                                    }}>
                                        Design
                                    </Badge>

                                    <Badge className="!text-xs" border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' backgroundColor={"var(--darkmode-bg-01, #0E1515);"} color="white" sx={{
                                        padding: "0.5rem !important",
                                    }}>
                                        Development
                                    </Badge>
                                </Box>
                            </VStack>
                        </Flex>
                    </CardBody>

                </Card>
            </Box>
       </VStack>
    )
}

export default ReportUpload