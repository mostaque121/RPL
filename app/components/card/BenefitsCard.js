
const BenefitsCard = ({ Icon, title, description }) => {
  return (
    <div className="flex mb-5 md:mb-0 px-3 py-3 rounded-md flex-col items-center bg-light-blue">
      <div><Icon className="w-20 h-20" /></div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BenefitsCard;
