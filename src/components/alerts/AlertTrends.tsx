import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, PieChart as PieChartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendsData = [
  { day: 10, alerts: 8 },
  { day: 20, alerts: 12 },
  { day: 30, alerts: 15 },
  { day: 40, alerts: 18 },
  { day: 50, alerts: 22 },
  { day: 60, alerts: 28 },
  { day: 70, alerts: 25 },
  { day: 80, alerts: 30 },
  { day: 90, alerts: 35 },
  { day: 100, alerts: 32 },
  { day: 110, alerts: 38 },
  { day: 120, alerts: 35 },
];

const severityData = [
  { name: 'Info', value: 50, color: 'hsl(var(--info))' },
  { name: 'Major Debris', value: 30, color: 'hsl(var(--warning))' },
  { name: 'Acknowledge', value: 30, color: 'hsl(var(--destructive))' },
];

const CustomTrendsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
        <p className="text-sm text-primary">
          {`Day ${label}: ${payload[0].value} alerts`}
        </p>
      </div>
    );
  }
  return null;
};

export function AlertTrends() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Alert Trends & Distribution</CardTitle>
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">?</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Alerts per Day Chart */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-foreground">Alerts per Day</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Menu Month
              </Button>
              <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
                <TrendingUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={10}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTrendsTooltip />} />
                <Line
                  type="monotone"
                  dataKey="alerts"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Severity Distribution */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Severity Distribution</h4>
          
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={severityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={450}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {severityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">110</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-4 mt-4">
            {severityData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-6 mt-2 text-xs text-muted-foreground">
            <span>Acknowledge</span>
            <span>Major Debris</span>
            <span>Info</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}