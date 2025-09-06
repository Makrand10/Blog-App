
import { useState } from "react";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = () => {
        // TODO: Implement actual signin functionality
        console.log("Signing in:", { email, password });
    };

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left side - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-black mb-2">Create an account</h1>
                    <p className="text-gray-600 mb-8">
                        Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your name..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            onClick={handleSignin}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>

            {/* Right side - Testimonial */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
                <div className="max-w-md">
                    <blockquote className="text-2xl font-bold text-gray-800 mb-4">
                        "The customer support I received was exceptional. The support team went above and beyond to address my concerns"
                    </blockquote>
                    <div className="text-gray-600">
                        <p className="font-semibold">Julies Winfield</p>
                        <p>CEO | Acme corp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}