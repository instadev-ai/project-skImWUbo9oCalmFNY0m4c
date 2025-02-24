import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

const Index = () => {
  const handleContact = () => {
    alert("Hey, I am contact button")
  }

  const handleGetFriends = () => {
    alert("Hey, I am get all friends button")
  }

  const handleDeleteFriends = () => {
    alert("Hey, I am delete all friends button")
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Your App</h1>
            <p className="text-xl mb-8 text-gray-300">Start building your amazing project here!</p>
            
            <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
              <Button 
                onClick={handleContact}
                className="w-full sm:w-auto min-w-[200px]"
              >
                Contact
              </Button>
              
              <Button 
                onClick={handleGetFriends}
                variant="secondary"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Get All Friends
              </Button>
              
              <Button 
                onClick={handleDeleteFriends}
                variant="destructive"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Delete All Friends
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index