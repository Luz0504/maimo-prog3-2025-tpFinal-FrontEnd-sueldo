import Link from "next/link"

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between mx-10'>
        <h1>
            WindieCity
        </h1>
        <ul className='flex flex-row gap-4'>
            <li>
                About
            </li>
            <Link href={'/users'}><li>
                Users
            </li></Link>
            <li>
                Forums
            </li>
        </ul>
    </div>
  )
}

export default NavBar