import { Icon, Image, Flex, Text, Box } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import LinkToSocial from "./LinkToSocial"
import { FaShareSquare } from "react-icons/fa"
import { useBreakpointValue } from "@chakra-ui/react"
const LinkTreeComponent = ({ socialMedia }) => {
  const variant = useBreakpointValue({
    base: "show",
    sm: "dontshow",
  })
  let swiped = false
  return (
    <Flex
      mt="120px"
      w={["300px", "400px", "700px"]}
      justify="center"
      align="start"
      flexDir="column"
    >
      <Flex w="full" justify="center" align="center" direction="column">
        <Image
          borderRadius="full"
          boxSize="100px"
          alt="Tomaz Ovsenjak image"
          transition="ease 300ms"
          src="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_400x400.jpg"
        />
        <Flex mt="10px" justify="center" align="center">
          <Text fontSize="m" as="b">
            @maskobuild
          </Text>
          <Icon ml="1px" fill="#1C9BEF" boxSize={4} as={AiFillCheckCircle} />
        </Flex>
      </Flex>
      <Flex
        mt="40px"
        w="full"
        justify="center"
        align="center"
        direction="column"
      >
        {socialMedia.data.map((social) => (
          <Box w="full">
            <LinkToSocial
              key={social.name}
              name={social.name}
              link={social.url}
            ></LinkToSocial>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default LinkTreeComponent
