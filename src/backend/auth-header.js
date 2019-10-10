export function authHeader() {
    // RETURN AUTH HEADER WITH JWT TOKEN
    let user = JSON.parse(JSON.parse(localStorage.getItem('user')));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}
