import { GetCurrentUserFromDB } from '@/actions/user'
import Navbar from './Navbar'

export default async function Header() {
  await GetCurrentUserFromDB()
  return (
    <div className='container mx-auto flex items-center'>
      <Navbar />
    </div>
  )
}
