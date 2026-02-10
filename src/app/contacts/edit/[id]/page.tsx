import React from "react";

const EditContactPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 dark:bg-black">
            <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Edit Contact: {id}</h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">This is the edit page for contact ID: {id}</p>
        </div>
    );
};

export default EditContactPage;