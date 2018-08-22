import axios from 'axios'

export const fetch_categories = async () => {
    let results = await axios.get('http://localhost:8000/api/categories')
    return results.data
}