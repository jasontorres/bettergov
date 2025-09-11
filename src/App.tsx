import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/layout/Navbar'
import Ticker from './components/ui/Ticker'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import DesignGuide from './pages/DesignGuide'
import Services from './pages/services'
import AboutPage from './pages/about'
import AccessibilityPage from './pages/accessibility'
import AboutPhilippines from './pages/philippines/about'
import PhilippinesHistory from './pages/philippines/history'
import PhilippinesCulture from './pages/philippines/culture'
import PhilippinesRegions from './pages/philippines/regions'
import PhilippinesMap from './pages/philippines/map'
import PublicHolidays from './pages/philippines/holidays'
import Hotlines from './pages/philippines/Hotlines'
import VisaPage from './pages/travel/visa'
import VisaTypesPage from './pages/travel/visa-types'
import VisaTypeDetail from './pages/travel/visa-types/[type]'
import TravelDestinationsPage from './pages/travel/destinations'
import DestinationDetail from './pages/travel/destinations/[id]'
import ExecutiveDirectory from './pages/government/executive'
import ExecutiveLayout from './pages/government/executive/layout'
import DepartmentsIndex from './pages/government/departments'
import DepartmentDetail from './pages/government/departments/[department]'
import DepartmentsLayout from './pages/government/departments/layout'
import GovernmentLayout from './pages/government/layout'
import ConstitutionalLayout from './pages/government/constitutional/layout'
import ConstitutionalIndex from './pages/government/constitutional/index'
import ConstitutionalOffice from './pages/government/constitutional/[office]'
import GOCCsPage from './pages/government/constitutional/goccs'
import SUCsPage from './pages/government/constitutional/sucs'

// Legislative Branch
import LegislativeLayout from './pages/government/legislative/layout'
import LegislativeIndex from './pages/government/legislative/index'
import LegislativeChamber from './pages/government/legislative/[chamber]'
import HouseMembersPage from './pages/government/legislative/house-members'
import SenateCommitteesPage from './pages/government/legislative/senate-committees'

// Diplomatic Section
import DiplomaticLayout from './pages/government/diplomatic/layout'
import DiplomaticIndex from './pages/government/diplomatic/index'
import DiplomaticMissionsPage from './pages/government/diplomatic/missions'
import ConsulatesPage from './pages/government/diplomatic/consulates'
import InternationalOrganizationsPage from './pages/government/diplomatic/organizations'
import OfficeOfThePresident from './pages/government/executive/office-of-the-president'
import OtherExecutiveOffices from './pages/government/executive/other-executive-offices'
import OfficeOfTheVicePresident from './pages/government/executive/office-of-the-vice-president'
import PresidentialCommunicationsOffice from './pages/government/executive/presidential-communications-office'

// Local Government Units
import LocalLayout from './pages/government/local/components/LocalLayout'
import LocalGovernmentIndex from './pages/government/local/index'
import RegionalLGUPage from './pages/government/local/[region]'

// Search Page
import SearchPage from './pages/Search'

// Data Pages
import WeatherPage from './pages/data/weather'
import ForexPage from './pages/data/forex'
import FloodControlProjects from './pages/flood-control-projects'
import FloodControlProjectsTable from './pages/flood-control-projects/table'
import FloodControlProjectsMap from './pages/flood-control-projects/map'
import FloodControlProjectsContractors from './pages/flood-control-projects/contractors'
import ContractorDetail from './pages/flood-control-projects/contractors/[contractor-name]'

// Services Pages
import WebsitesDirectory from './pages/services/websites'

// Sitemap Page
import SitemapPage from './pages/sitemap'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Ticker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<DesignGuide />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/philippines/about" element={<AboutPhilippines />} />
            <Route
              path="/philippines/history"
              element={<PhilippinesHistory />}
            />
            <Route
              path="/philippines/culture"
              element={<PhilippinesCulture />}
            />
            <Route
              path="/philippines/regions"
              element={<PhilippinesRegions />}
            />
            <Route path="/philippines/map" element={<PhilippinesMap />} />
            <Route path="/philippines/holidays" element={<PublicHolidays />} />
            <Route path="/philippines/hotlines" element={<Hotlines />} />

            {/* Data Routes */}
            <Route path="/data/weather" element={<WeatherPage />} />
            <Route path="/data/forex" element={<ForexPage />} />
            <Route path="/flood-control-projects" element={<FloodControlProjects />} />
            <Route path="/flood-control-projects/table" element={<FloodControlProjectsTable />} />
            <Route path="/flood-control-projects/map" element={<FloodControlProjectsMap />} />
            <Route path="/flood-control-projects/contractors" element={<FloodControlProjectsContractors />} />
            <Route path="/flood-control-projects/contractors/:contractor-name" element={<ContractorDetail />} />

            {/* Services Routes */}
            <Route path="/services/websites" element={<WebsitesDirectory />} />

            {/* Travel Routes */}
            <Route path="/travel/visa" element={<VisaPage />} />
            <Route path="/travel/visa-types" element={<VisaTypesPage />} />
            <Route
              path="/travel/visa-types/:type"
              element={
                <React.Suspense
                  fallback={
                    <div className="flex items-center justify-center min-h-screen">
                      Loading...
                    </div>
                  }
                >
                  <VisaTypeDetail />
                </React.Suspense>
              }
            />
            <Route path="/travel/destinations" element={<TravelDestinationsPage />} />
            <Route path="/travel/destinations/:id" element={<DestinationDetail />} />

            {/* Government Routes */}
            <Route
              path="/government"
              element={<GovernmentLayout title="Government" />}
            >
              <Route index element={<Navigate to="executive\" replace />} />

              <Route path="executive" element={<ExecutiveLayout />}>
                <Route index element={<ExecutiveDirectory />} />
                <Route
                  path="other-executive-offices"
                  element={<OtherExecutiveOffices />}
                />
                <Route
                  path="office-of-the-president"
                  element={<OfficeOfThePresident />}
                />
                <Route
                  path="office-of-the-vice-president"
                  element={<OfficeOfTheVicePresident />}
                />
                <Route
                  path="presidential-communications-office"
                  element={<PresidentialCommunicationsOffice />}
                />
              </Route>

              <Route path="departments" element={<DepartmentsLayout />}>
                <Route index element={<DepartmentsIndex />} />
                <Route path=":department" element={<DepartmentDetail />} />
              </Route>

              <Route path="constitutional" element={<ConstitutionalLayout />}>
                <Route index element={<ConstitutionalIndex />} />
                <Route path=":office" element={<ConstitutionalOffice />} />
                <Route path="goccs" element={<GOCCsPage />} />
                <Route path="sucs" element={<SUCsPage />} />
              </Route>
              <Route path="legislative" element={<LegislativeLayout />}>
                <Route index element={<LegislativeIndex />} />
                <Route path=":chamber" element={<LegislativeChamber />} />
                <Route path="house-members" element={<HouseMembersPage />} />
                <Route
                  path="senate-committees"
                  element={<SenateCommitteesPage />}
                />
              </Route>
              <Route path="diplomatic" element={<DiplomaticLayout />}>
                <Route index element={<DiplomaticIndex />} />
                <Route path="missions" element={<DiplomaticMissionsPage />} />
                <Route path="consulates" element={<ConsulatesPage />} />
                <Route
                  path="organizations"
                  element={<InternationalOrganizationsPage />}
                />
              </Route>

              {/* Local Government Routes */}
              <Route path="local" element={<LocalLayout />}>
                <Route index element={<LocalGovernmentIndex />} />
                <Route path=":region" element={<RegionalLGUPage />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App