"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../app/Context/store";
import { QueryPublication } from "../../../utils/Queries/Publication/PublicationsQueries";
import { PublicationQueries } from "../../../utils/Queries/User/PublicationQueries";
import { ErrorNotification } from "../../../utils/SweetLibrary/ErrorNotification";
import SchemaInsertPublication from "../../Publication/formatInsertPublication/SchemaInsertPublication";
import SchemaPublication from "../../Publication/formatPublication/SchemaPublication";

type Props = {
  profile: string;
};

const SectionPublication = (props: Props) => {
  const { profile } = props;
  const { equalUser, setIsEqualUser } = useGlobalContext();
  const [render, setRender] = useState(false);
  const [renderData, setRenderData] = useState(false);
  const [publications, setPublications] = useState<[]>();
  const [dataUserPublication, setDataUserPublication] = useState<any>([]);

  const getAllPublication = async () => {
    const response = await QueryPublication.findAllPublicationForClient(
      profile
    );

    if (!response) {
      //ErrorNotification.errorNotificationLogin("Lo lamentamos no se encontraron datos");
      return;
    }
    setPublications(response["data"]["publicationAll"]);
  };

  useEffect(() => {
    getAllPublication();

    return () => {};
  }, [renderData]);

  const listPublications = publications?.map((element) => {
    var dates: string = element["date_created"];
    var dateParts: any = dates.split("-");

    //month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
    console.log("fecha .................");
    console.log(dateObject);
    return (
      <div className=" mb-8">
        <SchemaPublication
          title={element["titulo"]}
          photos={element["photos"]}
          fechaCreacion={element["date_created"]}
          comment={element["message"]}
          banos={element["banos"]}
          comentarios={{ title: "" }}
          habitaciones={element["habitaciones"]}
          meGusta={2}
          medida={element["medida"]}
          key={element["identity"]}
          identity={element["identity"]}
          renderData={renderData}
          setRenderData={setRenderData}
          latitud={element["latitud"]}
          longitud={element["longitud"]}
          tipo={element["tipo"]}
          userName={element["user"]["userName"]}
          nameUser={element["user"]["fullName"]}
          foto={element["user"]["foto"]}
          addressEmail={element["user"]["addressEmail"]}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="mx-[7%] border border-indigo-200 rounded-lg mt-6 mb-3 drop-shadow-lg">
        {!equalUser && (
          <SchemaInsertPublication
            setRenderData={setRenderData}
            renderData={renderData}
          />
        )}
      </div>

      <div className="divide-y">
        <div className="px-[7%] my-7">{listPublications}</div>
      </div>
    </div>
  );
};

export default SectionPublication;
