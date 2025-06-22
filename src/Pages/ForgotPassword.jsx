import React, { useState } from "react";
import SummaryApi from "../common/com";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const res = await fetch(`${SummaryApi.baseURL}/send-otp`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    data.success ? toast.success(data.message) : toast.error(data.message);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4 font-bold">Forgot Password</h2>
      <form onSubmit={handleSendOtp} className="grid gap-3">
        <input
          type="email"
          placeholder="Enter your registered email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white p-2 rounded">Send OTP</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
