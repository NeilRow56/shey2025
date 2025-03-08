import Image from 'next/image'
import loader from '@/assets/loader.gif'

const Loading = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <Image priority src={loader} height={150} width={150} alt='Loading...' />
    </div>
  )
}

export default Loading
