import React, { useEffect, useState }  from "react"
import { Route, Routes } from "react-router-dom"
import { ICategory, IDataItem } from "../models"
import { ItemsList } from "../components/ItemsList"
import { Navbar } from "../components/Navbar"

interface MainPageProps {
  categories: ICategory[]
  data: IDataItem[]
}

export function MainPage({ categories, data }: MainPageProps) {
  const [search, setSearch] = useState("")
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
      setDropdown(search.length > 1)
  }, [search])

  return (
    <div className="grid grid-flow-col-dense grid-cols-2">
      <div>
        <Navbar categories={categories} />
      </div>
      <div className="relative w-[560px]">
        <input className="w-full h-[40px] mt-3 px-4 py-2 border" type="text" placeholder="Search for words..." value={search} onChange={e => setSearch(e.target.value)} />
        {dropdown && <ul className="absolute max-h-[200px] top-[40px] left-0 right-0 bg-white shadow-md overflow-y-scroll">
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hand out</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang on</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang out</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang out</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang out</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang out</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang out</li>
          <li className="px-4 py-2 hover:text-white hover:bg-gray-400 transition-colors cursor-pointer">Hang out</li>
        </ul>}
        <div>
          <Routes>
            {data.map(item => <Route path={`/${item.title}`} element={<ItemsList data={item.content} />} key={item.id + Date.now()} />)}
          </Routes>
        </div>
      </div>
    </div>
  )
}
