import { decodeToken } from "../../Utility/Token";

const CourseDetailsModule = () => {
  // Decode token to retrieve user information
  const userInfo = decodeToken();

  // Extract role from user information
  const role = userInfo ? userInfo.role : null;

  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <iframe
            className="mt-11"
            width="515"
            height="400"
            src="https://www.youtube.com/embed/WA2-9i0cxUA?si=2SQ59fNsWv7sY2RC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-14">
          <h1 className="font-bold text-4xl mb-1">Enrollment Timeline:</h1>
          <p className="font-light text-xl mb-4">
            1st September 2024 - 30 September 2024
          </p>
          <p className="text-justify">
            ২য় ব্যাচের ক্লাস শুরু হবে ২৭ জুলাই থেকে। নতুন ব্যাচে সকলের সাথে
            ক্লাসে দেখা হওয়ার অপেক্ষায় রইলাম! ওয়েব ডেভেলপার হবার মিশনে শনিবার আর
            সোমবার রাতটা তোলা থাকুক দেশসেরা ইন্ডাস্ট্রি এক্সপার্টদের সাথেই
          </p>
          <p className="mt-2 text-justify">
            ২য় ব্যাচের ক্লাস শুরু হবে ২৭ জুলাই থেকে। নতুন ব্যাচে সকলের সাথে
            ক্লাসে দেখা হওয়ার অপেক্ষায় রইলাম! ওয়েব ডেভেলপার হবার মিশনে শনিবার আর
            সোমবার রাতটা তোলা থাকুক দেশসেরা ইন্ডাস্ট্রি এক্সপার্টদের সাথেই
          </p>
          <p className="mt-2 text-justify">
            ২য় ব্যাচের ক্লাস শুরু হবে ২৭ জুলাই থেকে। নতুন ব্যাচে সকলের সাথে
            ক্লাসে দেখা হওয়ার অপেক্ষায় রইলাম! ওয়েব ডেভেলপার হবার মিশনে শনিবার আর
            সোমবার রাতটা তোলা থাকুক দেশসেরা ইন্ডাস্ট্রি এক্সপার্টদের সাথেই
          </p>

          <div className="flex">
            <div>
              {/* modal  */}
              <div className="mt-4 mr-5">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-blue-600 text-white font-bold"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Enroll Now
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">
                      Please pay your payment of Taka 10,000 Bdt/- to{" "}
                      <span className="text-primary">+8801540026119 </span>this
                      Bkash/ Nagad Number
                    </h3>
                    <p className="py-4">
                      After Payment Provide the informations Carefully.
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <div>
                          <input
                            type="text"
                            placeholder="Ekramul Haque Anik"
                            className="input input-bordered w-full max-w-lg mb-2"
                            disabled
                          />
                          <input
                            type="email"
                            placeholder="anik.haque.cse1@gmail.com"
                            className="input input-bordered w-full max-w-lg mb-2"
                            disabled
                          />
                          <input
                            type="number"
                            placeholder="+8801540026119"
                            className="input input-bordered w-full max-w-lg mb-2"
                            disabled
                          />
                          <input
                            type="text"
                            placeholder="Enter your Transaction Id"
                            className="input input-bordered w-full max-w-lg mb-2"
                            required
                          />
                        </div>
                        <button className="btn mr-4 bg-blue-600 text-white">
                          {role}
                        </button>
                        {/* if there is a button in form, it will close the modal */}
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-primary text-xl">
                10,000 Taka Bdt/-
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModule;
