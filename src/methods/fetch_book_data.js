import axios from 'axios'

export const fetch_latest_book = async(page) => {
  let results = await axios.get('http://localhost:8000/books/latest_arrived', {params: {
      page
    }})
  return results.data
}

export const fetch_latest_book_INDEX = async() => {
  let results = await axios.get('http://localhost:8000/books/index/latest_arrived', {
    params: {
      limit: 4
    }
  })
  return results.data
}

export const fetch_book_slider = async() => {
  let results = await axios.get('http://localhost:8000/books/book_slider')
  return results.data;
}