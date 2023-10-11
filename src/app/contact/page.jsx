import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>Esto es una ruta que funciona en contact</h1>
        <li>
        <Link href="/">
          Volver a Inicio
        </Link>
        </li>

    </div>
  )
}

export default page