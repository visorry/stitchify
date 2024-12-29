"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: unknown) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSubmit(data);
      }}
      className="space-y-4"
    >
      {type === "register" && (
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            variant="curvy"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>
      )}

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          variant="curvy"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            variant="curvy"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
          />
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </Button>
        </div>
      </div>

      <Button variant="curvy" type="submit">
        {type === "login" ? "Sign In" : "Create Account"}
      </Button>
    </form>
  );
}
