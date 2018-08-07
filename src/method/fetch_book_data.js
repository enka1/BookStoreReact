import axios from 'axios'

export const fetch_latest_book = async () => {
  let results = await axios.get('http://localhost:8000/book/latest_arrived')
  return results.data.data
}

export const fetch_latest_book_INDEX = async () => {
  let results = await axios.get('http://localhost:8000/book/index/latest_arrived', {
    params: {
      limit: 4
    }
  })
  return results.data
}