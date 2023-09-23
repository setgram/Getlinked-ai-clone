import React, { useState, useEffect } from "react";
import designer from "../assets/designer.png";
//import success from "../assets/Confirmation.png";

export default function Registration() {
  const baseUrl = "https://backend.getlinked.ai";
  const [categories, setCategories] = useState([]);
  //const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [formData, setFormData] = useState({
    team_name: "",
    group_size: "",
    project_topic: "",
    category: 0,
    privacy_poclicy_accepted: true,
    phone_number: "",
    email: "",
  });
  const {
    team_name,
    group_size,
    project_topic,
    category,
    email,
    privacy_poclicy_accepted,
    phone_number,
  } = formData;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${baseUrl}/hackathon/categories-list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl text-white mx-auto block lg:flex justify-between items-center  p-6 mt-9">
      <img src={designer} alt="" className="w-96" />

      <div className="border-none w-full h-full p-10 bg-slate-800 rounded text-center">
        <h1 className="font-bold text-purple-700 text-2xl mb-5">Register</h1>
        <h1 className="font-bold">CREATE YOUR ACCOUNT</h1>
        <form onSubmit={onSubmit} className="p-8">
          <label htmlFor="team">Team's Name</label>
          <input
            name="team"
            type="text"
            id="team_name"
            value={team_name}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="Enter the name of your group"
          />
          <label htmlFor="email">Email</label>

          <input
            name="email"
            type="email"
            id="email"
            value={email}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="Enter your email address"
          />
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={onChange}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <label htmlFor="Phone">Phone</label>
          <input
            name="phone"
            type="number"
            id="phone_number"
            value={phone_number}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="Enter your phone number"
          />

          <label htmlFor="project">Project Topic</label>
          <input
            name="project"
            type="text"
            id="project_topic"
            value={project_topic}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="What is your Project Topic"
          />
          <label htmlFor="Group size">Group Size</label>
          <input
            name="group"
            type="number"
            id="group_size"
            value={group_size}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="select"
          />
          <div className="flex gap-5">
            <input
              type="checkbox"
              id="privacy_poclicy_accepted"
              name="privacy_poclicy_accepted"
              value={privacy_poclicy_accepted}
              className="mb-6 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              onChange={onChange}
            />

            <label className="mt-[-5px]" htmlFor="privacy_poclicy_accepted">
              {" "}
              I agree with the event terms and conditions and privacy policy
            </label>
          </div>

          <button
            type="Register Now"
            className=" bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 border-1 border-solid text-white py-2 px-10 mx-auto rounded-[3px] mt-6"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}
