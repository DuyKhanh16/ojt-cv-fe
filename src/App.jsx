import React, { useEffect } from "react";
import {
  RouterProvider,
  useLocation,
} from "react-router-dom";
import router from "./routes/route.config";
export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
