import Link from 'next/link'
import headerData from '@/data/headerData.json'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-full mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12">
          <h1 className="text-xl font-bold text-blue-600">
            <Link href="/">
              <img src="/assets/img/logo.png" alt="Logo" className="w-[80px] h-auto max-md:w-[65px]" />
            </Link>

          </h1>

          <nav>
            <ul className="flex gap-6 max-md:hidden">
              {headerData.menus.map((menu, index) => (
                <li key={index} className="relative group cursor-pointer">
                  <span className="flex items-center gap-1 text-gray-700 hover:text-[#b00506]">
                    {menu.title} <span><svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-down" class="styles_DropDownIcon__2BEbl"><path fill="none" stroke="#000" stroke-width="1.03" d="M16 7l-6 6-6-6"></path></svg></span>
                  </span>
                  <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-md py-2 w-40 z-50">
                    {menu.items.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:text-[#b00506] whitespace-nowrap"
                      >
                        <Link href="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <button className="bg-[#b00506] text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer">
            {headerData.authButton}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
