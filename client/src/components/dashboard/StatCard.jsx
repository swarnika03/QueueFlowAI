function StatCard({ title, value, icon, color }) {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border-l-4 ${color}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-slate-500 text-sm font-medium">
            {title}
          </h3>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;