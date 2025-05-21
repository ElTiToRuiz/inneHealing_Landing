import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export interface StageCardProps {
  stage?: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
  delay?: number;
}

// brand palette (light / feminine)
const navy = "#002D5B"; // primary text
const grey = "#555A5E"; // body text slightly softer
const coral = "#EC5B53"; // light orange
const rose = "#FCE9E8"; // very light rose bg for icon wrap
const crimson = "#CF332B"; // red accent

export const StageCard = ({
  stage,
  icon,
  title,
  description,
  ctaText,
  delay = 0,
}: StageCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        {/* Card wrapper with hover border glow */}
        <div className="group relative w-full max-w-md md:max-w-lg">
          {/* subtle gradient border visible on hover */}

          <Card
            className="relative bg-white/90 py-7 shadow-md backdrop-blur-sm rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, #FFF7F6 90%)`,
            }}
          >
            <div className="h-[2px] absolute -top-[1px] w-5/12 left-1/2 -translate-x-1/2 bg-[#EC5B53] rounded-full"/>
            

            {/* stage badge */}
            {stage != null && (
              <Badge
                className="absolute right-6 top-4 rounded-md bg-gradient-to-r from-[#EC5B53] to-[#CF332B] px-3 py-0.5 text-xs font-semibold text-white shadow-sm"
              >
                Stage {stage}
              </Badge>
            )}

            <CardHeader className="flex items-center lg:items-end gap-4">
              <div
                className="flex h-12 w-16 items-center justify-center rounded-xl"
                style={{ backgroundColor: rose }}
              >
                {icon}
              </div>
              <h3
                className="text-2xl font-semibold"
                style={{ color: navy }}
              >
                {title}
              </h3>
            </CardHeader>

            <Separator />

            <CardContent>
              <p
                className="text-base leading-relaxed"
                style={{ color: grey }}
              >
                {description}
              </p>
            </CardContent>

            {ctaText && (
              <CardFooter>
                <Button
                  size="sm"
                  className="rounded-full px-5 py-2 font-medium text-white shadow-md"
                  style={{
                    background: `linear-gradient(90deg, ${coral}, ${crimson})`,
                  }}
                >
                  {ctaText}
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </motion.div>
    </div>
  );
};
