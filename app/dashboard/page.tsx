import DashboardClient from './DashboardClient';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Dashboard</h1>
      <DashboardClient />
    </div>
  );
}
