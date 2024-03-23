const HomeSection4 = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="basis-1/5 border">
          <div className="flex justify-center">
            <ul>
              <li>
                <button className="btn w-[100px] py-[5px] px-[10px] bg-gray-600 text-white rounded-none hover:bg-orange-500">
                  One
                </button>
              </li>
              <li>
                <button className="btn w-[100px] py-[5px] px-[10px] bg-gray-600 text-white rounded-none hover:bg-orange-500">
                  Two
                </button>
              </li>
              <li>
                <button className="btn w-[100px] py-[5px] px-[10px] bg-gray-600 text-white rounded-none hover:bg-orange-500">
                  Three
                </button>
              </li>
              <li>
                <button className="btn w-[100px] py-[5px] px-[10px] bg-gray-600 text-white rounded-none hover:bg-orange-500">
                  Four
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-4/5 border">
            <div className="w-[400px] py-[20px] bg-sky-500 mx-auto hidden">Contents for button one</div>
            <div className="w-[400px] py-[20px] bg-sky-500 mx-auto hidden">Contents for button Two</div>
            <div className="w-[400px] py-[20px] bg-sky-500 mx-auto hidden">Contents for button Three</div>
            <div className="w-[400px] py-[20px] bg-sky-500 mx-auto hidden">Contents for button Four</div>
        </div>
      </div>
    </>
  );
};

export default HomeSection4;
