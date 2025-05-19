import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./core/public/auth/SignIn";
import LoadingScreen from "./core/public/components/LoadingScreen";
import HomePage from "./core/public/homePage/Home";
import MakePaymentPage from "./core/public/MakePaymentPage/MakePaymentPage";
import SendPage from "./core/public/sendPage/SendPage";
import SuccessPage from "./core/public/successPage/SuccessPage";
import LoadingPage from "./core/public/loadingPage/LoadingPage";

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
            { path: "/wallet", element: <LoadingScreen /> },
            { path: "/activity", element: <LoadingScreen /> },
            { path: "/help", element: <LoadingScreen /> },
            { path: "/loading", element: <LoadingPage /> },
          ])}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
