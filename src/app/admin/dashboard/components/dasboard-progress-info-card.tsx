"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface DasboardProgressInfoCardProps {
  label: string
  valueTitle: string
  progressValue: number
  content: string
}

export default function DasboardProgressInfoCard(dto: DasboardProgressInfoCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{dto.label}</CardDescription>
        <CardTitle className="text-4xl">{dto.valueTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">{dto.content}</div>
      </CardContent>
      <CardFooter>
        <Progress value={dto.progressValue} aria-label={`${dto.progressValue}% increase`} />
      </CardFooter>
    </Card>
  )
}
