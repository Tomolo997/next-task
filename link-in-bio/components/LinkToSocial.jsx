import { Box, Text, Link } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const LinkToSocial = ({ name, link }) => {
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
      mt="20px"
      mb="10px"
      borderRadius="full"
      _hover={{
        shadow: "rgb(0, 0, 0) 6px 6px 0px 0px",
        transform: "translate(2px,2px)",
      }}
      transition="0.2s  ease"
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
        <Text fontSize="l" as="b">
          {name}
        </Text>
        {isHovering ? (
          <ChevronRightIcon boxSize={6} fill="white"></ChevronRightIcon>
        ) : (
          <></>
        )}
      </Link>
    </Box>
  )
}

export default LinkToSocial
