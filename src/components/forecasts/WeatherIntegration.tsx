import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Cloud, Thermometer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const weatherData = [
  { day: 'TODAY', precipitation: 12, temperature: 18 },
  { day: 'TUE', precipitation: 8, temperature: 22 },
  { day: 'WED', precipitation: 15, temperature: 16 },
  { day: 'THU', precipitation: 25, temperature: 14 },
  { day: 'FRI', precipitation: 45, temperature: 12 },
  { day: 'SAT', precipitation: 38, temperature: 15 },
  { day: 'SUN', precipitation: 22, temperature: 19 },
];

const CustomWeatherTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground mb-1">{label}</p>
        <p className="text-sm text-info">
          {`Precipitation: ${payload[0]?.value || 0} mm`}
        </p>
        <p className="text-sm text-destructive">
          {`Temperature: ${payload[1]?.value || 0}°C`}
        </p>
      </div>
    );
  }
  return null;
};

export function WeatherIntegration() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-info" />
            WEATHER INTEGRATION
          </CardTitle>
          <Badge variant="destructive" className="animate-pulse-glow">
            HIGH RISK
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                yAxisId="left"
                stroke="hsl(var(--info))"
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--destructive))"
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomWeatherTooltip />} />
              
              {/* Precipitation Bars */}
              <Bar
                yAxisId="left"
                dataKey="precipitation"
                fill="hsl(var(--info))"
                fillOpacity={0.8}
                radius={[2, 2, 0, 0]}
              />
              
              {/* Temperature Line */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="temperature"
                stroke="hsl(var(--destructive))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--destructive))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--destructive))", strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 bg-info rounded-sm"></div>
            <span className="text-sm text-muted-foreground">Precipitation (mm)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-destructive"></div>
            <span className="text-sm text-muted-foreground">Temperature (°C)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}