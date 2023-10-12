"use client";
import { 
    Stack, 
    VStack, 
    HStack, 
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
import { avatar } from "../../../public/assets";
import { convertDate } from '../../../utils/helper';



const ReportCard = ({ id, handleOpen, task_headline, task_tags, task_images, task_date }) => {

    const visibleImages = task_images.slice(0, 2);
    const remainingImagesCount = Math.max(0, task_images.length - 2);

    
    return (
        <Card data-aos="zoom-in" data-aos-duration="2000" gap={4} 
            sx={{
                borderRadius: "24px",
                border: "1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))",
                backgroundColor: "var(--darkmode-bg-02, #141F1F)",
                padding: "2rem 1rem !important",
            }} 
            onClick={handleOpen} 
            className="!cursor-pointer hover:!ease-in hover:!duration-100 hover:!scale-105"
        >
           <CardHeader>
                <Stack spacing={4}>
                    <Box w="100%" sx={{ 
                        display: "flex !important",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: {
                            base: "1.2rem !important",
                            md: "1rem !important"
                        },
                     }}>
                        <Stack>
                            <Box w="100%">
                                <Image src={avatar} alt="avatar"/> 
                            </Box>
                        </Stack>

                        <Stack>
                            <Box w="100%">
                                <Heading as="h6" color="var(--white-100, #FFF)" className="!text-white !font-medium !text-sm">
                                   { convertDate(task_date) }
                                </Heading>
                                <Text className="!text-xs !font-normal" sx={{
                                    color: "var(--darkmode-text-grey, #A5B3B3)",
                                }}>
                                    Uploaded by: Jason Charles
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
                                <Heading as="h4" color="var(--white-100, #FFF)" className="!text-white !font-bold !text-xl lg:!text-2xl !mt-3">
                                    { task_headline }
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
                <HStack direction='row' align={"center"}>
                    {
                        visibleImages.map((image, i) => (
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

                    {remainingImagesCount > 0 && (
                        <div className="absolute bg-[rgba(0, 0, 0, 0.4)] !py-1 !px-2 text-white bottom-10 right-16 z-2 rounded-full" style={{ backdropFilter: "blur(2px)" }}>
                        +{remainingImagesCount}
                        </div>
                    )} 

                </HStack>
            </CardFooter>
             
        </Card>
    )
}

export default ReportCard