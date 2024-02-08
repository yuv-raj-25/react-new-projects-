import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode , setThemeMode] = useState('light')
  const darkTheme = ()=>{

    setThemeMode('dark')
  }
  const lightTheme = ()=>{

    setThemeMode('light')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('')
  },[])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme btn */}
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card  */}
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
