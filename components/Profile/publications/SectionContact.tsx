import { Card } from 'flowbite-react'
import React from 'react'
import RowFriend from '../Friends/RowFriend'

type Props = {}

const SectionContact = (props: Props) => {
  return (
<div className="">
  <div className='w-[80%] m-auto'>
  <Card>
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Amigos
      </h5>

    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">

        <li className="py-3 sm:py-4">
          <RowFriend/>
        </li>
        <li className="py-3 sm:py-4"> 
          <RowFriend/>
        </li>
      </ul>
    </div>
  </Card>
</div>
</div>
  )
}

export default SectionContact