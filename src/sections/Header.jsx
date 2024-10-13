function Header() {
  return (
    <header className="container w-11/12 mx-auto py-7">
        <div className="flex justify-between">
            <a className="uppercase font-inter font-semibold text-3xl text-[#61DAFB]" href="#">token handler</a>
            <ul className="flex">
                <li className="ml-4 font-inter font-medium text-xl text-[#000000]"><a href="#">Home</a></li>
                <li className="ml-4 font-inter font-medium text-xl text-[#000000]"><a href="#">About</a></li>
                <li className="ml-4 font-inter font-medium text-xl text-[#000000]"><a href="#">Services</a></li>
                <li className="ml-4 font-inter font-medium text-xl text-[#000000]"><a href="#">Gallery</a></li>
                <li className="ml-4 font-inter font-medium text-xl text-[#000000]"><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header