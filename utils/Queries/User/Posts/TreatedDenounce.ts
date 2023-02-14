import { CONFIG } from '../../../Config/host';
import { treatedDenounceFormat } from '../../../interfaces/treatedDenounceFormat';
import { updateFormat } from '../../../interfaces/updateFormat';
import { returnToken } from '../../../Token/ReturnToken';
export async function treatedDenouncePost(treated:treatedDenounceFormat){
   
    console.log(await returnToken());
    const headers = {
        "content-type": "application/json",
        Authorization: "Bearer " + await returnToken(),
      };
    
      const requestBody = {
        query: `mutation TraeatedDenounceComment($treatedDenounceCommentInput: TreatedDenounceCommentInput!) {
            traeatedDenounceComment(treatedDenounceCommentInput: $treatedDenounceCommentInput)
          }`,
        variables: {
            treatedDenounceCommentInput: {
                dateEndBlock: treated.endBlockDate,
                userName: treated.userName,
            },
        },
      };
  
      

      const options = {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers
    };

    const response = await (await fetch(CONFIG.host+'/graphql', options)).json();
    return response;
}