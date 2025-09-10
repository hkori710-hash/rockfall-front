import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Activity } from "lucide-react";

const mockData = [
  { time: '00:00', probability: 12, events: 2 },
  { time: '04:00', probability: 18, events: 4 },
  { time: '08:00', probability: 25, events: 7 },
  { time: '12:00', probability: 35, events: 12 },
  { time: '16:00', probability: 42, events: 18 },
  { time: '20:00', probability: 38, events: 15 },
  { time: '24:00', probability: 28, events: 9 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground mb-1">{`Time: ${label}`}</p>
        <p className="text-sm text-primary">
          {`Probability: ${payload[0].value}%`}
        </p>
        <p className="text-sm text-info">
          {`Events: ${payload[1]?.value || 0}`}
        </p>
      </div>
    );
  }
  return null;
};

export function LiveMonitoringChart() {
  return (
    <Card className="card-elevated col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Live Rockfall Probability Monitoring
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Real-time probability analysis over the last 24 hours
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="probabilityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="probability"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#probabilityGradient)"
              />
              <Line
                type="monotone"
                dataKey="events"
                stroke="hsl(var(--info))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--info))", strokeWidth: 2, r: 4 }}
                yAxisId="right"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">Probability (%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-info"></div>
              <span className="text-sm text-muted-foreground">Events Count</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Critical Threshold: <span className="text-destructive font-medium">75%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}