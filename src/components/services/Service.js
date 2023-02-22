class Services {
  getResource = async (url) => {
    let res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
  }

  getAllItems = () => {
    return this.getResource(
      'https://collectionapi.metmuseum.org/public/collection/v1/objects'
    )
  }
}

export default Services
