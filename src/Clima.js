export default function Clima(props) {
  return (
    <div class="p-2 mb-4 bg-light rounded-3">
      <div class="container-fluid">
        <div class="row ">
          <div class="col-md-7">
            <div class="container">
              <div class="row">

                <div class="col-md-6 p-2">
                  <div class="card text-start">
                    <img class="card-img-top mx-auto p-2" src="https://img2.freepng.es/20190330/tbp/kisspng-temperate-deciduous-forest-temperate-climate-cartoon-weather-pictures-18-48-x-36-carwad-net-5c9f4e48ccc052.1279728415539441368387.jpg" 
                    style={{ width: '250px', height: '250px', borderRadius:250 }} alt="Title" />
                    <div class="card-body">
                      <h4 class="card-title text-center">{props.ciudad1}. {props.pais1}</h4>
                      <p class="card-text text-center">Parameters:</p>
                      <p class="card-text text-center">Wind: {props.wind1} m/s </p>
                      <p class="card-text text-center">Temperature: {props.temp1} °C </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 p-2">
                  <div class="card text-start">
                    <img class="card-img-top mx-auto p-2" src="https://img2.freepng.es/20190330/tbp/kisspng-temperate-deciduous-forest-temperate-climate-cartoon-weather-pictures-18-48-x-36-carwad-net-5c9f4e48ccc052.1279728415539441368387.jpg" 
                   style={{ width: '250px', height: '250px', borderRadius:250 }} alt="Title" />
                    <div class="card-body">
                      <h4 class="card-title text-center">{props.ciudad2}. {props.pais2}</h4>
                      <p class="card-text text-center">Parameters:</p>
                      <p class="card-text text-center">Wind: {props.wind2} m/s </p>
                      <p class="card-text text-center">Temperature: {props.temp2} °C </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 p-2">
                  <div class="card text-start">
                    <img class="card-img-top mx-auto p-2" src="https://img2.freepng.es/20190330/tbp/kisspng-temperate-deciduous-forest-temperate-climate-cartoon-weather-pictures-18-48-x-36-carwad-net-5c9f4e48ccc052.1279728415539441368387.jpg" 
                    style={{ width: '250px', height: '250px', borderRadius:250 }} alt="Title" />
                    <div class="card-body">
                      <h4 class="card-title text-center">{props.ciudad3}. {props.pais3}</h4>
                      <p class="card-text text-center">Parameters:</p>
                      <p class="card-text text-center">Wind: {props.wind3} m/s </p>
                      <p class="card-text text-center">Temperature: {props.temp3} °C </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 p-2">
                  <div class="card text-start">
                    <img class="card-img-top mx-auto p-2" src="https://img2.freepng.es/20190330/tbp/kisspng-temperate-deciduous-forest-temperate-climate-cartoon-weather-pictures-18-48-x-36-carwad-net-5c9f4e48ccc052.1279728415539441368387.jpg" 
                    style={{ width: '250px', height: '250px', borderRadius:250 }} alt="Title" />
                    <div class="card-body">
                      <h4 class="card-title text-center">{props.ciudad4}. {props.pais4}</h4>
                      <p class="card-text text-center">Parameters:</p>
                      <p class="card-text text-center">Wind: {props.wind4} m/s </p>
                      <p class="card-text text-center">Temperature: {props.temp4} °C </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-md-5">
            <div class="card">
              <img class="card-img-top mx-auto p-2"
                src="https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/05/LETRAS-DE-SAN-LUIS-SECCIO%CC%81N-LA-CIUDAD.jpg?fit=1980%2C1114&ssl=1"
                style={{ width: '350px', height: '350px', borderRadius: 250 }} alt='Title' />
              <div class="card-body">
                <h4 class="card-title text-center">{props.ciudad}. {props.pais}</h4>
                <p class="card-text text-center">Parameters:</p>
                <p class="card-text text-center">Wind: {props.wind} m/s </p>
                <p class="card-text text-center">Temperature: {props.temp} °C </p>
              </div>
            </div>
            <br />
          </div>

        </div>

      </div>
    </div>
  )
}
/*
<a type="button" className="btn btn-primary d-block mx-auto ">Obtener Diferentes</a>
*/