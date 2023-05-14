import "../sass/components/pricing.scss";

export const Pricing: React.FC = () => {
  interface Package {
    id: number;
    price: number;
    size: string;
    details: string;
  }
  let plans: Package[] = [];

  plans = [
    {
      id: 1,
      price: 120,
      size: "Mega Pack",
      details:
        "Get the ultimate photography experience with our $120 Mega Pack! ",
    },
    {
      id: 2,
      price: 100,
      size: "Medium Pack",
      details:
        "Our $100 Medium Pack offers the perfect balance of value and features. Trust me, it's awesome!",
    },
    {
      id: 3,
      price: 90,
      size: "Small Pack",
      details:
        "Enjoy stunning photography at an affordable price with our $90 Small Pack. ",
    },
    {
      id: 4,
      price: 170,
      size: "Full Pack",
      details:
        "For the complete photography package, choose our $170 Full Pack! ",
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing">
        <div className="top">
          <span>PHOTOGRAPHY PORTFOLIO</span>
          <h2>OUR PRICING PLANS</h2>
        </div>
        <div className="plans">
          {plans.map((plan) => (
            <div className="plan" key={plan.id}>
              <div className="price">
                <h2>${plan.price}</h2>
                <h3>{plan.size}</h3>
              </div>
              <p>{plan.details}</p>
              <div className="purchase">
                PURCHASE
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
