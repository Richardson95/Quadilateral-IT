import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why-us";
import { Leadership } from "@/components/sections/leadership";
import { Academy } from "@/components/sections/academy";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Process />
      <WhyUs />
      <Leadership />
      <Academy />
      <Stack />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
