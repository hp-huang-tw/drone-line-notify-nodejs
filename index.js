const axios = require('axios')
const querystring = require('querystring')

const accessToken = process.env['LINE_NOTIFY_ACCESS_TOKEN']
const message = process.env['PLUGIN_MESSAGE']

const params = {
  message: message
}

const sendNotify = async (params) => {
  const instance = axios.create({
    baseURL: 'https://notify-api.line.me',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  try {
    const queryString = querystring.unescape(querystring.stringify(params))
    const { data } = await instance.post('/api/notify', queryString)
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

sendNotify(params)
