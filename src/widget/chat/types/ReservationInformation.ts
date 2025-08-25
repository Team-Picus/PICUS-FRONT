export interface ReservationInformation {
  date: string;
  time: string;
  location: string;
  locationSub: string;
  filter: string[];
  request: string;
  package: {
    packageName: string;
    packageOptionName?: string;
    packagePrice: string;
    packageDetails?: string[];
    packageDetailMessage: string;
    packageQuantity?: string;
  }[];
}

export interface Package {
  packageName: string;
  packageOptionName?: string;
  packagePrice: string;
  packageDetails?: string[];
  packageDetailMessage: string;
  packageQuantity?: string;
}

// ReservationDetailPaymentContent props 타입
export interface ReservationDetailPaymentContentProps {
  PackageName: string;
  PaymentPrice: string;
  PackageOption: string[];
}

// PaymentContentTotal props 타입
export interface PaymentContentTotalProps {
  PaymentPrice: string;
  PaymentCard: string;
  PaymentType: string;
}
