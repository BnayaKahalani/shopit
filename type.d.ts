export interface Product {
  _id: number
  title: string
  description: string
  oldPrice: number
  price: number
  brand: string
  image: string
  isNew: boolean
  category: string
}
;[]

export interface Item {
  _id: number
  title: string
  description: string
  category: string
  brand: string
  image: string
  isNew: boolean
  oldPrice: number
  price: number
  rate: number
}

export interface StoreProduct {
  _id: number
  title: string
  description: string
  image: string
  price: number
  brand: string
  category: string
  quantity: number
  oldPrice: number
}

export interface UserInfo {
  _id: string
  name: string
  email: string
}
