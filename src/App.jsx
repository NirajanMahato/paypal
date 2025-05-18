import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./core/public/auth/SignIn";
import HomePage from "./core/public/homePage/Home";
import MakePaymentPage from "./core/public/MakePaymentPage/MakePaymentPage";
import SendPage from "./core/public/sendPage/SendPage";
import SuccessPage from "./core/public/successPage/SuccessPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createBrowserRouter([
            { path: "/", element: <HomePage /> },
            { path: "/signin", element: <SignIn /> },
            { path: "/send", element: <SendPage /> },
            { path: "/make-payment", element: <MakePaymentPage /> },
            { path: "/success", element: <SuccessPage /> },
          ])}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
