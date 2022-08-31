
export interface ICategory {
    id: number
    name: string
    path: string
    subCategories: ISubCategory[]
}

interface ISubCategory {
    id: number
    title: string
    path: string
}

export interface IItem {
    id: number
    term: string
    translate: string
}

export interface IDataItem {
    id: number
    title: string
    content: IItem[]
}
