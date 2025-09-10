import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, WifiOff, Battery, Thermometer, Activity, MapPin } from "lucide-react";

interface SensorData {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
  battery: number;
  temperature: number;
  lastReading: string;
  riskLevel: 'low' | 'moderate' | 'high';
  coordinates: { lat: number; lng: number };
}

const mockSensors: SensorData[] = [
  {
    id: "RS-001",
    name: "North Slope Monitor",
    location: "Alpine Ridge, Sector A",
    status: "online",
    battery: 87,
    temperature: 12.4,
    lastReading: "2 mins ago",
    riskLevel: "low",
    coordinates: { lat: 46.5197, lng: 7.4815 }
  },
  {
    id: "RS-002", 
    name: "Canyon Edge Sensor",
    location: "Valley Pass, Sector B",
    status: "warning",
    battery: 23,
    temperature: 8.1,
    lastReading: "5 mins ago",
    riskLevel: "moderate",
    coordinates: { lat: 46.5287, lng: 7.4925 }
  },
  {
    id: "RS-003",
    name: "Ridge Line Array",
    location: "Summit View, Sector C",
    status: "online",
    battery: 92,
    temperature: 15.7,
    lastReading: "1 min ago",
    riskLevel: "high",
    coordinates: { lat: 46.5387, lng: 7.5035 }
  },
  {
    id: "RS-004",
    name: "Base Station Hub",
    location: "Valley Floor, Sector D",
    status: "offline",
    battery: 0,
    temperature: 0,
    lastReading: "2 hours ago",
    riskLevel: "low",
    coordinates: { lat: 46.5097, lng: 7.4705 }
  },
  {
    id: "RS-005",
    name: "Cliff Face Monitor",
    location: "East Wall, Sector E",
    status: "online",
    battery: 76,
    temperature: 9.8,
    lastReading: "3 mins ago",
    riskLevel: "moderate",
    coordinates: { lat: 46.5497, lng: 7.5145 }
  },
  {
    id: "RS-006",
    name: "Debris Flow Detector",
    location: "Stream Channel, Sector F",
    status: "online",
    battery: 65,
    temperature: 11.2,
    lastReading: "1 min ago",
    riskLevel: "high",
    coordinates: { lat: 46.5597, lng: 7.5255 }
  }
];

export function SensorStatusGrid() {
  const getStatusIcon = (status: SensorData['status']) => {
    switch (status) {
      case 'online': return <Wifi className="h-4 w-4 text-success" />;
      case 'warning': return <Wifi className="h-4 w-4 text-warning" />;
      case 'offline': return <WifiOff className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusColor = (status: SensorData['status']) => {
    switch (status) {
      case 'online': return 'text-success border-success/20 bg-success/10';
      case 'warning': return 'text-warning border-warning/20 bg-warning/10';
      case 'offline': return 'text-destructive border-destructive/20 bg-destructive/10';
    }
  };

  const getRiskColor = (risk: SensorData['riskLevel']) => {
    switch (risk) {
      case 'low': return 'text-success border-success/20 bg-success/10';
      case 'moderate': return 'text-warning border-warning/20 bg-warning/10';
      case 'high': return 'text-destructive border-destructive/20 bg-destructive/10';
    }
  };

  const getBatteryColor = (battery: number) => {
    if (battery > 50) return 'text-success';
    if (battery > 20) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Sensor Network Status
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Live status of {mockSensors.length} geological monitoring sensors
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mockSensors.map((sensor, index) => (
            <div 
              key={sensor.id}
              className="border border-border/50 rounded-lg p-4 hover:border-border transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{sensor.name}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(sensor.status)}`}
                    >
                      {getStatusIcon(sensor.status)}
                      {sensor.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3" />
                    {sensor.location}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ID: {sensor.id} • {sensor.lastReading}
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getRiskColor(sensor.riskLevel)}`}
                >
                  {sensor.riskLevel.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Battery className={`h-4 w-4 ${getBatteryColor(sensor.battery)}`} />
                  <span className="text-sm">
                    <span className={getBatteryColor(sensor.battery)}>{sensor.battery}%</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-info" />
                  <span className="text-sm text-foreground">
                    {sensor.status === 'offline' ? '--' : `${sensor.temperature}°C`}
                  </span>
                </div>
              </div>

              {/* Signal strength indicator */}
              <div className="mt-3 pt-3 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Signal:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className={`w-1 h-3 rounded-sm ${
                          sensor.status === 'offline' 
                            ? 'bg-muted' 
                            : bar <= (sensor.status === 'warning' ? 2 : 4)
                            ? 'bg-success'
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {sensor.status === 'offline' ? 'No Signal' : 
                     sensor.status === 'warning' ? 'Weak' : 'Strong'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-success">
                {mockSensors.filter(s => s.status === 'online').length}
              </div>
              <div className="text-xs text-muted-foreground">Online</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">
                {mockSensors.filter(s => s.status === 'warning').length}
              </div>
              <div className="text-xs text-muted-foreground">Warning</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-destructive">
                {mockSensors.filter(s => s.status === 'offline').length}
              </div>
              <div className="text-xs text-muted-foreground">Offline</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}