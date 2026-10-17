"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { assertRootParamInSamples } from "next/dist/server/app-render/instant-validation/instant-samples";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
    if (resData) {
      toast.success("সফল ভাবে সাইন ইন হয়েছে ।");
    }else{
      toast.error("সাইন ইন ব্যর্থ হয়েছে!")
    }
    
  };
  const handleGoogleSignUp = async () => {
    const socialGoogleData = await signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignUp = async () => {
    const socialGithubData = await signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="container mx-auto  flex justify-center py-10 flex-col items-center">
      <h1 className="text-3xl font-bold">সাইন ইন</h1>
      <h3>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</h3>
      <Form
        className="flex w-96 my-10 bg-white card border border-base-100 rounded-2xl flex-col gap-4"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>ইমেইল</Label>
          <Input placeholder="you@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>
          <Input placeholder="কমপক্ষে ৮ অক্ষর" />

          <FieldError />
        </TextField>

        <Button className="bg-[#05893E] rounded-xl" fullWidth type="submit">
          সাইন ইন
        </Button>

        <div className="divider ">অথবা</div>
        <div className="flex gap-2">
          <Button
            onClick={handleGoogleSignUp}
            className="w-full rounded-xl"
            variant="tertiary"
          >
            <FcGoogle />
            Sign in with Google
          </Button>
          <Button
            onClick={handleGithubSignUp}
            className="w-full rounded-xl"
            variant="tertiary"
          >
            <FaGithub />
            Sign in with GitHub
          </Button>
        </div>
        <div className="text-center">
          <p>
            অ্যাকাউন্ট নেই?{" "}
            <Link href={"/sign-up"} className="text-[#05893E]">
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </Form>
      <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
    </div>
  );
}
