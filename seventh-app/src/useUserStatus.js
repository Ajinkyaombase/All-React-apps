export default (userId)=>{
    //const status ="online";
    
    
        // if (userId%2==0) {
        //     return "online"
        // } else {

        //     return "offline"
            
        // }
       return userId% 2 ? "offline" : "online";  //same as above
 
}