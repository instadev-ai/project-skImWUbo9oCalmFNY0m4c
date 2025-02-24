import { useState, useEffect } from "react"

interface SystemStatus {
  isOnline: boolean
  lastCheck: Date
  performance: number
  errors: string[]
}

const Index = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    isOnline: true,
    lastCheck: new Date(),
    performance: 100,
    errors: []
  })

  // Boilerplate Function 1: System Health Check
  const checkSystemHealth = async (): Promise<void> => {
    try {
      // Simulate API call
      const response = await new Promise<SystemStatus>((resolve) => {
        setTimeout(() => {
          resolve({
            isOnline: Math.random() > 0.1,
            lastCheck: new Date(),
            performance: Math.floor(Math.random() * 100),
            errors: []
          })
        }, 1000)
      })
      setSystemStatus(response)
      logSystemActivity("System health check completed")
    } catch (error) {
      handleError("Failed to check system health")
    }
  }

  // Boilerplate Function 2: Error Handler
  const handleError = (errorMessage: string): void => {
    console.error(`Error occurred: ${errorMessage}`)
    setSystemStatus(prev => ({
      ...prev,
      errors: [...prev.errors, errorMessage]
    }))
    logSystemActivity(`Error: ${errorMessage}`)
  }

  // Boilerplate Function 3: Activity Logger
  const logSystemActivity = (activity: string): void => {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] ${activity}`)
    
    // Simulate logging to external service
    setTimeout(() => {
      console.log(`Activity logged to external service: ${activity}`)
    }, 100)
  }

  // Boilerplate Function 4: Performance Monitor
  const monitorPerformance = (): void => {
    const startTime = performance.now()
    
    // Simulate performance measurement
    setTimeout(() => {
      const endTime = performance.now()
      const duration = endTime - startTime
      
      setSystemStatus(prev => ({
        ...prev,
        performance: Math.max(0, 100 - duration)
      }))
      
      logSystemActivity(`Performance check: ${duration.toFixed(2)}ms`)
    }, Math.random() * 200)
  }

  // Boilerplate Function 5: System Cleanup
  const cleanupSystem = (): void => {
    logSystemActivity("Starting system cleanup")
    
    // Simulate cleanup tasks
    const tasks = [
      "Clearing cache",
      "Resetting connections",
      "Optimizing performance",
      "Checking memory usage"
    ]
    
    tasks.forEach((task, index) => {
      setTimeout(() => {
        logSystemActivity(`Cleanup task completed: ${task}`)
      }, index * 100)
    })
  }

  // Effect for periodic health checks
  useEffect(() => {
    const interval = setInterval(() => {
      checkSystemHealth()
      monitorPerformance()
    }, 30000) // Every 30 seconds

    // Initial check
    checkSystemHealth()
    monitorPerformance()

    // Cleanup on unmount
    return () => {
      clearInterval(interval)
      cleanupSystem()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Hello World</h1>
      </main>
    </div>
  )
}

export default Index