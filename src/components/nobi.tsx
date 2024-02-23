"use client";
import { useCallback, useEffect, useState } from "react";

export default function NOBI({name}: {name: string}) {

    const [x, setX] = useState(0);

    const delta = useCallback(() => x <= -1000 ? "💀" : x, [x]); // se x è maggiore o uguale a 1000 ritorna ∞ altrimenti ritorna x
    //∞

    useEffect(() => {

        const interval = setInterval(() => { // definisce ogni quanto viene rieseguito lo useffect

            if (x > -1000) { // se x è minore di 1000    

                setX(x - 1); // incrementa x di 1 ma l'esecuzione di setX cambia lo stato di X che fa rieseguire lo useffect
                
            }
            else {
                clearInterval(interval)
            }
            

        }, 5); // ogni 10 millisecondi

        return () => clearInterval(interval); // pulisce l'intervallo

    }, [x]); // mette la x come dipendenza dello useffect

    return (
        <div className="flex items-center justify-center ">
            <h1 className="text-4xl font-bold">{`${name} number of bitches: ${delta()}`}</h1>
        </div>
    );
}