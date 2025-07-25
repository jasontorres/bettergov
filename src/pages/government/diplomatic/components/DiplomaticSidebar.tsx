import { useNavigate, useParams, Link, useLocation } from 'react-router-dom'
import { Globe, Building2, Landmark } from 'lucide-react'
import { useState } from 'react'
import diplomaticData from '../../../../data/directory/diplomatic.json'
import StandardSidebar from '../../../../components/ui/StandardSidebar'

export default function DiplomaticSidebar() {
  const [searchTerm, setSearchTerm] = useState('')
  const { category: categoryParam } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  // Check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <StandardSidebar
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      searchPlaceholder="Search diplomatic..."
    >
      <nav className="p-2 space-y-4 pt-4">
        <div>
          <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Diplomatic Categories
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/government/diplomatic/missions"
                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive('/government/diplomatic/missions')
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Globe className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>Diplomatic Missions</span>
              </Link>
            </li>
            <li>
              <Link
                to="/government/diplomatic/consulates"
                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive('/government/diplomatic/consulates')
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Building2 className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>Consulates</span>
              </Link>
            </li>
            <li>
              <Link
                to="/government/diplomatic/organizations"
                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive('/government/diplomatic/organizations')
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Landmark className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                <span>International Organizations</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </StandardSidebar>
  )
}
