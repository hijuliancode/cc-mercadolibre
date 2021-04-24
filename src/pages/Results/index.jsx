import React from 'react'
import { LayoutInternal } from '../Layouts/LayoutInternal'
import { DemoComponent } from '../../components/shared/DemoComponent'

export const Results = ({match, location}) => {
  console.log('match', match)
  console.log('location', location)
  return (
    <LayoutInternal>
     <h1>Results</h1> 
     <hr/>
     { JSON.stringify(location, null, 2) }
     <hr/>
     <DemoComponent />
    </LayoutInternal>
  )
}
