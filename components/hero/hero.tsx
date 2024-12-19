import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className=" flex flex-col items-center gap-6 text-center">
            <Badge variant="outline" className="space-x-2 px-1">
              <Badge variant={"default"}>New</Badge>
              <p className="text-xs pr-3">Newly Launched v1</p>
            </Badge>
            <div>
              <h1 className="mb-4 text-2xl font-bold lg:text-6xl tracking-tighter">
                Run the outlet as you love
              </h1>
              <p className="text-muted-foreground text-base max-w-lg mx-auto">
                RestoBytes is your all-in-one platform designed for restaurants,
                bakeries, and cloud kitchens. Manage billing, staff, inventory,
                and custom food orders effortlessly, all in one place.
              </p>
            </div>
            <div className="text-center">
              <div className="mt-4 flex justify-center gap-2">
                <Button>Get Started</Button>
                <Button variant="outline">
                  Learn more <ExternalLink className="ml-2 h-4" />
                </Button>
              </div>
              <p className="text-center text-muted-foreground text-sm py-2 lg:text-left">
                Claim your 14 days Free Trial Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
