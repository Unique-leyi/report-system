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
    Flex,
} from '@chakra-ui/react';
import { TbEdit } from "react-icons/tb";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { avatar, imageOne, imageTwo } from "../../../public/assets/";
import classes from "../styles/reportdetails.module.css";
import instance from '../../../utils/axiosconfig';
import { useAuth } from '../../context/AuthContext';
import { getReport } from '../../../utils/getReports';
import { useEffect, useState } from 'react';
import { convertDate } from '../../../utils/helper';
import Link from "next/link";



const ReportDetails = ({ reportId, handleIsOpen, handleOnClose }) => {

    const { isAuthenticated } = useAuth();
    const [report, setReport] = useState({});

    useEffect(() => {
        const fetchReport = async () => {
            const report = await getReport(reportId);
            setReport(report?.Report);

        }

        fetchReport();
    }, [reportId]);

    return (
        <Modal blockScrollOnMount={false} isOpen={handleIsOpen} onClose={handleOnClose} sx={{
            overflow: "auto !important",
        }}
        >
       
        <ModalOverlay />
        <ModalContent 
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
                borderRadius: {
                    base: "24px 24px 0 0 !important",
                    lg: "24px !important",
                },
                border: "1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12)) !important",
                backgroundColor: "var(--darkmode-bg-02, #141F1F)",
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

            <ModalCloseButton className="!bg-white !rounded-full !text-black !p-6" 
                sx={{
                    position: "absolute",
                    top: "-4.5rem !important",
                    right: "0rem !important",
                    zIndex: 9999,
                }}
            />
         
       
          <ModalHeader sx={{
            overflow: "hidden !important",
            borderRadius: "24px !important",
            padding: "4px !important",
          }}>

            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={false}
              modules={[Pagination, Navigation, Autoplay]}
              className={classes.detail_bullet}
            >
                {
                    report?.task_images?.map((image, i) => (
                        <SwiperSlide key={i}>
                            <Box className={classes.image_box}>
                                <Image
                                    // fill 
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    width={1000}
                                    height={500}
                                    src={image} 
                                    alt="report-images" 
                                    priority={true}
                                /> 
                            </Box>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
          </ModalHeader>
          <ModalBody>
          <Stack>
                <Box w="100%" sx={{ 
                    display: "flex !important",
                    justifyContent: "flex-start !important",
                    alignItems: "flex-start !important",
                    flexDirection: "column !important",
                    gap: "1rem",
                    padding: "1rem !important",
                }}>

                    <Stack>
                        <Box w="100%">
                            <Heading as="h4" color="var(--white-100, #FFF)" className="!text-white !font-bold !text-2xl !mt-3">
                                { report?.task_headline }
                            </Heading>
                        </Box>
                    </Stack>

                    <Stack>
                        <Box w="100%">
                            <Text color="var(--white-70, rgba(255, 255, 255, 0.70))" className="!font-normal !text-sm">
                                { report?.task_summary }
                            </Text>
                        </Box>
                    </Stack>

                    <VStack spacing={10}>
                        <Box display='flex' alignItems="center" gap="0.8rem">
                            {
                                report?.task_tags &&
                                report?.task_tags?.map((tag, i) => (
                                        <Badge key={i} borderRadius='full' backgroundColor={"var(--darkmode-bg-01, #0E1515);"} color="white" sx={{
                                            padding: "1rem !important",
                                        }}>
                                        { tag }
                                        </Badge>
                                    ))
                            }
                        </Box>   
                    </VStack>

                    
                    
                </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Stack w="100%" spacing={4}>
                <Flex justify={{
                    base: "flex-start",
                    lg: "space-between",
                }} align={{
                    base: "flex-start",
                    lg: "center"
                }} gap={{
                    base: 1,
                    lg: 4,
                }} direction={{
                    base: "column",
                    md: "row",
                }}>
                    <Box sx={{ 
                            display: "flex !important",
                            justifyContent: "space-between !important",
                            alignItems: "center !important",
                            gap: {
                                base: "0.4rem",
                                lg: "1rem",
                            },
                            padding: "1rem !important",
                    }}
                    >
                        <Stack>
                            <Box w="100%">
                                <Image src={avatar} alt="avatar"/> 
                            </Box>
                        </Stack>

                        <Stack>
                            <Box w="100%">
                                <Heading as="h6" color="var(--white-100, #FFF)" className="!text-white !font-medium !text-sm">
                                    { convertDate(report?.task_date) }
                                </Heading>
                                <Text className="!text-xs !font-normal" sx={{
                                    color: "var(--darkmode-text-grey, #A5B3B3)",
                                }}>
                                    Uploaded by: { report?.task_author }
                                </Text>
                            </Box>
                        </Stack>
                    </Box>

                    <Box w={{
                        base: "100%",
                        lg: "initial"
                    }} sx={{
                        padding: {
                            base: "4px 6px !important",
                            lg: "0 !important",
                        }
                    }}>

                        {
                            isAuthenticated() &&
                                <Link href={`/dashboard/reports/${report?._id}/edit-report`}>
                                    <Button iconSpacing={"0.5rem !important"} leftIcon={<TbEdit/>} className="!bg-farblue !w-full lg:!w-[initial] !py-6 !px-4 lg:!mx-3 !rounded-full" sx={{
                                        border: "1px solid var(--white-8, rgba(255, 255, 255, 0.08)) !important",
                                        '.chakra-button__icon *': { fontSize: "1.6rem" },
                                    }}>
                                        Edit Report
                                    </Button> 
                                </Link>
                        }
                    </Box>

                </Flex>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default ReportDetails
