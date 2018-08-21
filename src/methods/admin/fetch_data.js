import axios from 'axios'

export const fetch_storage_items = async (page) => {
  let results = await axios.get('http://localhost:8000/admin/storage')
  return results.data
}

export const fetch_all_authors = async () => {
  let results = await axios.get('http://localhost:8000/author')
  return results
    .data
    .map(author => {
      return {
        key: author.author_id,
        text: `${author.first_name} ${author.last_name}`,
        value: author.author_id
      }
    })
}

export const fetch_all_categories = async () => {
  let results = await axios.get('http://localhost:8000/categories')
  return results
    .data
    .map(category => {
      return {
        key: category.category_id,
        text: category.category_name,
        value: category.category_id
      }
    })
}

export const fetch_all_publisers = async () => {
  let results = await axios.get('http://localhost:8000/publishers')
  return results
    .data
    .map(publisher => {
      return {
        key: publisher.publisher_id,
        text: publisher.publisher_name,
        value: publisher.publisher_id
      }
    })
}