import * as React from "react";

export default function Layout({
  children,
  trains,
  users,
}: {
  children: React.ReactNode;
  trains: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-8 grid grid-cols-2 gap-4">
        {trains}
        {users}
      </div>
      <div className="bg-gray-200">{children}</div>
    </div>
  );
}
