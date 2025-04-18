"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// 🔄 Small Loading Spinner
function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-15 z-50">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function SignUp() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true); // ✅ Start loading
      try {
        const response = await fetch(
          "https://python-backend-2sqb.onrender.com/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();
        setMessage(data.message);

        if (response.ok) {
          setTimeout(() => router.push("/Login"), 2000);
        }
      } catch (error) {
        console.error("Signup Error:", error);
        setMessage("An error occurred while signing up.");
      } finally {
        setLoading(false); // ✅ End loading
      }
    },
  });

  return (
    <div className="relative">
      <main className="flex justify-between pr-5 pl-5 pt-3 items-center">
        <div>
          <h1 className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">
            LoGo
          </h1>
        </div>

        <ul className="sm:flex hidden">
          {/* <Link
               href="/home"
               >
                <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">Home</li>
               </Link> */}

          <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">
            Contact
          </li>
          <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">
            About
          </li>
          <li className="pr-8 sm:text-xl font-bold cursor-pointer hover:text-amber-700 hover:scale-110 transition-transform duration-300 ease-in-out ">
            Blog
          </li>
        </ul>
      </main>
      {loading && <Loading />} {/* 🔁 Show loading spinner */}
      <div className="max-w-md mx-auto mt-10 p-6 mb-10 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          )}

          <Input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <Input
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
          <div className=" text-center">
            <h1>Or</h1>
          </div>
        </form>

        {message && <p className="mt-2 text-center">{message}</p>}

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/Login">
            <span className="text-blue-500 cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
