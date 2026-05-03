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
import Link from "next/link";

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

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4">
      <Card className="w-full max-w-md py-8 px-7 rounded-3xl shadow-2xl shadow-blue-950/50 border border-blue-400/20 bg-slate-900/90 text-slate-100">
        
        <h1 className="text-center text-3xl font-bold text-white">
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
            <Description className="text-xs text-slate-400">
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
        <Button onClick={handleGoogleLogin} variant="outline" className="w-full border border-blue-400/40 text-blue-100"><FaGoogle /> Login With Google</Button>
        <p className="mt-4 text-center text-sm">
          New to BookNest?{" "}
          <Link className="font-semibold text-blue-300" href="/signup">
            Register
          </Link>
        </p>

      </Card>
    </div>
  );
}
