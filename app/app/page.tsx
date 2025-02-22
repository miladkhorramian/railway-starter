"use client";

import * as React from "react";
import { ScheduleForm } from "./schedule-form";
import { ScheduleList } from "./schedule-list";

function AppPage() {
  const [showData, setShowData] = React.useState(false);

  return (
    <div className="flex flex-col gap-7">
      <ScheduleForm onHandleSubmit={() => setShowData(true)} />
      {showData ? <ScheduleList /> : null}
    </div>
  );
}

export default AppPage;
