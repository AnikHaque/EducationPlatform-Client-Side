import { Link } from "react-router-dom";
import "./test.css";

const AboutTeam = () => {
  return (
    // <div>
    //   <section className="p-6 my-6 bg-gray-100 text-gray-800">
    //     <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
    //       <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //             fill="currentColor"
    //             className="h-9 w-9 text-gray-100"
    //           >
    //             <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
    //           </svg>
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <p className="text-3xl font-semibold leading-none">Anik Haque</p>
    //         </div>
    //       </div>
    //       <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //             fill="currentColor"
    //             className="h-9 w-9 text-gray-100"
    //           >
    //             <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
    //           </svg>
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <p className="text-3xl font-semibold leading-none">Anik Haque</p>
    //         </div>
    //       </div>
    //       <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //             fill="currentColor"
    //             className="h-9 w-9 text-gray-100"
    //           >
    //             <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
    //           </svg>
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <p className="text-3xl font-semibold leading-none">Anik Haque</p>
    //         </div>
    //       </div>
    //       <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
    //         <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //             fill="currentColor"
    //             className="h-9 w-9 text-gray-100"
    //           >
    //             <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
    //           </svg>
    //         </div>
    //         <div className="flex flex-col justify-center align-middle">
    //           <p className="text-3xl font-semibold leading-none">Anik Haque</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="py-10 bg-white sm:py-16 lg:py-24">
    //     <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
    //           People who made it successful
    //         </h2>
    //         <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
    //           Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    //           amet sint. Velit officia consequat duis.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
    //         <div>
    //           <img
    //             className="w-full"
    //             src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
    //             alt=""
    //           />
    //         </div>

    //         <div>
    //           <img
    //             className="w-full"
    //             src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
    //             alt=""
    //           />
    //         </div>

    //         <div>
    //           <img
    //             className="w-full"
    //             src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
    //             alt=""
    //           />
    //         </div>
    //         <div>
    //           <img
    //             className="w-full"
    //             src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
    //             alt=""
    //           />
    //         </div>
    //         <div>
    //           <img
    //             className="w-full"
    //             src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
    //             alt=""
    //           />
    //         </div>
    //         <div>
    //           <img
    //             className="w-full"
    //             src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
    //             alt=""
    //           />
    //         </div>
    //       </div>

    //       <div className="mt-8 text-center md:mt-16">
    //         <a
    //           href="#"
    //           title=""
    //           className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
    //           role="button"
    //         >
    //           {" "}
    //           Join our team{" "}
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <div data-aos="zoom-in">
        <div class="profile-card1 mb-8 ml-[-30px]">
          <div class="image1">
            <img
              src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
              alt=""
              class="profile-img1 rounded-md"
            />
          </div>

          <div class="text-data1">
            <span class="name1">Ekramul Haque </span>
            <span class="job1">Mirpur</span>
          </div>

          <div class="buttons1">
            <Link to="">
              <button class="button1">View Profile</button>
            </Link>
            <button class="button1">Book Now</button>
          </div>
        </div>
      </div>

      {/* test 2 */}
      <div>
        <div class="profile-card1 mb-8">
          <div class="image1">
            <img
              src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
              alt=""
              class="profile-img1"
            />
          </div>

          <div class="text-data1">
            <span class="name1">Kahafil Ora</span>
            <span class="job1">Managing Director & CEO</span>
          </div>

          <div class="buttons1">
            <Link to="">
              <button class="button1">View Profile</button>
            </Link>

            <button class="button1">Book Now</button>
          </div>
        </div>
      </div>

      {/* test 3  */}
      <div className="container mx-auto">
        <h1>My Orders</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                {/* <th>Image</th> */}
                <th className="text-center font-extrabold">Student Name</th>
                <th className="text-center font-extrabold">Enrolled Course</th>
                <th className="text-center font-extrabold">Student Img</th>
                <th className="text-center font-extrabold">Transaction ID</th>
                <th className="text-center font-extrabold">Phone No</th>
                <th className="text-center font-extrabold">Email Address</th>
                <th className="text-center font-extrabold">Enrolled Date</th>
                <th className="text-center font-extrabold">Payment Status</th>
                <th className="text-center font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr key="">
                <th>1</th>
                {/* <td>{bookedItem.img}</td> */}
                <td>Ekramul Haque Anik</td>
                <td>Full stack web development</td>
                <td>
                  <img
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
                    alt=""
                    class="profile-img1 max-w-10 rounded-full"
                  />
                </td>

                <td>ahjhd1367219892hdkjshlkhfds</td>
                <td>01540026119</td>
                <td>anik@goinnovior.com</td>
                <td>23 July 2024</td>
                <td>
                  <span className="text-green-600 font-bold">Approved</span>
                </td>
                <td>
                  <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Edit{" "}
                  </button>
                  <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Delete
                  </button>
                  <button className=" bg-pink-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    View
                  </button>
                </td>
              </tr>

              <tr key="">
                <th>2</th>
                {/* <td>{bookedItem.img}</td> */}
                <td>Ekramul Haque Anik</td>
                <td>Full stack web development</td>
                <td>
                  <img
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
                    alt=""
                    class="profile-img1 max-w-10 rounded-full"
                  />
                </td>

                <td>ahjhd1367219892hdkjshlkhfds</td>
                <td>01540026119</td>
                <td>anik@goinnovior.com</td>
                <td>23 July 2024</td>
                <td>
                  <span className="text-red-600 font-bold">pending</span>
                </td>
                <td>
                  <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Edit{" "}
                  </button>
                  <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Delete
                  </button>
                  <button className=" bg-pink-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    View
                  </button>
                </td>
              </tr>

              <tr key="">
                <th>3</th>
                {/* <td>{bookedItem.img}</td> */}
                <td>Ekramul Haque Anik</td>
                <td>Full stack web development</td>
                <td>
                  <img
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
                    alt=""
                    class="profile-img1 max-w-10 rounded-full"
                  />
                </td>

                <td>ahjhd1367219892hdkjshlkhfds</td>
                <td>01540026119</td>
                <td>anik@goinnovior.com</td>
                <td>23 July 2024</td>
                <td>
                  <span className="text-red-600 font-bold">pending</span>
                </td>
                <td>
                  <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Edit{" "}
                  </button>
                  <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Delete
                  </button>
                  <button className=" bg-pink-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    View
                  </button>
                </td>
              </tr>

              <tr key="">
                <th>4</th>
                {/* <td>{bookedItem.img}</td> */}
                <td>Ekramul Haque Anik</td>
                <td>Full stack web development</td>
                <td>
                  <img
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
                    alt=""
                    class="profile-img1 max-w-10 rounded-full"
                  />
                </td>

                <td>ahjhd1367219892hdkjshlkhfds</td>
                <td>01540026119</td>
                <td>anik@goinnovior.com</td>
                <td>23 July 2024</td>
                <td>
                  <span className="text-red-600 font-bold">pending</span>
                </td>
                <td>
                  <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Edit{" "}
                  </button>
                  <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Delete
                  </button>
                  <button className=" bg-pink-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    View
                  </button>
                </td>
              </tr>

              <tr key="">
                <th>5</th>
                {/* <td>{bookedItem.img}</td> */}
                <td>Ekramul Haque Anik</td>
                <td>Full stack web development</td>
                <td>
                  <img
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/317960394_5764599683591001_4171203014683276792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFnD9S4ZVqvp6yMB4sgStvKfmtk0dOtMVp-a2TR060xWhmvS3nGg4pu1DKqH8kQ4iJL7z4cWgUsMx2nDRexsqGq&_nc_ohc=uyCa0qcPaU8Q7kNvgGVv7_X&_nc_ht=scontent.fdac24-2.fna&oh=00_AYDkNRBUyK_w9g0j35WS6l9fAev2JJXlcx8qu85bUHn56Q&oe=669EC3A9"
                    alt=""
                    class="profile-img1 max-w-10 rounded-full"
                  />
                </td>

                <td>ahjhd1367219892hdkjshlkhfds</td>
                <td>01540026119</td>
                <td>anik@goinnovior.com</td>
                <td>23 July 2024</td>
                <td>
                  <span className="text-red-600 font-bold">pending</span>
                </td>
                <td>
                  <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Edit{" "}
                  </button>
                  <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    Delete
                  </button>
                  <button className=" bg-pink-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
