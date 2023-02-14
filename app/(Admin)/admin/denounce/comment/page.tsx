"use client";
import { Avatar, Button, Table } from "flowbite-react";
import moment from "moment";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { EvidencePublication } from "../../../../../utils/SweetLibrary/EvidencePublication";
import { QueryPublication } from '../../../../../utils/Queries/Publication/PublicationsQueries';
import { CommentsQueries } from '../../../../../utils/Queries/Comments/CommentsQueries';
import { EvidenceComment } from '../../../../../utils/SweetLibrary/EvidenceComment';



type Props = {};

const page = (props: Props) => {
  const [pag, setPage] = useState<number>(0);
  const [numPage, setNumPage] = useState<number>(0);
  const [render, setRender] = useState<boolean>(false);
  const [listDenounce, setListDenounce] = useState<any>();
  const countDenounce = async (): Promise<number> => {
    const response = await CommentsQueries.countComments();
    if (!response) {
      return (response['data']['CountDenounces']);

    } else {

      return 0;
    }
  }
  const transformPageAvailable = (numero: number) => {
    const respuesta = (Math.trunc((numero - 1) / 10)) + 1;
    return respuesta;
  }
  const comprobatePagesMax = async (page: number) => {
    const responseNumPageInitial = await countDenounce();

    const numAvailable = transformPageAvailable(responseNumPageInitial);
    console.log("numAvailable" + numAvailable);
    console.log("page" + "  " + page);
    if (numAvailable < page) {
      setPage(numAvailable);
    }
    if (page < 0) {
      setPage(0);
    }
  }

  const publicationsDenounce = async (pag: number) => {
    let response;
    if (pag <= 0) {
      response = await CommentsQueries.getDenounceComments(0);
    } else {
      response = await CommentsQueries.getDenounceComments(((pag) * 10) - 1);
    }
    if (!response) {
      return;
    }
    setListDenounce(response['data']['findAllCommentDenounce']);
    const responseNumPage = await CommentsQueries.countComments();

    setNumPage(responseNumPage['data']['CountDenounces']);
  }


  useEffect(() => {
    comprobatePagesMax(pag);
    publicationsDenounce(pag);

    return () => {

    }
  }, [pag, render])
  const listItems = listDenounce?.map((element: any) => {
    // Correct! Key should be specified inside the array.

  }
  );

  return (
    <div className="flex flex-col max-w-[95%]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <h2 className="text-center text-base font-bodyFont">Sección de denuncias de comentarios</h2>
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm  text-gray-700 px-6 py-4 text-left font-bold"
                  >
                    Denunciante
                  </th>
                  <th
                    scope="col"
                    className="text-sm  text-gray-700 px-6 py-4 text-left font-bold"
                  >
                    Evidencia
                  </th>
                  <th
                    scope="col"
                    className="text-sm  text-gray-700 px-6 py-4 text-left font-bold"
                  >
                    Denunciado
                  </th>
                  <th
                    scope="col"
                    className="text-sm  text-gray-700 px-6 py-4 text-left font-bold"
                  >
                    Tiempo de bloqueo
                  </th>
                  <th
                    scope="col"
                    className="text-sm  text-gray-700 px-6 py-4 text-left font-bold"
                  >
                    solicitud
                  </th>
                </tr>
              </thead>
              <tbody>
                {listDenounce?.map((element: any) => {
                  return (
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {element['user1']['fullName']}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          className="px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        text-sm
                        font-medium
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={(e: any) => {
                            e.preventDefault();
                            EvidencePublication.evidencePublication(element['foto']);
                          }}
                        >
                          Ver evidencia
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap ">
                        {element['user2']['fullName']}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <select
                          name="lang"
                          id="lang"
                          onChange={async (e: any) => {
                            console.log(e.target.value);
                            let valor = e.target.value;
                            let resultado = "";
                            let fechaActual = moment(new Date());
                            if ((valor == 1)) {
                              resultado = fechaActual
                                .add(1, "weeks")
                                .format("YYYY-MM-DD");

                            }
                            if ((valor == 2)) {
                              resultado = fechaActual
                                .add(1, "months")
                                .format("YYYY-MM-DD");
                            }
                            if ((valor == 3)) {
                              resultado = fechaActual
                                .add(2, "months")
                                .format("YYYY-MM-DD");
                            } else {
                              ("escoja un valor válido");
                            }
                            const response = await EvidenceComment.confirm(resultado, element['user2']['fullName'], element['user2']['userName']);
                            if (response != null) {
                              setRender(!render);
                            }
                          }}
                        >
                          <option value={0}>elige el castigo</option>
                          <option value={1}>1 semana</option>
                          <option value={2}>1 mes</option>
                          <option value={3}>2 meses</option>
                        </select>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <button
                          type="button"
                          className="px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={(e: any) => {
                            e.preventDefault();
                            const response = EvidenceComment.cancelRequest(parseInt(element['idCommentary']));
                            if (response != null) {
                              setRender(!render);
                            }
                          }}
                        >
                          Cancelar Solicitud
                        </button>
                      </td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="pt-6">
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item disabled">
                <button
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-700 focus:shadow-none"

                  tabIndex={-1}

                  onClick={() => {
                    setPage(pag - 1);
                  }}
                >
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-white hover:bg-blue-700 focus:shadow-none"
                  onClick={() => {
                    setPage(pag + 1);
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
          {listItems}
        </div>
      </footer>
    </div>
  );
};
export default page;
