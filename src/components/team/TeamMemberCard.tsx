import { Card, CardContent } from "@/components/ui/card";
import { Mountain } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  contact: string;
  avatar?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="card-elevated hover:glow-primary transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
          <Mountain className="h-8 w-8 text-primary" />
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-1">
          {member.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">
          {member.role}
        </p>
        
        <p className="text-xs text-muted-foreground">
          contact: {member.contact}
        </p>
      </CardContent>
    </Card>
  );
}