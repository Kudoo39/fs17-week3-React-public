export interface Brewery {
  id: string
  name: string
  brewery_type: string
  address_1: string
  phone: number
  website_url: string
}

export interface BreweryDetailType extends Brewery {
  city: string
  state_province: string
  postal_code: number
  country: string
  state: string
  street: string
}
