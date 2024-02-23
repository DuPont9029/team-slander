import Rigths from "../components/rigths";
import NOBI from "../components/nobi";
import UE from "../components/ue";
import Matnaz from "../components/matnaz";

export default function home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
      
      <h1 className="text-4xl font-bold text-blue-400">MAGNACODICE SLANDER:</h1>

      <UE name={"KovD3v"}/>
      
      <NOBI name={"DuPont9029"}/>

      <Rigths name={"Metoncode"}/>

      <Matnaz name={"Mattiarotelli"}/>      
    </div>
  );
}
