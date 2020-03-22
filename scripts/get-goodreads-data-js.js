// https://www.goodreads.com/review/list/6320986-morrison?utf8=%E2%9C%93&order=a&shelf=2019&sort=position&view=covers&per_page=infinite

const goodreads = require('goodreads-api-node')
const express = require('express')
const open = require('open')
const fs = require('fs')

const myCredentials = {
  key: process.env.GOODREADS_KEY,
  secret: process.env.GOODREADS_SECRET
}
const gr = goodreads(myCredentials)
const goodreadsCallbackSuffix = 'goodreads'
const callbackURL = 'http://localhost:3000/' + goodreadsCallbackSuffix

const app = express()
const port = 3000
app.listen(port, async () => {
  console.log(`Listening on port ${port}`)

  console.log('Beginning auth...')
  await auth().catch(error => console.error(error))
  await gr.getAccessToken().catch(error => console.error(error))

  const books2019 = await listBooks('2019').catch(error => console.error(error))
  const books2020 = await listBooks('2020').catch(error => console.error(error))
  fs.writeFileSync('./data/books-2019/results.json', JSON.stringify(books2019.books, null, 2), function (
    err
  ) {
    if (err) throw err
  })

  fs.writeFileSync('./data/books-2020/results.json', JSON.stringify(books2020.books, null, 2), function (
    err
  ) {
    if (err) throw err
  })

  console.log('Success (wrote files)!')
  process.exit(0)
})

async function auth () {
  gr.initOAuth(callbackURL)

  const url = await gr.getRequestToken()
  await open(url).catch(error => console.error(error))
}

app.get('/' + goodreadsCallbackSuffix, async () => {
  console.log('Completed auth successfully!')
})

async function listBooks (shelfName) {
  return gr.getBooksOnUserShelf('6320986-morrison', shelfName, {
    per_page: 200,
    sort: 'position'
  })
}
