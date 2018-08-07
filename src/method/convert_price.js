export const convert_price = price => {
    let convert = ''
    let j = 0
    price = price
      .toString()
      .split('')
    for (let i = price.length - 1; 0 <= i; i--) {
      if (j === 3) {
        j = 0
        price[i] = price[i] + '.'
      }
      convert = price[i] + convert
      j++
    }
    return convert
  }