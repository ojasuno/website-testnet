import { FC } from 'react'
import Link from 'next/link'

import { RawButton } from '../Button'

type PageBannerProps = {
  title: string
  text: string
  buttonText: string
  buttonClassName?: string
  buttonLink: string
}
export const PageBanner: FC<PageBannerProps> = ({
  title,
  text,
  buttonText,
  buttonClassName = '',
  buttonLink,
}) => {
  return (
    <div>
      <h1 className="text-left md:text-center text-5xl md:text-6xl mt-24 mb-8 font-extended">
        {title}
      </h1>
      <div className="container mx-auto w-3/4">
        <p className="text-justify text-lg md:text-center md:text-2xl mb-8 font-favorit">
          {text}
        </p>
      </div>
      <Link href={buttonLink} passHref>
        <RawButton
          className={`m-auto mt-8 text-lg md:text-xl px-7 py-4 ${buttonClassName}`}
        >
          {buttonText}
        </RawButton>
      </Link>
    </div>
  )
}

export default PageBanner