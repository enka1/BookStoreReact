import axios from 'axios'

export const fetch_latest_book = async(page) => {
  let results = await axios.get('http://localhost:8000/api/books/latest_arrived', {params: {
      page
    }})
  return results.data
}

export const fetch_latest_book_INDEX = async() => {
  let results = await axios.get('http://localhost:8000/api/books/index/latest_arrived', {
    params: {
      limit: 4
    }
  })
  return results.data
}

export const fetch_book_slider = async() => {
  let results = await axios.get('http://localhost:8000/api/books/slider')
  return results.data;
}

export const search_book = async(book_name) => {
  let results = await axios.post('http://localhost:8000/api/books/search', {book_name})
  return results.data
}