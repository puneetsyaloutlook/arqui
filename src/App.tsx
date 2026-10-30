import { Navigate, Route, Routes } from 'react-router-dom';
import { Shell } from './components/Shell';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import { CurrentWork, OrgViews, ScenarioPlanning } from './pages/Areas';
import { useApp } from './state/store';
import type { ReactNode } from 'react';

function Protected({ children, needsProfile = true }: { children: ReactNode; needsProfile?: boolean }) {
  const { state } = useApp();
  if (!state.email) return <Navigate to="/signin" replace />;
  if (needsProfile && !state.onboarded) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/onboarding" element={<Protected needsProfile={false}><Onboarding /></Protected>} />
      <Route element={<Protected><Shell /></Protected>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/current-work" element={<CurrentWork />} />
        <Route path="/scenario-planning" element={<ScenarioPlanning />} />
        <Route path="/organisational-views" element={<OrgViews />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
