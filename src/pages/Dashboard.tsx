import { RiskLevelCards } from "@/components/dashboard/RiskLevelCards";
import { LiveMonitoringChart } from "@/components/dashboard/LiveMonitoringChart";
import { ForecastMapPreview } from "@/components/dashboard/ForecastMapPreview";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { SensorStatusGrid } from "@/components/dashboard/SensorStatusGrid";
import { WeatherConditions } from "@/components/dashboard/WeatherConditions";
import topoBg from "@/assets/topo-background.jpg";

export default function Dashboard() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${topoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-6 space-y-6 animate-fade-in">
      {/* Risk Level Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Current Risk Assessment
        </h2>
        <RiskLevelCards />
      </section>

      {/* Main Monitoring Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LiveMonitoringChart />
        <AlertsPanel />
      </section>

      {/* Secondary Monitoring */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ForecastMapPreview />
        <WeatherConditions />
      </section>

      {/* Sensor Network Status */}
      <section>
        <SensorStatusGrid />
      </section>

      {/* System Performance Stats */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card-elevated p-6 hover:glow-primary transition-all duration-300 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Sensors</p>
                <p className="text-3xl font-bold text-success">147</p>
                <p className="text-xs text-muted-foreground mt-1">+3 this week</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-success animate-pulse-glow"></div>
            </div>
          </div>
          
          <div className="card-elevated p-6 hover:glow-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Data Points/Hour</p>
                <p className="text-3xl font-bold text-info">8.2K</p>
                <p className="text-xs text-muted-foreground mt-1">↑ 12% from avg</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-info animate-pulse-glow"></div>
            </div>
          </div>
          
          <div className="card-elevated p-6 hover:glow-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Accuracy</p>
                <p className="text-3xl font-bold text-primary">94.7%</p>
                <p className="text-xs text-muted-foreground mt-1">+0.3% improved</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow"></div>
            </div>
          </div>
          
          <div className="card-elevated p-6 hover:glow-primary transition-all duration-300 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
                <p className="text-3xl font-bold text-success">99.8%</p>
                <p className="text-xs text-muted-foreground mt-1">43d 7h 23m</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-success animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}