const FeatureCard = ({ img, title, description }) => {
  return (
    <>
      <div className="flex items-center gap-6 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        {/* Left Illustration */}
        <img src={img} alt={title} className="w-40 h-auto" />

        {/* Vertical dotted divider */}
        <div className="h-40 border-l border-dashed border-gray-300"></div>

        {/* Text Content */}
        <div>
          <h3 className="text-xl font-semibold text-secondary">{title}</h3>
          <p className="text-base-100 mt-2 leading-relaxed  text-sm">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
