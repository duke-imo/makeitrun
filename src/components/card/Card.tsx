import React from 'react'
import Image from 'next/image'
import nagamine from 'public/nagamine.jpeg'

type Props = {
  id?: string;
  title?: string;
  description?: string;
}

export function Card({props}: {props: Props}) {
  return (
    <div className="flex flex-col p-4">
      <Image
        className="w-full h-auto"
        src={nagamine}
        sizes='100vw'
        alt="Nagamine"
      />
      <div id={props.id} className="text-center  h-20 bg-cyan-600">
        <h1 className="py-1">{props.title}</h1>
        <p className="break-words">{props.description}</p>
      </div>
    </div>
  );
}
