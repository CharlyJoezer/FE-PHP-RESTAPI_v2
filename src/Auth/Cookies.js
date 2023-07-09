export function Cookie(name) {
  const cookies = document.cookie.split(";");
  let token = undefined;
  for (let i = 0; i < cookies.length; i++) {
    let arrayCookie = cookies[i].split("=");
    if (arrayCookie[0] === name) {
      token = arrayCookie[1];
    }
  }

  return token;
}
