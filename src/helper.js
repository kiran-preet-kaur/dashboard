import data from './data.json'

export function getTotalOrders() {
  console.log(data.length);
  return data.length;
}



export function getDaysOrders(date) {
  let orders = 0;
  let orderAmount = 0;
  for (let item of data) {
    if (item.ORDERDATE.split("T")[0] == date) {
      orders += 1
      orderAmount += item.SALES;
    }
  }
  orderAmount = orderAmount.toFixed(2)
  return { orders, orderAmount };
}

export function getMonthsOrders(month, year) {
  let orders = 0;
  let orderAmount = 0;
  for (let item of data) {
    if (item.MONTH_ID == month && item.YEAR_ID == year) {
      orders += 1;
      orderAmount += item.SALES;
    }
  }
  orderAmount = orderAmount.toFixed(2)
  return { orders, orderAmount };
}

export function getWeeksOrders(startDate, endDate) {
  let orders = 0;
  let orderAmount = 0;
  for (let item of data) {
    let date = new Date(item.ORDERDATE)
    if (date >= startDate && date <= endDate) {
      orders += 1
      orderAmount += item.SALES;
    }
  }
  orderAmount = orderAmount.toFixed(2)
  return { orders, orderAmount }
}

export function getRow(i) {
  return [data[i].ORDERNUMBER.toString(), data[i].SALES.toString(), data[i].QUANTITYORDERED.toString(), data[i].CONTACTFIRSTNAME + " " + data[i].CONTACTLASTNAME]
}

export function getDetailedRow(i) {
  return [data[i].CONTACTFIRSTNAME + " " + data[i].CONTACTLASTNAME, data[i].ORDERNUMBER.toString(), data[i].ORDERDATE, data[i].STATUS.toString(), data[i].SALES.toString(), data[i].QUANTITYORDERED.toString(), data[i].CUSTOMERNAME]
}