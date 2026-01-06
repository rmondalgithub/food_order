import { createContext,  useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext =createContext(null);
const StoreContextProvider =(props)=>{

    const [certItem,setcertItem]= useState({});
    
    const addTocart =(itemId) =>{
        if(!certItem[itemId]){
            setcertItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setcertItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromecart=(itemId) =>{
        setcertItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount= ()=>{
        let totalAmount=0;
        for(const item in certItem){
            if(certItem[item]>0){
                let foodinfo = food_list.find((product)=>product._id===item);
            totalAmount += foodinfo.price * certItem[item];
            }
            
        }
        return totalAmount;
    }
    const contextValue={
        food_list,
        certItem,
        setcertItem,
        addTocart,
        removeFromecart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;