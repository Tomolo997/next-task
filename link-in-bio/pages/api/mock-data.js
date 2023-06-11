export default function handler(req, res) {
  const social_media = [
    { name: "Twitter", url: "https://twitter.com/maskobuilds" },
    { name: "GitHub", url: "https://github.com/Tomolo997" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tomolo997/" },
    { name: "Instagram", url: "https://www.instagram.com/maskobuilds/" },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UC9Z1XWw1kmnvOOFsj6Bzy2g",
    },
    { name: "Twitch", url: "https://www.twitch.tv/maskobuilds" },
    { name: "Discord", url: "https://discord.gg/3Y5Jz2Q" },
    { name: "Reddit", url: "https://www.reddit.com/user/Tomolo997" },
  ]
  let user = {
    username: "maskobuilds",
    name: "Tomolo",
    bio: "I am a software engineer and content creator. I love to build things and share my knowledge with others.",
  }

  let data = {
    user: user,
    social_media: social_media,
  }
  return res.status(200).json({ data: data })
}
