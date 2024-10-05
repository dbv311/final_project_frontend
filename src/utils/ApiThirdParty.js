class Api {
  constructor(url) {
    this._url = url;
  }

  async getCar() {
    const res = await fetch(`${this._url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }
}

const api = new Api("https://freetestapi.com/api/v1/cars");

export default api;
