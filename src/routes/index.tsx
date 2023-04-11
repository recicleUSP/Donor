import { NavigationContainer } from "@react-navigation/native";
import {LogRoutes} from "./log.routes";
import { TabsRoutes } from "./tab.routes";
 
function Routes(){
    return (
        <NavigationContainer>
            <TabsRoutes/>
            {/* <LogRoutes/> */}
        </NavigationContainer>
    )
}

export {Routes}