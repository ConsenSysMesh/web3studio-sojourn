# Sojourn

A Self-Sovereign Journal

## Contributing

You'll need to set up a [uPort App](https://appmanager.uport.me/). Once you have one,
create a file `.env.development` in the root of the directory and fill in the details like below.

```
UPORT_APP_NAME=Sojourn
UPORT_APP_ADDRESS=2onKAS55Vs9hGwDPsBT6DYHwAP1HJ3FsBXh
UPORT_PRIVATE_KEY=<YOUR_PRIVATE_KEY>
```

# Testing

### End to End Tests

Run `detox build` followed by `detox test` for end to end tests
