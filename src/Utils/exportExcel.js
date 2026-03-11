import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function exportExcel(data) {

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = {
    Sheets: { Students: worksheet },
    SheetNames: ["Students"]
  };

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array"
  });

  const fileData = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  saveAs(fileData, "students.xlsx");
}

export default exportExcel;