"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Optional: Move this to its own file if needed
function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-15 z-50">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
export default function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // NEW
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().required("Email or Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true); // Show loading spinner
      try {
        const response = await fetch(
          "https://python-backend-2sqb.onrender.com/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();
        setMessage(data.message);

        if (response.ok) {
          localStorage.setItem("userEmail", data.email);
          router.push("/User");
        }
      } catch (error) {
        console.error(error);
        setMessage("An error occurred while logging in.");
      } finally {
        setLoading(false); // Hide loading spinner
      }
    },
  });

  return (
    <div className="relative p-2 bg-slate-200/25  ">
      {loading && <Loading />}
      <main className="flex justify-between bg-purple-800 p-5 rounded-2xl backdrop-blur items-center sticky top-0">
        <div>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo"
            className="rounded-2xl"
          />
        </div>

      </main>

      <div className="max-w-md mx-auto mt-10 p-6 m-5 bg-white rounded-lg shadow ">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            placeholder="Email or Username"
            {...formik.getFieldProps("usernameOrEmail")}
          />
          {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && (
            <p className="text-red-500">{formik.errors.usernameOrEmail}</p>
          )}

          <Input
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500">{formik.errors.password}</p>
          )}

          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          <div className="pt-3.5 text-center">
            <h1>Or</h1>
          </div>
          <Link href="/Sign_Up">
            <Button type="submit" className="w-full mt-4" disabled={loading}>
              Sign Up
            </Button>
          </Link>
        </form>

        {message && <p className="mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
}
