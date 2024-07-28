import "../../Styles/Kids/KidsBanner.css";

const KidsBanner = () => {
  return (
    <div>
      <div class="relative">
        <section class="bg-yellow-50 overflow-hidden">
          <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div class="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div class="absolute bottom-0 right-0 hidden lg:block">
                <img
                  class="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                />
              </div>

              <div class="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                  Give your child Perfectly
                  <br />
                  the power of coding
                </h1>
                <p class="mt-8 text-xl text-black">
                  We help you to make your remote work life easier. Build a
                  distruction free working experience.
                </p>

                <form
                  action="#"
                  method="POST"
                  class="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl"
                >
                  <div class="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                    <div class="flex flex-col items-start sm:flex-row">
                      <div class="flex-1 w-full min-w-0">
                        <div class="relative text-gray-400 focus-within:text-gray-600">
                          <label for="email" class="sr-only"></label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email to get started"
                            class="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                            required=""
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600"
                      >
                        Try 14 days free
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
              <div class="absolute inset-0">
                <img
                  class="object-cover w-full h-full"
                  src="https://www.codeinnovior.com/assets/images/pic1.jpeg"
                  alt=""
                />
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KidsBanner;
