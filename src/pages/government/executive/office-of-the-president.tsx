import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import executiveData from '../../../data/directory/executive.json'
import {
  CardList,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardContactInfo,
  CardGrid,
  CardAvatar,
  CardDivider,
} from '../../../components/ui/CardList'
import SEO from '../../../components/SEO'
import { getExecutiveSEOData } from '../../../utils/seo-data'

interface Personnel {
  name: string
  role: string
  contact?: string
  email?: string
  other_office?: string
}

interface OfficeDivision {
  office_division: string
  personnel: Personnel[]
}

interface Official {
  name: string
  role: string
  email?: string
  contact?: string
}

interface Office {
  office: string
  address?: string
  trunkline?: string
  website?: string
  officials: (Official | OfficeDivision)[]
  bureaus?: unknown[]
  attached_agency?: unknown[]
}

export default function OfficeOfThePresidentPage() {
  const [searchTerm, setSearchTerm] = useState('')

  // Find the Office of the President data
  const officeData = useMemo(() => {
    return (executiveData as Office[]).find(
      (office) => office.office === 'OFFICE OF THE PRESIDENT'
    )
  }, [])

  // Filter officials based on search term
  const filteredOfficials = useMemo(() => {
    if (!officeData) return []

    if (!searchTerm) return officeData.officials

    return officeData.officials.filter((official) => {
      if ('name' in official) {
        return official.name.toLowerCase().includes(searchTerm.toLowerCase())
      } else if ('office_division' in official) {
        return (
          official.office_division
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          official.personnel.some(
            (person) =>
              person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              person.role.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      }
      return false
    })
  }, [officeData, searchTerm])

  const seoData = getExecutiveSEOData(officeData?.office)

  if (!officeData) {
    return (
      <>
        <SEO {...seoData} />
        <div className="p-8 text-center bg-white rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Office data not found
          </h3>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO {...seoData} />
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {officeData.office}
          </h1>
          <p className="text-gray-600">
            {officeData.officials.length} officials and divisions
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search officials..."
            className="pl-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent>
          <CardContactInfo
            contact={{
              address: officeData.address,
              phone: officeData.trunkline,
              website: officeData.website,
            }}
          />
        </CardContent>
      </Card>

      {filteredOfficials.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-lg border">
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            No officials found
          </h3>
          <p className="text-gray-500">Try adjusting your search term.</p>
        </div>
      ) : (
        <CardList>
          {filteredOfficials.find(
            (official) =>
              'name' in official && official.role.includes('President')
          ) && (
            <Card variant="featured">
              <CardContent>
                {filteredOfficials
                  .filter(
                    (official) =>
                      'name' in official && official.role.includes('President')
                  )
                  .map((official, index) => {
                    if (!('name' in official)) return null
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center"
                      >
                        <CardAvatar
                          name={official.name}
                          size="lg"
                          className="mb-4"
                        />
                        <CardTitle level="h2" className="text-xl">
                          {official.name}
                        </CardTitle>
                        <CardDescription className="text-primary-600 font-medium text-base">
                          {official.role}
                        </CardDescription>
                        <div className="mt-3">
                          <CardContactInfo
                            contact={{
                              phone: official.contact,
                              email: official.email,
                            }}
                            compact
                          />
                        </div>
                      </div>
                    )
                  })}
              </CardContent>
            </Card>
          )}

          <CardGrid columns={2}>
            {filteredOfficials
              .filter((official) => 'office_division' in official)
              .map((division, index) => {
                if (!('office_division' in division)) return null
                return (
                  <Card key={index}>
                    <CardContent>
                      <CardTitle className="mb-3">
                        {division.office_division}
                      </CardTitle>
                      <CardDivider className="mb-3" />

                      <div className="space-y-4">
                        {division.personnel.map((person, personIndex) => (
                          <div
                            key={personIndex}
                            className="border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                          >
                            <p className="font-medium text-gray-800">
                              {person.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {person.role}
                            </p>

                            <div className="mt-2">
                              <CardContactInfo
                                contact={{
                                  phone: person.contact,
                                  email: person.email,
                                }}
                                compact
                              />

                              {person.other_office && (
                                <div className="mt-1">
                                  <span className="text-xs text-gray-500 italic">
                                    {person.other_office}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </CardGrid>
        </CardList>
      )}
    </div>
    </>
  )
}
