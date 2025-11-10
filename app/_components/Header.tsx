import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const menuOptions = [
    {
        name: "Pricing",
        path: "/pricing"
    },
    {
        name: "Contact us",
        path: "/contact-us"
    }
]

function Header() {
  return (
    <div className='flex justify-between items-center p-4 border-b'>
      {/* logo */}
      <div className='flex gap-2 items-center'>
        <Image src={"/logo.svg"} alt='logo' width={35} height={35} />
        <h2 className='font-bold text-xl'>AI Website Maker</h2>
      </div>

      {/* menu items */}
      <div className='flex gap-4'>
        {menuOptions.map((menu, index) => (
          <Button key={index} variant="ghost">
            {menu.name}
          </Button>
        ))}
      </div>

      {/* get started button */}
      <div>
        <Button>Get Started <ArrowRight/></Button>
      </div>
    </div>
  )
}

export default Header