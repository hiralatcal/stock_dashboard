const config = {
    cognito_pool_id: "us-west-2_PvG4v8Z1D",
    cognito_backend_client_id: "5264mvlv0g43h8l5qdlkt1h2ar",
    cognito_backend_access_key: "stockMonitoring/local/backend",
    appsync_endpoint_url: "https://lymtfcfi4jbdbpu424vndfocza.appsync-api.us-west-2.amazonaws.com/graphql",
    appsync_region: "us-west-2",
    data_feed_key: "stockMonitoring/local/datafeed",
    feed_interval: "30min"
}

module.exports=config;