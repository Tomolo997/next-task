import MainContainer from "../components/MainContainer"
async function getSocialMediaData() {
  let baseurl = "http://localhost:3000"
  const res = await fetch(`api/mock-data`, {
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
