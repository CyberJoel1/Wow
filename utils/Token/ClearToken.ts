export async function clearToken(){
    let login = await (await fetch("/api/logout", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  })).json();
  
        const token= login.token;
  
        console.log(token)
        return token;
  }