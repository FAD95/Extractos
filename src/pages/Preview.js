import React from "react"

export default function Preview({ location }) {
  const { state = {} } = location
  const {
    driver,
    car,
    client,
    origin,
    destiny,
    startDate,
    finishDate,
    contractObjective,
  } = state
  return (
    <div>
      <header>
        <section>
          <div>Logo</div>
          <div>QR</div>
          <div>MinTransporte</div>
        </section>
        <section>
          <h1>
            FICHA TÉCNICA DEL FORMATO ÚNICO DEL EXTRACTO DE CONTRATO "FUEC"
            SERVICIO PÚBLICO DE TRANSPORTE TERRESTRE AUTOMOTOR ESPECIAL
          </h1>
          <p>EXPEDIDO el de de # 208005813 2019 0123 0681</p>
        </section>
      </header>
      <main>
        <section>
          <div>
            <h2>Razón social:</h2>
            <p>SERVICIO ESPECIAL A&G TOURS S.A.S</p>
          </div>
          <div>
            <h2>NIT:</h2>
            <p>900.461.010-6</p>
          </div>
        </section>
        <section>
          <h2>Contrato #: </h2>
          <p>...</p>
        </section>
        <section>
          <div>
            <h2>Contratante: </h2>
            <p>{client}</p>
          </div>
          <div>
            <h2>C.C: </h2>
            <p>123</p>
          </div>
        </section>
        <section>
          <h2>Objeto del contrato: </h2>
          <p>{contractObjective}</p>
        </section>
        <section>
          <div>
            <h2>Origen: </h2>
            <p>{origin}</p>
          </div>
          <div>
            <h2>Destino: </h2>
            <p>{destiny}</p>
          </div>
        </section>
        <section>
          <h2>VIGENCIA DEL CONTRATO</h2>
          <section>
            <h3>Fecha inicial: </h3>
            <div>
              <h3>Día</h3>
              <p>{startDate.slice(8, 10)}</p>
            </div>
            <div>
              <h3>Mes</h3>
              <p>{startDate.slice(5, 7)}</p>
            </div>
            <div>
              <h3>Año</h3>
              <p>{startDate.slice(0, 4)}</p>
            </div>
          </section>
          <section>
            <h3>Fecha de vencimiento: </h3>
            <div>
              <h3>Día</h3>
              <p>{finishDate.slice(8, 10)}</p>
            </div>
            <div>
              <h3>Mes</h3>
              <p>{finishDate.slice(5, 7)}</p>
            </div>
            <div>
              <h3>Año</h3>
              <p>{finishDate.slice(0, 4)}</p>
            </div>
          </section>
        </section>
        <section>
          <h2>Características del vehiculo</h2>
          <ul>
            {car.map((value, index) => {
              return (
                <li key={index}>
                  <div>
                    <h3>Placa</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Marca</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Modelo</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Clase</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Capacidad</h3>
                    <p>{value.value}</p>
                  </div>
                  <section>
                    <div>
                      <h3>Número interno</h3>
                      <p>...</p>
                    </div>
                    <div>
                      <h3>Número de tarjeta de operación</h3>
                      <p>...</p>
                    </div>
                  </section>
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <ul>
            {driver.map((value, index) => {
              return (
                <li key={index}>
                  <h2>Conductor</h2>
                  <div>
                    <h3>Nombres y apellidos</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Nº Cédula</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Nº Licencia</h3>
                    <p>{value.value}</p>
                  </div>
                  <div>
                    <h3>Vigencia</h3>
                    <p>{value.value}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <h2>Responsable contratante</h2>
          <div>
            <h3>Nombres y apellidos</h3>
            <p>EL CONTRATANTE</p>
          </div>
          <div>
            <h3>Nº Cédula</h3>
            <p>EL CONTRATANTE</p>
          </div>
          <div>
            <h3>Telefono</h3>
            <p>EL CONTRATANTE</p>
          </div>
          <div>
            <h3>Dirección</h3>
            <p>EL CONTRATANTE</p>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <div>
            <h2>Datos de contacto de la empresa</h2>
            <p>
              SERVICIO ESPECIAL A&G TOURS S.A.S BOGOTA PBX (57-1) 3112233 Cel.
              310 284 6000 Email: agtours.sas@gmail.com www.aygtours.com
            </p>
          </div>
          <div>
            <h2>Firma del representante legal</h2>
            <div>LA FIRMA</div>
          </div>
        </section>
        <section>
          <div>
            <p>Verificación virtual?</p>
          </div>
          <div>
            <img src="" alt="SUPERTRANSPORTE" />
          </div>
          <div>
            <p>Validez?</p>
          </div>
        </section>
      </footer>
      {/* <button onClick={handleClose}>Cerrar</button> */}
    </div>
  )
}
