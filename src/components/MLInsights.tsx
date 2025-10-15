import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, Shield, AlertTriangle } from "lucide-react";

const MLInsights = () => {
  const insights = [
    {
      title: "Vulnerability Prediction Accuracy",
      value: 94,
      icon: Brain,
      color: "text-accent",
    },
    {
      title: "Anomaly Detection Rate",
      value: 87,
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "False Positive Reduction",
      value: 76,
      icon: Shield,
      color: "text-primary",
    },
    {
      title: "Threat Pattern Recognition",
      value: 91,
      icon: AlertTriangle,
      color: "text-warning",
    },
  ];

  return (
    <Card className="shadow-card ">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">ML Model Performance</CardTitle>
        <CardDescription>
          Real-time insights from machine learning algorithms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${insight.color}`} />
                    <span className="text-sm font-medium text-foreground">
                      {insight.title}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {insight.value}%
                  </span>
                </div>
                <Progress value={insight.value} className="h-2 bg-yellow-300" />
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg bg-accent/10 p-4 bg-green-600/30">
          <div className="flex items-start gap-3">
            <Brain className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="space-y-1 ">
              <p className="text-sm font-medium text-foreground">
                Latest Model Update
              </p>
              <p className="text-xs text-muted-foreground ">
                The ML model has been trained on 15,234 new vulnerability patterns.
                Prediction accuracy improved by 3.2% compared to the previous version.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MLInsights;
