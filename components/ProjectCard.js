'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import monkeesSite from '../public/monkeezSite.png'

function ProjectCard() {
    return (
      <div className=' h-min-40 mb:h-40 w-full rounded-lg flex flex-row p-3'>
        <div className='w-1/3'>
        <Image
                src={monkeesSite}
                alt='personal image'
                // fill
                width={500}
                height={500}
                priority
                placeholder='blur'
              />
        </div>
        <div className='w-2/3 pl-3'>
            <h1 className='text-black font-bold text-md'> 
             Project name
            </h1>
            <p className='text-gray-700 text-xs'>
                Lorum Ipsum. Lorum Ipsum. Lorum Ipsum. Lorum Ipsum. Lorum Ipsum. Lorum Ipsum. Lorum IpsumLorum Ipsum. Lorum Ipsum. Lorum Ipsum. Lorum Ipsum.
            </p>

        </div>
      </div>
    );
  }
  
  export default ProjectCard