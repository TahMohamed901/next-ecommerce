
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Address = {
  firstname: string;
  lastname: string;
  phone: string;
  country: string;
  city: string;
  address1: string;
  address2?: string;
  postalcode: string;
}

type AddressState = {
  address: Address | null;
  setAddress: (data: Address) => void;
  clearAddress: () => void;
}

export const useAddressStore = create<AddressState>()(
  persist(
    (set) => ({
      address: null,
      setAddress: (data) => set({ address: data }),
      clearAddress: () => set({ address: null }),
    }),
    {
      name: 'checkout-address-storage',
    }
  )
)
