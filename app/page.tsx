import { Advice } from "./Component/Advice";
import { slip } from "./Types/adviceType";

export default function Home() {
  const adviceData: slip = {
    id: 201,
    advice:
      "The best nights out are when people around you are simply having fun.",
  };

  return (
    <div className="flex place-content-center">
      <Advice slip={adviceData}></Advice>
    </div>
  );
}
