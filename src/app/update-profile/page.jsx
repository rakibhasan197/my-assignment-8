"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message || "Profile update failed");
      return;
    }

    toast.success("Profile updated successfully");
    router.push("/profile");
  };

  return (
    <div className="container mx-auto mt-8 space-y-4 px-4">
      <h2 className="text-center text-2xl font-bold">Update User Profile</h2>

      <Form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-md p-8 shadow"
      >
        <FaUser className="mx-auto rounded-full p-1 text-6xl shadow" />

        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-6 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700"
        >
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProfile;
