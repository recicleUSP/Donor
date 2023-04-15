import * as React from "react";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  
} from "@expo-google-fonts/montserrat";

import { Routes } from "./src/routes/index"
import { DonorProvider } from "./src/contexts/donor"

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if(!fontLoaded){
    return null; 
  } 

  return (
    <DonorProvider>
      <Routes/>
    </DonorProvider>
  );
}
