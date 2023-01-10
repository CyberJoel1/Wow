import axios from "axios";
import { CONFIG } from "../../../Config/host";
import { useContext } from 'react';

export async function postFile(arrayBlob: []){
    
    let resultFilesNames: any[] = [];
    console.log(arrayBlob)
    for (var i = 0; i < arrayBlob.length; i++) {
      console.log(i+" este archivo se esta subiendo " +arrayBlob[i])
      const fd = new FormData()
      fd.append('file', arrayBlob[i])

      let resultImage = await (await axios({
        url: CONFIG.host + "/file/product",
        method: 'POST',
        data: fd
      })).data
      resultFilesNames.push(resultImage.secureUrl);
      console.log("se han subido...................")
      console.log(resultFilesNames);
    }
      
      return resultFilesNames;
    
}