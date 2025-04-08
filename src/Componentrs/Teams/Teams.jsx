const teamMembers = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Meet Our <span className="text-[#395bdf]">Team</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Passionate people building amazing things together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <img
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-[#1DA1F2] text-xl"></i>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-[#0077B5] text-xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
