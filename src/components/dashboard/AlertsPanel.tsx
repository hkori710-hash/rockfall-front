import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, MapPin, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Alert {
  id: number;
  severity: "critical" | "warning" | "info";
  title: string;
  location: string;
  time: string;
  description: string;
}

const mockAlerts: Alert[] = [
  {
    id: 1,
    severity: "critical",
    title: "High Rockfall Probability Detected",
    location: "Sector A-7",
    time: "2 minutes ago",
    description: "AI model detected 85% probability with sensor confirmation",
  },
  {
    id: 2,
    severity: "warning",
    title: "Weather Alert: Heavy Rain Expected",
    location: "All Sectors",
    time: "15 minutes ago",
    description: "Precipitation forecast may increase instability",
  },
  {
    id: 3,
    severity: "critical",
    title: "Seismic Activity Anomaly",
    location: "Sector C-3",
    time: "1 hour ago",
    description: "Unusual vibration patterns detected by sensors",
  },
  {
    id: 4,
    severity: "info",
    title: "Routine Sensor Calibration",
    location: "Sector B-5",
    time: "2 hours ago",
    description: "Scheduled maintenance completed successfully",
  },
  {
    id: 5,
    severity: "warning",
    title: "Temperature Fluctuation",
    location: "Sector D-1",
    time: "3 hours ago",
    description: "Thermal sensors report rapid temperature changes",
  },
];

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case "critical":
      return {
        color: "bg-destructive",
        textColor: "text-destructive",
        variant: "destructive" as const,
        icon: AlertTriangle,
      };
    case "warning":
      return {
        color: "bg-warning",
        textColor: "text-warning",
        variant: "secondary" as const,
        icon: AlertTriangle,
      };
    case "info":
      return {
        color: "bg-info",
        textColor: "text-info",
        variant: "outline" as const,
        icon: AlertTriangle,
      };
    default:
      return {
        color: "bg-muted",
        textColor: "text-muted-foreground",
        variant: "outline" as const,
        icon: AlertTriangle,
      };
  }
};

export function AlertsPanel() {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 alerts unless "View More" clicked
  const displayedAlerts = showAll ? mockAlerts : mockAlerts.slice(0, 3);

  return (
    <Card className="card-elevated h-[480px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            Live Alerts
          </CardTitle>
          <Badge variant="secondary" className="animate-pulse-glow">
            {mockAlerts.filter((alert) => alert.severity === "critical").length} Critical
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Real-time system alerts and notifications
        </p>
      </CardHeader>

      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-full px-6">
          <div className="space-y-3 pb-6">
            {displayedAlerts.map((alert) => {
              const config = getSeverityConfig(alert.severity);
              return (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors cursor-pointer group"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${config.color} mt-2 flex-shrink-0`}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-foreground truncate">
                        {alert.title}
                      </h4>
                      <Badge variant={config.variant} className="text-xs capitalize">
                        {alert.severity}
                      </Badge>
                    </div>

                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {alert.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>

      <div className="p-6 border-t border-border/50">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View More Alerts"}
        </Button>
      </div>
    </Card>
  );
}
