import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "./components/Grid/GridItem.js";
import GridContainer from "./components/Grid/GridContainer.js";
import Table from "./components/Table/Table.js";
import Danger from "./components/Typography/Danger.js";
import Card from "./components/Card/Card.js";
import CardHeader from "./components/Card/CardHeader.js";
import CardBody from "./components/Card/CardBody.js";


import {
  completedTasksChart,
} from "./variables/charts.js";

import styles from "./assets/jss/material-dashboard-react/views/dashboardStyle.js";

import { getMonthsOrders, getDaysOrders, getWeeksOrders, getRow, getDetailedRow, getTotalOrders } from './helper'

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  // let date = new Date();
  let totalOrders = getTotalOrders();
  let { orders, orderAmount } = getDaysOrders("2003-03-10")
  let monthOrders = getMonthsOrders(3, 2003)["orders"];
  let monthOrderAmount = getMonthsOrders(3, 2003)["orderAmount"];
  let lastMonthOrders = getMonthsOrders(2, 2003)["orders"];
  let lastMonthOrderAmount = getMonthsOrders(2, 2003)["orderAmount"];
  let weeksOrders = getWeeksOrders(new Date("2003-03-03T00:00:00"), new Date("2003-03-10T00:00:00"))["orders"];
  let weekOrderAmount = getWeeksOrders(new Date("2003-03-03T00:00:00"), new Date("2003-03-10T00:00:00"))["orderAmount"];
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <p className={classes.cardCategory}>Today's total order count</p>
              <h3 className={classes.cardTitle}>
                {orders}
              </h3>
              <p className={classes.cardCategory}>This week's total order count</p>
              <h3 className={classes.cardTitle}>
                {weeksOrders}
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>

              <p className={classes.cardCategory}>Today's total order amount</p>
              <h3 className={classes.cardTitle}>${orderAmount}</h3>
              <p className={classes.cardCategory}>This week's total order amount</p>
              <h3 className={classes.cardTitle}>${weekOrderAmount}</h3>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <p className={classes.cardCategory}>This month's total order count</p>
              <h3 className={classes.cardTitle}>{monthOrders}</h3>

              <p className={classes.cardCategory}>Last month's total order count</p>
              <h3 className={classes.cardTitle}>{lastMonthOrders}</h3>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <p className={classes.cardCategory}>This month's total order amount</p>
              <h3 className={classes.cardTitle}>${monthOrderAmount}</h3>

              <p className={classes.cardCategory}>Last month's total order amount</p>
              <h3 className={classes.cardTitle}>${lastMonthOrderAmount}</h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>


        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={{
                  labels: ["2003-01-06", "2003-01-09", "2003-01-10", "2003-01-29", "2003-01-31", "2003-02-11", "2003-02-17", "2003-02-24", "2003-03-03", "2003-03-10"],
                  series: [[getDaysOrders("2003-01-06")["orders"], getDaysOrders("2003-01-09")["orders"], getDaysOrders("2003-01-10")["orders"], getDaysOrders("2003-01-29")["orders"], getDaysOrders("2003-01-31")["orders"], getDaysOrders("2003-02-11")["orders"], getDaysOrders("2003-02-17")["orders"], getDaysOrders("2003-02-24")["orders"], getDaysOrders("2003-01-09")["orders"], getDaysOrders("2003-03-10")["orders"]]],
                }}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Order Trend</h4>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Top 5 Orders</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Order Number", "Total Amount", "Total Quantity", "Username"]}
                tableData={[
                  getRow(0),
                  getRow(1),
                  getRow(2),
                  getRow(3),
                  getRow(4)
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Bottom 5 Orders</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Order Number", "Total Amount", "Total Quantity", "Username"]}
                tableData={[
                  getRow(totalOrders - 1),
                  getRow(totalOrders - 2),
                  getRow(totalOrders - 3),
                  getRow(totalOrders - 4),
                  getRow(totalOrders - 5)
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Detailed Orders</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Username", "Order Number", "Order Date", "Status", "Total Amount", "Total Quantity", "Company"]}
                tableData={[
                  getDetailedRow(0),
                  getDetailedRow(1),
                  getDetailedRow(2),
                  getDetailedRow(3),
                  getDetailedRow(4),
                  getDetailedRow(5),
                  getDetailedRow(6),
                  getDetailedRow(7),
                  getDetailedRow(8),
                  getDetailedRow(9),
                  getDetailedRow(10),
                  getDetailedRow(11)
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}