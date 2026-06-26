import ExcelJS from "exceljs";

class ExcelService {

    async readExcel() {

        const workbook = new ExcelJS.Workbook();

        await workbook.xlsx.readFile("./challenge.xlsx");

        return workbook.getWorksheet("Sheet1");
    }

}

export default ExcelService;