import { Box, Text, Link } from "@chakra-ui/react"
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
} from "react-icons/fa"

import { useState } from "react"

const LinkToSocial = ({ name, link }) => {
  function handleDrag() {
    console.log("Dragging...")
  }
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      textAlign="center"
      w="full"
      bgColor="white"
      h="60px"
      mt="10px"
      draggable
      onDrag={handleDrag}
      mb="10px"
      borderRadius="full"
      _hover={{
        shadow: "rgb(0, 0, 0) 6px 6px 0px 0px",
        transform: "translate(2px,2px)",
      }}
      transition="0.1s  ease"
      boxShadow="rgb(0, 0, 0) 8px 8px 0px 0px"
    >
      <Link
        w="full"
        h="full"
        p="15px"
        color="black"
        textDecor="none"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecor: "none",
        }}
        href={link}
        isExternal
      >
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
        <Text fontSize="l" as="b">
          {name}
        </Text>

        <ChevronRightIcon
          boxSize={6}
          color={isHovering ? "black" : "white"}
        ></ChevronRightIcon>
      </Link>
    </Box>
  )
}

export default LinkToSocial
