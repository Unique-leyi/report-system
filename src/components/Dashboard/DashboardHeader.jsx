"use client";
import { Stack } from '@chakra-ui/react';
import DashboardBar from "./DashboardBar";
import Welcome from "./Welcome";

const DashboardHeader = () => {
    return (
        <Stack className="!bg-primary">
           <DashboardBar/>
           <Welcome/> 
        </Stack>
    )
}

export default DashboardHeader