"use client";
import { Stack } from '@chakra-ui/react';
import DashboardBar from "./DashboardBar";
import Welcome from "./Welcome";

const DashboardHeader = ({ children }) => {
    return (
        <Stack>
            <Stack className="!bg-primary">
                <DashboardBar/>
                <Welcome/>
            </Stack>

            { children }
        </Stack>
    )
}

export default DashboardHeader