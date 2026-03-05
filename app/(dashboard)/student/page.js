import KPICard from '@/components/dashboard/KPICard'
import Leaderboard from '@/components/dashboard/Leaderboard'

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Welcome back 👋
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <KPICard title="Courses Enrolled" value="8" />
        <KPICard title="XP Earned" value="3,420" />
        <KPICard title="Certificates" value="4" />
      </div>

      <Leaderboard />
    </div>
  )
}