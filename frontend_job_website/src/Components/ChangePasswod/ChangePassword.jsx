import { useState } from "react";
import axiosPrivate from "../../api/axios";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    if (name === "currentPassword") setCurrentPassword(value);
    else if (name === "newPassword") setNewPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    } else if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    const token = JSON.parse(localStorage.getItem("Token")).access_token;
    await axiosPrivate
      .post(
        "/api/users/change-password",
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
          confirmationPassword: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to change password. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center  py-10">
      <div className="border   w-2/3 rounded-md p-5">
        <span className="block mb-4">Change Your Password</span>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block mb-1">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-1">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleChangePassword}
          className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
