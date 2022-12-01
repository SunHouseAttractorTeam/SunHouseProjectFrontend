import React from 'react'
import '../FormInput/FormInput.scss'

const FormSelect = ({ items, onChange }) => (
  <div>
    <select onChange={onChange} name="category" className="InputStyle">
      <option>Выберите категорию курса</option>
      {items.map(item => (
        <option key={item._id} value={item._id}>
          {item.title}
        </option>
      ))}
    </select>
  </div>
)

export default FormSelect
