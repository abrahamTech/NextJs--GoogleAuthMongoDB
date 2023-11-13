import UserInfo from '@/components/UserInfo'
import Image from 'next/image'

export default function Home() {
  return (
    // <div className="bg-indigo-200 grid place-items-center h-screen -mt-24">
    <div className="bg-indigo-200 flex items-center justify-center h-screen">
      <UserInfo />
    </div>
  )
}
