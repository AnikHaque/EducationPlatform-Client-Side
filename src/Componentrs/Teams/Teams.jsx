const teamMembers = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Lead Developer",
    image:
      "https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/490453558_2206111499803233_2323887789802980713_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHwehXMhTYcKl_7Y6j7JZmMlfxEQRkQ922V_ERBGRD3bScutGixZ5Rbh-NlPR9QurLhP1JxGMdrLZuPMsHnMFbk&_nc_ohc=hFLLOUqsUAkQ7kNvwGEyXTR&_nc_oc=Adn-6I3iFz6SvU7owWFF_RDsZ2Mb_J_mzYe_ftSpwbqLrJ2Eai0h4Gqhpc92rcxeFw4&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=lJEd_fP52bE1j2PRTD1jwA&oh=00_AfK5k9j2U-gcKvOZHG6ds3nQ5gjKzh9Fh5T9wbvvcKZ3-A&oe=6830322F",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Rafiul Islam",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Jannatul Mawa",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Nahid Hossain",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    twitter: "#",
    linkedin: "#",
  },
];

const Teams = () => {
  return (
    <div>
      <section className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="py-10 bg-[#0b033c]">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl">
              Meet our awsome Team Members
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-orange-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Floyd Miles
                </p>
                <p className="mt-2 text-sm text-white truncate">Designer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-blue-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Bessie Cooper
                </p>
                <p className="mt-2 text-sm text-white truncate">Marketer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-700 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Annette Black
                </p>
                <p className="mt-2 text-sm text-white truncate">Photographer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-green-400 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Leslie Alexander
                </p>
                <p className="mt-2 text-sm text-white truncate">Developer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-red-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Wade Warren
                </p>
                <p className="mt-2 text-sm text-white truncate">Founder</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-800 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Guy Hawkins
                </p>
                <p className="mt-2 text-sm text-white truncate">SaaS Founder</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-34.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-indigo-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Ralph Edwards
                </p>
                <p className="mt-2 text-sm text-white truncate">Freelancer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-35.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
