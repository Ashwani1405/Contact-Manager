"use client";

const LogoutButton = () => {
    const handleLogout = () => {
        // Mock logout action
        console.log("Logging out...");
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors text-sm font-medium"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
