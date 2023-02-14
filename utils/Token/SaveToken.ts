export async function saveToken(response: any){
    let accionSaveToken = await (await fetch("/api/login", {
        method: 'POST',
        body: JSON.stringify({ token: response?.data.login.token }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })).json();

    return accionSaveToken;
}

export async function saveTokenAdmin(response: any){
    let accionSaveToken = await (await fetch("/api/login", {
        method: 'POST',
        body: JSON.stringify({ token: response?.data.loginAdmin.token }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })).json();

    return accionSaveToken;
}