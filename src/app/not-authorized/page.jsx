export default function NotAuthorized() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <a href="/dashboard/list/employee" className="underline text-blue-600">
        Go back to your dashboard
      </a>
    </div>
  );
}
