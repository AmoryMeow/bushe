export class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getData() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        ...this._headers
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Ошибка получения данных'));
    })
  }
}

const api = new Api({
  baseUrl: 'http://109.248.175.136:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;