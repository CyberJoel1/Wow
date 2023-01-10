export async function returnToken(){
  let login = await (await fetch("/api/profile", {
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