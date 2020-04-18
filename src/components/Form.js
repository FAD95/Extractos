import React, { useState } from "react"
import DriversList from "./DriversList"
import VehiclesList from "./VehiclesList"
import MultiSelect from "react-multi-select-component"
import colombia from "../../data/colombia.json"
const Form = () => {
  const elementos = ["", 0, 1, 2, 3, 4, 5]
  const citysArr = []
  const citys = []
  colombia.map(cityArr => citysArr.push(cityArr.ciudades))
  for (let i = 0; i < citysArr.length; i++) {
    citysArr.map(city => citys.push({ label: city[i], value: city[i] }))
  }

  const [selected, setSelected] = useState([])

  const handleSubmit = event => {
    console.log(event.target)
    event.preventDefault()
  }
  return (
    // comentario
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="driver">Nombre del conductor: </label>
        <DriversList name="driver" />
      </section>
      <section>
        <label htmlFor="car">Placa del vehiculo: </label>
        <VehiclesList name="car" />
      </section>
      <section>
        <label htmlFor="company">Nombre de la empresa:</label>
        <select name="company">
          {elementos.map(element => (
            <option key={element} value={element === "" ? "disabled" : element}>
              {element}
            </option>
          ))}
        </select>
      </section>
      <section>
        <div>
          <label>Origen: </label>
          <MultiSelect
            options={citys}
            value={selected}
            onChange={setSelected}
            labelledBy={"Select"}
            hasSelectAll={false}
          />
        </div>
        <div>
          <label>Destino: </label>
          <MultiSelect
            options={citys}
            value={selected}
            onChange={setSelected}
            labelledBy={"Select"}
            hasSelectAll={false}
          />
        </div>
      </section>
      <button type="submit">Crear</button>
    </form>
  )
}
export default Form
