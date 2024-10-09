class Api {
  constructor(url) {
    this._url = url;
  }

  async getCar() {
    const res = await fetch(
      `${this._url}`,
      { mode: "no-cors" },
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
  "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json"
);

export default api;
