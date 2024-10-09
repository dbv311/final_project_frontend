class Api {
  constructor(url) {
    this._url = url;
  }

  async getCar() {
    const res = await fetch(
      `${this._url}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await res.json();
  }
}

const api = new Api(
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json"
);

export default api;
