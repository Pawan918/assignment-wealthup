export type StepStatus = "Critical" | "Warning" | "Good" | "Completed"

export type StepData = {
    step: number
    status?: StepStatus
    title: string
    description: string
    points: string
    actionText: string
    isLocked: boolean
    showSelection: boolean
    showFunds?: boolean
    isExpress?: boolean
}