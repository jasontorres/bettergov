import React, { useState, useEffect } from 'react'
import {
  Compass,
  FileCheck,
  Globe,
  Search,
  AlertCircle,
  ExternalLink,
} from 'lucide-react'
import visaData from '../../../data/visa/philippines_visa_policy.json'
import { PhilippinesVisaPolicy, VisaRequirement } from '../../../types/visa'
import Button from '../../../components/ui/Button'
import { Link } from 'react-router-dom'

type Country = string

// Using the imported VisaRequirement type from '../../../types/visa'

const VisaPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [visaRequirement, setVisaRequirement] =
    useState<VisaRequirement | null>(null)
  const [allCountries, setAllCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

  useEffect(() => {
    // Extract all unique countries from the visa data
    const countries = new Set<string>()

    // Add countries with 30-day visa-free entry
    const typedVisaData = visaData as PhilippinesVisaPolicy

    // Add countries with 30-day visa-free entry
    typedVisaData.visaFreeEntryPolicies[0].countries?.forEach((country) =>
      countries.add(country)
    )

    // Add countries with 59-day visa-free entry
    typedVisaData.visaFreeEntryPolicies[1].countries?.forEach((country) =>
      countries.add(country)
    )

    // Add some example visa-required countries
    ;[
      'Afghanistan',
      'Albania',
      'Algeria',
      'Armenia',
      'Azerbaijan',
      'Bangladesh',
      'Belarus',
      'Bosnia and Herzegovina',
      'China',
      'Cuba',
      'Egypt',
      'Georgia',
      'India',
      'Iran',
      'Iraq',
      'Jordan',
      'Lebanon',
      'Libya',
      'Moldova',
      'Montenegro',
      'Nigeria',
      'North Korea',
      'Pakistan',
      'Palestine',
      'Serbia',
      'Somalia',
      'South Sudan',
      'Sudan',
      'Syria',
      'Ukraine',
      'Yemen',
    ].forEach((country) => {
      if (!countries.has(country)) {
        countries.add(country)
      }
    })

    const sortedCountries = Array.from(countries).sort()
    setAllCountries(sortedCountries)
    setFilteredCountries(sortedCountries)
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCountries(allCountries)
    } else {
      const filtered = allCountries.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredCountries(filtered)
    }
  }, [searchTerm, allCountries])

  const checkVisaRequirement = (country: string) => {
    setSelectedCountry(country)

    const typedVisaData = visaData as PhilippinesVisaPolicy

    // Check if country is in 30-day visa-free list
    if (typedVisaData.visaFreeEntryPolicies[0].countries?.includes(country)) {
      setVisaRequirement({
        type: 'visa-free',
        duration: '30 days',
        description: typedVisaData.visaFreeEntryPolicies[0].description,
      })
      return
    }

    // Check if country is in 59-day visa-free list
    if (typedVisaData.visaFreeEntryPolicies[1].countries?.includes(country)) {
      setVisaRequirement({
        type: 'visa-free',
        duration: '59 days',
        description: typedVisaData.visaFreeEntryPolicies[1].description,
      })
      return
    }

    // Special case for India
    if (country === 'India') {
      setVisaRequirement({
        type: 'special-condition',
        duration: '14 days (extendable to 21 days)',
        description: typedVisaData.visaFreeEntryPolicies[2].description,
        requirements: typedVisaData.visaFreeEntryPolicies[2].requirements,
        additionalInfo: typedVisaData.visaFreeEntryPolicies[2].additionalInfo,
      })
      return
    }

    // Special case for China
    if (country === 'China') {
      setVisaRequirement({
        type: 'special-condition',
        duration: '7 days (extendable to 21 days)',
        description: typedVisaData.visaFreeEntryPolicies[3].description,
        additionalInfo: typedVisaData.visaFreeEntryPolicies[3].additionalInfo,
      })
      return
    }

    // Default case: visa required
    setVisaRequirement({
      type: 'visa-required',
      description: typedVisaData.visaRequiredNationals.description,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Philippines Visa Information
              </h1>
              <p className="text-xl opacity-90 mb-6">
                Find out if you need a visa to visit the Philippines and learn
                about entry requirements.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="h-4 w-4" />
                <span>
                  Official data from the Bureau of Immigration and Philippine
                  Department of Foreign Affairs
                </span>
              </div>
              <Link to="/travel/visa-types">
                <Button className="text-xl bg-blue-800 py-8 px-8 mt-6">
                  Check visa types
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Compass className="mr-2 h-5 w-5 text-blue-600" />
                  Quick Visa Check
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Select your country of citizenship to check visa requirements
                  for traveling to the Philippines.
                </p>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your country..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search for a country"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Country List */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Select Your Country
              </h2>
              <div
                className="h-[800px] overflow-y-auto pr-2"
                role="listbox"
                aria-label="Country list"
              >
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country}
                      className={`w-full text-left px-4 py-3 rounded-md mb-1 transition-colors ${
                        selectedCountry === country
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => checkVisaRequirement(country)}
                      role="option"
                      aria-selected={selectedCountry === country}
                    >
                      {country}
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Search className="mx-auto h-8 w-8 mb-2 opacity-50" />
                    <p>No countries found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Visa Requirements */}
          <div className="md:col-span-2">
            {selectedCountry ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Visa Requirements for {selectedCountry}
                </h2>

                {visaRequirement && (
                  <div className="mt-6">
                    {visaRequirement.type === 'visa-free' && (
                      <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                        <FileCheck className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-green-800">
                            Visa-Free Entry
                          </h3>
                          <p className="text-green-700">
                            Citizens of {selectedCountry} can enter the
                            Philippines without a visa for up to{' '}
                            <strong>{visaRequirement.duration}</strong>.
                          </p>
                        </div>
                      </div>
                    )}

                    {visaRequirement.type === 'visa-required' && (
                      <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-red-800">
                            Visa Required
                          </h3>
                          <p className="text-red-700">
                            Citizens of {selectedCountry} need to apply for a
                            visa before traveling to the Philippines.
                          </p>
                        </div>
                      </div>
                    )}

                    {visaRequirement.type === 'special-condition' && (
                      <div className="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-yellow-800">
                            Special Conditions Apply
                          </h3>
                          <p className="text-yellow-700">
                            Citizens of {selectedCountry} may enter the
                            Philippines without a visa for up to{' '}
                            <strong>{visaRequirement.duration}</strong> under
                            specific conditions.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-2">
                        Entry Requirements
                      </h3>
                      <div className="prose prose-sm max-w-none">
                        <p>{visaRequirement.description}</p>

                        {visaRequirement.requirements && (
                          <div className="mt-4">
                            <h4 className="text-md font-medium mb-2">
                              Required Documents:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {visaRequirement.requirements.map(
                                (req, index) => (
                                  <li key={index}>{req}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                        {visaRequirement.additionalInfo && (
                          <div className="mt-4 p-3 bg-blue-50 rounded-md text-blue-800">
                            <p>
                              <strong>Note:</strong>{' '}
                              {visaRequirement.additionalInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {visaRequirement.type === 'visa-required' && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3">
                          How to Apply for a Visa
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <a
                            href="https://evisa.gov.ph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="rounded-full bg-blue-100 p-2 mr-3">
                              <Globe className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">eVisa Portal</h4>
                              <p className="text-sm text-gray-600">
                                Apply online through the official eVisa system
                              </p>
                              <div className="flex items-center text-blue-600 text-sm mt-1">
                                <span>Visit website</span>
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </div>
                            </div>
                          </a>
                          <a
                            href="https://dfa.gov.ph/list-of-philippine-embassies-and-consulates-general"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="rounded-full bg-blue-100 p-2 mr-3">
                              <Globe className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Philippine Embassies
                              </h4>
                              <p className="text-sm text-gray-600">
                                Find your nearest Philippine Embassy or
                                Consulate
                              </p>
                              <div className="flex items-center text-blue-600 text-sm mt-1">
                                <span>Find locations</span>
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Globe className="h-12 w-12 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Check Your Visa Requirements
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Select your country from the list to check if you need a
                    visa to visit the Philippines and learn about entry
                    requirements.
                  </p>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Important Visa Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Temporary Visitor's Visa (9a)
                  </h3>
                  <p className="text-gray-700">
                    The 9(a) Temporary Visitor's Visa is for foreign nationals
                    visiting the Philippines for business, tourism, medical
                    treatment, or other temporary purposes.
                  </p>
                  <a
                    href="https://evisa.gov.ph/page/policy?l1=Non-Immigrant%20Visas&l2=9(a)%20Temporary%20Visitors%20Visa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
                  >
                    <span>Learn more about Temporary Visitor's Visa</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Visa Extensions</h3>
                  <p className="text-gray-700">
                    Visitors who wish to extend their stay in the Philippines
                    beyond their authorized period can apply for an extension at
                    the Bureau of Immigration.
                  </p>
                  <a
                    href="https://immigration.gov.ph/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
                  >
                    <span>Visit Bureau of Immigration website</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-yellow-800">
                    Disclaimer
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    {visaData.sourceInfo.disclaimer}
                  </p>
                  <p className="text-yellow-700 text-sm mt-2">
                    Last updated: {visaData.sourceInfo.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaPage
