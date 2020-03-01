// https://www.goodreads.com/review/list/6320986-morrison?utf8=%E2%9C%93&order=a&shelf=2019&sort=position&view=covers&per_page=infinite

const goodreads = require("goodreads-api-node")
const express = require("express")
const open = require("open")
const fs = require("fs")

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
  fs.writeFile("./books.json", JSON.stringify(result.books, null, 2), function(
    err
  ) {
    if (err) throw err
  })
  console.log("Wrote file")
})

async function auth() {
  gr.initOAuth(callbackURL)

  let url = await gr.getRequestToken()
  await open(url)
}

app.get("/" + goodreadsCallbackSuffix, async () => {
  console.log("Completed auth successfully!")
})

async function list2019Books() {
  await gr.getAccessToken()
  return gr.getBooksOnUserShelf("6320986-morrison", "2019", {
    per_page: 200,
    sort: "position",
  })
}
