import AreaGraph from '@/components/graph/AreaGraph'
import GraphsCarousel from '@/components/graph/GraphsCarousel'
import { RootState } from '@/redux/store'
import { Skeleton } from '@nextui-org/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function UserGraphs() {

    const {isLoading,userGraph: userEvents} = useSelector((state:RootState) => state.app)

    if(!userEvents) return (
        <div className='w-full h-30vh grid place-items-center'>
            <p className='text-2xl text-blue-500 font-bold'>Selecciona un usuario para ver su informacion</p>
        </div>
    )

    if(isLoading) return (
      <div className='w-full grid grid-cols-2'>
        <Skeleton className=' h-96 w-full' />
        <Skeleton className=' h-96 w-full' />
      </div>
    )

  return (
    <div className='w-full grid grid-cols-2'>
        <GraphsCarousel datasets={userEvents.registrosSintomas} />
        <GraphsCarousel datasets={userEvents.registrosCuantitativos} />
    </div>
  )
}
