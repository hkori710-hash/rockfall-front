import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, AlertTriangle, Camera, Download } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import rockfallBg from "@/assets/rockfall-bg.jpg";

interface RockfallEvent {
  id: number;
  date: string;
  time: string;
  location: string;
  severity: 'critical' | 'major' | 'moderate' | 'minor';
  volume: string;
  cause: string;
  description: string;
  damages: string;
  imageCount: number;
}

const recentEvents: RockfallEvent[] = [
  {
    id: 1,
    date: '2024-01-15',
    time: '14:23',
    location: 'Sector A-7, North Ridge',
    severity: 'critical',
    volume: '450 m³',
    cause: 'Heavy rainfall + freeze-thaw cycles',
    description: 'Major rockfall event affecting main access road. Multiple large boulders (>2m diameter) detached from cliff face.',
    damages: 'Road closure, 2 vehicles damaged, infrastructure impact',
    imageCount: 12
  },
  {
    id: 2,
    date: '2024-01-12',
    time: '08:45',
    location: 'Sector C-3, East Wall',
    severity: 'major',
    volume: '180 m³',
    cause: 'Seismic activity (M 3.2)',
    description: 'Rockfall triggered by minor earthquake. Debris scattered across 50m radius.',
    damages: 'Trail closure, safety barrier damaged',
    imageCount: 8
  },
  {
    id: 3,
    date: '2024-01-10',
    time: '22:10',
    location: 'Sector B-5, South Face',
    severity: 'moderate',
    volume: '65 m³',
    cause: 'Rock weathering + wind erosion',
    description: 'Gradual rock detachment observed over 48 hours before final collapse.',
    damages: 'Minor equipment damage, no personnel injury',
    imageCount: 5
  },
  {
    id: 4,
    date: '2024-01-08',
    time: '16:30',
    location: 'Sector D-1, West Slope',
    severity: 'minor',
    volume: '25 m³',
    cause: 'Thermal expansion',
    description: 'Small rockfall during afternoon peak temperatures.',
    damages: 'No significant damage reported',
    imageCount: 3
  }
];

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case 'critical':
      return { color: 'bg-destructive', textColor: 'text-destructive', variant: 'destructive' as const };
    case 'major':
      return { color: 'bg-red-600', textColor: 'text-red-400', variant: 'destructive' as const };
    case 'moderate':
      return { color: 'bg-warning', textColor: 'text-warning', variant: 'secondary' as const };
    case 'minor':
      return { color: 'bg-info', textColor: 'text-info', variant: 'outline' as const };
    default:
      return { color: 'bg-muted', textColor: 'text-muted-foreground', variant: 'outline' as const };
  }
};

export default function RecentRockfall() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Recent Rockfall Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive documentation of recent geological events with detailed analysis, 
            impact assessment, and photographic evidence.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-destructive mb-2">4</div>
              <div className="text-sm text-muted-foreground">Events This Month</div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-warning mb-2">720 m³</div>
              <div className="text-sm text-muted-foreground">Total Volume</div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">Photos Captured</div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-2">0</div>
              <div className="text-sm text-muted-foreground">Casualties</div>
            </CardContent>
          </Card>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {recentEvents.map((event) => {
            const config = getSeverityConfig(event.severity);
            return (
              <Card key={event.id} className="card-elevated">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={config.variant} className="text-xs">
                          {event.severity.toUpperCase()}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {event.location}
                      </CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {event.volume}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Material Volume
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Event Description</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        <span className="text-muted-foreground">Cause: </span>
                        <span className="text-foreground font-medium">{event.cause}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Impact Assessment</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.damages}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Camera className="h-4 w-4 text-info" />
                        <span className="text-muted-foreground">{event.imageCount} images available</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      View Images
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center pt-8">
          <Button variant="outline" className="px-8">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  );
}