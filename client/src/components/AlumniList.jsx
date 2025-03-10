import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Members = [
  {
    name: "Julie Hill",
    role: "CEO",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Karen Key",
    role: "Marketing Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "John Smith",
    role: "Financial Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Julie Hill",
    role: "CEO",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Karen Key",
    role: "Marketing Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "John Smith",
    role: "Financial Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Julie Hill",
    role: "CEO",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Karen Key",
    role: "Marketing Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "John Smith",
    role: "Financial Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Julie Hill",
    role: "CEO",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Karen Key",
    role: "Marketing Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "John Smith",
    role: "Financial Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
  {
    name: "Jane Lee",
    role: "Product Manager",
    description:
      "This is the sample dummy text insert your desired text here because this is the.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      behance: "#",
    },
  },
];

const AlumniList = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Members.slice(firstPostIndex, lastPostIndex);
 
  
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-6xl font-bold text-center pb-10">
        Our Notable Alumni
      </h1>
      <div className="mt-6 grid gap-16 sm:grid-cols-2 lg:grid-cols-4 mx-20 ">
        {currentPosts.map((member, index) => (
          <div
            key={index}
            className=" p-4 text-center transform transition-transform hover:scale-105"
          >
            <div className=" w-32 h-32 mx-auto mt-4 rotate-45 transform border-4 border-gray-200">
              <div className=" w-31 h-31 mx-auto transform translate-y-2.5 -translate-x-3.5 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full -rotate-45 scale-140 "
                />
              </div>
            </div>

            <div className="pr-6">
              <h3 className="pt-2 text-xl font-semibold mt-7">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.description}</p>
              <div className="flex justify-center mt-4 space-x-4 text-gray-500">
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-blue-500 text-xl"
                  />
                </a>
                <a
                  href={member.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-blue-700 text-xl"
                  />
                </a>
                <a
                  href={member.socialLinks.pinterest}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="text-red-600 text-xl"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={Members.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AlumniList;
