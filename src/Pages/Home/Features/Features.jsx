import FeatureCard from "./FeatureCard";
import liveTracking from "../../../assets/live-tracking.png"
import safeDelivery from "../../../assets/safe-delivery.png"

export default function Features() {
  return (

    <div className="max-w-6xl mx-auto">
    <div className="border-t border-dashed border-base-200 my-15 w-full"></div>
    <div className="space-y-6">
      <FeatureCard
        img={liveTracking}
        title="Live Parcel Tracking"
        description="Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates."
        />

      <FeatureCard
        img={safeDelivery}
        title="100% Safe Delivery"
        description="We ensure your parcels are handled with utmost care and delivered securely to their destination. Our reliable process guarantees safe delivery every time."
        />

      <FeatureCard
        img={safeDelivery}
        title="24/7 Call Center Support"
        description="Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
        />
    </div>
    <div className="border-t border-dashed border-base-200 my-15 w-full"></div>
        </div>
  );
}
