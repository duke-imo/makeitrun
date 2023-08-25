import React, { useEffect, useState } from 'react';
import { Card } from '@/components/card/Card';
import { getAllTexts } from '../../utils/supabaseFunc';

export default function Page() {
  const [texts, setTexts] = useState<any>([]);
  useEffect(() => {
    const getTexts = async () => {
      const texts = await getAllTexts();
      setTexts(texts);
      console.log(texts);
    };
  }, []);
  return (
    <>
      <header className="h-20 bg-teal-200 z-10">
        <p>header</p>
      </header>
      <main className="grid auto-rows-fr grid-cols-1 gap-5 bg-zinc-800 md:grid-cols-3 z-0 ">
        <Card props={texts} /> 
        <Card props={texts} />
        <Card props={texts} />
        <Card props={texts} />
        <Card props={texts} />
        <Card props={texts} />
      </main>
    </>
  );
}
