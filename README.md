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

Run `yarn e2e` to run end to end tests. Because schemes other than debug and release are not trivial in react-native,
and because javascript environment variables are not trivial to pass in react-native,
there are two index files, index.ios.js which is the entry point for the regular app as it should be used in production,
and index.e2e.js, an entry point which is used for e2e tests. This is a temporary measure, as a way to test native modules
on the javascript side that are not yet integrated into the app (mainly for cryptography functions);
