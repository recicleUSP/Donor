import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useContext } from "react";

import { Colors, Theme } from "../constants/setting";
import { DonorContext } from "../contexts/donor/context";
import { TabsRoutes } from "./tab.routes";
import { LogRoutes } from "./log.routes";
// import { MyStack } from "./stack.routes";
 
function Routes(){
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: Colors[Theme][2],
            background: Colors[Theme][1]
        }
    };

    const {donorState: {logged}, donorDispach} = useContext(DonorContext);

    return (
        <NavigationContainer theme={MyTheme}>
            {logged ? <TabsRoutes/> : <LogRoutes/>}
            {/* {logged ? <MyStack/> : <LogRoutes/>} */}
            {/* <MainNavigation /> */}
        </NavigationContainer>
    )
}

export {Routes}