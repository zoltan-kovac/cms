import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="row">
    {gridItems.map((item) => (
      <div key={item.text} className="col-xs-12 col-md-6 col-xl-3">
        <div className="card">
          <PreviewCompatibleImage imageInfo={item} />
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">{item.text}</p>
            <a href="# " className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
