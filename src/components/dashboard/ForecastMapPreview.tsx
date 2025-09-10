import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const riskZones = [
  { id: 1, x: 20, y: 30, risk: 'high', size: 'large' },
  { id: 2, x: 60, y: 45, risk: 'moderate', size: 'medium' },
  { id: 3, x: 40, y: 70, risk: 'low', size: 'small' },
  { id: 4, x: 80, y: 25, risk: 'moderate', size: 'medium' },
  { id: 5, x: 15, y: 80, risk: 'high', size: 'large' },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'high': return 'bg-destructive';
    case 'moderate': return 'bg-warning';
    case 'low': return 'bg-success';
    default: return 'bg-muted';
  }
};

const getRiskSize = (size: string) => {
  switch (size) {
    case 'large': return 'w-6 h-6';
    case 'medium': return 'w-4 h-4';
    case 'small': return 'w-3 h-3';
    default: return 'w-4 h-4';
  }
};

export function ForecastMapPreview() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5 text-primary" />
          Risk Zone Map
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Current geological risk assessment by area
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 bg-muted/20 rounded-lg border border-border/50 overflow-hidden">
          {/* Topographical background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="text-muted-foreground">
              <defs>
                <pattern id="topo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo)"/>
            </svg>
          </div>

          {/* Risk zone markers */}
          {riskZones.map((zone) => (
            <div
              key={zone.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getRiskSize(zone.size)} ${getRiskColor(zone.risk)} rounded-full opacity-80 animate-pulse-glow cursor-pointer hover:scale-110 transition-transform`}
              style={{ 
                left: `${zone.x}%`, 
                top: `${zone.y}%`,
                boxShadow: `0 0 15px currentColor`
              }}
              title={`${zone.risk.charAt(0).toUpperCase() + zone.risk.slice(1)} Risk Zone`}
            />
          ))}

          {/* Legend */}
          <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-muted-foreground">High Risk</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span className="text-muted-foreground">Moderate</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-muted-foreground">Low Risk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            View Full Map
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}