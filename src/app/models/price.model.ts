export interface Price {
    id: string,
    originalPrice: number,
    downPayment: number,
    payOffAmount: number,
    promotionPrice: number,
    term: number,
    promotions: any[],
    promotionalValue: number,
    promotionalValueTotal: number,
    promotionalType: string,
    promotionStartDate: string,
    promotionEndDate: string,
    promotionId: number
}
  