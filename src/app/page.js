import Image from "next/image";
import Imageslider from "@/components/imageslider";
import Scrollimage from "@/components/scrollimage";

export default function Home() {
  return (
    <div>
    <Scrollimage/>
    <div>
      <Imageslider/>
      </div>
    </div>
  );
}
