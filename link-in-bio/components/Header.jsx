import { Box,Button, Flex, Container } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';


import { BiDotsVerticalRounded } from "react-icons/bi";
const Header = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };
    let turn = clientWindowHeight > 100;
    useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);
    });
    return ( 
        <Box  transition="ease 300ms" mt="7" width="800px"  position="fixed" padding="20px" borderRadius="full" bg={!turn ? "transparent" : "rgba(255, 255, 255, 0.5)"}  >
            <Button _hover={!turn ? { bg: "rgb(235, 235, 235)"}: { bg: ""}} transition="ease 300ms"  ml="auto" display="flex" h="48px" bg={turn ? "black" : "white"} borderRadius="full">
                <BiDotsVerticalRounded fill={turn ? "white" : "black"}/>
            </Button>
        </Box>
    );
}

export default Header;
