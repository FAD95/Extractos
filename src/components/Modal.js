import React from "react"

export default function Modal({
  driver,
  car,
  client,
  origin,
  destiny,
  startDate,
  finishDate,
  contractObjective,
  close,
}) {
  const handleClose = () => {
    close(false)
  }

  return (
    <div>
      <ul>
        {driver.map((value, index) => {
          return <li key={index}>{value.value}</li>
        })}
      </ul>
      <ul>
        {car.map((value, index) => {
          return <li key={index}>{value.value}</li>
        })}
      </ul>
      <p>{client}</p>
      <p>{origin}</p>
      <p>{destiny}</p>
      <p>{startDate}</p>
      <p>{finishDate}</p>
      <p>{contractObjective}</p>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  )
}
