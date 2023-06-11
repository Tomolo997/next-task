"use client"
import Header from "./Header"
import Footer from "./Footer"
import LinkTreeComponent from "./LinkTreeComponent"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react"

const MainContaier = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleToggle = (isOpenValue) => {
    onOpen(isOpenValue) // Update the isOpen state in the parent component
  }
  return (
    <>
      <Box
        minW="full"
        minH="200vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        bg="#FFC906"
      >
        <Header onToggle={handleToggle} />
        <LinkTreeComponent socialMedia={data} />
        <Footer />
      </Box>
      <Modal size="sm" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" fontSize="sm" justifyContent="center">
            Share this linktree
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              {data.data.map((social) => (
                <Button
                  h="50px"
                  backgroundColor="white"
                  key={social.name}
                  mt="2px"
                >
                  {social.name}
                  <ChevronRightIcon
                    ml="auto"
                    boxSize={6}
                    fill="white"
                  ></ChevronRightIcon>
                </Button>
              ))}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MainContaier
