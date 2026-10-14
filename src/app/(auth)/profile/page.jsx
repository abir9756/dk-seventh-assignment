"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { TbArrowBack } from "react-icons/tb";

export default function Basic() {
  const { data: session, isPending } = useSession();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const resData = await updateUser({
      name: data.name,
    });
  };

  return (
    <div className="container mx-auto my-30 w-[768px] h-[519px] px-4">
      <div>
        <h2 className="font-bold">আমার প্রোফাইল</h2>
        <Description>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</Description>
      </div>

      <div className="flex items-center justify-between border border-base-300 rounded-xl p-6 my-6 bg-white">
        <div className="py-6">
          <h2 className="font-semibold">{session?.user?.name}</h2>
          <p>{session?.user?.email}</p>
        </div>
        <button
          onClick={() => signOut()}
          className="btn border border-error rounded-xl flex items-center text-error gap-1"
        >
          <TbArrowBack />
          সাইন আউট
        </button>
      </div>

      <Form className="w-full  " onSubmit={onSubmit}>
        <fieldset className="fieldset bg-white border-base-300 rounded-xl w-full border p-4">
          <div className="p-5">
            <h2 className="font-semibold mb-3">তথ্য</h2>
            <div className="p-6 ">
              <h2>নাম </h2>
              <div className="join pb-4 rounded-md w-full">
                <input type="text" className="input w-full join-item" />
              </div>
              <button className="btn btn-block bg-[#05893E] text-white font-semibold rounded-md join-item">আপডেট</button>
            </div>
          </div>
        </fieldset>
        
      </Form>
    </div>
  );
}
