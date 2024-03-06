
import React from 'react';
import GettingStarted from './GettingStarted';


const Page = () => {
  return (
    <main className="h-screen grid grid-cols-3 dark text-foreground bg-background">
      <div className='bg-slate-800 p-9 col-start-2'>
        <div>
          <h1 className="text-3xl">Modern Qt</h1>
          <p>
            A Qt Library for styling PyQt5 desktop applications.
            ...
          </p>
        </div>
        <div>
          <GettingStarted />
        </div>
      </div>
    </main>
  );
};

export default Page;