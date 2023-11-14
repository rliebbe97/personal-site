import Image from 'next/image'
import profileImage from '../public/heroImage.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[#F6F4F3]">
      
      <div className='w-full lg:max-w-7x mx-auto mt-1 flex'>

        <div className=' w-1/2 h-[60vh] flex flex-col justify-center items-center px-6'>
          <div className='font-sans font-bold text-4xl w-full'>
            I'm Roby Liebbe
          </div>
          <div className='text-lg w-full m-0'>
            Technical Product Builder and Creative
          </div>
          <div className='h-1 w-full'>
            <div className='h-1 w-1/2 bg-[#276FBF]'>
            </div>
          </div>
          <div>
            
          </div>
        </div>

        <div className=' w-1/2 h-[60vh] flex flex-col justify-center items-center px-6'>
          <div className='rounded-full'>
            <Image
              src={profileImage}
              alt='personal image'
              width={500}
              height={500}
              placeholder='blur'
            />
          </div>
        </div>

      </div>

      <div className='w-full h-[60vh] bg-[#183059]'>
        coming soon
      </div>

    </main>
  )
}