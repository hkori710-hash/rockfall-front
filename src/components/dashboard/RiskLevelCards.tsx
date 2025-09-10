import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface RiskData {
  level: string;
  percentage: number;
  change: number;
  color: string;
  bgColor: string;
  glowClass: string;
}

const riskData: RiskData[] = [
  {
    level: "Safe",
    percentage: 67,
    change: +2.3,
    color: "text-success",
    bgColor: "bg-success/10",
    glowClass: "glow-safe"
  },
  {
    level: "Moderate",
    percentage: 28,
    change: -1.2,
    color: "text-warning",
    bgColor: "bg-warning/10",
    glowClass: "glow-warning"
  },
  {
    level: "High",
    percentage: 5,
    change: +0.8,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    glowClass: "glow-critical"
  }
];

export function RiskLevelCards() {
  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4" />;
    if (change < 0) return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = (change: number, isHigh: boolean = false) => {
    if (change === 0) return "text-muted-foreground";
    if (isHigh) {
      return change > 0 ? "text-destructive" : "text-success";
    }
    return change > 0 ? "text-success" : "text-destructive";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {riskData.map((risk, index) => (
        <Card 
          key={risk.level} 
          className={`card-elevated hover:${risk.glowClass} transition-all duration-500 border-l-4 hover:scale-105 animate-slide-up ${
            risk.level === 'Safe' ? 'border-l-success' :
            risk.level === 'Moderate' ? 'border-l-warning' : 'border-l-destructive'
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {risk.level} Risk Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className={`text-4xl font-bold ${risk.color} mb-2 tracking-tight`}>
                  {risk.percentage}%
                </div>
                <div className={`flex items-center gap-1 text-sm ${getTrendColor(risk.change, risk.level === 'High')}`}>
                  {getTrendIcon(risk.change)}
                  <span className="font-medium">
                    {risk.change > 0 ? '+' : ''}{risk.change}% from last week
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {risk.level === 'Safe' ? '147 monitored zones' :
                   risk.level === 'Moderate' ? '41 zones' : '7 critical zones'}
                </div>
              </div>
              <div className={`w-14 h-14 rounded-full ${risk.bgColor} flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-8 h-8 rounded-full ${risk.color.replace('text-', 'bg-')} animate-pulse-glow`}></div>
                <div className="absolute inset-0 rounded-full border-2 border-current opacity-20"></div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4 pt-3 border-t border-border/50">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Coverage</span>
                <span>{risk.percentage}%</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                    risk.level === 'Safe' ? 'bg-success' :
                    risk.level === 'Moderate' ? 'bg-warning' : 'bg-destructive'
                  }`}
                  style={{ 
                    width: `${risk.percentage}%`,
                    animationDelay: `${index * 200 + 500}ms`
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}