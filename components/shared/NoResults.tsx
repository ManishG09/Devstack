import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
    linkTitle:string
    link:string
    title:string
    description :string
}


const NoResults = ({linkTitle, link, title,description}:Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center'>
        <Image src='/assets/images/light-illustration.png'
        height={270}
        width={270}
        alt="No reuslt illustration"
        className="block object-contain dark:hidden" />
        <Image src='/assets/images/dark-illustration.png'
        height={270}
        width={270}
        alt="No reuslt illustration"
        className="hidden object-contain dark:flex" />

        <h2 className='h2-bold text-dark200_light900'>{title}</h2>
        <p className='body-regular text-dark500_light700 my-3.5max-w-md text-center'>{description}</p>

        <Link href={link}>
            <Button className='paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900'>{linkTitle}</Button>
        </Link>
    </div>

  )
}

export default NoResults