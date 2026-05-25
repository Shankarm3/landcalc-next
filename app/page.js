import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Converter from "../components/Converter";

export const metadata = {
   title: "LandCalc - Smart Land Area Converter",

   description: "Convert Kanal, Acre, Gaj and Bigha instantly.",
};

export default function Home() {
   return (
      <main>
         <Navbar />

         <Hero />

         <Converter />
      </main>
   );
}
