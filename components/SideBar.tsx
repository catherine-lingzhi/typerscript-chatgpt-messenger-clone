import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex felx-col h-screen">
      <div className="flex-1">
        <div>
          {/*NewChat*/}
          <NewChat />
          <div>
            {/*NewChat*/}
          </div>
          {/*Mao through chatrows*/}
        </div>      
      </div>
    </div>

  )
}

export default SideBar