import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Settings, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AlertHistoryItem {
  id: number;
  severity: 'critical' | 'warning' | 'info';
  location: string;
  time: string;
  date: string;
  action: string;
  status: 'active' | 'resolved' | 'assigned';
  description: string;
}

const alertHistory: AlertHistoryItem[] = [
  {
    id: 1,
    severity: 'critical',
    location: 'Eagle Peak Trailhead',
    time: '05:08:30 AM',
    date: '2023-10-26',
    action: 'Immediate Evacuation & Closure',
    status: 'active',
    description: 'Major instability detected with immediate evacuation required'
  },
  {
    id: 2,
    severity: 'warning',
    location: 'Whispering Pines Road',
    time: '36:60% Loose Rocks',
    date: '2023-10-26',
    action: 'Caution & Geotech Review',
    status: 'assigned',
    description: 'Loose rocks detected requiring geotechnical assessment'
  },
  {
    id: 3,
    severity: 'info',
    location: 'Old Quarry Site',
    time: '20% Minor Debris',
    date: '2023-10-25',
    action: 'Monitor Conditions',
    status: 'resolved',
    description: 'Minor debris fall with ongoing monitoring'
  }
];

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'critical':
      return <AlertTriangle className="h-4 w-4" />;
    case 'warning':
      return <AlertTriangle className="h-4 w-4" />;
    case 'info':
      return <Info className="h-4 w-4" />;
    default:
      return <Info className="h-4 w-4" />;
  }
};

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case 'critical':
      return { variant: 'destructive' as const, color: 'text-destructive' };
    case 'warning':
      return { variant: 'secondary' as const, color: 'text-warning' };
    case 'info':
      return { variant: 'outline' as const, color: 'text-info' };
    default:
      return { variant: 'outline' as const, color: 'text-muted-foreground' };
  }
};

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'active':
      return { variant: 'destructive' as const, text: 'Active' };
    case 'assigned':
      return { variant: 'secondary' as const, text: 'Assign' };
    case 'resolved':
      return { variant: 'outline' as const, text: 'Resolve' };
    default:
      return { variant: 'outline' as const, text: status };
  }
};

export function AlertHistory() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Alert History
          </CardTitle>
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">?</span>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex items-center gap-4 mt-4">
          <Select defaultValue="severity">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="severity">Severity</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="location">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="sector-a">Sector A</SelectItem>
              <SelectItem value="sector-b">Sector B</SelectItem>
              <SelectItem value="sector-c">Sector C</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Time Period"
              className="pl-10"
              defaultValue="Last Week"
            />
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground mt-2">
          Sorted from newest first
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-3">
            {alertHistory.map((alert) => {
              const severityConfig = getSeverityConfig(alert.severity);
              const statusConfig = getStatusConfig(alert.status);
              
              return (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Badge variant={severityConfig.variant} className="min-w-[80px] justify-center">
                      {alert.severity.toUpperCase()}
                    </Badge>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">
                          Location: "{alert.location}"
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Time: {alert.date} {alert.time}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Action: {alert.action}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      {statusConfig.text}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        <div className="mt-4 p-4 bg-muted/20 rounded-lg">
          <div className="text-sm font-medium text-foreground mb-2">
            Old Quarry Site
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div>Probability: 25 05:5 AM</div>
            <div>Probability: 20% 15 610xrem</div>
          </div>
          <div className="mt-3 text-sm font-medium text-foreground">
            Monitor & Conditions
          </div>
        </div>
      </CardContent>
    </Card>
  );
}