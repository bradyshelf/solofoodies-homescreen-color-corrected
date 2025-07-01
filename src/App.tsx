
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnhancedIndex from "./pages/EnhancedIndex";
import ExperimentalIndex from "./pages/ExperimentalIndex";
import ExperimentalV2Index from "./pages/ExperimentalV2Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/enhanced" element={<EnhancedIndex />} />
          <Route path="/experimental" element={<ExperimentalIndex />} />
          <Route path="/experimental-v2" element={<ExperimentalV2Index />} />
          <Route path="*" element={<EnhancedIndex />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
