import React from 'react'
import { Card, CardHeader, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Phone, Mail, ExternalLink, Award, Building, Globe } from 'lucide-react'

const ColorBlock = ({
  color,
  name,
  value,
}: {
  color: string
  name: string
  value: string
}) => (
  <div className="flex items-center space-x-2">
    <div className={`w-12 h-12 rounded ${color}`} />
    <div>
      <div className="font-medium">{name}</div>
      <div className="text-sm text-gray-500">{value}</div>
    </div>
  </div>
)

const TypographyExample = ({
  className,
  label,
}: {
  className: string
  label: string
}) => (
  <div className="mb-4">
    <div className={className}>The quick brown fox jumps over the lazy dog</div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </div>
)

const DesignGuide: React.FC = () => {
  const searchResults = [
    { id: 1, title: 'National ID Registration', category: 'Citizenship' },
    { id: 2, title: 'Business Permit Application', category: 'Business' },
    { id: 3, title: 'Passport Renewal', category: 'Travel' },
  ]

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Inactive',
    },
  ]

  const achievements = [
    'Led the implementation of digital transformation initiatives across government agencies',
    'Established international partnerships for economic cooperation',
    'Launched nationwide infrastructure development programs',
    'Reformed tax collection systems for improved efficiency',
  ]

  const education = [
    {
      degree: 'Bachelor of Arts in Political Science',
      institution: 'University of Oxford',
      year: '1975',
    },
    {
      degree: 'Master in Business Administration',
      institution: 'Wharton School of Business',
      year: '1979',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Design Guidelines
        </h1>

        {/* Typography Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Typography</h2>
            <p className="text-gray-600">
              Plus Jakarta Sans is our primary font family
            </p>
          </CardHeader>
          <CardContent>
            <TypographyExample
              className="text-4xl font-bold"
              label="Heading 1 - text-4xl font-bold"
            />
            <TypographyExample
              className="text-3xl font-semibold"
              label="Heading 2 - text-3xl font-semibold"
            />
            <TypographyExample
              className="text-2xl font-medium"
              label="Heading 3 - text-2xl font-medium"
            />
            <TypographyExample
              className="text-xl"
              label="Heading 4 - text-xl"
            />
            <TypographyExample className="text-base" label="Body - text-base" />
            <TypographyExample className="text-sm" label="Small - text-sm" />
          </CardContent>
        </Card>

        {/* Colors Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Colors</h2>
            <p className="text-gray-600">Our color palette</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-4">Primary</h3>
                <div className="space-y-4">
                  <ColorBlock
                    color="bg-primary-500"
                    name="Primary 500"
                    value="#0066eb"
                  />
                  <ColorBlock
                    color="bg-primary-600"
                    name="Primary 600"
                    value="#0052bc"
                  />
                  <ColorBlock
                    color="bg-primary-700"
                    name="Primary 700"
                    value="#003d8d"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Secondary</h3>
                <div className="space-y-4">
                  <ColorBlock
                    color="bg-secondary-500"
                    name="Secondary 500"
                    value="#ff4d00"
                  />
                  <ColorBlock
                    color="bg-secondary-600"
                    name="Secondary 600"
                    value="#cc3e00"
                  />
                  <ColorBlock
                    color="bg-secondary-700"
                    name="Secondary 700"
                    value="#992e00"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Accent</h3>
                <div className="space-y-4">
                  <ColorBlock
                    color="bg-accent-500"
                    name="Accent 500"
                    value="#f58900"
                  />
                  <ColorBlock
                    color="bg-accent-600"
                    name="Accent 600"
                    value="#c46e00"
                  />
                  <ColorBlock
                    color="bg-accent-700"
                    name="Accent 700"
                    value="#935200"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lists Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Lists</h2>
            <p className="text-gray-600">
              Different list styles and search results
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Search Results List */}
              <div>
                <h3 className="font-medium mb-4">Search Results</h3>
                <div className="space-y-4">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-500 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">
                            {result.title}
                          </h4>
                          <span className="inline-block px-2 py-1 mt-2 text-xs font-medium rounded bg-gray-100 text-gray-600">
                            {result.category}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tables Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Tables</h2>
            <p className="text-gray-600">Table styles for data presentation</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {row.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{row.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            row.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : row.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Article Components */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Article Components</h2>
            <p className="text-gray-600">Article cards and content styles</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Article Card */}
              <div>
                <h3 className="font-medium mb-4">Article Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardImage
                      src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
                      alt="Article thumbnail"
                    />
                    <CardContent>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-primary-100 text-primary-800 mb-2">
                        News
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        Digital Government Initiatives
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Latest updates on the government's digital
                        transformation projects and e-services.
                      </p>
                      <Button variant="link">Read More</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <div className="relative">
                      <CardImage
                        src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg"
                        alt="Article with overlay"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-white/20 mb-2">
                            Tourism
                          </span>
                          <h3 className="text-xl font-semibold mb-2">
                            Exploring Philippine Islands
                          </h3>
                          <p className="text-white/80">
                            Discover the beauty of the Philippine archipelago.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Article Content */}
              <div>
                <h3 className="font-medium mb-4">Article Content</h3>
                <div className="prose max-w-none">
                  <h1 className="text-3xl font-bold mb-4">Article Title</h1>
                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <h2 className="text-2xl font-semibold mb-3">
                    Section Heading
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updated Profile Section */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Official Biography</h2>
            <p className="text-gray-600">
              Government official profile and biography layout
            </p>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Header Section */}
                <div className="relative h-64 bg-primary-700">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.pexels.com/photos/1714455/pexels-photo-1714455.jpeg"
                      alt="Office"
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900/90" />
                  <div className="relative h-full container mx-auto px-6 flex items-center">
                    <div className="flex items-center space-x-8">
                      <img
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                        alt="Ferdinand Marcos Jr."
                        className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
                      />
                      <div className="text-white">
                        <div className="text-sm font-medium text-primary-200 mb-1">
                          17th President of the Republic of the Philippines
                        </div>
                        <h1 className="text-4xl font-bold mb-2">
                          Ferdinand Marcos Jr.
                        </h1>
                        <p className="text-primary-100">
                          Serving since June 30, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-6 py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Contact & Basic Info */}
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Contact Information
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center text-gray-600">
                            <Building className="h-5 w-5 mr-3 text-primary-600" />
                            <div>
                              <div className="font-medium">Office</div>
                              <div className="text-sm">
                                Malacañang Palace, Manila
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone className="h-5 w-5 mr-3 text-primary-600" />
                            <div>
                              <div className="font-medium">Phone</div>
                              <div className="text-sm">+63 (2) 8736 8645</div>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail className="h-5 w-5 mr-3 text-primary-600" />
                            <div>
                              <div className="font-medium">Email</div>
                              <div className="text-sm">op@president.gov.ph</div>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Globe className="h-5 w-5 mr-3 text-primary-600" />
                            <div>
                              <div className="font-medium">Website</div>
                              <div className="text-sm">
                                www.president.gov.ph
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Education
                        </h3>
                        <div className="space-y-4">
                          {education.map((edu, index) => (
                            <div
                              key={index}
                              className="border-l-2 border-primary-500 pl-4"
                            >
                              <div className="font-medium">{edu.degree}</div>
                              <div className="text-sm text-gray-600">
                                {edu.institution}
                              </div>
                              <div className="text-sm text-gray-500">
                                {edu.year}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Bio & Achievements */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Biography
                        </h3>
                        <div className="prose max-w-none">
                          <p className="text-gray-600 leading-relaxed">
                            Ferdinand "Bongbong" Romualdez Marcos Jr. serves as
                            the 17th President of the Philippines, assuming
                            office on June 30, 2022. As the country's chief
                            executive, he leads the implementation of laws and
                            policies aimed at national development and public
                            welfare.
                          </p>
                          <p className="text-gray-600 leading-relaxed mt-4">
                            Prior to his presidency, he served in various
                            government positions including as a Senator of the
                            Philippines from 2010 to 2016, and as Governor of
                            Ilocos Norte. His administration focuses on economic
                            recovery, infrastructure development, and digital
                            transformation of government services.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Key Achievements
                        </h3>
                        <div className="grid gap-4">
                          {achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start">
                              <Award className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                              <p className="text-gray-600">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 mt-8">
                        <Button>
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Office
                        </Button>
                        <Button variant="outline">
                          <Globe className="h-4 w-4 mr-2" />
                          Visit Website
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DesignGuide
