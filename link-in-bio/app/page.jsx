import MainContainer from "../components/MainContainer"
import Head from "next/head"
async function getSocialMediaData() {
  const res = await fetch(`http://localhost:3000/api/mock-data`, {
    cache: "force-cache",
  })
  return res.json()
}

export default async function Home({ params: { username } }) {
  // Initiate both requests in parallel
  const socialMediaData = await getSocialMediaData()

  // Wait for the promises to resolve
  return (
    <>
      <MainContainer overflow="auto" data={socialMediaData} />
    </>
  )
}
