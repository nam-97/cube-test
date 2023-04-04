cube(`FctOrderItems`, {
  sql: `SELECT * FROM reporting.fct_order_items`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [uniqueId, orderId, productId, sellerId, customerId, productCategoryNameEnglish, productCategoryNamePortuguese, shippingLimitDate]
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
    
    productId: {
      sql: `product_id`,
      type: `string`
    },
    
    sellerId: {
      sql: `seller_id`,
      type: `string`
    },
    
    orderAmount: {
      sql: `order_amount`,
      type: `string`
    },
    
    freightValue: {
      sql: `freight_value`,
      type: `string`
    },
    
    customerId: {
      sql: `customer_id`,
      type: `string`
    },
    
    orderStatus: {
      sql: `order_status`,
      type: `string`
    },
    
    productCategoryNameEnglish: {
      sql: `product_category_name_english`,
      type: `string`
    },
    
    productCategoryNamePortuguese: {
      sql: `product_category_name_portuguese`,
      type: `string`
    },
    
    grossRevenue: {
      sql: `gross_revenue`,
      type: `string`
    },
    
    netRevenue: {
      sql: `net_revenue`,
      type: `string`
    },
    
    cogs: {
      sql: `cogs`,
      type: `string`
    },
    
    grossMargin: {
      sql: `gross_margin`,
      type: `string`
    },
    
    shippingLimitDate: {
      sql: `shipping_limit_date`,
      type: `time`
    },
    
    orderPurchaseAt: {
      sql: `order_purchase_at`,
      type: `time`
    },
    
    orderDeliveredCarrierAt: {
      sql: `order_delivered_carrier_at`,
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
