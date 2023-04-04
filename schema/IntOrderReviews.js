cube(`IntOrderReviews`, {
  sql: `SELECT * FROM reporting.int_order_reviews`,
  
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
    
    reviewAnsweredAtReview1: {
      sql: `review_answered_at_review_1`,
      type: `time`,
      title: `Review Answered at Review 1`
    },
    
    reviewAnsweredAtReview2: {
      sql: `review_answered_at_review_2`,
      type: `time`,
      title: `Review Answered at Review 2`
    },
    
    reviewAnsweredAtReview3: {
      sql: `review_answered_at_review_3`,
      type: `time`,
      title: `Review Answered at Review 3`
    }
  },
  
  dataSource: `default`
});
