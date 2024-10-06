import FirstComponent from "@/components/firstComponent";
import SecondComponent from "@/components/secondComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>Homescreen</div>
      <FirstComponent />
      <SecondComponent />
    </>
  );
}
