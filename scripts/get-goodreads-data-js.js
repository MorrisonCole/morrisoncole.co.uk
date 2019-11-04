const goodreads = require("goodreads-api-node")
const express = require("express")
const open = require("open")

const myCredentials = {
  key: process.env.GOODREADS_KEY,
  secret: process.env.GOODREADS_SECRET,
}
const gr = goodreads(myCredentials)
const goodreadsCallbackSuffix = "goodreads"
const callbackURL = "http://localhost:3000/" + goodreadsCallbackSuffix

const app = express()
const port = 3000
app.listen(port, async () => {
  console.log(`Listening on port ${port}`)

  console.log(`Beginning auth...`)
  await auth()

  let result = await list2019Books()
  console.log(result.books)
})

async function auth() {
  gr.initOAuth(callbackURL)

  await gr.getRequestToken()
    .then(url => {
      open(url)
    })
    .catch((err) => console.log("Error during auth: ", err))
}

app.get("/" + goodreadsCallbackSuffix, async () => {
  console.log("Completed auth successfully!")
})

async function list2019Books() {
  await gr.getAccessToken()
  return gr.getBooksOnUserShelf("6320986-morrison", "2019", { per_page: 200 })
}
