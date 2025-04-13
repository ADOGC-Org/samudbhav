import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import Wow from "./pages/chapters/Wow";
import Supatham from "./pages/chapters/Supatham";
import Adrishyaa from "./pages/chapters/Adrishyaa";
import Account from "./pages/Account";
import UnderDevelopment from "./pages/UnderDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="donate" element={<Donate />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="chapters/wow" element={<Wow />} />
            <Route path="chapters/supatham" element={<Supatham />} />
            <Route path="chapters/adrishyaa" element={<Adrishyaa />} />
            <Route path="account" element={<Account />} />
            <Route path="under-development" element={<UnderDevelopment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;