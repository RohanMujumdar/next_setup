import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from 'react'

function page() {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-black">
        <Card className="h-[400px] w-[500px] bg-[rgb(28,25,23)] text-white">
            <CardHeader>
              <CardTitle className="text-white text-4xl">Login</CardTitle>
              <CardDescription>Please enter your login credentials.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Username</p>
              <Input type="email"/>
              <p>Password</p>
              <Input type="email"/>
              <Button variant="destructive" className="w-full">Sign In</Button>
            </CardContent>
            <CardFooter>
              <p>Forgot Password?</p>
              <p>Need To Sign Up?SignUp</p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default page
