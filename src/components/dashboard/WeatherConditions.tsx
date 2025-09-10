import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Thermometer, Gauge } from "lucide-react";

interface WeatherData {
  condition: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  visibility: number;
  pressure: number;
  uvIndex: number;
  riskImpact: 'low' | 'moderate' | 'high';
}

const mockWeather: WeatherData = {
  condition: "Partly Cloudy",
  temperature: 14.2,
  humidity: 68,
  windSpeed: 12.5,
  windDirection: "NW",
  precipitation: 2.3,
  visibility: 8.5,
  pressure: 1013.2,
  uvIndex: 4,
  riskImpact: 'moderate'
};

const hourlyForecast = [
  { time: "Now", temp: 14, condition: "cloudy", precipitation: 10 },
  { time: "15:00", temp: 16, condition: "sunny", precipitation: 5 },
  { time: "16:00", temp: 18, condition: "sunny", precipitation: 0 },
  { time: "17:00", temp: 17, condition: "cloudy", precipitation: 15 },
  { time: "18:00", temp: 15, condition: "rainy", precipitation: 40 },
  { time: "19:00", temp: 13, condition: "rainy", precipitation: 60 },
];

export function WeatherConditions() {
  const getConditionIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return <Sun className="h-5 w-5 text-warning" />;
      case 'cloudy': return <Cloud className="h-5 w-5 text-muted-foreground" />;
      case 'rainy': return <CloudRain className="h-5 w-5 text-info" />;
      default: return <Cloud className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getRiskImpactColor = (impact: string) => {
    switch (impact) {
      case 'low': return 'text-success border-success/20 bg-success/10';
      case 'moderate': return 'text-warning border-warning/20 bg-warning/10';
      case 'high': return 'text-destructive border-destructive/20 bg-destructive/10';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-primary" />
          Weather Conditions
        </CardTitle>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Impact on geological stability
          </p>
          <Badge 
            variant="outline" 
            className={`text-xs ${getRiskImpactColor(mockWeather.riskImpact)}`}
          >
            {mockWeather.riskImpact.toUpperCase()} IMPACT
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current conditions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getConditionIcon(mockWeather.condition)}
            <div>
              <div className="text-3xl font-bold text-foreground">
                {mockWeather.temperature}°C
              </div>
              <div className="text-sm text-muted-foreground">
                {mockWeather.condition}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">
              Feels like 12°C
            </div>
            <div className="text-xs text-muted-foreground">
              Updated 5 mins ago
            </div>
          </div>
        </div>

        {/* Weather metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
            <Droplets className="h-4 w-4 text-info" />
            <div>
              <div className="text-sm font-medium">{mockWeather.humidity}%</div>
              <div className="text-xs text-muted-foreground">Humidity</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
            <Wind className="h-4 w-4 text-info" />
            <div>
              <div className="text-sm font-medium">{mockWeather.windSpeed} km/h</div>
              <div className="text-xs text-muted-foreground">{mockWeather.windDirection}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
            <Eye className="h-4 w-4 text-info" />
            <div>
              <div className="text-sm font-medium">{mockWeather.visibility} km</div>
              <div className="text-xs text-muted-foreground">Visibility</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
            <Gauge className="h-4 w-4 text-info" />
            <div>
              <div className="text-sm font-medium">{mockWeather.pressure}</div>
              <div className="text-xs text-muted-foreground">hPa</div>
            </div>
          </div>
        </div>

        {/* Hourly forecast */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">6-Hour Forecast</h4>
          <div className="grid grid-cols-6 gap-2">
            {hourlyForecast.map((hour, index) => (
              <div 
                key={index}
                className="text-center p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xs text-muted-foreground mb-1">{hour.time}</div>
                <div className="flex justify-center mb-1">
                  {getConditionIcon(hour.condition)}
                </div>
                <div className="text-sm font-medium mb-1">{hour.temp}°</div>
                <div className="text-xs text-info">{hour.precipitation}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather impact assessment */}
        <div className="p-4 rounded-lg border border-border/50 bg-muted/20">
          <h4 className="text-sm font-medium text-foreground mb-2">Geological Impact Assessment</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Soil Saturation:</span>
              <span className="text-warning font-medium">Moderate (68%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Freeze-Thaw Risk:</span>
              <span className="text-success font-medium">Low</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Wind Load Impact:</span>
              <span className="text-warning font-medium">Moderate</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Precipitation Trend:</span>
              <span className="text-info font-medium">Increasing</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-border/30">
            <div className="text-xs text-muted-foreground">
              ⚠️ Expected precipitation may increase rockfall probability by 15-20% over next 6 hours
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}