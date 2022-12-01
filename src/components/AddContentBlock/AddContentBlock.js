import React from 'react'
import './AddContentBlock.scss'

const AddContentBlock = () => (
  <div className="add-content-block">
    <h3 className="add-content-block_title">Добавить контент</h3>
    <div className="add-content-block_types">
      <button className="add-content-block_type text">
        <p className="add-content-block_type_label">Text</p>
      </button>
      <button className="add-content-block_type video">
        <p className="add-content-block_type_label">Video</p>
      </button>
      <button className="add-content-block_type audio">
        <p className="add-content-block_type_label">Audio</p>
      </button>
    </div>
  </div>
)

export default AddContentBlock
