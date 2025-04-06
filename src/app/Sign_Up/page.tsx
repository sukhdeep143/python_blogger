"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from 'react'
import LoadingSpinner from "../loading";



export default function SignUp() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        setMessage(data.message);
        
        if (response.ok) {
          setTimeout(() => router.push("/Login"), 2000);
        }
      } catch (error) {
        console.error("Signup Error:", error);
        setMessage("An error occurred while signing up.");
      }
    },
  });

  return (
          <Suspense fallback={<p><LoadingSpinner /></p>}>
    
    <div className="max-w-md mx-auto mt-10 p-6 mb-10 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Input type="text" placeholder="Username" {...formik.getFieldProps("username")} />
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 text-sm">{formik.errors.username}</p>
        )}

        <Input type="email" placeholder="Email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        <Input type="password" placeholder="Password" {...formik.getFieldProps("password")} />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}

        <Button type="submit" className="w-full">Sign Up</Button>
      </form>

      {message && <p className="mt-2 text-center">{message}</p>}

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/Login">
          <span className="text-blue-500 cursor-pointer">Login</span>
        </Link>
      </p>
    </div>
          </Suspense>
    
  );
}
