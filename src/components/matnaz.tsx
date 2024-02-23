"use client";
export default function Matnaz({name}: {name: string}) {
    return (
        <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold text-red-700">{`${name}: `}</h1>
                <video src="/mattiarotelli.mp4" className="h-48 w-auto px-3" controls autoPlay muted/>
        </div>
    );
}