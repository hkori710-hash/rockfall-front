import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import backgroundImage from "@/assets/topo-background.jpg"; // add your background

type Report = {
  id: number;
  title: string;
  description: string;
  analysis?: { labels: string[]; scores: number[] };
};

export default function RiskAnalysis() {
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      title: "Slope Instability Near Mountain Pass",
      description:
        "DEM indicates steep slopes. Drone imagery shows loose rocks and cracks. Geotechnical sensors report slight ground displacement. Recent rainfall increases risk of minor rockfall.",
    },
    {
      id: 2,
      title: "Sensor Alert: High Displacement Zone",
      description:
        "DEM shows moderate slope angles. Drone imagery reveals small debris accumulation. Sensors detect increasing strain and pore pressure. Environmental factors: moderate rainfall, normal temperature.",
    },
    {
      id: 3,
      title: "Heavy Rainfall Impact Area",
      description:
        "DEM reveals unstable terrain. Drone imagery confirms minor surface erosion. Sensors report normal displacement but increased moisture. Environmental factors: intense rainfall and high winds.",
    },
    {
      id: 4,
      title: "Stable Region Observation",
      description:
        "DEM indicates gentle slopes. Drone imagery confirms stable surfaces. Sensors report normal displacement, strain, and pore pressure. Environmental factors: low rainfall, stable temperature, minimal vibrations.",
    },
    {
      id: 5,
      title: "Temperature and Vibration Sensitive Area",
      description:
        "DEM shows mixed terrain. Drone imagery shows minor cracks in rock surfaces. Sensors detect slight strain. Environmental factors: high temperature fluctuations and minor vibrations, potential rock expansion and contraction.",
    },
  ]);

  const [selectedAnalysis, setSelectedAnalysis] = useState<{
    labels: string[];
    scores: number[];
  } | null>(null);

  const handleAnalyze = async (reportId: number, text: string) => {
    try {
      const res = await fetch("http://localhost:3000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (data?.labels && data?.scores) {
        setReports((prev) =>
          prev.map((r) =>
            r.id === reportId
              ? { ...r, analysis: { labels: data.labels, scores: data.scores } }
              : r
          )
        );

        setSelectedAnalysis({ labels: data.labels, scores: data.scores });
      }
    } catch (err) {
      console.error("Error analyzing:", err);
    }
  };

  const getColor = (label: string) => {
    switch (label) {
      case "High Risk":
        return "#EF4444"; // Red
      case "Moderate Risk":
        return "#FBBF24"; // Yellow
      case "Safe":
        return "#22C55E"; // Green
      default:
        return "#9CA3AF";
    }
  };

  return (
    <div
      className="p-6 space-y-6 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-2xl font-bold text-white">Risk Analysis Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground whitespace-pre-line">
                {report.description}
              </p>

              <Button
                variant="outline"
                onClick={() => handleAnalyze(report.id, report.description)}
              >
                Analyze Risk
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedAnalysis && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-gray-900 text-white rounded-lg p-6 w-[420px] shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-center text-orange-400">
              Risk Analysis Results
            </h2>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={selectedAnalysis.labels.map((label, i) => ({
                    name: label,
                    value: selectedAnalysis.scores[i] * 100,
                  }))}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {selectedAnalysis.labels.map((label, i) => (
                    <Cell key={i} fill={getColor(label)} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    color: "white",
                  }}
                />
                <Legend wrapperStyle={{ color: "white" }} />
              </PieChart>
            </ResponsiveContainer>

            <div className="flex justify-center mt-4">
              <Button
                variant="destructive"
                className="bg-red-600 hover:bg-red-700"
                onClick={() => setSelectedAnalysis(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
