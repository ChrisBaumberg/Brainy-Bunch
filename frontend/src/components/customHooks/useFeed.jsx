import { useContext } from "react";
import { FeedContext } from "../context/FeedContextHandler";

const useFeed = ()=>{
    const context = useContext(FeedContext);

    if(!context){
        throw new Error("no Context defined, use useFeeds with a provider")
    }
    return context;
};

export default useFeed;