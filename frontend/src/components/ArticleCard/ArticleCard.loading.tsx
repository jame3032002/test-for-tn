const ArticleCardLoading = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-2 md:flex-row md:space-x-5">
      <div className="flex w-full md:w-2/5">
        <div className="rounded-2xl bg-gray-400 h-[300px] md:h-full w-full" />
      </div>

      <div className="flex flex-col w-full md:w-3/4 space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="text-xl font-bold break-words bg-gray-400 w-full h-2 rounded-2xl" />

          <div className="text-sm text-gray-500 line-clamp-3 space-y-2 pt-4">
            <div className="text-xl font-bold break-words bg-gray-400 w-full h-2 rounded-2xl" />
            <div className="text-xl font-bold break-words bg-gray-400 w-full h-2 rounded-2xl" />
            <div className="text-xl font-bold break-words bg-gray-400 w-full h-2 rounded-2xl" />
          </div>

          <div className="flex space-x-2 pt-4">
            <div className="text-sm text-gray-300 w-12 h-2 bg-gray-400 rounded-2xl" />

            <ul className="flex flex-wrap">
              <li className="flex flex-shrink-0 mr-2 bg-gray-400 w-20 h-2 rounded-2xl"></li>
              <li className="flex flex-shrink-0 mr-2 bg-gray-400 w-24 h-2 rounded-2xl"></li>
              <li className="flex flex-shrink-0 mr-2 bg-gray-400 w-24 h-2 rounded-2xl"></li>
            </ul>
          </div>
        </div>

        <div className="md:flex space-x-6 hidden justify-between">
          <div className="w-[100px] h-[100px] bg-gray-400 rounded-2xl"></div>
          <div className="w-[100px] h-[100px] bg-gray-400 rounded-2xl"></div>
          <div className="w-[100px] h-[100px] bg-gray-400 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardLoading;
