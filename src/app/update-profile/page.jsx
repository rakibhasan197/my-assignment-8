'use client'
import { authClient } from '@/lib/auth-client';
import { Car } from '@gravity-ui/icons';
import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { div } from 'framer-motion/client';
import { redirect } from 'next/navigation';

import React from 'react';
import { FaUser } from 'react-icons/fa';

const UpdateProfile = () => {
  const onSubmit = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
      await authClient.updateUser({
        name,
        image,
      
      })
      redirect('/profile')
  }
  return (
      <div className='container mx-auto mt-8 space-y-4'>

          <h2 className='text-center font-bold text-2xl '>Update User Profile</h2>
       
           <Form onSubmit={onSubmit} className="flex w-96 mx-auto flex-col gap-4 shadow p-10 rounded-md">
              <FaUser className='text-6xl mx-auto shadow p-1 rounded-full'></FaUser>

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
               className="w-full bg-blue-600 text-white font-semibold rounded-xl py-6 hover:bg-blue-700 transition-all duration-300 shadow-md"
             >
               
               Update Profile
             </Button>
     
           </Form>
        
      </div>
  );
};

export default UpdateProfile;