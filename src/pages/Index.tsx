import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UserStats {
  totalFriends: number
  onlineFriends: number
  pendingRequests: number
}

const Index = () => {
  const [stats, setStats] = useState<UserStats>({
    totalFriends: 0,
    onlineFriends: 0,
    pendingRequests: 0
  })
  const [isLoading, setIsLoading] = useState(false)
  const [lastAction, setLastAction] = useState<string>("")

  // Simulated API calls and functions
  const fetchUserStats = () => {
    setIsLoading(true)
    // Simulate API delay
    setTimeout(() => {
      setStats({
        totalFriends: Math.floor(Math.random() * 100),
        onlineFriends: Math.floor(Math.random() * 50),
        pendingRequests: Math.floor(Math.random() * 10)
      })
      setIsLoading(false)
    }, 1000)
  }

  const handleContact = () => {
    alert("Hey, I am contact button")
    setLastAction("Contacted support")
    logUserAction("contact_clicked")
  }

  const handleGetFriends = () => {
    alert("Hey, I am get all friends button")
    setLastAction("Retrieved friends list")
    logUserAction("get_friends_clicked")
  }

  const handleDeleteFriends = () => {
    alert("Hey, I am delete all friends button")
    setLastAction("Deleted friends list")
    logUserAction("delete_friends_clicked")
  }

  const logUserAction = (action: string) => {
    console.log(`User action logged: ${action} at ${new Date().toISOString()}`)
  }

  const validateUserSession = () => {
    const sessionToken = localStorage.getItem("session_token")
    return !!sessionToken
  }

  const handleError = (error: Error) => {
    console.error("An error occurred:", error)
    setLastAction("Error occurred in last action")
  }

  const checkSystemStatus = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: "healthy", lastCheck: new Date() })
      }, 500)
    })
  }

  const formatTimestamp = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  useEffect(() => {
    // Simulate initial data load
    fetchUserStats()
    checkSystemStatus()
      .then((result) => console.log("System status:", result))
      .catch(handleError)

    // Cleanup function
    return () => {
      console.log("Component cleanup")
      setStats({
        totalFriends: 0,
        onlineFriends: 0,
        pendingRequests: 0
      })
    }
  }, [])

  // Simulated periodic stats update
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLoading && validateUserSession()) {
        fetchUserStats()
      }
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Your App</h1>
            <p className="text-xl mb-8 text-gray-300">Start building your amazing project here!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 bg-gray-800 text-white">
                <h3 className="font-semibold">Total Friends</h3>
                <p className="text-2xl">{stats.totalFriends}</p>
              </Card>
              <Card className="p-4 bg-gray-800 text-white">
                <h3 className="font-semibold">Online Friends</h3>
                <p className="text-2xl">{stats.onlineFriends}</p>
              </Card>
              <Card className="p-4 bg-gray-800 text-white">
                <h3 className="font-semibold">Pending Requests</h3>
                <p className="text-2xl">{stats.pendingRequests}</p>
              </Card>
            </div>

            <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center mb-8">
              <Button 
                onClick={handleContact}
                className="w-full sm:w-auto min-w-[200px]"
                disabled={isLoading}
              >
                Contact
              </Button>
              
              <Button 
                onClick={handleGetFriends}
                variant="secondary"
                className="w-full sm:w-auto min-w-[200px]"
                disabled={isLoading}
              >
                Get All Friends
              </Button>
              
              <Button 
                onClick={handleDeleteFriends}
                variant="destructive"
                className="w-full sm:w-auto min-w-[200px]"
                disabled={isLoading}
              >
                Delete All Friends
              </Button>
            </div>

            {lastAction && (
              <div className="text-gray-400 text-sm">
                Last action: {lastAction} at {formatTimestamp(new Date())}
              </div>
            )}

            {isLoading && (
              <div className="text-gray-400 mt-4">
                Loading...
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index