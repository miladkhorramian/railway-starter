import { faker } from "@faker-js/faker";

export function generateMockSchedules(rows = 10) {
  const blocks = [
    "مراقبه-آذر بناب",
    "آذر بناب-دیزه رود",
    "چشمه-کیان-سلمان",
    "گل-تپه-خواجه نصیر",
    "عجبشیر-بروز بهمن",
    "بروز بهمن-رازلیق",
  ];
  const machineRegions = ["مرکز", "آذربایجان"];
  const days = ["سه شنبه", "چهارشنبه", "پنجشنبه"];

  const data = [];
  for (let i = 0; i < rows; i++) {
    data.push({
      block: faker.helpers.arrayElement(blocks),
      machineId: faker.number.int({ min: 400, max: 4000 }),
      machineRegion: faker.helpers.arrayElement(machineRegions),
      departureDay: faker.helpers.arrayElement(days),
      departureDate: "1/28/2025",
      startTime: "22:54:27",
      endTime: "23:54:27",
      travelTime: faker.date
        .between({
          from: new Date().toISOString(),
          to: new Date(new Date().setUTCHours(24)).toISOString(),
        })
        .toTimeString()
        .split(" ")[0],
      subtaskCompletionTime: faker.date
        .between({
          from: new Date().toISOString(),
          to: new Date(new Date().setUTCHours(24)).toISOString(),
        })
        .toTimeString()
        .split(" ")[0],
      remainingSubtask1: faker.number.int({ min: 0, max: 5 }),
      completedSubtask1: faker.number.int({ min: 0, max: 5 }),
      remainingSubtask2: faker.number.float({
        min: 0.5,
        max: 10,
      }),
      completedSubtask2: faker.number.int({ min: 0, max: 5 }),
      selection: faker.datatype.boolean(),
    });
  }
  return data;
}
