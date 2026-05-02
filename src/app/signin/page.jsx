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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
     
    });

    if (error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful");

    
    setTimeout(() => {
      router.push("/");
    }, 900);
  };

  const handleGoogleLogin = async()=>{
     await authClient.signIn.social({
      provider: 'google'
     })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
      <Card className="w-full max-w-md py-8 px-7 rounded-3xl shadow-2xl border border-gray-100">
        
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Login Here
        </h1>
       

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
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
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
                return "Must contain uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-xs text-gray-400">
              Must be 8+ chars with uppercase & number
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

        <p className="text-center">Or</p>
        <Button onClick={handleGoogleLogin} variant="outline" className="w-full"><FaGoogle /> Login With Google</Button>

      </Card>
    </div>
  );
}