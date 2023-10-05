"use client";

import DashboardHeader from "./DashboardHeader";
import Reports from "../Reports/Reports";
import { Stack } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <Stack>
           <DashboardHeader/>
           <Reports/>
        </Stack>
    )
}

export default Dashboard