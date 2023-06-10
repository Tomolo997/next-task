"use client"
import Header from "./Header";
import Footer from "./Footer";
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
const MainContaier = () => {
    return (
        <Box  minW="full" minH="200vh" display="flex" flexDirection="column"alignItems="center" justifyContent="space-between" bg="#FFC906">
            <Header/>
            <Footer/>
        </Box>
    );
}

export default MainContaier;
