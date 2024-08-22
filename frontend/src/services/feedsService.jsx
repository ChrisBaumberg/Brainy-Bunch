import showNotifications from "../components/Notifications/showNotifications";
import axios from "axios";


const feedService={
    getFeedsBackend: async (setCallBackFunc)=>{
        try{
            const config={
                url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_GET_ROUTE}`,
            headers: {
                "Content-Type":"application/json",
            },
            }
            const res = await axios(config);
            setCallBackFunc(res.data.feeds);
        }
        catch (e){
            console.log(e.data);
            showNotifications(e.data.message, "red");
        }
    },
    addFeedsBackend: async(newFeed)=>{
        //add new feed to DB
        try{
            const config ={
                method:"post",
                url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_POST_ROUTE}`,
                headers: {
                    "Content-Type":"application/json",
                },
                data: JSON.stringify(newFeed),
            };
                
                const res = await axios(config);
                showNotifications(res.data.message,"normal");
        
                
        }
        catch(e){
            console.log(e.data)
            showNotifications(e.data.message, "red");
        }
       },
       deleteFeedBackend: async (feedId)=>{
        //delete feed from backend
        
        try{
            const config = {
                method: "delete",
                url: `${process.env.REACT_APP_BASE_URI}/${process.env.REACT_APP_DELETE_ROUTE}/${feedId}`,
            
            headers: {
                "Content-Type":"application/json"
            },
         
        };
        
        const res = await axios(config);
        showNotifications(res.data.message,"normal");
       
        
       }
       catch(e){
        console.log(e.data)
        showNotifications(e.data.message, "red");
       }
    },
    

}

export default feedService;