import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./core/public/homePage/Home";
import SignIn from "./core/public/auth/SignIn";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createBrowserRouter([
            { path: "/", element: <Home /> },
            { path: "/signin", element: <SignIn /> },
          ])}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
