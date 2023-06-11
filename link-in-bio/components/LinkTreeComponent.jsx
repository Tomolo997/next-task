import { Icon, Image, Flex, Text, Box } from "@chakra-ui/react"
import { AiFillCheckCircle } from "react-icons/ai"
import LinkToSocial from "./LinkToSocial"
const LinkTreeComponent = ({ data, onToggle, setNewLink }) => {
  let swiped = false
  return (
    <Flex
      mt="80px"
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
            @{data.data.user.username}
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
        {data.data.social_media.map((social) => (
          <Box key={social.name} w="full">
            <LinkToSocial
              setNewLink={setNewLink}
              onToggle={onToggle}
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
