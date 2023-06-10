import { Box, Text, Link } from "@chakra-ui/react"
const LinkToSocial = () => {
  return (
    <Box
      textAlign="center"
      w="full"
      bgColor="white"
      mt="10px"
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
        fontSize="xl"
        textDecor="none"
        display="block"
        _hover={{
          textDecor: "none",
        }}
        href="https://chakra-ui.com"
        isExternal
      >
        Follow me
      </Link>
    </Box>
  )
}

export default LinkToSocial
