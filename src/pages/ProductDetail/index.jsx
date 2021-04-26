import React from 'react'
import { useParams } from 'react-router-dom'
import { LayoutInternal } from '../Layouts/LayoutInternal'
import { DemoComponent } from '../../components/shared/DemoComponent'
import { useFetchItem } from '../../hooks/useFetchItem'

export const ProductDetail = () => {
  const { id } = useParams()
  const { data:product, loading } = useFetchItem(id)

  console.log('loading=>>>> ', loading)
  console.log('product=>>>>', product)

  return (
    <LayoutInternal>
      {
        !loading && (
          <h1>Título {product.title}: {id}</h1> 
        )
      }
     <DemoComponent />
    </LayoutInternal>
  )
}
