import React from "react"
import { cars } from "../../data/database.json"

export default function VehiclesList({ name }) {
  return (
    <select name={name}>
      {cars.map(car => (
        <option key={car.id} value={car.plate === "" ? "disabled" : car.plate}>
          {car.plate}
        </option>
      ))}
    </select>
  )
}
