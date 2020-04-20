import React from "react"
import { ModalDiv, Container } from "../styles/components"

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
    <ModalDiv>
      <Container>
        <header>
          <div>
            <section>Logo</section>
            <section>QR</section>
            <section>MinTransporte</section>
          </div>
          <section>Description</section>
        </header>
        <main>
          <section>
            <div>
              <h3>RAZON SOCIAL:</h3>
              <p>SERVICIO ESPECIAL A&G TOURS S.A.S</p>
            </div>
            <div>
              <h3>NIT:</h3>
              <p>900.461.010-6</p>
            </div>
          </section>
          <section>
            <div>
              <h3>CONTRATO No: </h3>
              <p>...</p>
            </div>
          </section>
          <section>
            <div>
              <h3>CONTRATANTE: </h3>
              <p>{client}</p>
            </div>
            <div>
              <h3>CC: </h3>
              <p>123</p>
            </div>
          </section>
          <section>
            <h3>OBJETO DEL CONTRATO: </h3>
            <p>{contractObjective}</p>
          </section>
          <section>
            <div>
              <h3>ORIGEN: </h3>
              <p>{origin}</p>
            </div>
            <div>
              <h3>DESTINO: </h3>
              <p>{destiny}</p>
            </div>
          </section>
        </main>
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
        <p>{startDate}</p>
        <p>{finishDate}</p>
        <button onClick={handleClose}>Cerrar</button>
      </Container>
    </ModalDiv>
  )
}
