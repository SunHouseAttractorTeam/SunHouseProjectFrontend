import React from 'react'
import './AddContentBlock.scss'

const AddContentBlock = ({ ...props }) => (
  <div className={`add-content-block${props.className ? ` ${props.className}` : ''}`}>
    <h3 className="add-content-block__title">Добавить контент</h3>
    <div className="add-content-block__types">
      <button className="add-content-block__type add-content-block__type--text" type="button">
        <p className="add-content-block_type-label">Text</p>
      </button>
      <button className="add-content-block__type add-content-block__type--video" type="button">
        <p className="add-content-block_type-label">Video</p>
      </button>
      <button className="add-content-block__type add-content-block__type--audio" type="button">
        <p className="add-content-block__type-label">Audio</p>
      </button>
    </div>
  </div>
)

export default AddContentBlock
