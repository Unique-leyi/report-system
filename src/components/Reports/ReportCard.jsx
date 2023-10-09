"use client";
import { 
    Stack, 
    VStack, 
    Box, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading, 
    Text, 
    Badge, 
} from '@chakra-ui/react';
import Image from "next/image";
import { avatar } from "../../../public/assets"

const ReportCard = ({ handleOpen, task_title, task_tags, task_images, task_date, task_author }) => {
    return (
        <Card data-aos="zoom-in" data-aos-duration="2000" gap={4} sx={{
            borderRadius: "24px",
            border: "1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))",
            backgroundColor: "var(--darkmode-bg-02, #141F1F)",
            padding: "2rem 1rem !important",
        }} onClick={handleOpen} className="!cursor-pointer hover:!ease-in hover:!duration-100 hover:!scale-105">
           <CardHeader>
                <Stack spacing={4}>
                    <Box w="100%" sx={{ 
                        display: "flex !important",
                        justifyContent: "space-between !important",
                        alignItems: "center",
                        gap: "1rem",
                     }}>
                        <Stack>
                            <Box w="100%">
                                <Image src={avatar} alt="avatar"/> 
                            </Box>
                        </Stack>

                        <Stack>
                            <Box w="100%">
                                <Heading as="h6" color="var(--white-100, #FFF)" className="!text-white !font-medium !text-sm">
                                   { task_date }
                                </Heading>
                                <Text className="!text-xs !font-normal" sx={{
                                    color: "var(--darkmode-text-grey, #A5B3B3)",
                                }}>
                                    Uploaded by: { task_author }
                                </Text>
                            </Box>
                        </Stack>
                        
                    </Box>
                </Stack>

                <Stack>
                    <Box w="100%" sx={{ 
                        display: "flex !important",
                        justifyContent: "center !important",
                        alignItems: "center",
                        gap: "2rem",
                     }}>

                        <Stack>
                            <Box w="100%">
                                <Heading as="h4" color="var(--white-100, #FFF)" className="!text-white !font-bold !text-2xl !mt-3">
                                    { task_title }
                                </Heading>
                            </Box>
                        </Stack>
                        
                    </Box>
                </Stack>
            </CardHeader>

            <CardBody>
                <VStack spacing={10}>
                    <Box display='flex' alignItems="center" gap="0.8rem">
                        {
                            task_tags.map((tag, i) => (
                                <Badge key={i} borderRadius='full' backgroundColor={"var(--darkmode-bg-01, #0E1515);"} color="white" sx={{
                                    padding: "1rem !important",
                                }}>
                                    { tag }
                                </Badge>
                            ))
                        }
                        
                    </Box>
                </VStack>
            </CardBody>

            <CardFooter>
                <Stack direction='row'>
                    {
                        task_images.map((image, i) => (
                            <Image
                                key={i}
                                width={100}
                                height={100}
                                priority={true}
                                src={image}
                                alt='report-image'
                            />
                        ))
                    }                 
                   
                </Stack>
            </CardFooter>
             
        </Card>
    )
}

export default ReportCard