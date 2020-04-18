import React from "react"
import { drivers } from "../../data/database.json"

export default function DriversList({ name }) {
  return (
    <select name={name}>
      {drivers.map(driver => (
        <option
          key={driver.id}
          value={driver.id === "" ? "disabled" : driver.id}
        >
          {driver.name}
        </option>
      ))}
    </select>
  )
}
