
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"
import {signIn, signOn, signOut, useSession} from "next-auth/client"
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const [session] = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

  return (
    <header>
        {/* {top NAV} */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2"> 
           <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
            onClick={()=>router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
            />
         </div>

         {/* { Search} */}

         <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
             <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" name="" id="" />
             <SearchIcon className="h-12 p-4"></SearchIcon>
         </div>

         {/* {right section} */}
         <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
             <div onClick={!session?signIn:signOut} className="link">
                 <p className="hover:underline">
                    {session?`Hello, ${session.user.name}`:"Sign In"}
                 </p>
                 <p className="font-extrabold md:text-sm">Account & Lists</p>
             </div>
             <div className="link">
                 <p>Returns</p>
                 <p className="font-extrabold md:text-sm">& Orders</p>
             </div>

            <div 
            onClick={()=>router.push('/checkout')}
            className="relative link flex items-center cursor-pointer">

                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>

                <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                 Basket
                </p>
            </div>
         </div>
      </div>

    {/* {button nav} */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Buisness</p>
            <p className="link">Todays Deals</p>
            <p className="link">Electronic</p>
            <p className="link hidden lg:inline-flex">Electronic</p>
            <p className="link hidden lg:inline-flex">Food & supplies</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">Health & Personal</p>
        </div>
    </header>
  )
}

export default Header
