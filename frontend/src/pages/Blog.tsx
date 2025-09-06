
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
    createdAt: string;
}

export const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<BlogPost | null>(null);

    useEffect(() => {
        // Mock data for now - replace with actual API call
        setBlog({
            id: id || "7",
            title: "this is a new blog post by harkriat",
            content: "this is a new blog post by harkriat this is a new blog post by harkriatthis is a new blog post by harkriat this is a new blog post by harkriat this is a new blog post by harkriat this is a new blog post by harkriat this is a new blog post by harkriat this is a new blog post by harkriat this is a new blog post by harkriat this is a new blog post by harkriat",
            author: { name: "harkirat" },
            createdAt: "2023-12-02"
        });
    }, [id]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-black">Medium</h1>
                    <div className="flex items-center gap-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-md">New</button>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">h</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-3">
                        <h1 className="text-4xl font-bold text-black mb-4">{blog.title}</h1>
                        <p className="text-gray-600 mb-8">Post on {formatDate(blog.createdAt)}</p>
                        
                        <div className="prose max-w-none">
                            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
                                {blog.content}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-black mb-4">Author</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-lg font-medium">h</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-black">{blog.author.name}</p>
                                    <p className="text-sm text-gray-600">
                                        Random catch phrase about the author's ability to grab the user's attention
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}