import * as React from "react";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import {
  Montserrat_700Bold,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";


export const PreLoad = () => {
  let [isLoadingComplete, setLoadingComplete] = React.useState(false);

  async function loadResourcesAndDataAsync() {
    console.warn("Entrou");
    try {
      SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        ...FontAwesome.font,
        "Montserrat-Bold": Montserrat_700Bold,
        "Montserrat-Light": Montserrat_300Light,
        "Montserrat-Regular": Montserrat_400Regular,
        "Montserrat-Semibold": Montserrat_600SemiBold,
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
    }
  }
  
  React.useEffect(() => {
    async () => { await loadResourcesAndDataAsync();}
  }, []);

  return isLoadingComplete;
}
