import Home from "./screens/Home";
import Archive from "./screens/Archive";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}
