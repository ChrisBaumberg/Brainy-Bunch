import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { initialFeed } from "../../data/feedData";
import feedService from "../../services/feedsService";

const FeedContext = createContext();

const FeedProvider = ({children})=>{

    const [feeds, setFeeds] = useState([]);
    const [filters, setFilters] = useState([]);
    const [filteredFeeds, setFilteredFeeds] = useState([]);
    const [currentFilter, setCurrentFilter] = useState("all");

    useEffect (()=>{
        feedService.getFeedsBackend(setFeeds);
    },[]),
    
    useEffect(()=>{
        localStorage.setItem("feeds", JSON.stringify(feeds));
    },[feeds]);

    useEffect(()=>{
        const handleAddFeed = async (event)=>{
            const newFeed = event.detail;
            try{
                await feedService.addFeedsBackend(newFeed);
                await feedService.getFeedsBackend(setFeeds);
            }
            catch (e){
                console.log(`Failed to add: ${e}`)
            }
        }
        window.addEventListener("addFeed", handleAddFeed);

        return()=>{
            window.removeEventListener("addFeed", handleAddFeed)
        }
    },[])

    useEffect(()=>{
        const handleDeleteFeed = async (event) =>{
            const id = event.detail;
            try {
                await feedService.deleteFeedBackend(id);
                await feedService.getFeedsBackend(setFeeds)
            }
            catch (e){
                console.log(`Failed to delete: ${e}`)
            }
            window.addEventListener("deleteFeed", handleDeleteFeed)

            return()=>{
                window.removeEventListener("deleteFeed", handleDeleteFeed)
            }
        }
    
    },[])

    const uniqueCategories = useMemo(()=>{
        return["all", new Set(feeds.map((feed)=>feed.category))];
    },[feeds]);

    useEffect(()=>{
        setFilters(uniqueCategories);
    },[uniqueCategories]
    );

    const filteredFeedsMemo = useMemo(()=>{
    return currentFilter === "all"
    ? feeds
    : feeds.filter((feed)=> feed.category === currentFilter)
}, [currentFilter, feeds]
)

    useEffect(()=>{
        setFilteredFeeds(filteredFeedsMemo);
    },[filteredFeedsMemo]);

    const memoizedSetCurrentFilter = useCallback((newFilter)=>{
        setCurrentFilter(newFilter);
    },[]);
    return (
        <FeedContext.Provider
        value={{
            feeds, setFeeds, filteredFeeds, setFilteredFeeds, filters, setFilters, currentFilter, memoizedSetCurrentFilter
        }}>
            {children}
        </FeedContext.Provider>
    )
}

export {FeedProvider, FeedContext}