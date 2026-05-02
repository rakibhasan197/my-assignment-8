'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';


const MyProfilePage = () => {
    const userData = authClient.useSession();
     const user = userData.data?.user;

     console.log(user, 'user')
  return (
    <div className='mt-10'>
       <Card className='max-w-96 mx-auto flex flex-col items-center'>
        <Avatar className='h-20 w-20'>
        <Avatar.Image
          alt="john Doe"
          src={user?.image}
          referrerPolicy='no-referrer'

        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <h2 className='text-xl font-bold'>{user?.name}</h2>
      <p className='text-muted'>{user?.email}</p>

     <Link href='/update-profile'>
      <Button variant='secondary'>Update Profile</Button>
     </Link>
       </Card>
    </div>
  );
};

export default MyProfilePage;