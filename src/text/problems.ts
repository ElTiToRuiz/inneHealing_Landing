import {
  Frown,
  RefreshCcw,
  HelpCircle,
  AlertTriangle
} from "lucide-react";


export const problemsText = {
  badge: "Problems",
  heading: "Does this sound familiar?",
  description: "Unlock a life of emotional freedom with a healing program that prioritizes your wellbeing. From personalized guidance to proven techniques, every aspect is designed to help you achieve lasting transformation faster and more effectively.",
  ctaText: "Book Your Discovery Call",
  problems:[ 
    {
      icon: Frown,
      title: "Emotionally Drained",
      description:
        "You feel exhausted—physically and emotionally—even on your “good” days.",
      ctaText: "",
      delay: 0
    },
    {
      icon: RefreshCcw,
      title: "Repeating Patterns",
      description:
        "Old habits and toxic cycles keep coming back, no matter how hard you try to change.",
      ctaText: "",
      delay: 0.1
    },
    {
      icon: HelpCircle,
      title: "Nothing Seems to Work",
      description:
        "You’ve tried therapy, journaling, podcasts… but nothing sticks or brings lasting relief.",
      ctaText: "",
      delay: 0.2
    },
    {
      icon: AlertTriangle,
      title: "Stress & Self-Doubt",
      description:
        "Anxiety and lack of confidence hold you back from feeling truly free and at peace.",
      ctaText: "",
      delay: 0.3
    }
  ],
}
