import Image from 'next/image'
import profileImage from '../public/heroImage.png'
import TwitterIcon from '../components/Icons/TwitterIcon'
import LinkedinIcon from '../components/Icons/LinkedinIcon'
import GithubIcon from '../components/Icons/GithubIcon'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[#F6F4F3]">
      
      <div className=' mx-[20%] w-[100%] h-[100vh] md:flex md:flex-row-reverse max-w-7xl px-4 lg:px-8 pt-20'>
        <div className='w-full h-1/2 flex items-center justify-center'>
          <div className='w-[75vw] lg:w-[80%] h-[75vw] lg:h-[80%] relative'>
            <Image
                src={profileImage}
                alt='personal image'
                fill
                // width={500}
                // height={500}
                priority
                placeholder='blur'
              />
          </div>
          
        </div>
        <div className=' w-full h-1/2 flex flex-col items-center justify-start md:justify-center'>
          <div className='mt-4 w-4/5 md:w-full'>
            <div className='font-sans font-bold text-4xl md:text-6xl w-full'>
                I'm Roby Liebbe
            </div>
            <div className='text-lg md:text-3xl w-full my-1'>
                Aspiring PM and builder
            </div>
            <div className='h-1 w-full'>
              <div className='h-1 w-1/2 bg-[#276FBF]'>
              </div>
            </div>
            <div className='flex flex-row mt-2 items-center justify-between w-1/3 '>
              <div>
                <LinkedinIcon className='fill-[#276FBF] h-[20px] w-[30px] md:h-8' />
              </div>
              <div>
                <GithubIcon className='fill-[#276FBF] h-[20px] w-[30px] md:h-8'/>
              </div>
              <div>
                <TwitterIcon className='fill-[#276FBF] h-[20px] w-[30px] md:h-8' />
              </div>
            </div>
          </div>
        </div>



      </div>
    </main>
  )
}




        {/* <div className=' w-1/2 h-[60vh] flex flex-col justify-center items-center px-6'>
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

        <div className=' w-1/2 h-[60vh] flex flex-col justify-center items-center bg-black px-6'>
          <div className='rounded-full relative w-2/3 h-1/2'>
            <Image
              src={profileImage}
              alt='personal image'
              fill
              // width={500}
              // height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              placeholder='blur'
            />
          </div>
        </div> */}