import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
function App() {
  return (
    // <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
     <div>
       <BrowserRouter>
        <Routes>
          <Route path="*" element={<Signin />} />
          <Route path="/home" element={<CodeEditor />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
