const Content = (props) => {
  return (
    <div className="container px-4 text-center">
      <div className="row gx-5">
        <div className="col-8">
          <div className="p-3 border bg-light">{props.collection}</div>
        </div>
        <div className="col-4">
          <div className="p-3 border bg-light">{props.collectionItemInfo}</div>
        </div>
      </div>
    </div>
  )
}

export default Content
