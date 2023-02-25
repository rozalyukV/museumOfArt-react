class Service {
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

  getItem = async (id) => {
    const res = await this.getResource(`${this._apiBase}objects/${id}`)
    return this._transformItem(res)
  }

  _transformItem = (res) => {
    return {
      title: res.title ? res.title : '-',
      objectDate: res.objectDate ? res.objectDate : '-',
      medium: res.medium ? res.medium : '-',
      city: res.city ? res.city : '-',
      country: res.country ? res.country : '-',
      primaryImageSmall: res.primaryImageSmall,
      artistDisplayName: res.artistDisplayName ? res.artistDisplayName : '-',
      objectURL: res.objectURL,
      objectWikidata_URL: res.objectWikidata_URL,
    }
  }
}

export default Service
