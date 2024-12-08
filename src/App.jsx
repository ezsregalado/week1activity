function App() {
  return (
    //This code is better to use
    <div className="flex h-screen w-screen">
      <div className="w-[100px] bg-white"></div>
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

        <div className="flex-1 bg-slate-600"></div>
      </div>
    </div>
    //<div className="w-screen h-screen flex flex-col bg-sky-100">
    //<div className="w-[100px] bg-white flex-1"></div>
  );
}

export default App;
