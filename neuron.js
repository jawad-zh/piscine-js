function neuron(arr) {
  const result = {}

  for (const item of arr) {
    const [left, right] = item.split('- Response:')
    const response = right.trim()

    const [type, rawText] = left.split(':')
    const text = rawText.trim()

    const key = text
      .replace(/[!?]/g, '')
      .toLowerCase()
      .split(' ')
      .join('_')

    const group = type.toLowerCase()            
    const field = group.slice(0, -1)            

    if (!result[group]) result[group] = {}

    if (!result[group][key]) {
      result[group][key] = {
        [field]: text,
        responses: []
      }
    }

    result[group][key].responses.push(response)
  }

  return result
}
