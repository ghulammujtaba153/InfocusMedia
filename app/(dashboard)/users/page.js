"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2, FiUserPlus } from "react-icons/fi";
import UserModal from "@/components/(dashboard)/UserModal";
import Loader from "@/components/Loader";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // For edit

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/auth/all-users");
      setData(res.data.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/auth/delete-user/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleAdd = () => {
    setSelectedUser(null); // no user selected for add
    setShowModal(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (selectedUser) {
        // Update user
        await axios.patch(`/api/auth/edit/${selectedUser._id}`, formData);
      } else {
        // Create user
        await axios.post("/api/auth/signup", formData);
      }
      fetchData();
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="flex flex-col h-screen justify-center items-center"><Loader /></div>

  return (
    <div className="flex flex-col items-center p-8 min-h-screen ">
      <div className="flex justify-between items-center w-full max-w-5xl mb-6">
        <p className="text-2xl font-bold">Users</p>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          <FiUserPlus size={18} />
          Add User
        </button>
      </div>

      <table className="table-auto w-full max-w-5xl border-collapse border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200">Name</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200">Email</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FiEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="inline-flex items-center text-red-600 hover:text-red-800"
                >
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Add/Edit Modal */}
      <UserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        initialData={selectedUser}
      />
    </div>
  );
};

export default Page;
