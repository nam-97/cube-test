cube(`FctOrderReviews`, {
  sql: `SELECT * FROM reporting.fct_order_reviews`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [orderId, customerId]
    }
  },
  
  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`
    },
    
    customerId: {
      sql: `customer_id`,
      type: `string`
    },
    
    grossRevenue: {
      sql: `gross_revenue`,
      type: `string`
    },
    
    hasReview: {
      sql: `has_review`,
      type: `string`
    },
    
    orderPurchaseAt: {
      sql: `order_purchase_at`,
      type: `time`
    },
    
    review1AnsweredAt: {
      sql: `review_1_answered_at`,
      type: `time`,
      title: `Review 1 Answered at`
    },
    
    review2AnsweredAt: {
      sql: `review_2_answered_at`,
      type: `time`,
      title: `Review 2 Answered at`
    },
    
    review3AnsweredAt: {
      sql: `review_3_answered_at`,
      type: `time`,
      title: `Review 3 Answered at`
    }
  },
  
  dataSource: `default`
});
