"use client"
import { ChakraProvider } from "@chakra-ui/react"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Linktree</title>
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
