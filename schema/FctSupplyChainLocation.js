cube(`FctSupplyChainLocation`, {
  sql: `SELECT * FROM reporting.fct_supply_chain_location`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [uniqueId, orderId, customerId, sellerId, customerCity, sellerCity]
    }
  },
  
  dimensions: {
    uniqueId: {
      sql: `unique_id`,
      type: `string`
    },
    
    orderId: {
      sql: `order_id`,
      type: `string`
    },
    
    customerId: {
      sql: `customer_id`,
      type: `string`
    },
    
    sellerId: {
      sql: `seller_id`,
      type: `string`
    },
    
    grossRevenue: {
      sql: `gross_revenue`,
      type: `string`
    },
    
    freightValue: {
      sql: `freight_value`,
      type: `string`
    },
    
    customerCity: {
      sql: `customer_city`,
      type: `string`
    },
    
    customerState: {
      sql: `customer_state`,
      type: `string`
    },
    
    sellerCity: {
      sql: `seller_city`,
      type: `string`
    },
    
    sellerState: {
      sql: `seller_state`,
      type: `string`
    },
    
    sellerToCustomerDistinceMeter: {
      sql: `seller_to_customer_distince_meter`,
      type: `string`
    },
    
    orderPurchaseAt: {
      sql: `order_purchase_at`,
      type: `time`
    },
    
    orderDeliveredCustomerAt: {
      sql: `order_delivered_customer_at`,
      type: `time`
    },
    
    orderEstimatedDeliveryAt: {
      sql: `order_estimated_delivery_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
