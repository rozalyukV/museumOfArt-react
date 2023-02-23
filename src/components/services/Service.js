class Services {
  _apiBase = 'https://collectionapi.metmuseum.org/public/collection/v1/'

  getResource = async (url) => {
    let res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getAllItems = () => {
    return this.getResource(`${this._apiBase}objects`)
  }

  getItem = (id) => {
    return this.getResource(`${this._apiBase}objects/${id}`)
  }
}

export default Services
