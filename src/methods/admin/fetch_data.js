import axios from 'axios'

export const fetch_storage_items = async (page) => {
    let results = await axios.get('http://localhost:8000/admin/storage')
    return results.data
}