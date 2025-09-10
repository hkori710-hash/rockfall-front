import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, AlertTriangle, Camera, Download, Ruler } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import landslideBg from "@/assets/landslide-bg.jpg";

interface LandslideEvent {
  id: number;
  date: string;
  time: string;
  location: string;
  severity: 'critical' | 'major' | 'moderate' | 'minor';
  area: string;
  depth: string;
  cause: string;
  description: string;
  evacuation: string;
  imageCount: number;
}

const recentLandslides: LandslideEvent[] = [
  {
    id: 1,
    date: '2024-01-18',
    time: '03:15',
    location: 'Highland Valley, Sector 12',
    severity: 'critical',
    area: '2.3 hectares',
    depth: '15-20 meters',
    cause: 'Prolonged rainfall + soil saturation',
    description: 'Major landslide affecting residential area. Deep-seated failure involving 2.3 hectares of unstable slope. Emergency evacuation initiated.',
    evacuation: '45 residents evacuated, temporary shelter established',
    imageCount: 24
  },
  {
    id: 2,
    date: '2024-01-14',
    time: '19:40',
    location: 'Mountain View Road, Sector 8',
    severity: 'major',
    area: '0.8 hectares',
    depth: '8-12 meters',
    cause: 'Infrastructure loading + drainage failure',
    description: 'Landslide blocking major transportation route. Debris flow extended 200m downslope.',
    evacuation: 'Road closure, 12 households advised to relocate',
    imageCount: 16
  },
  {
    id: 3,
    date: '2024-01-11',
    time: '11:20',
    location: 'Cedar Ridge, Sector 5',
    severity: 'moderate',
    area: '0.3 hectares',
    depth: '4-6 meters',
    cause: 'Vegetation removal + slope oversteepening',
    description: 'Shallow landslide following recent construction activity. Limited impact to structures.',
    evacuation: 'Construction site evacuation, no residential impact',
    imageCount: 8
  },
  {
    id: 4,
    date: '2024-01-09',
    time: '14:55',
    location: 'Riverside Terrace, Sector 3',
    severity: 'minor',
    area: '0.1 hectares',
    depth: '2-3 meters',
    cause: 'River bank erosion',
    description: 'Small bank failure along river channel. Minimal impact to nearby infrastructure.',
    evacuation: 'No evacuation required, monitoring ongoing',
    imageCount: 5
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

export default function RecentLandslide() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Recent Landslide Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed documentation of slope failure events including impact zones, 
            evacuation protocols, and comprehensive geotechnical analysis.
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
              <div className="text-2xl font-bold text-warning mb-2">3.5 ha</div>
              <div className="text-sm text-muted-foreground">Total Area Affected</div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">53</div>
              <div className="text-sm text-muted-foreground">Documentation Photos</div>
            </CardContent>
          </Card>
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-info mb-2">45</div>
              <div className="text-sm text-muted-foreground">People Evacuated</div>
            </CardContent>
          </Card>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {recentLandslides.map((event) => {
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
                        {event.area}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Affected Area
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
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-warning" />
                          <span className="text-muted-foreground">Cause: </span>
                          <span className="text-foreground font-medium">{event.cause}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Ruler className="h-4 w-4 text-info" />
                          <span className="text-muted-foreground">Depth: </span>
                          <span className="text-foreground font-medium">{event.depth}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Emergency Response</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {event.evacuation}
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