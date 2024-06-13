import { FaHeart, FaUser } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="transparent h-32 w-lvw flex flex-row z-10 justify-between pr-9">
      <div className="flex flex-row gap-10 items-center">
        <div className="bg-logo bg-no-repeat bg-contain w-36 overflow-auto h-36 mt-4" />
        <p className="font-black text-black text-xl pt-1"> Explore </p>
        <p className="font-black text-black text-xl pt-1"> Sports </p>
        <p className="font-black text-black text-xl pt-1">Theatre & Comedy</p>
        <p className="font-black text-black text-xl pt-1"> Music </p>
      </div>
      <div className="flex flex-row gap-10 pr-5 items-center">
        <p className="font-black text-black text-xl pt-1"> SELL </p>
        <FaHeart size={25} />
        <FaUser size={25} />
      </div>
    </div>
  )
}

export default NavBar
