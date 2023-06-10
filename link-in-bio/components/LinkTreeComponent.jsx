import { Icon, Image, Flex, Text } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import Link from "./LinkToSocial"
const LinkTreeComponent = () => {
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
          alt="Dan Abramov image"
          transition="ease 300ms"
          src="https://bit.ly/dan-abramov"
        />
        <Flex mt="10px" justify="center" align="center">
          <Text fontSize="m" as="b">
            @danambrow
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
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </Flex>
    </Flex>
  )
}

export default LinkTreeComponent
