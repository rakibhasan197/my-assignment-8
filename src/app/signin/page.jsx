"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log(data, error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
      <Card className="w-full max-w-md py-8 px-7 rounded-3xl shadow-2xl border border-gray-100">
        
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-sm text-gray-500 mt-1 mb-6">
          Sign in to continue exploring your favorite books
        </p>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
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
            <Label className="font-medium text-gray-700">Email</Label>
            <Input
              placeholder="john@example.com"
              className="rounded-xl"
            />
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
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="font-medium text-gray-700">Password</Label>
            <Input
              placeholder="Enter your password"
              className="rounded-xl"
            />
            <Description className="text-xs text-gray-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-xl py-6 hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            <Check />
            Log In
          </Button>
        </Form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </Card>
    </div>
  );
}