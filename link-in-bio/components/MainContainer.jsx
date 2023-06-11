"use client"
import Header from "./Header"
import Footer from "./Footer"
import LinkTreeComponent from "./LinkTreeComponent"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Text,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  useClipboard,
} from "@chakra-ui/react"
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
  FaExternalLinkAlt,
} from "react-icons/fa"
import { useState } from "react"
const MainContaier = ({ data }) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [shareLink, setShareLink] = useState("")

  const handleToggle = (isOpenValue) => {
    onOpen(isOpenValue) // Update the isOpen state in the parent component
  }
  const setNewLink = (link) => {
    setShareLink(link)
    setValue(link)
  }
  return (
    <>
      <Box
        pb="20rem"
        minW="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        background="linear-gradient(rgb(255, 206, 3), rgb(255, 92, 23))"
      >
        <Header
          username={data.data.user.username}
          setNewLink={setNewLink}
          onToggle={handleToggle}
        />
        <LinkTreeComponent
          setNewLink={setNewLink}
          onToggle={handleToggle}
          data={data}
        />
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
              {data.data.social_media.map((social) => (
                <Button
                  h="60px"
                  backgroundColor="white"
                  key={social.name}
                  mt="2px"
                >
                  {social.name === "Twitter" ? (
                    <FaTwitter size={18}></FaTwitter>
                  ) : social.name === "TikTok" ? (
                    <FaTiktok size={18}></FaTiktok>
                  ) : social.name === "GitHub" ? (
                    <FaGithub size={18}></FaGithub>
                  ) : social.name === "LinkedIn" ? (
                    <FaLinkedin size={18}></FaLinkedin>
                  ) : social.name === "Instagram" ? (
                    <FaInstagram size={18}></FaInstagram>
                  ) : social.name === "YouTube" ? (
                    <FaYoutube size={18}></FaYoutube>
                  ) : social.name === "Discord" ? (
                    <FaDiscord size={18}></FaDiscord>
                  ) : social.name === "Reddit" ? (
                    <FaReddit size={18}></FaReddit>
                  ) : social.name === "Twitch" ? (
                    <FaTwitch size={18}></FaTwitch>
                  ) : (
                    <></>
                  )}
                  <Text ml="12px">Share On {social.name}</Text>
                  <ChevronRightIcon
                    ml="auto"
                    boxSize={6}
                    fill="white"
                  ></ChevronRightIcon>
                </Button>
              ))}
              <Button
                mt="10px"
                h="60px"
                mb="10px"
                border="1px solid rgb(224, 226, 217)"
                backgroundColor="white"
                _hover={{
                  backgroundColor: "rgb(224, 226, 217)",
                }}
              >
                <Flex w="full" justify="space-between">
                  <FaExternalLinkAlt size={18}></FaExternalLinkAlt>
                  <Link href={shareLink} fontSize="sm" ml="10px" mr="auto">
                    Share link
                  </Link>
                  <Text onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Text>
                </Flex>
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MainContaier
