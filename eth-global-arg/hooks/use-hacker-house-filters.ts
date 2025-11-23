import { useState } from "react"

interface UseHackerHouseFiltersProps {
  initialCity?: string
}

interface FilterDates {
  tomorrow: string
  futureDate: string
}

function getInitialDates(): FilterDates {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + 6)

  return {
    tomorrow: tomorrow.toISOString().split("T")[0],
    futureDate: futureDate.toISOString().split("T")[0],
  }
}

export function useHackerHouseFilters({
  initialCity = "Buenos Aires",
}: UseHackerHouseFiltersProps = {}) {
  const initialDates = getInitialDates()

  // Temporary filter states (user edits)
  const [selectedCity, setSelectedCity] = useState<string>(initialCity)
  const [selectedBedrooms, setSelectedBedrooms] = useState<number>(1)
  const [checkInDate, setCheckInDate] = useState<string>(initialDates.tomorrow)
  const [checkOutDate, setCheckOutDate] = useState<string>(
    initialDates.futureDate
  )

  // Applied filter states (active filters)
  const [appliedCity, setAppliedCity] = useState<string>(initialCity)
  const [appliedBedrooms, setAppliedBedrooms] = useState<number>(1)
  const [appliedCheckInDate, setAppliedCheckInDate] = useState<string>(
    initialDates.tomorrow
  )
  const [appliedCheckOutDate, setAppliedCheckOutDate] = useState<string>(
    initialDates.futureDate
  )

  const incrementBedrooms = () => {
    setSelectedBedrooms((prev) => Math.min(prev + 1, 10))
  }

  const decrementBedrooms = () => {
    setSelectedBedrooms((prev) => Math.max(prev - 1, 1))
  }

  const applyFilters = () => {
    setAppliedCity(selectedCity)
    setAppliedBedrooms(selectedBedrooms)
    setAppliedCheckInDate(checkInDate)
    setAppliedCheckOutDate(checkOutDate)
  }

  const resetFilters = () => {
    const dates = getInitialDates()
    setSelectedCity(initialCity)
    setSelectedBedrooms(1)
    setCheckInDate(dates.tomorrow)
    setCheckOutDate(dates.futureDate)
    // Also apply the reset
    setAppliedCity(initialCity)
    setAppliedBedrooms(1)
    setAppliedCheckInDate(dates.tomorrow)
    setAppliedCheckOutDate(dates.futureDate)
  }

  return {
    // Temporary states
    selectedCity,
    setSelectedCity,
    selectedBedrooms,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    // Applied states
    appliedCity,
    appliedBedrooms,
    appliedCheckInDate,
    appliedCheckOutDate,
    // Actions
    incrementBedrooms,
    decrementBedrooms,
    applyFilters,
    resetFilters,
  }
}
