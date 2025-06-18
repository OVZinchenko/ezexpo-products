import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBar = () => {
  return (
    <div className="relative rounded-lg w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="search"
        name="search"
        id="search"
        className="block w-full rounded-lg border-0 outline-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 placeholder:text-xs focus:ring focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        placeholder="Find your next event needs..."
      />  
    </div>
  )
}

export default SearchBar;