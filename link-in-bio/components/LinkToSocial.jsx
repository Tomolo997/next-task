import { Box, Flex, Text, Link, useClipboard } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  FaTwitter,
  FaTiktok,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaReddit,
  FaTwitch,
  FaShareSquare,
} from "react-icons/fa"
import { useState } from "react"

const LinkToSocial = ({ name, link, onToggle, setNewLink }) => {
  const [isHovering, setIsHovering] = useState(false)
  const handleClick = (link) => {
    onToggle(true)
    setNewLink(link)
  }
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <Flex
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      w="full"
      justify="center"
      align="center"
      bgColor="white"
      h="60px"
      border="2px solid black"
      mt="10px"
      mb="10px"
      borderRadius="full"
      _hover={{
        shadow: "rgb(0, 0, 0) 6px 6px 0px 0px",
        transform: "translate(2px,2px)",
      }}
      transition="0.1s  ease"
      boxShadow="rgb(0, 0, 0) 8px 8px 0px 0px"
    >
      <Box ml="10px">
        {name === "Twitter" ? (
          <FaTwitter size={24}></FaTwitter>
        ) : name === "TikTok" ? (
          <FaTiktok size={24}></FaTiktok>
        ) : name === "GitHub" ? (
          <FaGithub size={24}></FaGithub>
        ) : name === "LinkedIn" ? (
          <FaLinkedin size={24}></FaLinkedin>
        ) : name === "Instagram" ? (
          <FaInstagram size={24}></FaInstagram>
        ) : name === "YouTube" ? (
          <FaYoutube size={24}></FaYoutube>
        ) : name === "Discord" ? (
          <FaDiscord size={24}></FaDiscord>
        ) : name === "Reddit" ? (
          <FaReddit size={24}></FaReddit>
        ) : name === "Twitch" ? (
          <FaTwitch size={24}></FaTwitch>
        ) : (
          <></>
        )}
      </Box>
      <Link
        w="85%"
        h="full"
        p="15px"
        color="black"
        textDecor="none"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{
          textDecor: "none",
        }}
        href={link}
        isExternal
      >
        <Text fontSize="l" as="b">
          {name}
        </Text>
      </Link>
      <Flex
        cursor="pointer"
        onClick={() => {
          handleClick(link)
        }}
        justify="center"
        align="center"
        w="30px"
        h="30px"
        borderRadius="full"
        mr="10px"
        backgroundColor={!isHovering ? "white" : "rgb(224, 226, 217)"}
      >
        <FaShareSquare color={!isHovering ? "white" : "black"}></FaShareSquare>
      </Flex>
    </Flex>
  )
}

export default LinkToSocial
