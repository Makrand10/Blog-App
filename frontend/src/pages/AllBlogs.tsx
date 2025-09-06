import { useEffect, useState } from "react";

interface Blog {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
    };
    createdAt: string;
}

export const AllBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        // Mock data for now - replace with actual API call
        setBlogs([
            {
                id: "1",
                title: "my first blog",
                content: "this is my first blog...",
                author: { name: "Anonymous" },
                createdAt: "2024-02-02"
            },
            {
                id: "2", 
                title: "my new blog",
                content: "my bnew blog...",
                author: { name: "Anonymous" },
                createdAt: "2024-02-02"
            },
            {
                id: "3",
                title: "ha111sdda@gmail.com", 
                content: "m123123123...",
                author: { name: "Anonymous" },
                createdAt: "2024-02-02"
            }
        ]);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
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

                <div className="space-y-6">
                    {blogs.map((blog, index) => (
                        <div key={blog.id} className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium">A</span>
                                </div>
                                <span className="text-sm text-gray-600">
                                    {blog.author.name} • {formatDate(blog.createdAt)}
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold text-black mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-2">{blog.content}</p>
                            <p className="text-sm text-gray-400">1 minute(s) read</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
