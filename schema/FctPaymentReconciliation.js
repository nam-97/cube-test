cube(`FctPaymentReconciliation`, {
  sql: `SELECT * FROM reporting.fct_payment_reconciliation`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [orderId]
    }
  },
  
  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`
    },
    
    paymentAmountOrders: {
      sql: `payment_amount_orders`,
      type: `string`
    },
    
    paymentAmountActual: {
      sql: `payment_amount_actual`,
      type: `string`
    },
    
    orderPurchaseAt: {
      sql: `order_purchase_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
