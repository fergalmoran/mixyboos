import React from "react";
import { useSession } from "next-auth/react";
interface ITaggedInputProps {
  id: string;
  label: string;
  value: string[];

  placeholder?: string;
  classes?: string;

  onChange?: (tags: string[]) => void;
}
const TaggedInput = ({
  id,
  label,
  value,
  placeholder,
  onChange,
}: ITaggedInputProps) => {
  const { data: session } = useSession();
  const [tags, setTags] = React.useState<string[]>(value);
  const [searchResults, setSearchResults] = React.useState<string[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  let timer: NodeJS.Timer;
  const __addTag = (tag: string) => {
    setTags([...tags, tag]);
    setSearchResults([]);
    setIsSearching(false);
    setSearchValue("");
    onChange && onChange(tags);
    // searchField.focus();
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((obj) => obj !== tag));
  };
  const doResultClick = ($event: any) => __addTag($event.target.textContent);
  const doKeypress = ($event: any) => {
    if ($event.key === "Enter") {
      __addTag($event.target.value);
      $event.preventDefault();
    }
  };
  const doSearch = ($event: any) => {
    const query = $event?.target.value;
    setSearchValue(query);
    if (query.length === 0) {
      setIsSearching(false);
      setSearchResults([]);
      clearTimeout(timer);
    }
    setIsSearching(true);
    clearTimeout(timer);
    //TODO: Why is this happening?
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    timer = setTimeout(async () => {
      try {
        const service = new TagService();
        setSearchResults(await service.searchTags(query));
      } catch (err) {
        console.log("TaggedInput", "Error doing search", err);
      }
      setIsSearching(false);
    }, 750);
  };
  return (
    <>
      <label
        htmlFor="id"
        className="mb-2 block text-sm font-bold text-gray-500"
      >
        {label}
      </label>
      <div className="rounded-lg\n p-2.5\n dark:focus:ring-blue-500\n dark:shadow-sm-light flex w-full flex-col border border-gray-300            bg-gray-50 text-sm text-gray-900 shadow-sm            focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white            dark:placeholder-gray-400 dark:focus:border-blue-500">
        <input
          placeholder={placeholder}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id={id}
          value={searchValue}
          onInput={doSearch}
          onKeyUp={doKeypress}
        />
        {tags.length !== 0 && (
          <div
            className="m-2 inline-flex space-x-2 rounded-md shadow-sm"
            role="group"
          >
            {tags?.map((tag) => (
              <button
                key={tag}
                type="button"
                className="mb-2 mr-2 inline-flex items-center rounded-full bg-yellow-400
              px-4 px-5 py-2 py-2.5  text-center text-sm text-sm font-medium font-medium text-white hover:bg-yellow-500 focus:outline-none dark:focus:ring-yellow-900"
              >
                <svg
                  className="mr-2 h-3 w-3 hover:text-gray-200"
                  onClick={() => removeTag(tag)}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 8 8"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth={1.5}
                    d="M1 1l6 6m0-6L1 7"
                  />
                </svg>
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {isSearching && (
        <div role="status" className="z-50 -mt-3 ml-5">
          <svg
            aria-hidden="true"
            className="mr-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {searchResults.length !== 0 && (
        <div className={`z-50 ml-5 ${!isSearching && "-mt-6"} mb-4 flex`}>
          <aside
            role="menu"
            aria-labelledby="menu-heading"
            className="absolute z-50 mt-1 flex w-72 flex-col items-start rounded-md border bg-white text-sm shadow-md"
          >
            <ul className="flex w-full flex-col">
              {searchResults.map((result) => (
                <li
                  key={result}
                  onClick={doResultClick}
                  className="cursor-pointer space-x-2 px-2 py-1 hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white focus:outline-none"
                >
                  {result}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default TaggedInput;
