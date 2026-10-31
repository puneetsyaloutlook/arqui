import { Navigate, Route, Routes } from 'react-router-dom';
import { Shell } from './components/Shell';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import { CurrentWork, OrgViews, ScenarioPlanning } from './pages/Areas';
import { useApp } from './state/store';
import AdminShell from './pages/admin/AdminShell';
import AdminHome from './pages/admin/AdminHome';
import { AboutStep, AgentsStep, DocumentsStep, ModelStep, PublishStep } from './pages/admin/AdminSteps';
import { DetailPage, TestInsightsStep, TestTwinStep, VersionsPage } from './pages/admin/AdminReview';
import type { ReactNode } from 'react';

function Protected({ children, needsProfile = true, role = 'user' }: { children: ReactNode; needsProfile?: boolean; role?: 'user' | 'admin' }) {
  const { state } = useApp();
  if (!state.email) return <Navigate to="/signin" replace />;
  const mine = state.role ?? 'user';
  if (mine !== role) return <Navigate to={mine === 'admin' ? '/admin' : '/dashboard'} replace />;
  if (role === 'user' && needsProfile && !state.onboarded) return <Navigate to="/onboarding" replace />;
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
      <Route path="/admin" element={<Protected role="admin"><AdminShell /></Protected>}>
        <Route index element={<AdminHome />} />
        <Route path="about" element={<AboutStep />} />
        <Route path="documents" element={<DocumentsStep />} />
        <Route path="model" element={<ModelStep />} />
        <Route path="agents" element={<AgentsStep />} />
        <Route path="test-twin" element={<TestTwinStep />} />
        <Route path="test-insights" element={<TestInsightsStep />} />
        <Route path="publish" element={<PublishStep />} />
        <Route path="versions/:kind" element={<VersionsPage />} />
        <Route path="detail/:kind/:id" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
