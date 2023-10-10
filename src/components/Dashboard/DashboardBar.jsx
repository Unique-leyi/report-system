"use client";
import { Stack, SimpleGrid, Box, Heading, Avatar, AvatarBadge } from '@chakra-ui/react';
import Link from "next/link";



const DashboardBar = () => {
    return (
        <Stack borderBottom={"1px solid rgba(255, 255, 255, 0.08)"}>

            <SimpleGrid columns={2} spacing={10} sx={{ paddingInline: {
                base: "2rem !important",
                sm: "4rem !important"
            } }}>

                <Box w="100%" className="!flex !justify-between !items-center !gap-4">
                    <Box w="100%" className="!hidden lg:!block !py-5 !px-0 lg:!px-8" borderRight={"1px solid rgba(255, 255, 255, 0.08)"}>
                        <Link href={"/"} className="!uppercase !text-white !font-inter">
                            Faraday logo
                        </Link>
                    </Box>

                    <Box w="100%" className="lg:!pl-3">
                        <Heading as="h3" className="!text-white !text-xl !font-normal">
                            Task Report Dashboard
                        </Heading>
                    </Box>

                </Box>

                <Box w="100%" className="!py-4 lg:!px-8 !flex !justify-end !items-end">
                    <Avatar>
                        <AvatarBadge boxSize='0.9em' bg='green.200'/>
                    </Avatar>
                </Box>

            </SimpleGrid>


            
        </Stack>

    )
}

export default DashboardBar