import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Task {
  name: string;
  progress: number;
}

const tasks: Task[] = [
  { name: "Data Ingestion Pipeline", progress: 90 },
  { name: "Forecast Model Refinement", progress: 65 },
  { name: "Mobile Model Development", progress: 40 },
];

export function CollaborationStatus() {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-foreground">
          TEAM COLLABORATION STATUS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">
                Task: {task.name}
              </span>
              <span className="text-sm font-medium text-primary">
                {task.progress}%
              </span>
            </div>
            <Progress 
              value={task.progress} 
              className="h-2" 
            />
          </div>
        ))}
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Current Focus: <span className="text-foreground font-medium">System Optimization</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}