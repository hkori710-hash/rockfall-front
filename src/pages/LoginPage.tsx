import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import backgroundImage from "@/assets/topo-background.jpg";

type LoginProps = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Invalid username or password. Try admin / 1234");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Card className="w-[380px] bg-gray-800 text-white shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-orange-500">
            Rockfall Risk System Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Credentials Hint Box */}
          <div className="bg-gray-700 p-3 rounded-lg mb-4 text-sm text-gray-200">
            <p className="mb-1">
              <span className="font-semibold text-orange-500">Username:</span>{" "}
              admin
            </p>
            <p>
              <span className="font-semibold text-orange-500">Password:</span>{" "}
              1234
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
