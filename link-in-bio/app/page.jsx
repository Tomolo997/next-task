import MainContainer from "../components/MainContainer"

async function getSocialMediaData() {
  const res = await fetch(`http://localhost:3000/api/socialMedia`, {
    cache: "force-cache",
  })
  return res.json()
}

export default async function Home({ params: { username } }) {
  // Initiate both requests in parallel
  const socialMediaData = await getSocialMediaData()

  // Wait for the promises to resolve
  console.log(socialMediaData)
  return (
    <>
      <MainContainer overflow="auto" data={socialMediaData} />
    </>
  )
}
