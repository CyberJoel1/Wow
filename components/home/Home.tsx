import React from 'react'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
          <main>
            <div
              className="relative pt-16 pb-32 flex content-center items-center justify-center"
              style={{
                minHeight: "75vh"
              }}
            >
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('./casas.jpg')"
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-white font-semibold text-5xl">
                        Tu historia comienza con WAROOM.
                      </h1>
                      <p className="mt-4 text-lg text-gray-300">
                        En esta plataforma podrás encontrar una gran variedad de
                        inmuebles, con diferentes opciones de busqueda según tus
                        requerimientos deseados, en el cual también de una forma
                        espontanea se tendrá contacto con los usuarios pudiendo
                        tener mayor información y seguridad de lo que encuentres.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
    
            <section className="pb-20 bg-gray-300 -mt-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Compra-venta</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Podrás encontrar un gran comercio inmobiliario que
                          realizarán los usuarios, de forma segura y rápida.
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Arriendo</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Tendrás a tu disposición diferentes tipos de inmuebles ya
                          sean locales,departamentos,casas o en caso de que lo haya
                          cuartos individuales.
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Interacción entre usuarios
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Disponemos de una buena red social inmobiliaria
                          permitiendo una conexión continua entre usuarios,
                          aumentando el entendimiento mutuo y efectivo de ambas
                          partes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                      <i className="fas fa-user-friends text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      Novedades de WAROOM
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                      Se ha querido implementar funciones comerciales que permitan a
                      los usuarios poder utilizar de la mejor manera nuestra
                      plataforma buscando como objetivo la mayor seguridad y
                      confiabilidad al manejar su información.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                      Nuestro enfoque es tener una red social inmobiliaria esto
                      debido a que se tiene un mejor alcance y disposición entre los
                      usuarios, al igual que una vez se acepte su mutuo acuerdo de
                      seguimiento se tendrá más información de su persona.
                    </p>
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                      className="font-bold text-gray-800 mt-8"
                    >
                      REGISTRATE CON NOSOTROS!
                    </a>
                  </div>
    
                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block"
                          style={{
                            height: "95px",
                            top: "-94px"
                          }}
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-pink-600 fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Diversos servicios inmobialiarios al alcance
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          Al confiar en WAROOM tienes lo mejor de los dos mundos,
                          una red social en la cual podrás realizar comercio
                          inmobiliario con diversas funciones.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="relative py-20">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
    
              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                      <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                        <i className="fas fa-rocket text-xl"></i>
                      </div>
                      <h3 className="text-3xl font-semibold">
                        La mejor comercialización a tu alcance
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        No solo contamos con la mejor entendibilidad entre usuarios
                        sino que nuestro desarrollo es el más favorable.
                      </p>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="fas fa-fingerprint"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Accede a la ubicación de los inmuebles.
                              </h4>
                              <h5 className="text-gray-600">
                                Filtra las busquedas deseadas.
                              </h5>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="fab fa-html5"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Servicio de mensajería comprador-vendedor.
                              </h4>
                              <h5 className="text-gray-600">
                                Mensajería arrendador-arrendatario.
                              </h5>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                <i className="far fa-paper-plane"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                Facil navegación e interacción con la plataforma
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="pt-20 pb-48">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold">Fundadores</h2>
                    <p className="text-lg leading-relaxed m-4 text-gray-600">
                      Podrás acceder a la información de contacto de los
                      desarrolladores que con todo su afán hicieron que esto sea
                      posible .
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap">

                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        src='/foto1.jpg'
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                          Joel Andre Velasco Prieto
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Fundador de la plataforma y desarrollador de software.
                        </p>
                        <div className="mt-6">
                          <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-google"></i>
                          </button>
                          <button
                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                    <img
                        alt="..."
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        src='/KevinJ.jpg'
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                          Kevin Joel Espinales Coello
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Fundador de la plataforma y desarrollador de software.
                        </p>
                        <div className="mt-6">
                          <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-google"></i>
                          </button>
                          <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>
                          <button
                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-instagram"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  </div>
                </div>
              </div>
            </section>
    
            <section className="pb-20 relative block bg-gray-900">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-900 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
    
              <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">
                      Servicio innovador inmobiliario
                    </h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                      Trabajaremos en el crecimiento continuo de la plataforma
                      queriendo llegar en algún momento a un nivel internacional.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-medal text-xl"></i>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                      Desarrollo didactico
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Se irán implementando herramientas actuales y complementos que
                      ayuden al usuario en la navegación de nuestra plataforma.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-poll text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Incremento en tus negocios
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Debido a la facilidad de navegación y contacto podrás realizar
                      tus ventas,arriendos u compras teniendo en cuenta tu interés
                      económico.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Privacidad de información
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Se ha mantenido en la plataforma una navegación segura debido
                      a que solo con tu consentimiento los usuarios podrán acceder a
                      tu información.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      );
}

export default Home