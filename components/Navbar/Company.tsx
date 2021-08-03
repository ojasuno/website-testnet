import React from "react"

import Cube from './Cube'
import Link from 'next/link'

type SectionHeaderProps = {
  children?: React.ReactNode;
  className?: string;
}

const SectionHeader = ({ children, className }: SectionHeaderProps) =>
  <h3 className={`font-favorit text-ifgray text-sm mb-7 ${className}`}>{children}</h3>

type TestnetGridElementProps = {
  header: string;
  href: string;
  body: string;
  cubeClassName: string;
}

const TestnetGridElement = ({ href, header, body, cubeClassName }: TestnetGridElementProps) =>
  <Link href={href}>
    <a className="flex items-center p-4 rounded hover:bg-iflightgray">
      <Cube className={cubeClassName} />
      <div className="flex flex-col ml-4">
        <h5>{header}</h5>
        <p className="font-favorit text-ifgray text-sm">{body}</p>
      </div>
    </a>
  </Link>

function Company() {
  return (
    <div className="absolute bg-white left-0 right-0 shadow-navbar">
      <div className="flex flex-col items-center border-b border-t p-8 pb-10">
        <div className="w-5/6">
          <SectionHeader>COMPANY</SectionHeader>
          <div className="flex justify-between -m-4">
            <TestnetGridElement href="https://ironfish.network/about" header="About Us" body="Learn who Iron Fish is" cubeClassName="text-iforange" />
            <TestnetGridElement href="https://ironfish.network/careers" header="Careers" body="We're hiring!" cubeClassName="text-ifbeige" />
            <TestnetGridElement href="https://ironfish.network/blog" header="Blog" body="What we've got to say" cubeClassName="text-ifpink" />
            <TestnetGridElement href="https://ironfish.network/faq" header="FAQ" body="Frequently asked questions" cubeClassName="text-iflightblue" />
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Company
  