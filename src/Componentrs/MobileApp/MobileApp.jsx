const MobileApp = () => {
  return (
    <div className="bg-[#0b033c]">
      <section class=" pt-10">
        <div class="px-4 mx-auto overflow-hidden  max-w-7xl sm:px-6 lg:px-8">
          <div class="py-10 sm:py-16 l">
            <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl lg:leading-tight">
                  Use mobile app for better performance
                </h2>
                <p class="mt-4 text-base text-gray-50">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                <div class="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                  <a href="#" title="" class="flex" role="button">
                    <img
                      class="w-auto h-14"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                      alt=""
                    />
                  </a>

                  <a href="#" title="" class="flex" role="button">
                    <img
                      class="w-auto h-14"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div class="relative px-12">
                <svg
                  class="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                <img
                  class="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
