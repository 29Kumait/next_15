const fetchCreateContent = async ({ description }: { description: string }) => {
    try {
        const response = await fetch('/api/content/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ description }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return errorData.message || "An error saving content.";
        }

        return await response.json();
    } catch (error) {
        return (error as Error).message || "An error saving content.";
    }
};

const fetchContentList = async () => {
    try {
        const response = await fetch('/api/content', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            return errorData.message || "An error fetching content.";
        }

        return await response.json();
    } catch (error) {
        return (error as Error).message || "An error fetching content.";
    }
};

export { fetchCreateContent, fetchContentList };
