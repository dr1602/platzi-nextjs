import React, { useEffect, useState } from 'react'

const HomePage = () => {

  const [ productList, setProductList ] = useState<TProduct[]>([]);
  const [ individualProd, setIndividualProd] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then( response => response.json())
      // .then(console.log)
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  useEffect(() => {
    window
      .fetch('/api/avo/[]')
      .then( response => response.json())
      .then((data) => {
        setIndividualProd(data)
      })
  })

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div> {product.name} </div>
      ))}

      {individualProd.map((individual) => (
        <div> {individual.name} </div>
      ))}
    </div>
  )
}

export default HomePage
