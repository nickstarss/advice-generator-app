"use client";

import { useEffect, useState } from "react";
import { Advice } from "./Component/Advice";
import { slip } from "./Types/Types";
import { Skeleton } from "./Component/Skeleton";

export default function Home() {
  const [slip, setSplip] = useState<slip | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSlip();
  }, []);

  async function getSlip() {
    setLoading(true);
    // A API AdvicesSplip deixa um Cache de 2 segundos por requisição,
    // para contornar isso usamos o Date.now()
    const url = `https://api.adviceslip.com/advice?t=${Date.now()}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setSplip(result.slip);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex place-content-center">
      {loading ? <Skeleton /> : <Advice slip={slip} getSlip={getSlip} />}
    </div>
  );
}
