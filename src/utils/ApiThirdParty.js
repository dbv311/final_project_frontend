class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  async getMusic() {
    const res = await fetch(`${this._url}music`, {
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    });
    return await res.json();
  }
}

const api = new Api(
  "https://api.spotify.com/",
  "ba8a9a7fd88f4662ab39b922e5bd41ce"
);

export default api;

// API DE CARS https://freetestapi.com/api/v1/cars
