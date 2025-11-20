interface ErrorProps {
    message?: string | undefined;
    type?: "toast" | "label" | "screen";
}
export const Error = ({ message, type="toast" }: ErrorProps) => {
    if(type === "label") return <p className="text-sm text-red-600 mt-1">{message}</p>
    if(type === "toast") return <p className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md">{message}</p>
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md border border-red-400">
                <i className="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
                <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                <p className="text-gray-700">{message || "An unexpected error occurred."}</p>
            </div>
        </div>
    );
}

