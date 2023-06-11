import MainContainer from "../components/MainContainer"
async function getSocialMediaData() {
  let baseurl = "https://next-task-sigma.vercel.app/"
  const res = await fetch(`${baseurl}/api/mock-data`, {
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
