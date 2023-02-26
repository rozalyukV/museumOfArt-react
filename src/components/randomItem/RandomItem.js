import { Component } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Spinner from '../spinner/Spinner'
import Service from '../services/Service'

class RandomItem extends Component {
  state = {
    item: {},
    loading: true,
    error: false,
  }

  service = new Service()

  componentDidMount() {
    this.updateItem()
  }

  onItemLoaded = (item) => {
    this.setState({ item, loading: false })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  updateItem = () => {
    const id = Math.floor(Math.random() * (894313 - 1) + 1)
    this.service.getItem(id).then(this.onItemLoaded).catch(this.onError)
  }

  render() {
    const { item, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <View item={item} /> : null

    return (
      <div className="container px-4 my-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {errorMessage}
          {spinner}
          {content}
          <div className="col">
            <div className="card h-100 text-bg-dark">
              <img src="..." className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const View = ({ item }) => {
  const {
    title,
    objectDate,
    medium,
    city,
    country,
    primaryImageSmall,
    artistDisplayName,
    objectURL,
    objectWikidata_URL,
  } = item
  return (
    <div className="col">
      <div className="card h-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={primaryImageSmall}
              className="card-img-top img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Materials: {medium}</p>
              <p className="card-text">City: {city}</p>
              <p className="card-text">Country: {country}</p>
              <p className="card-text">Creation time: {objectDate}</p>
              <p className="card-text">Artist: {artistDisplayName}</p>
              <a
                href={objectURL}
                className="btn btn-primary me-3 text-uppercase"
              >
                Homepage
              </a>
              <a
                href={objectWikidata_URL}
                className="btn btn-primary text-uppercase"
              >
                Wiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomItem
