// import { Bell, AlertTriangle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { SidebarTrigger } from "@/components/ui/sidebar";
// import { useNavigate } from "react-router-dom";


// export function Header() {
//   return (
//     <header className="h-16 border-b border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-between px-6">
//       <div className="flex items-center gap-4">
//         <SidebarTrigger className="text-muted-foreground hover:text-primary" />
//         <div>
//           <h1 className="text-xl font-bold text-foreground">
//             Rockfall Prediction System
//           </h1>
//           <p className="text-sm text-muted-foreground">
//             Real-time geological monitoring and risk assessment
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         {/* Live Alerts Button */}
//         <Button 
//           variant="outline" 
//           className="relative glow-critical hover:glow-critical border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-200"
//         >
//           <AlertTriangle className="h-4 w-4 mr-2" />
//           Live Alerts
//           <Badge 
//             variant="destructive" 
//             className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs animate-pulse-glow"
//           >
//             3
//           </Badge>
//         </Button>

      

//         {/* Notifications */}
//         <Button variant="ghost" size="icon" className="relative">
//           <Bell className="h-5 w-5" />
//           <Badge
//             variant="secondary"
//             className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
//           >
//             7
//           </Badge>
//         </Button>
//       </div>
//     </header>
//   );
// }

import { Bell, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom"; // ✅ import the hook

export function Header() {
  const navigate = useNavigate(); // ✅ get navigate function

  return (
    <header className="h-16 border-b border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-primary" />
        <div>
          <h1 className="text-xl font-bold text-foreground">
            Rockfall Prediction System
          </h1>
          <p className="text-sm text-muted-foreground">
            Real-time geological monitoring and risk assessment
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Live Alerts Button */}
        <Button
          variant="outline"
          className="relative glow-critical hover:glow-critical border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-200"
          onClick={() => navigate("/sms")} // ✅ navigate to SMSPage
        >
          <AlertTriangle className="h-4 w-4 mr-2" />
          Live Alerts
          <Badge
            variant="destructive"
            className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs animate-pulse-glow"
          >
            3
          </Badge>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge
            variant="secondary"
            className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
          >
            7
          </Badge>
        </Button>
      </div>
    </header>
  );
}
