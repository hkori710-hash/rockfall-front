// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Layout } from "./components/layout/Layout";
// import Dashboard from "./pages/Dashboard";
// import Forecasts from "./pages/Forecasts";
// import Alerts from "./pages/Alerts";
// import RecentRockfall from "./pages/RecentRockfall";
// import RecentLandslide from "./pages/RecentLandslide";
// import Team from "./pages/Team";
// import NotFound from "./pages/NotFound";
// import SMSPage from "./pages/SMSPage";
// import LoginPage from "./pages/LoginPage";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route path="/sms" element={<SMSPage />} />
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/forecasts" element={<Forecasts />} />
//             <Route path="/alerts" element={<Alerts />} />
//             <Route path="/recent-rockfall" element={<RecentRockfall />} />
//             <Route path="/recent-landslide" element={<RecentLandslide />} />
//             <Route path="/team" element={<Team />} />
//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Forecasts from "./pages/Forecasts";
import Alerts from "./pages/Alerts";
import RecentRockfall from "./pages/RecentRockfall";
import RecentLandslide from "./pages/RecentLandslide";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import SMSPage from "./pages/SMSPage";
import RiskAnalysis from "./pages/RiskAnalysis";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {!isLoggedIn ? (
          <LoginPage onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/risk-analysis" element={<RiskAnalysis />} />
                <Route path="/sms" element={<SMSPage />} />
                <Route path="/forecasts" element={<Forecasts />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/recent-rockfall" element={<RecentRockfall />} />
                <Route path="/recent-landslide" element={<RecentLandslide />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
