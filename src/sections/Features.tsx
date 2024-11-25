import FeatureCard from "@/components/FeatureCard";
import Tags from "@/components/Tags";
import { div } from "framer-motion/client";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tags>Feature</Tags>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center">
          Where Power Meets <span className="text-lime-400">Simplicity</span>
        </h2>

        <div>
          {/* Feature Cards */}
          <FeatureCard
            title="Real-time Collabration"
            description="Work together seamlessly with conflict-free team editing"
          ></FeatureCard>

          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
          ></FeatureCard>

          <FeatureCard
            title="Keyboard Quick Actions"
            description="Work together seamlessly with conflict-free team editing"
          ></FeatureCard>
        </div>
        <div>
          {features.map((feature) => (
            <div key={feature}>
              <span></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
