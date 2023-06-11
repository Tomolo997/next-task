import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { BiDotsVerticalRounded } from "react-icons/bi"

const Header = ({ onToggle }) => {
  const [clientWindowHeight, setClientWindowHeight] = useState("")
  const handleClick = () => {
    onToggle(true) // Pass the value of isOpen to the parent component
  }
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }
  let turn = clientWindowHeight > 100
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const leftNav = turn ? (
    <>
      <Image
        borderRadius="full"
        boxSize="48px"
        alt="Dan Abramov image"
        transition="ease 300ms"
        src="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_400x400.jpg"
      />
      <Flex justify="center" align="center">
        <Text fontSize="sm" as="b">
          @maskobuilds
        </Text>
        <Icon ml="1px" fill="#1C9BEF" boxSize={4} as={AiFillCheckCircle} />
      </Flex>
    </>
  ) : (
    <></>
  )
  return (
    <Flex
      justify="space-between"
      transition="ease 300ms"
      mt="7"
      w={["350px", "400px", "800px"]}
      position="fixed"
      padding="15px"
      borderRadius="full"
      bg={!turn ? "transparent" : "rgba(255, 255, 255, 0.6)"}
      backdropFilter={!turn ? "blur(0px)" : "blur(10px)"}
    >
      {leftNav}
      <Button
        _hover={!turn ? { bg: "rgb(235, 235, 235)" } : { bg: "" }}
        transition="ease 300ms"
        ml={turn ? "0" : "auto"}
        display="flex"
        h="48px"
        bg={turn ? "black" : "white"}
        borderRadius="full"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded fill={turn ? "white" : "black"} />
      </Button>
    </Flex>
  )
}

export default Header
