import React from "react";
 
const usercontext = React.createContext();


const UserProvider= usercontext.Provider;


const UserConsumer= usercontext.Consumer;

export { UserProvider, UserConsumer};