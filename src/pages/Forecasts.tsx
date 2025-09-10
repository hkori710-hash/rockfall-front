import { ForecastChart } from "@/components/forecasts/ForecastChart";
import { WeatherIntegration } from "@/components/forecasts/WeatherIntegration";
import rockfallBg from "@/assets/rockfall-bg.jpg";

export default function Forecasts() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${rockfallBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          7-Day Rockfall Forecasts
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Advanced AI-powered predictions showing rockfall probability over the next week, 
          integrated with weather data and sensor analytics.
        </p>
      </div>

      {/* Main Forecast Chart */}
      <ForecastChart />

      {/* Weather Integration */}
      <WeatherIntegration />
      </div>
    </div>
  );
}