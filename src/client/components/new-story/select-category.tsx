'use client'

import { useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/client/components/ui/select'
import { getAllCategories } from '@/server/data/category'
import { Category } from '@/types/types'
import { useArticleStore } from '@/client/stores/publishArticleStore'

export function SelectCategory() {
  const [categories, setCategories] = useState<Category[]>([])
  const addCategory = useArticleStore(state => state.addCategory)

  useEffect(() => {
    const fetch = async () => {
      setCategories(await getAllCategories())
    }
    fetch()
  }, [])

  const onChange = (event: any) => {
    addCategory({ category: event })
  }

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Tema/Categoría' />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category: Category) => (
          <SelectItem
            key={category.id}
            value={category.name}
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
