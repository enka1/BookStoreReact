import axios from 'axios'

export const add_new_book = async(book) => {
  let results = await axios.post('http://localhost:8000/api/admin/add-new-book', {book})
  return results.data
}