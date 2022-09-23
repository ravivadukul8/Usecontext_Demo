import React from 'react'
import { useGlobalContext } from '../contect'

export default function SearchList() {
  const searchvalue = React.useRef('')
     const {setSearchTerm} = useGlobalContext()

   const searchbar = () => {
      setSearchTerm(searchvalue.current.value)
   }
  return (
    <>
    <div>SearchList</div>
    <form>
      <input type='text' ref={searchvalue} onChange={searchbar} />
    </form>
    </>
  )
}
