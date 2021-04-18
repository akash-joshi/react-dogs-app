import Data from "../components/Data";
import Image from "../components/Image";
import { DogProvider } from "../contexts/DogContext";

export default function NewRoute() {
  return (
    <DogProvider>
      <div className="center_align">
        <Image />
        <Data />
      </div>
    </DogProvider>
  );
}
