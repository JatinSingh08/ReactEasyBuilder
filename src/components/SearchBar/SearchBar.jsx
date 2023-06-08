import React from 'react'

const SearchBar = () => {
  return (
      <form class={`flex items-center  h-[40px] w-full `}>
          <div className="w-full relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate-900 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                  <input
                      type="text"
                      placeholder="Search Components"
                      className="w-full py-2 pl-12 pr-4 border-none rounded-md outline-none "
                      name="searchValue"
                      onChange={(e) => {
                        applyFilters(e.target.name, e.target.value);
                        e.target.value.trim().length > 0 && navigate("/productlist");
                      }}
              />

            </div>
          </form>
  )
}

export default SearchBar
