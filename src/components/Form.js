import React, { useState, useEffect, useRef } from "react"
import MultiSelect from "react-multi-select-component"
import { drivers, cars } from "../../data/database.json"
import ArrayListGenerator from "../utils/ArrayListGenerator"
import ColombiaListGenerator from "../utils/ColombiaListGenerator"
import Modal from "./Modal"
const Form = () => {
  const [driver, setDriver] = useState([])
  const [car, setCar] = useState([])
  const [client, setClient] = useState([])
  const [origin, setOrigin] = useState([])
  const [destiny, setDestiny] = useState([])
  const [startDate, setStartDate] = useState([])
  const [finishDate, setFinishDate] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [submit, setSubmit] = useState(false)

  const date1 = useRef()
  const date2 = useRef()
  const contractObjective = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    setSubmit(true)
  }
  if (submit) {
    if (
      origin > [] &&
      driver > [] &&
      car > [] &&
      destiny > [] &&
      startDate > "" &&
      finishDate > "" &&
      contractObjective > ""
    ) {
      setOpenModal(true)
      setSubmit(false)
    } else {
      setSubmit(false)
      alert(
        "Falta algún campo por llenar. Por favor complete los datos e intentelo nuevamente"
      )
    }
  }

  const handleOriginClear = event => {
    origin > [] ? setOrigin(event.splice(0, 1)) : setOrigin(event)
  }
  const handleDestinyClear = event => {
    destiny > [] ? setDestiny(event.splice(0, 1)) : setDestiny(event)
  }

  const handleStartDate = event => {
    setStartDate(date1.current.value)
  }

  const handleFinishDate = event => {
    setFinishDate(date2.current.value)
  }

  useEffect(() => {})
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="Driver">Nombre del conductor: </label>
          <MultiSelect
            id="Driver"
            options={ArrayListGenerator(drivers, "name")}
            value={driver}
            labelledBy={"Driver"}
            hasSelectAll={false}
            onChange={setDriver}
          />
        </section>
        <section>
          <label htmlFor="Car">Placa del vehiculo: </label>
          <MultiSelect
            id="Car"
            options={ArrayListGenerator(cars, "plate")}
            value={car}
            labelledBy={"Driver"}
            hasSelectAll={false}
            onChange={setCar}
          />
        </section>
        <section>
          <label htmlFor="Client">Contratante:</label>
          <MultiSelect
            id="Client"
            options={ArrayListGenerator(cars, "plate")}
            value={client}
            labelledBy={"Driver"}
            hasSelectAll={false}
            onChange={setClient}
          />
        </section>
        <section>
          <div>
            <label htmlFor="Origin">Origen: </label>
            <MultiSelect
              id="Origin"
              options={ColombiaListGenerator()}
              value={origin}
              labelledBy={"Origin"}
              hasSelectAll={false}
              onChange={handleOriginClear}
            />
          </div>
          <div>
            <label htmlFor="Destiny">Destino: </label>
            <MultiSelect
              id="Destiny"
              options={ColombiaListGenerator()}
              value={destiny}
              onChange={handleDestinyClear}
              labelledBy={"Destiny"}
              hasSelectAll={false}
              multi={false}
              // isLoading={true}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="StartDate">Fecha de inicio: </label>
            <input
              ref={date1}
              type="date"
              id="StartDate"
              onChange={handleStartDate}
            />
          </div>
          <div>
            <label htmlFor="FinishDate">Fecha de finalización: </label>
            <input
              ref={date2}
              type="date"
              id="FinishDate"
              onChange={handleFinishDate}
            />
          </div>
        </section>
        <section>
          <label htmlFor="Target">Objeto del contrato: </label>
          <textarea
            ref={contractObjective}
            name="Target"
            id="Target"
            cols="30"
            rows="3"
          ></textarea>
        </section>
        <button onClick={handleSubmit}>Crear</button>
      </form>

      {openModal ? (
        <Modal
          origin={origin[0].value}
          driver={driver}
          car={car}
          client={client[0].value}
          destiny={destiny[0].value}
          startDate={startDate}
          finishDate={finishDate}
          contractObjective={contractObjective.current.value}
          close={setOpenModal}
        />
      ) : null}
    </>
  )
}
export default Form
