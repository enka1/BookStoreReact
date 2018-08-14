import axios from 'axios'

export const fetch_latest_book = async(page) => {
  let results = await axios.get('http://localhost:8000/book/latest_arrived', {params: {
      page
    }})
  return results.data
}

export const fetch_best_seller_book = async() => {
  let results = await axios.get('http://localhost:8000/book/best_seller')
  return results.data
}

export const fetch_latest_book_INDEX = async() => {
  let results = await axios.get('http://localhost:8000/book/index/latest_arrived', {
    params: {
      limit: 4
    }
  })
  return results.data
}

export const fetch_random_book = async() => {
  let results = await axios.get('http://localhost:8000/book/random_book')
  return results.data;
}