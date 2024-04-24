import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataById } from './features/user-slice';


const options = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
]

const Dropdown = () => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.dropdown.selected);

  return (
    <select value={selected} onChange={ev => dispatch(getUserDataById(ev.target.value))}>
      <option value='0'>select an id</option>
      {options.map(opt => (
        <option key={opt.id} value={opt.id}>
          User {opt.id}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
