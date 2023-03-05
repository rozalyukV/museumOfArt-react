import { Component } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Spinner from '../spinner/Spinner'
import Service from '../services/Service'
import Skeleton from '../skeleton/Skeleton'

import imgNone from '../../resources/img/no-image-100.png'

class CollectionItemInfo extends Component {
  state = {
    item: null,
    loading: false,
    error: false,
  }

  service = new Service()

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem = () => {
    const { itemId } = this.props
    if (!itemId) {
      return
    }
    this.onItemLoading()
    this.service.getItem(itemId).then(this.onItemLoaded).catch(this.onError)
  }

  onItemLoaded = (item) => {
    this.setState({ item, loading: false })
  }

  onItemLoading = () => {
    this.setState({
      loading: true,
    })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  render() {
    const { item, loading, error } = this.state

    const skeleton = item || loading || error ? null : <Skeleton />
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !item) ? <View item={item} /> : null

    return (
      <div className="card shadow-lg">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const View = ({ item }) => {
  const {
    isHighlight,
    title,
    objectDate,
    medium,
    dimensions,
    city,
    country,
    primaryImageSmall,
    artistDisplayName,
    artistDisplayBio,
    artistBeginDate,
    artistEndDate,
    objectURL,
    objectWikidata_URL,
  } = item

  let styles = null
  if (item.primaryImageSmall === imgNone) {
    styles = { objectFit: 'none' }
  }

  return (
    <>
      <img
        src={primaryImageSmall}
        className="img-fluid p-3"
        style={styles}
        alt="Work of art"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {!(artistDisplayName === '-') ? artistDisplayName : null}
        </p>
        <p className="card-text">
          {!(artistBeginDate === '...' && artistEndDate === '...')
            ? `${artistBeginDate} - ${artistEndDate}`
            : null}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {isHighlight ? (
          <li className="list-group-item fw-bold" style={{ color: '#20c997' }}>
            The popular and important artwork in the collection'
          </li>
        ) : null}
        <li className="list-group-item">
          <span className="fw-bold">About artist:</span> {artistDisplayBio}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Materials:</span> {medium}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">City:</span> {city}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Country:</span> {country}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Creation time:</span> {objectDate}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Dimensions:</span> {dimensions}
        </li>
      </ul>
      <div className="card-body d-flex justify-content-center">
        <a
          href={objectURL}
          className="btn btn-outline-dark text-uppercase me-4"
        >
          Homepage
        </a>
        <a
          href={objectWikidata_URL}
          className="btn btn-outline-dark text-uppercase"
        >
          Wiki
        </a>
      </div>
    </>
  )
}

export default CollectionItemInfo
