import React from 'react'
import { useHistory } from 'react-router-dom'

export default function FilmItem(props) {
  const history = useHistory()
  let {name, filmId} = props
  const handleToDetail = () => {
  history.push({
      pathname: '/filmsDetail',
      state: {
        filmId
      }
    })
  }
  return (
          <li onClick={() => handleToDetail(filmId)}>
          {name}
        </li>
  )
}
