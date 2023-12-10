import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[#282c34] text-white w-screen h-screen overflow-x-hidden
        flex items-center justify-start flex-col gap-10
    ">
        <h1 className='text-4xl mt-28'>Counter App</h1>
        <div className='w-[95%] max-w-[480px] border-white border p-3 rounded-xl flex flex-col items-center gap-6'>
            <div className='flex justify-evenly border w-full text-2xl'>
                <button
                  className='border-r flex-1'
                  onClick={()=>{
                    setCount(count=> count-1);
                  }}
                >
                    -
                </button>
                    <div className='flex-1 text-center'>
                        {count}
                    </div>
                <button className='flex-1 border-l'
                  onClick={()=>{
                    setCount(count=> count + 1);
                  }}
                >
                    +
                </button>
            </div>
            <span
              className='border py-1 px-3 rounded-lg'
              onClick={()=>{
                setCount(0);
              }}
            >
              Reset
            </span>
        </div>
      
    </div>
  );
}

export default App;
