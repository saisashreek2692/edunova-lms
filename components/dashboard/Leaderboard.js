export default function Leaderboard() {
  const users = [
    { name: 'Alex', xp: 1200 },
    { name: 'Sarah', xp: 1100 },
    { name: 'James', xp: 950 }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <h3 className="text-xl font-semibold mb-4">
        Leaderboard
      </h3>

      <ul className="space-y-3">
        {users.map((u, i) => (
          <li
            key={i}
            className="flex justify-between text-gray-700"
          >
            <span>
              {i + 1}. {u.name}
            </span>
            <span className="text-indigo-600 font-medium">
              {u.xp} XP
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}