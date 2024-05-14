import React, { useEffect, useState } from "react";
import { USERS_API_URL } from "../constants/constant";

interface User {
    name: string;
    type: number;
}

interface FetchUserDataResult {
    listItems: User[];
    isLoading: boolean;
}

const useFetchUserData = ():FetchUserDataResult => {
   const [listItems, setListItems] = useState<User[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(USERS_API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setListItems(result?.users || []);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [])
   return { listItems, isLoading };
}

export { useFetchUserData }