import { Request, Response, NextFunction } from "express";

interface IInfo {
  tier: string;
  tierDesc: string;
  availableCoin: number;
  totalCoin: number;
  coinDesc: string;
  updatedDate: number;
  listSection: IListSection[];
}

interface ISection {
  title: string;
  desc: string;
  image: string;
}

interface IListSection {
  title: string;
  data: ISection[];
}

const data: IInfo = {
  tier: "Silver Tier",
  tierDesc:
    "In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.",
  availableCoin: 340,
  totalCoin: 550,
  coinDesc:
    "You have paid rental fee for $1,200.\r\nPay more $800 to achieve Gold Tier.",
  updatedDate: 1635829200,
  listSection: [
    {
      title: "Petrol",
      data: [
        {
          title: "15 Coins",
          desc: "50% discount for every $100 top-up on your Shell Petrol Card",
          image: "https://iili.io/Hvwtb0g.png",
        },
        {
          title: "1,000 Coins",
          desc: "70% discount top-up on your Shell Petrol Card",
          image: "https://iili.io/HvwtZs1.png",
        },
      ],
    },
    {
      title: "Rental Rebate",
      data: [
        {
          title: "20 Coins",
          desc: "Get $20 Rental rebate",
          image: "https://iili.io/HvwtibV.png",
        },
        {
          title: "15 Coins",
          desc: "Get $500 Rental rebate",
          image: "https://iili.io/HvwtLzB.png",
        },
      ],
    },
    {
      title: "Food and Beverage",
      data: [
        {
          title: "25 Coins",
          desc: "NTUC Fairprice $50 Voucher",
          image: "https://iili.io/HvwtDqF.png",
        },
        {
          title: "5 Coins",
          desc: "Free Cold Stone Sundae at any flavour!",
          image: "https://iili.io/HvwtQWP.png",
        },
      ],
    },
  ],
};

// getting data
const getInfo = async (req: Request, res: Response, next: NextFunction) => {
  let result: IInfo = data;
  return res.status(200).json({
    message: result,
  });
};

export default { getInfo };
