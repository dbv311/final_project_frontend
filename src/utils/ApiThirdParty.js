class Api {
  constructor(url) {
    this._url = url;
  }

  async getCar() {
    const res = await fetch(`${this._url}`, {
      headers: {},
    });
    return await res.json();
  }
}

const api = new Api("https://freetestapi.com/api/v1/cars");

export default api;

// API DE CARS https://freetestapi.com/api/v1/cars
