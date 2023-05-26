/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from "./app.navigation";
import {Provider as PaperProvider} from "react-native-paper"



function App() {

  return (

    <PaperProvider>
        <AppNavigation/>
    </PaperProvider>

  );
}

export default App;
