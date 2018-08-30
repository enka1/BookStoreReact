import axios from 'axios'

export const add_new_book = async(book) => {
  let {
    book_name,
    author_id,
    publisher_id,
    on_shelf_time,
    categories,
    import_price,
    sale_price,
    image_url,
    quantity,
    description
  } = book
  let results = await axios.post('http://localhost:8000/api/admin/add-new-book', {
    book_name,
    author_id,
    publisher_id,
    on_shelf_time,
    categories,
    import_price,
    sale_price,
    image_url,
    quantity,
    description: description
      ? description
      : ''
  })
  return results.data
}

export const update_book = async(book) => {
  let {
    book_id,
    book_name,
    author_id,
    publisher_id,
    on_shelf_time,
    categories,
    import_price,
    sale_price,
    image_url,
    quantity,
    description
  } = book
  let results = await axios.post('http://localhost:8000/api/admin/update-book', {
    book_id,
    book_name,
    author_id,
    publisher_id,
    on_shelf_time,
    categories,
    import_price,
    sale_price,
    image_url,
    quantity,
    description: description
      ? description
      : ''
  })
  return results.data
}