import React from 'react'
import { useParams } from 'react-router-dom'
import { LayoutInternal } from '../Layouts/LayoutInternal'
import { DemoComponent } from '../../components/shared/DemoComponent'

export const ProductDetail = () => {
  const { id } = useParams()
  return (
    <LayoutInternal>
     <h1>Product Detail : {id}</h1> 
     <DemoComponent />
    </LayoutInternal>
  )
}
