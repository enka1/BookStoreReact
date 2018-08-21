import {convert_price, convert_string_to_price} from '../convert_price'

export const quantity_input = quantity => {
  if (quantity.length === 0) {
    return '0'
  } else if (/^[0-9]+$/.test(quantity)) {
    if (parseInt(quantity, 10) >= 0) {
      return parseInt(quantity, 10)
    }
  }
}

export const price_input = price => {
  if (price.length === 0) {
    return '0'
  } else if (/^[0-9]+$/.test(convert_string_to_price(price).toString(10))) {
    if (convert_string_to_price(price) >= 0) {
      return convert_price(convert_string_to_price(price).toString())
    }
  }
}