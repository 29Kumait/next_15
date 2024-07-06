"use client";

import { useState, useEffect } from "react";

interface ViewData {
    count: number;
    uniques: number;
}

interface TrafficData {
    repo: string;
    data: {
        views: ViewData[];
        count: number;
        uniques: number;
    };
}

const defaultData: TrafficData['data'] = { views: [], count: 0, uniques: 0 };

const githubPat = process.env.NEXT_PUBLIC_GITHUB_PAT;

const useFetchData = (): TrafficData[] => {
    const [trafficData, setTrafficData] = useState<TrafficData[]>([]);

    useEffect(() => {
        const fetchData = async (repo: string): Promise<TrafficData> => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/29Kumait/${repo}/traffic/views`,
                    {
                        headers: {
                            Authorization: `token ${githubPat}`,
                        },
                    }
                );
                if (!response.ok) {
                    return { repo, data: defaultData };
                }
                const data = await response.json();
                return {
                    repo,
                    data: { views: data.views, count: data.count, uniques: data.uniques },
                };
            } catch (error) {
                return { repo, data: defaultData };
            }
        };

        Promise.all([fetchData("next"), fetchData("15")])
            .then((data) => setTrafficData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return trafficData;
};

export default useFetchData;
