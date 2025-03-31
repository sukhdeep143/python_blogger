"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "", // Updated field to accept both username or email
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().required("Email or Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        setMessage(data.message);

        if (response.ok) {
          localStorage.setItem("userEmail", data.email); // Store email from response
          router.push("/User"); // Redirect to User page
        }
      } catch (error) {
        console.error(error);
        setMessage("An error occurred while logging in.");
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 m-5  bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold   mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          placeholder="Email or Username"
          {...formik.getFieldProps("usernameOrEmail")}
        />
        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
          <p className="text-red-500  ">{formik.errors.usernameOrEmail}</p>
        ) : null}

        <Input
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
          
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500  ">{formik.errors.password}</p>
        ) : null}

        <Button type="submit" className="w-full mt-4">Login</Button>
      </form>

      {message && <p className="mt-2 text-center">{message}</p>}
    </div>
  );
}
