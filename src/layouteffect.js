import React, {useState, useEffect, useLayoutEffect} from 'react'

let a = {
  arr: [1, 2, 3]
}

const Test = () => {
  const [items, setItems] = useState(a.arr)
  const [page, setPage] = useState(0)
  
  useLayoutEffect(() => {
    if (page === 0) return

    //new Promise(resolve => {
      // setTimeout(resolve)
    //}).then(() => {
      
    //})
    
    fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
      .then(response => response.json())
      .then(data => {
        a.arr = a.arr.map(i => i + 1)
        setItems(a.arr)
      })
  }, [page])
  
  const onclickbutton = () => {
    setItems([])
    setPage(page + 1)
  }
  
  return (
    <div>
      {items.length > 0 ?
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
        :
        <h1>Nothing</h1>
      }
      <button onClick={onclickbutton}>click</button>
    </div>
  )
}

export default Test