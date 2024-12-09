function App() {
  return (
    //This code is better to use
    <div className="flex h-screen w-screen bg-black">
      <div className="flex-col w-[100px] h-screen bg-blue-700 text-center">
        <img className="p-[20px]" src="C:/Users/PREDATOR/Desktop/1.png" alt="logo" />
        <br />
        <button className="py-[10px]">logo</button>
        <br />
        <button className="py-[10px]"> logo</button>
        <br />
        <button className="py-[10px]">logo</button>
        <br />
        <button className="py-[10px]">logo</button>

        <br /> <br />
        <button className="py-[10px]">logo</button>
        <br />
        <button className="py-[10px]">logo</button>
        <br /> <br />

        <div className="justify-end">
        <button className="py-[10px]">logo</button>
        <br />
        <button className="py-[10px]">logo</button>
        <br />
        <button className="py-[10px]">logo</button>
        </div>

      </div>
      <div className="flex flex-1 flex-col bg-sky-100">
        <div className="flex h-[100px] bg-yellow-200">
          <div className="w-1/2 bg-green-200">
          <h1>Hi Andreas!</h1>
          <p>Let's look at your daily activity overview.</p></div>
          <div className="flex flex-1 bg-orange-600 justify-end items-center">
          <div className="flex py-8"> <input type="text" placeholder="Search for healthy metrics" className= "text-zinc-600 px-5 py-2 border-1 rounded-full bg-white"/></div>
          <div className="m-5"><button className=" font-bold text-white bg-blue-400 rounded-full px-6 py-3 hover:bg-blue-600">Upgrade</button></div>
          </div>
        </div> 
        <div className="flex-col flex-1 bg-slate-600">
          <div className="flex h-1/2 bg-red-700 gap-[10px] p-[10px]">
          <div className="flex w-3/5 bg-white rounded-3xl"></div>
          <div className="flex-1  bg-blue-600 rounded-3xl"></div>
          </div>

          <div className="flex h-1/2 bg-violet-700 gap-[10px] p-[10px]">
          <div className="flex w-1/3 bg-slate-500 rounded-3xl"></div>
          <div className="flex w-1/3 bg-slate-300 rounded-3xl"></div>
          <div className="flex w-1/3 bg-slate-200 rounded-3xl"></div>

          </div>
          </div>



         
        

          


          
                                                                                                                                                                                                                                                
        
        </div>
      
      
      </div>
    
    //<div className="w-screen h-screen flex flex-col bg-sky-100">
    //<div className="w-[100px] bg-white flex-1"></div>
  );
}

export default App;
