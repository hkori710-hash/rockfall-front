import { AlertHistory } from "@/components/alerts/AlertHistory";
import { AlertTrends } from "@/components/alerts/AlertTrends";
import landslideBg from "@/assets/landslide-bg.jpg";

export default function Alerts() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${landslideBg})`,
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
          Alert Management
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Complete alert history, filtering capabilities, and trend analysis 
          for comprehensive system monitoring and response management.
        </p>
      </div>

      {/* Alert Management Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AlertHistory />
        </div>
        <div>
          <AlertTrends />
        </div>
      </div>
      </div>
    </div>
  );
}