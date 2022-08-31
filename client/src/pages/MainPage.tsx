import React from "react"
import { Route, Routes } from "react-router-dom"
import { ICategory, IDataItem } from "../models"
import { Items } from "../components/Items"
import { Navbar } from "../components/Navbar"
import { useSearchItemsQuery } from "../store/items/items.api"

interface MainPageProps {
  categories: ICategory[]
  items: IDataItem[]
}

export function MainPage({ categories, items }: MainPageProps) {
  const {data, isError, isLoading} = useSearchItemsQuery('vladilen')
  
  return (
    <ul>
      <Navbar categories={categories} />
      <Routes>
        {items.map(item => <Route path={`/${item.title}`} element={<Items items={item.content} />} key={item.id + Date.now()} />)}
      </Routes>
    </ul>
  )
}
