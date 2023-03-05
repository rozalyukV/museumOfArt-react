const Skeleton = () => {
  const skeletonHeader = {
    display: 'grid',
    gridTemplateColumns: '40px auto',
    columnGap: '10px',
    alignItems: 'center',
  }

  const skeletonCircle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#C4C4C4',
    borderRadius: '100%',
  }

  const skeletonMini = {
    width: '100%',
    height: '16px',
    backgroundColor: '#C4C4C4',
  }

  const skeletoBlock = {
    height: '35px',
    width: '100%',
    backgroundColor: '#C4C4C4',
    marginTop: '15px',
  }

  return (
    <div className="p-4">
      <p className="fw-bold p-2">
        Please select a character to see information
      </p>
      <div>
        <div className="pulse" style={skeletonHeader}>
          <div className="pulse" style={skeletonCircle}></div>
          <div className="pulse" style={skeletonMini}></div>
        </div>
        <div className="pulse" style={skeletoBlock}></div>
        <div className="pulse" style={skeletoBlock}></div>
        <div className="pulse" style={skeletoBlock}></div>
      </div>
    </div>
  )
}

export default Skeleton
