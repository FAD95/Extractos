export default function ArrayListGenerator(Array, where) {
  let arrs = []
  let arrsForMultiSelect = []

  switch (where) {
    case "name":
      Array.map(arr => arrs.push(arr.name))
      break
    case "plate":
      Array.map(arr => arrs.push(arr.plate))
      break

    default:
      break
  }

  arrs.map(arrForMultiSelect =>
    arrsForMultiSelect.push({
      label: arrForMultiSelect,
      value: arrForMultiSelect,
    })
  )
  return arrsForMultiSelect
}
