import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp } from "lucide-react";

const forecastData = [
  { day: 'TODAY', date: 'Mon, Oct 23', aiModel: 45, historicalModel: 42, sensorModel: 48 },
  { day: 'TUE', date: 'Tue, Oct 24', aiModel: 38, historicalModel: 35, sensorModel: 41 },
  { day: 'WED', date: 'Wed, Oct 25', aiModel: 32, historicalModel: 30, sensorModel: 35 },
  { day: 'THU', date: 'Thu, Oct 26', aiModel: 55, historicalModel: 52, sensorModel: 58 },
  { day: 'FRI', date: 'Fri, Oct 27', aiModel: 65, historicalModel: 60, sensorModel: 68 },
  { day: 'SAT', date: 'Sat, Oct 28', aiModel: 72, historicalModel: 68, sensorModel: 75 },
  { day: 'SUN', date: 'Sun, Oct 29', aiModel: 58, historicalModel: 55, sensorModel: 62 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-lg min-w-[280px]">
        <p className="text-sm font-medium text-foreground mb-2">{`Date: ${data.date}`}</p>
        <div className="space-y-1">
          <p className="text-sm text-primary">
            {`AI Probability: ${data.aiModel}%`}
          </p>
          <p className="text-sm text-yellow-400">
            {`Historical Model: ${data.historicalModel}%`}
          </p>
          <p className="text-sm text-info">
            {`Sensor-based Model: ${data.sensorModel}%`}
          </p>
        </div>
        {data.day === 'FRI' && (
          <div className="mt-3 pt-2 border-t border-border/50">
            <p className="text-xs font-medium text-foreground mb-1">Contributing Factors:</p>
            <p className="text-xs text-muted-foreground">Heavy Rain (80%)</p>
            <p className="text-xs text-muted-foreground">Soil Saturation (70%)</p>
            <p className="text-xs text-primary">Confidence: High</p>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export function ForecastChart() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          ROCKFALL PROBABILITY FORECAST (7-DAY)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Critical Threshold Line */}
              <ReferenceLine 
                y={75} 
                stroke="hsl(var(--destructive))" 
                strokeDasharray="5 5"
                strokeWidth={2}
              />
              
              {/* AI Model Line */}
              <Line
                type="monotone"
                dataKey="aiModel"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
              
              {/* Historical Data Model */}
              <Line
                type="monotone"
                dataKey="historicalModel"
                stroke="#fbbf24"
                strokeWidth={2}
                strokeDasharray="8 4"
                dot={{ fill: "#fbbf24", strokeWidth: 2, r: 4 }}
              />
              
              {/* Sensor-based Model */}
              <Line
                type="monotone"
                dataKey="sensorModel"
                stroke="hsl(var(--info))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--info))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend and Threshold Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-primary"></div>
              <span className="text-sm text-muted-foreground">AI Model</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-yellow-400" style={{background: 'linear-gradient(90deg, #fbbf24 50%, transparent 50%)', backgroundSize: '8px 2px'}}></div>
              <span className="text-sm text-muted-foreground">Historical Data Model</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-info"></div>
              <span className="text-sm text-muted-foreground">Sensor-based Model</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Critical Threshold: </span>
            <span className="text-destructive font-medium">75%</span>
          </div>
        </div>

        {/* Critical Threshold Indicators */}
        <div className="flex justify-between mt-4 text-xs">
          <div className="text-warning">
            <span className="font-medium">CRITICAL THRESHOLD</span>
          </div>
          <div className="text-warning">
            <span className="font-medium">CRITICAL THRESHOLD</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}