import { ReactNode, useState } from 'react'
import { Menu, X } from 'lucide-react'

interface GovernmentPageContainerProps {
  children: ReactNode
  sidebar?: ReactNode
  className?: string
}

export default function GovernmentPageContainer({
  children,
  sidebar,
  className = '',
}: GovernmentPageContainerProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Mobile Sidebar Toggle */}
        {sidebar && (
          <div className="md:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-sm text-gray-900 font-medium border"
            >
              <span>Menu</span>
              {sidebarOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:gap-8">
          {sidebar && (
            <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-0 flex-shrink-0`}>
              {sidebar}
            </aside>
          )}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-lg border shadow-sm p-4 md:p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

interface GovernmentPageHeaderProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  className?: string
}

export function GovernmentPageHeader({
  title,
  subtitle,
  actions,
  className = '',
}: GovernmentPageHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8 ${className}`}
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        {subtitle && <p className="text-sm md:text-base text-gray-600">{subtitle}</p>}
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>
  )
}

interface GovernmentIndexPageContainerProps {
  children: ReactNode
  className?: string
}

export function GovernmentIndexPageContainer({
  children,
  className = '',
}: GovernmentIndexPageContainerProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="bg-white rounded-lg border shadow-sm p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
