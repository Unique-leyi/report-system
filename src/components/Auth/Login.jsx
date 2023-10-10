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
    Heading, 
    Text, 
    Flex ,
} from '@chakra-ui/react';
import classes from "../styles/reportupload.module.css";
import { useState } from 'react';
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import validation from '../../../validation/validation';
import { useRouter } from 'next/navigation';
import { login } from "../../../server/login";

const Login = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const areAllFieldsFilled = () => {
        return (
          formData.username.trim() !== '' &&
          formData.password.trim() !== ''
        );
      };
      
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setIsFormFilled(areAllFieldsFilled());

    }

    const handleValidateForm = (formData) => {
        const formErrors = validation(formData);
        setErrors(formErrors);
        return formErrors;
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formErrors = handleValidateForm(formData);
    

    //Upload to DB and Send to Email
    if (Object.keys(formErrors).length === 0) {
        
        //Upload to DB
        if (Object.keys(formErrors).length === 0) {
            
            setIsLoading(true);
            try{

            const response = await login(formData.username, formData.password);
            console.log(response);

            } catch(err) {
                console.log(err)
            }
        
        }
    }
}


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
                        <Text>Go back to home</Text>
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
                                   Login
                                </Heading>
                                <Text className={classes.upload_text}>
                                   Using your valid credentials
                                </Text>
                            </Flex>
                        </Stack>
                    </CardHeader>

                    <CardBody gap={10}>
                        <Flex justify="flex-start" align="flex-start" gap="1.4rem" direction="column">
                            <Box w="100%">
                                <FormControl id="username">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Username</FormLabel>
                                    <Input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Enter your username" className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                        fontSize: "14px",
                                        fontFamily: "Outfit",
                                        fontWeight: 300,
                                    }}/>
                                </FormControl>
                                { errors.username && <p className="!text-red-400 !text-sm">{errors.username}</p> }
                            </Box>

                            <Box w="100%">
                                <FormControl id="password">
                                    <FormLabel className="!text-white !mb-2 !text-sm !font-outfit">Password</FormLabel>
                                    <Input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Enter your password" className=" !text-white !bg-[#0E1515] !border-[1px] !py-[10px] !px-[14px] !border-[rgba(255,255,255,0.08)]" _placeholder={{
                                        fontSize: "14px",
                                        fontFamily: "Outfit",
                                        fontWeight: 300,
                                    }}/>
                                </FormControl>
                                { errors.password && <p className="!text-red-400 !text-sm">{errors.password}</p> }
                            </Box>

                            

                            <Stack w="100%" spacing={10}>
                                <Button
                                    className={` ${!isFormFilled ? "!bg-farash " : "!bg-farblue"} !bg-farash hover:!bg-farblue py-[10px] px-4 text-primary text-center font-semibold !rounded-full`}
                                    loadingText="Submitting...."
                                    size="md"
                                    width={"100%"}
                                    isDisabled={!isFormFilled}
                                    isLoading={isLoading}
                                    onClick={handleFormSubmit}
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

export default Login