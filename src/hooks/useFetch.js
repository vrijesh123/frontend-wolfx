"use client";
import { useState, useEffect, useCallback } from "react";

export default function useFetch(apiEndpoint, initialPath) {
    const [data, setData] = useState([]);
    const [nextUrl, setNextUrl] = useState(null); // For next page URL
    const [prevUrl, setPrevUrl] = useState(null); // For previous page URL
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [totalPages, setTotalPages] = useState(0); // State for total pages
    const [totalItems, setTotalItems] = useState(0)

    // Fetch data from a given URL
    const fetchData = useCallback(
        async ({ url, pageNumber } = {}) => {
            setIsLoading(true);
            setError(null);
            try {
                let fetchUrl = url || initialPath;
                const urlObj = new URL(apiEndpoint.config.baseURL + fetchUrl);

                if (pageNumber) {
                    urlObj.searchParams.set('page', pageNumber);
                }
                console.log('urlobjj', apiEndpoint, urlObj)
                fetchUrl = urlObj.searchParams.toString();

                const response = await apiEndpoint.get(fetchUrl);
                // Process response...
                const results = response?.results || [];
                setData(results);
                setNextUrl(response?.next);
                setPrevUrl(response?.previous);
                const totalItems = response?.count || 0;
                setTotalItems(totalItems);
                const pageSize = results.length;
                setTotalPages(Math.ceil(totalItems / pageSize));
                setCurrentPage(pageNumber || 1);
            } catch (err) {
                setError(err);
                console.log('errrement', err)
            } finally {
                setIsLoading(false);
            }
        },
        [apiEndpoint, initialPath]
    );


    // Fetch the initial data
    const fetchInitialData = useCallback(() => {
        fetchData(initialPath);
    }, [fetchData, initialPath]);

    const fetchPageData = useCallback(
        (pageNumber) => {
            fetchData({ pageNumber });
        },
        [fetchData]
    );

    // Delete an item and refresh the data
    const deleteItem = useCallback(async (e, idArray) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null); // Reset error before deleting
        try {
            await Promise.all(idArray?.map(id => apiEndpoint.delete(`/${id}`)));
            // Refetch the current page data after deletion
            fetchData(initialPath);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [apiEndpoint, fetchData, initialPath]);



    // Edit an item and refresh the data
    const editItem = useCallback(async (e, id, updateData) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null); // Reset error before updating
        try {
            await apiEndpoint.put(`/${id}`, updateData);
            // Refetch the current page data after update
            fetchData(initialPath);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [apiEndpoint, fetchData, initialPath]);

    // Initial data fetch on component mount
    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    return {
        data,
        setData,
        nextUrl,
        prevUrl,
        currentPage,
        totalPages,
        totalItems,
        fetchPageData,
        error,
        isLoading,
        deleteItem,
        editItem
    };
}
