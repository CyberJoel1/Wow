import React from 'react'
import Image from 'next/image';
type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Image
      src="https://jbtpjkjcxadmeecjohpq.supabase.co/storage/v1/object/public/filewaroom/static/waroom/572140f9-313e-4d64-8540-5736603008ed.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  )
}

export default page