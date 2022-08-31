import React from "react"
import { Route, Routes } from "react-router-dom"
import { ICategory, IDataItem } from "../models"
import { Items } from "../components/Items"
import { Navbar } from "../components/Navbar"

interface MainPageProps {
  categories: ICategory[]
  data: IDataItem[]
}

export function MainPage({ categories, data }: MainPageProps) {
  return (
    <ul>
      <Navbar categories={categories} />
      <Routes>
        {data.map(item => <Route path={`/${item.title}`} element={<Items data={item.content} />} key={item.id + Date.now()} />)}
      </Routes>
    </ul>
  )
}
