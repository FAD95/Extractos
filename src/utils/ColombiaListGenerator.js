import colombia from "../../data/colombia.json"
export default function ColombiaListGenerator() {
  const citysArr = []
  const citys = []
  colombia.map(cityArr => citysArr.push(cityArr.ciudades))

  for (let i = 0; i < citysArr.length; i++) {
    citysArr.map(city => citys.push({ label: city[i], value: city[i] }))
  }
  return citys
}
