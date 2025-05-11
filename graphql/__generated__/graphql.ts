/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  AboutBlocksDynamicZoneInput: { input: any; output: any }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
}

export type About = {
  __typename?: 'About'
  blocks: Maybe<Array<Maybe<AboutBlocksDynamicZone>>>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  title: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type AboutBlocksDynamicZone =
  | ComponentSharedMedia
  | ComponentSharedQuote
  | ComponentSharedRichText
  | ComponentSharedSlider
  | Error

export type AboutInput = {
  blocks: InputMaybe<Array<Scalars['AboutBlocksDynamicZoneInput']['input']>>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  title: InputMaybe<Scalars['String']['input']>
}

export type Author = {
  __typename?: 'Author'
  avatar: Maybe<UploadFile>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  email: Maybe<Scalars['String']['output']>
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection'
  nodes: Array<Author>
  pageInfo: Pagination
}

export type AuthorFiltersInput = {
  and: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  email: InputMaybe<StringFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<AuthorFiltersInput>
  or: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type AuthorInput = {
  avatar: InputMaybe<Scalars['ID']['input']>
  email: InputMaybe<Scalars['String']['input']>
  name: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
}

export type BankAccount = {
  __typename?: 'BankAccount'
  accountNumber: Maybe<Scalars['String']['output']>
  bankName: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  holderName: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type BankAccountEntityResponseCollection = {
  __typename?: 'BankAccountEntityResponseCollection'
  nodes: Array<BankAccount>
  pageInfo: Pagination
}

export type BankAccountFiltersInput = {
  accountNumber: InputMaybe<StringFilterInput>
  and: InputMaybe<Array<InputMaybe<BankAccountFiltersInput>>>
  bankName: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  holderName: InputMaybe<StringFilterInput>
  not: InputMaybe<BankAccountFiltersInput>
  or: InputMaybe<Array<InputMaybe<BankAccountFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type BankAccountInput = {
  accountNumber: InputMaybe<Scalars['String']['input']>
  bankName: InputMaybe<Scalars['String']['input']>
  holderName: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
}

export type Booking = {
  __typename?: 'Booking'
  bookingStatus: Maybe<Enum_Booking_Bookingstatus>
  carBrand: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  customerName: Maybe<Scalars['String']['output']>
  documentId: Scalars['ID']['output']
  endDate: Maybe<Scalars['DateTime']['output']>
  profile: Maybe<Profile>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  service: Maybe<Service>
  startDate: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type BookingEntityResponseCollection = {
  __typename?: 'BookingEntityResponseCollection'
  nodes: Array<Booking>
  pageInfo: Pagination
}

export type BookingFiltersInput = {
  and: InputMaybe<Array<InputMaybe<BookingFiltersInput>>>
  bookingStatus: InputMaybe<StringFilterInput>
  carBrand: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  customerName: InputMaybe<StringFilterInput>
  documentId: InputMaybe<IdFilterInput>
  endDate: InputMaybe<DateTimeFilterInput>
  not: InputMaybe<BookingFiltersInput>
  or: InputMaybe<Array<InputMaybe<BookingFiltersInput>>>
  profile: InputMaybe<ProfileFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  service: InputMaybe<ServiceFiltersInput>
  startDate: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type BookingInput = {
  bookingStatus: InputMaybe<Enum_Booking_Bookingstatus>
  carBrand: InputMaybe<Scalars['String']['input']>
  customerName: InputMaybe<Scalars['String']['input']>
  endDate: InputMaybe<Scalars['DateTime']['input']>
  profile: InputMaybe<Scalars['ID']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  service: InputMaybe<Scalars['ID']['input']>
  startDate: InputMaybe<Scalars['DateTime']['input']>
}

export type BookingRelationResponseCollection = {
  __typename?: 'BookingRelationResponseCollection'
  nodes: Array<Booking>
}

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains: InputMaybe<Scalars['Boolean']['input']>
  containsi: InputMaybe<Scalars['Boolean']['input']>
  endsWith: InputMaybe<Scalars['Boolean']['input']>
  eq: InputMaybe<Scalars['Boolean']['input']>
  eqi: InputMaybe<Scalars['Boolean']['input']>
  gt: InputMaybe<Scalars['Boolean']['input']>
  gte: InputMaybe<Scalars['Boolean']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt: InputMaybe<Scalars['Boolean']['input']>
  lte: InputMaybe<Scalars['Boolean']['input']>
  ne: InputMaybe<Scalars['Boolean']['input']>
  nei: InputMaybe<Scalars['Boolean']['input']>
  not: InputMaybe<BooleanFilterInput>
  notContains: InputMaybe<Scalars['Boolean']['input']>
  notContainsi: InputMaybe<Scalars['Boolean']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith: InputMaybe<Scalars['Boolean']['input']>
}

export type Business = {
  __typename?: 'Business'
  address: Maybe<Scalars['String']['output']>
  approved: Maybe<Scalars['Boolean']['output']>
  certificate: Array<Maybe<UploadFile>>
  certificate_connection: Maybe<UploadFileRelationResponseCollection>
  city: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  description: Maybe<Scalars['String']['output']>
  documentId: Scalars['ID']['output']
  email: Maybe<Scalars['String']['output']>
  establishedYear: Maybe<Scalars['Int']['output']>
  feed_backs: Array<Maybe<FeedBack>>
  feed_backs_connection: Maybe<FeedBackRelationResponseCollection>
  license: Maybe<Scalars['String']['output']>
  licenseImage: Maybe<UploadFile>
  name: Maybe<Scalars['String']['output']>
  payment: Maybe<Enum_Business_Payment>
  phNumber: Maybe<Scalars['String']['output']>
  photos: Array<Maybe<UploadFile>>
  photos_connection: Maybe<UploadFileRelationResponseCollection>
  policyNumber: Maybe<Scalars['String']['output']>
  profile: Maybe<Profile>
  profileImage: Maybe<UploadFile>
  promotions: Array<Maybe<Promotion>>
  promotions_connection: Maybe<PromotionRelationResponseCollection>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  registerId: Maybe<Scalars['String']['output']>
  requests: Array<Maybe<Request>>
  requests_connection: Maybe<RequestRelationResponseCollection>
  services: Array<Maybe<Service>>
  services_connection: Maybe<ServiceRelationResponseCollection>
  state: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  website: Maybe<Scalars['String']['output']>
  zipCode: Maybe<Scalars['String']['output']>
}

export type BusinessCertificateArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessCertificate_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessFeed_BacksArgs = {
  filters: InputMaybe<FeedBackFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessFeed_Backs_ConnectionArgs = {
  filters: InputMaybe<FeedBackFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessPhotosArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessPhotos_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessPromotionsArgs = {
  filters: InputMaybe<PromotionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessPromotions_ConnectionArgs = {
  filters: InputMaybe<PromotionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessRequestsArgs = {
  filters: InputMaybe<RequestFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessRequests_ConnectionArgs = {
  filters: InputMaybe<RequestFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessServicesArgs = {
  filters: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessServices_ConnectionArgs = {
  filters: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type BusinessEntityResponseCollection = {
  __typename?: 'BusinessEntityResponseCollection'
  nodes: Array<Business>
  pageInfo: Pagination
}

export type BusinessFiltersInput = {
  address: InputMaybe<StringFilterInput>
  and: InputMaybe<Array<InputMaybe<BusinessFiltersInput>>>
  approved: InputMaybe<BooleanFilterInput>
  city: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  description: InputMaybe<StringFilterInput>
  documentId: InputMaybe<IdFilterInput>
  email: InputMaybe<StringFilterInput>
  establishedYear: InputMaybe<IntFilterInput>
  feed_backs: InputMaybe<FeedBackFiltersInput>
  license: InputMaybe<StringFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<BusinessFiltersInput>
  or: InputMaybe<Array<InputMaybe<BusinessFiltersInput>>>
  payment: InputMaybe<StringFilterInput>
  phNumber: InputMaybe<StringFilterInput>
  policyNumber: InputMaybe<StringFilterInput>
  profile: InputMaybe<ProfileFiltersInput>
  promotions: InputMaybe<PromotionFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  registerId: InputMaybe<StringFilterInput>
  requests: InputMaybe<RequestFiltersInput>
  services: InputMaybe<ServiceFiltersInput>
  state: InputMaybe<StringFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  website: InputMaybe<StringFilterInput>
  zipCode: InputMaybe<StringFilterInput>
}

export type BusinessInput = {
  address: InputMaybe<Scalars['String']['input']>
  approved: InputMaybe<Scalars['Boolean']['input']>
  certificate: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  city: InputMaybe<Scalars['String']['input']>
  description: InputMaybe<Scalars['String']['input']>
  email: InputMaybe<Scalars['String']['input']>
  establishedYear: InputMaybe<Scalars['Int']['input']>
  feed_backs: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  license: InputMaybe<Scalars['String']['input']>
  licenseImage: InputMaybe<Scalars['ID']['input']>
  name: InputMaybe<Scalars['String']['input']>
  payment: InputMaybe<Enum_Business_Payment>
  phNumber: InputMaybe<Scalars['String']['input']>
  photos: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  policyNumber: InputMaybe<Scalars['String']['input']>
  profile: InputMaybe<Scalars['ID']['input']>
  profileImage: InputMaybe<Scalars['ID']['input']>
  promotions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  registerId: InputMaybe<Scalars['String']['input']>
  requests: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  services: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  state: InputMaybe<Scalars['String']['input']>
  website: InputMaybe<Scalars['String']['input']>
  zipCode: InputMaybe<Scalars['String']['input']>
}

export type ComponentPackagePricingPackage = {
  __typename?: 'ComponentPackagePricingPackage'
  duration: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  price: Maybe<Scalars['Int']['output']>
  tax: Maybe<Scalars['String']['output']>
  totalPrice: Maybe<Scalars['Float']['output']>
  vehicleType: Maybe<Enum_Componentpackagepricingpackage_Vehicletype>
}

export type ComponentPackagePricingPackageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentPackagePricingPackageFiltersInput>>>
  duration: InputMaybe<StringFilterInput>
  not: InputMaybe<ComponentPackagePricingPackageFiltersInput>
  or: InputMaybe<Array<InputMaybe<ComponentPackagePricingPackageFiltersInput>>>
  price: InputMaybe<IntFilterInput>
  tax: InputMaybe<StringFilterInput>
  totalPrice: InputMaybe<FloatFilterInput>
  vehicleType: InputMaybe<StringFilterInput>
}

export type ComponentPackagePricingPackageInput = {
  duration: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['ID']['input']>
  price: InputMaybe<Scalars['Int']['input']>
  tax: InputMaybe<Scalars['String']['input']>
  totalPrice: InputMaybe<Scalars['Float']['input']>
  vehicleType: InputMaybe<Enum_Componentpackagepricingpackage_Vehicletype>
}

export type ComponentServicePricingPricing = {
  __typename?: 'ComponentServicePricingPricing'
  distanceRate: Maybe<Scalars['String']['output']>
  duration: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  price: Maybe<Scalars['Int']['output']>
  tax: Maybe<Scalars['String']['output']>
  vehicle_types: Array<Maybe<VehicleType>>
  vehicle_types_connection: Maybe<VehicleTypeRelationResponseCollection>
}

export type ComponentServicePricingPricingVehicle_TypesArgs = {
  filters: InputMaybe<VehicleTypeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentServicePricingPricingVehicle_Types_ConnectionArgs = {
  filters: InputMaybe<VehicleTypeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentServicePricingPricingFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentServicePricingPricingFiltersInput>>>
  distanceRate: InputMaybe<StringFilterInput>
  duration: InputMaybe<StringFilterInput>
  not: InputMaybe<ComponentServicePricingPricingFiltersInput>
  or: InputMaybe<Array<InputMaybe<ComponentServicePricingPricingFiltersInput>>>
  price: InputMaybe<IntFilterInput>
  tax: InputMaybe<StringFilterInput>
  vehicle_types: InputMaybe<VehicleTypeFiltersInput>
}

export type ComponentServicePricingPricingInput = {
  distanceRate: InputMaybe<Scalars['String']['input']>
  duration: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['ID']['input']>
  price: InputMaybe<Scalars['Int']['input']>
  tax: InputMaybe<Scalars['String']['input']>
  vehicle_types: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type ComponentSharedMedia = {
  __typename?: 'ComponentSharedMedia'
  file: Maybe<UploadFile>
  id: Scalars['ID']['output']
}

export type ComponentSharedQuote = {
  __typename?: 'ComponentSharedQuote'
  body: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  title: Maybe<Scalars['String']['output']>
}

export type ComponentSharedRichText = {
  __typename?: 'ComponentSharedRichText'
  body: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo'
  id: Scalars['ID']['output']
  metaDescription: Scalars['String']['output']
  metaTitle: Scalars['String']['output']
  shareImage: Maybe<UploadFile>
}

export type ComponentSharedSeoInput = {
  id: InputMaybe<Scalars['ID']['input']>
  metaDescription: InputMaybe<Scalars['String']['input']>
  metaTitle: InputMaybe<Scalars['String']['input']>
  shareImage: InputMaybe<Scalars['ID']['input']>
}

export type ComponentSharedSlider = {
  __typename?: 'ComponentSharedSlider'
  files: Array<Maybe<UploadFile>>
  files_connection: Maybe<UploadFileRelationResponseCollection>
  id: Scalars['ID']['output']
}

export type ComponentSharedSliderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentSharedSliderFiles_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentVehicleVehicle = {
  __typename?: 'ComponentVehicleVehicle'
  active: Maybe<Scalars['Boolean']['output']>
  fuelType: Maybe<Enum_Componentvehiclevehicle_Fueltype>
  id: Scalars['ID']['output']
  licensePlate: Maybe<Scalars['String']['output']>
  vehicle_brand: Maybe<VehicleBrand>
  vehicle_model: Maybe<VehicleModel>
  vehicle_type: Maybe<VehicleType>
  year: Maybe<Scalars['String']['output']>
}

export type ComponentVehicleVehicleFiltersInput = {
  active: InputMaybe<BooleanFilterInput>
  and: InputMaybe<Array<InputMaybe<ComponentVehicleVehicleFiltersInput>>>
  fuelType: InputMaybe<StringFilterInput>
  licensePlate: InputMaybe<StringFilterInput>
  not: InputMaybe<ComponentVehicleVehicleFiltersInput>
  or: InputMaybe<Array<InputMaybe<ComponentVehicleVehicleFiltersInput>>>
  vehicle_brand: InputMaybe<VehicleBrandFiltersInput>
  vehicle_model: InputMaybe<VehicleModelFiltersInput>
  vehicle_type: InputMaybe<VehicleTypeFiltersInput>
  year: InputMaybe<StringFilterInput>
}

export type ComponentVehicleVehicleInput = {
  active: InputMaybe<Scalars['Boolean']['input']>
  fuelType: InputMaybe<Enum_Componentvehiclevehicle_Fueltype>
  id: InputMaybe<Scalars['ID']['input']>
  licensePlate: InputMaybe<Scalars['String']['input']>
  vehicle_brand: InputMaybe<Scalars['ID']['input']>
  vehicle_model: InputMaybe<Scalars['ID']['input']>
  vehicle_type: InputMaybe<Scalars['ID']['input']>
  year: InputMaybe<Scalars['String']['input']>
}

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains: InputMaybe<Scalars['DateTime']['input']>
  containsi: InputMaybe<Scalars['DateTime']['input']>
  endsWith: InputMaybe<Scalars['DateTime']['input']>
  eq: InputMaybe<Scalars['DateTime']['input']>
  eqi: InputMaybe<Scalars['DateTime']['input']>
  gt: InputMaybe<Scalars['DateTime']['input']>
  gte: InputMaybe<Scalars['DateTime']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt: InputMaybe<Scalars['DateTime']['input']>
  lte: InputMaybe<Scalars['DateTime']['input']>
  ne: InputMaybe<Scalars['DateTime']['input']>
  nei: InputMaybe<Scalars['DateTime']['input']>
  not: InputMaybe<DateTimeFilterInput>
  notContains: InputMaybe<Scalars['DateTime']['input']>
  notContainsi: InputMaybe<Scalars['DateTime']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith: InputMaybe<Scalars['DateTime']['input']>
}

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse'
  documentId: Scalars['ID']['output']
}

export enum Enum_Booking_Bookingstatus {
  Completed = 'Completed',
  InProgress = 'In_Progress',
  Pending = 'Pending',
}

export enum Enum_Business_Payment {
  Paypal = 'Paypal',
  Stripe = 'Stripe',
}

export enum Enum_Componentpackagepricingpackage_Vehicletype {
  CargoTruck = 'Cargo_Truck',
  CompactSuv = 'Compact_SUV',
  HeavyEquipment = 'Heavy_Equipment',
  MidsizeCar = 'Midsize_Car',
  Minibus = 'Minibus',
  Minivan = 'Minivan',
  PickupTruck = 'Pickup_Truck',
  StandardBus = 'Standard_Bus',
  StandardCar = 'Standard_Car',
  Truck = 'Truck',
}

export enum Enum_Componentvehiclevehicle_Fueltype {
  Disel = 'disel',
  Fuel = 'fuel',
  Gas = 'gas',
}

export enum Enum_Promotion_Discounttype {
  FixedDiscount = 'Fixed_Discount',
  Percentage = 'Percentage',
}

export enum Enum_Request_Requeststatus {
  Accept = 'Accept',
  Complete = 'Complete',
  Pending = 'Pending',
  Reject = 'Reject',
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']['output']
  message: Maybe<Scalars['String']['output']>
}

export type FeedBack = {
  __typename?: 'FeedBack'
  business: Maybe<Business>
  createdAt: Maybe<Scalars['DateTime']['output']>
  customerName: Maybe<Scalars['String']['output']>
  date: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  feedBack: Maybe<Scalars['String']['output']>
  profile: Maybe<Profile>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  rating: Maybe<Scalars['Int']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type FeedBackEntityResponseCollection = {
  __typename?: 'FeedBackEntityResponseCollection'
  nodes: Array<FeedBack>
  pageInfo: Pagination
}

export type FeedBackFiltersInput = {
  and: InputMaybe<Array<InputMaybe<FeedBackFiltersInput>>>
  business: InputMaybe<BusinessFiltersInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  customerName: InputMaybe<StringFilterInput>
  date: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  feedBack: InputMaybe<StringFilterInput>
  not: InputMaybe<FeedBackFiltersInput>
  or: InputMaybe<Array<InputMaybe<FeedBackFiltersInput>>>
  profile: InputMaybe<ProfileFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  rating: InputMaybe<IntFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type FeedBackInput = {
  business: InputMaybe<Scalars['ID']['input']>
  customerName: InputMaybe<Scalars['String']['input']>
  date: InputMaybe<Scalars['DateTime']['input']>
  feedBack: InputMaybe<Scalars['String']['input']>
  profile: InputMaybe<Scalars['ID']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  rating: InputMaybe<Scalars['Int']['input']>
}

export type FeedBackRelationResponseCollection = {
  __typename?: 'FeedBackRelationResponseCollection'
  nodes: Array<FeedBack>
}

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>
  caption: InputMaybe<Scalars['String']['input']>
  name: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains: InputMaybe<Scalars['Float']['input']>
  containsi: InputMaybe<Scalars['Float']['input']>
  endsWith: InputMaybe<Scalars['Float']['input']>
  eq: InputMaybe<Scalars['Float']['input']>
  eqi: InputMaybe<Scalars['Float']['input']>
  gt: InputMaybe<Scalars['Float']['input']>
  gte: InputMaybe<Scalars['Float']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt: InputMaybe<Scalars['Float']['input']>
  lte: InputMaybe<Scalars['Float']['input']>
  ne: InputMaybe<Scalars['Float']['input']>
  nei: InputMaybe<Scalars['Float']['input']>
  not: InputMaybe<FloatFilterInput>
  notContains: InputMaybe<Scalars['Float']['input']>
  notContainsi: InputMaybe<Scalars['Float']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith: InputMaybe<Scalars['Float']['input']>
}

export type GenericMorph =
  | About
  | Author
  | BankAccount
  | Booking
  | Business
  | ComponentPackagePricingPackage
  | ComponentServicePricingPricing
  | ComponentSharedMedia
  | ComponentSharedQuote
  | ComponentSharedRichText
  | ComponentSharedSeo
  | ComponentSharedSlider
  | ComponentVehicleVehicle
  | FeedBack
  | Global
  | I18NLocale
  | Package
  | Profile
  | Promotion
  | Request
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | Service
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | VehicleBrand
  | VehicleModel
  | VehicleType

export type Global = {
  __typename?: 'Global'
  createdAt: Maybe<Scalars['DateTime']['output']>
  defaultSeo: Maybe<ComponentSharedSeo>
  documentId: Scalars['ID']['output']
  favicon: Maybe<UploadFile>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  siteDescription: Scalars['String']['output']
  siteName: Scalars['String']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type GlobalInput = {
  defaultSeo: InputMaybe<ComponentSharedSeoInput>
  favicon: InputMaybe<Scalars['ID']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  siteDescription: InputMaybe<Scalars['String']['input']>
  siteName: InputMaybe<Scalars['String']['input']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  nodes: Array<I18NLocale>
  pageInfo: Pagination
}

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<I18NLocaleFiltersInput>
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains: InputMaybe<Scalars['ID']['input']>
  containsi: InputMaybe<Scalars['ID']['input']>
  endsWith: InputMaybe<Scalars['ID']['input']>
  eq: InputMaybe<Scalars['ID']['input']>
  eqi: InputMaybe<Scalars['ID']['input']>
  gt: InputMaybe<Scalars['ID']['input']>
  gte: InputMaybe<Scalars['ID']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt: InputMaybe<Scalars['ID']['input']>
  lte: InputMaybe<Scalars['ID']['input']>
  ne: InputMaybe<Scalars['ID']['input']>
  nei: InputMaybe<Scalars['ID']['input']>
  not: InputMaybe<IdFilterInput>
  notContains: InputMaybe<Scalars['ID']['input']>
  notContainsi: InputMaybe<Scalars['ID']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains: InputMaybe<Scalars['Int']['input']>
  containsi: InputMaybe<Scalars['Int']['input']>
  endsWith: InputMaybe<Scalars['Int']['input']>
  eq: InputMaybe<Scalars['Int']['input']>
  eqi: InputMaybe<Scalars['Int']['input']>
  gt: InputMaybe<Scalars['Int']['input']>
  gte: InputMaybe<Scalars['Int']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt: InputMaybe<Scalars['Int']['input']>
  lte: InputMaybe<Scalars['Int']['input']>
  ne: InputMaybe<Scalars['Int']['input']>
  nei: InputMaybe<Scalars['Int']['input']>
  not: InputMaybe<IntFilterInput>
  notContains: InputMaybe<Scalars['Int']['input']>
  notContainsi: InputMaybe<Scalars['Int']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith: InputMaybe<Scalars['Int']['input']>
}

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains: InputMaybe<Scalars['JSON']['input']>
  containsi: InputMaybe<Scalars['JSON']['input']>
  endsWith: InputMaybe<Scalars['JSON']['input']>
  eq: InputMaybe<Scalars['JSON']['input']>
  eqi: InputMaybe<Scalars['JSON']['input']>
  gt: InputMaybe<Scalars['JSON']['input']>
  gte: InputMaybe<Scalars['JSON']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt: InputMaybe<Scalars['JSON']['input']>
  lte: InputMaybe<Scalars['JSON']['input']>
  ne: InputMaybe<Scalars['JSON']['input']>
  nei: InputMaybe<Scalars['JSON']['input']>
  not: InputMaybe<JsonFilterInput>
  notContains: InputMaybe<Scalars['JSON']['input']>
  notContainsi: InputMaybe<Scalars['JSON']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith: InputMaybe<Scalars['JSON']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>
  createAuthor: Maybe<Author>
  createBankAccount: Maybe<BankAccount>
  createBooking: Maybe<Booking>
  createBusiness: Maybe<Business>
  createFeedBack: Maybe<FeedBack>
  createPackage: Maybe<Package>
  createProfile: Maybe<Profile>
  createPromotion: Maybe<Promotion>
  createRequest: Maybe<Request>
  createReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>
  createReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>
  createService: Maybe<Service>
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  createVehicleBrand: Maybe<VehicleBrand>
  createVehicleModel: Maybe<VehicleModel>
  createVehicleType: Maybe<VehicleType>
  deleteAbout: Maybe<DeleteMutationResponse>
  deleteAuthor: Maybe<DeleteMutationResponse>
  deleteBankAccount: Maybe<DeleteMutationResponse>
  deleteBooking: Maybe<DeleteMutationResponse>
  deleteBusiness: Maybe<DeleteMutationResponse>
  deleteFeedBack: Maybe<DeleteMutationResponse>
  deleteGlobal: Maybe<DeleteMutationResponse>
  deletePackage: Maybe<DeleteMutationResponse>
  deleteProfile: Maybe<DeleteMutationResponse>
  deletePromotion: Maybe<DeleteMutationResponse>
  deleteRequest: Maybe<DeleteMutationResponse>
  deleteReviewWorkflowsWorkflow: Maybe<DeleteMutationResponse>
  deleteReviewWorkflowsWorkflowStage: Maybe<DeleteMutationResponse>
  deleteService: Maybe<DeleteMutationResponse>
  deleteUploadFile: Maybe<UploadFile>
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteVehicleBrand: Maybe<DeleteMutationResponse>
  deleteVehicleModel: Maybe<DeleteMutationResponse>
  deleteVehicleType: Maybe<DeleteMutationResponse>
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  /** Register a user */
  register: UsersPermissionsLoginPayload
  resendForgotPasswordOtp: Scalars['JSON']['output']
  resendOtp: Scalars['JSON']['output']
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>
  updateAbout: Maybe<About>
  updateAuthor: Maybe<Author>
  updateBankAccount: Maybe<BankAccount>
  updateBooking: Maybe<Booking>
  updateBusiness: Maybe<Business>
  updateFeedBack: Maybe<FeedBack>
  updateGlobal: Maybe<Global>
  updatePackage: Maybe<Package>
  updateProfile: Maybe<Profile>
  updatePromotion: Maybe<Promotion>
  updateRequest: Maybe<Request>
  updateReviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>
  updateReviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>
  updateService: Maybe<Service>
  updateUploadFile: UploadFile
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  updateVehicleBrand: Maybe<VehicleBrand>
  updateVehicleModel: Maybe<VehicleModel>
  updateVehicleType: Maybe<VehicleType>
  verifyOtp: Scalars['JSON']['output']
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationCreateAuthorArgs = {
  data: AuthorInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateBankAccountArgs = {
  data: BankAccountInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateBookingArgs = {
  data: BookingInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateBusinessArgs = {
  data: BusinessInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateFeedBackArgs = {
  data: FeedBackInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreatePackageArgs = {
  data: PackageInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateProfileArgs = {
  data: ProfileInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreatePromotionArgs = {
  data: PromotionInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateRequestArgs = {
  data: RequestInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateServiceArgs = {
  data: ServiceInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationCreateVehicleBrandArgs = {
  data: VehicleBrandInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateVehicleModelArgs = {
  data: VehicleModelInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationCreateVehicleTypeArgs = {
  data: VehicleTypeInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationDeleteAuthorArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteBankAccountArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteBookingArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteBusinessArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteFeedBackArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeletePackageArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteProfileArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeletePromotionArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteRequestArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteServiceArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteVehicleBrandArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteVehicleModelArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationDeleteVehicleTypeArgs = {
  documentId: Scalars['ID']['input']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationResendForgotPasswordOtpArgs = {
  input: ResendForgotPasswordOtpInput
}

export type MutationResendOtpArgs = {
  input: ResendOtpInput
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationUpdateAboutArgs = {
  data: AboutInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateAuthorArgs = {
  data: AuthorInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateBankAccountArgs = {
  data: BankAccountInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateBookingArgs = {
  data: BookingInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateBusinessArgs = {
  data: BusinessInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateFeedBackArgs = {
  data: FeedBackInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateGlobalArgs = {
  data: GlobalInput
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdatePackageArgs = {
  data: PackageInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateProfileArgs = {
  data: ProfileInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdatePromotionArgs = {
  data: PromotionInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateRequestArgs = {
  data: RequestInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateServiceArgs = {
  data: ServiceInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input']
  info: InputMaybe<FileInfoInput>
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationUpdateVehicleBrandArgs = {
  data: VehicleBrandInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateVehicleModelArgs = {
  data: VehicleModelInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationUpdateVehicleTypeArgs = {
  data: VehicleTypeInput
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput
}

export type Package = {
  __typename?: 'Package'
  createdAt: Maybe<Scalars['DateTime']['output']>
  deal: Maybe<Array<Maybe<ComponentPackagePricingPackage>>>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  services: Array<Maybe<Service>>
  services_connection: Maybe<ServiceRelationResponseCollection>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type PackageDealArgs = {
  filters: InputMaybe<ComponentPackagePricingPackageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PackageServicesArgs = {
  filters: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PackageServices_ConnectionArgs = {
  filters: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PackageEntityResponseCollection = {
  __typename?: 'PackageEntityResponseCollection'
  nodes: Array<Package>
  pageInfo: Pagination
}

export type PackageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<PackageFiltersInput>>>
  createdAt: InputMaybe<DateTimeFilterInput>
  deal: InputMaybe<ComponentPackagePricingPackageFiltersInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<PackageFiltersInput>
  or: InputMaybe<Array<InputMaybe<PackageFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  services: InputMaybe<ServiceFiltersInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type PackageInput = {
  deal: InputMaybe<Array<InputMaybe<ComponentPackagePricingPackageInput>>>
  name: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  services: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>
  page: InputMaybe<Scalars['Int']['input']>
  pageSize: InputMaybe<Scalars['Int']['input']>
  start: InputMaybe<Scalars['Int']['input']>
}

export type Profile = {
  __typename?: 'Profile'
  bookings: Array<Maybe<Booking>>
  bookings_connection: Maybe<BookingRelationResponseCollection>
  business: Maybe<Business>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  feed_backs: Array<Maybe<FeedBack>>
  feed_backs_connection: Maybe<FeedBackRelationResponseCollection>
  name: Maybe<Scalars['String']['output']>
  phNumber: Maybe<Scalars['String']['output']>
  profilePicture: Array<Maybe<UploadFile>>
  profilePicture_connection: Maybe<UploadFileRelationResponseCollection>
  promotions: Array<Maybe<Promotion>>
  promotions_connection: Maybe<PromotionRelationResponseCollection>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  users_permissions_user: Maybe<UsersPermissionsUser>
  vehicle: Maybe<Array<Maybe<ComponentVehicleVehicle>>>
}

export type ProfileBookingsArgs = {
  filters: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileBookings_ConnectionArgs = {
  filters: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileFeed_BacksArgs = {
  filters: InputMaybe<FeedBackFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileFeed_Backs_ConnectionArgs = {
  filters: InputMaybe<FeedBackFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileProfilePictureArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileProfilePicture_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfilePromotionsArgs = {
  filters: InputMaybe<PromotionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfilePromotions_ConnectionArgs = {
  filters: InputMaybe<PromotionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileVehicleArgs = {
  filters: InputMaybe<ComponentVehicleVehicleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileEntityResponseCollection = {
  __typename?: 'ProfileEntityResponseCollection'
  nodes: Array<Profile>
  pageInfo: Pagination
}

export type ProfileFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ProfileFiltersInput>>>
  bookings: InputMaybe<BookingFiltersInput>
  business: InputMaybe<BusinessFiltersInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  feed_backs: InputMaybe<FeedBackFiltersInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<ProfileFiltersInput>
  or: InputMaybe<Array<InputMaybe<ProfileFiltersInput>>>
  phNumber: InputMaybe<StringFilterInput>
  promotions: InputMaybe<PromotionFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  users_permissions_user: InputMaybe<UsersPermissionsUserFiltersInput>
  vehicle: InputMaybe<ComponentVehicleVehicleFiltersInput>
}

export type ProfileInput = {
  bookings: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  business: InputMaybe<Scalars['ID']['input']>
  feed_backs: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name: InputMaybe<Scalars['String']['input']>
  phNumber: InputMaybe<Scalars['String']['input']>
  profilePicture: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  promotions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  users_permissions_user: InputMaybe<Scalars['ID']['input']>
  vehicle: InputMaybe<Array<InputMaybe<ComponentVehicleVehicleInput>>>
}

export type Promotion = {
  __typename?: 'Promotion'
  business: Maybe<Business>
  code: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  description: Maybe<Scalars['String']['output']>
  discount: Maybe<Scalars['String']['output']>
  discountStatus: Maybe<Scalars['Boolean']['output']>
  discountType: Maybe<Enum_Promotion_Discounttype>
  documentId: Scalars['ID']['output']
  endDate: Maybe<Scalars['DateTime']['output']>
  minValue: Maybe<Scalars['Int']['output']>
  name: Maybe<Scalars['String']['output']>
  profile: Maybe<Profile>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  startDate: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  usageLimit: Maybe<Scalars['Int']['output']>
}

export type PromotionEntityResponseCollection = {
  __typename?: 'PromotionEntityResponseCollection'
  nodes: Array<Promotion>
  pageInfo: Pagination
}

export type PromotionFiltersInput = {
  and: InputMaybe<Array<InputMaybe<PromotionFiltersInput>>>
  business: InputMaybe<BusinessFiltersInput>
  code: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  description: InputMaybe<StringFilterInput>
  discount: InputMaybe<StringFilterInput>
  discountStatus: InputMaybe<BooleanFilterInput>
  discountType: InputMaybe<StringFilterInput>
  documentId: InputMaybe<IdFilterInput>
  endDate: InputMaybe<DateTimeFilterInput>
  minValue: InputMaybe<IntFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<PromotionFiltersInput>
  or: InputMaybe<Array<InputMaybe<PromotionFiltersInput>>>
  profile: InputMaybe<ProfileFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  startDate: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  usageLimit: InputMaybe<IntFilterInput>
}

export type PromotionInput = {
  business: InputMaybe<Scalars['ID']['input']>
  code: InputMaybe<Scalars['String']['input']>
  description: InputMaybe<Scalars['String']['input']>
  discount: InputMaybe<Scalars['String']['input']>
  discountStatus: InputMaybe<Scalars['Boolean']['input']>
  discountType: InputMaybe<Enum_Promotion_Discounttype>
  endDate: InputMaybe<Scalars['DateTime']['input']>
  minValue: InputMaybe<Scalars['Int']['input']>
  name: InputMaybe<Scalars['String']['input']>
  profile: InputMaybe<Scalars['ID']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  startDate: InputMaybe<Scalars['DateTime']['input']>
  usageLimit: InputMaybe<Scalars['Int']['input']>
}

export type PromotionRelationResponseCollection = {
  __typename?: 'PromotionRelationResponseCollection'
  nodes: Array<Promotion>
}

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type Query = {
  __typename?: 'Query'
  about: Maybe<About>
  author: Maybe<Author>
  authors: Array<Maybe<Author>>
  authors_connection: Maybe<AuthorEntityResponseCollection>
  bankAccount: Maybe<BankAccount>
  bankAccounts: Array<Maybe<BankAccount>>
  bankAccounts_connection: Maybe<BankAccountEntityResponseCollection>
  booking: Maybe<Booking>
  bookings: Array<Maybe<Booking>>
  bookings_connection: Maybe<BookingEntityResponseCollection>
  business: Maybe<Business>
  businesses: Array<Maybe<Business>>
  businesses_connection: Maybe<BusinessEntityResponseCollection>
  feedBack: Maybe<FeedBack>
  feedBacks: Array<Maybe<FeedBack>>
  feedBacks_connection: Maybe<FeedBackEntityResponseCollection>
  global: Maybe<Global>
  i18NLocale: Maybe<I18NLocale>
  i18NLocales: Array<Maybe<I18NLocale>>
  i18NLocales_connection: Maybe<I18NLocaleEntityResponseCollection>
  me: Maybe<UsersPermissionsMe>
  package: Maybe<Package>
  packages: Array<Maybe<Package>>
  packages_connection: Maybe<PackageEntityResponseCollection>
  profile: Maybe<Profile>
  profiles: Array<Maybe<Profile>>
  profiles_connection: Maybe<ProfileEntityResponseCollection>
  promotion: Maybe<Promotion>
  promotions: Array<Maybe<Promotion>>
  promotions_connection: Maybe<PromotionEntityResponseCollection>
  request: Maybe<Request>
  requests: Array<Maybe<Request>>
  requests_connection: Maybe<RequestEntityResponseCollection>
  reviewWorkflowsWorkflow: Maybe<ReviewWorkflowsWorkflow>
  reviewWorkflowsWorkflowStage: Maybe<ReviewWorkflowsWorkflowStage>
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>
  reviewWorkflowsWorkflowStages_connection: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>
  reviewWorkflowsWorkflows_connection: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>
  service: Maybe<Service>
  services: Array<Maybe<Service>>
  services_connection: Maybe<ServiceEntityResponseCollection>
  uploadFile: Maybe<UploadFile>
  uploadFiles: Array<Maybe<UploadFile>>
  uploadFiles_connection: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole: Maybe<UsersPermissionsRole>
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>
  usersPermissionsRoles_connection: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser: Maybe<UsersPermissionsUser>
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>
  usersPermissionsUsers_connection: Maybe<UsersPermissionsUserEntityResponseCollection>
  vehicleBrand: Maybe<VehicleBrand>
  vehicleBrands: Array<Maybe<VehicleBrand>>
  vehicleBrands_connection: Maybe<VehicleBrandEntityResponseCollection>
  vehicleModel: Maybe<VehicleModel>
  vehicleModels: Array<Maybe<VehicleModel>>
  vehicleModels_connection: Maybe<VehicleModelEntityResponseCollection>
  vehicleType: Maybe<VehicleType>
  vehicleTypes: Array<Maybe<VehicleType>>
  vehicleTypes_connection: Maybe<VehicleTypeEntityResponseCollection>
}

export type QueryAboutArgs = {
  status?: InputMaybe<PublicationStatus>
}

export type QueryAuthorArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryAuthorsArgs = {
  filters: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryAuthors_ConnectionArgs = {
  filters: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryBankAccountArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryBankAccountsArgs = {
  filters: InputMaybe<BankAccountFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryBankAccounts_ConnectionArgs = {
  filters: InputMaybe<BankAccountFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryBookingArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryBookingsArgs = {
  filters: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryBookings_ConnectionArgs = {
  filters: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryBusinessArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryBusinessesArgs = {
  filters: InputMaybe<BusinessFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryBusinesses_ConnectionArgs = {
  filters: InputMaybe<BusinessFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryFeedBackArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryFeedBacksArgs = {
  filters: InputMaybe<FeedBackFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryFeedBacks_ConnectionArgs = {
  filters: InputMaybe<FeedBackFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryGlobalArgs = {
  status?: InputMaybe<PublicationStatus>
}

export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryI18NLocales_ConnectionArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryPackageArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryPackagesArgs = {
  filters: InputMaybe<PackageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryPackages_ConnectionArgs = {
  filters: InputMaybe<PackageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryProfileArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryProfilesArgs = {
  filters: InputMaybe<ProfileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryProfiles_ConnectionArgs = {
  filters: InputMaybe<ProfileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryPromotionArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryPromotionsArgs = {
  filters: InputMaybe<PromotionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryPromotions_ConnectionArgs = {
  filters: InputMaybe<PromotionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryRequestArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryRequestsArgs = {
  filters: InputMaybe<RequestFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryRequests_ConnectionArgs = {
  filters: InputMaybe<RequestFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflowsArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryServiceArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryServicesArgs = {
  filters: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryServices_ConnectionArgs = {
  filters: InputMaybe<ServiceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUploadFiles_ConnectionArgs = {
  filters: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleBrandArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleBrandsArgs = {
  filters: InputMaybe<VehicleBrandFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleBrands_ConnectionArgs = {
  filters: InputMaybe<VehicleBrandFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleModelArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleModelsArgs = {
  filters: InputMaybe<VehicleModelFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleModels_ConnectionArgs = {
  filters: InputMaybe<VehicleModelFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleTypeArgs = {
  documentId: Scalars['ID']['input']
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleTypesArgs = {
  filters: InputMaybe<VehicleTypeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type QueryVehicleTypes_ConnectionArgs = {
  filters: InputMaybe<VehicleTypeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  status?: InputMaybe<PublicationStatus>
}

export type Request = {
  __typename?: 'Request'
  business: Maybe<Business>
  createdAt: Maybe<Scalars['DateTime']['output']>
  customer: Maybe<UsersPermissionsUser>
  documentId: Scalars['ID']['output']
  driver: Maybe<UsersPermissionsUser>
  dropOffLocation: Maybe<Scalars['String']['output']>
  pickupLocation: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  remarks: Maybe<Scalars['String']['output']>
  requestStatus: Maybe<Enum_Request_Requeststatus>
  requestTime: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type RequestEntityResponseCollection = {
  __typename?: 'RequestEntityResponseCollection'
  nodes: Array<Request>
  pageInfo: Pagination
}

export type RequestFiltersInput = {
  and: InputMaybe<Array<InputMaybe<RequestFiltersInput>>>
  business: InputMaybe<BusinessFiltersInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  customer: InputMaybe<UsersPermissionsUserFiltersInput>
  documentId: InputMaybe<IdFilterInput>
  driver: InputMaybe<UsersPermissionsUserFiltersInput>
  dropOffLocation: InputMaybe<StringFilterInput>
  not: InputMaybe<RequestFiltersInput>
  or: InputMaybe<Array<InputMaybe<RequestFiltersInput>>>
  pickupLocation: InputMaybe<StringFilterInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  remarks: InputMaybe<StringFilterInput>
  requestStatus: InputMaybe<StringFilterInput>
  requestTime: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type RequestInput = {
  business: InputMaybe<Scalars['ID']['input']>
  customer: InputMaybe<Scalars['ID']['input']>
  driver: InputMaybe<Scalars['ID']['input']>
  dropOffLocation: InputMaybe<Scalars['String']['input']>
  pickupLocation: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  remarks: InputMaybe<Scalars['String']['input']>
  requestStatus: InputMaybe<Enum_Request_Requeststatus>
  requestTime: InputMaybe<Scalars['DateTime']['input']>
}

export type RequestRelationResponseCollection = {
  __typename?: 'RequestRelationResponseCollection'
  nodes: Array<Request>
}

export type ResendForgotPasswordOtpInput = {
  identifier: Scalars['String']['input']
}

export type ResendOtpInput = {
  identifier: Scalars['String']['input']
}

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow'
  contentTypes: Scalars['JSON']['output']
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Scalars['String']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  stageRequiredToPublish: Maybe<ReviewWorkflowsWorkflowStage>
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>
  stages_connection: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type ReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection'
  nodes: Array<ReviewWorkflowsWorkflow>
  pageInfo: Pagination
}

export type ReviewWorkflowsWorkflowFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>
  contentTypes: InputMaybe<JsonFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
  or: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  stageRequiredToPublish: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  stages: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type ReviewWorkflowsWorkflowInput = {
  contentTypes: InputMaybe<Scalars['JSON']['input']>
  name: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  stageRequiredToPublish: InputMaybe<Scalars['ID']['input']>
  stages: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage'
  color: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  workflow: Maybe<ReviewWorkflowsWorkflow>
}

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection'
  nodes: Array<ReviewWorkflowsWorkflowStage>
  pageInfo: Pagination
}

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>
  color: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>
  or: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  workflow: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>
}

export type ReviewWorkflowsWorkflowStageInput = {
  color: InputMaybe<Scalars['String']['input']>
  name: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  workflow: InputMaybe<Scalars['ID']['input']>
}

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection'
  nodes: Array<ReviewWorkflowsWorkflowStage>
}

export type Service = {
  __typename?: 'Service'
  bookings: Array<Maybe<Booking>>
  bookings_connection: Maybe<BookingRelationResponseCollection>
  business: Maybe<Business>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  package: Maybe<Package>
  pricing: Maybe<Array<Maybe<ComponentServicePricingPricing>>>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type ServiceBookingsArgs = {
  filters: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServiceBookings_ConnectionArgs = {
  filters: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServicePricingArgs = {
  filters: InputMaybe<ComponentServicePricingPricingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection'
  nodes: Array<Service>
  pageInfo: Pagination
}

export type ServiceFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>
  bookings: InputMaybe<BookingFiltersInput>
  business: InputMaybe<BusinessFiltersInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<ServiceFiltersInput>
  or: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>
  package: InputMaybe<PackageFiltersInput>
  pricing: InputMaybe<ComponentServicePricingPricingFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type ServiceInput = {
  bookings: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  business: InputMaybe<Scalars['ID']['input']>
  name: InputMaybe<Scalars['String']['input']>
  package: InputMaybe<Scalars['ID']['input']>
  pricing: InputMaybe<Array<InputMaybe<ComponentServicePricingPricingInput>>>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
}

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection'
  nodes: Array<Service>
}

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains: InputMaybe<Scalars['String']['input']>
  containsi: InputMaybe<Scalars['String']['input']>
  endsWith: InputMaybe<Scalars['String']['input']>
  eq: InputMaybe<Scalars['String']['input']>
  eqi: InputMaybe<Scalars['String']['input']>
  gt: InputMaybe<Scalars['String']['input']>
  gte: InputMaybe<Scalars['String']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt: InputMaybe<Scalars['String']['input']>
  lte: InputMaybe<Scalars['String']['input']>
  ne: InputMaybe<Scalars['String']['input']>
  nei: InputMaybe<Scalars['String']['input']>
  not: InputMaybe<StringFilterInput>
  notContains: InputMaybe<Scalars['String']['input']>
  notContainsi: InputMaybe<Scalars['String']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull: InputMaybe<Scalars['Boolean']['input']>
  null: InputMaybe<Scalars['Boolean']['input']>
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith: InputMaybe<Scalars['String']['input']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText: Maybe<Scalars['String']['output']>
  caption: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  ext: Maybe<Scalars['String']['output']>
  formats: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata: Maybe<Scalars['JSON']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  related: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  nodes: Array<UploadFile>
  pageInfo: Pagination
}

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  ext: InputMaybe<StringFilterInput>
  formats: InputMaybe<JsonFilterInput>
  hash: InputMaybe<StringFilterInput>
  height: InputMaybe<IntFilterInput>
  mime: InputMaybe<StringFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<UploadFileFiltersInput>
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl: InputMaybe<StringFilterInput>
  provider: InputMaybe<StringFilterInput>
  provider_metadata: InputMaybe<JsonFilterInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  size: InputMaybe<FloatFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  url: InputMaybe<StringFilterInput>
  width: InputMaybe<IntFilterInput>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  nodes: Array<UploadFile>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked: Maybe<Scalars['Boolean']['output']>
  confirmed: Maybe<Scalars['Boolean']['output']>
  documentId: Scalars['ID']['output']
  email: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  profile: Maybe<Scalars['JSON']['output']>
  role: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Maybe<Scalars['JSON']['output']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  role: Maybe<UsersPermissionsRole>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  role: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  nodes: Array<UsersPermissionsPermission>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  role: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt: Maybe<Scalars['DateTime']['output']>
  description: Maybe<Scalars['String']['output']>
  documentId: Scalars['ID']['output']
  name: Scalars['String']['output']
  permissions: Array<Maybe<UsersPermissionsPermission>>
  permissions_connection: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  type: Maybe<Scalars['String']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  users: Array<Maybe<UsersPermissionsUser>>
  users_connection: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  nodes: Array<UsersPermissionsRole>
  pageInfo: Pagination
}

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt: InputMaybe<DateTimeFilterInput>
  description: InputMaybe<StringFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<UsersPermissionsRoleFiltersInput>
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  type: InputMaybe<StringFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  users: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>
  name: InputMaybe<Scalars['String']['input']>
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  type: InputMaybe<Scalars['String']['input']>
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked: Maybe<Scalars['Boolean']['output']>
  confirmed: Maybe<Scalars['Boolean']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  email: Scalars['String']['output']
  profile: Maybe<Profile>
  provider: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  requests: Array<Maybe<Request>>
  requests_connection: Maybe<RequestRelationResponseCollection>
  role: Maybe<UsersPermissionsRole>
  updatedAt: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserRequestsArgs = {
  filters: InputMaybe<RequestFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsUserRequests_ConnectionArgs = {
  filters: InputMaybe<RequestFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data: Maybe<UsersPermissionsUser>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  nodes: Array<UsersPermissionsUser>
  pageInfo: Pagination
}

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked: InputMaybe<BooleanFilterInput>
  confirmed: InputMaybe<BooleanFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  email: InputMaybe<StringFilterInput>
  not: InputMaybe<UsersPermissionsUserFiltersInput>
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  profile: InputMaybe<ProfileFiltersInput>
  provider: InputMaybe<StringFilterInput>
  publishedAt: InputMaybe<DateTimeFilterInput>
  requests: InputMaybe<RequestFiltersInput>
  role: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
  username: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>
  confirmed: InputMaybe<Scalars['Boolean']['input']>
  email: InputMaybe<Scalars['String']['input']>
  password: InputMaybe<Scalars['String']['input']>
  profile: InputMaybe<Scalars['ID']['input']>
  provider: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
  requests: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  role: InputMaybe<Scalars['ID']['input']>
  username: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  nodes: Array<UsersPermissionsUser>
}

export type VehicleBrand = {
  __typename?: 'VehicleBrand'
  brand: Maybe<Scalars['String']['output']>
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type VehicleBrandEntityResponseCollection = {
  __typename?: 'VehicleBrandEntityResponseCollection'
  nodes: Array<VehicleBrand>
  pageInfo: Pagination
}

export type VehicleBrandFiltersInput = {
  and: InputMaybe<Array<InputMaybe<VehicleBrandFiltersInput>>>
  brand: InputMaybe<StringFilterInput>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  not: InputMaybe<VehicleBrandFiltersInput>
  or: InputMaybe<Array<InputMaybe<VehicleBrandFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type VehicleBrandInput = {
  brand: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
}

export type VehicleModel = {
  __typename?: 'VehicleModel'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type VehicleModelEntityResponseCollection = {
  __typename?: 'VehicleModelEntityResponseCollection'
  nodes: Array<VehicleModel>
  pageInfo: Pagination
}

export type VehicleModelFiltersInput = {
  and: InputMaybe<Array<InputMaybe<VehicleModelFiltersInput>>>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<VehicleModelFiltersInput>
  or: InputMaybe<Array<InputMaybe<VehicleModelFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type VehicleModelInput = {
  name: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
}

export type VehicleType = {
  __typename?: 'VehicleType'
  createdAt: Maybe<Scalars['DateTime']['output']>
  documentId: Scalars['ID']['output']
  name: Maybe<Scalars['String']['output']>
  publishedAt: Maybe<Scalars['DateTime']['output']>
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type VehicleTypeEntityResponseCollection = {
  __typename?: 'VehicleTypeEntityResponseCollection'
  nodes: Array<VehicleType>
  pageInfo: Pagination
}

export type VehicleTypeFiltersInput = {
  and: InputMaybe<Array<InputMaybe<VehicleTypeFiltersInput>>>
  createdAt: InputMaybe<DateTimeFilterInput>
  documentId: InputMaybe<IdFilterInput>
  name: InputMaybe<StringFilterInput>
  not: InputMaybe<VehicleTypeFiltersInput>
  or: InputMaybe<Array<InputMaybe<VehicleTypeFiltersInput>>>
  publishedAt: InputMaybe<DateTimeFilterInput>
  updatedAt: InputMaybe<DateTimeFilterInput>
}

export type VehicleTypeInput = {
  name: InputMaybe<Scalars['String']['input']>
  publishedAt: InputMaybe<Scalars['DateTime']['input']>
}

export type VehicleTypeRelationResponseCollection = {
  __typename?: 'VehicleTypeRelationResponseCollection'
  nodes: Array<VehicleType>
}

export type VerifyOtpInput = {
  identifier: Scalars['String']['input']
  otpCode: Scalars['String']['input']
}

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt: string | null
    user: {
      __typename?: 'UsersPermissionsMe'
      id: string
      username: string
      email: string | null
      documentId: string
      role: {
        __typename?: 'UsersPermissionsMeRole'
        id: string
        name: string
      } | null
    }
  }
}

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt: string | null
    user: {
      __typename?: 'UsersPermissionsMe'
      id: string
      documentId: string
      username: string
      email: string | null
      confirmed: boolean | null
      blocked: boolean | null
      profile: any | null
      role: {
        __typename?: 'UsersPermissionsMeRole'
        id: string
        name: string
      } | null
    }
  }
}

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input']
}>

export type ForgotPasswordMutation = {
  __typename?: 'Mutation'
  forgotPassword: {
    __typename?: 'UsersPermissionsPasswordPayload'
    ok: any | null
  } | null
}

export type ResendOtpMutationVariables = Exact<{
  input: ResendOtpInput
}>

export type ResendOtpMutation = { __typename?: 'Mutation'; resendOtp: any }

export type VerifyOtpMutationVariables = Exact<{
  input: VerifyOtpInput
}>

export type VerifyOtpMutation = { __typename?: 'Mutation'; verifyOtp: any }

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
  code: Scalars['String']['input']
}>

export type ResetPasswordMutation = {
  __typename?: 'Mutation'
  resetPassword: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt: string | null
  } | null
}

export const RegisterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Register' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UsersPermissionsRegisterInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jwt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'role' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'documentId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UsersPermissionsLoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jwt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'documentId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'confirmed' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'blocked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profile' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'role' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const ForgotPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ForgotPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'forgotPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>
export const ResendOtpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ResendOtp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ResendOTPInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resendOtp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResendOtpMutation, ResendOtpMutationVariables>
export const VerifyOtpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VerifyOtp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'VerifyOtpInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'verifyOtp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>
export const ResetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ResetPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'passwordConfirmation' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resetPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'passwordConfirmation' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'passwordConfirmation' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'code' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'code' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jwt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>
