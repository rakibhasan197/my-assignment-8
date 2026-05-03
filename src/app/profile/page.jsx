"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";

const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="mt-10 px-4">
      <Card className="mx-auto flex max-w-md flex-col items-center gap-3 border border-blue-400/20 bg-slate-900/90 p-8 text-center text-slate-100 shadow-2xl shadow-blue-950/50">
        <Avatar className="h-24 w-24">
          <Avatar.Image
            alt={user?.name || "User profile"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
        </Avatar>

        <div>
          <h2 className="text-xl font-bold text-white">{user?.name || "User"}</h2>
          <p className="text-sm text-slate-400">{user?.email}</p>
        </div>

        <div className="w-full rounded-lg bg-slate-800 p-4 text-left text-sm">
          <p>
            <span className="font-semibold mx-auto">User ID:</span> {user?.id || "N/A"}
          </p>
         
        </div>

        <Link href="/update-profile">
          <Button className="bg-blue-600 text-white" variant="secondary">Update Profile</Button>
        </Link>
      </Card>
    </div>
  );
};

export default MyProfilePage;
