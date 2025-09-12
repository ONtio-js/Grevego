import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({width,height,small}:{width:number,height:number,small?:boolean}) => {
  return (
    <Link href={"/"}>
      <Image
        src="https://res.cloudinary.com/dm2pa4nll/grevego/logo.svg"
        alt="Grevego"
        width={ small ? 30 : width}
        height={ small ? 30 : height}
        className={`md:w-[200px] ${small ? "w-full h-[30px]" : ""}`}
      />
    </Link>
  );
}

export default Logo