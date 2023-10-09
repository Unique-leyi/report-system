"use client";
import { 
    Stack, 
    VStack, 
    Box, 
    Card, 
    CardHeader, 
    CardBody, 
    Button,
    FormControl, 
    FormLabel, 
    Input,
    Textarea,
    Heading, 
    Text, 
    Flex ,
} from '@chakra-ui/react';
import classes from "../styles/reportupload.module.css";
import { useState } from 'react';
import Dropzone from "./Dropzone";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ReportUpload = () => {
    const [formData, setFormData] = useState({
        task_headline: "",
        task_summary: "",
        task_date: "",
        task_images: [],
        task_tags: [],
    });

    const [isFormFilled, setIsFormFilled] = useState(false);
    const areAllFieldsFilled = () => {
        const { task_headline, task_summary, task_date, task_tags, task_image } = formData;
        return (
          task_headline.trim() !== '' &&
          task_summary.trim() !== '' &&
          task_date.trim() !== '' &&
          task_tags.length > 0 &&
          task_image.length > 0
        );
      };
      
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setIsFormFilled(areAllFieldsFilled());

        console.log(formData);

    }

    const toggleTagBtns = (value) => {
        setFormData((prevData) => {
          const { task_tags } = prevData;
          if (task_tags.includes(value)) {
             //if it does exist, remove it
            return {
              ...prevData,
              task_tags: task_tags.filter((tag) => tag !== value),
            };
          } else {
            //if it does not exist, add it
            return {
              ...prevData,
              task_tags: [...task_tags, value],
            };
          }
        });
      };
    return (
       <VStack sx={{
        padding: {
            base: "1.5rem !important",
            md: "2.5rem 3rem !important",
        },
        }}>
             <Box mb={"0.5rem"} w={{ 
                    base: "100%",
                    lg: "45%",
                }}>
                <Link href="/dashboard/reports" className="!text-farash hover:!text-white">
                    <Flex justify="flex-start" align="center" gap="0.5rem">
                        <RiArrowLeftSLine mx='2px'/> 
                        <Text>Go back to reports </Text>
                    </Flex>
                </Link>
            </Box>

                
            <Box w={{ 
                base: "100%",
                lg: "45%",
             }} 
                sx={{
                    borderRadius: "24px !important",
                    backgroundColor: "var(--darkmode-bg-02, #141F1F) !important",
                    padding: "24px !important",
                    marginTop:"0.5rem !important",
                }}>
                   
                <Card bg="transparent" className="!shadow-none" gap={2}>

                    <CardHeader>
                        <Stack>
                            <Flex w="100%" justify="center" align="center" direction="column" gap={4}>
                                <Heading as="h5" className="!text-white !text-2xl md:!text-4xl !font-bold">
                                    Upload task report
                                </Heading>
                                <Text className={classes.upload_text}>
                                    Record, Update and track team’s progress.
                                </Text>
                            </Flex>
                        </Stack>
                    </CardHeader>

                    <CardBody gap={10}>
                        <Flex justify="flex-start" align="flex-start" gap="1.4rem" direction="column">
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
                                    <Textarea size={"lg"} name="task_summary" onChange={handleChange} value={formData.task_summary} placeholder="Give a brief summary of the task" className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                        fontSize: "14px",
                                        fontFamily: "Outfit",
                                        fontWeight: 300,
                                    }}/>
                                </FormControl>
                            </Box>

                            <Box w="100%">
                                <FormControl id="task-date">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Select Date</FormLabel>
                                    <DatePicker 
                                        selected={formData.task_date} 
                                        onChange={(date) => setFormData({...formData, task_date: date})}
                                        closeOnScroll={(e) => e.target === document}
                                        placeholderText="Select date"
                                        className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                            fontSize: "12px",
                                            fontFamily: "Outfit",
                                            fontWeight: 300,
                                        }}
                                    />
                                </FormControl>
                            </Box>

                            <VStack spacing={10}>
                                <Box display='flex' alignItems="center" gap="0.8rem">
                                    <Button name={"task_tags"} value={"design"} className={`!text-xs ${
                                        formData.task_tags.includes("design") ? "!border-blue-300": ""
                                    } hover:!border-blue-300`} border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' color="white" sx={{
                                        padding: "0.3rem 0.5rem !important",
                                        backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                                    }} onClick={() => toggleTagBtns("design")}>
                                        Design
                                    </Button>

                                    <Button name={"task_tags"} value={"development"} className={`!text-xs ${
                                        formData.task_tags.includes("development") ? "!border-blue-300": ""
                                    } hover:!border-blue-300`} border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' color="white" sx={{
                                        padding: "0.3rem 0.5rem !important",
                                        backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                                    }} onClick={() => toggleTagBtns("development")}>
                                        Development
                                    </Button>
                                </Box>
                            </VStack>

                            {/* <VStack spacing={10}>
                                <Dropzone name={"task_images"}/>   
                            </VStack> */}

                            <Stack w="100%" spacing={10}>
                                <Button
                                    className={` ${!isFormFilled ? "!bg-farash " : "!bg-farblue"} !bg-farash hover:!bg-farblue py-[10px] px-4 text-primary text-center font-semibold !rounded-full`}
                                    loadingText="Submitting...."
                                    size="md"
                                    width={"100%"}
                                    isDisabled={!isFormFilled}
                                >
                                Upload Report
                                </Button>
                            </Stack>
                        </Flex>
                    </CardBody>

                </Card>
            </Box>
       </VStack>
    )
}

export default ReportUpload