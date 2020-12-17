import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListItem = props => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes/5').then(res => {
      console.log(res.data)
      setQuotes(res.data)
    })
  }, [])

  return <div>
      {quotes.map(quote => (
        <p>{quote}</p>
      ))}
  </div>
}
export default ListItem