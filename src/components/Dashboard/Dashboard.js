import React from 'react';
import Sidebar, { SidebarItem } from './Sidebar';
import MissionsPage from '../../pages/MissionsPage';

// SVG's imported here
import { ReactComponent as AntennasWhiteIcon } from '../../assets/icons/white/antennas_white.svg';
import { ReactComponent as MissionsWhiteIcon } from '../../assets/icons/white/missions_white.svg';
import { ReactComponent as ReportsWhiteIcon } from '../../assets/icons/white/reports_white.svg';
import { ReactComponent as AnalysisWhiteIcon } from '../../assets/icons/white/analysis_white.svg';
import { ReactComponent as AssetsWhiteIcon } from '../../assets/icons/white/assets_white.svg';
import { ReactComponent as SiteInvestigationWhiteIcon } from '../../assets/icons/white/siteinvestigation_white.svg';

import { ReactComponent as AntennasBlueIcon } from '../../assets/icons/blue/antennas_blue.svg';
import { ReactComponent as MissionsBlueIcon } from '../../assets/icons/blue/missions_blue.svg';
import { ReactComponent as ReportsBlueIcon } from '../../assets/icons/blue/reports_blue.svg';
import { ReactComponent as AnalysisBlueIcon } from '../../assets/icons/blue/analysis_blue.svg';
import { ReactComponent as AssetsBlueIcon } from '../../assets/icons/blue/assets_blue.svg';
import { ReactComponent as SiteInvestigationBlueIcon } from '../../assets/icons/blue/siteinvestigation_blue.svg';

const Dashboard = () => {
  // Active page state set to Missions
  const activePage = 'Missions';

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar className="hidden md:block">
        {/* Antennas Sidebar Item */}
        <SidebarItem
          iconActive={<AntennasBlueIcon />}
          iconInactive={<AntennasWhiteIcon />}
          text="Antennas"
          active={false}
          alert={false}
        />
        {/* Missions Sidebar Item */}
        <SidebarItem
          iconActive={<MissionsBlueIcon />}
          iconInactive={<MissionsWhiteIcon />}
          text="Missions"
          active={activePage === 'Missions'}
          alert={false}
        />
        {/* Reports Sidebar Item */}
        <SidebarItem
          iconActive={<ReportsBlueIcon />}
          iconInactive={<ReportsWhiteIcon />}
          text="Reports"
          active={false}
          alert={false}
        />
        {/* Analysis Sidebar Item */}
        <SidebarItem
          iconActive={<AnalysisBlueIcon />}
          iconInactive={<AnalysisWhiteIcon />}
          text="Analysis"
          active={false}
          alert={false}
        />
        {/* Assets Sidebar Item */}
        <SidebarItem
          iconActive={<AssetsBlueIcon />}
          iconInactive={<AssetsWhiteIcon />}
          text="Assets"
          active={false}
          alert={false}
        />
        {/* Site Investigation Sidebar Item */}
        <SidebarItem
          iconActive={<SiteInvestigationBlueIcon />}
          iconInactive={<SiteInvestigationWhiteIcon />}
          text="Site Investigation"
          active={false}
          alert={false}
        />
      </Sidebar>
      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4 md:p-8">
        {/* Render MissionsPage when the activePage is 'Missions' */}
        {activePage === 'Missions' && <MissionsPage />}
        {/* Add other dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
