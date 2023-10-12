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
import { useState, useEffect } from 'react';
import Dropzone from "./Dropzone";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import instance from '../../../utils/axiosconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadValidation from '../../../validation/uploadvalidation';
import { convertToBase64 } from "../../../utils/helper";
import { useAuth } from '../../context/AuthContext';
import EditModal from './EditModal';
import ReportSuccess from './ReportSuccess';


const EditReport = ({ reportId }) => {

    const { user } = useAuth();

    const [formData, setFormData] = useState({
        task_headline: "",
        task_summary: "",
        task_date: null,
        task_images: [],
        task_tags: [],
    });

    const [isFormFilled, setIsFormFilled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);
            try {
                const response = await instance.get(`/report/${user?._id}/${reportId}`);
        
               setFormData({
                    task_headline: response?.data?.task_headline,
                    task_summary: response?.data?.task_summary,
                    task_date: response?.data?.task_date,
                    task_tags: response?.data?.task_tags,
                    task_images: response?.data?.task_images,
                });

            } catch (error) {
                const { response } = error
                toast.error(response?.data?.error);
                router.back();
            } finally {
                setIsLoading(false);
            }
        }
    
        fetchPost();
    }, [reportId]);

    const areAllFieldsFilled = () => {
        const { task_headline, task_summary, task_date, task_tags, task_images } = formData;
        return (
            task_headline.trim() !== '' &&
            task_summary.trim() !== '' &&
            task_date &&
            task_tags.length > 0 &&
            task_images.length > 0
        );
    };
      
    
      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setIsFormFilled(areAllFieldsFilled());
    }
    
    const toggleTagBtns = (value) => {
        const tags = formData.task_tags.slice();
        if (tags.includes(value)) {

            const index = tags.indexOf(value);
            tags.splice(index, 1);
        } else {
            tags.push(value);
        }
        setFormData({
            ...formData,
            task_tags: tags,
        });
        setIsFormFilled(areAllFieldsFilled());
    };

    

    const uploadImage = async (e) => {
        const files = e.target.files;

        if (files.length === 1) {
            const base64Image = await convertToBase64(files[0]);
            uploadSingleImage(base64Image);
        } else if (files.length > 1) {
            const convertedImages = await Promise.all(
                Array.from(files).map((file) => convertToBase64(file))
            );
            uploadMultipleImages(convertedImages);
        }
    };

    const uploadSingleImage = async (base64) => {
        try {
            const imageUpload = await instance.post(`/uploadImage`, {
                image: base64
            });

            setFormData((prevData) => ({
                ...prevData,
                task_images: [...prevData.task_images, imageUpload.data.message]
            }));

            setIsFormFilled(areAllFieldsFilled());

        } catch (err) {
            console.log(err);
        }
    };

    const uploadMultipleImages = async (images) => {
        try {
            const imageUpload = await instance.post(`/uploadImages`, {
                images
            });

            setFormData((prevData) => ({
                ...prevData,
                task_images: [...prevData.task_images, ...imageUpload.data.message]
            }));

            setIsFormFilled(areAllFieldsFilled());

        } catch (err) {
            console.log(err);
        }
    };

    const handleValidateForm = (formData) => {
        const formErrors = uploadValidation(formData);
        setErrors(formErrors);
        return formErrors;
    }

    const sendFormSubmit = async () => {
        setIsLoading(true);
        try {

    
         const formDataToSend = {
             task_headline: formData.task_headline,
             task_summary: formData.task_summary,
             task_date: formData.task_date,
             task_tags: formData.task_tags,
             task_images: formData.task_images,
             userId: user?._id,
         }

         const response = await instance.put(`/report/${user?._id}/${reportId}`, formDataToSend);
         setShowSuccess(true);
        
        } catch(err) {
            const { response } = err;
            toast.error(response?.data?.error);
        } finally {
            setIsLoading(false);
            setShowConfirm(false);
        }

    
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formErrors = handleValidateForm(formData);
    
        //Upload to DB
        if (Object.keys(formErrors).length === 0) {
            setShowConfirm(true);
        }
    }

    

    const removeFile = (name) => {

        const updatedFiles = formData.task_images.filter((file) => file.name !== name);
        setFormData((prevData) => ({
          ...prevData,
          task_images: updatedFiles,
        }));
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
                                <Text className={`${classes.upload_text} !text-center`}>
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
                                { errors.task_headline && <p className="!text-red-400 !text-sm">{errors.task_headline}</p> }
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
                                { errors.task_summary && <p className="!text-red-400 !text-sm">{errors.task_summary}</p> }
                            </Box>

                            <Box w="100%">
                                <FormControl id="task_date">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Select Date</FormLabel>
                                    <DatePicker
                                        selected={formData.task_date}
                                        onChange={(date) => setFormData({ ...formData, task_date: date })}
                                        placeholderText="Select date"
                                        className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]"
                                        _placeholder={{
                                            fontSize: "12px",
                                            fontFamily: "Outfit",
                                            fontWeight: 300,
                                        }}
                                    />

                                </FormControl>
                                { errors.task_date && <p className="!text-red-400 !text-sm">{errors.task_date}</p> }
                            </Box>

                            <VStack spacing={10}>
                                <Box display='flex' alignItems="center" gap="0.8rem">
                                    <Button className={`!text-xs ${
                                        formData.task_tags?.includes("design") ? "!border-blue-300": ""
                                    } hover:!border-blue-300`} border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' color="white" sx={{
                                        padding: "0.3rem 0.5rem !important",
                                        backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                                    }} onClick={() => toggleTagBtns("design")}>
                                        Design
                                    </Button>

                                    <Button className={`!text-xs ${
                                        formData.task_tags?.includes("development") ? "!border-blue-300": ""
                                    } hover:!border-blue-300`} border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))" borderRadius='full' color="white" sx={{
                                        padding: "0.3rem 0.5rem !important",
                                        backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                                    }} onClick={() => toggleTagBtns("development")}>
                                        Development
                                    </Button>
                                </Box>
                                { errors.task_tags && <p className="!text-red-400 !text-sm">{errors.task_tags}</p> }
                            </VStack>

                            <VStack spacing={10}>
                                <Dropzone
                                    name="task_images"
                                    files={formData.task_images}
                                    onFileChange={(e) => uploadImage(e)}
                                    onRemoveFile={removeFile} // Pass the removeFile function
                                />
                                { errors.task_images && <p className="!text-red-400 !text-sm">{errors.task_images}</p> }   
                            </VStack>

                            <Stack w="100%" spacing={10}>
                                <Button
                                    className={` ${!isFormFilled ? "!bg-farash " : "!bg-farblue"} !bg-farash hover:!bg-farblue py-[10px] px-4 text-primary text-center font-semibold !rounded-full`}
                                    size="md"
                                    width={"100%"}
                                    isDisabled={!isFormFilled}
                                    onClick={handleFormSubmit}
                                >
                                Upload Report
                                </Button>
                            </Stack>
                        </Flex>
                    </CardBody>

                </Card>
            </Box>

            <EditModal 
                    handleIsOpen={showConfirm} 
                    handleOnClose={() => setShowConfirm(false)}
                    handleOnAccept={sendFormSubmit}
                    isLoading={isLoading}
                    handleOnCancel={() => setShowConfirm(false)} 
                /> 

                <ReportSuccess handleIsOpen={showSuccess}/>


            <ToastContainer/>
       </VStack>
    )
}

export default EditReport