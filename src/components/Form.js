import React, { useState, useEffect, useRef } from "react"
import MultiSelect from "react-multi-select-component"
import { drivers, cars } from "../../data/database.json"
import ArrayListGenerator from "../utils/ArrayListGenerator"
import ColombiaListGenerator from "../utils/ColombiaListGenerator"
import { Link } from "gatsby"
const Form = () => {
  const startDate = useRef()
  const finishDate = useRef()
  const contractObjective = useRef()

  const [driver, setDriver] = useState([])
  const [car, setCar] = useState([])
  const [client, setClient] = useState([])
  const [origin, setOrigin] = useState([])
  const [destiny, setDestiny] = useState([])
  const [startDateHook, setStartDateHook] = useState([])
  const [finishDateHook, setFinishDateHook] = useState([])
  const [contractObejectiveHook, setContractObejectiveHook] = useState()

  const handleOriginClear = event => {
    origin > [] ? setOrigin(event.splice(0, 1)) : setOrigin(event)
  }
  const handleDestinyClear = event => {
    destiny > [] ? setDestiny(event.splice(0, 1)) : setDestiny(event)
  }

  const handleStartDate = event => {
    setStartDateHook(startDate.current.value)
  }

  const handleFinishDate = event => {
    setFinishDateHook(finishDate.current.value)
  }

  const handleTextarea = e => {
    setContractObejectiveHook(contractObjective.current.value)
  }

  useEffect(() => {})
  return (
    <>
      <form>
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
              ref={startDate}
              type="date"
              id="StartDate"
              onChange={handleStartDate}
            />
          </div>
          <div>
            <label htmlFor="FinishDate">Fecha de finalización: </label>
            <input
              ref={finishDate}
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
            onChange={handleTextarea}
          ></textarea>
        </section>
        {origin > [] &&
        driver > [] &&
        car > [] &&
        destiny > [] &&
        startDate > "" &&
        finishDate > "" &&
        contractObejectiveHook > "" ? (
          <Link
            to="preview"
            state={{
              origin: origin[0].value,
              driver: driver,
              car: car,
              client: client[0].value,
              destiny: destiny[0].value,
              startDate: startDateHook,
              finishDate: finishDateHook,
              contractObjective: contractObejectiveHook,
            }}
          >
            Preview
          </Link>
        ) : null}
      </form>
    </>
  )
}
export default Form
