import noImg from '../../resources/img/no-image-100.png'

class Service {
  _apiBase = 'https://collectionapi.metmuseum.org/public/collection/v1/'

  getResource = async (url) => {
    let res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getCollectionIds = async () => {
    const res = await this.getResource(`${this._apiBase}objects`)
    return res.objectIDs
  }

  getItem = async (id) => {
    const res = await this.getResource(`${this._apiBase}objects/${id}`)
    return this._transformItem(res)
  }

  getCollection = async (offset) => {
    const arrOfIds = await this.getCollectionIds(offset)
    const limitedArrOfIds = arrOfIds.slice(offset, offset + 9)
    const arrOfItems = await Promise.all(
      limitedArrOfIds.map(async (item) => {
        const res = await this.getItem(item)
        return res
      })
    )

    return arrOfItems
  }

  _transformItem = (res) => {
    return {
      objectID: res.objectID,
      artistBeginDate: res.artistBeginDate ? res.artistBeginDate : '...',
      artistEndDate: res.artistEndDate ? res.artistEndDate : '...',
      title: res.title ? res.title : '-',
      objectDate: res.objectDate ? res.objectDate : '-',
      medium: res.medium ? res.medium : '-',
      city: res.city ? res.city : '-',
      country: res.country ? res.country : '-',
      primaryImageSmall: res.primaryImageSmall ? res.primaryImageSmall : noImg,
      artistDisplayName: res.artistDisplayName ? res.artistDisplayName : '-',
      objectURL: res.objectURL,
      objectWikidata_URL: res.objectWikidata_URL,
    }
  }
}

export default Service
