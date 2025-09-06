import { useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handlePublish = () => {
        // TODO: Implement actual publish functionality
        console.log("Publishing:", { title, content });
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-black">Medium</h1>
                    <div className="flex items-center gap-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-md">New</button>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">h</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold text-black mb-6">Publish a new post</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter your title..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Content
                            </label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write your content here..."
                                rows={10}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            onClick={handlePublish}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Publish post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
